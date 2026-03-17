const metrics = [
  { value: "20%+", label: "Growth in organic impressions" },
  { value: "<15 min", label: "To first optimized article" },
  { value: "75+", label: "Average SEO score" },
  { value: "60%+", label: "Returning users in 30 days" },
];

export function TrustMetrics() {
  return (
    <section className="bg-gradient-to-b from-accent-bg/20 to-transparent py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal text-center mb-12">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted-light mb-2">
            Built to deliver
          </p>
          <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-foreground md:text-[1.75rem]">
            Proven results. Measurable organic growth.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`reveal reveal-delay-${i + 1} rounded-2xl border border-black/[0.05] bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-0.5`}
            >
              <p className="text-[2rem] font-bold tracking-tight text-foreground md:text-[2.25rem]">
                {m.value}
              </p>
              <p className="mt-1.5 text-[13px] leading-snug text-muted">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
