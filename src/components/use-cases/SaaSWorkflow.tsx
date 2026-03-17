const steps = [
  {
    number: "01",
    title: "Connect your site and search data",
    description:
      "Use your domain and Search Console to understand where you already have traction.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-bg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </div>
          <span className="text-[13px] font-semibold text-foreground">Site Connection</span>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center gap-3 rounded-lg bg-success-bg/50 px-3 py-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-accent">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            <div className="flex-1">
              <span className="text-[12px] font-medium text-foreground/70">Search Console</span>
            </div>
            <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">Connected</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-accent-bg/30 px-3 py-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="flex-1">
              <span className="text-[12px] font-medium text-foreground/70">yourapp.com</span>
            </div>
            <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">Verified</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Find high-value keyword opportunities",
    description:
      "Prioritize keywords based on relevance, demand, difficulty, and opportunity.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-bg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <span className="text-[13px] font-semibold text-foreground">Keyword Opportunities</span>
        </div>
        {/* Table header */}
        <div className="mb-1.5 grid grid-cols-[1fr_60px_60px_60px] gap-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-light">
          <span>Keyword</span>
          <span className="text-right">Volume</span>
          <span className="text-right">KD</span>
          <span className="text-right">Score</span>
        </div>
        <div className="space-y-1">
          {[
            { kw: "saas metrics dashboard", vol: "4.1K", kd: "28", score: "92" },
            { kw: "product-led growth examples", vol: "5.8K", kd: "34", score: "85" },
            { kw: "how to reduce churn saas", vol: "3.2K", kd: "22", score: "89" },
            { kw: "saas content marketing", vol: "2.9K", kd: "41", score: "76" },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[1fr_60px_60px_60px] gap-2 rounded-lg bg-accent-bg/30 px-3 py-2">
              <span className="text-[11px] text-foreground/70 truncate">{item.kw}</span>
              <span className="text-right text-[11px] text-muted">{item.vol}</span>
              <span className="text-right text-[11px] text-muted">{item.kd}</span>
              <div className="flex justify-end">
                <span className="rounded-full bg-success-bg px-1.5 py-0.5 text-[10px] font-medium text-success">{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Generate content aligned with your brand and product",
    description:
      "Create articles that support education, acquisition, and product-led discovery.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-bg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M12 20h9" />
              <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855Z" />
            </svg>
          </div>
          <span className="text-[13px] font-semibold text-foreground">Article Draft</span>
        </div>
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">Brand Voice: Professional</span>
          <span className="rounded bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">Tone: Educational</span>
        </div>
        <div className="rounded-lg border border-border-light bg-accent-bg/20 p-3">
          <p className="text-[12px] font-semibold text-foreground/80">How to Reduce SaaS Churn Rate: A Practical Guide</p>
          <div className="mt-2 space-y-1.5">
            <p className="text-[10px] text-muted">1. Understanding churn metrics</p>
            <p className="text-[10px] text-muted">2. Identifying churn triggers</p>
            <p className="text-[10px] text-muted">3. Building retention workflows</p>
            <p className="text-[10px] text-muted">4. Measuring improvement over time</p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">2,200 words</span>
            <span className="rounded bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">SEO-optimized</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Optimize before publishing",
    description:
      "Improve structure, metadata, links, and SEO quality before content goes live.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success-bg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-success">
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <span className="text-[13px] font-semibold text-foreground">SEO Checklist</span>
          <span className="ml-auto text-[12px] font-bold text-success">94/100</span>
        </div>
        <div className="space-y-2.5">
          {[
            { label: "Title tag & meta description", score: 100 },
            { label: "Heading structure (H1–H3)", score: 95 },
            { label: "Internal linking", score: 85 },
            { label: "Image alt attributes", score: 90 },
            { label: "Keyword placement & density", score: 98 },
          ].map((item, i) => (
            <div key={i}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[11px] text-foreground/70">{item.label}</span>
                <span className="text-[10px] font-medium text-success">{item.score}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-border-light">
                <div
                  className="h-1.5 rounded-full bg-success"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "05",
    title: "Publish into your existing CMS",
    description: (
      <span>
        Push content directly into WordPress, Webflow, Framer, or Notion.
        See all{" "}
        <a
          href="/integrations"
          className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-hover"
        >
          integrations
        </a>
        .
      </span>
    ),
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-bg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M12 3v12M7.5 10.5 12 6l4.5 4.5" />
              <path d="M4 16v2.5a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5V16" />
            </svg>
          </div>
          <span className="text-[13px] font-semibold text-foreground">Publish</span>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2">
          {[
            { name: "WordPress", active: true },
            { name: "Webflow", active: false },
            { name: "Framer", active: false },
            { name: "Notion", active: false },
          ].map((cms, i) => (
            <div
              key={i}
              className={`rounded-lg border px-3 py-2 text-center text-[11px] font-medium ${
                cms.active
                  ? "border-accent/30 bg-accent-bg text-accent"
                  : "border-border-light bg-border-light/20 text-muted"
              }`}
            >
              {cms.name}
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-success-bg/50 p-3">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-[12px] font-medium text-success">Published to WordPress</span>
          </div>
          <p className="mt-1 pl-[22px] text-[10px] text-muted-light">
            &ldquo;How to Reduce SaaS Churn Rate&rdquo; is now live
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "06",
    title: "Measure performance and improve",
    description:
      "Track which topics drive rankings, impressions, and traffic over time.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-bg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M3 3v18h18" />
              <path d="m7 16 4-8 4 5 5-7" />
            </svg>
          </div>
          <span className="text-[13px] font-semibold text-foreground">Performance</span>
          <span className="ml-auto text-[11px] font-medium text-success">+42% traffic</span>
        </div>
        {/* Mini ranking chart */}
        <div className="mb-3 flex items-end gap-[3px]">
          {[15, 20, 18, 28, 32, 36, 34, 42, 48, 52, 50, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent-light/30"
              style={{ height: `${h * 0.5}px` }}
            />
          ))}
        </div>
        <div className="space-y-1.5">
          {[
            { title: "SaaS Churn Guide", clicks: "1.8K", pos: "#3" },
            { title: "PLG Strategy", clicks: "1.2K", pos: "#5" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-accent-bg/30 px-3 py-2">
              <span className="text-[11px] text-foreground/70">{item.title}</span>
              <div className="flex items-center gap-1.5">
                <span className="rounded-full bg-accent-bg px-1.5 py-0.5 text-[10px] font-medium text-accent">{item.clicks}</span>
                <span className="rounded-full bg-success-bg px-1.5 py-0.5 text-[10px] font-medium text-success">{item.pos}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function SaaSWorkflow() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          How SaaS teams use RankSEO
        </h2>

        {/* Vertical stacked panels */}
        <div className="mt-14 space-y-6">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.number}
                className={`reveal reveal-delay-${Math.min(i % 3 + 1, 4)} rounded-2xl border border-border-light bg-white p-6 shadow-sm md:p-8`}
              >
                <div className={`grid items-center gap-8 md:gap-12 lg:grid-cols-2 ${isEven ? "lg:[direction:rtl]" : ""}`}>
                  {/* Text side */}
                  <div className={isEven ? "lg:[direction:ltr]" : ""}>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                        {step.number}
                      </div>
                      <h3 className="text-[17px] font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-[14px] leading-[1.7] text-muted">{step.description}</p>
                  </div>

                  {/* Visual side */}
                  <div className={isEven ? "lg:[direction:ltr]" : ""}>{step.visual}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
