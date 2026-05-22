import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import FloatingChat from "@/components/global/floating-chat";
import FloatingWhatsApp from "@/components/global/floating-whatsapp";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Build Associates | Premium Architecture & Interiors",

  description:
    "Premium architecture, elegant interiors, structural engineering, smart homes, and immersive 3D visualization solutions.",

  keywords: [
    "Architecture",
    "Interior Design",
    "Structural Engineering",
    "Smart Homes",
    "House Plans",
    "3D Visualization",
    "Construction",
    "Modern Homes",
    "Build Associates",
  ],

  authors: [{ name: "Build Associates" }],

  creator: "Build Associates",

  metadataBase: new URL("https://buildassociates.com"),

  openGraph: {
    title: "Build Associates",
    description:
      "Premium architecture, modern interiors, elegant spaces, and smart structural solutions.",
    url: "https://buildassociates.com",
    siteName: "Build Associates",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Build Associates",
    description:
      "Luxury architecture and modern construction solutions for future-ready living.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} scroll-smooth`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-background font-jakarta text-foreground antialiased selection:bg-accent selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-background" />

          <div className="absolute left-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#8C5A46]/10 blur-[140px]" />

          <div className="absolute right-[-180px] top-[5%] h-[520px] w-[520px] rounded-full bg-[#5C4638]/10 blur-[140px]" />

          <div className="absolute left-1/2 top-[35%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#F3ECE4]/40 blur-[160px] dark:bg-[#F3ECE4]/5" />

          <div className="absolute bottom-[-180px] left-[0%] h-[480px] w-[480px] rounded-full bg-[#8C5A46]/10 blur-[140px]" />

          <div className="absolute bottom-[-180px] right-[0%] h-[520px] w-[520px] rounded-full bg-[#2A2420]/12 blur-[160px]" />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,20,17,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,20,17,0.03)_1px,transparent_1px)] bg-[size:90px_90px] dark:bg-[linear-gradient(to_right,rgba(243,236,228,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,236,228,0.02)_1px,transparent_1px)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(243,236,228,0.5)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.45)_100%)]" />

          <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay bg-[url('/noise.png')]" />

          <div className="absolute left-0 top-[20%] h-px w-full bg-gradient-to-r from-transparent via-[#8C5A46]/10 to-transparent" />
          <div className="absolute left-0 top-[60%] h-px w-full bg-gradient-to-r from-transparent via-[#8C5A46]/10 to-transparent" />
        </div>

        <main className="relative flex min-h-screen flex-col">
          <Navbar />

          <section className="relative flex-1">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background/60 to-transparent" />

            <div className="relative z-20">
              {children}
            </div>

            <FloatingWhatsApp />
            <FloatingChat />
          </section>

          <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[80%] -translate-x-1/2 rounded-full bg-[#8C5A46]/5 blur-3xl" />
        </main>
      </body>
    </html>
  );
}