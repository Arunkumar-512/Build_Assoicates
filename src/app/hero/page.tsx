"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Camera,
  Play,
  Star,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="relative h-[88vh] min-h-[720px] w-full overflow-hidden bg-card">

          {/* BG IMAGE */}
          <div className="absolute inset-0">
            <Image
              src="/home.jpg"
              alt="Luxury Villa"
              fill
              priority
              className="object-cover object-center"
            />

            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-primary/40" />

            {/* <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-background via-background/95 via-45% to-transparent" /> */}

            {/* GLOW */}
            <div className="absolute left-[10%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex h-full items-center">
            <div className="premium-container lg:w-[45%]">

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                  Build Better Futures
                </p>

                <h1 className="heading-xl text-primary">
                  Modern Designs.
                  <br />
                  Smart Structures.
                  <br />
                  <span className="gradient-text">
                    Better Living.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                  We create innovative house plans, elegant interiors,
                  strong structures, and immersive 2D & 3D architectural
                  visualizations.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="primary-button">
                    Explore Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="secondary-button"
                  >
                    Get Consultation
                  </Button>
                </div>

                <div className="mt-12 flex flex-wrap gap-10">
                  {[
                    ["250+", "Projects"],
                    ["12+", "Experience"],
                    ["98%", "Satisfaction"],
                  ].map((item, index) => (
                    <div key={index}>
                      <h3 className="text-3xl font-black text-primary">
                        {item[0]}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {item[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="premium-container py-20">
        <Card className="premium-card overflow-hidden">

          <CardContent className="p-4 lg:p-5">
            <div className="flex flex-col gap-5 lg:flex-row">

              {/* LEFT IMAGE */}
              <div className="relative overflow-hidden rounded-[26px] lg:w-[30%]">
                <Image
                  src="/2.jpg"
                  alt="Architecture"
                  width={1000}
                  height={700}
                  className="h-[260px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-primary/10" />

                <button className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110">
                  <Play
                    className="fill-accent text-accent"
                    size={22}
                  />
                </button>
              </div>

              {/* RIGHT CONTENT */}
              <div className="relative overflow-hidden rounded-[26px] bg-supporting lg:w-[70%]">

                <Image
                  src="/3.jpg"
                  alt="Background Architecture"
                  fill
                  className="object-cover object-right opacity-[0.08]"
                />

                <div className="relative z-10 flex h-full items-center px-7 py-7 lg:px-10">
                  <div className="max-w-3xl">

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                      Building Better Futures
                    </p>

                    <h2 className="heading-md text-primary">
                      Build Associates
                    </h2>

                    <h3 className="mt-2 text-lg font-semibold text-details">
                      Designing Spaces. Delivering Trust.
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                      We offer architecture, structural engineering,
                      interiors, planning, and premium construction consultancy.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
                      {[
                        "Innovative Designs",
                        "Smart Structures",
                        "Quality Assurance",
                        "On-Time Delivery",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                            <Star
                              className="text-accent"
                              size={16}
                            />
                          </div>

                          <p className="text-sm font-semibold text-primary">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="premium-container pb-16">
        <div className="grid gap-6 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="heading-md text-primary">
                Featured <span className="gradient-text">Projects</span>
              </h2>

              <Button variant="ghost" className="text-accent hover:bg-accent/10">
                View All →
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {["5.jpg", "6.jpg", "7.jpg", "2.jpg"].map((img, i) => (
                <Card
                  key={i}
                  className="overflow-hidden rounded-[22px] border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-premium"
                >
                  <Image
                    src={`/${img}`}
                    alt="Project"
                    width={500}
                    height={400}
                    className="h-[160px] w-full object-cover"
                  />

                  <CardContent className="p-4">
                    <h3 className="text-sm font-semibold text-primary">
                      Modern Villa
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Contemporary Design
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="mb-5">
              <h2 className="heading-md text-primary">
                Before <span className="gradient-text">/ After</span>
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-[26px] shadow-premium">
              <Image
                src="/3.jpg"
                alt="Before After"
                width={1200}
                height={700}
                className="h-[320px] w-full object-cover"
              />

              <div className="absolute inset-y-0 left-1/2 w-[3px] bg-white/90" />

              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl text-primary font-bold">
                ↔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="premium-container pb-20">
        <Card className="premium-card">

          <CardContent className="p-7">
            <div className="mb-8">
              <h2 className="heading-md text-primary">
                Our Construction <span className="gradient-text">Process</span>
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-5">
              {[
                "Consultation",
                "Planning",
                "Design",
                "Construction",
                "Handover",
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border border-border bg-supporting p-5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 font-bold text-accent">
                    0{i + 1}
                  </div>

                  <h3 className="text-base font-bold text-primary">
                    {step}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Premium execution with modern planning.
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ================= VIDEO REELS ================= */}
      <section className="premium-container pb-20">

        <div className="mb-7">
          <h2 className="heading-md text-primary">
            Video Reels &{" "}
            <span className="gradient-text">
              Construction Tips
            </span>
          </h2>

          <p className="mt-2 text-base text-muted-foreground">
            Smart architecture reels and insights.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {["2.jpg", "3.jpg", "4.jpg", "5.jpg"].map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[28px] shadow-premium"
            >
              <Image
                src={`/${img}`}
                alt="Reel"
                width={800}
                height={500}
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

              <button className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl transition-all duration-300 hover:scale-110">
                <Play
                  className="fill-accent text-accent"
                  size={22}
                />
              </button>

              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-base font-bold text-white">
                  Modern Construction Tips
                </h3>

                <p className="mt-1 text-xs text-slate-200">
                  Smart building techniques and ideas.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}
      <section className="premium-container pb-24">
        <div className="relative overflow-hidden rounded-[42px] bg-primary p-8 shadow-premium lg:p-14">

          <div className="absolute -left-20 top-0 h-[280px] w-[280px] rounded-full bg-accent/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Stay Connected
              </p>

              <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-white lg:text-5xl">
                Follow Our
                <br />
                Design Journey
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Explore architecture, interiors, construction updates,
                and premium building inspiration through our social platforms.
              </p>

              <div className="mt-8 flex flex-wrap gap-8">
                {[
                  ["10K+", "Followers"],
                  ["500+", "Posts"],
                  ["120+", "Video Reels"],
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-black text-white">
                      {item[0]}
                    </h3>

                    <p className="mt-1 text-sm text-slate-300">
                      {item[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid w-full max-w-xl gap-4 sm:grid-cols-3">

              {[
                {
                  icon: <Camera className="h-5 w-5 text-accent" />,
                  title: "Instagram",
                },
                {
                  icon: <Video className="h-5 w-5 text-accent" />,
                  title: "YouTube",
                },
                {
                  icon: <span className="text-xl font-bold text-accent">f</span>,
                  title: "Facebook",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Explore premium architecture content.
                  </p>

                  <button className="mt-5 text-sm font-semibold text-accent">
                    Visit →
                  </button>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="premium-container pb-24">

        <div className="mb-8 text-center">
          <h2 className="text-4xl font-black tracking-tight text-primary">
            What Our{" "}
            <span className="gradient-text">
              Clients Say
            </span>
          </h2>

          <p className="mt-3 text-base text-muted-foreground">
            Trusted by homeowners and commercial clients.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              className="premium-card"
            >
              <CardContent className="p-7">

                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="/profile.jpg" />
                    <AvatarFallback>BA</AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="text-base font-bold text-primary">
                      Arun Prakash
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Homeowner
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  Excellent team with modern ideas and professional execution.
                  They delivered beyond expectations with elegant design.
                </p>

                <div className="mt-5 flex text-accent">
                  ★★★★★
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}