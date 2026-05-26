"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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
    category: "Construction Tips",
    duration: "0:28",
    video: "/videos/video1.mp4",
    
  },
  {
    title: "Extraordinary Interior Makeover",
    category: "Transformations",
    duration: "0:35",
    video: "/videos/video2.mp4",
   
  },
  {
    title: "Live Site Visit Behind the Build",
    category: "Site Visits",
    duration: "0:41",
    video: "/videos/video3.mp4",
   
  },
  {
    title: "Concrete Strength Test Build",
    category: "Material Tests",
    duration: "0:30",
    video: "/videos/video4.mp4",
    
  },
  {
    title: "Save 20% on Construction Costs",
    category: "Cost Saving Tips",
    duration: "0:20",
    video: "/videos/video5.mp4",
    
  },
  {
    title: "3D Walkthrough Modern Villa",
    category: "3D Walkthroughs",
    duration: "0:40",
    video: "/videos/video6.mp4",
    
  },
];

const trendingVideos = [
  {
    title: "Luxury Home Construction Experience",
    video: "/videos/video11.mp4",
    thumbnail: "/images/9.jpg",
    duration: "0:45",
  },
  {
    title: "Small Bathroom Transformation",
    video: "/videos/video2.mp4",
    thumbnail: "/images/10.jpg",
    duration: "0:33",
  },
  {
    title: "Steel vs RCC Which is Better?",
    video: "/videos/video3.mp4",
    thumbnail: "/images/11.jpg",
    duration: "0:38",
  },
  {
    title: "Brick Quality Test On Site",
    video: "/videos/video4.mp4",
    thumbnail: "/images/12.jpg",
    duration: "0:29",
  },
  {
    title: "Minimalist Interior Design Ideas",
    video: "/videos/video5.mp4",
    thumbnail: "/images/13.jpg",
    duration: "0:37",
  },
];

const fadeUp: Variants = {
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
  const [activeCategory, setActiveCategory] =
    useState("All Videos");

  const [activeVideo, setActiveVideo] = useState(
    trendingVideos[0]
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All Videos") {
      return shorts;
    }

    return shorts.filter(
      (video) => video.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="overflow-hidden bg-background text-foreground">

      {/* HERO SECTION */}

      <section className="relative min-h-[92vh] overflow-hidden border-b border-border">

        <div className="absolute inset-0">

           <Image
              src="/images/26.png"
              alt="Architecture"
              fill
              priority
              className="object-cover object-center scale-105"
            />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/20" />

        </div>

        <div className="relative z-20 flex min-h-[92vh] items-center">

          <div className="premium-container">

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">

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
                  <span className="text-white/55">
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
                  modern interiors, and premium construction
                  knowledge crafted into cinematic short-form
                  content.
                </motion.p>

              </div>

              {/* RIGHT HERO CARD */}

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="hidden lg:block"
              >

                <Card className="overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.06] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
  <CardContent className="p-5">

    {/* TOP HEADER */}
    <div className="mb-5 flex items-center justify-between">

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/45">
          Featured Reel
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
          Modern Villa Tour
        </h3>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />

        <span className="text-xs font-medium text-white/70">
          LIVE PREVIEW
        </span>
      </div>

    </div>

    {/* VIDEO */}
    <div className="group relative overflow-hidden rounded-[30px]">

      <video
        src="/videos/video9.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-[460px] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* PLAY BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center">

        {/* <button className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-2xl transition-all duration-500 hover:scale-110 hover:bg-white hover:text-primary">

          <Play className="ml-1 h-8 w-8 fill-white text-white" />

        </button> */}

      </div>

      {/* BOTTOM CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 p-6">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
              Premium Architecture
            </p>

            <h4 className="mt-2 text-2xl font-bold text-white">
              Cinematic Walkthrough
            </h4>
          </div>

          {/* <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
            4K Quality
          </div> */}

        </div>


      </div>

    </div>

    {/* SOCIAL BUTTONS */}
    <div className="mt-5 grid grid-cols-2 gap-4">

      <button className="group flex items-center justify-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-amber-300/60">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-amber-300">
          <Camera className="h-5 w-5" />
        </div>

        <div className="text-left">
          <p className="text-sm font-semibold">
            Instagram
          </p>

          <p className="text-xs opacity-60">
            Reels & Shorts
          </p>
        </div>

      </button>

      <button className="group flex items-center justify-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-amber-300/60">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 group-hover:bg-primary/10">
          <Tv className="h-5 w-5" />
        </div>

        <div className="text-left">
          <p className="text-sm font-semibold">
            YouTube
          </p>

          <p className="text-xs opacity-60">
            Full Episodes
          </p>
        </div>

      </button>

    </div>

  </CardContent>
</Card>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORY FILTER */}

      <section className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-2xl">

        <div className="premium-container flex flex-wrap gap-3 py-5">

          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={
                activeCategory === category
                  ? "default"
                  : "outline"
              }
              className={`rounded-full px-5 py-5 text-xs font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-amber-300"
                  : "border-border bg-card hover:bg-secondary"
              }`}
            >
              {category}
            </Button>
          ))}

        </div>

      </section>

      {/* SHORTS */}

   <section className="premium-container py-20">

  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

    {filteredVideos.map((video, i) => (
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

        <Card className="group overflow-hidden rounded-[36px] border border-border bg-card">

          <div className="relative h-[640px] overflow-hidden">

            <video
              id={`video-${i}`}
              src={video.video}
              loop
              playsInline
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

            {/* PLAY / PAUSE BUTTON */}

            <div className="absolute inset-0 flex items-center justify-center">

              <button
                onClick={() => {
                  const currentVideo = document.getElementById(
                    `video-${i}`
                  ) as HTMLVideoElement;

                  // Pause all videos first
                  document.querySelectorAll("video").forEach((v) => {
                    v.pause();
                  });

                  // If same video already playing -> pause
                  if (playingVideo === i) {
                    currentVideo.pause();
                    setPlayingVideo(null);
                  } else {
                    currentVideo.play();
                    currentVideo.muted = false;

                    setPlayingVideo(i);
                  }
                }}
                className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-2xl transition-all duration-500 hover:scale-110"
              >

                {playingVideo === i ? (
                  <div className="flex gap-1">
                    <span className="h-8 w-[5px] rounded-full bg-white" />
                    <span className="h-8 w-[5px] rounded-full bg-white" />
                  </div>
                ) : (
                  <Play className="ml-1 h-10 w-10 fill-white text-white" />
                )}

              </button>

            </div>

            {/* CONTENT */}

            <div className="absolute bottom-0 p-7 text-white">

              <h3 className="max-w-md text-3xl font-black leading-tight tracking-tight">
                {video.title}
              </h3>

              <div className="mt-6 flex items-center gap-6 text-sm text-white/80">

                <button className="flex items-center gap-2 transition hover:text-red-500">
                  <Heart className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                </div>

              </div>

            </div>

          </div>

        </Card>

      </motion.div>
    ))}

  </div>

</section>

      {/* TRENDING */}

      <section className="premium-container pb-24">

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">

          {/* MAIN VIDEO */}

          <Card className="overflow-hidden rounded-[40px] border border-border bg-card">

            <div className="relative h-[620px] overflow-hidden">

              {!isPlaying ? (
                <>
                  <Image
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">

                    <button
                      onClick={() => setIsPlaying(true)}
                      className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl"
                    >
                      <Play className="ml-1 h-12 w-12 fill-white text-white" />
                    </button>

                  </div>
                </>
              ) : (
                <video
                  src={activeVideo.video}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              )}

            </div>

          </Card>

          {/* SIDE VIDEOS */}

          <div className="space-y-5">

            {trendingVideos.map((item, index) => (
              <Card
                key={item.title}
                onClick={() => {
                  setActiveVideo(item);
                  setIsPlaying(false);
                }}
                className="cursor-pointer overflow-hidden rounded-[30px] border border-border bg-card"
              >
                <CardContent className="flex gap-5 p-4">

                  <div className="relative h-[130px] w-[120px] overflow-hidden rounded-2xl">

                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

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
                      </div>

                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
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
              <Button className="h-14 rounded-full bg-[#4A3A32] px-8 text-secondary transition-all duration-300 hover:bg-[#4A3A32]/80 hover:text-amber-300">
                <Camera className="mr-2 h-5 w-5" />
                Instagram
              </Button>

              <Button
                variant="outline"
                className="h-14 rounded-full border-white/15 bg-[#4A3A32]  px-8 text-secondary backdrop-blur-xl hover:bg-[#4A3A32]/80 hover:text-amber-300"
              >
                <Tv className="mr-2 h-5 w-5" />
                YouTube
              </Button>

              <Button
                variant="outline"
                className="h-14 rounded-full border-white/15 bg-[#4A3A32]  px-8 text-secondary backdrop-blur-xlhover:bg-[#4A3A32]/80 hover:text-amber-300"
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