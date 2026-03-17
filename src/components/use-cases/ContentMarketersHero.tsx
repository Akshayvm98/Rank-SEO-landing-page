export function ContentMarketersHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div>
            <h1 className="reveal text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[3.25rem]">
              SEO for content marketers who need to{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                scale without burning out
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-5 max-w-[480px] text-[17px] leading-[1.65] text-muted">
              RankSEO helps you turn keyword research, content creation,
              optimization, and publishing into one repeatable workflow.
            </p>

            <div className="reveal reveal-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
              >
                Start $1 Trial
              </a>
              <a
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-7 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-foreground/[0.03]"
              >
                View Pricing
              </a>
            </div>

            <p className="reveal reveal-delay-3 mt-5 text-[14px] text-muted-light">
              More output. Less manual work.
            </p>
          </div>

          {/* Right: Workflow Visual */}
          <div className="reveal reveal-delay-2 relative">
            <div className="space-y-3">
              {/* Keyword Clusters Card */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-bg">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
                      <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="2" cy="3" r="1.5" fill="currentColor" opacity="0.4" />
                      <circle cx="12" cy="4" r="1.5" fill="currentColor" opacity="0.4" />
                      <circle cx="11" cy="11" r="1.5" fill="currentColor" opacity="0.4" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-foreground">Keyword Clusters</span>
                </div>
                <div className="space-y-1.5">
                  {["content marketing strategy", "blog post optimization", "SEO writing tips"].map((kw, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-accent-bg/50 px-3 py-1.5">
                      <span className="text-[12px] text-foreground/70">{kw}</span>
                      <span className="text-[11px] font-medium text-accent">{[2400, 1800, 3100][i]}/mo</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Article Drafts Card */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-bg">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
                        <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="4.5" y1="4" x2="9.5" y2="4" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                        <line x1="4.5" y1="6.5" x2="9.5" y2="6.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                        <line x1="4.5" y1="9" x2="7.5" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-foreground">Drafts</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: "How to Scale Blog Content", status: "Draft", color: "bg-amber-100 text-amber-700" },
                      { title: "SEO Writing Best Practices", status: "Ready", color: "bg-accent-bg text-accent" },
                      { title: "Content Calendar Guide", status: "Published", color: "bg-success-bg text-success" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between gap-2">
                        <span className="truncate text-[11px] text-foreground/70">{item.title}</span>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${item.color}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SEO Score Gauge */}
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-success-bg">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-success">
                        <path d="M7 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4.5 7l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-foreground">SEO Score</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-16 w-16">
                      <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="88" strokeDashoffset="10" strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[16px] font-bold text-foreground">
                        89
                      </span>
                    </div>
                    <span className="mt-1.5 text-[11px] text-muted-light">Optimization score</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Publish + Performance */}
              <div className="grid grid-cols-2 gap-3">
                {/* Publish Status */}
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-bg">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
                        <path d="M7 1v8M3.5 5.5 7 2l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 10v1.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-foreground">Publish</span>
                  </div>
                  <div className="space-y-1.5">
                    {["WordPress", "Webflow", "Framer"].map((p, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${i === 0 ? "bg-success" : "bg-border"}`} />
                        <span className="text-[11px] text-foreground/70">{p}</span>
                        {i === 0 && <span className="text-[10px] text-success">Connected</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini Performance Chart */}
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-bg">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
                        <polyline points="1,11 4,7 7,9 10,4 13,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-foreground">Performance</span>
                  </div>
                  <div className="flex items-end gap-1 pt-1">
                    {[35, 42, 38, 55, 48, 62, 70, 65, 78, 82].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-accent/20"
                        style={{ height: `${h * 0.4}px` }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[10px] text-muted-light">Last 30 days</span>
                    <span className="text-[11px] font-medium text-success">+23%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
