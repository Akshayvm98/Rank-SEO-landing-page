const benefits = [
  {
    title: "No need to hire an SEO team",
    desc: "One tool replaces an entire workflow",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "No need to learn complex tools",
    desc: "Simple interface designed for non-SEO people",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
  },
  {
    title: "Consistent content without effort",
    desc: "Publish regularly without burning out",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Clear direction on what to write",
    desc: "Data-driven suggestions, not guesswork",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
  },
  {
    title: "Faster path to organic traffic",
    desc: "Start seeing results in weeks, not months",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
];

export function FoundersBenefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          Why founders choose RankSEO
        </h2>

        <div className="reveal reveal-delay-1 mt-10 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-3.5 rounded-xl border border-border-light bg-white p-4 transition-all duration-200 hover:border-border hover:shadow-sm ${i === benefits.length - 1 ? "sm:col-span-2 sm:max-w-[50%] sm:mx-auto" : ""}`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                <svg
                  className="h-[18px] w-[18px] text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
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
