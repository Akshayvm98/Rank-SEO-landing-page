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

export default function KeywordCannibalization() {
  return (
    <>
      <ArticleHero
        title="Keyword Cannibalization Explained (And How to Fix It)"
        subtitle="You wrote multiple articles on similar topics thinking it would help you rank for more keywords. Instead, your pages are competing against each other and none of them rank well. This is keyword cannibalization, and it silently destroys rankings. The good news: it is completely fixable."
        readingTime={10}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="When your own pages become your competition">
        <Paragraph>
          Imagine you write two articles about keyword research. One is a
          beginner guide, the other is a tips-and-tricks post. Both target
          &quot;keyword research.&quot; You expect double the ranking power.
          Instead, Google gets confused about which page to show and neither
          one ranks as well as it should.
        </Paragraph>
        <Paragraph>
          That is keyword cannibalization. It happens more often than most
          people realize, especially on sites that have been publishing content
          for a while without a clear{" "}
          <a
            href="/seo-guide/keyword-research"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword research
          </a>{" "}
          strategy.
        </Paragraph>
        <Paragraph>
          The tricky part is that cannibalization does not announce itself. Your
          rankings just slowly underperform, and unless you look for the
          problem specifically, you will never know it is happening. This{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          article walks through exactly what cannibalization is, how to find
          it, and how to fix it.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What is it */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-it" title="What is keyword cannibalization?">
        <Paragraph>
          Keyword cannibalization happens when two or more pages on your site
          target the same keyword or closely related keywords with the same
          search intent. Instead of one strong page, you have multiple weaker
          pages splitting the signals Google uses to determine rankings.
        </Paragraph>
        <Paragraph>
          Think of it like sending two runners from the same team to race in
          the same lane. They get in each other&apos;s way, and neither
          finishes as fast as they could have alone.
        </Paragraph>
        <DataCard
          items={[
            {
              label: "What happens",
              value: "Signal dilution",
              note: "Backlinks, authority, and clicks split across pages",
            },
            {
              label: "What Google sees",
              value: "Confusion",
              note: "Unclear which page is the best result for the query",
            },
            {
              label: "What you get",
              value: "Lower rankings",
              note: "Neither page ranks as well as one strong page would",
            },
          ]}
        />
        <Paragraph>
          Cannibalization is not just about identical keywords. It also happens
          when pages target keywords that are so similar that Google considers
          them the same query. Understanding{" "}
          <a
            href="/seo-guide/keyword-research/search-intent"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            search intent
          </a>{" "}
          is critical here. If two keywords trigger the same set of results on
          Google, your pages targeting those keywords are likely cannibalizing
          each other.
        </Paragraph>
        <Callout type="info">
          Cannibalization is about intent overlap, not exact keyword matches.
          Two pages targeting different keywords can still cannibalize each
          other if Google treats those keywords as the same query.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why it is bad */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-bad" title="Why keyword cannibalization hurts your SEO">
        <Paragraph>
          Cannibalization does not just cause minor inconvenience. It actively
          damages your rankings in several measurable ways.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Google does not know which page to rank",
              text: "When multiple pages target the same keyword, Google has to choose. It might pick the wrong one, rotate between them, or rank neither as highly as it would rank a single focused page. You lose control over which page appears in search results.",
            },
            {
              title: "Ranking signals get split",
              text: "Backlinks, internal links, click-through rate, and engagement metrics all get divided across competing pages instead of concentrating on one. A page with 20 backlinks ranks better than two pages with 10 each.",
            },
            {
              title: "Crawl budget gets wasted",
              text: "Google spends time crawling multiple pages that serve the same purpose. On large sites, this eats into crawl budget that should be spent on unique, valuable content.",
            },
            {
              title: "Click-through rate drops",
              text: "If Google shows a less relevant version of your page for a query, users are less likely to click. Lower CTR leads to lower rankings over time, creating a downward spiral.",
            },
            {
              title: "Content quality appears lower",
              text: "Two thin pages on the same topic look worse to Google than one comprehensive page. Consolidating content almost always produces a stronger, more authoritative piece.",
            },
          ]}
        />

        <DataCard
          items={[
            {
              label: "Before fix",
              value: "Page A: #14, Page B: #19",
              note: "Both pages underperforming, split signals",
            },
            {
              label: "After fix",
              value: "Merged page: #5",
              note: "Combined authority, concentrated signals",
            },
            {
              label: "Typical improvement",
              value: "5-15 positions",
              note: "Common ranking jump after consolidation",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to identify */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-identify" title="How to identify keyword cannibalization">
        <Paragraph>
          Finding cannibalization requires looking at your data from the right
          angle. Here are the most reliable methods.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Google Search Console query report",
              text: "Go to Performance > Search Results. Filter by a specific query and look at the Pages tab. If multiple pages are getting impressions or clicks for the same query, you have cannibalization. Pay special attention to queries where Google rotates between different pages over time.",
            },
            {
              title: "The site: search method",
              text: "Search site:yoursite.com \"target keyword\" on Google. If multiple pages from your site appear, Google sees them as relevant for the same query. This is a quick way to spot obvious cannibalization.",
            },
            {
              title: "Ranking position fluctuations",
              text: "If a page's ranking for a keyword jumps around significantly from week to week, Google may be alternating between multiple pages on your site. Unstable rankings are a classic sign of cannibalization.",
            },
            {
              title: "Content audit with keyword mapping",
              text: "Create a spreadsheet listing every page and its target keyword. When two or more pages share the same target keyword or very similar ones, flag them for review. This systematic approach catches problems that other methods miss.",
            },
          ]}
        />
        <Paragraph>
          RankSEO&apos;s{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content analysis features
          </a>{" "}
          automatically detect keyword overlap across your pages, so you do not
          have to do this manually. It flags competing pages and shows you
          exactly where the overlap is.
        </Paragraph>
        <Callout type="tip">
          Check your most important keywords first. Cannibalization on a
          high-volume keyword costs you more traffic than on a keyword nobody
          searches for.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to fix */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-fix" title="How to fix keyword cannibalization">
        <Paragraph>
          The right fix depends on the situation. Here are five strategies,
          each suited to a different scenario.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Merge the competing pages into one",
              text: "When to use: both pages cover the same topic but neither is comprehensive enough on its own. How to implement: combine the best content from both pages into a single, stronger page. Keep the URL with more backlinks and better rankings. Set up a 301 redirect from the removed URL to the consolidated page. This is the most common and most effective fix.",
            },
            {
              title: "301 redirect the weaker page",
              text: "When to use: one page is clearly stronger and the other adds little unique value. How to implement: redirect the weaker URL to the stronger one using a 301 redirect. The backlinks and authority from the redirected page will pass to the destination. Update any internal links that pointed to the old URL.",
            },
            {
              title: "Re-target one page to a different keyword",
              text: "When to use: both pages have value but target keywords that are too similar. How to implement: keep one page on the original keyword and rewrite the other to target a different but related keyword with distinct intent. Update the title, headings, and content focus of the re-targeted page.",
            },
            {
              title: "Add a canonical tag",
              text: "When to use: you need both pages to exist (for example, a product page and a category page) but want Google to treat one as the primary version. How to implement: add a rel=canonical tag on the secondary page pointing to the primary page. This tells Google which page to prioritize for ranking.",
            },
            {
              title: "Strengthen internal linking to the preferred page",
              text: "When to use: as a supporting fix alongside any of the above strategies. How to implement: update all internal links to point to the page you want to rank. Remove or reduce internal links to the competing page. This clarifies to Google which page is your preferred result.",
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
          covers how to structure links across your site so you avoid sending
          mixed signals to Google. And our{" "}
          <a
            href="/seo-guide/content-seo/content-optimization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content optimization guide
          </a>{" "}
          walks through how to improve the merged page so it outperforms both
          originals.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Cannibalization audit checklist */}
      {/* ------------------------------------------------------------------ */}
      <Section id="audit-checklist" title="Cannibalization audit checklist">
        <Paragraph>
          Use this checklist to systematically find and fix cannibalization
          across your site.
        </Paragraph>
        {/* Visual: Audit Checklist */}
        <div className="mt-4 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Cannibalization Audit Steps
          </p>
          <div className="space-y-2.5">
            {[
              "Export your top queries from Google Search Console with page-level data",
              "Flag any query where more than one page receives impressions",
              "Check whether the competing pages have the same search intent",
              "Decide on a strategy: merge, redirect, re-target, or canonical",
              "Implement the fix and update all internal links accordingly",
              "Monitor rankings for 2 to 4 weeks to confirm improvement",
              "Repeat quarterly as your content library grows",
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
      {/* How to prevent */}
      {/* ------------------------------------------------------------------ */}
      <Section id="prevention" title="How to prevent keyword cannibalization">
        <Paragraph>
          Fixing cannibalization is important, but preventing it saves you
          from having to fix it in the first place. These habits keep your
          content strategy clean.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Create a keyword map before you write",
              text: "Before publishing any new content, check what you already have. Map every existing page to its target keyword. If the keyword you want to target is already covered, improve the existing page instead of creating a new one.",
            },
            {
              title: "Use keyword clustering to plan content",
              text: "Group related keywords into clusters and assign each cluster to one page. This ensures every page has a distinct purpose and no two pages compete for the same topic. Our keyword clustering guide explains the full process.",
            },
            {
              title: "Define clear intent boundaries",
              text: "Each page should serve one specific intent. If a keyword has both informational and commercial intent, decide which intent each page serves and make sure the content reflects that choice clearly.",
            },
            {
              title: "Audit content regularly",
              text: "As your site grows, cannibalization creeps in. Run a quarterly audit to check for new overlaps. This is especially important after publishing a batch of new content or expanding into a new topic area.",
            },
          ]}
        />
        <Paragraph>
          Understanding{" "}
          <a
            href="/seo-guide/keyword-research/keywords-per-page"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            how many keywords a page should target
          </a>{" "}
          helps prevent cannibalization from the start. When you know that one
          page covers one topic with its supporting variations, you naturally
          avoid creating overlapping content.
        </Paragraph>
        <Callout type="tip">
          The best prevention is a simple rule: before writing anything new,
          search your own site first. If you already have a page on that
          topic, update it instead of creating a competitor.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps with keyword cannibalization">
        <Paragraph>
          Detecting and fixing cannibalization manually is time-consuming,
          especially on larger sites. RankSEO automates the process.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                keyword tracking tools
              </a>{" "}
              automatically flag pages competing for the same keywords so you
              catch cannibalization before it damages rankings
            </span>,
            "Shows you exactly which pages overlap and which keywords are affected",
            "Recommends whether to merge, redirect, or re-target based on each page's performance data",
            "Monitors your fixes over time to confirm that rankings improve after consolidation",
            "Prevents future cannibalization by alerting you when new content targets an already-covered keyword",
          ]}
        />
        <Paragraph>
          Stop letting your own pages compete against each other. Explore{" "}
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
          to start finding and fixing keyword cannibalization today.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="One topic, one page. Keep it clean.">
        <Paragraph>
          Keyword cannibalization is one of the most common and most
          overlooked SEO problems. It quietly drags down your rankings while
          you wonder why your content is not performing.
        </Paragraph>
        <Paragraph>
          The fix is straightforward: find overlapping pages, decide on the
          right strategy, consolidate, and prevent it from happening again.
          The rest of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers every other piece of ranking well on Google.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "What is keyword cannibalization in SEO?",
            answer: (
              <p>
                Keyword cannibalization happens when two or more pages on your
                site target the same keyword or keywords with the same search
                intent. This forces your pages to compete against each other
                instead of against your competitors, resulting in lower rankings
                for both.
              </p>
            ),
            answerText:
              "Keyword cannibalization happens when two or more pages on your site target the same keyword or keywords with the same search intent. This forces your pages to compete against each other instead of against your competitors, resulting in lower rankings for both.",
          },
          {
            question: "How do I fix keyword cannibalization?",
            answer: (
              <p>
                The most effective fixes are merging competing pages into one
                stronger page, redirecting the weaker page to the stronger one,
                or re-targeting one page to a different keyword with distinct
                intent. The right choice depends on the quality and performance
                of each page.
              </p>
            ),
            answerText:
              "The most effective fixes are merging competing pages into one stronger page, redirecting the weaker page to the stronger one, or re-targeting one page to a different keyword with distinct intent. The right choice depends on the quality and performance of each page.",
          },
          {
            question: "Is keyword cannibalization always bad?",
            answer: (
              <p>
                In most cases, yes. It splits your ranking signals and confuses
                Google about which page to show. However, if your site is so
                authoritative that multiple pages rank on the first page for the
                same keyword, cannibalization may not be a problem. For most
                sites, consolidation leads to better results.
              </p>
            ),
            answerText:
              "In most cases, yes. It splits your ranking signals and confuses Google about which page to show. However, if your site is so authoritative that multiple pages rank on the first page for the same keyword, cannibalization may not be a problem. For most sites, consolidation leads to better results.",
          },
          {
            question: "Can multiple pages from my site rank for the same keyword?",
            answer: (
              <p>
                Yes, but it is rare and usually only happens for very
                authoritative domains. For most sites, Google picks one page to
                show per query. If you have multiple pages competing, Google
                often picks a suboptimal one or ranks both lower than a single
                consolidated page would rank.
              </p>
            ),
            answerText:
              "Yes, but it is rare and usually only happens for very authoritative domains. For most sites, Google picks one page to show per query. If you have multiple pages competing, Google often picks a suboptimal one or ranks both lower than a single consolidated page would rank.",
          },
          {
            question: "Should I delete pages that cannibalize each other?",
            answer: (
              <p>
                Do not just delete them. If a page has backlinks, traffic, or
                useful content, deleting it wastes those assets. Instead, merge
                the content into the stronger page and set up a 301 redirect
                from the old URL. This preserves the link equity and improves
                the remaining page.
              </p>
            ),
            answerText:
              "Do not just delete them. If a page has backlinks, traffic, or useful content, deleting it wastes those assets. Instead, merge the content into the stronger page and set up a 301 redirect from the old URL. This preserves the link equity and improves the remaining page.",
          },
          {
            question: "How do I prevent keyword cannibalization?",
            answer: (
              <p>
                Create a keyword map that assigns one primary keyword to each
                page. Before writing new content, check whether you already
                have a page targeting that keyword. If you do, update the
                existing page instead of creating a new one. Regular content
                audits help catch new overlaps as your site grows.
              </p>
            ),
            answerText:
              "Create a keyword map that assigns one primary keyword to each page. Before writing new content, check whether you already have a page targeting that keyword. If you do, update the existing page instead of creating a new one. Regular content audits help catch new overlaps as your site grows.",
          },
        ]}
      />
    </>
  );
}
