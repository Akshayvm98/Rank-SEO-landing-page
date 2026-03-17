export function FoundersHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/30 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[640px] px-6 text-center">
        <h1 className="reveal text-[2rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[3rem]">
          SEO for founders who don&apos;t have time to{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            figure SEO out
          </span>
        </h1>

        <p className="reveal reveal-delay-1 mx-auto mt-6 max-w-[460px] text-[16px] leading-[1.7] text-muted">
          RankSEO turns your search data into content and traffic — without
          adding another thing to your plate.
        </p>

        <div className="reveal reveal-delay-2 mt-10">
          <a
            href="/pricing"
            className="inline-flex h-12 items-center rounded-lg bg-foreground px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
          >
            Start $1 Trial
          </a>
        </div>
      </div>
    </section>
  );
}
