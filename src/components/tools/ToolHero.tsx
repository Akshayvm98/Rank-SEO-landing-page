/** Reusable hero section for free tool pages */
export function ToolHero({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden pt-20 pb-8 md:pt-24 md:pb-10">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-[680px] px-6 text-center">
        <p className="animate-hero inline-block rounded-full bg-accent-bg px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
          {badge}
        </p>
        <h1 className="animate-hero-delay-1 mt-4 text-[1.875rem] font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          {title}
        </h1>
        <p className="animate-hero-delay-2 mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.7] text-muted">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
