"use client";

import { useEffect, useRef, useState } from "react";

export default function VoiceAgent() {

  const [listening, setListening] =
    useState(false);

  const [transcript, setTranscript] =
    useState("");

  const recognitionRef =
    useRef<any>(null);

  // =========================
  // START VOICE
  // =========================

  useEffect(() => {

    if (
      typeof window !== "undefined" &&
      "webkitSpeechRecognition" in window
    ) {

      const SpeechRecognition =
        (window as any)
          .webkitSpeechRecognition;

      const recognition =
        new SpeechRecognition();

      recognition.continuous = false;

      recognition.interimResults = false;

      recognition.lang = "en-US";

      recognition.onresult =
        async (event: any) => {

          const text =
            event.results[0][0]
              .transcript;

          setTranscript(text);

          // SEND TO AI
          await sendToAI(text);
        };

      recognition.onend = () => {
        setListening(false);
      };

      recognitionRef.current =
        recognition;
    }

  }, []);

  // =========================
  // SEND MESSAGE TO AI
  // =========================

  const sendToAI = async (
    text: string
  ) => {

    const res = await fetch(
      "/api/chat-stream",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          message: text,

          sessionId: "voice-user",
        }),
      }
    );

    const reader =
      res.body?.getReader();

    if (!reader) return;

    let aiText = "";

    while (true) {

      const {
        done,
        value,
      } = await reader.read();

      if (done) break;

      aiText +=
        new TextDecoder()
          .decode(value);
    }

    speak(aiText);
  };

  // =========================
  // SPEAK RESPONSE
  // =========================

  const speak = (
    text: string
  ) => {

    const utterance =
      new SpeechSynthesisUtterance(
        text
      );

    utterance.rate = 1;

    utterance.pitch = 1;

    utterance.lang = "en-US";

    speechSynthesis.speak(
      utterance
    );
  };

  // =========================
  // START LISTENING
  // =========================

  const startListening = () => {

    setListening(true);

    recognitionRef.current?.start();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <button
        onClick={startListening}
        className="
          rounded-full
          bg-[#181411]
          px-6
          py-4
          text-white
          shadow-2xl
        "
      >
        {listening
          ? "Listening..."
          : "Talk With AI"}
      </button>

      {transcript && (
        <div
          className="
            mt-3
            max-w-sm
            rounded-2xl
            bg-white
            p-4
            shadow-xl
          "
        >
          <p className="text-sm">
            {transcript}
          </p>
        </div>
      )}
    </div>
  );
}