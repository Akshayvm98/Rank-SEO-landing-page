export function IntegrationsCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-light/10" />

          <div className="relative">
            <h2 className="mx-auto max-w-[560px] text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[2.25rem]">
              Connect your workflow and start growing organic traffic
            </h2>
            <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-relaxed text-white/60">
              Try RankSEO for $1 for 3 days and see how connected SEO
              automation can simplify content growth.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="/pricing"
                className="inline-flex h-12 items-center rounded-lg bg-white px-8 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
              >
                Start $1 Trial
              </a>
              <a
                href="/pricing"
                className="inline-flex h-12 items-center rounded-lg border border-white/20 px-7 text-[14px] font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-4 text-[13px] text-white/40">
              Full access during trial. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
