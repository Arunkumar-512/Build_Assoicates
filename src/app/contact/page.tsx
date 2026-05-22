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
    <main className="min-h-screen overflow-hidden bg-supporting/20 text-primary antialiased">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-supporting bg-white">
        {/* BG EFFECTS */}
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        {/* FULL WIDTH */}
        <div className="relative grid w-full grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-14 xl:px-20 2xl:px-28">
          {/* LEFT */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Contact Us
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-primary lg:text-6xl xl:text-7xl">
              Let&apos;s Build Something{" "}
              <span className="text-accent">
                Extraordinary Together
              </span>
            </h1>

            <div className="mt-6 h-1 w-28 rounded-full bg-accent" />

            <p className="mt-8 max-w-3xl text-lg leading-8 text-details lg:text-xl">
              Have a project in mind? We&apos;re here to help you
              transform your vision into reality with precision,
              innovation, and expert consultation.
            </p>

            {/* FEATURES */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  icon: Clock3,
                  title: "Quick Response",
                  desc: "Within 2 Hours",
                },
                {
                  icon: CalendarDays,
                  title: "Free Consultation",
                  desc: "30-min Expert Session",
                },
                {
                  icon: ShieldCheck,
                  title: "Client Focused",
                  desc: "Quality & Trust",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={item.title}
                    className="rounded-3xl border border-supporting bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>

                      <h3 className="font-semibold text-primary">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-details">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl opacity-60" />

            <Image
              src="/28.png"
              alt="Building"
              width={1200}
              height={900}
              priority
              className="relative z-10 w-full max-w-[850px] rounded-[40px] object-cover shadow-[0_30px_100px_rgba(245,158,11,0.18)]"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="w-full px-6 py-20 lg:px-14 xl:px-20 2xl:px-28">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* CONTACT FORM */}
            <Card className="rounded-[36px] border border-supporting bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 lg:p-10">
                <h2 className="text-3xl font-black tracking-tight text-primary">
                  Send Us a Message
                </h2>

                <p className="mt-3 text-details">
                  Fill out the form below and our team will contact
                  you shortly.
                </p>

                <form className="mt-10 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Input
                      placeholder="Full Name"
                      className="h-14 rounded-2xl border-supporting"
                    />

                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="h-14 rounded-2xl border-supporting"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Input
                      placeholder="Phone Number"
                      className="h-14 rounded-2xl border-supporting"
                    />

                    <Input
                      placeholder="Subject"
                      className="h-14 rounded-2xl border-supporting"
                    />
                  </div>

                  <Textarea
                    placeholder="Write your message..."
                    className="min-h-[220px] rounded-2xl border-supporting"
                  />

                  <Button className="h-14 w-full rounded-2xl bg-primary text-base font-semibold text-white transition-all duration-300 hover:bg-details">
                    Send Message
                  </Button>

                  <p className="text-center text-sm text-details/60">
                    Your information is secure with us.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* MAP */}
            <Card className="overflow-hidden rounded-[36px] border border-supporting shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18"
                width="100%"
                height="500"
                loading="lazy"
                className="border-0"
              />
            </Card>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* CONTACT CARDS */}
            <div>
              <h2 className="mb-6 text-3xl font-black tracking-tight text-primary">
                Get In Touch
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    desc: "+91 98765 43210",
                    sub: "Mon - Sat: 9AM - 6PM",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    desc: "info@buildsmart.com",
                    sub: "Reply within 2 hours",
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp Support",
                    desc: "Instantly connect with our team",
                    sub: "Available 24/7",
                    span: "sm:col-span-2",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <Card
                      key={item.title}
                      className={`rounded-[32px] border border-supporting bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.span}`}
                    >
                      <CardContent className="p-7">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                          <Icon className="text-accent" />
                        </div>

                        <h3 className="text-lg font-semibold text-primary">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-details">
                          {item.desc}
                        </p>

                        <p className="mt-1 text-sm text-details/60">
                          {item.sub}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* OFFICES */}
            <div>
              <h2 className="mb-6 text-3xl font-black tracking-tight text-primary">
                Our Offices
              </h2>

              <div className="w-full">
                    <Card
                      className="rounded-[32px] border border-supporting bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <CardContent className="p-6">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                          <Building2 className="text-accent" />
                        </div>

                        <h3 className="font-semibold text-primary">
                          Hyderabad Office
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-details">
                          Premium business district office location.
                        </p>

                        <Button
                          variant="link"
                          className="mt-3 p-0 text-accent hover:text-accent/80"
                        >
                          View on Map →
                        </Button>
                      </CardContent>
                    </Card>
              </div>
            </div>

            {/* CONSULTATION */}
            <Card className="rounded-[36px] border border-supporting bg-white shadow-sm">
              <CardContent className="p-8 lg:p-10">
                <h2 className="text-3xl font-black tracking-tight text-primary">
                  Book a Free Consultation
                </h2>

                <p className="mt-3 text-details">
                  Schedule a meeting with our experts to discuss your
                  project.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <Input
                    type="date"
                    className="h-14 rounded-2xl border-supporting"
                  />

                  <Input
                    type="time"
                    className="h-14 rounded-2xl border-supporting"
                  />

                  <Select>
                    <SelectTrigger className="h-14 rounded-2xl border-supporting">
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

                <Button className="mt-6 h-14 w-full rounded-2xl bg-accent text-base font-semibold text-white transition-all duration-300 hover:bg-accent/90">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}