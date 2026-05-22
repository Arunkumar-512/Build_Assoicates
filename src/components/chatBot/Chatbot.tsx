"use client"

import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import ReactMarkdown from "react-markdown"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function Chatbot() {

  // =========================
  // STATE
  // =========================

  const [input, setInput] = useState("")

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState<Message[]>([])

  const [sessionId] = useState(uuidv4())

  // =========================
  // AUTO SCROLL
  // =========================

  const messagesEndRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {

    messagesEndRef.current
      ?.scrollIntoView({

        behavior: "smooth"
      })

  }, [messages])

  // =========================
  // SUGGESTED QUESTIONS
  // =========================

  const suggestions = [

    "Villa planning",

    "Modern house design",

    "Interior design pricing",

    "2BHK floor plan",

    "Luxury elevation",

    "Modular kitchen ideas"
  ]

  // =========================
  // SEND MESSAGE
  // =========================

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

      // STREAM READER
      const reader =
        response.body?.getReader()

      const decoder =
        new TextDecoder()

      if (!reader) return

      // EMPTY ASSISTANT MESSAGE
      const assistantId =
        crypto.randomUUID()

      let assistantText = ""

      setMessages(prev => [

        ...prev,

        {
          id: assistantId,
          role: "assistant",
          content: ""
        }
      ])

      // STREAM LOOP
      while (true) {

        const {
          done,
          value
        } = await reader.read()

        if (done) break

        const chunk =
          decoder.decode(value)

        assistantText += chunk

        // TYPING EFFECT
        await new Promise(resolve =>

          setTimeout(resolve, 10)
        )

        setMessages(prev =>

          prev.map(msg =>

            msg.id === assistantId

              ? {
                  ...msg,
                  content: assistantText
                }

              : msg
          )
        )
      }

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

  // =========================
  // ENTER KEY SUPPORT
  // =========================

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

  // =========================
  // UI
  // =========================

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

          {messages.length === 0 && (

            <div
              className="
                h-full
                flex
                items-center
                justify-center
                text-gray-400
                text-center
              "
            >

              <div>

                <div className="text-2xl mb-2">
                  Build Associates AI
                </div>

                <div>
                  Ask about architecture,
                  interiors,
                  planning,
                  visualization,
                  or construction services.
                </div>

              </div>

            </div>
          )}

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

                  {/* STREAM CURSOR */}
                  {loading &&
                    message.role === "assistant" &&
                    message ===
                      messages[
                        messages.length - 1
                      ] && (

                      <span
                        className="
                          animate-pulse
                          ml-1
                        "
                      >
                        ▋
                      </span>
                    )
                  }

                </div>

              </div>

            </div>
          ))}

          {/* THINKING */}
          {loading &&
            messages.length > 0 &&
            messages[
              messages.length - 1
            ]?.role !== "assistant" && (

              <div className="flex justify-start">

                <div
                  className="
                    bg-gray-100
                    px-4
                    py-3
                    rounded-2xl
                    text-sm
                    animate-pulse
                  "
                >
                  Thinking...
                </div>

              </div>
            )
          }

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