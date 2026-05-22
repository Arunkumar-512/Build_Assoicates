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
        {/* =======================================================
    PREMIUM GLOBAL BACKGROUND - Cinematic Warm Dark
======================================================= */}

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
  {/* MAIN BACKGROUND */}
  <div className="absolute inset-0 bg-background" />

  {/* TOP LEFT WARM CLAY GLOW */}
  <div className="absolute left-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#8C5A46]/12 blur-3xl" />

  {/* TOP RIGHT SOFT COCOA GLOW */}
  <div className="absolute right-[-120px] top-[8%] h-[420px] w-[420px] rounded-full bg-[#4A3A32]/14 blur-3xl" />

  {/* CENTER WARM IVORY GLOW */}
  <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F3ECE4]/30 blur-3xl dark:bg-[#F3ECE4]/5" />

  {/* BOTTOM LEFT DUSTY CLAY GLOW */}
  <div className="absolute bottom-[-120px] left-[5%] h-[340px] w-[340px] rounded-full bg-[#8C5A46]/10 blur-3xl" />

  {/* BOTTOM RIGHT DEEP EARTH GLOW */}
  <div className="absolute bottom-[-140px] right-[-100px] h-[460px] w-[460px] rounded-full bg-[#2A2420]/16 blur-3xl" />

  {/* SUBTLE PREMIUM GRID */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,20,17,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,20,17,0.035)_1px,transparent_1px)] bg-[size:80px_80px] dark:bg-[linear-gradient(to_right,rgba(243,236,228,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,236,228,0.03)_1px,transparent_1px)]" />

  {/* CINEMATIC RADIAL FADE */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(243,236,228,0.55)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

  {/* NOISE TEXTURE */}
  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />
</div>

        {/* =======================================================
            APP LAYOUT
        ======================================================= */}

        <main className="relative flex min-h-screen flex-col">
          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <section className="relative flex-1">
            {children}
            <FloatingWhatsApp />
            <FloatingChat />

          </section>
        </main>
      </body>
    </html>
  );
}