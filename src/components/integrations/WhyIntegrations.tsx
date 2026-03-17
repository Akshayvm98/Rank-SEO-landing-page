export function WhyIntegrations() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          Why SEO integrations matter
        </h2>

        <div className="reveal reveal-delay-1 mt-8 space-y-5 text-[15px] leading-[1.8] text-muted">
          <p>
            Most SEO workflows involve jumping between four or five disconnected
            tools: one for keyword research, another for writing, a third for
            optimization, and separate platforms for publishing and analytics.
            Each switch costs time, introduces errors, and makes it harder to
            maintain a consistent content strategy.
          </p>
          <p>
            When search data flows directly into content generation, and
            published articles automatically connect to performance tracking,
            teams can move faster with fewer manual steps. Integrations turn a
            fragmented process into a single, repeatable workflow.
          </p>
          <p>
            For founders, marketers, and content teams working with limited
            time, this matters. Connected tools mean less overhead, faster
            publishing cycles, and clearer insight into what content is actually
            driving organic growth.
          </p>
        </div>

        {/* Internal links */}
        <div className="reveal reveal-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/features"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-[14px] font-medium text-foreground transition-all duration-200 hover:border-muted-light hover:bg-surface"
          >
            Explore all features
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-[14px] font-medium text-foreground transition-all duration-200 hover:border-muted-light hover:bg-surface"
          >
            See pricing
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
