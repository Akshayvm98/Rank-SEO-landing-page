const benefits = [
  {
    title: "Publish more consistently",
    desc: "Move from sporadic output to a steady publishing cadence your audience and search engines can rely on.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  },
  {
    title: "Reduce manual research time",
    desc: "Let real search data and keyword clustering replace hours of manual topic research and spreadsheet juggling.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Keep quality high at scale",
    desc: "Built-in optimization scoring and structured drafts help maintain editorial standards even as output increases.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  },
  {
    title: "Create clearer editorial direction",
    desc: "Data-driven topic clusters give your team a clear picture of what to create and why it matters.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
  },
  {
    title: "Simplify optimization before publishing",
    desc: "Check headings, links, metadata, and readability in one view instead of switching between tools.",
    icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
  },
  {
    title: "Reduce context switching across tools",
    desc: "Research, write, optimize, and publish from one platform instead of bouncing between five different apps.",
    icon: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z",
  },
];

export function ContentMarketersContentOps() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          Built for content teams that need consistency
        </h2>

        {/* Asymmetric layout */}
        <div className="reveal reveal-delay-1 mt-12">
          {/* Row 1: 2 cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.slice(0, 2).map((benefit, i) => (
              <div
                key={benefit.title}
                className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border-light bg-white p-6 transition-all duration-200 hover:border-border hover:shadow-sm`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 3 cards */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {benefits.slice(2, 5).map((benefit, i) => (
              <div
                key={benefit.title}
                className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border-light bg-white p-6 transition-all duration-200 hover:border-border hover:shadow-sm`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 3: 1 wide card */}
          <div className="mt-4">
            <div className="reveal reveal-delay-2 rounded-2xl border border-border-light bg-white p-6 transition-all duration-200 hover:border-border hover:shadow-sm">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-bg">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={benefits[5].icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-foreground">{benefits[5].title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">{benefits[5].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
