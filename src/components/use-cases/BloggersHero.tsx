export function BloggersHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/30 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div>
            <h1 className="reveal text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[3.25rem]">
              SEO for bloggers who want traffic{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                without guessing what to write
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-5 max-w-[480px] text-[17px] leading-[1.65] text-muted">
              RankSEO helps you find realistic keyword opportunities, generate
              optimized blog posts, and publish consistently — without turning
              blogging into a full-time SEO job.
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
              More clarity. More consistency. More organic traffic.
            </p>
          </div>

          {/* Right: Product Visual */}
          <div className="reveal reveal-delay-2 relative">
            <div className="space-y-3">
              {/* Blog Topics Card */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-bg">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
                      <path d="M2 4h10M2 7h7M2 10h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-foreground">Blog Topics</span>
                  <span className="ml-auto rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">3 suggestions</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { topic: "How to start a food blog in 2026", vol: "4.2K" },
                    { topic: "Best blogging platforms for beginners", vol: "6.8K" },
                    { topic: "Blog post SEO checklist", vol: "2.1K" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-accent-bg/40 px-3 py-2">
                      <span className="text-[12px] text-foreground/70">{item.topic}</span>
                      <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-accent">{item.vol}/mo</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Row: SEO Score + Article Preview */}
              <div className="grid grid-cols-2 gap-3">
                {/* SEO Score Badge */}
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-success-bg">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-success">
                        <path d="M4.5 7l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-foreground">SEO Score</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-16 w-16">
                      <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="88" strokeDashoffset="7" strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[16px] font-bold text-foreground">
                        92
                      </span>
                    </div>
                    <span className="mt-1.5 text-[11px] text-muted-light">Optimization score</span>
                  </div>
                </div>

                {/* Article Draft Preview */}
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
                    <span className="text-[13px] font-semibold text-foreground">Draft</span>
                  </div>
                  <p className="text-[11px] font-medium text-foreground/80">How to Start a Food Blog in 2026</p>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-2 w-full rounded bg-foreground/6" />
                    <div className="h-2 w-[85%] rounded bg-foreground/6" />
                    <div className="h-2 w-[70%] rounded bg-foreground/6" />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">1,850 words</span>
                    <span className="rounded bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">Ready</span>
                  </div>
                </div>
              </div>

              {/* Traffic Sparkline */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-bg">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
                        <polyline points="1,11 3.5,8 6,9.5 9,5 13,3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-foreground">Blog Traffic</span>
                  </div>
                  <span className="text-[11px] font-medium text-success">+47% this month</span>
                </div>
                <div className="mt-3 flex items-end gap-[3px]">
                  {[18, 22, 20, 28, 32, 30, 38, 42, 40, 48, 55, 60, 58, 65, 72].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent-light/30"
                      style={{ height: `${h * 0.45}px` }}
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
