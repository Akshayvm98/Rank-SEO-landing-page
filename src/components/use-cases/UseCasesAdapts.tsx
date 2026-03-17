const examples = [
  {
    persona: "For founders",
    text: "Less time spent figuring out SEO",
  },
  {
    persona: "For agencies",
    text: "More consistency across client accounts",
  },
  {
    persona: "For SaaS teams",
    text: "A clearer path from search data to growth",
  },
];

export function UseCasesAdapts() {
  return (
    <section className="bg-gradient-to-b from-border-light/40 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto max-w-[680px]">
          <h2 className="text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            One platform. Different workflows.
          </h2>

          <div className="mt-8 space-y-4 text-[16px] leading-[1.7] text-muted">
            <p className="reveal reveal-delay-1">
              Different teams run into different SEO bottlenecks. Founders struggle with time.
              Content marketers struggle with scale. Agencies struggle with coordination across
              clients.
            </p>
            <p className="reveal reveal-delay-2">
              RankSEO adapts to each of these by keeping the core workflow — research, create,
              optimize, publish, track — flexible enough to fit different working styles.
            </p>
            <p className="reveal reveal-delay-3">
              The platform stays the same. The value shifts based on how you use it.
            </p>
          </div>
        </div>

        <div className="reveal reveal-delay-3 mt-14 grid gap-4 sm:grid-cols-3">
          {examples.map((ex) => (
            <div
              key={ex.persona}
              className="rounded-xl border border-border-light bg-white p-5 pl-5 border-l-[3px] border-l-accent"
            >
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.06em] text-accent">
                {ex.persona}
              </span>
              <p className="text-[15px] font-medium leading-[1.5] text-foreground">{ex.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
