import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  DataCard,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function WhyMyWebsiteIsNotRanking() {
  return (
    <>
      <ArticleHero
        title="Why My Website Is Not Ranking on Google"
        subtitle="Most ranking problems trace back to a small set of fixable issues. This guide walks through each one with a clear diagnosis and actionable fixes so you can identify what is holding your site back and start climbing the search results."
        readingTime={11}
      />

      {/* ------------------------------------------------------------------ */}
      {/* How Google ranking actually works */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-ranking-works" title="How Google ranking actually works">
        <Paragraph>
          Before diagnosing why your site is not ranking, it helps to understand
          the three-step process Google follows for every page on the web.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Crawl",
              text: "Google sends bots (called Googlebot) to discover pages by following links across the web. If Google cannot find your page, the process stops here.",
            },
            {
              title: "Index",
              text: "Once a page is crawled, Google evaluates the content and decides whether to store it in its database. Pages that are thin, duplicate, or blocked by technical issues may be skipped.",
            },
            {
              title: "Rank",
              text: "For every search query, Google evaluates hundreds of signals to decide the order of results. Only indexed pages are eligible to rank.",
            },
          ]}
        />
        <DataCard
          items={[
            { label: "Relevance", value: "Intent match", note: "Does your content match what the searcher wants?" },
            { label: "Quality", value: "Content depth", note: "Is the content thorough and original?" },
            { label: "Authority", value: "Backlinks & trust", note: "Does your site have credibility signals?" },
            { label: "Technical", value: "Speed & access", note: "Can Google crawl, index, and render the page?" },
          ]}
        />
        <Paragraph>
          The key signals Google uses to determine ranking order include
          relevance to the search query, content quality and depth, domain
          authority and backlinks, user experience, and technical health. A
          weakness in any of these areas can prevent your pages from ranking.
        </Paragraph>
        <Paragraph>
          For a broader overview of how all these factors connect, see our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            complete SEO guide
          </a>
          . For issues specific to crawling and indexing, our{" "}
          <a
            href="/seo-guide/technical-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            technical SEO
          </a>{" "}
          section covers them in detail.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* New website with low authority */}
      {/* ------------------------------------------------------------------ */}
      <Section id="new-website" title="Your website is new and has low authority">
        <Paragraph>
          New domains start with zero trust signals. Google has no history to
          evaluate, no backlinks to measure, and no user engagement data to work
          with. It takes time for a new site to build enough credibility to
          compete in search results.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Check your domain age, the
          number of backlinks pointing to your site, and how many pages Google
          has indexed. If your domain is under six months old with fewer than a
          handful of backlinks, low authority is likely the primary factor.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Focus on low-competition keywords first where you can realistically earn a top position",
            "Publish consistently to build a library of quality content",
            "Build internal links between related pages to help Google understand your site structure",
            "Be patient. Most new sites need 3 to 6 months of consistent effort before seeing meaningful rankings",
          ]}
        />
        <Paragraph>
          For a deeper look at what new sites should focus on first, see our
          guide on{" "}
          <a
            href="/seo-guide/technical-seo/new-website-no-traffic"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why new websites get no traffic
          </a>{" "}
          and how to fix it.
        </Paragraph>
        <Callout type="info">
          Authority is not something you can rush. Every site that ranks well
          today went through this phase. Focus on content quality and the right
          keyword targets, and the rankings will follow.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Pages not indexed */}
      {/* ------------------------------------------------------------------ */}
      <Section id="not-indexed" title="Your pages are not indexed">
        <Paragraph>
          If Google has not indexed a page, it cannot appear in search results at
          all. This is one of the most overlooked reasons for poor rankings
          because site owners assume publishing a page means Google will
          automatically include it.
        </Paragraph>
        <Paragraph>
          Common indexing blockers include noindex meta tags, robots.txt rules
          that prevent crawling, thin content that Google deems not worth
          storing, and poor internal linking that makes pages hard to discover.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Open Google Search Console, go
          to URL Inspection, and paste your page URL. If it says "URL is not on
          Google," the page has not been indexed.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Submit your XML sitemap in Search Console if you have not already",
            "Check for and remove any accidental noindex tags",
            "Add internal links from already-indexed pages to the unindexed page",
            "Use the Request Indexing button in URL Inspection for important pages",
          ]}
        />
        <Paragraph>
          For a complete walkthrough of every indexing issue and how to resolve
          it, see our{" "}
          <a
            href="/seo-guide/technical-seo/why-pages-are-not-indexed"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            guide on why pages are not indexed
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Wrong keywords */}
      {/* ------------------------------------------------------------------ */}
      <Section id="wrong-keywords" title="You are targeting the wrong keywords">
        <Paragraph>
          One of the most common ranking mistakes is going after keywords that
          are too competitive for your site. If you are a new or small site
          trying to rank for broad, high-volume terms that established domains
          have held for years, you will struggle regardless of content quality.
        </Paragraph>
        <Paragraph>
          The opposite problem also exists. Some sites target keywords with
          virtually no search volume, meaning even a number-one ranking would
          bring little traffic.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Check Google Search Console to
          see which queries your pages actually appear for versus which keywords
          you intended to target. If there is a mismatch, or if you are not
          appearing at all for your target terms, your keyword strategy likely
          needs adjustment.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Switch to low-competition, long-tail keywords where your site can realistically compete",
            "Validate search volume before writing. Do not create content for keywords nobody searches for",
            "Analyze the top results for your target keyword. If they are all major brands or high-authority sites, choose a less competitive alternative",
          ]}
        />
        <Paragraph>
          Our guide on{" "}
          <a
            href="/seo-guide/keyword-research/how-to-find-low-competition-keywords"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            how to find low-competition keywords
          </a>{" "}
          walks through the exact process for finding terms you can actually
          rank for.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Search intent mismatch */}
      {/* ------------------------------------------------------------------ */}
      <Section id="intent-mismatch" title="Search intent mismatch">
        <Paragraph>
          Even if you target the right keyword, your page will not rank if its
          format does not match what Google rewards for that query. Google
          analyzes user behavior to understand what searchers want, and it
          favors pages that deliver the expected format.
        </Paragraph>
        <Paragraph>
          For example, if the top results for your keyword are all comparison
          articles and you published a single product review, Google will not
          consider your page a good match. The same applies to listicles versus
          in-depth guides, tutorials versus product pages, and other format
          differences.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Search your target keyword in an
          incognito browser and study the top five results. Note the content
          format, structure, length, and angle. Then compare your page to what
          you see.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Restructure your content to match the dominant format in the search results",
            "If the top results are listicles, reformat your page as a listicle. If they are step-by-step guides, restructure yours the same way.",
            "Match the depth and scope of the top-ranking pages while adding your own original insights",
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Thin content */}
      {/* ------------------------------------------------------------------ */}
      <Section id="thin-content" title="Weak or thin content">
        <Paragraph>
          Google rewards content that thoroughly covers a topic. If your page has
          fewer words, less depth, and fewer examples than competing pages, it
          will struggle to rank. This does not mean longer content always wins,
          but content that leaves questions unanswered will lose to content that
          covers the topic completely.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Open the top three ranking
          results for your target keyword side by side with your page. Compare
          the depth of coverage, the number of subtopics addressed, the use of
          examples and data, and the overall usefulness.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Expand your content to cover every subtopic and question a reader would have",
            "Add original insights, real examples, and data that competing pages do not include",
            "Improve structure with clear headings, short paragraphs, and visual breaks",
            "Update content regularly to keep it accurate and comprehensive",
          ]}
        />
        <Paragraph>
          For a detailed process on improving existing content, see our{" "}
          <a
            href="/seo-guide/content-seo/content-optimization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content optimization guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Poor internal linking */}
      {/* ------------------------------------------------------------------ */}
      <Section id="poor-linking" title="Poor internal linking">
        <Paragraph>
          Pages with no internal links pointing to them are effectively
          invisible to Google. Internal links serve two purposes: they help
          Google discover and crawl your pages, and they pass authority from
          stronger pages to weaker ones.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Check the Links report in
          Google Search Console. Look at the internal links section. If
          important pages have zero or very few internal links, that is a
          problem.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Add 3 to 5 internal links per page using descriptive anchor text",
            "Link from your strongest, most-visited pages to pages that need a ranking boost",
            "Make sure every important page is reachable within 3 clicks from your homepage",
            "Create topic clusters where related pages link to each other naturally",
          ]}
        />
        <Paragraph>
          For a full strategy on building an effective link structure, see our{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal linking guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* No backlinks */}
      {/* ------------------------------------------------------------------ */}
      <Section id="no-backlinks" title="No backlinks or authority signals">
        <Paragraph>
          Backlinks remain one of Google&apos;s strongest ranking signals. When
          other websites link to your content, it signals to Google that your
          page is trustworthy and valuable. New sites with zero backlinks are at
          a significant disadvantage against established competitors who have
          accumulated links over years.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Check your backlink profile in
          Google Search Console under the Links report, or use third-party tools
          to see how many external sites link to your pages. Compare this to the
          backlink profiles of the sites currently ranking for your target
          keywords.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Create linkable content such as original research, data studies, comprehensive guides, or free tools that others want to reference",
            "Write guest posts for relevant sites in your niche with a link back to your content",
            "Build relationships with other site owners and content creators in your industry",
            "Focus on quality over quantity. A few links from relevant, authoritative sites outweigh hundreds of low-quality links",
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Technical SEO issues */}
      {/* ------------------------------------------------------------------ */}
      <Section id="technical-issues" title="Technical SEO issues">
        <Paragraph>
          Technical problems can silently undermine your rankings even when your
          content and keywords are strong. Slow page speed, poor mobile
          experience, crawl errors, and broken redirects all send negative
          signals to Google.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Run your pages through Google
          PageSpeed Insights to check loading speed and Core Web Vitals. Review
          the Coverage report in Search Console for crawl errors, redirect
          issues, and server problems. Test your site on mobile to verify the
          experience is smooth.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Optimize images by compressing them and using modern formats like WebP",
            "Fix broken links and eliminate redirect chains",
            "Ensure your site is fully mobile-friendly with responsive design",
            "Simplify redirect paths to a single 301 redirect where possible",
            "Resolve server errors and improve response times",
          ]}
        />
        <Callout type="tip">
          Technical fixes often provide the fastest ranking improvements because
          they remove barriers that prevent Google from properly evaluating your
          content.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to improve rankings step by step */}
      {/* ------------------------------------------------------------------ */}
      <Section id="improve-rankings" title="How to improve your rankings step by step">
        <Paragraph>
          If your site is not ranking, work through these steps in order. Each
          one builds on the previous, starting with the foundations and moving
          toward ongoing optimization.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Fix technical issues first",
              text: "Make sure Google can crawl and index your pages. Resolve any server errors, broken links, noindex tags, or robots.txt blocks before doing anything else.",
            },
            {
              title: "Target the right keywords",
              text: "Focus on terms you can realistically rank for. New and small sites should prioritize low-competition, long-tail keywords with validated search volume.",
            },
            {
              title: "Create better content",
              text: "Cover topics more thoroughly than your competitors. Add original insights, examples, and data. Match the format and depth that Google rewards for each keyword.",
            },
            {
              title: "Build internal links",
              text: "Connect your pages so Google understands your site structure. Link from strong pages to weaker ones, and make sure every important page is well connected.",
            },
            {
              title: "Track and iterate",
              text: "Use Search Console to monitor progress monthly and adjust your strategy. SEO is not a one-time task. It requires consistent measurement and improvement.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Quick SEO checklist */}
      {/* ------------------------------------------------------------------ */}
      <Section id="seo-checklist" title="Quick SEO checklist">
        <Paragraph>
          Use this checklist to audit your site for the most common ranking
          problems. If any of these items are not in order, start there.
        </Paragraph>
        <BulletList
          items={[
            "All important pages are indexed in Google",
            "Each page targets a specific, validated keyword",
            "Content matches search intent for the target keyword",
            "Title tags are compelling and under 60 characters",
            "Internal links connect related pages (3-5 per page minimum)",
            "Site loads in under 3 seconds on mobile",
            "No broken links, redirect chains, or server errors",
            "Content is updated every 3-6 months",
          ]}
        />
        <Paragraph>
          If your pages are indexed and ranking but not getting clicks, see our
          guide on{" "}
          <a
            href="/seo-guide/on-page-seo/why-impressions-but-no-clicks"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why impressions but no clicks
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps you fix ranking issues">
        {/* Visual: Ranking Diagnostic Checklist */}
        <div className="mb-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Quick Ranking Diagnostic
          </p>
          <div className="space-y-2.5">
            {[
              "Is the page indexed? (Check URL Inspection in Search Console)",
              "Is the page targeting the right keyword for its content?",
              "Does the content match the search intent for that keyword?",
              "Is the keyword difficulty realistic for your site's authority?",
              "Are there technical issues blocking crawling or rendering?",
              "Does the page have internal links from other indexed pages?",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 rounded-lg border border-black/[0.04] bg-accent-bg/20 px-3.5 py-2.5"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-accent/30 text-[10px] text-accent">
                  ✓
                </span>
                <span className="text-[13px] text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                SEO diagnostic features
              </a>{" "}
              identify exactly why your pages are not ranking and prioritize the
              fixes that will have the biggest impact.
            </span>,
            "Finds keyword opportunities you can actually rank for",
            "Audits content quality against top-ranking competitors",
            "Monitors your rankings over time and alerts you to drops",
          ]}
        />
        <Paragraph>
          Stop guessing why your site is not ranking. Explore{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            RankSEO&apos;s features
          </a>{" "}
          to get a clear diagnosis, or check out our{" "}
          <a
            href="/pricing"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            pricing plans
          </a>{" "}
          to get started today.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "Why is my website not ranking on Google?",
            answer: (
              <p>
                The most common reasons are targeting keywords that are too
                competitive, thin content that does not cover the topic well
                enough, poor internal linking, technical issues preventing
                indexing, and a lack of backlinks or authority. Most of these are
                fixable with targeted improvements.
              </p>
            ),
            answerText:
              "The most common reasons are targeting keywords that are too competitive, thin content that does not cover the topic well enough, poor internal linking, technical issues preventing indexing, and a lack of backlinks or authority. Most of these are fixable with targeted improvements.",
          },
          {
            question: "How long does it take to rank on Google?",
            answer: (
              <p>
                For new websites, expect 3 to 6 months for initial rankings on
                low-competition keywords. More competitive terms can take 6 to
                12 months or longer. Established sites with existing authority
                often see improvements in 1 to 3 months.
              </p>
            ),
            answerText:
              "For new websites, expect 3 to 6 months for initial rankings on low-competition keywords. More competitive terms can take 6 to 12 months or longer. Established sites with existing authority often see improvements in 1 to 3 months.",
          },
          {
            question: "Can a new website rank quickly?",
            answer: (
              <p>
                Yes, but only for low-competition keywords. New sites cannot
                compete with established domains for competitive terms. Focus on
                long-tail keywords with weak competition and build authority over
                time.
              </p>
            ),
            answerText:
              "Yes, but only for low-competition keywords. New sites cannot compete with established domains for competitive terms. Focus on long-tail keywords with weak competition and build authority over time.",
          },
          {
            question: "Do backlinks still matter for SEO?",
            answer: (
              <p>
                Yes. Backlinks remain one of Google&apos;s strongest ranking
                signals. However, quality matters far more than quantity. A few
                links from relevant, authoritative sites are worth more than
                hundreds of low-quality links.
              </p>
            ),
            answerText:
              "Yes. Backlinks remain one of Google's strongest ranking signals. However, quality matters far more than quantity. A few links from relevant, authoritative sites are worth more than hundreds of low-quality links.",
          },
          {
            question: "Why is my SEO not working?",
            answer: (
              <p>
                If you have been doing SEO for several months with no results,
                the most likely causes are targeting keywords that are too
                competitive, not matching search intent, or technical issues
                preventing Google from properly crawling and indexing your site.
                Audit each area systematically.
              </p>
            ),
            answerText:
              "If you have been doing SEO for several months with no results, the most likely causes are targeting keywords that are too competitive, not matching search intent, or technical issues preventing Google from properly crawling and indexing your site. Audit each area systematically.",
          },
          {
            question: "How do I know if my website has SEO problems?",
            answer: (
              <p>
                Check Google Search Console for indexing errors, crawl issues,
                and performance data. Use PageSpeed Insights to test loading
                speed. Compare your content depth and format against top-ranking
                competitors for your target keywords.
              </p>
            ),
            answerText:
              "Check Google Search Console for indexing errors, crawl issues, and performance data. Use PageSpeed Insights to test loading speed. Compare your content depth and format against top-ranking competitors for your target keywords.",
          },
        ]}
      />
    </>
  );
}
