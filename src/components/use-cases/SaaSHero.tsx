export function SaaSHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/30 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div>
            <h1 className="reveal text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[3.25rem]">
              SEO for SaaS teams that want{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                predictable organic growth
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-5 max-w-[480px] text-[17px] leading-[1.65] text-muted">
              RankSEO helps you turn search data, keyword opportunities, content
              production, and performance tracking into one repeatable growth
              system.
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
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-7 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-foreground/[0.03]"
              >
                View Features
              </a>
            </div>

            <p className="reveal reveal-delay-3 mt-5 text-[14px] text-muted-light">
              Less guesswork. More compounding growth.
            </p>
          </div>

          {/* Right: SaaS Growth Dashboard Visual */}
          <div className="reveal reveal-delay-2 relative">
            <div className="space-y-3">
              {/* Keyword Opportunity Pipeline */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-bg">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-foreground">Keyword Pipeline</span>
                  <span className="ml-auto rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">3 opportunities</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { kw: "saas onboarding best practices", vol: "3.6K", score: 87 },
                    { kw: "product-led growth strategy", vol: "5.2K", score: 74 },
                    { kw: "reduce saas churn rate", vol: "2.8K", score: 91 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-accent-bg/40 px-3 py-2">
                      <span className="text-[12px] text-foreground/70 truncate mr-3">{item.kw}</span>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-muted">{item.vol}/mo</span>
                        <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">{item.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Row: Article Production + Ranking Movement */}
              <div className="grid grid-cols-5 gap-3">
                {/* Article Production Status */}
                <div className="col-span-3 rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-bg">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M8 7h8M8 12h6M8 17h4" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-foreground">Articles</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { title: "SaaS Onboarding Guide", status: "Published", color: "text-success bg-success-bg" },
                      { title: "PLG Strategy Framework", status: "In Review", color: "text-accent bg-accent-bg" },
                      { title: "Churn Reduction Tactics", status: "Drafting", color: "text-muted bg-border-light" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg bg-accent-bg/30 px-3 py-1.5">
                        <span className="text-[11px] text-foreground/70 truncate mr-2">{item.title}</span>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${item.color}`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ranking Movement */}
                <div className="col-span-2 rounded-xl border border-border-light bg-white p-4 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-success-bg mb-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                  </div>
                  <span className="text-[22px] font-bold text-foreground">+12</span>
                  <span className="text-[10px] text-muted-light">avg positions</span>
                </div>
              </div>

              {/* Bottom Row: Impressions Chart + Content Performance */}
              <div className="grid grid-cols-2 gap-3">
                {/* Impressions/Clicks Bar Chart */}
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[13px] font-semibold text-foreground">Impressions</span>
                    <span className="text-[11px] font-medium text-success">+34%</span>
                  </div>
                  <div className="flex items-end gap-[3px]">
                    {[20, 25, 22, 30, 35, 32, 40, 45, 42, 52, 58, 65].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent-light/30"
                        style={{ height: `${h * 0.5}px` }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[9px] font-medium text-accent">Published to WordPress</span>
                  </div>
                </div>

                {/* Content Performance */}
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-bg">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                        <path d="M3 3v18h18" />
                        <path d="m7 16 4-8 4 5 5-7" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-foreground">Top Content</span>
                  </div>
                  <p className="text-[11px] font-medium text-foreground/80">SaaS Onboarding Guide</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">2.4K clicks</span>
                    <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">Pos #4</span>
                  </div>
                  <div className="mt-2.5 space-y-1">
                    <div className="h-1.5 w-full rounded bg-success/20">
                      <div className="h-1.5 w-[85%] rounded bg-success" />
                    </div>
                    <span className="text-[9px] text-muted-light">85% of traffic goal</span>
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
