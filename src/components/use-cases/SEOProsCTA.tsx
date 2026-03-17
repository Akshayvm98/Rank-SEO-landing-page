export function SEOProsCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-6">
        <div className="reveal rounded-2xl border border-border-light bg-white p-10 text-center md:p-14">
          <h2 className="text-[1.75rem] font-bold leading-tight tracking-[-0.02em] text-foreground md:text-[2.25rem]">
            Let RankSEO handle the repetitive side of SEO
          </h2>

          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.7] text-muted">
            Start your $1 trial and build a workflow that scales execution
            without compromising control.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
            >
              Start $1 Trial
            </a>
            <a
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-white px-8 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/20 hover:shadow-sm"
            >
              View Pricing
            </a>
          </div>

          <p className="mt-5 text-[13px] text-muted-light">
            Full access during trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
