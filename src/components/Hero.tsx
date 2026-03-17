export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32">
      {/* Background: grid + gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Left: Copy */}
          <div>
            <h1 className="animate-hero text-[2.75rem] font-bold leading-[1.05] tracking-[-0.035em] text-foreground md:text-[3.75rem] lg:text-[4.25rem]">
              Build an organic growth engine that{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                runs itself
              </span>
            </h1>

            <p className="animate-hero-delay-2 mt-6 max-w-[500px] text-[17px] leading-[1.7] text-muted">
              Rank SEO connects to your Search Console, finds real keyword
              opportunities, writes optimized content in your brand voice, and
              publishes it for you. Fully automated.
            </p>

            <div className="animate-hero-delay-3 mt-9 flex flex-wrap items-center gap-3">
              <a
                href="/pricing"
                className="inline-flex h-12 items-center rounded-xl bg-foreground px-8 text-[15px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:shadow-foreground/15 hover:-translate-y-0.5"
              >
                Start $1 Trial
              </a>
              <a
                href="#workflow"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-border px-6 text-[14px] font-medium text-foreground transition-all duration-300 hover:border-muted-light hover:bg-white hover:shadow-sm"
              >
                <svg className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                See how it works
              </a>
            </div>

            <p className="animate-hero-delay-4 mt-6 text-[13px] text-muted-light">
              Trusted by 100+ high-growth brands.
            </p>
          </div>

          {/* Right: Product mockup */}
          <div className="animate-hero-delay-3 relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-12 rounded-3xl bg-gradient-to-br from-accent/[0.07] via-accent-light/[0.04] to-transparent blur-3xl" />

      {/* Main card */}
      <div className="relative rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
        {/* Top bar */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-success" />
            <span className="text-[13px] font-medium text-foreground">SEO Dashboard</span>
          </div>
          <span className="rounded-full bg-border-light px-2.5 py-0.5 text-[11px] font-medium text-muted">Last 30 days</span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <StatCard label="Impressions" value="142.8K" change="+23%" />
          <StatCard label="Clicks" value="8,412" change="+18%" />
          <StatCard label="Avg. Position" value="14.2" change="-3.1" />
        </div>

        {/* Chart */}
        <div className="mb-4 rounded-xl bg-gradient-to-b from-accent-bg/40 to-accent-bg/10 border border-accent-muted/20 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-medium text-muted">Organic Traffic</span>
            <span className="text-[11px] font-semibold text-accent">+23% vs prev.</span>
          </div>
          <div className="flex items-end justify-between gap-[3px] h-[80px]">
            {[35, 42, 38, 55, 48, 62, 58, 72, 68, 78, 85, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-accent to-accent-light/70"
                style={{ height: `${h}%`, opacity: 0.4 + (h / 160) }}
              />
            ))}
          </div>
        </div>

        {/* Keyword opportunities */}
        <div className="rounded-xl border border-border-light p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-semibold uppercase tracking-wide text-muted">
              Top Opportunities
            </span>
            <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">
              12 new
            </span>
          </div>
          <div className="space-y-2">
            <KeywordRow keyword="seo automation tools" score={92} volume="2.4K" />
            <KeywordRow keyword="ai content optimization" score={87} volume="1.8K" />
            <KeywordRow keyword="organic traffic growth" score={84} volume="3.1K" />
          </div>
        </div>
      </div>

      {/* Floating AI card */}
      <div className="absolute -bottom-5 -left-4 rounded-xl border border-black/[0.06] bg-white p-3.5 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)] md:-left-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-bg to-accent-muted/30">
            <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-foreground">Article generated</p>
            <p className="text-[11px] text-muted-light">SEO score: 94/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div className="rounded-xl border border-black/[0.04] bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <p className="text-[11px] text-muted-light">{label}</p>
      <p className="mt-0.5 text-[18px] font-bold tracking-tight text-foreground">{value}</p>
      <span className="text-[11px] font-medium text-success">{change}</span>
    </div>
  );
}

function KeywordRow({ keyword, score, volume }: { keyword: string; score: number; volume: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg px-2.5 py-2 transition-colors hover:bg-accent-bg/40">
      <span className="text-[13px] text-foreground">{keyword}</span>
      <div className="flex items-center gap-3">
        <span className="text-[12px] text-muted-light">{volume}/mo</span>
        <span className="flex h-6 min-w-[44px] items-center justify-center rounded-md bg-success-bg text-[12px] font-semibold text-success">
          {score}
        </span>
      </div>
    </div>
  );
}
