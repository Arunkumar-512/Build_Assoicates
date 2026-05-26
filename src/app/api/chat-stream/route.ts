import { google } from "@ai-sdk/google"

import { streamText } from "ai"

import { buildSystemPrompt } from "@/lib/ai/prompts"

import { detectIntent } from "@/lib/ai/intent"

import { recommendServices } from "@/lib/ai/tools"

import { searchKnowledge } from "@/lib/ai/search-knowledge"

import { extractLead } from "@/lib/ai/extract-lead"

import { supabase } from "@/lib/supabase"

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
    // AI HELPERS
    // =========================

    const detectedIntent =
      detectIntent(message)

    const recommendedServices =
      recommendServices(message)

    const knowledgeResults =
      searchKnowledge(message)

    // =========================
    // LEAD EXTRACTION
    // =========================

    const leadData =
      extractLead(message)

    console.log("LEAD DATA:")

    console.log(leadData)

    // =========================
    // SAVE LEAD
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

        console.log("LEAD SAVE ERROR")

        console.log(error)

      } else {

        console.log("LEAD SAVED")
      }
    }

    // =========================
    // SYSTEM PROMPT
    // =========================

    const system =
      buildSystemPrompt({

        intent: detectedIntent,

        services:
          recommendedServices,

        knowledge:
          knowledgeResults
      })

    // =========================
    // FETCH CHAT HISTORY
    // =========================

    const {
      data: previousMessages,
      error: historyError
    } = await supabase

      .from("chat_history")

      .select("*")

      .eq("session_id", sessionId)

      .order("created_at", {
        ascending: true
      })

      .limit(8)

    if (historyError) {

      console.log(
        "History Error:"
      )

      console.log(historyError)
    }

    // =========================
    // FORMAT HISTORY
    // =========================

    const historyMessages =

      previousMessages?.map(msg => ({

        role:
          msg.role as
            | "user"
            | "assistant",

        content: msg.message
      })) || []

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
    // STREAM AI RESPONSE
    // =========================

    const result = streamText({

      model: google("gemini-2.5-flash"),

      system,

      // maxTokens: 120,

      messages: [

        {
          role: "assistant",

          content: `

You are a premium architecture consultant for Build Associates.

RULES:
- Keep replies under 70 words
- Avoid generic explanations
- Avoid long educational answers
- Focus on customer projects
- Mention Build Associates naturally
- Guide users toward consultation
- Sound premium and conversational
- Ask only 1–2 questions maximum
- Suggest consultation naturally

`
        },

        ...historyMessages,

        {
          role: "user",

          content: message
        }
      ],

      onFinish: async (event) => {

        console.log("AI FINISHED")

        console.log(event.text)

        const { error } = await supabase

          .from("chat_history")

          .insert({

            session_id: sessionId,

            role: "assistant",

            message: event.text
          })

        if (error) {

          console.log(
            "AI SAVE ERROR"
          )

          console.log(error)

        } else {

          console.log(
            "AI MESSAGE SAVED"
          )
        }
      }
    })

    // =========================
    // RETURN STREAM
    // =========================

    return result.toTextStreamResponse()

  } catch (error) {

    console.log(error)

    return new Response(
      "Streaming failed",
      {
        status: 500
      }
    )
  }
}