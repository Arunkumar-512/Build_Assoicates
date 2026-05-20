import HomePage from "@/app/hero/page";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* PREMIUM BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* TOP LEFT GLOW */}
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

        {/* TOP RIGHT GLOW */}
        <div className="absolute right-[-120px] top-[10%] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl" />

        {/* CENTER SUPPORTING GLOW */}
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-supporting/40 blur-3xl" />

        {/* BOTTOM LEFT */}
        <div className="absolute bottom-[-100px] left-[10%] h-[340px] w-[340px] rounded-full bg-accent/5 blur-3xl" />

        {/* BOTTOM RIGHT */}
        <div className="absolute bottom-[-120px] right-[-80px] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />

        {/* GRID OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* HOME PAGE */}
      <section className="relative z-10">
        <HomePage />
      </section>
    </main>
  );
}