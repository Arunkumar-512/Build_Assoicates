"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import {
  Play,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Camera,
  Tv,
  Globe,
  ArrowRight,
  Flame,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  "All Videos",
  "Construction Tips",
  "Site Visits",
  "Transformations",
  "3D Walkthroughs",
  "Material Tests",
  "Cost Saving Tips",
  "Testimonials",
];

const shorts = [
  {
    title: "5 Construction Mistakes to Avoid",
    category: "Tips",
    duration: "0:28",
    image: "/9.jpg",
    views: "2.3K",
    likes: "56",
  },
  {
    title: "Extraordinary Interior Makeover",
    category: "Transformation",
    duration: "0:35",
    image: "/14.jpg",
    views: "3.1K",
    likes: "78",
  },
  {
    title: "Live Site Visit Behind the Build",
    category: "Site Visit",
    duration: "0:41",
    image: "/15.jpg",
    views: "1.9K",
    likes: "42",
  },
  {
    title: "Concrete Strength Test Build",
    category: "Material Test",
    duration: "0:30",
    image: "/16.jpg",
    views: "1.8K",
    likes: "42",
  },
  {
    title: "Save 20% on Construction Costs",
    category: "Cost Saving",
    duration: "0:20",
    image: "/21.jpg",
    views: "2.2K",
    likes: "51",
  },
  {
    title: "3D Walkthrough Modern Villa",
    category: "3D Walkthrough",
    duration: "0:40",
    image: "/19.jpg",
    views: "2.6K",
    likes: "63",
  },
];

const trending = [
  {
    title: "Luxury Home Construction",
    image: "/9.jpg",
    views: "52K",
    likes: "89",
    duration: "0:45",
  },
  {
    title: "Small Bathroom Transformation",
    image: "/10.jpg",
    views: "41K",
    likes: "67",
    duration: "0:33",
  },
  {
    title: "Steel vs RCC Which is Better?",
    image: "/11.jpg",
    views: "36K",
    likes: "48",
    duration: "0:38",
  },
  {
    title: "Brick Quality Test On Site",
    image: "/12.jpg",
    views: "29K",
    likes: "35",
    duration: "0:29",
  },
  {
    title: "Minimalist Interior Design Ideas",
    image: "/13.jpg",
    views: "33K",
    likes: "55",
    duration: "0:37",
  },
];

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 60 },
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

export default function SocialPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92vh] overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/19.jpg"
            alt="Social Hero"
            fill
            priority
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />

          <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')]" />
        </div>

        <div className="relative z-20 flex min-h-[92vh] items-center">
          <div className="premium-container">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
              <div className="max-w-4xl">
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 backdrop-blur-xl"
                >
                  Build Associates Media
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="mt-7 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl xl:text-[92px]"
                >
                  Architecture
                  <br />
                  Content That
                  <br />
                  <span className="text-white/45">
                    Inspires Millions
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  className="mt-8 max-w-2xl text-lg leading-9 text-white/70"
                >
                  Watch luxury homes, site visits, material tests,
                  modern interiors, and construction knowledge crafted
                  into premium short-form content.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  className="mt-10 flex flex-wrap gap-5"
                >
                  <Button className="h-14 rounded-full bg-white px-8 text-sm font-semibold text-primary transition-all duration-500 hover:scale-[1.03] hover:bg-accent hover:text-white">
                    Explore Videos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-sm text-white backdrop-blur-xl hover:bg-white hover:text-primary"
                  >
                    Follow Us
                  </Button>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={5}
                  className="mt-16 grid max-w-3xl grid-cols-2 gap-5 md:grid-cols-4"
                >
                  {[
                    {
                      icon: Play,
                      value: "2.5M+",
                      label: "Views",
                    },
                    {
                      icon: Heart,
                      value: "125K+",
                      label: "Likes",
                    },
                    {
                      icon: MessageCircle,
                      value: "12K+",
                      label: "Comments",
                    },
                    {
                      icon: Share2,
                      value: "8K+",
                      label: "Shares",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                          <Icon className="h-5 w-5 text-amber-300" />
                        </div>

                        <h3 className="mt-5 text-3xl font-black text-white">
                          {item.value}
                        </h3>

                        <p className="mt-1 text-sm text-white/60">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="hidden lg:block"
              >
                <Card className="overflow-hidden rounded-[36px] border border-white/10 bg-white/10 backdrop-blur-2xl">
                  <CardContent className="p-7">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/60">
                          Featured Reel
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                          Modern Villa Tour
                        </h3>
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                        <Play className="fill-white text-white" />
                      </div>
                    </div>

                    <div className="relative mt-7 overflow-hidden rounded-[28px]">
                      <Image
                        src="/14.jpg"
                        alt="Featured Reel"
                        width={500}
                        height={700}
                        className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />

                      <div className="absolute bottom-0 p-6">
                        <div className="flex items-center gap-5 text-sm text-white/80">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            12.5K
                          </div>

                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            240K
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary">
                        <Camera className="h-5 w-5" />
                        Instagram
                      </button>

                      <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary">
                        <Tv className="h-5 w-5" />
                        YouTube
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-2xl">
        <div className="premium-container flex flex-wrap gap-3 py-5">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full px-5 py-5 text-xs font-semibold transition-all duration-300 ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-secondary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      <section className="premium-container py-20">
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Latest Content
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.04em] text-primary">
              Viral Shorts
            </h2>
          </div>

          <Button
            variant="ghost"
            className="w-fit rounded-full border border-border px-7 py-6 hover:bg-primary hover:text-white"
          >
            View All Videos
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {shorts.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden rounded-[36px] border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-premium">
                <div className="relative h-[640px] overflow-hidden">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover transition duration-[1200ms] group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

                  <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-5">
                    <div className="rounded-full bg-accent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      {video.category}
                    </div>

                    <div className="rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
                      {video.duration}
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl transition-all duration-500 hover:scale-110 hover:bg-white hover:text-primary">
                      <Play className="ml-1 h-10 w-10 fill-white text-white" />
                    </button>
                  </div>

                  <div className="absolute bottom-0 p-7 text-white">
                    <h3 className="max-w-md text-3xl font-black leading-tight tracking-tight">
                      {video.title}
                    </h3>

                    <div className="mt-6 flex items-center gap-6 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        {video.likes}
                      </div>

                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        {video.views}
                      </div>

                      <Share2 className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/*    TRENDING   */}
      <section className="premium-container pb-24">
        <div className="mb-14 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Flame className="text-accent" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Trending Now
              </p>
            </div>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.04em] text-primary">
              Most Watched
            </h2>
          </div>

          <Button
            variant="outline"
            className="hidden rounded-full border-border bg-card px-7 py-6 lg:flex"
          >
            Explore Trending
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Card className="group overflow-hidden rounded-[40px] border border-border bg-card">
            <div className="relative h-[620px] overflow-hidden">
              <Image
                src="/9.jpg"
                alt="Trending"
                fill
                className="object-cover transition duration-[1400ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl transition-all duration-500 hover:scale-105">
                  <Play className="ml-1 h-12 w-12 fill-white text-white" />
                </button>
              </div>

              <div className="absolute bottom-0 p-10 text-white">
                <div className="rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white w-fit">
                  Featured Video
                </div>

                <h3 className="mt-6 max-w-2xl text-5xl font-black leading-tight tracking-[-0.04em]">
                  Luxury Home Construction Experience
                </h3>

                <div className="mt-6 flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    89K Likes
                  </div>

                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    520K Views
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-5">
            {trending.map((item, index) => (
              <Card
                key={item.title}
                className="group overflow-hidden rounded-[30px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <CardContent className="flex gap-5 p-4">
                  <div className="relative h-[130px] w-[120px] overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                          0{index + 1}
                        </div>

                        <span className="text-xs text-muted-foreground">
                          {item.duration}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold leading-snug text-primary">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {item.likes}
                      </div>

                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {item.views}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-container pb-28">
        <Card className="relative overflow-hidden rounded-[48px] border border-border bg-primary text-white shadow-[0_30px_100px_rgba(15,23,42,0.25)]">
          <div className="absolute -right-10 top-0 h-[350px] w-[350px] rounded-full bg-accent/20 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />

          <CardContent className="relative z-10 flex flex-col items-center justify-between gap-10 p-10 text-center lg:flex-row lg:p-16 lg:text-left">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                Join Our Community
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight tracking-[-0.04em]">
                Daily Architecture
                <br />
                Inspiration & Knowledge
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-white/60">
                Follow Build Associates for premium construction
                content, design inspiration, and practical building
                knowledge.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 rounded-full bg-white px-8 text-primary transition-all duration-300 hover:bg-accent hover:text-white">
                <Camera className="mr-2 h-5 w-5" />
                Instagram
              </Button>

              <Button
                variant="outline"
                className="h-14 rounded-full border-white/15 bg-white/10 px-8 text-white backdrop-blur-xl hover:bg-white hover:text-primary"
              >
                <Tv className="mr-2 h-5 w-5" />
                YouTube
              </Button>

              <Button
                variant="outline"
                className="h-14 rounded-full border-white/15 bg-white/10 px-8 text-white backdrop-blur-xl hover:bg-white hover:text-primary"
              >
                <Globe className="mr-2 h-5 w-5" />
                Website
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}