"use client";

import Image from "next/image";
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
    type: "Villa",
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
    type: "Structure",
    location: "Bangalore",
    size: "18,000 Sq.ft",
    image: "/14.jpg",
  },
  {
    title: "Hilltop Residence",
    type: "3D Model",
    location: "Coorg",
    size: "4,500 Sq.ft",
    image: "/15.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        {/* OVERLAY */}
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/90 to-transparent" /> */}

        {/* ACCENT GLOW */}
        <div className="absolute left-[-120px] top-[-120px] z-10 h-[320px] w-[320px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative h-[620px] w-full">
          <Image
            src="/19.jpg"
            alt="Portfolio Hero"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="premium-container">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Our Portfolio
              </p>

              <h1 className="heading-lg text-primary">
                Spaces That{" "}
                <span className="gradient-text">
                  Inspire
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                Explore modern architecture, interiors,
                structural designs, and premium residential
                projects crafted with precision.
              </p>

              <Button className="primary-button mt-8 h-12 px-7 text-sm font-semibold">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="border-b border-border bg-white">
        <div className="premium-container flex flex-wrap items-center justify-between gap-4 py-5">
          <div className="flex flex-wrap gap-3">
            {categories.map((item, index) => (
              <Button
                key={item}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full px-4 py-5 text-xs font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border bg-white text-details hover:bg-secondary"
                }`}
              >
                {item}
              </Button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Sort:{" "}
            <span className="font-semibold text-primary">
              Latest
            </span>
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="premium-container py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="premium-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-premium"
            >
              <div className="group relative h-[240px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {project.type}
                </div>
              </div>

              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-primary">
                  {project.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span>{project.size}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </div>

                <Button
                  variant="link"
                  className="mt-4 h-auto p-0 text-sm font-semibold text-accent"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* VIDEO CARD */}
          <Card className="overflow-hidden rounded-[32px] border-0 shadow-premium">
            <div className="relative min-h-[420px]">
              <Image
                src="/9.jpg"
                alt="Modern Farmhouse"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                <button className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl">
                  <Play className="h-6 w-6 fill-white text-white" />
                </button>

                <p className="text-xs uppercase tracking-[0.25em] text-white/80">
                  Project Walkthrough
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Modern Farmhouse
                </h3>

                <Button
                  variant="link"
                  className="mt-4 w-fit p-0 text-sm text-accent"
                >
                  Watch Video
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-white">
        <div className="premium-container grid grid-cols-2 gap-5 py-12 md:grid-cols-4">
          {[
            {
              icon: Building2,
              value: "350+",
              label: "Projects",
            },
            {
              icon: Users,
              value: "275+",
              label: "Clients",
            },
            {
              icon: BadgeCheck,
              value: "12+",
              label: "Experience",
            },
            {
              icon: Ruler,
              value: "5.2M+",
              label: "Sq.ft Designed",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-border bg-supporting p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <Icon className="text-accent" />
                </div>

                <h3 className="mt-5 text-3xl font-bold text-primary">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIAL + CASE STUDY */}
      <section className="premium-container grid gap-6 py-14 lg:grid-cols-3">
        {/* TESTIMONIAL */}
        <Card className="premium-card">
          <CardContent className="p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Testimonials
            </p>

            <p className="mt-7 text-base leading-8 text-muted-foreground">
              “Build Associates transformed our vision into
              reality with elegant design, quality execution,
              and professional service.”
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-secondary" />

              <div>
                <h4 className="font-semibold text-primary">
                  Rohit Malhotra
                </h4>

                <p className="text-sm text-muted-foreground">
                  Bangalore
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CASE STUDY */}
        <Card className="premium-card overflow-hidden lg:col-span-2">
          <div className="grid h-full lg:grid-cols-2">
            <div className="relative min-h-[340px]">
              <Image
                src="/19.jpg"
                alt="Case Study"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-primary/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl">
                  <Play className="h-7 w-7 fill-white text-white" />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Case Study
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-primary">
                The Urban Oasis Project
              </h3>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                A blend of modern architecture and natural
                elements creating functional, luxurious, and
                sustainable living spaces.
              </p>

              <Button
                variant="link"
                className="mt-6 w-fit p-0 text-sm font-semibold text-accent"
              >
                Read Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}