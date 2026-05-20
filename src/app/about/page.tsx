"use client";

import Image from "next/image";
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

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="About Build Associates"
            fill
            priority
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-primary/75" />

          {/* LEFT GRADIENT */}
          <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-background via-background/95 to-transparent" />

          {/* GLOW */}
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 flex min-h-[720px] items-center px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              About Build Associates
            </p>

            <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-primary md:text-6xl xl:text-7xl">
              Building Smarter Spaces
              <span className="block gradient-text">
                For Modern Living
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              We create elegant, intelligent, and cost-efficient spaces through
              architecture, interiors, planning, and innovative construction
              solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="primary-button h-12 px-7 py-0">
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="secondary-button h-12 border-border/70 bg-white/80 px-7 py-0 backdrop-blur-xl"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="premium-container py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-border premium-shadow">
              <Image
                src="/about-office.jpg"
                alt="Office"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Who We Are
            </p>

            <h2 className="mt-4 heading-lg text-primary">
              Designing Premium
              <span className="block text-accent">
                Architectural Experiences
              </span>
            </h2>

            <p className="mt-6 paragraph-lg">
              Build Associates is a modern architecture and construction
              consultancy focused on creating smarter homes and functional
              commercial spaces.
            </p>

            <p className="mt-5 paragraph-lg">
              From house plans and elevations to interiors and structural
              consulting — we bring innovation, expertise, and transparency
              into every project.
            </p>

            {/* SERVICES */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />

                  <span className="text-sm font-medium text-foreground">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card/70 backdrop-blur-xl">
        <div className="premium-container grid grid-cols-2 gap-5 py-14 md:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-[28px] border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <Icon className="text-accent" />
                </div>

                <h3 className="text-3xl font-black text-primary">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* VALUES */}
      <section className="premium-container py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Our Core Values
          </p>

          <h2 className="mt-4 heading-lg text-primary">
            Built Around Innovation,
            <span className="block text-accent">
              Trust & Excellence
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card
                key={value.title}
                className="rounded-[32px] border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-premium"
              >
                <CardContent className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-primary">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="premium-container pb-20">
        <Card className="relative overflow-hidden rounded-[40px] border border-border bg-gradient-to-br from-primary via-details to-primary text-white shadow-[0_30px_100px_rgba(15,23,42,0.25)]">
          {/* BG IMAGE */}
          <div className="absolute inset-0 bg-[url('/about-cta.jpg')] bg-cover bg-center opacity-10" />

          {/* GLOW */}
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-accent/20 blur-3xl" />

          <CardContent className="relative z-10 flex flex-col items-center justify-between gap-10 p-8 text-center lg:flex-row lg:p-14 lg:text-left">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
                Let’s Build Together
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight lg:text-5xl">
                Ready To Create
                <span className="block">
                  Your Dream Space?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                From planning and architecture to interiors and smart
                construction solutions — we help bring your ideas to life.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-primary hover:bg-slate-100">
                Get Consultation
              </Button>

              <Button
                variant="outline"
                className="h-12 rounded-full border-white/30 bg-white/10 px-7 text-sm text-white backdrop-blur-xl hover:bg-white hover:text-primary"
              >
                View Portfolio
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}