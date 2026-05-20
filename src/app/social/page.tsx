"use client";

import Image from "next/image";
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
    image: "/social1.jpg",
    views: "2.3K",
    likes: "56",
  },
  {
    title: "Extraordinary Interior Makeover",
    category: "Transformation",
    duration: "0:35",
    image: "/social2.jpg",
    views: "3.1K",
    likes: "78",
  },
  {
    title: "Live Site Visit Behind the Build",
    category: "Site Visit",
    duration: "0:41",
    image: "/social3.jpg",
    views: "1.9K",
    likes: "42",
  },
  {
    title: "Concrete Strength Test Build",
    category: "Material Test",
    duration: "0:30",
    image: "/social4.jpg",
    views: "1.8K",
    likes: "42",
  },
  {
    title: "Save 20% on Construction Costs",
    category: "Cost Saving",
    duration: "0:20",
    image: "/social5.jpg",
    views: "2.2K",
    likes: "51",
  },
  {
    title: "3D Walkthrough Modern Villa",
    category: "3D Walkthrough",
    duration: "0:40",
    image: "/social6.jpg",
    views: "2.6K",
    likes: "63",
  },
];

const trending = [
  {
    title: "Luxury Home Construction",
    image: "/trend1.jpg",
    views: "52K",
    likes: "89",
    duration: "0:45",
  },
  {
    title: "Small Bathroom Transformation",
    image: "/trend2.jpg",
    views: "41K",
    likes: "67",
    duration: "0:33",
  },
  {
    title: "Steel vs RCC Which is Better?",
    image: "/trend3.jpg",
    views: "36K",
    likes: "48",
    duration: "0:38",
  },
  {
    title: "Brick Quality Test On Site",
    image: "/trend4.jpg",
    views: "29K",
    likes: "35",
    duration: "0:29",
  },
  {
    title: "Minimalist Interior Design Ideas",
    image: "/trend5.jpg",
    views: "33K",
    likes: "55",
    duration: "0:37",
  },
];

export default function SocialPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-supporting text-details">
      {/* HERO */}
      <section className="premium-container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Our Social World
            </p>

            <h1 className="heading-xl max-w-4xl text-primary">
              Watch. Learn.
              <br />
              Get Inspired.
              <span className="gradient-text block">
                From Build to Beautiful.
              </span>
            </h1>

            <p className="paragraph-lg mt-8 max-w-2xl">
              Explore real projects, expert tips, site visits,
              stunning transformations, and modern architectural
              inspiration through engaging short videos.
            </p>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
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
                  <Card
                    key={item.label}
                    className="premium-card border-border/50"
                  >
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-primary">
                          {item.value}
                        </h3>

                        <p className="text-sm text-details/70">
                          {item.label}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <Card className="premium-card premium-shadow rounded-[36px]">
            <CardContent className="p-8 lg:p-10">
              <h2 className="heading-md text-accent">
                Follow Us
              </h2>

              <div className="mt-10 space-y-6">
                {/* INSTAGRAM */}
                <div className="flex items-center justify-between rounded-[28px] border border-border bg-white/70 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                      <Camera className="text-white" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary">
                        @buildspace.architects
                      </h3>

                      <p className="text-sm text-details/70">
                        85K Followers
                      </p>
                    </div>
                  </div>

                  <Button className="rounded-full bg-primary px-6 text-white hover:bg-details">
                    Follow
                  </Button>
                </div>

                {/* YOUTUBE */}
                <div className="flex items-center justify-between rounded-[28px] border border-border bg-white/70 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                      <Tv className="text-white" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary">
                        BuildSpace Architects
                      </h3>

                      <p className="text-sm text-details/70">
                        42K Subscribers
                      </p>
                    </div>
                  </div>

                  <Button className="rounded-full bg-primary px-6 text-white hover:bg-details">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  Camera,
                  Tv,
                  Globe,
                  Share2,
                  Heart,
                ].map((Icon, index) => (
                  <button
                    key={index}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/10"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="border-y border-border bg-white/70 backdrop-blur-xl">
        <div className="premium-container flex flex-wrap gap-3 py-6">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full px-5 ${
                index === 0
                  ? "bg-primary text-white hover:bg-details"
                  : "border-border bg-white text-primary hover:bg-supporting"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* SHORT VIDEOS */}
      <section className="premium-container py-14">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
          {shorts.map((video) => (
            <Card
              key={video.title}
              className="group overflow-hidden rounded-[30px] border border-border/50 bg-white/80 shadow-premium backdrop-blur-xl"
            >
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {video.category}
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-primary/70 px-3 py-1 text-xs text-white backdrop-blur">
                  {video.duration}
                </div>

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105">
                    <Play className="ml-1 h-10 w-10 fill-white text-white" />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-2xl font-bold leading-tight">
                    {video.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-5 text-sm text-white/90">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {video.views}
                    </div>

                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {video.likes}
                    </div>

                    <Share2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="premium-container pb-16">
        <Card className="premium-card premium-shadow rounded-[38px]">
          <CardContent className="p-8 lg:p-10">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Flame className="text-accent" />

                <h2 className="heading-md text-primary">
                  Trending Now
                </h2>
              </div>

              <Button
                variant="outline"
                className="rounded-full border-border bg-white"
              >
                View All Videos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
              {trending.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[28px]"
                >
                  <div className="relative h-[320px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />

                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent font-semibold text-white">
                      0{index + 1}
                    </div>

                    <div className="absolute right-4 top-4 rounded-full bg-primary/70 px-3 py-1 text-xs text-white">
                      {item.duration}
                    </div>

                    <div className="absolute bottom-0 p-5 text-white">
                      <h3 className="text-xl font-bold leading-tight">
                        {item.title}
                      </h3>

                      <div className="mt-4 flex items-center gap-4 text-sm text-white/90">
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
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="premium-container pb-24">
        <Card className="relative overflow-hidden rounded-[40px] border-0 bg-primary text-white shadow-premium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.25),transparent_40%)]" />

          <div className="absolute -right-20 top-0 h-[320px] w-[320px] rounded-full bg-accent/20 blur-3xl" />

          <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-10 text-center lg:flex-row lg:text-left">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
                <Play className="h-10 w-10 fill-white text-white" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  New Videos Every Week
                </p>

                <h2 className="mt-3 text-4xl font-black leading-tight">
                  Follow Us & Never Miss an Update
                </h2>

                <p className="mt-4 max-w-2xl text-slate-300">
                  Get expert tips, project updates, material
                  tests, and modern design inspiration delivered
                  daily.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 rounded-full bg-white px-8 text-primary hover:bg-supporting">
                <Camera className="mr-2 h-5 w-5" />
                Instagram
              </Button>

              <Button
                variant="outline"
                className="h-14 rounded-full border-white/20 bg-white/10 px-8 text-white backdrop-blur-xl hover:bg-white hover:text-primary"
              >
                <Tv className="mr-2 h-5 w-5" />
                YouTube
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}