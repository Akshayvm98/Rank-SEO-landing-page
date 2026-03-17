const youDecide = [
  "Topic prioritization",
  "Search intent judgment",
  "Positioning decisions",
  "Strategic direction",
];

const rankSEOHandles = [
  "Keyword expansion",
  "Draft generation",
  "Optimization checks",
  "Metadata suggestions",
  "Publishing steps",
  "Performance monitoring",
];

export function SEOProsShift() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          Automate the execution layer — not the thinking
        </h2>

        <p className="reveal reveal-delay-1 mx-auto mt-4 max-w-[560px] text-center text-[15px] leading-[1.75] text-muted">
          RankSEO is not meant to replace strategic judgment. It is built to
          handle the work that does not need to be manual every time.
        </p>

        <div className="reveal reveal-delay-2 mt-10 grid gap-4 sm:grid-cols-2">
          {/* You Decide */}
          <div className="rounded-xl border border-border-light bg-white p-6">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <span className="text-[14px] font-semibold text-foreground">You decide</span>
                <p className="text-[11px] text-muted-light">Keep manual</p>
              </div>
            </div>
            <ul className="space-y-3">
              {youDecide.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-foreground/80">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RankSEO Handles */}
          <div className="rounded-xl border border-accent/20 bg-accent-bg/30 p-6">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-[13px] font-bold text-white">R</span>
              </div>
              <div>
                <span className="text-[14px] font-semibold text-foreground">RankSEO handles</span>
                <p className="text-[11px] text-muted-light">Automate</p>
              </div>
            </div>
            <ul className="space-y-3">
              {rankSEOHandles.map((item) => (
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
      </div>
    </section>
  );
}
