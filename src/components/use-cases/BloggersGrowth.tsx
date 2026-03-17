export function BloggersGrowth() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="reveal text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            What changes when your blog has a system behind it
          </h2>

          <p className="reveal reveal-delay-1 mt-4 text-[16px] leading-[1.7] text-muted">
            When you stop guessing and start working from real opportunities,
            blogging gets easier to sustain.
          </p>

          <ul className="reveal reveal-delay-2 mx-auto mt-8 inline-flex flex-col gap-3 text-left">
            {[
              "More confidence in what you publish",
              "Stronger consistency over time",
              "Better chances of ranking",
              "Clearer visibility into what is working",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-muted">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-bg">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-success">
                    <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="reveal reveal-delay-3 mt-8 text-[15px] leading-relaxed text-muted">
            The traffic may not explode overnight. But it finally starts to compound.
          </p>
        </div>

        {/* Growth Visual Card */}
        <div className="reveal reveal-delay-3 mx-auto mt-12 max-w-[480px]">
          <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
            {/* Mini chart */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-foreground">Blog Growth</span>
              <span className="text-[11px] text-muted-light">Last 6 months</span>
            </div>
            <div className="mb-4 flex h-[80px] items-end gap-[6px]">
              {[12, 18, 22, 28, 35, 32, 40, 45, 42, 52, 58, 55, 64, 70, 68, 75, 82, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light/50"
                  style={{ height: `${h}%`, opacity: 0.4 + (h / 180) }}
                />
              ))}
            </div>

            {/* Stat chips */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-accent-bg/50 px-3 py-2.5 text-center">
                <p className="text-[10px] text-muted-light">Posts published</p>
                <p className="mt-0.5 text-[16px] font-bold text-foreground">24</p>
              </div>
              <div className="rounded-lg bg-accent-bg/50 px-3 py-2.5 text-center">
                <p className="text-[10px] text-muted-light">Avg. rank change</p>
                <p className="mt-0.5 text-[16px] font-bold text-success">+12</p>
              </div>
              <div className="rounded-lg bg-accent-bg/50 px-3 py-2.5 text-center">
                <p className="text-[10px] text-muted-light">Organic clicks</p>
                <p className="mt-0.5 text-[16px] font-bold text-success">+340%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
