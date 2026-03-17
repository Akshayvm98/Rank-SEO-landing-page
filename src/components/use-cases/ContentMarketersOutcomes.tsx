export function ContentMarketersOutcomes() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <h2 className="reveal text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          From content backlog to content engine
        </h2>

        <p className="reveal reveal-delay-1 mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.75] text-muted">
          Instead of struggling to keep up, you build a repeatable system that
          scales with your goals.
        </p>

        <div className="reveal reveal-delay-2 mx-auto mt-10 grid max-w-[600px] gap-4 sm:grid-cols-3">
          {[
            {
              label: "More articles published",
              desc: "Consistent output",
              icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
            },
            {
              label: "Better rankings",
              desc: "Over time",
              icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            },
            {
              label: "Less stress",
              desc: "Managing the process",
              icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border-light bg-white px-5 py-6 text-center transition-all duration-200 hover:border-border hover:shadow-sm"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <p className="mt-3 text-[15px] font-semibold text-foreground">{item.label}</p>
              <p className="mt-1 text-[13px] text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
