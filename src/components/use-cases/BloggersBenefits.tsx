const benefits = [
  {
    title: "Clearer direction on what to write next",
    desc: "Search data shows you which topics are worth your time",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "Better structure for SEO-friendly articles",
    desc: "Every post gets headings, metadata, and keyword support from the start",
    icon: "M3 6h18M3 12h12M3 18h15",
  },
  {
    title: "Less time lost on keyword guesswork",
    desc: "Spend your energy writing, not researching in spreadsheets",
    icon: "M12 6v6l4 2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
  },
  {
    title: "A more repeatable publishing habit",
    desc: "Build a rhythm that becomes easier to maintain over time",
    icon: "M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3",
  },
];

export function BloggersBenefits() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          Built for consistency, not just content output
        </h2>

        <div className="reveal reveal-delay-1 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`reveal reveal-delay-${(i % 4) + 1} flex flex-col items-center rounded-2xl border border-border-light bg-white p-6 text-center transition-all duration-200 hover:border-border hover:shadow-sm`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-bg">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d={benefit.icon} />
                </svg>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold leading-snug text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-3 mx-auto mt-10 max-w-[520px] text-center text-[15px] leading-relaxed text-muted">
          The goal is not just to publish more. It is to publish with purpose.
        </p>
      </div>
    </section>
  );
}
