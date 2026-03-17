const benefits = [
  {
    title: "Spend less time on repetitive operational work",
    desc: "Automate keyword expansion, draft generation, and optimization checks so you can focus on what matters.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Move faster from research to live content",
    desc: "Connect the steps between keyword discovery and publishing into a single workflow.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Keep optimization quality more consistent",
    desc: "Every piece of content is scored for SEO, readability, and structure before it goes live.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Scale content production without adding unnecessary process",
    desc: "Increase output without adding headcount or layering on more tools.",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
  {
    title: "Free up time for higher-level SEO decisions",
    desc: "Spend more time on strategy, analysis, and growth instead of coordination.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
];

export function SEOProsBenefits() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          What changes when execution is no longer the bottleneck
        </h2>

        <div className="reveal reveal-delay-1 mt-10 space-y-3">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-start gap-4 rounded-xl border border-border-light bg-white p-5 transition-all duration-200 hover:border-border hover:shadow-sm`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-1 text-[13px] leading-[1.6] text-muted">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-4 mt-10 text-center text-[15px] leading-[1.7] text-muted">
          The strategy stays yours. The busywork doesn&apos;t have to.
        </p>
      </div>
    </section>
  );
}
