export function SEOProsHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1100px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          {/* Left: Text */}
          <div>
            <h1 className="reveal text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[3rem]">
              Automate SEO execution.{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Keep full control of strategy.
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-5 max-w-[460px] text-[16px] leading-[1.7] text-muted">
              RankSEO helps SEO professionals move faster on research, content
              production, optimization, and publishing — without turning strategy
              into a black box.
            </p>

            <div className="reveal reveal-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
              >
                Start $1 Trial
              </a>
              <a
                href="/features"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-white px-7 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/20 hover:shadow-sm"
              >
                View Features
              </a>
            </div>

            <p className="reveal reveal-delay-3 mt-5 text-[14px] text-muted-light">
              Less repetitive work. More leverage.
            </p>
          </div>

          {/* Right: Dashboard Visual */}
          <div className="reveal reveal-delay-2 relative">
            <div className="space-y-3">
              {/* Keyword Table Card */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                    Keyword Opportunities
                  </span>
                  <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">
                    24 new
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-2 pb-1 text-[9px] uppercase tracking-wider text-muted-light">
                    <span>Keyword</span>
                    <span>Volume</span>
                    <span>KD</span>
                    <span>Score</span>
                  </div>
                  {[
                    { kw: "seo automation platform", vol: "3.2K", kd: 28, score: 94 },
                    { kw: "automated content workflow", vol: "1.8K", kd: 22, score: 91 },
                    { kw: "seo content at scale", vol: "2.4K", kd: 35, score: 82 },
                    { kw: "keyword research tool", vol: "6.1K", kd: 52, score: 71 },
                  ].map((row) => (
                    <div
                      key={row.kw}
                      className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-3 rounded-lg bg-border-light/40 px-2 py-1.5 text-[11px]"
                    >
                      <span className="truncate text-foreground">{row.kw}</span>
                      <span className="text-muted">{row.vol}</span>
                      <span className={`font-medium ${row.kd < 30 ? "text-success" : row.kd < 40 ? "text-accent" : "text-muted"}`}>
                        {row.kd}
                      </span>
                      <div className="flex items-center gap-1">
                        <div className="h-1.5 w-6 overflow-hidden rounded-full bg-border-light">
                          <div className="h-full rounded-full bg-accent" style={{ width: `${row.score}%` }} />
                        </div>
                        <span className="font-medium text-accent">{row.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Article Status Card */}
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                    Articles
                  </span>
                  <div className="mt-3 space-y-2">
                    {[
                      { title: "SEO Automation Guide", status: "Published", color: "bg-success text-success" },
                      { title: "Content at Scale", status: "Optimizing", color: "bg-accent text-accent" },
                      { title: "Keyword Strategy 2026", status: "Draft", color: "bg-muted-light/30 text-muted" },
                    ].map((article) => (
                      <div key={article.title} className="flex items-center justify-between">
                        <span className="truncate text-[11px] text-foreground/80">{article.title}</span>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium ${article.color} bg-opacity-10`}>
                          {article.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optimization Checklist */}
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                    Optimization
                  </span>
                  <div className="mt-3 space-y-2">
                    {[
                      { check: "Title tag", done: true },
                      { check: "Meta description", done: true },
                      { check: "Internal links", done: true },
                      { check: "Image alt text", done: false },
                    ].map((item) => (
                      <div key={item.check} className="flex items-center gap-2 text-[11px]">
                        {item.done ? (
                          <svg className="h-3.5 w-3.5 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <div className="h-3.5 w-3.5 shrink-0 rounded border border-border" />
                        )}
                        <span className={item.done ? "text-foreground/70" : "text-muted"}>{item.check}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ranking Trend Chart */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                    Ranking Trend
                  </span>
                  <div className="flex gap-3 text-[10px] text-muted">
                    <span>Clicks: <span className="font-medium text-foreground">14.2K</span></span>
                    <span>Avg. Pos: <span className="font-medium text-foreground">8.4</span></span>
                  </div>
                </div>
                <div className="flex h-[40px] items-end gap-[2px]">
                  {[28, 32, 30, 38, 42, 40, 48, 52, 50, 56, 60, 58, 65, 70, 68, 75, 80, 78, 85, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light/60"
                      style={{ height: `${h}%`, opacity: 0.5 + h / 200 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
