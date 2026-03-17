const challenges = [
  {
    challenge: "Finding time for SEO",
    persona: "Founders",
    href: "/use-cases/founders",
  },
  {
    challenge: "Scaling content output",
    persona: "Content Marketers",
    href: "/use-cases/content-marketers",
  },
  {
    challenge: "Reducing repetitive execution",
    persona: "SEO Professionals",
    href: "/use-cases/seo-professionals",
  },
  {
    challenge: "Managing multiple clients",
    persona: "Agencies",
    href: "/use-cases/agencies",
  },
  {
    challenge: "Choosing better blog topics",
    persona: "Bloggers",
    href: "/use-cases/bloggers",
  },
  {
    challenge: "Building a repeatable growth engine",
    persona: "SaaS Teams",
    href: "/use-cases/saas",
  },
];

export function UseCasesSelector() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="reveal mb-10 text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Not sure which use case fits?
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Find the one that matches your biggest challenge.
          </p>
        </div>

        <div className="reveal reveal-delay-1 overflow-hidden rounded-xl border border-border-light">
          {challenges.map((item, i) => (
            <a
              key={item.persona}
              href={item.href}
              className={`flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-accent-bg/30 ${
                i % 2 === 0 ? "bg-white" : "bg-border-light/20"
              } ${i < challenges.length - 1 ? "border-b border-border-light" : ""}`}
            >
              <span className="text-[14px] text-muted">{item.challenge}</span>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-accent transition-colors hover:text-accent-hover">
                {item.persona}
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
