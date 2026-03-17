export function SaaSCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Turn SEO into a growth channel you can actually run
          </h2>

          <p className="reveal reveal-delay-1 mt-4 text-[16px] leading-[1.7] text-muted">
            Start your $1 trial and see how RankSEO helps SaaS teams build a
            more repeatable content and search workflow.
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
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-8 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-foreground/[0.03]"
            >
              View Pricing
            </a>
          </div>

          <p className="reveal reveal-delay-3 mt-5 text-[13px] text-muted-light">
            Full access during trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
