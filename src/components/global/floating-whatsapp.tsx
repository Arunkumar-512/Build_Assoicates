"use client"

import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {

  const phoneNumber = "919390392812"

  const message =
    "Hello Build Associates, I need consultation."

  const whatsappLink = `
https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}
`

  return (

    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-24
        right-4
        md:right-6
        z-50

        flex
        items-center
        justify-center

        w-14
        h-14

        rounded-full
        bg-green-500
        text-white

        shadow-lg
        hover:scale-110
        transition
      "
    >

      <MessageCircle size={28} />

    </a>
  )
}