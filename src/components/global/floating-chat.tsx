"use client"

import {
  useEffect,
  useRef,
  useState
} from "react"

import {
  MessageSquare,
  Mic,
  MicOff,
  Volume2,
  VolumeX
} from "lucide-react"

import ReactMarkdown from "react-markdown"

import { v4 as uuidv4 } from "uuid"

import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function FloatingChat() {

  // =========================
  // HYDRATION FIX
  // =========================

  const [mounted, setMounted] =
    useState(false)

  useEffect(() => {

    setMounted(true)

  }, [])

  // =========================
  // STATE
  // =========================

  const [open, setOpen] =
    useState(false)

  const [input, setInput] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const [voiceEnabled, setVoiceEnabled] =
    useState(true)

  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: "welcome-message",

        role: "assistant",

        content:
          "Hello 👋\nHow can Build Associates help you today?"
      }
    ])

  const [sessionId] =
    useState(uuidv4())

  // =========================
  // VOICE RECOGNITION
  // =========================

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

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
  // LOAD VOICES
  // =========================

  useEffect(() => {

    if (!mounted) return

    const loadVoices = () => {

      window.speechSynthesis.getVoices()
    }

    loadVoices()

    if (
      speechSynthesis.onvoiceschanged !== undefined
    ) {

      speechSynthesis.onvoiceschanged =
        loadVoices
    }

  }, [mounted])

  // =========================
  // QUICK ACTIONS
  // =========================

  const quickActions = [

    "House Plans",

    "Interior Design",

    "Villa Planning",

    "3D Visualization",

    "Pricing",

    "Schedule Consultation"
  ]

  // =========================
  // START LISTENING
  // =========================

  const startListening = () => {

    if (
      typeof window !== "undefined"
    ) {

      window.speechSynthesis.cancel()
    }

    resetTranscript()

    SpeechRecognition.startListening({

      continuous: true,

      language: "en-IN"
    })
  }

  // =========================
  // STOP LISTENING
  // =========================

  const stopListening = () => {

    SpeechRecognition.stopListening()

    const finalText =
      transcript.trim()

    setInput(finalText)

    setTimeout(() => {

      if (finalText) {

        handleSend(undefined, finalText)
      }

    }, 500)
  }

  // =========================
  // SPEAK FUNCTION
  // =========================

  const speak = (text: string) => {

    // DO NOT SPEAK IF MUTED

    if (!voiceEnabled) return

    if (
      typeof window === "undefined" ||
      !window.speechSynthesis
    ) {
      return
    }

    // STOP PREVIOUS SPEECH

    window.speechSynthesis.cancel()

    const utterance =
      new SpeechSynthesisUtterance(text)

    // =========================
    // FEMALE VOICE
    // =========================

    const voices =
      window.speechSynthesis.getVoices()

    const femaleVoice =

      voices.find((voice) =>
        voice.name.includes(
          "Google UK English Female"
        )
      )

      ||

      voices.find((voice) =>
        voice.name.includes("Samantha")
      )

      ||

      voices.find((voice) =>
        voice.name.includes("Jenny")
      )

      ||

      voices.find((voice) =>
        voice.name
          .toLowerCase()
          .includes("female")
      )

    if (femaleVoice) {

      utterance.voice =
        femaleVoice
    }

    // =========================
    // SETTINGS
    // =========================

    utterance.rate = 1

    utterance.pitch = 1.1

    utterance.volume = 1

    utterance.lang = "en-US"

    // =========================
    // SPEAK
    // =========================

    window.speechSynthesis.speak(
      utterance
    )
  }

  // =========================
  // TOGGLE VOICE
  // =========================

  const toggleVoice = () => {

    // =========================
    // MUTE
    // =========================

    if (voiceEnabled) {

      window.speechSynthesis.cancel()

      setVoiceEnabled(false)

      return
    }

    // =========================
    // UNMUTE
    // =========================

    setVoiceEnabled(true)

    // SPEAK LAST MESSAGE AGAIN

    const lastAssistantMessage =
      [...messages]
        .reverse()
        .find(
          (msg) =>
            msg.role === "assistant"
        )

    if (
      lastAssistantMessage?.content
    ) {

      setTimeout(() => {

        // DIRECT SPEAK
        const utterance =
          new SpeechSynthesisUtterance(
            lastAssistantMessage.content
          )

        const voices =
          window.speechSynthesis.getVoices()

        const femaleVoice =

          voices.find((voice) =>
            voice.name.includes(
              "Google UK English Female"
            )
          )

          ||

          voices.find((voice) =>
            voice.name.includes(
              "Samantha"
            )
          )

          ||

          voices.find((voice) =>
            voice.name.includes(
              "Jenny"
            )
          )

        if (femaleVoice) {

          utterance.voice =
            femaleVoice
        }

        utterance.rate = 1

        utterance.pitch = 1.1

        utterance.lang = "en-US"

        window.speechSynthesis.speak(
          utterance
        )

      }, 300)
    }
  }

  // =========================
  // SEND MESSAGE
  // =========================

  async function handleSend(
    e?: React.FormEvent,
    voiceText?: string
  ) {

    e?.preventDefault()

    const finalMessage =
      voiceText || input

    if (!finalMessage.trim()) return

    try {

      setLoading(true)

      // =========================
      // USER MESSAGE
      // =========================

      const userMessage: Message = {

        id: uuidv4(),

        role: "user",

        content: finalMessage
      }

      setMessages(prev => [

        ...prev,

        userMessage
      ])

      setInput("")

      // =========================
      // EMPTY AI MESSAGE
      // =========================

      const assistantId =
        uuidv4()

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

            message: finalMessage,

            sessionId
          })
        }
      )

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

      while (true) {

        const {
          done,
          value
        } = await reader.read()

        if (done) break

        const chunk =
          decoder.decode(value)

        fullText += chunk

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

      // =========================
      // FINAL RESPONSE
      // =========================

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

      // =========================
      // SPEAK RESPONSE
      // =========================

      speak(fullText)

    } catch (error) {

      console.error(error)

      setMessages(prev => [

        ...prev,

        {
          id: uuidv4(),

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
  // PREVENT HYDRATION ERRORS
  // =========================

  if (!mounted) {

    return null
  }

  // =========================
  // UI
  // =========================

  return (

    <>
      {/* FLOAT BUTTON */}

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
                Voice Architecture Consultant
              </div>

            </div>

            <div className="flex items-center gap-3">

              {/* VOLUME BUTTON */}

              <button
                type="button"
                onClick={toggleVoice}
              >

                {voiceEnabled
                  ? (
                    <Volume2
                      size={18}
                      className="text-green-400"
                    />
                  )
                  : (
                    <VolumeX
                      size={18}
                      className="text-gray-400"
                    />
                  )
                }

              </button>

              {/* CLOSE BUTTON */}

              <button
                onClick={() =>
                  setOpen(false)
                }
              >
                ✕
              </button>

            </div>

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
                  ${
                    message.role === "user"
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
                    ${
                      message.role === "user"
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

            {/* MIC BUTTON */}

            {browserSupportsSpeechRecognition && (

              <button

                type="button"

                onClick={
                  listening
                    ? stopListening
                    : startListening
                }

                className={`
                  px-4
                  rounded-xl
                  text-white
                  transition
                  ${
                    listening
                      ? "bg-red-500 animate-pulse"
                      : "bg-[#C4845C]"
                  }
                `}
              >

                {listening
                  ? <MicOff size={18} />
                  : <Mic size={18} />
                }

              </button>

            )}

            {/* SEND */}

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

          {/* LISTENING */}

          {listening && (

            <div className="px-4 pb-3 text-xs text-red-500">

              Listening...

            </div>
          )}

        </div>
      )}
    </>
  )
}