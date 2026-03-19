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

export default function WhyPagesAreNotIndexed() {
  return (
    <>
      <ArticleHero
        title="Why My Pages Are Not Indexed by Google (And How to Fix It)"
        subtitle="You published a page, waited, and searched for it on Google. Nothing. If your pages are not showing up in search results, the problem is almost always diagnosable and fixable. This guide walks through every common cause and exactly what to do about each one."
        readingTime={11}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="Why indexing matters more than you think">
        <Paragraph>
          If Google has not indexed your page, it does not exist in search
          results. No amount of keyword optimization, link building, or content
          quality matters if Google never adds the page to its database.
        </Paragraph>
        <Paragraph>
          Indexing is the foundation of everything in SEO. Before your page can
          rank for anything, Google needs to discover it, crawl it, evaluate it,
          and decide it is worth storing. When that process breaks down, your
          content stays invisible.
        </Paragraph>
        <Paragraph>
          The good news is that most indexing problems trace back to a small set
          of common causes. This{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          article covers each one, shows you how to diagnose it, and gives you a
          clear fix.
        </Paragraph>

        {/* Visual: Indexing Flow */}
        <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            How Google Indexes a Page
          </p>
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            {[
              { step: "Discover", desc: "Finds the URL via links or sitemap" },
              { step: "Crawl", desc: "Visits and reads the page content" },
              { step: "Evaluate", desc: "Assesses quality and relevance" },
              { step: "Index", desc: "Stores the page in its database" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-2 flex-1">
                <div className="rounded-xl border border-black/[0.04] bg-accent-bg/30 px-4 py-3 text-center flex-1">
                  <p className="text-[13px] font-bold text-foreground">{item.step}</p>
                  <p className="mt-0.5 text-[11px] text-muted">{item.desc}</p>
                </div>
                {i < 3 && (
                  <span className="hidden sm:block text-muted text-[14px]">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Crawled vs Indexed */}
      {/* ------------------------------------------------------------------ */}
      <Section id="crawled-vs-indexed" title="What does 'not indexed' actually mean?">
        <Paragraph>
          There is an important difference between crawling and indexing that
          most people overlook.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Crawling</strong> is when Googlebot visits your page,
              downloads the HTML, and processes the content. It is the discovery
              phase.
            </span>,
            <span key="2">
              <strong>Indexing</strong> is when Google decides the page is
              valuable enough to store in its database and potentially show in
              search results.
            </span>,
          ]}
        />
        <Paragraph>
          A page can be crawled but not indexed. This happens when Google visits
          the page but decides it is not worth including. In Google Search
          Console, you will see statuses like "Discovered, currently not indexed"
          or "Crawled, currently not indexed." Both mean Google knows about your
          page but has chosen not to store it.
        </Paragraph>
        <Paragraph>
          These two statuses have different root causes. &quot;Discovered&quot;
          means Google found the URL but has not even bothered to crawl it yet,
          often a priority or crawl budget issue — our dedicated{" "}
          <a
            href="/seo-guide/technical-seo/discovered-not-indexed"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            Discovered but Not Indexed guide
          </a>{" "}
          covers this in detail. &quot;Crawled, not indexed&quot; means Google
          looked at the page and decided to skip it, usually a quality or
          duplication problem.
        </Paragraph>
        <Callout type="info">
          A page showing impressions in Search Console is indexed. If you see
          zero impressions and the URL Inspection tool says "not on Google," that
          page has not been indexed.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 1: Page is new */}
      {/* ------------------------------------------------------------------ */}
      <Section id="page-is-new" title="Your page is new and has not been discovered yet">
        <Paragraph>
          Google does not index pages instantly. If your page was published
          recently, Google may simply not have found it. This is especially
          common on newer websites with few backlinks and limited crawl history.
        </Paragraph>
        <Paragraph>
          <strong>How to check:</strong> Open Google Search Console, go to URL
          Inspection, and paste the page URL. If it says "URL is not on Google"
          and has never been crawled, the page has not been discovered.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Submit the URL through Search Console's URL Inspection tool using Request Indexing",
            "Make sure the page is in your XML sitemap",
            "Add internal links from existing indexed pages to the new page",
            "The more connected your new page is to the rest of your site, the faster Google will find it",
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 2: Noindex tag */}
      {/* ------------------------------------------------------------------ */}
      <Section id="noindex-tag" title="A noindex tag is blocking indexing">
        <Paragraph>
          A noindex meta tag tells Google explicitly not to index the page. This
          is sometimes added intentionally for staging pages or thank-you pages,
          but it can also be set accidentally by CMS settings, SEO plugins, or
          theme configurations.
        </Paragraph>
        <Paragraph>
          <strong>How to check:</strong> View the page source and search for
          "noindex." Look for a meta robots tag like{" "}
          <code className="rounded bg-border-light px-1.5 py-0.5 text-[13px] font-mono text-foreground">
            &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;
          </code>
          . The URL Inspection tool in Search Console will also flag noindex
          directives.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Remove the noindex tag from the page's HTML or CMS settings",
            "If using WordPress, check your SEO plugin's settings for the specific page and the global defaults",
            "After removing the tag, request re-indexing through Search Console",
            "Double-check that your staging environment is not pushing noindex tags to production",
          ]}
        />
        <Callout type="warning">
          Some CMS platforms add noindex to new pages by default. Always verify
          the robots meta tag after publishing, especially if you recently
          changed themes or plugins.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 3: Robots.txt */}
      {/* ------------------------------------------------------------------ */}
      <Section id="blocked-by-robots" title="Robots.txt is blocking the crawler">
        <Paragraph>
          Your robots.txt file can prevent Googlebot from crawling specific pages
          or entire directories. If a page is blocked by robots.txt, Google
          cannot access it and therefore cannot index it.
        </Paragraph>
        <Paragraph>
          <strong>How to check:</strong> Visit your site's robots.txt file and
          look for Disallow rules that match your page's URL path. You can also
          use the robots.txt tester in Search Console to test specific URLs.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Remove or modify the Disallow rule blocking the page",
            "Make sure you are not accidentally blocking important directories",
            "Remember that robots.txt blocks crawling, not indexing. If other sites link to a blocked page, Google might still index the URL without content",
          ]}
        />
        <Paragraph>
          For a complete walkthrough of robots.txt syntax and common mistakes,
          see our{" "}
          <a
            href="/seo-guide/technical-seo/robots-txt-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            robots.txt guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 4: Thin content */}
      {/* ------------------------------------------------------------------ */}
      <Section id="thin-content" title="Thin or low-quality content">
        <Paragraph>
          Google does not index every page it crawls. If the content is too thin,
          too generic, or does not provide enough value compared to what already
          exists, Google may skip it entirely.
        </Paragraph>
        <Paragraph>
          Pages with only a few sentences, auto-generated content with no real
          substance, or articles that restate what dozens of other pages already
          cover are common candidates for this.
        </Paragraph>
        <Paragraph>
          <strong>How to check:</strong> Compare your page to the top-ranking
          results for your target keyword. If your page is noticeably shorter,
          less detailed, or less helpful, Google may be filtering it out. In
          Search Console, the status "Crawled, currently not indexed" often
          points to a quality issue.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Expand the content to fully cover the topic. This does not mean adding filler. It means answering every question a reader would have.",
            "Add original insights, examples, data, or perspectives that competing pages do not offer.",
            "Improve readability with clear headings, short paragraphs, and a logical structure.",
          ]}
        />
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/content-seo/content-optimization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content optimization guide
          </a>{" "}
          walks through a step-by-step process for improving existing content
          that Google is not indexing.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 5: Duplicate content */}
      {/* ------------------------------------------------------------------ */}
      <Section id="duplicate-content" title="Duplicate or very similar content">
        <Paragraph>
          If Google finds multiple pages on your site with the same or very
          similar content, it may choose to index only one version and ignore the
          rest. This is common on e-commerce sites with filtered pages, blogs
          with tag and category archives, or sites that publish slight variations
          of the same article.
        </Paragraph>
        <Paragraph>
          <strong>How to check:</strong> Search for a unique sentence from your
          page in Google using quotes. If a different URL from your site appears
          instead, Google is treating that version as the canonical. In Search
          Console, look for "Duplicate without user-selected canonical" or
          "Duplicate, Google chose different canonical."
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Set a canonical tag pointing to the preferred version of the page",
            "Consolidate similar pages into one comprehensive page where possible",
            "Use 301 redirects for pages that should no longer exist separately",
            "Avoid publishing multiple pages targeting the same keyword with the same angle",
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 6: Poor internal linking */}
      {/* ------------------------------------------------------------------ */}
      <Section id="poor-internal-linking" title="Poor internal linking">
        <Paragraph>
          If a page has no internal links pointing to it, Google may not discover
          it or may consider it unimportant. Pages buried deep in your site
          structure with no connections to other content are often the last to be
          crawled and the first to be dropped from the index.
        </Paragraph>
        <Paragraph>
          Internal links are one of the strongest signals you can send to Google
          about which pages matter. A page with zero internal links is
          effectively invisible to both crawlers and users.
        </Paragraph>
        <Paragraph>
          <strong>How to check:</strong> Use Google Search Console's Links
          report to see how many internal links point to the page. If the number
          is zero or very low, that is likely contributing to the problem.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Add internal links from your most important, already-indexed pages to the unindexed page",
            "Use descriptive anchor text that includes relevant keywords",
            "Aim for at least 3 to 5 internal links per page",
            "Make sure every important page is reachable within 3 clicks from your homepage",
          ]}
        />
        <Paragraph>
          For a full strategy on how to build an effective internal linking
          structure, see our{" "}
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
      {/* Reason 7: Crawl budget */}
      {/* ------------------------------------------------------------------ */}
      <Section id="crawl-budget" title="Crawl budget issues">
        <Paragraph>
          Google allocates a limited number of pages it will crawl on your site
          during each visit. This is your crawl budget. For small sites with
          under a few hundred pages, this is rarely a problem. But for larger
          sites with thousands of pages, Google may not get to every page during
          each crawl cycle.
        </Paragraph>
        <Paragraph>
          <strong>How to check:</strong> In Search Console, go to Settings and
          then Crawl Stats. Look at how many pages are crawled per day. If Google
          is crawling fewer pages than you have, crawl budget may be a factor.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Remove or noindex low-value pages so Google spends its budget on pages that matter",
            "Fix crawl errors that waste Googlebot's time, like broken links, redirect chains, and server errors",
            "Improve site speed so Google can crawl more pages in less time",
            "Submit an updated sitemap that only includes pages you actually want indexed",
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 8: Technical errors */}
      {/* ------------------------------------------------------------------ */}
      <Section id="technical-errors" title="Technical errors blocking indexing">
        <Paragraph>
          Several technical issues can prevent Google from indexing your pages,
          even when everything else looks fine.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>404 errors.</strong> The page returns a "not found" status.
              Google will not index pages that do not exist.
            </span>,
            <span key="2">
              <strong>Server errors (5xx).</strong> If your server returns errors
              when Googlebot visits, it cannot access the content. Repeated
              server errors cause Google to crawl your site less frequently.
            </span>,
            <span key="3">
              <strong>Redirect chains or loops.</strong> Multiple redirects in a
              row or circular redirects confuse crawlers and waste crawl budget.
              Google may give up before reaching the final page.
            </span>,
            <span key="4">
              <strong>Incorrect canonical tags.</strong> If the canonical tag
              points to a different URL, Google will try to index that URL
              instead and ignore yours.
            </span>,
            <span key="5">
              <strong>Slow server response.</strong> If your server takes too
              long to respond, Googlebot may abandon the crawl entirely.
            </span>,
          ]}
        />
        <Paragraph>
          <strong>How to check:</strong> Use the URL Inspection tool in Search
          Console to see the exact status Google received when it last visited
          the page. Check for errors, redirects, or canonical issues.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Fix 404 errors by restoring the page or setting up a 301 redirect to a relevant alternative",
            "Resolve server errors with your hosting provider",
            "Simplify redirect chains to a single 301 redirect",
            "Audit canonical tags to make sure they point to the correct URL",
            "Optimize server response time to under 200ms where possible",
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to check indexing */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-check" title="How to check if your page is indexed">
        <DataCard
          items={[
            { label: "Quick check", value: "site: search", note: "Search site:yoursite.com/url on Google" },
            { label: "Reliable check", value: "URL Inspection", note: "Use Google Search Console for definitive answer" },
            { label: "Bulk check", value: "Pages report", note: "Indexing > Pages in Search Console" },
          ]}
        />
        <Paragraph>
          Before fixing anything, confirm whether the page is actually indexed.
          There are two reliable methods.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "The site: search method",
              text: "Type site:yoursite.com/page-url into Google. If the page appears in results, it is indexed. If nothing shows up, it is not. This is quick but not always perfectly accurate for recently indexed pages.",
            },
            {
              title: "Google Search Console URL Inspection",
              text: "Paste the full URL into the URL Inspection tool. It will tell you whether the page is indexed, when it was last crawled, whether there are any issues, and what the rendered page looks like to Google. This is the most reliable method.",
            },
          ]}
        />
        <Callout type="tip">
          Always use the URL Inspection tool for a definitive answer. The site:
          search method can sometimes lag behind by hours or even days.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to get indexed faster */}
      {/* ------------------------------------------------------------------ */}
      <Section id="get-indexed-faster" title="How to get your pages indexed faster">
        <Paragraph>
          Once you have fixed any blocking issues, here are the most effective
          ways to speed up indexing.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Submit your sitemap",
              text: "Make sure your XML sitemap is submitted in Search Console and includes all pages you want indexed. Update it whenever you publish new content.",
            },
            {
              title: "Build strong internal links",
              text: "Link to new pages from your most visited, already-indexed pages. This is the single most effective way to get Google to discover and prioritize new content.",
            },
            {
              title: "Update and republish content",
              text: "Google re-crawls pages that change. Updating a page with fresh content signals that it is active and worth revisiting.",
            },
            {
              title: "Build topical authority",
              text: "Sites that consistently publish high-quality content on a specific topic get crawled more frequently. Google learns to trust your site and indexes new pages faster over time.",
            },
            {
              title: "Avoid publishing thin pages",
              text: "Every low-quality page dilutes your crawl budget and your site's overall quality signal. Fewer, stronger pages always beat a flood of content Google will ignore.",
            },
          ]}
        />
        <Paragraph>
          Targeting{" "}
          <a
            href="/seo-guide/keyword-research/how-to-find-low-competition-keywords"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            low-competition keywords
          </a>{" "}
          helps new pages gain traction faster. When competition is weak, Google
          is more likely to index and rank your content quickly because fewer
          high-quality alternatives exist.
        </Paragraph>
        <Paragraph>
          Understanding{" "}
          <a
            href="/seo-guide/keyword-research/search-intent"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            search intent
          </a>{" "}
          also plays a role. Pages that precisely match what searchers are
          looking for get better engagement signals, which reinforces Google's
          decision to keep them indexed.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps with indexing issues">
        <Paragraph>
          Many indexing problems come down to content quality, internal linking
          gaps, and technical oversights that are hard to spot manually,
          especially as your site grows.
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
              automatically identify pages with thin content, missing internal
              links, and technical errors that prevent indexing.
            </span>,
            "Flags pages that Google is crawling but not indexing so you know exactly what to fix",
            "Surfaces internal linking opportunities you may have missed, helping Google discover pages faster",
            "Monitors your indexing status over time and alerts you when pages drop out of the index",
          ]}
        />
        <Paragraph>
          Instead of manually checking every URL in Search Console, RankSEO
          gives you a prioritized list of indexing issues with the biggest
          impact. If you are ready to fix your indexing problems and get your
          content in front of searchers, explore{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            RankSEO's features
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
            question: "How long does Google take to index a new page?",
            answer: (
              <p>
                It varies. Some pages get indexed within hours, while others take
                days or weeks. New sites with little authority typically wait
                longer. Submitting the URL through Search Console and adding
                internal links from indexed pages can speed up the process
                significantly.
              </p>
            ),
            answerText:
              "It varies. Some pages get indexed within hours, while others take days or weeks. New sites with little authority typically wait longer. Submitting the URL through Search Console and adding internal links from indexed pages can speed up the process significantly.",
          },
          {
            question: "Why is Google not indexing my site at all?",
            answer: (
              <p>
                If Google is not indexing your site at all, check for a sitewide
                noindex tag, a robots.txt file blocking Googlebot, or server
                errors preventing crawling. Make sure your site is verified in
                Google Search Console and that a sitemap has been submitted.
              </p>
            ),
            answerText:
              "If Google is not indexing your site at all, check for a sitewide noindex tag, a robots.txt file blocking Googlebot, or server errors preventing crawling. Make sure your site is verified in Google Search Console and that a sitemap has been submitted.",
          },
          {
            question: "Should I request indexing manually for every page?",
            answer: (
              <p>
                You can use the Request Indexing button in Search Console for
                important pages, but it is not scalable. Focus on fixing the root
                cause, whether that is poor internal linking, missing sitemaps,
                or content quality. Google should discover and index your pages
                naturally if your site is well-structured.
              </p>
            ),
            answerText:
              "You can use the Request Indexing button in Search Console for important pages, but it is not scalable. Focus on fixing the root cause, whether that is poor internal linking, missing sitemaps, or content quality. Google should discover and index your pages naturally if your site is well-structured.",
          },
          {
            question: "Can low-quality content prevent a page from being indexed?",
            answer: (
              <p>
                Yes. Google evaluates whether a page adds enough value to be
                included in the index. Pages with very little content, content
                that closely matches other pages, or content that does not match
                any real search intent are often crawled but not indexed.
              </p>
            ),
            answerText:
              "Yes. Google evaluates whether a page adds enough value to be included in the index. Pages with very little content, content that closely matches other pages, or content that does not match any real search intent are often crawled but not indexed.",
          },
          {
            question: "How many of my pages should be indexed?",
            answer: (
              <p>
                There is no universal ratio. The goal is to have all of your
                valuable, unique pages indexed and to keep low-value pages like
                empty tags, duplicates, and admin pages out of the index. Compare
                the number of indexed pages in Search Console to the number of
                pages in your sitemap to spot gaps.
              </p>
            ),
            answerText:
              "There is no universal ratio. The goal is to have all of your valuable, unique pages indexed and to keep low-value pages like empty tags, duplicates, and admin pages out of the index. Compare the number of indexed pages in Search Console to the number of pages in your sitemap to spot gaps.",
          },
          {
            question:
              "What is the difference between 'Discovered' and 'Crawled' not indexed?",
            answer: (
              <p>
                &quot;Discovered, currently not indexed&quot; means Google knows
                the URL exists but has not crawled it yet, often a crawl budget
                or priority issue. &quot;Crawled, currently not indexed&quot;
                means Google visited the page but decided not to index it,
                usually a content quality or duplication problem. The fixes are
                different for each.
              </p>
            ),
            answerText:
              "Discovered, currently not indexed means Google knows the URL exists but has not crawled it yet, often a crawl budget or priority issue. Crawled, currently not indexed means Google visited the page but decided not to index it, usually a content quality or duplication problem. The fixes are different for each.",
          },
        ]}
      />
    </>
  );
}
