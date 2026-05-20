"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919951010418"; // ← Change to your number (with country code, no + or spaces)
  const message = "Hello! I visited your website and I'm interested in your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition-all duration-300 hover:scale-110 hover:bg-[#20ba5c] active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      
      {/* Optional small pulse animation */}
      <span className="absolute -inset-1 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}