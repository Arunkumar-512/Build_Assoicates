"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919951010418";

  const message =
    "Hello! I visited your website and I'm interested in your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex h-16 w-16 items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-xl shadow-black/30
        transition-all duration-300
        hover:scale-110 hover:bg-[#20ba5c]
        active:scale-95
        cursor-pointer
      "
    >
      <MessageCircle className="h-8 w-8" />

      <span
        className="
          pointer-events-none
          absolute -inset-1
          rounded-full bg-[#25D366]
          opacity-30
          motion-safe:animate-ping
        "
      />
    </a>
  );
}