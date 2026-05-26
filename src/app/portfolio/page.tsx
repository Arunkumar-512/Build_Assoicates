"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

import {
  ArrowRight,
  Play,
  Building2,
  Users,
  BadgeCheck,
  Ruler,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const categories = [
  "All Projects",
  "Residential",
  "Villas",
  "Duplex",
  "Interiors",
  "Commercial",
  "Structures",
  "3D Models",
];

const projects = [
  {
    title: "Serenity Villa",
    type: "Villas",
    location: "Bangalore",
    size: "5,800 Sq.ft",
    image: "/9.jpg",
  },
  {
    title: "Harmony Duplex",
    type: "Duplex",
    location: "Hyderabad",
    size: "3,200 Sq.ft",
    image: "/10.jpg",
  },
  {
    title: "Urban Oasis",
    type: "Residential",
    location: "Chennai",
    size: "4,100 Sq.ft",
    image: "/11.jpg",
  },
  {
    title: "Summit Business Park",
    type: "Commercial",
    location: "Pune",
    size: "25,000 Sq.ft",
    image: "/12.jpg",
  },
  {
    title: "Luxury Living",
    type: "Interiors",
    location: "Mumbai",
    size: "2,600 Sq.ft",
    image: "/13.jpg",
  },
  {
    title: "TechPark Structure",
    type: "Structures",
    location: "Bangalore",
    size: "18,000 Sq.ft",
    image: "/14.jpg",
  },
  {
    title: "Hilltop Residence",
    type: "3D Models",
    location: "Coorg",
    size: "4,500 Sq.ft",
    image: "/15.jpg",
  },
  {
    title: "Palm Residency",
    type: "Residential",
    location: "Kerala",
    size: "3,900 Sq.ft",
    image: "/19.jpg",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function PortfolioPage() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] =
    useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter(
        (project) => project.type === selectedCategory
      );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">

      <section className="relative min-h-screen overflow-hidden border-b border-border">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <Image
            src="/19.jpg"
            alt="Portfolio Hero"
            fill
            priority
            className="object-cover object-center"
          />

          {/* CLEAN PREMIUM OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />

          {/* SOFT LUXURY GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

          {/* SUBTLE LIGHT */}
          <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-amber-300/10 blur-3xl" />

        </div>

        <div className="relative z-20 flex min-h-screen items-center">
          <div className="premium-container">

            <div className="grid items-center gap-14 lg:grid-cols-[1fr_420px]">

              {/* LEFT CONTENT */}
              <div className="max-w-5xl">

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-xl"
                >
                  Signature Portfolio
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl xl:text-[92px]"
                >
                  Spaces That
                  <br />
                  Define Modern
                  <br />

                  <span className="text-white/70">
                    Luxury Living
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  className="mt-8 max-w-2xl text-lg leading-9 text-white/75"
                >
                  Explore premium architecture, interiors,
                  commercial spaces and structural innovations
                  crafted with timeless aesthetics and modern precision.
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  className="mt-10 flex flex-wrap gap-5"
                >

                  <Button
                    className="h-14 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-500 hover:scale-[1.03] hover:bg-amber-300  cursor-pointer"
                  >
                    Explore Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="h-14 rounded-full border border-white/20 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:text-amber-400 cursor-pointer"
                  >
                    Watch Showcase
                  </Button>

                </motion.div>

                {/* STATS */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={5}
                  className="mt-16 grid max-w-3xl grid-cols-3 gap-8 border-t border-white/10 pt-8"
                >
                  {[
                    ["350+", "Projects"],
                    ["12+", "Experience"],
                    ["5.2M+", "Sq.ft Designed"],
                  ].map((item, index) => (
                    <div key={index}>
                      <h3 className="text-4xl font-black text-white">
                        {item[0]}
                      </h3>

                      <p className="mt-2 text-sm text-white/60">
                        {item[1]}
                      </p>
                    </div>
                  ))}
                </motion.div>

              </div>

              {/* RIGHT CARD */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="hidden lg:block"
              >

                <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-4 backdrop-blur-2xl">

                  <div className="relative overflow-hidden rounded-[28px]">

                    <Image
                      src="/13.jpg"
                      alt="Featured"
                      width={700}
                      height={900}
                      className="h-[520px] w-full object-cover transition duration-[1400ms] hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-7">

                      <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                        Featured Project
                      </p>

                      <h3 className="mt-3 text-3xl font-bold text-white">
                        Luxury Living
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/70">
                        Elegant interior architecture designed for
                        modern premium lifestyles.
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>
          </div>
        </div>
      </section>
      {/* CATEGORY FILTER */}
      <section className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-2xl">
        <div className="premium-container py-5">

          <div className="flex flex-wrap items-center gap-3">

            {categories.map((item) => (
              <Button
                key={item}
                variant="outline"
                onClick={() => setSelectedCategory(item)}
                className={`h-11 rounded-full px-5 text-xs font-semibold tracking-wide transition-all duration-300 ${selectedCategory === item
                    ? "border-accent bg-primary text-accent hover:bg-acce"
                    : "border-border bg-card hover:border-accent/30 hover:bg-secondary"
                  }`}
              >
                {item}
              </Button>
            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="premium-container py-24">

        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Curated Projects
            </p>

            <h2 className="mt-4 heading-lg text-primary">
              Timeless Architecture
              <span className="block gradient-text">
                Crafted With Precision
              </span>
            </h2>
          </div>

        </div>

        <div className="grid auto-rows-[240px] gap-7 md:grid-cols-2 xl:grid-cols-4">

          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className={`group relative overflow-hidden rounded-[36px] ${index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 3
                    ? "xl:row-span-2"
                    : "row-span-1"
                }`}
            >

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-[1400ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-90" />

              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl">
                {project.type}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">

                <div className="translate-y-5 transition duration-500 group-hover:translate-y-0">

                  <p className="text-sm text-white/60">
                    {project.location} • {project.size}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-4 opacity-0 transition duration-500 group-hover:opacity-100">

                    <Button
                      size="sm"
                      className="rounded-full bg-white px-5 text-black hover:bg-white"
                    >
                      View Project
                    </Button>

                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </button>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* THIS SECTION REMAINS EXACTLY SAME */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-card/40" />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

        <div className="premium-container relative z-10">

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

            <Card className="premium-card overflow-hidden">

              <div className="relative h-full min-h-[580px] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/videos/video1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">


                  <p className="text-xs uppercase tracking-[0.35em] text-accent">
                    Project Walkthrough
                  </p>

                  <h3 className="mt-4 max-w-xl text-5xl font-black leading-tight">
                    Modern Farmhouse
                    Experience
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                    A cinematic walkthrough showcasing architectural elegance,
                    luxury interiors and structural excellence.
                  </p>

                </div>

              </div>
            </Card>

            <div className="flex flex-col gap-8">

              <Card className="premium-card flex-1">
                <CardContent className="p-9">

                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                    Client Experience
                  </p>

                  <p className="mt-8 text-xl leading-10 text-muted-foreground">
                    “Build Associates transformed our vision into a timeless
                    architectural masterpiece with flawless execution and
                    elegant detailing.”
                  </p>

                  <div className="mt-10 flex items-center gap-4">

                    <div className="h-16 w-16 rounded-full bg-secondary" />

                    <div>
                      <h4 className="text-lg font-bold text-primary">
                        Rohit Malhotra
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        Bangalore
                      </p>
                    </div>

                  </div>

                </CardContent>
              </Card>

              <Card className="premium-card overflow-hidden">

                <div className="relative">

                  <Image
                    src="/14.jpg"
                    alt="Case Study"
                    width={1200}
                    height={700}
                    className="h-[280px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">

                    <p className="text-xs uppercase tracking-[0.35em] text-accent">
                      Featured Case Study
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      Urban Oasis Project
                    </h3>

                    <Button
                      variant="ghost"
                      className="mt-5 p-0 text-sm font-semibold text-white hover:bg-transparent"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                  </div>

                </div>

              </Card>

            </div>

          </div>

        </div>
      </section>

      <section className="premium-container pb-28">

        <Card className="premium-card overflow-hidden">

          <CardContent className="grid gap-10 p-10 text-center md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Building2,
                value: "350+",
                label: "Projects Delivered",
              },
              {
                icon: Users,
                value: "275+",
                label: "Happy Clients",
              },
              {
                icon: BadgeCheck,
                value: "12+",
                label: "Years Experience",
              },
              {
                icon: Ruler,
                value: "5.2M+",
                label: "Sq.ft Designed",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="relative"
                >
                  <div className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-border lg:block" />

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                    <Icon className="text-accent" />
                  </div>

                  <h3 className="mt-6 text-5xl font-black text-primary">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              );
            })}

          </CardContent>
        </Card>

      </section>

    </main>
  );
}