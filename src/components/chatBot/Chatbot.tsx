"use client"

import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import ReactMarkdown from "react-markdown"
import VoiceAgent from "../global/voice-agent"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function Chatbot() {

 
  const [input, setInput] = useState("")

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Hello 👋\nHow can Build Associates help you today?"
    }
  ])

  const [sessionId] = useState(uuidv4())



  const messagesEndRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {

    messagesEndRef.current
      ?.scrollIntoView({

        behavior: "smooth"
      })

  }, [messages])



  const suggestions = [

    "Villa planning",

    "Modern house design",

    "Interior design pricing",

    "2BHK floor plan",

    "Luxury elevation",

    "Modular kitchen ideas"
  ]

  
  async function handleSend(
    e?: React.FormEvent
  ) {

    e?.preventDefault()

    if (!input.trim()) return

    try {

      setLoading(true)

      // USER MESSAGE
      const userMessage: Message = {

        id: crypto.randomUUID(),

        role: "user",

        content: input
      }

      // ADD USER MESSAGE
      setMessages(prev => [

        ...prev,

        userMessage
      ])

      const currentInput = input

      setInput("")

      // API CALL
      const response = await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          message: currentInput,

          sessionId
        })
      })

      // ERROR HANDLING
      if (!response.ok) {

        throw new Error(
          "Failed to fetch response"
        )
      }

      // JSON RESPONSE
      const data =
        await response.json()

      // ASSISTANT MESSAGE
      const assistantMessage: Message = {

        id: crypto.randomUUID(),

        role: "assistant",

        content: data.reply
      }

      // ADD ASSISTANT MESSAGE
      setMessages(prev => [

        ...prev,

        assistantMessage
      ])

    } catch (error) {

      console.error(error)

      setMessages(prev => [

        ...prev,

        {
          id: crypto.randomUUID(),

          role: "assistant",

          content:
            "Something went wrong. Please try again."
        }
      ])

    } finally {

      setLoading(false)
    }
  }

    

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {

    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {

      e.preventDefault()

      handleSend()
    }
  }

  return (

    <div className="w-full max-w-3xl mx-auto">

      {/* SUGGESTIONS */}
      <div className="flex flex-wrap gap-2 mb-4">

        {suggestions.map((question) => (

          <button

            key={question}

            onClick={() =>
              setInput(question)
            }

            className="
              border
              px-3
              py-2
              rounded-full
              text-sm
              hover:bg-gray-100
              transition
            "
          >

            {question}

          </button>
        ))}

      </div>

      {/* CHAT CONTAINER */}
      <div
        className="
          h-[650px]
          overflow-y-auto
          border
          rounded-3xl
          p-6
          bg-white
          shadow-sm
        "
      >

        <div className="space-y-6">

          {/* MESSAGES */}
          {messages.map((message) => (

            <div

              key={message.id}

              className={`

                flex

                ${message.role === "user"

                  ? "justify-end"

                  : "justify-start"
                }
              `}
            >

              <div
                className={`

                  max-w-[85%]
                  px-5
                  py-4
                  rounded-3xl
                  text-sm
                  whitespace-pre-wrap
                  leading-7

                  ${message.role === "user"

                    ? "bg-black text-white"

                    : "bg-gray-100 text-black"
                  }
                `}
              >

                <div className="prose prose-sm max-w-none">

                  <ReactMarkdown>

                    {message.content}

                  </ReactMarkdown>

                </div>

              </div>

            </div>
          ))}

          {/* THINKING */}
          {loading && (

            <div className="flex justify-start">

              <div
                className="
                  bg-gray-100
                  px-4
                  py-3
                  rounded-2xl
                  text-sm
                "
              >

                <div className="flex gap-1">

                  <span className="animate-bounce">
                    •
                  </span>

                  <span
                    className="
                      animate-bounce
                      delay-100
                    "
                  >
                    •
                  </span>

                  <span
                    className="
                      animate-bounce
                      delay-200
                    "
                  >
                    •
                  </span>

                </div>

              </div>

            </div>
          )}

          <div ref={messagesEndRef} />

        </div>

      </div>

      {/* INPUT */}
      <form

        onSubmit={handleSend}

        className="
          flex
          gap-3
          mt-4
        "
      >

        <input

          value={input}

          onChange={(e) =>
            setInput(e.target.value)
          }

          onKeyDown={handleKeyDown}

          placeholder="
Ask about house plans,
interiors,
villa projects...
"

          className="
            flex-1
            border
            rounded-2xl
            px-5
            py-4
            outline-none
            focus:ring-2
            focus:ring-black
          "
        />
        <VoiceAgent />

        <button

          type="submit"

          disabled={loading}

          className="
            bg-black
            text-white
            px-8
            rounded-2xl
            disabled:opacity-50
          "
        >

          {loading
            ? "..."
            : "Send"
          }

        </button>

      </form>

    </div>
  )
}