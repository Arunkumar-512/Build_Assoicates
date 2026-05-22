import HomePage from "@/app/hero/page";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />

        <div className="absolute left-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#8C5A46]/10 blur-[140px]" />

        <div className="absolute right-[-180px] top-[8%] h-[500px] w-[500px] rounded-full bg-[#5C4638]/10 blur-[140px]" />

        <div className="absolute left-1/2 top-[30%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#F3ECE4]/40 blur-[160px] dark:bg-[#F3ECE4]/5" />

        <div className="absolute bottom-[-180px] left-[0%] h-[480px] w-[480px] rounded-full bg-[#8C5A46]/10 blur-[140px]" />

        <div className="absolute bottom-[-180px] right-[0%] h-[520px] w-[520px] rounded-full bg-[#2A2420]/12 blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,20,17,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,20,17,0.03)_1px,transparent_1px)] bg-[size:90px_90px] dark:bg-[linear-gradient(to_right,rgba(243,236,228,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,236,228,0.02)_1px,transparent_1px)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(243,236,228,0.45)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.45)_100%)]" />

        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay bg-[url('/noise.png')]" />

        <div className="absolute left-0 top-[18%] h-px w-full bg-gradient-to-r from-transparent via-[#8C5A46]/10 to-transparent" />
        <div className="absolute left-0 top-[58%] h-px w-full bg-gradient-to-r from-transparent via-[#8C5A46]/10 to-transparent" />
      </div>

      <section className="relative z-10">
        <HomePage />
      </section>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[80%] -translate-x-1/2 rounded-full bg-[#8C5A46]/5 blur-3xl" />
    </main>
  );
}