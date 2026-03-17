"use client";

import { useState } from "react";
const steps = [
  {
    id: "data",
    label: "Pull data",
    title: "Pull live performance data",
    description:
      "Use Search Console to understand where the site already has traction.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[#4285F4]/10">
            <svg className="h-3.5 w-3.5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
            </svg>
          </div>
          <span className="text-[12px] font-medium text-foreground">Search Console</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className="text-[10px] text-success">Live</span>
          </div>
        </div>
        <div className="mb-1 grid grid-cols-[1fr_auto_auto_auto] gap-4 px-2 text-[9px] uppercase tracking-wider text-muted-light">
          <span>Query</span>
          <span>Impressions</span>
          <span>Clicks</span>
          <span>Position</span>
        </div>
        <div className="space-y-1.5">
          {[
            { query: "seo automation tools", imp: "12.4K", clicks: "842", pos: "8.2" },
            { query: "automate seo content", imp: "8.1K", clicks: "514", pos: "11.4" },
            { query: "seo workflow software", imp: "5.6K", clicks: "326", pos: "14.7" },
            { query: "content optimization seo", imp: "4.2K", clicks: "218", pos: "16.1" },
          ].map((row) => (
            <div key={row.query} className="grid grid-cols-[1fr_auto_auto_auto] gap-4 rounded-lg bg-border-light/40 px-2 py-1.5 text-[11px]">
              <span className="truncate text-foreground">{row.query}</span>
              <span className="text-muted">{row.imp}</span>
              <span className="text-muted">{row.clicks}</span>
              <span className="font-medium text-foreground">{row.pos}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "prioritize",
    label: "Prioritize",
    title: "Prioritize opportunities",
    description:
      "Evaluate keyword potential using search demand, relevance, competition, and opportunity scoring.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">Priority Queue</span>
          <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">12 opportunities</span>
        </div>
        <div className="space-y-1.5">
          {[
            { kw: "seo automation platform", vol: "3.2K", kd: 28, relevance: 95, opp: 94 },
            { kw: "automated content workflow", vol: "1.8K", kd: 22, relevance: 90, opp: 91 },
            { kw: "seo content at scale", vol: "2.4K", kd: 35, relevance: 85, opp: 82 },
            { kw: "keyword clustering tool", vol: "1.4K", kd: 31, relevance: 80, opp: 78 },
          ].map((item) => (
            <div key={item.kw} className="flex items-center justify-between rounded-lg bg-border-light/40 px-3 py-2">
              <span className="text-[12px] text-foreground">{item.kw}</span>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="text-muted">{item.vol}</span>
                <span className={`font-medium ${item.kd < 30 ? "text-success" : "text-accent"}`}>KD {item.kd}</span>
                <div className="flex items-center gap-1">
                  <div className="h-1.5 w-8 overflow-hidden rounded-full bg-border-light">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${item.opp}%` }} />
                  </div>
                  <span className="font-medium text-accent">{item.opp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "generate",
    label: "Generate",
    title: "Generate structured drafts",
    description:
      "Create SEO-focused content with outlines, supporting terms, and brand-aware copy.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[12px] font-medium text-foreground">Article Draft</span>
          <span className="rounded bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">Structured</span>
        </div>
        <div className="space-y-2">
          <div className="rounded-lg bg-foreground/5 px-3 py-2">
            <div className="text-[11px] font-medium text-foreground">H1: How to Automate SEO Content at Scale</div>
          </div>
          <div className="rounded-lg bg-border-light/50 px-3 py-2">
            <div className="text-[10px] font-medium text-muted">H2: Why Manual Processes Don&apos;t Scale</div>
            <div className="mt-1 space-y-1">
              <div className="h-2 w-full rounded bg-foreground/5" />
              <div className="h-2 w-[90%] rounded bg-foreground/5" />
              <div className="h-2 w-[75%] rounded bg-foreground/5" />
            </div>
          </div>
          <div className="rounded-lg bg-border-light/50 px-3 py-2">
            <div className="text-[10px] font-medium text-muted">H2: Building an Automated Workflow</div>
            <div className="mt-1 space-y-1">
              <div className="h-2 w-full rounded bg-foreground/5" />
              <div className="h-2 w-[85%] rounded bg-foreground/5" />
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border-light pt-3">
          {["seo automation", "content workflow", "keyword research", "publishing"].map((term) => (
            <span key={term} className="rounded bg-accent-bg px-2 py-0.5 text-[9px] text-accent">{term}</span>
          ))}
          <span className="rounded bg-border-light px-2 py-0.5 text-[9px] text-muted">2,400 words</span>
        </div>
      </div>
    ),
  },
  {
    id: "review",
    label: "Review",
    title: "Review and refine",
    description:
      "Adjust headings, intent alignment, internal links, and on-page structure.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-light">Content Review</div>
        <div className="space-y-3">
          {[
            { label: "SEO Score", value: 96, color: "bg-accent" },
            { label: "Readability", value: 91, color: "bg-success" },
            { label: "Intent Match", value: 94, color: "bg-accent" },
            { label: "Structure", value: 88, color: "bg-accent-light" },
            { label: "Internal Links", value: 85, color: "bg-accent-light" },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[11px] text-muted">{item.label}</span>
                <span className="text-[11px] font-semibold text-foreground">{item.value}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-light">
                <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "publish",
    label: "Publish",
    title: "Publish directly",
    description: (
      <>
        Send content to WordPress, Webflow, Framer, or Notion without extra
        formatting work.{" "}
        <a href="/integrations" className="text-accent underline underline-offset-2 hover:text-accent-hover">
          View integrations
        </a>
      </>
    ),
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-light">Publish to</div>
        <div className="space-y-2">
          {[
            { cms: "WordPress", articles: 24, connected: true },
            { cms: "Webflow", articles: 12, connected: true },
            { cms: "Framer", articles: 8, connected: true },
            { cms: "Notion", articles: 16, connected: true },
          ].map((item) => (
            <div key={item.cms} className="flex items-center justify-between rounded-lg border border-border-light px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-success" />
                <span className="text-[12px] font-medium text-foreground">{item.cms}</span>
              </div>
              <span className="text-[10px] text-muted">{item.articles} articles</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-success-bg px-3 py-2 text-center text-[11px] text-success">
          Last published 12 minutes ago
        </div>
      </div>
    ),
  },
  {
    id: "track",
    label: "Track",
    title: "Track and improve",
    description:
      "Monitor rankings, clicks, impressions, and content performance over time.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">Performance</span>
          <span className="text-[10px] text-muted-light">Last 90 days</span>
        </div>
        <div className="mb-3 flex h-[56px] items-end gap-[2px]">
          {[28, 32, 30, 38, 42, 40, 48, 52, 50, 56, 60, 58, 65, 70, 68, 75, 80, 78, 85, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light/60"
              style={{ height: `${h}%`, opacity: 0.5 + h / 200 }}
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Tracked", value: "248" },
            { label: "Top 10", value: "34" },
            { label: "Improved", value: "67%" },
            { label: "Clicks", value: "14.2K" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-border-light/50 px-2 py-2 text-center">
              <p className="text-[9px] text-muted">{item.label}</p>
              <p className="text-[12px] font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function SEOProsWorkflow() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[960px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          How SEO professionals use RankSEO
        </h2>

        {/* Desktop: Tabbed Layout */}
        <div className="reveal reveal-delay-1 mt-10 hidden md:block">
          {/* Tab Bar */}
          <div className="flex gap-1 rounded-xl border border-border-light bg-white p-1.5">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveTab(i)}
                className={`flex-1 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                  activeTab === i
                    ? "bg-foreground text-white shadow-sm"
                    : "text-muted hover:bg-border-light/50 hover:text-foreground"
                }`}
              >
                <span className="mr-1.5 text-[11px] opacity-60">{String(i + 1).padStart(2, "0")}</span>
                {step.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 grid grid-cols-[1fr_1.2fr] gap-8 rounded-xl border border-border-light bg-white p-8">
            <div className="flex flex-col justify-center">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-accent">
                Step {String(activeTab + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[20px] font-bold tracking-[-0.01em] text-foreground">
                {steps[activeTab].title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-muted">
                {steps[activeTab].description}
              </p>
            </div>
            <div>{steps[activeTab].visual}</div>
          </div>
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="reveal reveal-delay-1 mt-10 space-y-3 md:hidden">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="overflow-hidden rounded-xl border border-border-light bg-white"
            >
              <button
                onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-foreground text-[11px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] font-semibold text-foreground">{step.title}</span>
                <svg
                  className={`ml-auto h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${
                    activeTab === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {activeTab === i && (
                <div className="border-t border-border-light px-4 pb-4 pt-3">
                  <p className="mb-4 text-[13px] leading-[1.7] text-muted">
                    {step.description}
                  </p>
                  {step.visual}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
