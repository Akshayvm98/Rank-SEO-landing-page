export function AgenciesCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[700px] px-6 text-center">
        <h2 className="reveal text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          Build a cleaner SEO workflow for every client you manage
        </h2>

        <p className="reveal reveal-delay-1 mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-muted">
          Start your $1 trial and see how RankSEO helps agencies deliver SEO
          with less operational drag.
        </p>

        <div className="reveal reveal-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

        <p className="reveal reveal-delay-3 mt-4 text-[13px] text-muted-light">
          Full access during trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
