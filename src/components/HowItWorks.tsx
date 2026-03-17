const cards = [
  {
    title: "Connect your real search data",
    description:
      "Link your Google Search Console and domain. Rank SEO analyzes impressions, clicks, rankings, and existing content automatically.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    title: "Generate and publish optimized content",
    description:
      "Create SEO-structured articles and publish directly to WordPress, Webflow, Framer, or Notion in just a few clicks.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Define your brand voice",
    description:
      "Choose your tone, add writing samples, and set content guidelines. Rank SEO generates articles that sound natural and aligned with your brand.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Three steps to dominate organic search
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            From raw search data to ranking content. No guesswork.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} group card-premium rounded-2xl bg-white p-7 hover:border-accent-muted/60 hover:shadow-[0_4px_24px_-4px_rgba(13,148,136,0.08)]`}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-bg text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                {card.icon}
              </div>
              <h3 className="mb-2 text-[16px] font-semibold tracking-[-0.01em] text-foreground">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-muted">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
