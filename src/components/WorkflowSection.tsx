"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "Connect Search Console",
    description: "Link your domain and Google Search Console. We pull in every metric that matters: impressions, clicks, positions, and indexed pages.",
    visual: (
      <div className="rounded-lg border border-border-light bg-white p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4285F4]/10">
            <svg className="h-4 w-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-medium text-foreground">Google Search Console</p>
            <p className="text-[11px] text-success">Connected</p>
          </div>
        </div>
        <div className="h-1.5 rounded-full bg-border-light">
          <div className="h-full w-full rounded-full bg-success" />
        </div>
        <p className="mt-2 text-[11px] text-muted-light">312 pages indexed · 1,842 keywords tracked</p>
      </div>
    ),
  },
  {
    number: "02",
    title: "Discover opportunities",
    description: "Our algorithm scores every keyword by search volume, current position, competition, and content gap. The highest-ROI topics rise to the top.",
    visual: (
      <div className="rounded-lg border border-border-light bg-white p-4">
        <div className="space-y-2">
          {[
            { kw: "seo automation", score: 94, pos: "New" },
            { kw: "content optimization ai", score: 89, pos: "#32" },
            { kw: "keyword research tool", score: 82, pos: "#48" },
          ].map((r) => (
            <div key={r.kw} className="flex items-center justify-between rounded-md bg-border-light/40 px-3 py-2">
              <span className="text-[12px] text-foreground">{r.kw}</span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-muted-light">{r.pos}</span>
                <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[11px] font-medium text-accent">{r.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Generate in your voice",
    description: "Set your brand tone, add writing samples, and let the AI produce articles that feel authentic. Never robotic.",
    visual: (
      <div className="rounded-lg border border-border-light bg-white p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[12px] font-medium text-accent">Generating article...</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-2.5 rounded bg-foreground/10 w-full" />
          <div className="h-2.5 rounded bg-foreground/10 w-[90%]" />
          <div className="h-2.5 rounded bg-foreground/10 w-[75%]" />
          <div className="h-2.5 rounded bg-accent/15 w-[60%]" />
        </div>
        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">Professional tone</span>
          <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">SEO: 91/100</span>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Optimize and score",
    description: "Every article is scored for keyword density, structure, readability, and technical SEO before it goes live.",
    visual: (
      <div className="rounded-lg border border-border-light bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px] font-medium text-foreground">SEO Score</span>
          <span className="text-[18px] font-bold text-success">94</span>
        </div>
        <div className="space-y-2">
          {[
            { label: "Keywords", pct: 96 },
            { label: "Structure", pct: 92 },
            { label: "Readability", pct: 88 },
          ].map((b) => (
            <div key={b.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-muted">{b.label}</span>
                <span className="text-[11px] font-medium text-foreground">{b.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-border-light">
                <div className="h-full rounded-full bg-accent" style={{ width: `${b.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "05",
    title: "Publish and track",
    description: "Push to your CMS with one click and monitor performance as rankings, clicks, and impressions grow over time.",
    visual: (
      <div className="rounded-lg border border-border-light bg-white p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-5 w-5 rounded bg-success-bg flex items-center justify-center">
            <svg className="h-3 w-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <span className="text-[12px] font-medium text-success">Published to WordPress</span>
        </div>
        <div className="flex items-end justify-between gap-0.5 h-[48px]">
          {[20, 28, 32, 45, 42, 55, 62, 58, 70, 78].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-success/80 to-success/40"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="mt-2 text-[11px] text-muted-light">Organic clicks · last 10 days</p>
      </div>
    ),
  },
];

export function WorkflowSection() {
  const ref = useReveal();

  return (
    <section id="workflow" ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-16 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Search data to published content. Fully automated.
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            The complete SEO operating system. Not just another AI writer.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="absolute left-[28px] top-0 bottom-0 hidden w-px bg-gradient-to-b from-accent-muted via-accent/30 to-transparent md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative grid gap-6 md:grid-cols-[1fr_1fr] md:gap-12 md:pl-16`}
              >
                {/* Step number */}
                <div className="absolute left-0 top-0 hidden h-14 w-14 items-center justify-center rounded-xl border border-border bg-white text-[14px] font-bold text-accent md:flex">
                  {step.number}
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center">
                  <span className="mb-1 text-[13px] font-semibold text-accent md:hidden">
                    Step {step.number}
                  </span>
                  <h3 className="text-[1.125rem] font-semibold tracking-[-0.01em] text-foreground md:text-[1.25rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-muted">
                    {step.description}
                  </p>
                </div>

                {/* Visual */}
                <div>{step.visual}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
