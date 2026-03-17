export function ContentMarketersProblem() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div>
            <h2 className="reveal text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              Publishing consistently is harder than it looks
            </h2>

            <div className="reveal reveal-delay-1 mt-6 space-y-4 text-[16px] leading-[1.7] text-muted">
              <p>
                Content marketers usually don&apos;t struggle with ideas. They
                struggle with execution. The real friction comes from juggling
                too many moving parts at once.
              </p>
              <ul className="space-y-2.5 pl-1">
                {[
                  "Slow keyword research that delays content planning",
                  "Scattered planning across docs, sheets, and tools",
                  "Time-consuming optimization before every publish",
                  "Too many disconnected tools in the workflow",
                  "Pressure to produce more without dropping quality",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-light" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Even strong teams can end up stuck in a cycle of briefs, delays,
                and manual fixes.
              </p>
            </div>
          </div>

          {/* Right: Fragmented Workflow Visual */}
          <div className="reveal reveal-delay-2 relative">
            <div className="relative overflow-hidden rounded-2xl border border-border-light bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-400" />
                <span className="text-[12px] font-medium text-muted-light">Fragmented workflow</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Keyword Tool", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z", status: "Exported CSV", statusColor: "text-amber-600 bg-amber-50" },
                  { label: "Google Sheets", icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375", status: "Out of date", statusColor: "text-red-500 bg-red-50" },
                  { label: "AI Writer", icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z", status: "No SEO data", statusColor: "text-muted bg-border-light" },
                  { label: "CMS Dashboard", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582", status: "Waiting", statusColor: "text-amber-600 bg-amber-50" },
                  { label: "Analytics", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z", status: "Disconnected", statusColor: "text-red-500 bg-red-50" },
                  { label: "Project Board", icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z", status: "Stale tasks", statusColor: "text-muted bg-border-light" },
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="relative rounded-lg border border-dashed border-border bg-background p-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-border-light">
                        <svg className="h-3.5 w-3.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                        </svg>
                      </div>
                      <span className="text-[12px] font-medium text-foreground">{tool.label}</span>
                    </div>
                    <span className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${tool.statusColor}`}>
                      {tool.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Disconnected dashed lines overlay */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <line x1="30%" y1="38%" x2="42%" y2="52%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="70%" y1="38%" x2="58%" y2="55%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="35%" y1="72%" x2="48%" y2="82%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
