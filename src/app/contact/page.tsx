"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  Clock3,
  MessageCircle,
  CalendarDays,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/28.png"
            alt="Architecture"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-primary/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />

          <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative z-10 premium-container py-24 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-accent backdrop-blur-xl">
                Contact Build Associates
              </p>

              <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white lg:text-7xl">
                Let’s Create
                <br />
                Something
                <span className="block text-white/60">
                  Extraordinary
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-white/70">
                From architecture and interiors to structural
                planning and consultation — our team is ready to
                help transform your vision into reality.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-3">
                {[
                  {
                    icon: Clock3,
                    title: "Quick Response",
                    desc: "Within 2 Hours",
                  },
                  {
                    icon: CalendarDays,
                    title: "Free Consultation",
                    desc: "Expert Guidance",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Trusted Process",
                    desc: "Professional Support",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>

                      <h3 className="mt-5 text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/60">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden lg:block">
              <Card className="overflow-hidden rounded-[36px] border border-white/10 bg-white/10 backdrop-blur-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-accent">
                        Build Associates
                      </p>

                      <h3 className="mt-3 text-3xl font-black text-white">
                        Start Your Project
                      </h3>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <Building2 className="text-white" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    {[
                      {
                        icon: Phone,
                        title: "Call Us",
                        value: "+91 98765 43210",
                      },
                      {
                        icon: Mail,
                        title: "Email Address",
                        value: "info@buildsmart.com",
                      },
                      {
                        icon: MessageCircle,
                        title: "WhatsApp Support",
                        value: "Available 24/7",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>

                          <div>
                            <p className="text-sm text-white/50">
                              {item.title}
                            </p>

                            <h4 className="mt-1 font-semibold text-white">
                              {item.value}
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* <Button className="mt-8 h-14 w-full rounded-2xl bg-primary text-white transition-all duration-300 hover:bg-primary/90">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-container py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <Card className="premium-card overflow-hidden rounded-[36px] border-border/60">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                      Send Message
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-primary">
                      Let’s Talk About
                      <br />
                      Your Project
                    </h2>
                  </div>

                  <div className="hidden h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 lg:flex">
                    <Mail className="h-7 w-7 text-accent" />
                  </div>
                </div>

                <form className="mt-10 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      placeholder="Full Name"
                      className="h-14 rounded-2xl border-border bg-background"
                    />

                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="h-14 rounded-2xl border-border bg-background"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      placeholder="Phone Number"
                      className="h-14 rounded-2xl border-border bg-background"
                    />

                    <Input
                      placeholder="Project Subject"
                      className="h-14 rounded-2xl border-border bg-background"
                    />
                  </div>

                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-[220px] rounded-2xl border-border bg-background"
                  />

                  <Button className="h-14 w-full rounded-2xl bg-primary text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-details">
                    Send Message
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Your information is secure and confidential.
                  </p>
                </form>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-[36px] border border-border bg-card">
              <div className="border-b border-border p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  Visit Our Office
                </p>

                <h3 className="mt-3 text-2xl font-black text-primary">
                  Hyderabad Office
                </h3>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18"
                width="100%"
                height="420"
                loading="lazy"
                className="border-0"
              />
            </Card>
          </div>

          <div className="space-y-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  desc: "+91 98765 43210",
                  sub: "Mon - Sat • 9AM - 6PM",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  desc: "info@buildsmart.com",
                  sub: "Quick Response Support",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  desc: "Chat With Our Team",
                  sub: "Available 24/7",
                  span: "sm:col-span-2",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={item.title}
                    className={`premium-card rounded-[32px] transition-all duration-300 hover:-translate-y-1 hover:shadow-premium ${item.span}`}
                  >
                    <CardContent className="p-7">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                        <Icon className="text-accent" />
                      </div>

                      <h3 className="mt-6 text-lg font-bold text-primary">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-base text-details">
                        {item.desc}
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.sub}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="premium-card overflow-hidden rounded-[36px]">
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src="/27.png"
                  alt="Office"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />

                <div className="absolute bottom-0 p-7 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/90">
                    Main Office
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Hyderabad Studio
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                    Premium architectural and engineering
                    consultancy office serving residential and
                    commercial projects.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="premium-card rounded-[36px]">
              <CardContent className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  Free Consultation
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-primary">
                  Book Your Meeting
                </h2>

                <p className="mt-3 text-muted-foreground">
                  Choose your preferred date and consultation
                  type.
                </p>

                <div className="mt-8 grid gap-4">
                  <Input
                    type="date"
                    className="h-14 rounded-2xl border-border bg-background"
                  />

                  <Input
                    type="time"
                    className="h-14 rounded-2xl border-border bg-background"
                  />

                  <Select>
                    <SelectTrigger className="h-14 rounded-2xl border-border bg-background">
                      <SelectValue placeholder="Meeting Type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="online">
                        Online Meeting
                      </SelectItem>

                      <SelectItem value="office">
                        Office Visit
                      </SelectItem>

                      <SelectItem value="site">
                        Site Consultation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="mt-6 h-14 w-full rounded-2xl bg-primary text-base font-semibold text-white transition-all duration-300 hover:bg-primary/90">
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}