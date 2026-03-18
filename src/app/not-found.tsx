import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "404 | Page Not Found — RankSEO",
  description:
    "The page you're looking for doesn't exist. Explore RankSEO to grow your organic traffic.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative w-full max-w-[520px] text-center">
          {/* Animated visual */}
          <div className="mx-auto mb-10 w-[320px]">
            <RankDropVisual />
          </div>

          {/* Copy */}
          <h1 className="animate-hero text-[2rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            This page didn&rsquo;t rank
          </h1>
          <p className="animate-hero-delay-1 mx-auto mt-4 max-w-[380px] text-[16px] leading-[1.7] text-muted">
            Looks like this page dropped out of search results. Let&rsquo;s get
            you back to something that actually ranks.
          </p>

          {/* CTAs */}
          <div className="animate-hero-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/"
              className="inline-flex h-11 items-center rounded-xl bg-foreground px-7 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              Go to Home
            </a>
            <a
              href="/seo-guide"
              className="inline-flex h-11 items-center rounded-xl border border-border px-5 text-[13px] font-medium text-foreground transition-all duration-300 hover:border-muted-light hover:bg-white hover:shadow-sm"
            >
              Explore SEO Guide
            </a>
            <a
              href="/pricing"
              className="inline-flex h-11 items-center rounded-xl border border-border px-5 text-[13px] font-medium text-muted transition-all duration-300 hover:border-muted-light hover:bg-white hover:text-foreground hover:shadow-sm"
            >
              View Pricing
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

/* ── Animated ranking-drop visual ── */
function RankDropVisual() {
  return (
    <div className="animate-hero relative">
      {/* Card */}
      <div className="relative rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-400" />
            <span className="text-[12px] font-medium text-foreground">
              Page Performance
            </span>
          </div>
          <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[10px] font-semibold text-red-400">
            Not Found
          </span>
        </div>

        {/* Chart — animated drop */}
        <div className="mb-4 rounded-xl bg-gradient-to-b from-red-50/60 to-white border border-red-100/40 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-medium text-muted-light">
              Ranking Position
            </span>
            <span className="text-[10px] font-semibold text-red-400">
              Dropped off
            </span>
          </div>
          <svg
            className="h-[60px] w-full"
            viewBox="0 0 280 60"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Line path that starts high and drops */}
            <path
              d="M0 45 Q30 44 60 42 Q90 38 120 30 Q150 20 170 15 Q190 12 200 14 Q220 20 240 35 Q260 50 280 58"
              stroke="url(#drop-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              className="animate-draw"
            />
            {/* Area fill */}
            <path
              d="M0 45 Q30 44 60 42 Q90 38 120 30 Q150 20 170 15 Q190 12 200 14 Q220 20 240 35 Q260 50 280 58 L280 60 L0 60 Z"
              fill="url(#area-gradient)"
              className="animate-fade-in-slow"
            />
            <defs>
              <linearGradient id="drop-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgb(var(--color-accent, 13 148 136))" />
                <stop offset="55%" stopColor="rgb(var(--color-accent, 13 148 136))" />
                <stop offset="100%" stopColor="#f87171" />
              </linearGradient>
              <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f8717120" />
                <stop offset="100%" stopColor="#f8717105" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 404 keyword row */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between rounded-lg bg-border-light/40 px-3 py-2 animate-float">
            <span className="text-[12px] text-foreground">/this-page</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-muted-light">pos —</span>
              <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-semibold text-red-400">
                404
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-border-light/40 px-3 py-2 opacity-40">
            <span className="text-[12px] text-muted-light">/not-indexed</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-muted-light">pos —</span>
              <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-medium text-muted-light">
                n/a
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
