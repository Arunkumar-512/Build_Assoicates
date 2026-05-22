"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Social", href: "/social" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          GLASSMORPHIC HEADER
      ===================================================== */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/40 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/30">
        <div className="flex h-[92px] w-full items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#8C5A46] to-[#5C4638] shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-2xl font-black text-[#F3ECE4]">B</span>

              <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div>
              <h1 className="text-lg font-black tracking-[-0.04em] text-foreground lg:text-xl">
                BUILD ASSOCIATES
              </h1>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Architecture & Interiors
              </p>
            </div>
          </Link>

          {/* NAV LINKS (DESKTOP) */}
          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-background/30 p-2 backdrop-blur-xl lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA + MOBILE BUTTON */}
          <div className="flex items-center gap-3">

            {/* CTA */}
            <Button className="hidden h-12 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:brightness-110 lg:flex">
              Get Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-background/40 backdrop-blur-xl lg:hidden"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* =====================================================
          MOBILE DRAWER (GLASSMORPHIC)
      ===================================================== */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[80%] max-w-sm border-l border-white/10 bg-background/70 backdrop-blur-2xl shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <h2 className="text-sm font-bold text-foreground">Menu</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-background/40"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Button className="mt-4 h-12 w-full rounded-xl bg-accent text-accent-foreground" onClick={() => setIsOpen(false)}>
            Get Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}