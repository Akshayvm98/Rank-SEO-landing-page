const benefits = [
  {
    title: "Faster content production",
    desc: "Generate and publish in a fraction of the time",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Less manual research",
    desc: "Real search data replaces guesswork",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Consistent publishing cadence",
    desc: "Build a rhythm that compounds over time",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  },
  {
    title: "Better SEO structure",
    desc: "Every article is optimized from the start",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
  },
  {
    title: "Clear direction for what to write",
    desc: "Data tells you what your audience wants",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
  },
];

export function ContentMarketersBenefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          What changes with RankSEO
        </h2>

        <div className="reveal reveal-delay-1 mt-10 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-3.5 rounded-xl border border-border-light bg-white p-4 transition-all duration-200 hover:border-border hover:shadow-sm ${i === benefits.length - 1 ? "sm:col-span-2 sm:max-w-[50%] sm:mx-auto" : ""}`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                <svg className="h-[18px] w-[18px] text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-0.5 text-[13px] text-muted">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
