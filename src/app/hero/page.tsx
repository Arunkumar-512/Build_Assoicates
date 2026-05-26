"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HomePage() {
  const router = useRouter();
  return (
    <main className="overflow-hidden bg-[#f7f7f5] text-[#111111]">

      <section className="relative min-h-screen overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/15.jpg"
            alt="Luxury Villa"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

          <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/images/28.png')]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-10 right-10 hidden w-[320px] rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl lg:block"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/70">
                Featured Project
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                Minimal Villa
              </h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-3">
              <ArrowRight className="text-white" />
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl">
            <Image
              src="/images/13.jpg"
              alt="Villa"
              width={500}
              height={400}
              className="h-[180px] w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>
        </motion.div>

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="premium-container">

            <div className="max-w-4xl">

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 backdrop-blur-xl"
              >
                Luxury Architecture Studio
              </motion.p>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="max-w-5xl text-[52px] font-black leading-[0.95] tracking-[-0.04em] text-white md:text-[82px]"
              >
                Designing
                <br />
                Timeless Spaces
                <br />
                <span className="text-white/50">
                  That Inspire Living
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="mt-8 max-w-2xl text-lg leading-9 text-white/70"
              >
                Premium architecture, interiors, structural engineering,
                and construction consultancy crafted with precision,
                elegance, and modern innovation.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="mt-10 flex flex-wrap gap-5"
              >
                <Button
                  onClick={() => router.push("/portfolio")}
                  className="h-14 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-500 hover:scale-[1.04] hover:bg-amber-300 cursor-pointer"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  onClick={() => router.push("/contact")}
                  variant="outline"
                  className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-sm text-white backdrop-blur-xl hover:bg-white hover:text-amber-400 cursor-pointer"
                >
                  Get Consultation
                </Button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5}
                className="mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-white/10 pt-8"
              >
                {[
                  ["250+", "Projects Delivered"],
                  ["12+", "Years Experience"],
                  ["98%", "Client Satisfaction"],
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
          </div>
        </div>
      </section>

      <section className="premium-container py-28">

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px]"
          >
            <Image
              src="/images/2.jpg"
              alt="Architecture"
              width={1000}
              height={1200}
              className="h-full min-h-[650px] w-full object-cover transition duration-[1200ms] hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                Since 2012
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Building Modern
                <br />
                Luxury Experiences
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
              About Build Associates
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight tracking-[-0.04em] text-[#111111]">
              Professional
              <br />
              Architecture With
              <br />
              Human-Centered Design
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
              We combine aesthetics, engineering precision, and smart
              planning to craft elegant residential and commercial spaces
              that feel timeless and functional.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {[
                "Modern Architectural Planning",
                "Luxury Interior Concepts",
                "Structural Engineering",
                "Premium Construction Consultancy",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100">
                    <Star
                      className="text-amber-600"
                      size={18}
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#111111]">
                      {item}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-neutral-500">
                      Elegant execution with premium attention to detail.
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      <section className="premium-container pb-28">

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
              Selected Work
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.04em] text-[#111111]">
              Featured Projects
            </h2>
          </div>

          <Button
            variant="ghost"
            className="w-fit rounded-full border border-black/10 px-7 py-6 hover:bg-black hover:text-amber-400 cursor-pointer"
            onClick={() => router.push("/portfolio")}
          >
            View All Projects →
          </Button>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">

          {["images/12.jpg", "images/13.jpg", "images/14.jpg"].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[40px]"
            >
              <Image
                src={`/${img}`}
                alt="Project"
                width={1200}
                height={900}
                className="h-[560px] w-full object-cover transition duration-[1200ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-8 transition duration-500 group-hover:translate-y-0">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                  Residential
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Contemporary Villa
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                  Elegant spaces crafted with modern luxury aesthetics.
                </p>

                <button className="mt-6 inline-flex items-center text-sm font-semibold text-white hover:text-amber-300 cursor-pointer"
                  onClick={() => router.push("/portfolio")}
                >
                  Explore Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] py-28 text-white">

        <div className="premium-container">

          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
              How We Work
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.04em]">
              Seamless Design Process
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">

            {[
              "Consultation",
              "Planning",
              "Design",
              "Construction",
              "Handover",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/20"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-b from-amber-300/10 to-transparent" />

                <div className="relative z-10">
                  <div className="mb-8 text-5xl font-black text-white/10">
                    0{i + 1}
                  </div>

                  <h3 className="text-xl font-bold">
                    {step}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Precision-driven execution with modern architecture
                    methodology.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-container py-28">

        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
            Client Testimonials
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.04em] text-[#111111]">
            Trusted By Clients
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-[36px] border border-black/5 bg-white p-2 shadow-[0_20px_80px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(0,0,0,0.08)]">

                <CardContent className="p-8">

                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border border-black/5">
                      <AvatarImage src="/images/icon6.png" />
                      <AvatarFallback>BA</AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="text-lg font-bold text-[#111111]">
                        Arun Prakash
                      </h3>

                      <p className="text-sm text-neutral-500">
                        Homeowner
                      </p>
                    </div>
                  </div>

                  <p className="mt-8 text-base leading-9 text-neutral-600">
                    The team delivered an elegant and modern design with
                    incredible professionalism. Every detail felt premium
                    and thoughtfully crafted.
                  </p>

                  <div className="mt-7 flex text-amber-500">
                    ★★★★★
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="premium-container pb-28">

        <div className="relative overflow-hidden rounded-[50px] bg-[#111111] px-8 py-20 lg:px-20">

          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-amber-300/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                Let's Build Together
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight tracking-[-0.04em] text-white">
                Ready To Create
                <br />
                Your Dream Space?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-white/60">
                Let’s transform your vision into a timeless architectural
                experience with modern planning and luxury execution.
              </p>
            </div>

            <Button
              onClick={() => router.push("/contact")}
              className="h-16 rounded-full bg-white px-10 text-sm font-semibold text-black transition-all duration-500 hover:scale-105 hover:bg-amber-300 cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </div>
        </div>
      </section>

    </main>
  );
}