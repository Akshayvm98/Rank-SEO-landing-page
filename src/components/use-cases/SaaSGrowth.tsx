const outcomes = [
  "Clearer priorities for what to create and when",
  "More consistent output without relying on heroics",
  "Better visibility into what works and what doesn\u2019t",
  "More confidence in where traffic growth will come from",
];

export function SaaSGrowth() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto max-w-[600px] text-center">
          <h2 className="text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            What changes when SEO becomes a system
          </h2>
          <p className="reveal reveal-delay-1 mt-4 text-[15px] leading-[1.7] text-muted">
            When SaaS teams stop treating SEO like a side project, it starts
            behaving more like a real acquisition channel.
          </p>
        </div>

        {/* Outcomes checklist */}
        <div className="reveal reveal-delay-2 mx-auto mt-10 max-w-[520px] space-y-3">
          {outcomes.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-border-light bg-white px-4 py-3 shadow-sm">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-bg">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <span className="text-[14px] leading-[1.6] text-foreground/80">{item}</span>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-3 mx-auto mt-6 max-w-[520px] text-center text-[14px] font-medium text-muted-light">
          Not overnight magic. Just a workflow that compounds.
        </p>

        {/* Growth Panel Card */}
        <div className="reveal reveal-delay-3 mx-auto mt-10 max-w-[560px]">
          <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-bg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M3 3v18h18" />
                  <path d="m7 16 4-8 4 5 5-7" />
                </svg>
              </div>
              <span className="text-[14px] font-semibold text-foreground">Growth Summary</span>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-accent-bg px-3 py-1 text-[12px] font-medium text-accent">
                Content published this month: 12
              </span>
              <span className="rounded-full bg-success-bg px-3 py-1 text-[12px] font-medium text-success">
                Ranking gains: +18 avg positions
              </span>
            </div>

            {/* Impressions trend */}
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-medium text-muted">Impressions trend</span>
                <span className="text-[11px] font-medium text-success">+56%</span>
              </div>
              <div className="flex items-end gap-[2px]">
                {[18, 22, 20, 26, 30, 28, 35, 38, 36, 44, 50, 48, 56, 62, 68, 74].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent-light/25"
                    style={{ height: `${h * 0.45}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Top performing */}
            <div className="mt-4 rounded-lg bg-accent-bg/40 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-light">Top performing</span>
                  <p className="mt-0.5 text-[13px] font-semibold text-foreground/80">SaaS onboarding guide</p>
                </div>
                <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[12px] font-semibold text-success">
                  2.4K clicks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
