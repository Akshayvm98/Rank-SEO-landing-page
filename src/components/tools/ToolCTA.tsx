/** Reusable CTA section for free tool pages */
export function ToolCTA({
  title = "Done checking pages one at a time?",
  description = "RankSEO runs these checks across your entire site automatically. Find every issue, fix what matters, and watch your traffic grow.",
  primaryText = "See what RankSEO does",
  primaryHref = "/features",
  secondaryText = "View plans",
  secondaryHref = "/pricing",
}: {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-[680px] px-6">
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-bg/30 to-white p-8 text-center">
          <h2 className="text-[1.375rem] font-bold text-foreground">
            {title}
          </h2>
          <p className="mt-2 max-w-[460px] mx-auto text-[14px] leading-[1.7] text-muted">
            {description}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={primaryHref}
              className="rounded-xl bg-accent px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md"
            >
              {primaryText}
            </a>
            <a
              href={secondaryHref}
              className="rounded-xl border border-accent/20 bg-white px-6 py-3 text-[13px] font-semibold text-accent transition-colors hover:bg-accent-bg/50"
            >
              {secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
