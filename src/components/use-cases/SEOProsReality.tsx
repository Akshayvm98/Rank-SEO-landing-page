const stages = [
  { label: "Research", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { label: "Draft", icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" },
  { label: "Optimize", icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
  { label: "Publish", icon: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" },
  { label: "Track", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
];

export function SEOProsReality() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16 md:items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="reveal text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
              You already know what needs to be done. The problem is doing it at scale.
            </h2>

            <div className="reveal reveal-delay-1 mt-5 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                For SEO professionals, strategy is rarely the bottleneck. Execution is.
                The real drag usually comes from:
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  "Repetitive keyword analysis",
                  "Slow content production cycles",
                  "Manual optimization passes",
                  "Fragmented publishing workflows",
                  "Too much time spent coordinating steps that should be connected",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Most tools give you more data. Very few reduce the actual workload.
              </p>
            </div>
          </div>

          {/* Right: Operational Bottleneck Visual */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-xl border border-border-light bg-white p-5">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                Operational bottlenecks
              </p>
              <div className="space-y-3">
                {stages.map((stage, i) => (
                  <div key={stage.label}>
                    <div className="flex items-center gap-3 rounded-lg border border-border-light/80 bg-border-light/20 px-4 py-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50">
                        <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={stage.icon} />
                        </svg>
                      </div>
                      <span className="text-[13px] font-medium text-foreground">{stage.label}</span>
                      <div className="ml-auto rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-medium text-red-400">
                        Manual
                      </div>
                    </div>
                    {i < stages.length - 1 && (
                      <div className="flex justify-center py-1">
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="h-1 w-px bg-border" />
                          <svg className="h-3 w-3 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-[11px] text-muted-light">
                Disconnected stages. Repeated effort at each step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
