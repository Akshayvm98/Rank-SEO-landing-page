export function ContentMarketersCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto max-w-[600px] text-center">
          <h2 className="text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Scale your SEO content without scaling the chaos
          </h2>

          <p className="reveal reveal-delay-1 mt-4 text-[16px] leading-relaxed text-muted">
            Start your $1 trial and turn your content workflow into something
            repeatable.
          </p>

          <div className="reveal reveal-delay-2 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
