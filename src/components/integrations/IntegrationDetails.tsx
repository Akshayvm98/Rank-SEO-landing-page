const sections = [
  {
    title: "Google Search Console integration for real SEO opportunities",
    body: "RankSEO connects directly to Google Search Console so you can turn your own performance data into a practical content strategy. Instead of guessing what to write, you can prioritize topics based on impressions, clicks, ranking positions, and search demand.",
    bullets: [
      "Pull query and page performance data from verified properties",
      "Identify where your site already has traction",
      "Use real impressions and clicks to guide content decisions",
      "Turn existing visibility into new keyword opportunities",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4285F4]/10">
            <svg className="h-4 w-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-medium text-foreground">Search Console</p>
            <p className="text-[11px] text-success">Connected</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { metric: "Impressions", value: "142.8K", change: "+23%" },
            { metric: "Clicks", value: "8,412", change: "+18%" },
            { metric: "Avg. Position", value: "14.2", change: "-3.1" },
          ].map((m) => (
            <div key={m.metric} className="flex items-center justify-between rounded-lg bg-border-light/40 px-3 py-2">
              <span className="text-[12px] text-muted">{m.metric}</span>
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-foreground">{m.value}</span>
                <span className="text-[11px] font-medium text-success">{m.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "WordPress publishing without copy-paste workflows",
    body: "Publish SEO-optimized articles directly to WordPress with cleaner formatting and less manual work. RankSEO helps move content from draft to live page faster.",
    bullets: [
      "Push content directly into WordPress",
      "Include titles, descriptions, and optimization details",
      "Reduce manual formatting steps",
      "Keep publishing workflows simple for content teams",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-success-bg flex items-center justify-center">
            <svg className="h-3 w-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <span className="text-[12px] font-medium text-success">Published to WordPress</span>
        </div>
        <div className="space-y-2">
          {["SEO Automation Guide", "Keyword Research Tips", "Content Strategy 2026"].map((title) => (
            <div key={title} className="flex items-center justify-between rounded-lg border border-border-light px-3 py-2.5">
              <span className="text-[13px] text-foreground">{title}</span>
              <span className="text-[11px] text-success">Live</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Webflow and Framer integrations for modern website teams",
    body: "For teams using Webflow or Framer, RankSEO makes it easier to produce and publish search-focused content without breaking your existing site workflow.",
    bullets: [
      "Publish content into modern CMS environments",
      "Keep structure and formatting consistent",
      "Support marketing sites that move quickly",
      "Reduce content ops overhead",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="space-y-3">
          {[
            { cms: "Webflow", status: "Connected", color: "#4353FF" },
            { cms: "Framer", status: "Connected", color: "#0055FF" },
          ].map((item) => (
            <div key={item.cms} className="flex items-center justify-between rounded-lg bg-border-light/40 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[13px] font-medium text-foreground">{item.cms}</span>
              </div>
              <span className="text-[12px] text-success">{item.status}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-accent-bg/40 px-4 py-2.5 text-center">
          <span className="text-[12px] text-muted">2 platforms connected</span>
        </div>
      </div>
    ),
  },
  {
    title: "Notion integration for planning and publishing workflows",
    body: "Use Notion as part of your content process, whether you manage briefs, approvals, or published articles there. RankSEO fits into the systems many teams already use.",
    bullets: [
      "Support content planning workflows",
      "Keep drafts and content operations organized",
      "Fit into team documentation habits",
      "Make collaboration easier",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="space-y-2">
          {[
            { page: "Content Brief: SEO Tools", status: "Draft" },
            { page: "Article: Keyword Research", status: "In Review" },
            { page: "Published: Traffic Growth", status: "Complete" },
          ].map((item) => (
            <div key={item.page} className="flex items-center justify-between rounded-lg border border-border-light px-3 py-2.5">
              <span className="text-[13px] text-foreground">{item.page}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                item.status === "Complete"
                  ? "bg-success-bg text-success"
                  : item.status === "In Review"
                  ? "bg-accent-bg text-accent"
                  : "bg-border-light text-muted"
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Analytics integrations to measure SEO performance over time",
    body: "Publishing is only part of the job. RankSEO helps you understand how articles perform by connecting content workflows with analytics and ranking data.",
    bullets: [
      "Monitor clicks, impressions, and position changes",
      "Track article-level performance",
      "Understand which topics are gaining traction",
      "Use insights to improve future content strategy",
    ],
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[12px] font-medium text-foreground">Performance</span>
          <span className="text-[11px] text-muted-light">Last 30 days</span>
        </div>
        <div className="flex items-end justify-between gap-1 h-[70px] mb-3">
          {[25, 30, 35, 42, 38, 50, 48, 58, 62, 70, 68, 78].map((h, i) => (
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
            <p className="text-[13px] font-semibold text-foreground">8.4K</p>
          </div>
          <div className="rounded-lg bg-accent-bg/50 px-2 py-1.5 text-center">
            <p className="text-[10px] text-muted">Impressions</p>
            <p className="text-[13px] font-semibold text-foreground">142K</p>
          </div>
          <div className="rounded-lg bg-success-bg/50 px-2 py-1.5 text-center">
            <p className="text-[10px] text-muted">Avg. Pos.</p>
            <p className="text-[13px] font-semibold text-success">14.2</p>
          </div>
        </div>
      </div>
    ),
  },
];

export function IntegrationDetails() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
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
                  {section.body}
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
