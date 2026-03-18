import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
} from "@/components/seo-guide/ArticleBlocks";

export default function InternalLinking() {
  return (
    <>
      <ArticleHero
        title="How internal linking improves your SEO more than you think"
        subtitle="Most websites ignore internal linking, but it is one of the easiest ways to improve rankings and structure."
        readingTime={8}
      />

      {/* ------------------------------------------------------------------ */}
      {/* What is internal linking */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-internal-linking" title="What is internal linking">
        <Paragraph>
          Internal linking is linking from one page on your website to another
          page on the same website. That is it. Every time you add a link in
          your content that points to another page on your own site, you are
          creating an internal link.
        </Paragraph>
        <Paragraph>
          These links help two audiences: your readers, who can navigate to
          related content without searching, and search engines, which use
          links to discover, crawl, and understand the structure of your site.
        </Paragraph>
        <Callout>
          Think of internal links as hallways in a building. Without them,
          every room is isolated. With them, everything connects — and both
          visitors and Google can find their way around.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why it matters */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-it-matters" title="Why internal linking matters for SEO">
        <BulletList
          items={[
            <span key="1">
              <strong>Helps search engines discover pages.</strong> Google
              finds new pages by following links. If a page has no internal
              links pointing to it, Google may never crawl it — even if it is
              in your sitemap.
            </span>,
            <span key="2">
              <strong>Distributes authority across your site.</strong> When
              one of your pages earns backlinks, internal links pass some of
              that authority to other pages. This is how your entire site gets
              stronger, not just individual pages.
            </span>,
            <span key="3">
              <strong>Improves user experience.</strong> Good internal links
              keep readers on your site longer by guiding them to related
              content. More time on site, more pages visited, lower bounce
              rate.
            </span>,
            <span key="4">
              <strong>Connects related content into topics.</strong> When you
              link related pages together, Google understands they belong to
              the same topic. This builds{" "}
              <a
                href="/seo-guide/keyword-research/keyword-clustering"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                topical authority
              </a>{" "}
              — one of the strongest ranking signals for competitive keywords.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What good linking looks like */}
      {/* ------------------------------------------------------------------ */}
      <Section id="good-internal-linking" title="What good internal linking looks like">
        <Paragraph>
          Not all internal links are equal. A random link shoved at the bottom
          of a page does far less than a contextual link placed naturally
          within the content.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Link relevant pages.</strong> Every link should make
              sense to the reader. If someone is reading about keyword
              research, link to your article on search intent — not your
              pricing page.
            </span>,
            <span key="2">
              <strong>Use descriptive anchor text.</strong> The clickable text
              should tell the reader what they will find.
              &ldquo;Learn more&rdquo; says nothing.
              &ldquo;How to find easy keywords&rdquo; is specific and useful.
            </span>,
            <span key="3">
              <strong>Connect related topics.</strong> Build clusters of
              content that link to each other. A pillar page links to
              supporting articles. Supporting articles link back to the pillar
              and to each other.
            </span>,
            <span key="4">
              <strong>Avoid random links.</strong> Do not link just for the
              sake of linking. Every internal link should serve the reader or
              help Google understand your content structure.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Site structure visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="site-structure" title="How internal links create structure">
        <Paragraph>
          Here is what a well-linked site structure looks like compared to a
          disconnected one.
        </Paragraph>

        {/* Before / After visual */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Before — isolated */}
          <div className="rounded-2xl border border-red-100/60 bg-red-50/20 p-5">
            <span className="inline-block rounded-lg bg-red-50 px-2.5 py-1 text-[12px] font-bold text-red-600">
              Before: Isolated pages
            </span>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {[
                "Blog Post A",
                "Blog Post B",
                "Guide",
                "Product Page",
                "Blog Post C",
                "About",
              ].map((page) => (
                <div
                  key={page}
                  className="rounded-lg border border-red-100/50 bg-white/60 px-3 py-2"
                >
                  <p className="text-[11px] font-medium text-muted">{page}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] leading-[1.6] text-muted">
              Pages exist but do not connect to each other. Google crawls them
              individually. No topical relationships. Authority stays trapped
              on single pages.
            </p>
          </div>

          {/* After — connected */}
          <div className="rounded-2xl border border-emerald-100/60 bg-emerald-50/20 p-5">
            <span className="inline-block rounded-lg bg-emerald-50 px-2.5 py-1 text-[12px] font-bold text-emerald-600">
              After: Connected structure
            </span>
            <div className="mt-5 flex flex-col items-center gap-2">
              {/* Hub */}
              <div className="rounded-lg border-2 border-emerald-200/60 bg-white/80 px-4 py-2">
                <p className="text-[12px] font-semibold text-foreground">
                  Pillar: SEO Guide
                </p>
              </div>
              {/* Connector */}
              <div className="flex items-center gap-1">
                <div className="h-4 w-px bg-emerald-200" />
                <div className="h-4 w-px bg-emerald-200" />
                <div className="h-4 w-px bg-emerald-200" />
              </div>
              {/* Spokes */}
              <div className="grid w-full grid-cols-3 gap-2">
                {[
                  "Keyword Research",
                  "Content SEO",
                  "On-Page SEO",
                ].map((page) => (
                  <div
                    key={page}
                    className="rounded-lg border border-emerald-100/50 bg-white/70 px-2 py-2 text-center"
                  >
                    <p className="text-[10px] font-medium text-foreground">
                      {page}
                    </p>
                  </div>
                ))}
              </div>
              {/* Sub-articles */}
              <div className="grid w-full grid-cols-3 gap-2">
                {[
                  "Easy Keywords",
                  "Writing Guide",
                  "Title Tags",
                ].map((page) => (
                  <div
                    key={page}
                    className="ml-1 rounded-lg border border-emerald-100/30 bg-white/50 px-2 py-1.5 text-center"
                  >
                    <p className="text-[9px] text-muted">{page}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-[12px] leading-[1.6] text-muted">
              Pages link to each other in a clear hierarchy. Google sees the
              relationships. Authority flows between pages. Topical clusters
              form naturally.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Strategy */}
      {/* ------------------------------------------------------------------ */}
      <Section id="linking-strategy" title="A simple internal linking strategy">
        <Paragraph>
          You do not need a complex system. Here is a practical workflow you
          can follow:
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Identify related pages",
              text: "Before publishing, list 3–5 existing pages on your site that relate to the topic. These are your linking candidates.",
            },
            {
              title: "Add contextual links within the content",
              text: "Place links where they naturally support the reader. If you mention keyword difficulty, link to your keyword difficulty article. Make it feel helpful, not forced.",
            },
            {
              title: "Link from high-traffic pages",
              text: "Find your most-visited pages in analytics. Add links from those pages to newer or underperforming content. This passes authority where it is needed most.",
            },
            {
              title: "Link back to pillar content",
              text: "Supporting articles should link back to the main topic page. This reinforces the hierarchy and tells Google which page is the primary authority on the topic.",
            },
            {
              title: "Keep it natural",
              text: "Aim for 3–8 internal links per article, depending on length. Every link should make sense to a reader who knows nothing about SEO.",
            },
          ]}
        />
        <Callout type="info">
          When planning which pages to link together, think in terms of{" "}
          <a
            href="/seo-guide/keyword-research/keyword-clustering"
            className="underline underline-offset-2"
          >
            topic clusters
          </a>
          . Pages in the same cluster should link to each other frequently.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Example — Visual 2 */}
      {/* ------------------------------------------------------------------ */}
      <Section id="example" title="Example: linking in practice">
        <Paragraph>
          Here is how a single article can use internal links effectively.
        </Paragraph>

        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-foreground">
                Article: &ldquo;How to Write SEO Articles&rdquo;
              </span>
              <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">
                6 internal links
              </span>
            </div>

            <div className="space-y-2">
              {[
                {
                  context: "When discussing keyword research before writing",
                  anchor: "find the right keywords",
                  target: "/seo-guide/keyword-research",
                  why: "Guides reader to relevant prep work",
                },
                {
                  context: "When explaining why format matters",
                  anchor: "match search intent",
                  target: "/seo-guide/keyword-research/search-intent",
                  why: "Deepens understanding of a key concept",
                },
                {
                  context: "When recommending headline optimization",
                  anchor: "write better title tags",
                  target: "/seo-guide/on-page-seo/title-tags",
                  why: "Links to actionable related guide",
                },
                {
                  context: "When mentioning content updates",
                  anchor: "optimize existing content",
                  target: "/seo-guide/content-seo/content-optimization",
                  why: "Connects writing to optimization workflow",
                },
                {
                  context: "When discussing performance measurement",
                  anchor: "track your results",
                  target: "/seo-guide/seo-analytics",
                  why: "Completes the workflow loop",
                },
                {
                  context: "Parent topic link in introduction",
                  anchor: "content SEO",
                  target: "/seo-guide/content-seo",
                  why: "Links back to pillar page",
                },
              ].map((link) => (
                <div
                  key={link.anchor}
                  className="flex items-start gap-3 rounded-xl border border-black/[0.04] bg-border-light/15 px-4 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] text-muted">
                      {link.context}
                    </p>
                    <p className="mt-0.5 text-[13px] font-medium text-accent">
                      &ldquo;{link.anchor}&rdquo;
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-[10px] text-muted">{link.target}</p>
                    <p className="mt-0.5 text-[11px] font-medium text-emerald-600">
                      {link.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-accent-bg/30 border border-accent-muted/20 px-4 py-3">
              <p className="text-[12px] font-semibold text-accent">
                Why this works
              </p>
              <p className="mt-0.5 text-[12px] text-muted">
                Every link is contextual, relevant, and uses descriptive
                anchor text. The reader benefits from each link, and Google
                sees a clear content structure.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common internal linking mistakes">
        <BulletList
          items={[
            <span key="1">
              <strong>Over-linking.</strong> Cramming 20 links into a
              500-word article dilutes the value of each link and makes the
              content hard to read. Quality over quantity.
            </span>,
            <span key="2">
              <strong>Generic anchor text.</strong> &ldquo;Click here,&rdquo;
              &ldquo;read more,&rdquo; and &ldquo;this article&rdquo; tell
              neither the reader nor Google what the linked page is about. Use
              descriptive text that reflects the target page.
            </span>,
            <span key="3">
              <strong>Linking irrelevant pages.</strong> A link from your
              SEO guide to your terms of service does not help anyone. Every
              link should be contextually relevant.
            </span>,
            <span key="4">
              <strong>Ignoring internal links entirely.</strong> This is the
              most common mistake. Many sites publish content and never link
              it to anything. Those pages become orphans that Google rarely
              crawls and never prioritizes.
            </span>,
            <span key="5">
              <strong>Only linking in navigation.</strong> Nav links count,
              but contextual links within content carry more weight. Google
              values links that appear naturally in the body of a page.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps with internal linking">
        <Paragraph>
          Finding linking opportunities manually works — but it gets harder
          as your site grows. With 50+ pages, it is easy to miss connections.
        </Paragraph>
        <BulletList
          items={[
            "Suggests internal link opportunities based on content similarity",
            "Identifies orphan pages with no internal links pointing to them",
            "Recommends anchor text that matches the target page's keyword focus",
            "Maps your site's internal link structure so you can spot gaps",
          ]}
        />
        <Paragraph>
          Internal linking is one of the few SEO improvements that is entirely
          in your control. No waiting for backlinks. No algorithm changes. Just
          better connections between your own pages. For broader page-level
          optimization, see the{" "}
          <a
            href="/seo-guide/on-page-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            on-page SEO guide
          </a>
          . To measure the impact, check the{" "}
          <a
            href="/seo-guide/seo-analytics"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO analytics guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-14 text-center md:px-14 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-light/10" />
            <div className="relative">
              <h2 className="mx-auto max-w-[440px] text-[1.5rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[1.875rem]">
                Strengthen your SEO with better internal linking
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and automatically improve your internal
                linking strategy.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/pricing"
                  className="inline-flex h-11 items-center rounded-xl bg-white px-7 text-[14px] font-semibold text-foreground shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Start $1 Trial
                </a>
                <a
                  href="/pricing"
                  className="inline-flex h-11 items-center rounded-xl border border-white/15 px-5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  View Pricing
                </a>
              </div>
              <p className="mt-4 text-[12px] text-white/40">
                Full access during trial. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
