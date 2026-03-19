/** Reusable CTA section for free tool pages */
export function ToolCTA({
  title = "Want deeper analysis?",
  description = "RankSEO gives you full content audits, keyword tracking, and SEO optimization in one platform.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-[680px] px-6">
        <div className="rounded-2xl border border-accent/20 bg-accent-bg/30 p-8 text-center">
          <h2 className="text-[1.375rem] font-bold text-foreground">
            {title}
          </h2>
          <p className="mt-2 text-[14px] leading-[1.7] text-muted">
            {description}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="/features"
              className="rounded-xl bg-accent px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
            >
              Explore features
            </a>
            <a
              href="/pricing"
              className="rounded-xl border border-accent/20 bg-white px-6 py-3 text-[13px] font-semibold text-accent transition-colors hover:bg-accent-bg/50"
            >
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
