export function UseCasesCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto max-w-[600px] rounded-2xl border border-border-light bg-accent-bg/20 px-8 py-14 text-center md:px-12">
          <h2 className="reveal reveal-delay-1 text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Start with the workflow that fits you best
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-[440px] text-[16px] leading-[1.65] text-muted">
            Explore the use case that matches your role, then start your $1 trial when you're
            ready.
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/pricing"
              className="inline-flex h-11 items-center rounded-lg bg-foreground px-6 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
            >
              Start $1 Trial
            </a>
            <a
              href="/pricing"
              className="inline-flex h-11 items-center rounded-lg border border-border bg-white px-5 text-[14px] font-medium text-foreground transition-all duration-200 hover:border-muted-light"
            >
              View Pricing
            </a>
          </div>

          <p className="reveal reveal-delay-4 mt-5 text-[13px] text-muted-light">
            Full access during trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
