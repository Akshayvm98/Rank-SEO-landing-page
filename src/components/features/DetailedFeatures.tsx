"use client";

import { useReveal } from "@/hooks/useReveal";

const sections = [
  {
    title: "Keyword Discovery",
    description:
      "Find real opportunities using Search Console and SERP data. No guessing, no vanity metrics.",
    bullets: [
      "Pull keywords directly from Google Search Console",
      "Score opportunities by volume, position, and competition",
      "Identify content gaps competitors are ranking for",
      "Cluster related keywords into topic groups",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[12px] font-semibold uppercase tracking-wide text-muted">Top Opportunities</span>
          <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[11px] font-medium text-accent">24 new</span>
        </div>
        <div className="space-y-2">
          {[
            { kw: "seo automation tools", score: 94, vol: "2.4K" },
            { kw: "ai content optimization", score: 89, vol: "1.8K" },
            { kw: "organic traffic growth", score: 86, vol: "3.1K" },
            { kw: "keyword research platform", score: 82, vol: "1.2K" },
          ].map((r) => (
            <div key={r.kw} className="flex items-center justify-between rounded-lg bg-border-light/40 px-3 py-2.5">
              <span className="text-[13px] text-foreground">{r.kw}</span>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-muted-light">{r.vol}/mo</span>
                <span className="flex h-6 min-w-[40px] items-center justify-center rounded-md bg-success-bg text-[12px] font-medium text-success">{r.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Content Generation",
    description:
      "Generate articles that sound like your team wrote them. Set your tone, add samples, and let AI handle the first draft.",
    bullets: [
      "Custom brand voice profiles with tone controls",
      "SEO-structured articles with proper headings and flow",
      "AI-generated featured images in 100+ languages",
      "Edit inline before publishing",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[12px] font-medium text-accent">Writing article...</span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-3 rounded bg-foreground/10 w-full" />
          <div className="h-3 rounded bg-foreground/10 w-[92%]" />
          <div className="h-3 rounded bg-foreground/10 w-[78%]" />
          <div className="h-3 rounded bg-foreground/8 w-[85%]" />
          <div className="h-3 rounded bg-accent/15 w-[65%]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">Professional tone</span>
          <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">1,842 words</span>
          <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">SEO: 93/100</span>
        </div>
      </div>
    ),
  },
  {
    title: "SEO Optimization",
    description:
      "Every article gets scored and optimized before it goes live. Structure, keywords, readability, metadata.",
    bullets: [
      "Real-time SEO scoring as you write",
      "Keyword density and placement analysis",
      "Automatic internal linking suggestions",
      "Meta title and description generation",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[13px] font-medium text-foreground">SEO Score</span>
          <span className="text-[22px] font-bold text-success">94</span>
        </div>
        <div className="space-y-3">
          {[
            { label: "Keywords", pct: 96 },
            { label: "Structure", pct: 92 },
            { label: "Readability", pct: 90 },
            { label: "Metadata", pct: 98 },
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
    title: "Publishing",
    description:
      "Push directly to your CMS with one click. No copy-pasting, no reformatting. Just publish.",
    bullets: [
      "WordPress, Webflow, Framer, and Notion support",
      "Formatting and metadata preserved automatically",
      "Schedule posts or publish immediately",
      "Track publishing history per article",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="space-y-3">
          {[
            { cms: "WordPress", status: "Published", success: true },
            { cms: "Webflow", status: "Scheduled", success: false },
            { cms: "Notion", status: "Draft saved", success: false },
          ].map((item) => (
            <div key={item.cms} className="flex items-center justify-between rounded-lg border border-border-light px-3.5 py-2.5">
              <span className="text-[13px] font-medium text-foreground">{item.cms}</span>
              <span className={`text-[12px] font-medium ${item.success ? "text-success" : "text-muted-light"}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-success-bg flex items-center justify-center">
            <svg className="h-3 w-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <span className="text-[12px] text-muted">3 articles published this week</span>
        </div>
      </div>
    ),
  },
  {
    title: "Analytics",
    description:
      "Track rankings, clicks, and impressions across all your content. See what's working and double down.",
    bullets: [
      "Rankings tracked per keyword and article",
      "Click and impression trends over time",
      "Content performance comparisons",
      "Alerts when positions change significantly",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[12px] font-medium text-foreground">Organic Performance</span>
          <span className="text-[11px] text-muted-light">Last 30 days</span>
        </div>
        <div className="flex items-end justify-between gap-1 h-[80px] mb-3">
          {[25, 32, 28, 40, 38, 52, 48, 58, 55, 65, 72, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light/70"
              style={{ height: `${h}%`, opacity: 0.5 + h / 200 }}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-accent-bg/50 px-2 py-1.5 text-center">
            <p className="text-[10px] text-muted">Clicks</p>
            <p className="text-[14px] font-semibold text-foreground">8.4K</p>
          </div>
          <div className="rounded-lg bg-accent-bg/50 px-2 py-1.5 text-center">
            <p className="text-[10px] text-muted">Impressions</p>
            <p className="text-[14px] font-semibold text-foreground">142K</p>
          </div>
          <div className="rounded-lg bg-success-bg/50 px-2 py-1.5 text-center">
            <p className="text-[10px] text-muted">Avg. Pos.</p>
            <p className="text-[14px] font-semibold text-success">14.2</p>
          </div>
        </div>
      </div>
    ),
  },
];

export function DetailedFeatures() {
  const ref = useReveal();

  return (
    <section ref={ref} className="border-t border-border-light bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 space-y-20 md:space-y-28">
        {sections.map((section, i) => {
          const reversed = i % 2 !== 0;
          return (
            <div
              key={section.title}
              className={`reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? "lg:[direction:rtl]" : ""}`}
            >
              <div className={reversed ? "lg:[direction:ltr]" : ""}>
                <h2 className="text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[1.75rem]">
                  {section.title}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] text-muted">
                  {section.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[14px] text-foreground/80">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={reversed ? "lg:[direction:ltr]" : ""}>{section.visual}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
