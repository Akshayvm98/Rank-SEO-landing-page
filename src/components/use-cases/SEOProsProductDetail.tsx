export function SEOProsProductDetail() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[960px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          Built for teams that care about quality and consistency
        </h2>

        <div className="reveal reveal-delay-1 mt-10 grid gap-4 sm:grid-cols-2">
          {/* 1. Keyword Opportunity Scoring */}
          <div className="reveal reveal-delay-1 rounded-xl border border-border-light bg-white p-5">
            <h3 className="text-[15px] font-semibold text-foreground">Keyword opportunity scoring</h3>
            <p className="mt-1.5 text-[13px] leading-[1.65] text-muted">
              Turn raw search data into a prioritized list of opportunities worth pursuing.
            </p>
            <div className="mt-4 rounded-lg border border-border-light bg-border-light/20 p-3">
              <div className="mb-2 grid grid-cols-[1fr_auto_auto_auto] gap-3 px-1 text-[9px] uppercase tracking-wider text-muted-light">
                <span>Keyword</span>
                <span>Volume</span>
                <span>Difficulty</span>
                <span>Score</span>
              </div>
              {[
                { kw: "seo automation", vol: "4.8K", diff: 32, score: 92 },
                { kw: "content workflow", vol: "2.1K", diff: 24, score: 89 },
                { kw: "keyword clustering", vol: "1.6K", diff: 28, score: 85 },
                { kw: "serp analysis tool", vol: "3.4K", diff: 45, score: 74 },
                { kw: "rank tracking api", vol: "890", diff: 18, score: 71 },
              ].map((row) => (
                <div key={row.kw} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-3 border-b border-border-light/50 px-1 py-1.5 text-[11px] last:border-0">
                  <span className="truncate text-foreground">{row.kw}</span>
                  <span className="text-muted">{row.vol}</span>
                  <span className={`font-medium ${row.diff < 30 ? "text-success" : row.diff < 40 ? "text-accent" : "text-muted"}`}>
                    {row.diff}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-6 overflow-hidden rounded-full bg-border-light">
                      <div
                        className={`h-full rounded-full ${row.score >= 85 ? "bg-accent" : "bg-accent-light"}`}
                        style={{ width: `${row.score}%` }}
                      />
                    </div>
                    <span className="w-5 text-right font-semibold text-foreground">{row.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Structured Content Generation */}
          <div className="reveal reveal-delay-2 rounded-xl border border-border-light bg-white p-5">
            <h3 className="text-[15px] font-semibold text-foreground">Structured content generation</h3>
            <p className="mt-1.5 text-[13px] leading-[1.65] text-muted">
              Produce outlines and drafts faster without starting from zero every time.
            </p>
            <div className="mt-4 rounded-lg border border-border-light bg-border-light/20 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-medium text-foreground">Content Outline</span>
                <span className="rounded bg-accent-bg px-2 py-0.5 text-[9px] font-medium text-accent">Draft</span>
              </div>
              <div className="space-y-2">
                {[
                  { section: "Introduction", words: 280 },
                  { section: "Why Automation Matters", words: 520 },
                  { section: "Building Your Workflow", words: 680 },
                  { section: "Tools and Integration", words: 440 },
                  { section: "Measuring Results", words: 360 },
                  { section: "Conclusion", words: 180 },
                ].map((s) => (
                  <div key={s.section} className="flex items-center justify-between rounded bg-white px-2.5 py-1.5">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-sm bg-accent/20" />
                      <span className="text-[11px] text-foreground">{s.section}</span>
                    </div>
                    <span className="text-[10px] text-muted">{s.words} words</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-border-light/50 pt-2">
                <span className="text-[10px] text-muted-light">Total</span>
                <span className="text-[11px] font-semibold text-foreground">2,460 words</span>
              </div>
            </div>
          </div>

          {/* 3. Optimization Before Publishing */}
          <div className="reveal reveal-delay-3 rounded-xl border border-border-light bg-white p-5">
            <h3 className="text-[15px] font-semibold text-foreground">Optimization before publishing</h3>
            <p className="mt-1.5 text-[13px] leading-[1.65] text-muted">
              Score content for SEO, readability, metadata, links, and structure before it goes live.
            </p>
            <div className="mt-4 rounded-lg border border-border-light bg-border-light/20 p-3">
              <div className="space-y-3">
                {[
                  { label: "SEO Score", value: 94, color: "bg-accent" },
                  { label: "Readability", value: 88, color: "bg-success" },
                  { label: "Metadata", value: 100, color: "bg-accent" },
                  { label: "Internal Links", value: 75, color: "bg-accent-light" },
                  { label: "Structure", value: 92, color: "bg-accent" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {item.value >= 90 ? (
                          <svg className="h-3 w-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                          </svg>
                        )}
                        <span className="text-[11px] text-foreground">{item.label}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-foreground">{item.value}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-light">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Performance Feedback Loop */}
          <div className="reveal reveal-delay-4 rounded-xl border border-border-light bg-white p-5">
            <h3 className="text-[15px] font-semibold text-foreground">Performance feedback loop</h3>
            <p className="mt-1.5 text-[13px] leading-[1.65] text-muted">
              Use clicks, rankings, and impressions to improve what gets created next.
            </p>
            <div className="mt-4 rounded-lg border border-border-light bg-border-light/20 p-3">
              {/* Mini Line Chart */}
              <div className="mb-3 flex h-[60px] items-end gap-[3px]">
                {[20, 24, 22, 30, 28, 35, 40, 38, 45, 50, 48, 55, 60, 58, 65, 72, 70, 78, 82, 88, 85, 92, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light/60"
                    style={{ height: `${h}%`, opacity: 0.4 + h / 200 }}
                  />
                ))}
              </div>
              {/* Metric Chips */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Clicks", value: "14.2K", change: "+23%" },
                  { label: "Impressions", value: "182K", change: "+18%" },
                  { label: "Avg. Position", value: "8.4", change: "-2.1" },
                  { label: "CTR", value: "7.8%", change: "+1.2%" },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-lg bg-white px-2.5 py-2">
                    <div className="text-[9px] text-muted">{metric.label}</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[13px] font-semibold text-foreground">{metric.value}</span>
                      <span className="text-[9px] font-medium text-success">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
