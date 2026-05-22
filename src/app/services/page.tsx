"use client";

import Image from "next/image";
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
    image: "/1.jpg",
    icon: Home,
  },
  {
    title: "Interior Design",
    description:
      "Elegant and functional interiors that reflect your personality and comfort.",
    image: "/7.jpg",
    icon: PencilRuler,
  },
  {
    title: "Elevations",
    description:
      "Stunning elevation designs that enhance aesthetics and add value.",
    image: "/6.jpg",
    icon: Building2,
  },
  {
    title: "Structural Design",
    description:
      "Safe, efficient and sustainable structural solutions for every type of building.",
    image: "/24.jpg",
    icon: Ruler,
  },
  {
    title: "Material Testing",
    description:
      "Advanced testing to ensure quality, durability and safety of materials.",
    image: "/4.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Cost Saving Consultation",
    description:
      "Smart strategies and expert advice to optimize costs without compromising quality.",
    image: "/3.jpg",
    icon: ClipboardList,
  },
  {
    title: "Site Planning",
    description:
      "Efficient site layouts for better space utilization and smooth project execution.",
    image: "/8.jpg",
    icon: Landmark,
  },
  {
    title: "2D Drafting",
    description:
      "Accurate and detailed 2D drawings for planning and approvals.",
    image: "/2.jpg",
    icon: DraftingCompass,
  },
  {
    title: "3D Architectural Visualization",
    description:
      "Realistic 3D visualizations that bring your future project to life.",
    image: "/20.jpg",
    icon: Boxes,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-border">
        {/* BG */}
        <div className="absolute inset-0">
          <Image
            src="/27.png"
            alt="Architecture"
            fill
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-primary/45" />

          {/* LEFT GRADIENT */}
          {/* <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-background via-background/90 to-transparent" /> */}

          {/* GLOW */}
          <div className="absolute left-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 premium-container py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
              Our Services
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-primary lg:text-7xl">
              SERVICES
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Comprehensive engineering and architectural solutions tailored
              to bring your vision to life with precision, innovation and
              excellence.
            </p>

            <div className="mt-8 h-1 w-24 rounded-full bg-accent" />
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="premium-container py-16">
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-premium"
              >
                <CardContent className="p-5">
                  {/* ICON */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-primary">
                    {service.title}
                  </h3>

                  {/* IMAGE */}
                  <div className="relative mt-5 overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={300}
                      className="h-[150px] w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* BUTTON */}
                  <Button
                    variant="ghost"
                    className="mt-5 p-0 font-semibold text-accent hover:bg-transparent hover:text-accent/80"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ================= BOTTOM INFO ================= */}
      <section className="premium-container pb-20">
        <div className="grid w-full gap-6 lg:grid-cols-4">
          {/* PROCESS */}
          <Card className="rounded-[28px] border-border bg-card shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Our Process Workflow
              </p>

              <div className="mt-8 flex items-center justify-between">
                {["01", "02", "03", "04", "05"].map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                      {step}
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground">
                      {[
                        "Consult",
                        "Planning",
                        "Design",
                        "Develop",
                        "Delivery",
                      ][i]}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* EXPERTISE */}
          <Card className="rounded-[28px] border-border bg-card shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Technical Expertise
              </p>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Architectural Design</li>
                <li>• Structural Engineering</li>
                <li>• BIM & 3D Modeling</li>
                <li>• Project Management</li>
                <li>• Quality Assurance</li>
              </ul>
            </CardContent>
          </Card>

          {/* QUALITY */}
          <Card className="rounded-[28px] border-border bg-card shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Construction Quality
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <BadgeCheck className="h-7 w-7 text-accent" />
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• ISO Code Compliant</p>
                  <p>• Premium Materials</p>
                  <p>• Safety First</p>
                  <p>• Timely Delivery</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WHY CHOOSE */}
          <Card className="rounded-[28px] border-border bg-card shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Why Choose Us
              </p>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Experienced Professionals</li>
                <li>• Innovative Solutions</li>
                <li>• Transparent Process</li>
                <li>• Client-Centric Approach</li>
                <li>• On-Time Delivery</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="premium-container pb-24">
        <Card className="rounded-[32px] border-border bg-card shadow-premium">
          <CardContent className="grid gap-8 p-8 text-center sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-4xl font-black text-accent">
                250+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-accent">
                200+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-accent">
                10+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-accent">
                95%
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Client Retention
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-accent">
                100%
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Commitment
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}