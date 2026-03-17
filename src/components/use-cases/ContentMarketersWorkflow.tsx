const steps = [
  {
    number: "01",
    title: "Find the right topics",
    description:
      "Use Search Console, keyword data, and SERP insights to identify high-potential topics.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">Topic Opportunities</span>
          <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">18 found</span>
        </div>
        <div className="space-y-1.5">
          {[
            { kw: "content marketing ROI", vol: "3.2K", diff: 34 },
            { kw: "SEO content strategy", vol: "5.1K", diff: 42 },
            { kw: "blog traffic growth", vol: "1.8K", diff: 28 },
          ].map((item) => (
            <div key={item.kw} className="flex items-center justify-between rounded-lg bg-accent-bg/30 px-3 py-1.5">
              <span className="text-[11px] text-foreground/70">{item.kw}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-light">{item.vol}</span>
                <span className="text-[10px] font-medium text-success">KD {item.diff}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Build a smarter content plan",
    description:
      "Group related terms into clusters and prioritize what to publish next.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
        <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted-light">Content Clusters</div>
        <div className="space-y-2">
          {[
            { cluster: "Content Strategy", articles: 5, priority: "High" },
            { cluster: "SEO Fundamentals", articles: 3, priority: "Medium" },
            { cluster: "Analytics & Tracking", articles: 4, priority: "High" },
          ].map((item) => (
            <div key={item.cluster} className="flex items-center justify-between rounded-lg border border-border-light px-3 py-2">
              <div>
                <p className="text-[11px] font-medium text-foreground">{item.cluster}</p>
                <p className="text-[10px] text-muted-light">{item.articles} articles planned</p>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                item.priority === "High" ? "bg-accent-bg text-accent" : "bg-border-light text-muted"
              }`}>{item.priority}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Generate optimized drafts",
    description:
      "Create SEO-structured articles in your brand voice.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] font-medium text-accent">Generating draft...</span>
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-[85%] rounded bg-foreground/8" />
          <div className="h-2.5 w-full rounded bg-foreground/8" />
          <div className="h-2.5 w-[70%] rounded bg-foreground/8" />
          <div className="mt-3 h-2.5 w-[90%] rounded bg-foreground/5" />
          <div className="h-2.5 w-[50%] rounded bg-foreground/5" />
        </div>
        <div className="mt-3 flex items-center gap-2 border-t border-border-light pt-3">
          <span className="rounded bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">2,100 words</span>
          <span className="rounded bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">Brand voice matched</span>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Improve before publishing",
    description:
      "Review SEO score, headings, links, metadata, and readability.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
        <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted-light">Optimization</div>
        <div className="space-y-2">
          {[
            { label: "SEO Score", value: 92, color: "bg-accent" },
            { label: "Readability", value: 86, color: "bg-success" },
            { label: "Meta & Links", value: 78, color: "bg-accent-light" },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[11px] text-muted">{item.label}</span>
                <span className="text-[11px] font-semibold text-foreground">{item.value}%</span>
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
    number: "05",
    title: "Publish without the extra steps",
    description: (
      <span>
        Push directly to WordPress, Webflow, Framer, or Notion. See all{" "}
        <a href="/integrations" className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-hover">
          integrations
        </a>
        .
      </span>
    ),
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
        <div className="space-y-2">
          {[
            { name: "WordPress", status: "Published", time: "Just now" },
            { name: "Webflow", status: "Queued", time: "In 5 min" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-lg border border-border-light px-3 py-2">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${item.status === "Published" ? "bg-success" : "bg-amber-400"}`} />
                <span className="text-[11px] font-medium text-foreground">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-medium ${item.status === "Published" ? "text-success" : "text-amber-600"}`}>{item.status}</span>
                <span className="text-[10px] text-muted-light">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "06",
    title: "Track what performs",
    description:
      "Monitor clicks, impressions, rankings, and article performance over time.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[11px] font-medium text-foreground">Performance</span>
          <span className="text-[10px] text-muted-light">Last 30 days</span>
        </div>
        <div className="mb-3 flex h-[44px] items-end gap-[3px]">
          {[22, 28, 35, 30, 42, 38, 50, 55, 48, 60, 65, 72].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light/60"
              style={{ height: `${h}%`, opacity: 0.5 + h / 150 }}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Clicks", value: "4.2K", change: "+18%" },
            { label: "Impressions", value: "52K", change: "+31%" },
            { label: "Avg. Rank", value: "12.4", change: "-3.2" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-accent-bg/40 px-2 py-1.5 text-center">
              <p className="text-[9px] text-muted">{stat.label}</p>
              <p className="text-[12px] font-semibold text-foreground">{stat.value}</p>
              <p className="text-[9px] font-medium text-success">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function ContentMarketersWorkflow() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          How content marketers use RankSEO
        </h2>
        <p className="reveal reveal-delay-1 mx-auto mt-3 max-w-[480px] text-center text-[15px] text-muted">
          Six steps from keyword discovery to measurable results.
        </p>

        {/* Desktop: Horizontal step flow */}
        <div className="reveal reveal-delay-2 mt-14 hidden lg:block">
          <div className="grid grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-border-light bg-white p-5 transition-all duration-200 hover:border-border hover:shadow-sm`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                    {step.number}
                  </div>
                  <h3 className="text-[15px] font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="mb-4 text-[13px] leading-relaxed text-muted">{step.description}</p>
                {step.visual}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Stacked cards */}
        <div className="reveal reveal-delay-2 mt-10 space-y-4 lg:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-border-light bg-white p-5`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-0.5 text-[13px] text-muted">{step.description}</p>
                </div>
              </div>
              {step.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
