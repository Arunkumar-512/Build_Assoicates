"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import {
  ArrowRight,
  Building2,
  BadgeCheck,
  Users,
  ShieldCheck,
  Lightbulb,
  Award,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Building2,
    value: "350+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "275+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "12+",
    label: "Years Experience",
  },
  {
    icon: BadgeCheck,
    value: "98%",
    label: "Client Satisfaction",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "Premium construction quality with precise execution and modern standards.",
  },
  {
    icon: Lightbulb,
    title: "Smart Innovation",
    description:
      "Future-ready architectural concepts with intelligent planning solutions.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description:
      "Transparent communication and collaboration through every project stage.",
  },
];

const services = [
  "Smart Home Planning",
  "House Elevations",
  "Interior Design",
  "3D Walkthroughs",
  "Construction Consulting",
  "Material Testing",
  "Cost Saving Ideas",
  "Site Supervision",
];

const fadeUp :Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f5] text-[#111111]">

      <section className="relative min-h-screen overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/26.png"
            alt="About Build Associates"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

          <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-amber-300/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')]" />
        </div>

        {/* FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-10 right-10 hidden w-[320px] rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl lg:block"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">
                Since 2012
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                Premium Architecture
              </h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-3">
              <ArrowRight className="text-white" />
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl">
            <Image
              src="/25.png"
              alt="Office"
              width={500}
              height={400}
              className="h-[180px] w-full object-cover transition duration-[1200ms] hover:scale-110"
            />
          </div>
        </motion.div>

        <div className="relative z-20 flex min-h-screen items-center">
          <div className="premium-container">

            <div className="max-w-5xl">

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 backdrop-blur-xl"
              >
                About Build Associates
              </motion.p>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="max-w-5xl text-[52px] font-black leading-[0.95] tracking-[-0.05em] text-white md:text-[82px]"
              >
                Building Smarter
                <br />
                Spaces For
                <br />
                <span className="text-white/45">
                  Modern Living
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="mt-8 max-w-2xl text-lg leading-9 text-white/70"
              >
                We craft elegant architectural experiences through
                innovative planning, intelligent structures,
                premium interiors, and modern construction solutions.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="mt-10 flex flex-wrap gap-5"
              >
                <Button className="h-14 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-500 hover:scale-[1.04] hover:bg-amber-300">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-sm text-white backdrop-blur-xl hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <section className="premium-container py-28">

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* GLOW */}
            <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px]">
              <Image
                src="/25.png"
                alt="Office"
                width={1200}
                height={900}
                className="h-[700px] w-full object-cover transition duration-[1400ms] hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                  Excellence & Innovation
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Creating Timeless
                  <br />
                  Architectural Experiences
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
              Who We Are
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight tracking-[-0.04em] text-[#111111]">
              Designing Premium
              <br />
              Spaces With
              <br />
              Purpose & Precision
            </h2>

            <p className="mt-8 text-lg leading-9 text-neutral-600">
              Build Associates is a modern architecture and construction
              consultancy focused on elegant residential experiences and
              intelligent commercial environments.
            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-600">
              From architectural planning and interiors to structural
              consulting and construction guidance — we blend creativity,
              technology, and practical execution into every project.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {services.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 transition duration-500 group-hover:scale-110">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  </div>

                  <span className="text-sm font-semibold text-[#111111]">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#111111] py-24 text-white">

        <div className="premium-container">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {stats.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/20"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-b from-amber-300/10 to-transparent" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
                      <Icon className="text-amber-300" />
                    </div>

                    <h3 className="text-5xl font-black">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-sm text-white/60">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="premium-container py-28">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
            Our Core Values
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] text-[#111111]">
            Built Around
            <br />
            Innovation & Trust
          </h2>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-3">

          {values.map((value, i) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(0,0,0,0.08)]">

                  <CardContent className="relative p-8">

                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-amber-50 to-transparent" />

                    <div className="relative z-10">

                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-100 transition duration-500 group-hover:scale-110">
                        <Icon className="h-7 w-7 text-amber-600" />
                      </div>

                      <h3 className="mt-7 text-3xl font-black text-[#111111]">
                        {value.title}
                      </h3>

                      <p className="mt-5 text-base leading-8 text-neutral-600">
                        {value.description}
                      </p>

                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="premium-container pb-28">

        <div className="relative overflow-hidden rounded-[50px] bg-[#111111] px-8 py-20 lg:px-20">

          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-amber-300/10 blur-3xl" />

          <div className="absolute inset-0 opacity-10 bg-[url('/about-cta.jpg')] bg-cover bg-center" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                Let’s Build Together
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight tracking-[-0.04em] text-white">
                Ready To Create
                <br />
                Your Dream Space?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-white/60">
                From architecture and planning to interiors and smart
                construction consulting — we help transform your vision
                into timeless reality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">

              <Button className="h-14 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-500 hover:scale-105 hover:bg-amber-300">
                Get Consultation
              </Button>

              <Button
                variant="outline"
                className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-sm text-white backdrop-blur-xl hover:bg-white hover:text-black"
              >
                View Portfolio
              </Button>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}