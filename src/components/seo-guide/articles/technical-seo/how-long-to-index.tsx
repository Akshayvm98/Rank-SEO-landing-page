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

export default function HowLongToIndex() {
  return (
    <>
      <ArticleHero
        title="How Long Does Google Take to Index a Page?"
        subtitle="You published a new page, submitted it, and now you are refreshing Search Console every hour. How long should it actually take? The answer depends on your site, your content, and a few technical factors you can control. This guide covers realistic timelines and how to speed things up."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="Indexing is not instant, but it should not take forever">
        <Paragraph>
          One of the most common frustrations in SEO is publishing content and
          waiting for Google to notice. Sometimes pages get indexed within
          hours. Other times they sit in limbo for weeks. Understanding why
          helps you set realistic expectations and take the right steps to
          speed up the process.
        </Paragraph>
        <Paragraph>
          Indexing is the step between Google finding your page and your page
          being eligible to appear in search results. Without indexing, your
          content is invisible to searchers. Our{" "}
          <a
            href="/seo-guide/technical-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            technical SEO guide
          </a>{" "}
          covers the full picture, but this article focuses specifically on
          timelines and what affects them.
        </Paragraph>

        {/* Visual: Indexing Timeline */}
        <DataCard
          items={[
            {
              label: "Established sites",
              value: "Hours to days",
              note: "Strong authority, frequent crawling",
            },
            {
              label: "Growing sites",
              value: "Days to 2 weeks",
              note: "Some authority, moderate crawl frequency",
            },
            {
              label: "New sites",
              value: "1 to 4 weeks",
              note: "Low authority, infrequent crawling",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What affects indexing speed */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-affects-speed" title="What affects how fast Google indexes your page">
        <Paragraph>
          Google does not index every page at the same speed. Several factors
          determine how quickly your page moves from published to indexed.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Site authority and crawl history",
              text: "Sites that Google trusts and visits frequently get indexed faster. If your site has been around for years, publishes regularly, and has a healthy backlink profile, Google crawls it more often. New sites with no history wait longer because Google has no reason to prioritize them.",
            },
            {
              title: "Internal linking",
              text: "Pages that are well-connected to the rest of your site through internal links get discovered and indexed faster. A new page with no internal links pointing to it is harder for Google to find, even if it is in your sitemap.",
            },
            {
              title: "Content quality and uniqueness",
              text: "Google prioritizes indexing content that adds genuine value. Pages with thin, duplicate, or auto-generated content may be crawled but not indexed. Thorough, original content gets indexed faster and more reliably.",
            },
            {
              title: "Sitemap submission",
              text: "Having a clean XML sitemap submitted in Google Search Console helps Google discover new pages. It does not guarantee immediate indexing, but it puts your URLs in the queue faster than waiting for organic discovery.",
            },
            {
              title: "Server performance",
              text: "If your server responds slowly or returns errors during crawling, Google throttles the crawl rate. Faster servers mean Google can crawl more pages per visit, which speeds up indexing for your entire site.",
            },
            {
              title: "Crawl budget",
              text: "Every site gets a finite crawl budget. If your site has thousands of pages but low authority, Google cannot crawl everything quickly. High-priority pages get indexed first, and lower-priority pages wait in the queue.",
            },
          ]}
        />
        <Paragraph>
          Our guide on{" "}
          <a
            href="/seo-guide/technical-seo/why-pages-are-not-indexed"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why pages are not indexed
          </a>{" "}
          covers every common reason pages fail to get indexed and how to fix
          each one.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Realistic timelines */}
      {/* ------------------------------------------------------------------ */}
      <Section id="realistic-timelines" title="Realistic indexing timelines by site type">
        <Paragraph>
          These timelines are based on typical scenarios. Your experience may
          vary, but this gives you a reasonable expectation.
        </Paragraph>

        {/* Visual: Timeline Comparison */}
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                  Established site
                </p>
                <p className="text-[18px] font-bold text-foreground">Minutes to hours</p>
                <p className="mt-1 text-[12px] text-muted">
                  High authority, Google visits daily. New pages often indexed
                  within hours of publishing.
                </p>
              </div>
              <div className="rounded-xl border border-blue-100/60 bg-blue-50/20 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-blue-600 mb-1">
                  Growing site
                </p>
                <p className="text-[18px] font-bold text-foreground">1 to 14 days</p>
                <p className="mt-1 text-[12px] text-muted">
                  Moderate authority, some crawl history. Pages typically
                  indexed within two weeks.
                </p>
              </div>
              <div className="rounded-xl border border-amber-100/60 bg-amber-50/20 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-amber-600 mb-1">
                  New site
                </p>
                <p className="text-[18px] font-bold text-foreground">1 to 4 weeks</p>
                <p className="mt-1 text-[12px] text-muted">
                  Low authority, infrequent crawling. Some pages may take
                  longer or get stuck as &quot;Discovered.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <Paragraph>
          If a page has not been indexed after 4 weeks, something is blocking
          the process. Check for noindex tags, robots.txt blocks, thin
          content, or server errors. Our{" "}
          <a
            href="/seo-guide/technical-seo/discovered-not-indexed"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            Discovered but Not Indexed guide
          </a>{" "}
          covers the most common reason pages get stuck in the queue.
        </Paragraph>
        <Callout type="info">
          Pages with high-quality content, strong internal links, and a clean
          technical setup almost always get indexed within the expected window.
          If yours are not, the issue is almost certainly one of the factors
          listed above.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to speed it up */}
      {/* ------------------------------------------------------------------ */}
      <Section id="speed-up-indexing" title="How to get pages indexed faster">
        <Paragraph>
          You cannot force Google to index a page, but you can significantly
          improve the odds and speed.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Request indexing in Search Console",
              text: "Use the URL Inspection tool and click Request Indexing. This puts the URL near the top of Google's crawl queue. It is the single fastest action you can take. Google limits daily requests, so use it for your most important pages.",
            },
            {
              title: "Add strong internal links",
              text: "Link to the new page from your most visited, already-indexed pages. Google follows links from important pages, so an internal link from a high-traffic page is a strong signal to crawl and index the destination.",
            },
            {
              title: "Submit a clean sitemap",
              text: "Make sure your XML sitemap is submitted in Search Console and includes only pages you want indexed. Remove low-value URLs that waste crawl budget. A clean sitemap helps Google prioritize your important content.",
            },
            {
              title: "Publish high-quality content",
              text: "Google indexes valuable content faster. If your page is thorough, original, and matches a real search intent, it is more likely to be indexed quickly. Thin or duplicate content often gets deprioritized.",
            },
            {
              title: "Improve server response times",
              text: "Faster servers allow Google to crawl more pages per session. Even small improvements in response time compound across hundreds of crawl requests. Aim for server response times under 200ms.",
            },
            {
              title: "Publish consistently",
              text: "Sites that publish new content regularly get crawled more frequently. Google learns your publishing pattern and adjusts its crawl schedule accordingly. Consistency trains Google to visit more often.",
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
          covers how to build a linking structure that helps Google discover
          and prioritize your new content.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to check indexing status */}
      {/* ------------------------------------------------------------------ */}
      <Section id="check-status" title="How to check if your page is indexed">
        <DataCard
          items={[
            { label: "Method 1", value: "site: search", note: "Search site:yoursite.com/url on Google" },
            { label: "Method 2", value: "URL Inspection", note: "Definitive answer in Search Console" },
            { label: "Method 3", value: "Pages report", note: "Bulk status check in Indexing > Pages" },
          ]}
        />
        <Paragraph>
          The URL Inspection tool in Google Search Console is the most
          reliable way to check. It tells you whether the page is indexed,
          when it was last crawled, and whether there are any issues preventing
          indexing.
        </Paragraph>
        <Paragraph>
          You can also search <code>site:yoursite.com/page-url</code> directly
          on Google. If the page appears, it is indexed. If nothing shows up,
          it is not. This method is quick but can lag behind by hours or days
          for recently indexed pages.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* When to worry */}
      {/* ------------------------------------------------------------------ */}
      <Section id="when-to-worry" title="When to worry about slow indexing">
        <Paragraph>
          Not every slow index is a problem, but some patterns signal real
          issues.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Page stuck as &quot;Discovered, not indexed&quot; for 4+ weeks:</strong>{" "}
              Google is deprioritizing it. Improve internal linking and check
              content quality.
            </span>,
            <span key="2">
              <strong>Page crawled but not indexed:</strong> Google visited but
              decided not to store it. The content may be too thin, too similar
              to other pages, or not valuable enough.
            </span>,
            <span key="3">
              <strong>No pages on your site are getting indexed:</strong> Check
              for a sitewide noindex tag, a robots.txt file blocking
              Googlebot, or severe server errors.
            </span>,
            <span key="4">
              <strong>Indexing that gets worse over time:</strong> If fewer
              pages are being indexed each month, your site quality signals may
              be declining. Audit content quality and remove or improve
              low-value pages.
            </span>,
          ]}
        />
        <Paragraph>
          If you are running a{" "}
          <a
            href="/seo-guide/technical-seo/new-website-no-traffic"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            new website with no traffic
          </a>
          , slower indexing is expected. Focus on content quality and internal
          linking, and the indexing speed will improve as your site builds
          authority.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Indexing checklist */}
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="Indexing speed checklist">
        <div className="mt-2 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Maximize Indexing Speed
          </p>
          <div className="space-y-2.5">
            {[
              "Submit XML sitemap in Google Search Console",
              "Request indexing via URL Inspection for important pages",
              "Add internal links from high-traffic indexed pages",
              "Ensure content is thorough, original, and matches search intent",
              "Verify no noindex tags or robots.txt blocks on target pages",
              "Check server response times are under 200ms",
              "Publish new content on a consistent schedule",
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
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps with indexing">
        <Paragraph>
          Tracking indexing status and diagnosing delays across dozens of pages
          is tedious manually. RankSEO automates it.
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
              monitor your indexing status and flag pages that are stuck,
              blocked, or taking longer than expected
            </span>,
            "Identifies technical issues preventing indexing before they become problems",
            "Surfaces internal linking opportunities to help new pages get discovered faster",
            "Tracks how quickly new content gets indexed over time so you can measure improvements",
          ]}
        />
        <Paragraph>
          Stop checking Search Console manually for every page. Explore{" "}
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
          to monitor your indexing health automatically.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="Focus on what you can control">
        <Paragraph>
          You cannot make Google index a page instantly. But you can control
          the factors that determine how fast it happens: content quality,
          internal linking, sitemap hygiene, and server performance. Get those
          right and indexing takes care of itself.
        </Paragraph>
        <Paragraph>
          The rest of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers everything else you need to turn indexed pages into rankings
          and traffic.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "How long does Google take to index a new page?",
            answer: (
              <p>
                It depends on your site&apos;s authority and technical setup.
                Established sites often see indexing within hours. Growing sites
                typically wait 1 to 14 days. New sites may wait 1 to 4 weeks.
                Submitting the URL through Search Console and adding internal
                links can speed up the process.
              </p>
            ),
            answerText:
              "It depends on your site's authority and technical setup. Established sites often see indexing within hours. Growing sites typically wait 1 to 14 days. New sites may wait 1 to 4 weeks. Submitting the URL through Search Console and adding internal links can speed up the process.",
          },
          {
            question: "Can I make Google index my page faster?",
            answer: (
              <p>
                You cannot force instant indexing, but you can speed it up.
                Request indexing through Search Console, add strong internal
                links from indexed pages, ensure your sitemap is submitted,
                and publish high-quality content. These actions move your page
                higher in Google&apos;s crawl queue.
              </p>
            ),
            answerText:
              "You cannot force instant indexing, but you can speed it up. Request indexing through Search Console, add strong internal links from indexed pages, ensure your sitemap is submitted, and publish high-quality content. These actions move your page higher in Google's crawl queue.",
          },
          {
            question: "Why is Google not indexing my new page?",
            answer: (
              <p>
                Common causes include noindex tags, robots.txt blocks, thin or
                duplicate content, weak internal linking, and low site
                authority. Check the URL Inspection tool in Search Console for
                the specific reason. Most indexing problems are fixable once you
                identify the cause.
              </p>
            ),
            answerText:
              "Common causes include noindex tags, robots.txt blocks, thin or duplicate content, weak internal linking, and low site authority. Check the URL Inspection tool in Search Console for the specific reason. Most indexing problems are fixable once you identify the cause.",
          },
          {
            question: "Does requesting indexing in Search Console guarantee indexing?",
            answer: (
              <p>
                No. Requesting indexing tells Google to prioritize crawling the
                URL, but it does not guarantee the page will be indexed. If the
                content is thin, blocked, or duplicated, Google may crawl it
                but still decide not to index it.
              </p>
            ),
            answerText:
              "No. Requesting indexing tells Google to prioritize crawling the URL, but it does not guarantee the page will be indexed. If the content is thin, blocked, or duplicated, Google may crawl it but still decide not to index it.",
          },
          {
            question: "How do I know if my page is indexed?",
            answer: (
              <p>
                Use the URL Inspection tool in Google Search Console for a
                definitive answer. You can also search site:yoursite.com/url on
                Google. If the page appears, it is indexed. If not, it is
                either not yet indexed or has been excluded.
              </p>
            ),
            answerText:
              "Use the URL Inspection tool in Google Search Console for a definitive answer. You can also search site:yoursite.com/url on Google. If the page appears, it is indexed. If not, it is either not yet indexed or has been excluded.",
          },
          {
            question: "Does site authority affect indexing speed?",
            answer: (
              <p>
                Yes, significantly. Sites with strong authority and a history of
                quality content get crawled more frequently and have new pages
                indexed faster. New sites with low authority wait longer because
                Google allocates less crawl budget to them.
              </p>
            ),
            answerText:
              "Yes, significantly. Sites with strong authority and a history of quality content get crawled more frequently and have new pages indexed faster. New sites with low authority wait longer because Google allocates less crawl budget to them.",
          },
        ]}
      />
    </>
  );
}
