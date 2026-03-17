export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="reveal text-[2.5rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[3.25rem]">
              Features built to grow your traffic{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                not your workload
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-5 max-w-[520px] text-[17px] leading-[1.65] text-muted">
              RankSEO helps you find real keyword opportunities, generate
              optimized content, publish faster, and track what works. All in
              one workflow.
            </p>

            <div className="reveal reveal-delay-2 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/pricing"
                className="inline-flex h-11 items-center rounded-lg bg-foreground px-6 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-[14px] font-medium text-foreground transition-all duration-200 hover:border-muted-light hover:bg-surface"
              >
                View Pricing
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <FeaturesDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesDashboard() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-accent/[0.06] to-accent-light/[0.04] blur-2xl" />

      <div className="relative rounded-2xl border border-border bg-white p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-success" />
            <span className="text-[13px] font-medium text-foreground">Content Pipeline</span>
          </div>
          <span className="text-[12px] text-muted-light">This week</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-lg border border-border-light p-3">
            <p className="text-[11px] text-muted-light">Keywords Found</p>
            <p className="mt-0.5 text-[18px] font-semibold tracking-tight text-foreground">248</p>
          </div>
          <div className="rounded-lg border border-border-light p-3">
            <p className="text-[11px] text-muted-light">Articles Ready</p>
            <p className="mt-0.5 text-[18px] font-semibold tracking-tight text-foreground">12</p>
          </div>
          <div className="rounded-lg border border-border-light p-3">
            <p className="text-[11px] text-muted-light">Avg. SEO Score</p>
            <p className="mt-0.5 text-[18px] font-semibold tracking-tight text-accent">92</p>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-b from-accent-bg/30 to-transparent border border-border-light p-4">
          <div className="flex items-end justify-between gap-1 h-[80px]">
            {[30, 45, 38, 52, 48, 65, 58, 72, 68, 82, 78, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light/70"
                style={{ height: `${h}%`, opacity: 0.5 + h / 200 }}
              />
            ))}
          </div>
          <p className="mt-2 text-[11px] text-muted-light">Organic impressions growth</p>
        </div>
      </div>
    </div>
  );
}
