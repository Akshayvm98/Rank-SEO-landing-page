const beforeItems = [
  { label: "Scattered tasks across 5+ tools", icon: "M6 18L18 6M6 6l12 12" },
  { label: "Manual keyword research in spreadsheets", icon: "M6 18L18 6M6 6l12 12" },
  { label: "Inconsistent publishing rhythm", icon: "M6 18L18 6M6 6l12 12" },
  { label: "No visibility into what to create next", icon: "M6 18L18 6M6 6l12 12" },
];

const afterItems = [
  { label: "One connected workflow from idea to publish", icon: "M4.5 12.75l6 6 9-13.5" },
  { label: "Automated keyword clustering and planning", icon: "M4.5 12.75l6 6 9-13.5" },
  { label: "Steady, repeatable publishing cadence", icon: "M4.5 12.75l6 6 9-13.5" },
  { label: "Clear editorial direction from search data", icon: "M4.5 12.75l6 6 9-13.5" },
];

export function ContentMarketersWhatChanges() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="reveal text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            From content backlog to content engine
          </h2>

          <p className="reveal reveal-delay-1 mt-5 text-[16px] leading-[1.7] text-muted">
            Instead of constantly trying to catch up, your team gets a cleaner,
            more repeatable way to produce SEO content.
          </p>
        </div>

        {/* Before / After */}
        <div className="reveal reveal-delay-2 mx-auto mt-12 grid max-w-[900px] gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-red-200/60 bg-red-50/30 p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="text-[13px] font-semibold text-red-600/80">Before</span>
            </div>

            {/* Mini visual: scattered cards */}
            <div className="mb-5 grid grid-cols-3 gap-2">
              {["Docs", "Sheets", "SEMrush", "ChatGPT", "WordPress", "Analytics"].map((tool) => (
                <div
                  key={tool}
                  className="rounded-md border border-dashed border-red-200 bg-white/60 px-2 py-1.5 text-center text-[10px] text-red-400"
                >
                  {tool}
                </div>
              ))}
            </div>

            <ul className="space-y-2.5">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-[14px] leading-snug text-foreground/70">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-accent/20 bg-accent-bg/40 p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-[13px] font-semibold text-accent">After</span>
            </div>

            {/* Mini visual: connected flow */}
            <div className="mb-5 flex items-center justify-between gap-1">
              {["Discover", "Create", "Optimize", "Publish"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-1">
                  <div className="rounded-md border border-accent/20 bg-white px-2.5 py-1.5 text-[10px] font-medium text-accent">
                    {stage}
                  </div>
                  {i < 3 && (
                    <svg width="12" height="8" viewBox="0 0 12 8" className="shrink-0 text-accent/40">
                      <path d="M1 4h10M8 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <ul className="space-y-2.5">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-[14px] leading-snug text-foreground/70">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits summary */}
        <div className="reveal reveal-delay-3 mx-auto mt-10 grid max-w-[800px] gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            "Faster turnaround",
            "Stronger structure",
            "Better publishing rhythm",
            "Clearer visibility",
          ].map((benefit) => (
            <div key={benefit} className="rounded-xl border border-border-light bg-white px-4 py-3 text-center">
              <span className="text-[13px] font-medium text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-4 mt-8 text-center text-[15px] font-medium text-foreground/70">
          Less chaos in the workflow. More consistency in the output.
        </p>
      </div>
    </section>
  );
}
