"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ArrowRight,
  Menu,
  X,
  Phone,
} from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);

  // Check if current route is admin or login page
  const isAdminRoute = pathname?.startsWith('/admin') || pathname?.startsWith('/login');
  
  // Don't render navbar on admin or login pages
  if (isAdminRoute) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";
      
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-primary/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            : "backdrop-blur-2xl bg-transparent"
        }`}
      >
        <div className="premium-container">
          <div className="flex h-[84px] items-center justify-between">

            {/* =========================================================
                LOGO
            ========================================================= */}
            <Link
              href="/"
              className="group relative z-50 flex items-center gap-4"
            >
              {/* LOGO ICON */}
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-primary shadow-lg transition-all duration-300 group-hover:scale-[1.04]">

                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

                <span className="relative text-xl font-black text-white">
                  B
                </span>
              </div>

              <div className="">
                <h1 className="text-[15px] font-black uppercase tracking-[0.12em] text-primary">
                  Associates
                </h1>

                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-details/70">
                  Architecture & Interiors
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex">
              <div className="flex items-center gap-1 rounded-full border border-border bg-white/80 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl">

                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-white shadow-lg"
                          : "text-details hover:bg-supporting hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="flex items-center gap-3">

              <div className="hidden xl:flex items-center gap-3 rounded-full border border-border bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-primary/60">
                    Call Us
                  </p>

                  <p className="text-sm font-semibold text-primary">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <Button className="hidden h-12 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(140,90,70,0.25)] transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 lg:flex">
                Get Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <button
                onClick={() => setIsOpen(true)}
                className="relative z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white/80 shadow-sm backdrop-blur-xl transition-all duration-300 hover:bg-supporting lg:hidden"
              >
                <Menu className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[84px]" />

    
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      
      <div
        className={`fixed right-0 top-0 z-[70] h-screen w-[86%] max-w-sm overflow-y-auto border-l border-white/10 bg-white/95 shadow-2xl backdrop-blur-3xl transition-transform duration-500 lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-20 border-b border-border bg-white/90 px-5 py-5 backdrop-blur-xl">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary">
                <span className="text-lg font-black text-white">
                  B
                </span>
              </div>

              <div>
                <h2 className="text-sm font-black uppercase tracking-[0.12em] text-primary">
                  Build Associates
                </h2>

                <p className="text-[10px] uppercase tracking-[0.2em] text-details/60">
                  Premium Design Studio
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-supporting/60"
            >
              <X className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>

        <div className="px-5 py-6">

          <div className="space-y-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "border border-transparent text-details hover:border-border hover:bg-supporting"
                  }`}
                >
                  <span>{link.name}</span>

                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isActive
                        ? "translate-x-0"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] bg-primary p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              Need Assistance?
            </p>

            <h3 className="mt-3 text-2xl font-black leading-tight">
              Start Your
              <br />
              Dream Project
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Connect with our experts for architecture,
              interiors, and construction consultation.
            </p>

            <Button
              onClick={() => setIsOpen(false)}
              className="mt-6 h-12 w-full rounded-2xl bg-primary text-sm font-semibold text-white hover:bg-primary"
            >
              Get Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-6 rounded-[28px] border border-border bg-supporting/40 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-details/60">
              Contact
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-semibold text-primary">
                  +91 98765 43210
                </p>

                <p className="text-xs text-details/60">
                  Mon - Sat / 9AM - 6PM
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  info@buildassociates.com
                </p>

                <p className="text-xs text-details/60">
                  Quick Response Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}