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

export default function DiscoveredNotIndexed() {
  return (
    <>
      <ArticleHero
        title="Discovered but Not Indexed: What It Means and How to Fix It"
        subtitle="You check Google Search Console and see pages stuck as 'Discovered, currently not indexed.' Google knows these pages exist but has not crawled or stored them. This guide explains exactly why it happens and how to fix it."
        readingTime={10}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="What 'Discovered, currently not indexed' means">
        <Paragraph>
          When Google Search Console shows a page as &quot;Discovered, currently
          not indexed,&quot; it means Google found the URL, usually through your
          sitemap or internal links, but has not crawled it yet. The page is in
          Google&apos;s queue, but Google has decided it is not worth visiting
          right now.
        </Paragraph>
        <Paragraph>
          This is different from &quot;Crawled, currently not indexed,&quot;
          where Google actually visited the page but chose not to store it. With
          &quot;Discovered, not indexed,&quot; Google has not even looked at the
          content yet. It is a priority problem, not a quality problem.
        </Paragraph>
        <Paragraph>
          Understanding this distinction is critical because the fixes are
          completely different. Our{" "}
          <a
            href="/seo-guide/technical-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            technical SEO guide
          </a>{" "}
          covers the broader indexing landscape, and our article on{" "}
          <a
            href="/seo-guide/technical-seo/why-pages-are-not-indexed"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why pages are not indexed
          </a>{" "}
          walks through every common cause. This guide focuses specifically on
          the &quot;Discovered&quot; status and how to resolve it.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Discovered vs Crawled */}
      {/* ------------------------------------------------------------------ */}
      <Section id="discovered-vs-crawled" title="Discovered vs Crawled: why the difference matters">
        {/* Visual: Status Comparison */}
        <div className="mt-2 mb-4 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-amber-100/60 bg-amber-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-amber-600 mb-1">
                Discovered, not indexed
              </p>
              <p className="text-[13px] text-muted">
                Google found the URL but has not visited it yet. This is a <strong>priority problem</strong>. Fix: improve internal linking and site authority.
              </p>
            </div>
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                Crawled, not indexed
              </p>
              <p className="text-[13px] text-muted">
                Google visited the page but chose not to store it. This is a <strong>quality problem</strong>. Fix: improve content depth and uniqueness.
              </p>
            </div>
          </div>
        </div>
        <Paragraph>
          Google Search Console shows several indexing statuses. The two that
          confuse people most are closely related but have different root causes.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Discovered, currently not indexed:</strong> Google found
              the URL but has not crawled it. Google is deprioritizing it in the
              crawl queue. The problem is getting Google to visit.
            </span>,
            <span key="2">
              <strong>Crawled, currently not indexed:</strong> Google visited
              the page, read the content, and decided not to store it. The
              problem is content quality, uniqueness, or value.
            </span>,
          ]}
        />
        <Paragraph>
          If your page is stuck in the &quot;Discovered&quot; state, you do not
          need to rewrite the content. You need to make Google think the page is
          worth crawling. That comes down to signals like internal links, site
          authority, crawl budget, and how Google perceives the overall quality
          of your domain.
        </Paragraph>
        <Callout type="info">
          Check your URL in Search Console&apos;s URL Inspection tool. If it
          says &quot;Discovered, currently not indexed,&quot; the page has never
          been crawled. If it says &quot;Crawled, currently not indexed,&quot;
          the problem is different and requires content-level fixes.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why it happens */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-it-happens" title="Why Google discovers but does not index your pages">
        <Paragraph>
          There are several common reasons Google leaves pages in the
          &quot;Discovered&quot; queue without crawling them.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Crawl budget limitations",
              text: "Every site gets a finite amount of crawl budget. Google allocates crawl resources based on how important it thinks your site is. If your site has thousands of pages but low authority, Google simply cannot crawl everything. Lower-priority pages get stuck in the queue.",
            },
            {
              title: "Low site authority",
              text: "New or small websites with few backlinks get less frequent crawling. Google has limited resources and prioritizes sites that have proven their value. If your domain is new, Google is cautious about how much time it spends on your content.",
            },
            {
              title: "Weak internal linking",
              text: "Pages buried deep in your site structure with few internal links appear less important to Google. If a page can only be reached through a sitemap but has no contextual links from other pages, Google deprioritizes it.",
            },
            {
              title: "Too many URLs submitted at once",
              text: "Publishing hundreds of pages quickly or submitting a massive sitemap can overwhelm your crawl budget. Google cannot process everything at once, so it queues many of those URLs and works through them gradually.",
            },
            {
              title: "Server performance issues",
              text: "If your server responds slowly or returns errors during crawling, Google throttles the crawl rate. This means fewer pages get crawled per session, and lower-priority pages stay in the queue longer.",
            },
            {
              title: "Duplicate or near-duplicate content signals",
              text: "If Google suspects a page might be similar to content it has already indexed, it may deprioritize crawling it. This is common with product variations, filtered listing pages, or auto-generated content with little variation.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to diagnose */}
      {/* ------------------------------------------------------------------ */}
      <Section id="diagnose" title="How to diagnose the problem">
        <Paragraph>
          Before fixing anything, you need to understand the scope and pattern
          of the problem on your specific site.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Check the Pages report in Search Console",
              text: "Go to Indexing > Pages and filter for 'Discovered, currently not indexed.' Note how many pages are affected and whether the number is growing, shrinking, or stable over time.",
            },
            {
              title: "Identify patterns in affected URLs",
              text: "Look at which URLs are stuck. Are they all from one section of the site? Are they newly published? Are they parameter URLs or paginated pages? Patterns reveal the root cause.",
            },
            {
              title: "Check internal links to affected pages",
              text: "Use the Links report in Search Console or a crawl tool to see how many internal links point to the stuck pages. Pages with zero or very few internal links are the most likely to be deprioritized.",
            },
            {
              title: "Review your sitemap",
              text: "Make sure the affected pages are in your XML sitemap. Also check that your sitemap does not include thousands of low-value URLs that dilute the signal for your important pages.",
            },
            {
              title: "Test server response times",
              text: "If your server is slow, Google will crawl fewer pages per visit. Use tools like PageSpeed Insights or your server logs to check response times during Google's crawling windows.",
            },
          ]}
        />
        <Callout type="tip">
          Look at the date in the URL Inspection tool. If Google discovered the
          page weeks or months ago and still has not crawled it, the
          deprioritization is significant. Recently discovered pages may just
          need more time.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to fix it */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-fix" title="How to fix 'Discovered, currently not indexed'">
        <Paragraph>
          The goal is to send stronger signals that your pages are worth
          crawling. Here are the most effective fixes, ordered by impact.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Strengthen internal linking",
              text: "Add contextual internal links from your most visited, already-indexed pages to the stuck pages. This is the single most effective fix. Google follows links from important pages, and a strong internal link tells Google that the destination page matters.",
            },
            {
              title: "Improve your site's overall quality",
              text: "Google allocates more crawl budget to sites it trusts. Remove or consolidate thin, duplicate, or outdated pages. Every low-quality page on your site reduces the crawl budget available for your important content.",
            },
            {
              title: "Request indexing in Search Console",
              text: "Use the URL Inspection tool to request indexing for your most important stuck pages. This is not a permanent fix, but it can bump individual pages up in the queue. Google limits how many requests you can make per day.",
            },
            {
              title: "Reduce sitemap bloat",
              text: "Only include pages in your sitemap that you genuinely want indexed. If your sitemap has thousands of parameter URLs, tag pages, or thin pages, Google has to evaluate all of them. Clean your sitemap to focus on your valuable content.",
            },
            {
              title: "Improve server performance",
              text: "Faster server response times mean Google can crawl more pages per session. Optimize your hosting, enable caching, and reduce server-side processing time. Even small improvements compound over thousands of crawl requests.",
            },
            {
              title: "Publish content consistently",
              text: "Sites that publish regularly get crawled more frequently. If Google sees that your site is actively updated, it comes back more often and works through the crawl queue faster.",
            },
          ]}
        />
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal linking guide
          </a>{" "}
          covers how to build a linking structure that helps Google discover and
          prioritize your content. Strong{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal links
          </a>{" "}
          are the most reliable way to move pages out of the
          &quot;Discovered&quot; queue.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Crawl budget */}
      {/* ------------------------------------------------------------------ */}
      <Section id="crawl-budget" title="Understanding crawl budget and why it matters">
        <Paragraph>
          Crawl budget is the number of pages Google will crawl on your site
          within a given time period. It is determined by two factors: crawl
          rate limit, which is how fast Google can crawl without overloading
          your server, and crawl demand, which is how much Google wants to crawl
          based on the perceived value of your content.
        </Paragraph>
        <Paragraph>
          For small sites with under a few hundred pages, crawl budget is rarely
          an issue. But for larger sites, or sites with many auto-generated or
          low-value URLs, crawl budget becomes the bottleneck that keeps pages
          stuck as &quot;Discovered.&quot;
        </Paragraph>
        <BulletList
          items={[
            "Remove or noindex pages that add no value (empty categories, duplicate filters, old tag pages)",
            "Fix redirect chains that waste crawl resources",
            "Ensure your robots.txt is not blocking important resources that Google needs to render pages",
            "Use canonical tags correctly to consolidate duplicate content",
          ]}
        />
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/technical-seo/robots-txt-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            robots.txt guide
          </a>{" "}
          explains how to configure crawl directives properly so you are not
          accidentally wasting your crawl budget on pages that should not be
          crawled.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common mistakes that make it worse">
        <Paragraph>
          Many site owners try to fix this status and end up making things
          worse. Avoid these common mistakes.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Spamming the Request Indexing button:</strong> Google
              limits daily requests and repeated submissions do not help.
              Requesting indexing once is fine. Doing it every day for the same
              URL is wasted effort.
            </span>,
            <span key="2">
              <strong>Adding more pages hoping for more traffic:</strong>{" "}
              Publishing more thin content when your existing pages are not
              getting crawled only makes the problem worse. Fix the crawl budget
              issue before scaling content.
            </span>,
            <span key="3">
              <strong>Ignoring low-quality pages:</strong> Old, outdated, or
              thin pages that you have forgotten about still consume crawl
              budget. Audit your site regularly and remove or consolidate
              content that is not serving any purpose.
            </span>,
            <span key="4">
              <strong>Relying only on sitemaps:</strong> A sitemap tells Google
              about your URLs, but it does not guarantee crawling. Sitemaps are
              suggestions, not commands. Internal links are far more effective
              at driving crawl priority.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Timeline */}
      {/* ------------------------------------------------------------------ */}
      <Section id="timeline" title="How long does it take to fix?">
        <Paragraph>
          There is no single answer. The timeline depends on your site&apos;s
          authority, the number of affected pages, and how significant the
          underlying issue is.
        </Paragraph>
        <BulletList
          items={[
            "Small sites with a few stuck pages: Days to a few weeks after adding internal links and requesting indexing",
            "Medium sites with a crawl budget issue: 2 to 6 weeks after cleaning up low-quality pages and improving internal linking",
            "Large sites with thousands of stuck URLs: 1 to 3 months of consistent improvement, including content pruning, server optimization, and link restructuring",
          ]}
        />
        <Paragraph>
          If you are dealing with a{" "}
          <a
            href="/seo-guide/technical-seo/new-website-no-traffic"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            new website with no traffic
          </a>
          , expect the timeline to be on the longer end. New sites need time to
          build the trust signals that earn faster crawling. Understanding{" "}
          <a
            href="/seo-guide/seo-strategy/how-long-does-seo-take"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            how long SEO takes
          </a>{" "}
          helps set realistic expectations.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Monitoring */}
      {/* ------------------------------------------------------------------ */}
      <Section id="monitoring" title="How to monitor progress">
        <Paragraph>
          Once you have made changes, track whether pages are moving out of the
          &quot;Discovered&quot; status.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Check the Pages report weekly",
              text: "Go to Indexing > Pages in Search Console and watch the 'Discovered, currently not indexed' count. A declining number means your fixes are working.",
            },
            {
              title: "Use URL Inspection for specific pages",
              text: "Check your most important stuck pages individually. Look for changes in the last crawl date. If Google has crawled a page that was previously only 'Discovered,' your internal linking changes are taking effect.",
            },
            {
              title: "Watch your indexed page count",
              text: "The total number of indexed pages in Search Console should gradually increase as pages move from Discovered to Indexed. If the number is flat despite publishing new content, the underlying issue is not resolved.",
            },
          ]}
        />
        <Callout type="tip">
          Be patient. Changes to crawl behavior take time. Google does not
          re-evaluate your entire site overnight. Give your fixes at least 2 to
          4 weeks before evaluating whether they are working.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps with discovery and indexing">
        <Paragraph>
          Tracking which pages are stuck as &quot;Discovered&quot; and figuring
          out why is tedious when done manually. RankSEO automates the
          diagnostic process.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                site audit features
              </a>{" "}
              identify pages with weak internal linking, crawl budget waste, and
              indexing issues across your entire site.
            </span>,
            "Flags pages stuck in the 'Discovered' state and surfaces the likely cause",
            "Recommends internal linking opportunities to boost crawl priority for important pages",
            "Monitors your indexing health over time and alerts you when pages drop out or get stuck",
          ]}
        />
        <Paragraph>
          Instead of manually checking every URL in Search Console, RankSEO
          gives you a prioritized list of what to fix first. Explore{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            RankSEO&apos;s features
          </a>{" "}
          or check out our{" "}
          <a
            href="/pricing"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            pricing plans
          </a>{" "}
          to get started.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question:
              "What does 'Discovered, currently not indexed' mean in Google Search Console?",
            answer: (
              <p>
                It means Google found the URL, usually through your sitemap or
                internal links, but has not crawled it yet. Google knows the page
                exists but has decided it is not a priority to visit right now.
              </p>
            ),
            answerText:
              "It means Google found the URL, usually through your sitemap or internal links, but has not crawled it yet. Google knows the page exists but has decided it is not a priority to visit right now.",
          },
          {
            question:
              "Is 'Discovered, not indexed' the same as 'Crawled, not indexed'?",
            answer: (
              <p>
                No. &quot;Discovered, not indexed&quot; means Google has not even
                visited the page yet. &quot;Crawled, not indexed&quot; means
                Google visited it and decided not to store it. The first is a
                priority problem. The second is a quality problem.
              </p>
            ),
            answerText:
              "No. Discovered, not indexed means Google has not even visited the page yet. Crawled, not indexed means Google visited it and decided not to store it. The first is a priority problem. The second is a quality problem.",
          },
          {
            question: "How long does it take for Google to index a discovered page?",
            answer: (
              <p>
                It depends on your site&apos;s authority and crawl budget. Some
                pages move from Discovered to Indexed within days. Others stay
                stuck for weeks or months. Adding strong internal links and
                requesting indexing can speed up the process.
              </p>
            ),
            answerText:
              "It depends on your site's authority and crawl budget. Some pages move from Discovered to Indexed within days. Others stay stuck for weeks or months. Adding strong internal links and requesting indexing can speed up the process.",
          },
          {
            question: "Does requesting indexing in Search Console fix this?",
            answer: (
              <p>
                It can help for individual pages, but it is not a scalable
                solution. Google limits daily requests. The real fix is
                improving internal linking, cleaning up low-value pages, and
                building site authority so Google naturally prioritizes your
                content.
              </p>
            ),
            answerText:
              "It can help for individual pages, but it is not a scalable solution. Google limits daily requests. The real fix is improving internal linking, cleaning up low-value pages, and building site authority so Google naturally prioritizes your content.",
          },
          {
            question: "Can too many pages cause the 'Discovered' problem?",
            answer: (
              <p>
                Yes. If your site has more URLs than your crawl budget can
                handle, Google queues the lower-priority ones. Publishing
                hundreds of pages quickly or having a bloated sitemap with
                low-value URLs makes this worse. Focus on quality over quantity.
              </p>
            ),
            answerText:
              "Yes. If your site has more URLs than your crawl budget can handle, Google queues the lower-priority ones. Publishing hundreds of pages quickly or having a bloated sitemap with low-value URLs makes this worse. Focus on quality over quantity.",
          },
          {
            question:
              "Should I remove pages that are stuck as 'Discovered, not indexed'?",
            answer: (
              <p>
                Only if the pages are genuinely low-value. If the content is
                good and serves a purpose, keep it and work on improving
                internal links and site authority. If the pages are thin,
                duplicated, or no longer relevant, removing or consolidating
                them frees up crawl budget for your important content.
              </p>
            ),
            answerText:
              "Only if the pages are genuinely low-value. If the content is good and serves a purpose, keep it and work on improving internal links and site authority. If the pages are thin, duplicated, or no longer relevant, removing or consolidating them frees up crawl budget for your important content.",
          },
        ]}
      />
    </>
  );
}
