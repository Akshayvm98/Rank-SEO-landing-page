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

export default function InternalLinkAudit() {
  return (
    <>
      <ArticleHero
        title="How to Audit Internal Links for SEO (Step-by-Step Guide)"
        subtitle="Your pages exist but they are not performing. You have good content, decent keywords, and still no traction. The hidden problem is often how your pages are connected. An internal link audit reveals the gaps, broken connections, and missed opportunities that silently hold your site back."
        readingTime={10}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="Internal linking problems hide in plain sight">
        <Paragraph>
          Most sites have internal linking issues they do not know about.
          Orphan pages with zero links pointing to them. Important pages
          buried three clicks deep. Broken links that lead nowhere. These
          problems accumulate quietly and affect how Google crawls, indexes,
          and ranks your content.
        </Paragraph>
        <Paragraph>
          An internal link audit is how you find and fix these problems. It is
          not complicated, but it does require a systematic approach. This{" "}
          <a
            href="/seo-guide/on-page-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            on-page SEO
          </a>{" "}
          article gives you a step-by-step process you can follow right now
          to improve your site&apos;s internal linking structure.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What it is */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-it" title="What an internal link audit is">
        <Paragraph>
          An internal link audit is a systematic review of how pages on your
          site link to each other. It examines which pages are well-connected,
          which are isolated, which links are broken, and whether your linking
          structure supports the way you want Google to understand your
          content.
        </Paragraph>
        <DataCard
          items={[
            {
              label: "What you check",
              value: "Link structure",
              note: "How pages connect to each other across your site",
            },
            {
              label: "What you find",
              value: "Gaps and issues",
              note: "Orphan pages, broken links, weak connections",
            },
            {
              label: "What you get",
              value: "Better SEO",
              note: "Improved crawling, indexing, and rankings",
            },
          ]}
        />
        <Paragraph>
          Think of it as a health check for your site&apos;s nervous system.
          Links are how information and authority flow between pages. When
          connections are weak or broken, the whole system underperforms.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why it matters */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-it-matters" title="Why internal link audits matter">
        <NumberedList
          items={[
            {
              title: "Helps pages get discovered and indexed",
              text: "Google finds pages by following links. Orphan pages with no internal links are invisible to Google's crawler. An audit identifies these pages so you can connect them to the rest of your site.",
            },
            {
              title: "Improves rankings for important pages",
              text: "Internal links distribute authority. If your best content is not receiving links from your strongest pages, it is not reaching its ranking potential. An audit reveals where authority is flowing and where it should be redirected.",
            },
            {
              title: "Fixes broken connections",
              text: "Links to deleted pages, renamed URLs, or incorrect paths create dead ends for both users and Google. Broken links waste crawl budget and frustrate visitors. An audit catches them before they cause real damage.",
            },
            {
              title: "Strengthens topic clusters",
              text: "Well-linked topic clusters signal expertise to Google. An audit shows which clusters are strongly interlinked and which have gaps that weaken the topical signal.",
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
          shows how weak internal linking is one of the top reasons Google
          skips pages entirely.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to audit - main section */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-audit" title="How to audit internal links (step by step)">
        {/* Visual: Audit Flow */}
        <div className="mt-2 mb-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Internal Link Audit Process
          </p>
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            {[
              { step: "1. Map", desc: "List all pages and their links" },
              { step: "2. Find", desc: "Identify orphans and broken links" },
              { step: "3. Analyze", desc: "Check anchor text and relevance" },
              { step: "4. Fix", desc: "Add, repair, and restructure links" },
              { step: "5. Monitor", desc: "Track improvements over time" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-2 flex-1">
                <div className="rounded-xl border border-black/[0.04] bg-accent-bg/30 px-3 py-3 text-center flex-1">
                  <p className="text-[13px] font-bold text-foreground">{item.step}</p>
                  <p className="mt-0.5 text-[11px] text-muted">{item.desc}</p>
                </div>
                {i < 4 && (
                  <span className="hidden sm:block text-muted text-[14px]">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <NumberedList
          items={[
            {
              title: "List all pages on your site",
              text: "Start with a complete inventory of your pages. Export your sitemap, use a crawl tool, or pull the pages list from your CMS. You need to know every URL before you can evaluate how they connect. This is your baseline.",
            },
            {
              title: "Identify orphan pages",
              text: "Find pages that have zero internal links pointing to them. These pages are effectively hidden from Google. Use a crawl tool or check the Links report in Search Console. Any page without at least one internal link needs attention immediately.",
            },
            {
              title: "Check internal link count per page",
              text: "For each page, count how many internal links point to it and how many it sends out. Important pages should receive more internal links than less important ones. If your homepage links to every page but your key articles only have 1 to 2 links, the distribution is wrong.",
            },
            {
              title: "Analyze anchor text usage",
              text: "Review the anchor text used for your internal links. Look for over-reliance on exact match keywords, excessive use of generic text like 'click here,' and whether the anchor text accurately describes the destination page. Our anchor text best practices guide covers the details.",
            },
            {
              title: "Find broken internal links",
              text: "Check for links that point to pages that no longer exist (404 errors), have been moved without redirects, or return server errors. Broken links waste crawl budget and create dead ends. Fix them by updating the URL, adding a redirect, or removing the link.",
            },
            {
              title: "Evaluate link relevance",
              text: "Check that links connect genuinely related content. A keyword research article linking to a content optimization guide makes sense. A keyword research article linking to your privacy policy does not. Irrelevant links dilute the topical signal for both pages.",
            },
          ]}
        />
        <Paragraph>
          RankSEO&apos;s{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            site audit features
          </a>{" "}
          automate steps 1 through 5 and give you a prioritized list of
          exactly what to fix first.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Key issues */}
      {/* ------------------------------------------------------------------ */}
      <Section id="key-issues" title="Key issues to look for">
        {/* Visual: Well-linked vs Poorly-linked */}
        <div className="mt-2 mb-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-2">
                Poorly linked site
              </p>
              <ul className="space-y-1.5 text-[13px] text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Orphan pages with no incoming links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Broken links creating dead ends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Important pages buried deep in structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Random linking with no topic relevance</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-2">
                Well linked site
              </p>
              <ul className="space-y-1.5 text-[13px] text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Every page reachable through internal links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>No broken links anywhere on the site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Priority pages have the most incoming links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Topic clusters strongly interlinked</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <NumberedList
          items={[
            {
              title: "Orphan pages",
              text: "Pages with no internal links pointing to them. Google may never find them, even if they are in your sitemap. They are the single most impactful issue to fix because the solution is simple: add links from related, indexed pages.",
            },
            {
              title: "Broken internal links",
              text: "Links that point to URLs returning 404 errors, server errors, or redirect chains. Each broken link is a dead end for Google's crawler and a frustrating experience for users.",
            },
            {
              title: "Weak linking to important pages",
              text: "If your most valuable pages (those you want to rank) have fewer internal links than less important pages, authority is flowing in the wrong direction. Rebalance by adding links from high-traffic pages to your priority targets.",
            },
            {
              title: "Over-linked pages",
              text: "Pages with 30 or more internal links dilute the value of each link. The links become noise rather than signal. Reduce to the most relevant 5 to 10 and remove the rest.",
            },
            {
              title: "Irrelevant internal links",
              text: "Links between pages with no topical relationship confuse Google about your site's content structure. Remove or replace these with links to genuinely related content.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to fix */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-fix" title="How to fix internal linking issues">
        <NumberedList
          items={[
            {
              title: "Add strategic internal links to orphan pages",
              text: "For each orphan page, find 3 to 5 related pages that are already indexed and add contextual links to the orphan. Use descriptive anchor text that accurately describes the destination. This is the highest-impact fix in most audits.",
            },
            {
              title: "Fix or remove broken links",
              text: "For links pointing to deleted pages, either update the link to the correct URL, add a 301 redirect from the old URL to a relevant page, or remove the link entirely if no relevant destination exists.",
            },
            {
              title: "Improve anchor text",
              text: "Replace generic anchor text ('click here,' 'read more') with descriptive phrases. Vary the anchor text for links to the same page. Make sure each anchor accurately previews the destination content.",
            },
            {
              title: "Restructure linking around topic clusters",
              text: "Ensure that pages within the same topic cluster link to each other and to the cluster's pillar page. Cross-link between clusters only where the relationship is genuine. This builds the topical authority signals Google rewards.",
            },
            {
              title: "Redirect authority to priority pages",
              text: "Identify which pages you most want to rank and add internal links to them from your highest-traffic, most-authoritative pages. This strategically directs ranking power where it matters most.",
            },
          ]}
        />
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking-best-practices"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal linking best practices guide
          </a>{" "}
          covers the principles behind effective linking. And our{" "}
          <a
            href="/seo-guide/on-page-seo/anchor-text-best-practices"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            anchor text guide
          </a>{" "}
          shows how to write anchor text that maximizes the value of every
          link.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Audit checklist */ }
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="Internal link audit checklist">
        <div className="mt-2 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Complete Audit Checklist
          </p>
          <div className="space-y-2.5">
            {[
              "No orphan pages exist (every page has at least one incoming link)",
              "No broken internal links (all links resolve to live pages)",
              "Important pages receive the most internal links",
              "Anchor text is descriptive, varied, and accurate",
              "Topic clusters are strongly interlinked",
              "No page has more than 30 internal links",
              "Old content has been updated with links to newer pages",
              "Link relevance is strong (connected pages are topically related)",
              "Crawl depth is shallow (important pages reachable within 3 clicks)",
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
      <Section id="rankseo" title="How RankSEO helps with internal link audits">
        <Paragraph>
          Running a manual internal link audit takes hours on a small site and
          days on a large one. RankSEO does it in minutes.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                site audit tools
              </a>{" "}
              crawl your entire site and produce a complete internal linking
              report with orphan pages, broken links, anchor text issues, and
              priority recommendations
            </span>,
            "Identifies every orphan page and suggests which pages should link to them",
            "Detects all broken internal links with one-click fix suggestions",
            "Analyzes anchor text distribution and flags over-optimization",
            "Monitors your internal linking health over time and alerts you when issues appear",
          ]}
        />
        <Paragraph>
          Stop guessing about your internal linking health. Explore{" "}
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
          to audit your internal links and fix issues automatically.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="Audit regularly. Fix systematically. Rank better.">
        <Paragraph>
          Internal link audits are not a one-time task. As your site grows,
          new gaps appear. Pages get deleted, URLs change, and new content
          needs to be connected. A quarterly audit keeps your linking
          structure healthy and your rankings strong.
        </Paragraph>
        <Paragraph>
          The rest of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers everything else you need to build a site that ranks
          consistently.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "What is an internal link audit?",
            answer: (
              <p>
                An internal link audit is a systematic review of how pages on
                your site link to each other. It identifies orphan pages,
                broken links, weak connections, and anchor text issues that
                may be hurting your SEO performance.
              </p>
            ),
            answerText:
              "An internal link audit is a systematic review of how pages on your site link to each other. It identifies orphan pages, broken links, weak connections, and anchor text issues that may be hurting your SEO performance.",
          },
          {
            question: "How often should I audit internal links?",
            answer: (
              <p>
                At least once per quarter. If your site publishes content
                frequently or has recently undergone major changes like
                redesigns, URL migrations, or content deletions, audit more
                often. Regular audits catch issues before they affect rankings.
              </p>
            ),
            answerText:
              "At least once per quarter. If your site publishes content frequently or has recently undergone major changes like redesigns, URL migrations, or content deletions, audit more often. Regular audits catch issues before they affect rankings.",
          },
          {
            question: "What are orphan pages?",
            answer: (
              <p>
                Orphan pages are pages on your site that have no internal links
                pointing to them. They can only be found through the sitemap or
                by typing the URL directly. Google often deprioritizes orphan
                pages for indexing because the lack of links signals they are
                not important.
              </p>
            ),
            answerText:
              "Orphan pages are pages on your site that have no internal links pointing to them. They can only be found through the sitemap or by typing the URL directly. Google often deprioritizes orphan pages for indexing because the lack of links signals they are not important.",
          },
          {
            question: "Do internal links affect rankings?",
            answer: (
              <p>
                Yes. Internal links help Google discover pages, understand
                content relationships, and distribute authority. Pages with
                strong internal linking from relevant pages tend to rank better
                than pages with few or no internal links.
              </p>
            ),
            answerText:
              "Yes. Internal links help Google discover pages, understand content relationships, and distribute authority. Pages with strong internal linking from relevant pages tend to rank better than pages with few or no internal links.",
          },
          {
            question: "How do I find broken internal links?",
            answer: (
              <p>
                Use a crawl tool like Screaming Frog, Ahrefs, or
                RankSEO&apos;s site audit feature to scan your site for links
                that return 404 errors or server errors. You can also check the
                Coverage report in Google Search Console for pages with crawl
                errors.
              </p>
            ),
            answerText:
              "Use a crawl tool like Screaming Frog, Ahrefs, or RankSEO's site audit feature to scan your site for links that return 404 errors or server errors. You can also check the Coverage report in Google Search Console for pages with crawl errors.",
          },
          {
            question: "Can I do an internal link audit manually?",
            answer: (
              <p>
                Yes, but it is time-consuming. For a small site with under 50
                pages, you can manually check links using a spreadsheet and the
                Links report in Search Console. For larger sites, automated
                tools are essential. They catch issues that manual review
                misses.
              </p>
            ),
            answerText:
              "Yes, but it is time-consuming. For a small site with under 50 pages, you can manually check links using a spreadsheet and the Links report in Search Console. For larger sites, automated tools are essential. They catch issues that manual review misses.",
          },
        ]}
      />
    </>
  );
}
