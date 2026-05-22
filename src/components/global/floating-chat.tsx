"use client"

import { useEffect, useRef, useState } from "react"

import { MessageSquare } from "lucide-react"

import ReactMarkdown from "react-markdown"

import { v4 as uuidv4 } from "uuid"

type Message = {

  id: string

  role: "user" | "assistant"

  content: string
}

export default function FloatingChat() {

  // =========================
  // STATE
  // =========================

  const [open, setOpen] =
    useState(false)

  const [input, setInput] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Hello 👋\nHow can Build Associates help you today?"
      }
    ])

  const [sessionId] =
    useState(uuidv4())

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
  // QUICK ACTIONS
  // =========================

  const quickActions = [

    "House Plans",

    "Interior Design",

    "Villa Planning",

    "3D Visualization",

    "Pricing",

    "Book Consultation"
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

  // =========================
  // ENTER SUPPORT
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

    <>
      {/* FLOATING BUTTON */}
      <button

        onClick={() =>
          setOpen(!open)
        }

        className="
          fixed
          bottom-4
          right-4
          md:right-6
          z-50

          w-14
          h-14

          rounded-full
          bg-black
          text-white

          flex
          items-center
          justify-center

          shadow-lg
          hover:scale-110
          transition
        "
      >

        <MessageSquare size={28} />

      </button>

      {/* CHAT WINDOW */}
      {open && (

        <div
          className="
            fixed
            bottom-20
            right-4
            md:right-6
            z-50

            w-[95vw]
            sm:w-[380px]

            h-[85vh]
            sm:h-[650px]

            bg-white
            rounded-2xl
            shadow-2xl
            border

            flex
            flex-col

            overflow-hidden
          "
        >

          {/* HEADER */}
          <div
            className="
              bg-black
              text-white
              px-4
              py-4

              flex
              justify-between
              items-center
            "
          >

            <div>

              <div className="font-semibold">
                Build Associates AI
              </div>

              <div className="text-xs text-gray-300">
                Architecture Consultant
              </div>

            </div>

            <button
              onClick={() =>
                setOpen(false)
              }
            >
              ✕
            </button>

          </div>

          {/* QUICK ACTIONS */}
          <div
            className="
              flex
              gap-2
              overflow-x-auto
              p-3
              border-b
            "
          >

            {quickActions.map((item) => (

              <button

                key={item}

                onClick={() =>
                  setInput(item)
                }

                className="
                  whitespace-nowrap
                  text-sm
                  px-3
                  py-2
                  rounded-full
                  bg-gray-100
                  hover:bg-gray-200
                  transition
                "
              >

                {item}

              </button>
            ))}

          </div>

          {/* MESSAGES */}
          <div
            className="
              flex-1
              overflow-y-auto
              p-4
              space-y-4
            "
          >

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
                    px-4
                    py-3
                    rounded-2xl
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

            {/* LOADING */}
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

          {/* INPUT */}
          <form

            onSubmit={handleSend}

            className="
              border-t
              p-3
              flex
              gap-2
            "
          >

            <input

              value={input}

              onChange={(e) =>
                setInput(e.target.value)
              }

              onKeyDown={handleKeyDown}

              placeholder="
Ask about villas,
interiors,
pricing...
"

              className="
                flex-1
                border
                rounded-xl
                px-4
                py-3
                outline-none
                text-sm
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
                px-5
                rounded-xl
                text-sm
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
      )}
    </>
  )
}