"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Building2,
  Home,
  PencilRuler,
  Ruler,
  ShieldCheck,
  Boxes,
  ClipboardList,
  Landmark,
  DraftingCompass,
  BadgeCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "House Plans",
    description:
      "Custom house plans tailored to your lifestyle, space and future needs.",
    image: "/images/1.jpg",
    icon: Home,
  },
  {
    title: "Interior Design",
    description:
      "Elegant and functional interiors that reflect your personality and comfort.",
    image: "/images/7.jpg",
    icon: PencilRuler,
  },
  {
    title: "Elevations",
    description:
      "Stunning elevation designs that enhance aesthetics and add value.",
    image: "/images/6.jpg",
    icon: Building2,
  },
  {
    title: "Structural Design",
    description:
      "Safe, efficient and sustainable structural solutions for every type of building.",
    image: "/images/24.jpg",
    icon: Ruler,
  },
  {
    title: "Material Testing",
    description:
      "Advanced testing to ensure quality, durability and safety of materials.",
    image: "/images/4.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Cost Saving Consultation",
    description:
      "Smart strategies and expert advice to optimize costs without compromising quality.",
    image: "/images/3.jpg",
    icon: ClipboardList,
  },
  {
    title: "Site Planning",
    description:
      "Efficient site layouts for better space utilization and smooth project execution.",
    image: "/images/8.jpg",
    icon: Landmark,
  },
  {
    title: "2D Drafting",
    description:
      "Accurate and detailed 2D drawings for planning and approvals.",
    image: "/images/2.jpg",  
    icon: DraftingCompass,
  },
  {
    title: "3D Architectural Visualization",
    description:
      "Realistic 3D visualizations that bring your future project to life.",
    image: "/images/20.jpg",
    icon: Boxes,
  },
];

const fadeUp:Variants= {
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

export default function ServicesPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-border">

        {/* BG */}
     <div className="absolute inset-0">
  <Image
    src="/26.png"
    alt="Architecture"
    fill
    priority
    className="object-cover object-center scale-105"
  />

  {/* Minimal overlays */}
  <div className="absolute inset-0 bg-primary/25" />
  <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-transparent" />

  {/* Soft glows */}
  <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
  <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-accent/5 blur-3xl" />
</div>

        {/* CONTENT */}
        <div className="relative z-10 premium-container flex min-h-[92vh] items-center py-28">

          <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_420px] lg:items-end">

            {/* LEFT */}
            <div className="max-w-4xl">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <p className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/80 backdrop-blur-xl">
                  Premium Architectural Solutions
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="mt-7 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-primary/90 md:text-7xl xl:text-[92px]"
              >
                Engineering
                <br />
                Spaces With
                <br />
                <span className="text-white/78 pt-3">
                  Modern Precision
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="mt-8 max-w-2xl text-lg leading-9 text-white/80"
              >
                From architecture and structural planning to interiors
                and visualization — we craft timeless spaces that blend
                luxury aesthetics with smart functionality.
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
                  className="primary-button h-14 px-8 text-sm font-semibold hover:bg-amber-600 cursor-pointer">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  className="secondary-button h-14 px-8 text-sm cursor-pointer hover:text-amber-300 cursor-pointer"
                  onClick={() => router.push("/contact")}
                >
                  Get Consultation
                </Button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5}
                className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-8"
              >
                {[
                  ["250+", "Projects"],
                  ["10+", "Experience"],
                  ["95%", "Retention"],
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="text-4xl font-black text-primary">
                      {item[0]}
                    </h3>

                    <p className="mt-2 text-sm text-white/80">
                      {item[1]}
                    </p>
                  </div>
                ))}
              </motion.div>

            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hidden lg:block"
            >
              <div className="premium-card overflow-hidden p-5">

                <div className="relative overflow-hidden rounded-[28px]">
                  <Image
                    src="/images/20.jpg"
                    alt="Featured"
                    width={700}
                    height={900}
                    className="h-[430px] w-full object-cover transition duration-[1200ms] hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                      Featured Service
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      3D Visualization
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/70">
                      Realistic architectural experiences before construction begins.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="premium-container py-28">

        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              What We Offer
            </p>

            <h2 className="mt-4 heading-lg text-primary">
              Premium Design &
              <span className="block gradient-text">
                Construction Services
              </span>
            </h2>
          </div>

          {/* <p className="max-w-xl text-base leading-8 text-muted-foreground">
            Every service is tailored to deliver architectural elegance,
            structural efficiency and long-term value for modern living.
          </p> */}
        </div>

        {/* GRID */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="group premium-card h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent/30">

                  <div className="relative overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="h-[260px] w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-90" />

                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/80 ">
                        Build Associates
                      </p>

                      <h3 className="mt-2 text-3xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>

                  </div>

                  <CardContent className="flex flex-col p-7">

                    <p className="text-sm leading-8 text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-border pt-5">

                      <Button
                        variant="ghost"
                        className="group/btn h-auto p-0 text-sm font-semibold text-accent cursor-pointer hover:text-amber-300"
                      >
                        Learn More

                        <ArrowRight className="ml-2 h-4 w-4 transition duration-300 group-hover/btn:translate-x-1" />
                      </Button>

                      <div className="h-10 w-10 rounded-full border border-border bg-background/80" />

                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-card/40 py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,90,70,0.12),transparent_30%)]" />

        <div className="premium-container relative z-10">

          <div className="grid gap-7 lg:grid-cols-2">

            <Card className="premium-card overflow-hidden">

              <CardContent className="p-8 lg:p-10">

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                  Workflow Process
                </p>

                <h3 className="mt-4 text-4xl font-black tracking-tight text-primary">
                  How We Execute
                  Projects
                </h3>

                <div className="mt-10 space-y-6">

                  {[
                    "Consultation",
                    "Planning",
                    "Design Development",
                    "Execution",
                    "Final Delivery",
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-5 rounded-[24px] border border-border bg-background/70 p-5 transition-all duration-300 hover:border-accent/20 hover:bg-background"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-sm font-bold text-accent">
                        0{i + 1}
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-primary">
                          {step}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          Professional planning and execution with modern engineering standards.
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

              </CardContent>
            </Card>

            <div className="grid gap-7">

              <Card className="premium-card">
                <CardContent className="p-8">

                  <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                      <BadgeCheck className="h-8 w-8 text-accent" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                        Construction Standards
                      </p>

                      <h3 className="mt-3 text-3xl font-black text-primary">
                        Quality & Precision
                      </h3>
                    </div>

                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">

                    {[
                      "ISO Code Compliant",
                      "Premium Materials",
                      "Advanced Planning",
                      "Timely Delivery",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-border bg-background/60 p-4 text-sm font-medium text-muted-foreground"
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                </CardContent>
              </Card>

              <Card className="premium-card overflow-hidden">

                <div className="relative">
                  <Image
                    src="/images/8.jpg"
                    alt="Planning"
                    width={1200}
                    height={600}
                    className="h-[260px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/80">
                      Smart Planning
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      Architecture That
                      Feels Timeless
                    </h3>
                  </div>

                </div>

              </Card>

            </div>

          </div>
        </div>
      </section>

      <section className="premium-container py-24">

        <Card className="premium-card overflow-hidden">

          <CardContent className="grid gap-10 p-10 text-center md:grid-cols-2 lg:grid-cols-5">

            {[
              ["250+", "Projects Completed"],
              ["200+", "Happy Clients"],
              ["10+", "Years Experience"],
              ["95%", "Client Retention"],
              ["100%", "Commitment"],
            ].map((item, i) => (
              <div
                key={i}
                className="relative"
              >
                <div className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-border lg:block" />

                <h3 className="text-5xl font-black text-accent">
                  {item[0]}
                </h3>

                <p className="mt-3 text-sm text-primary">
                  {item[1]}
                </p>
              </div>
            ))}

          </CardContent>
        </Card>
      </section>

    </main>
  );
}