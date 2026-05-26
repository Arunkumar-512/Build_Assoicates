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
  // REFS
  // =========================

  const messagesEndRef =
    useRef<HTMLDivElement>(null)

  // =========================
  // AUTO SCROLL
  // =========================

  useEffect(() => {

    messagesEndRef.current
      ?.scrollIntoView({

        behavior: "smooth"
      })

  }, [messages])

  // =========================
  // SUGGESTIONS
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

      // =========================
      // USER MESSAGE
      // =========================

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

      // =========================
      // EMPTY ASSISTANT MESSAGE
      // =========================

      const assistantId =
        crypto.randomUUID()

      setMessages(prev => [

        ...prev,

        {
          id: assistantId,

          role: "assistant",

          content: ""
        }
      ])

      // =========================
      // API CALL
      // =========================

      const response = await fetch(
        "/api/chat-stream",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            message: currentInput,

            sessionId
          })
        }
      )

      // =========================
      // ERROR HANDLING
      // =========================

      if (!response.ok) {

        throw new Error(
          "Failed to fetch response"
        )
      }

      if (!response.body) {

        throw new Error(
          "No response body"
        )
      }

      // =========================
      // STREAM READER
      // =========================

      const reader =
        response.body.getReader()

      const decoder =
        new TextDecoder()

      let fullText = ""

      // =========================
      // READ STREAM
      // =========================

      while (true) {

        const { done, value } =
          await reader.read()

        if (done) break

        const chunk =
          decoder.decode(value)

        fullText += chunk

        // UPDATE STREAMED MESSAGE

        setMessages(prev =>

          prev.map(msg =>

            msg.id === assistantId

              ? {
                  ...msg,

                  content:
                    fullText + "▋"
                }

              : msg
          )
        )
      }

      // REMOVE CURSOR AFTER STREAM ENDS

      setMessages(prev =>

        prev.map(msg =>

          msg.id === assistantId

            ? {
                ...msg,

                content: fullText
              }

            : msg
        )
      )

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
  // ENTER KEY
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

      {/* =========================
          SUGGESTIONS
      ========================= */}

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

      {/* =========================
          CHAT CONTAINER
      ========================= */}

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

          {/* =========================
              MESSAGES
          ========================= */}

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

          {/* =========================
              LOADING
          ========================= */}

          {loading && (

            <div className="flex justify-start">

              <div
                className="
                  text-xs
                  text-gray-500
                "
              >

                Build Associates AI
                is analyzing your project...

              </div>

            </div>
          )}

          <div ref={messagesEndRef} />

        </div>

      </div>

      {/* =========================
          INPUT
      ========================= */}

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