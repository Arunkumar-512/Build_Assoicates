import { recommendServices } from "@/lib/ai/tools"
import { detectIntent } from "@/lib/ai/intent"
import { extractLead } from "@/lib/ai/extract-lead"
import { buildSystemPrompt } from "@/lib/ai/prompts"
import { searchKnowledge } from "@/lib/ai/search-knowledge"

import { supabase } from "@/lib/supabase"

import { google } from "@ai-sdk/google"

import { streamText } from "ai"

export async function POST(req: Request) {

  try {

    // =========================
    // REQUEST DATA
    // =========================

    const {
      message,
      sessionId
    } = await req.json()

    // =========================
    // AI TOOLS
    // =========================

    // SERVICE RECOMMENDATION
    const recommendedServices =
      recommendServices(message)

    // INTENT DETECTION
    const detectedIntent =
      detectIntent(message)

    // KNOWLEDGE SEARCH (RAG)
    const knowledgeResults =
      searchKnowledge(message)

    // LEAD EXTRACTION
    const leadData =
      extractLead(message)

    // =========================
    // DEBUGGING
    // =========================

    console.log("Detected Intent:")
    console.log(detectedIntent)

    console.log("Recommended Services:")
    console.log(recommendedServices)

    console.log("Knowledge Results:")
    console.log(knowledgeResults)

    console.log("Lead Data:")
    console.log(leadData)

    // =========================
    // SAVE LEAD TO DATABASE
    // =========================

    if (leadData.phone) {

      const { error } = await supabase

        .from("leads")

        .insert({

          phone: leadData.phone,

          message,

          intent: detectedIntent
        })

      if (error) {

        console.log("Lead Save Error:")
        console.log(error)

      } else {

        console.log("Lead Saved To Database")
      }
    }

    // =========================
    // SAVE USER MESSAGE
    // =========================

    await supabase

      .from("chat_history")

      .insert({

        session_id: sessionId,

        role: "user",

        message
      })

    // =========================
    // FETCH MEMORY
    // =========================

    const {
      data: previousMessages,
      error: historyError
    } = await supabase

      .from("chat_history")

      .select("*")

      .eq("session_id", sessionId)

      .order("created_at", {
        ascending: false
      })

      .limit(10)

    if (historyError) {

      console.log("History Error:")
      console.log(historyError)
    }

    // =========================
    // BUILD CONVERSATION HISTORY
    // =========================

    const conversationHistory =

      previousMessages

        ?.reverse()

        .map(msg =>

          `${msg.role}: ${msg.message}`
        )

        .join("\n")

    // =========================
    // SYSTEM PROMPT
    // =========================

    const system = buildSystemPrompt({

      intent: detectedIntent,

      services: recommendedServices,

      knowledge: knowledgeResults
    })

    // =========================
    // USER PROMPT
    // =========================

    const prompt = `

Conversation History:
${conversationHistory}

Current User Message:
${message}

`

    // =========================
    // AI GENERATION
    // =========================

    let result

    try {

      // PRIMARY MODEL
      result = streamText({

        model: google("gemini-2.5-flash"),

        system,

        prompt
      })

    } catch (primaryError) {

      console.log("Primary model failed:")
      console.log(primaryError)

      // FALLBACK MODEL
      result = streamText({

        model: google("gemini-2.0-flash"),

        system,

        prompt
      })
    }

    // =========================
    // RETURN STREAM RESPONSE
    // =========================

    return result.toTextStreamResponse()

  } catch (error) {

    console.error("API ERROR:", error)

    return Response.json({

      reply:
        "Our AI assistant is currently experiencing high traffic. Please try again in a few seconds."
    })
  }
}