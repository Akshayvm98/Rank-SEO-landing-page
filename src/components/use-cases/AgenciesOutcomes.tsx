const withoutItems = [
  "Manual research per client",
  "Scattered drafts and approvals",
  "Inconsistent publishing",
  "Delayed reporting",
  "Quality drops at scale",
];

const withItems = [
  "Automated keyword discovery",
  "Structured content pipeline",
  "Repeatable publishing flow",
  "Real-time performance data",
  "Consistent quality across accounts",
];

export function AgenciesOutcomes() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          What changes when your workflow scales with your client list
        </h2>

        <p className="reveal reveal-delay-1 mx-auto mt-4 max-w-[540px] text-center text-[15px] leading-[1.75] text-muted">
          Instead of adding more internal complexity every time you win a new
          client, you get a system that makes delivery more repeatable.
        </p>

        {/* Side-by-side comparison */}
        <div className="reveal reveal-delay-2 mt-10 grid gap-4 sm:grid-cols-2">
          {/* Without */}
          <div className="rounded-xl border border-red-100 bg-white p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50">
                <svg className="h-3.5 w-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-foreground">Without RankSEO</span>
            </div>
            <ul className="space-y-3">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-foreground/80">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-300" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="rounded-xl border border-accent/20 bg-accent-bg/30 p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent">
                <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-foreground">With RankSEO</span>
            </div>
            <ul className="space-y-3">
              {withItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-foreground/80">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="reveal reveal-delay-3 mt-8 text-center text-[15px] font-medium text-muted">
          More room to grow the agency. Less time spent untangling the process.
        </p>
      </div>
    </section>
  );
}
