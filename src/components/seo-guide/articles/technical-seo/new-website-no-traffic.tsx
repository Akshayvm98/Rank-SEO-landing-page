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

export default function NewWebsiteNoTraffic() {
  return (
    <>
      <ArticleHero
        title="Why Your New Website Is Not Getting Traffic"
        subtitle="Launching a website and seeing zero visitors is completely normal. It is not a sign that something is broken. There are specific reasons it happens, and there are clear steps to fix it. This guide walks through every common cause and what to do about each one."
        readingTime={10}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Why new websites struggle with traffic */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-new-sites-struggle" title="Why new websites struggle with traffic">
        <Paragraph>
          New websites start with zero authority, zero trust signals, and zero
          indexed pages. There is no history for Google to evaluate, no backlinks
          vouching for your content, and no engagement data showing that people
          find your site useful.
        </Paragraph>
        <Paragraph>
          Google needs time to discover your site, evaluate your content, and
          decide whether it deserves to rank. This process does not happen
          overnight, and understanding the timeline helps set the right
          expectations.
        </Paragraph>
        <DataCard
          items={[
            {
              label: "Month 1-2",
              value: "Discovery phase",
              note: "Discovery phase, minimal traffic",
            },
            {
              label: "Month 3-6",
              value: "First rankings",
              note: "First rankings appear for easy keywords",
            },
            {
              label: "Month 6-12",
              value: "Growth begins",
              note: "Compounding growth begins",
            },
          ]}
        />
        <Paragraph>
          If you are just getting started with SEO, our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            complete SEO guide
          </a>{" "}
          covers the fundamentals you need to know. For issues specific to how
          Google handles your site technically, see our{" "}
          <a
            href="/seo-guide/technical-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            technical SEO
          </a>{" "}
          section.
        </Paragraph>
        <Callout type="info">
          Getting zero traffic in the first month is completely normal. The
          question is not why you have no traffic now. It is whether you are
          doing the right things to build it.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Your site is too new for Google to trust */}
      {/* ------------------------------------------------------------------ */}
      <Section id="too-new" title="Your site is too new for Google to trust">
        <Paragraph>
          Google gives preference to established domains with a track record.
          Sites that have been around for years, have earned backlinks, and have
          consistent publishing histories get the benefit of the doubt. A brand
          new domain has none of that.
        </Paragraph>
        <Paragraph>
          A new domain has no history, no backlinks, and no engagement data for
          Google to evaluate. You are starting from a position where Google has
          no reason to trust your content over the thousands of established pages
          already ranking.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Your domain is less than 6
          months old and you have fewer than 20 indexed pages. You are seeing
          close to zero impressions in Google Search Console.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong> Focus on consistency. Publish quality
          content on a regular schedule. Build internal links between your pages.
          Be patient. Authority is earned over months, not days. Every quality
          article you publish adds to your site's credibility in Google's eyes.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Your pages are not indexed yet */}
      {/* ------------------------------------------------------------------ */}
      <Section id="not-indexed" title="Your pages are not indexed yet">
        <Paragraph>
          Google may not have discovered or indexed your pages yet. If your pages
          are not in Google's index, they cannot appear in search results at all.
          This is one of the most common reasons new websites get zero traffic.
        </Paragraph>
        <Paragraph>
          New sites with no backlinks and no sitemap are effectively invisible to
          Google's crawlers. Without external links pointing to your site and
          without a sitemap telling Google what pages exist, discovery can take
          weeks or even months.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Open Google Search Console, go
          to URL Inspection, and paste your page URL. If it says the URL is not
          on Google, your page has not been indexed.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Submit your XML sitemap through Google Search Console",
            "Request indexing for your most important pages using the URL Inspection tool",
            "Add internal links between all your pages so Google can discover them through crawling",
            "Build at least a few backlinks to help Google find your site",
          ]}
        />
        <Paragraph>
          For a deeper look at why Google might not be indexing your pages and
          how to fix each specific cause, see our guide on{" "}
          <a
            href="/seo-guide/technical-seo/why-pages-are-not-indexed"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why pages are not indexed by Google
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* You have no keyword strategy */}
      {/* ------------------------------------------------------------------ */}
      <Section id="no-keywords" title="You have no keyword strategy">
        <Paragraph>
          Publishing content without targeting specific search queries means you
          are hoping to get found by accident. Without a keyword strategy, your
          pages are not aligned with what people are actually searching for.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Look at each page on your site
          and ask yourself what keyword it targets. If you cannot name the
          primary keyword for each page, or if your pages do not target any
          specific keywords at all, this is likely a major factor.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong> Do keyword research before creating
          content. Every page should target a specific keyword with validated
          search volume. Start with topics your audience is actually searching
          for, then create content that directly answers those queries.
        </Paragraph>
        <Paragraph>
          Our guide on{" "}
          <a
            href="/seo-guide/keyword-research/how-to-find-low-competition-keywords"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            how to find low-competition keywords
          </a>{" "}
          walks through the process of finding keywords that a new website can
          realistically rank for.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* You are targeting keywords that are too competitive */}
      {/* ------------------------------------------------------------------ */}
      <Section id="too-competitive" title="You are targeting keywords that are too competitive">
        <Paragraph>
          Going after terms like "project management software" or "best CRM"
          when you have a brand new domain is a losing strategy. These keywords
          are dominated by established companies with massive backlink profiles
          and years of authority.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Search your target keywords in
          Google. If the top results are major brands with thousands of
          backlinks, the keyword is too competitive for you right now. You will
          not outrank them with a new site, no matter how good your content is.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong> Switch to long-tail, low-competition
          keywords. Target terms where the top results are forums, thin articles,
          or small sites. These are keywords where a well-written, comprehensive
          article from a new site can realistically compete and win.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* You do not have enough content */}
      {/* ------------------------------------------------------------------ */}
      <Section id="not-enough-content" title="You do not have enough content">
        <Paragraph>
          A site with 3 pages cannot compete with one that has 50 well-optimized
          articles. Each page on your site is a potential entry point from
          Google. More quality pages means more chances to rank for different
          search queries and more opportunities to attract visitors.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Count your published, indexable
          pages. If it is under 10, you simply do not have enough content to
          generate meaningful traffic. Each missing page is a missed opportunity
          to rank for a keyword your audience is searching for.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong> Aim for 2 to 4 quality articles per
          month. Focus on topics your audience searches for and make sure each
          article targets a specific keyword. Quality always beats quantity, but
          you need a minimum volume of content to give Google enough to work
          with.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Weak or no internal linking */}
      {/* ------------------------------------------------------------------ */}
      <Section id="no-internal-links" title="Weak or no internal linking">
        <Paragraph>
          Pages with no internal links are hard for Google to discover and
          evaluate. Internal links help Google understand how your pages relate
          to each other and which topics your site covers. Without them, each
          page is an isolated island that Google may never find.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Check if your pages link to each
          other. If most pages are standalone with no connections to other
          content on your site, this is a problem that is holding back both
          crawling and ranking.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong> Every page should link to 3 to 5
          related pages on your site. Build topic clusters where articles support
          each other. When you publish a new article, go back and add links to
          it from relevant existing pages.
        </Paragraph>
        <Paragraph>
          For a complete strategy on building an effective link structure, see
          our{" "}
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
      {/* Your content does not match search intent */}
      {/* ------------------------------------------------------------------ */}
      <Section id="wrong-intent" title="Your content does not match search intent">
        <Paragraph>
          Writing what you want to say instead of what searchers want to read is
          one of the most common mistakes new site owners make. If your content
          does not match the format and depth that Google is already rewarding
          for a given keyword, it will not rank.
        </Paragraph>
        <Paragraph>
          <strong>How to identify this:</strong> Search your target keywords and
          compare your content format to the top results. If the top results are
          listicles and you wrote an essay, or if they are detailed guides and
          you wrote a short overview, there is a mismatch.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong> Match the format, depth, and angle that
          Google is already rewarding. Study the top-ranking pages for your
          target keyword and create content that serves the same intent, but
          better.
        </Paragraph>
        <Paragraph>
          Our guide on{" "}
          <a
            href="/seo-guide/keyword-research/search-intent"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            search intent
          </a>{" "}
          explains how to identify what searchers expect and how to align your
          content with those expectations.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* No publishing consistency */}
      {/* ------------------------------------------------------------------ */}
      <Section id="no-consistency" title="No publishing consistency">
        <Paragraph>
          Publishing 5 articles in week one and then nothing for 3 months sends
          a bad signal. Google crawls consistent sites more frequently because it
          learns to expect new content on a regular schedule.
        </Paragraph>
        <Paragraph>
          Inconsistent publishing also hurts your ability to build momentum.
          Traffic growth from SEO compounds over time, and long gaps between
          content reset that compounding effect.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong> Set a realistic schedule, even if it is
          just 1 article per week, and stick to it. Consistency compounds. A
          site that publishes one good article every week for 6 months will
          almost always outperform a site that publishes 20 articles in one week
          and then goes quiet.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What you should focus on first */}
      {/* ------------------------------------------------------------------ */}
      <Section id="focus-first" title="What you should focus on first">
        <Paragraph>
          If your new website is not getting traffic, here are the five most
          important steps in order of priority.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Set up Google Search Console and submit your sitemap",
              text: "This is step zero for any new site. Search Console lets you monitor indexing, submit pages, and track your first impressions and clicks.",
            },
            {
              title: "Do keyword research and target low-competition terms",
              text: "Find keywords where new sites can realistically rank. Avoid competitive head terms and focus on long-tail queries with weak results.",
            },
            {
              title: "Publish 2-4 quality articles per month",
              text: "Each article should target a specific keyword with real search volume. Focus on being thorough and helpful rather than publishing as much as possible.",
            },
            {
              title: "Build internal links between all your pages",
              text: "Connect related content so Google understands your site structure and can discover new pages through crawling.",
            },
            {
              title: "Track progress monthly and adjust",
              text: "Check Search Console for impressions, indexed pages, and early rankings. Use this data to refine your keyword targets and content strategy.",
            },
          ]}
        />
        <Paragraph>
          If your site has been live for 6+ months and still is not ranking, see
          our guide on{" "}
          <a
            href="/seo-guide/technical-seo/why-my-website-is-not-ranking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why your website is not ranking
          </a>{" "}
          for a deeper diagnosis.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps new websites grow faster */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps new websites grow faster">
        {/* Visual: New Site Priority Checklist */}
        <div className="mb-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            New Website SEO Priority Checklist
          </p>
          <div className="space-y-2.5">
            {[
              "Submit XML sitemap in Google Search Console",
              "Verify all important pages are indexed",
              "Target low-competition, long-tail keywords first",
              "Publish 2-4 quality articles per month consistently",
              "Build internal links between every related page",
              "Set up Google Search Console and monitor weekly",
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
                keyword research and content optimization features
              </a>{" "}
              help new websites find the right keywords to target and create
              content that is built to rank from day one.
            </span>,
            "Finds low-competition keywords that new sites can actually win",
            "Optimizes your content for SEO before you publish",
            "Tracks your first rankings and shows you where to focus next",
          ]}
        />
        <Paragraph>
          Building traffic to a new website takes time, but the right tools make
          the process faster and more predictable. Explore{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            RankSEO&apos;s features
          </a>{" "}
          to see how it works, or check out our{" "}
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
            question: "How long does it take for a new website to get traffic?",
            answer: (
              <p>
                Most new websites see their first organic traffic within 3 to 6
                months if they are targeting low-competition keywords and
                publishing consistently. Meaningful traffic growth usually begins
                around month 6 to 12. The timeline depends on content quality,
                keyword difficulty, and how quickly Google indexes your pages.
              </p>
            ),
            answerText:
              "Most new websites see their first organic traffic within 3 to 6 months if they are targeting low-competition keywords and publishing consistently. Meaningful traffic growth usually begins around month 6 to 12. The timeline depends on content quality, keyword difficulty, and how quickly Google indexes your pages.",
          },
          {
            question: "Why is my new website not showing on Google?",
            answer: (
              <p>
                The most common reasons are that your pages are not indexed, you
                have not submitted a sitemap, or there are no internal links
                helping Google discover your content. Check Google Search Console
                to verify which pages are indexed and fix any issues.
              </p>
            ),
            answerText:
              "The most common reasons are that your pages are not indexed, you have not submitted a sitemap, or there are no internal links helping Google discover your content. Check Google Search Console to verify which pages are indexed and fix any issues.",
          },
          {
            question:
              "How do I get traffic to a new website without backlinks?",
            answer: (
              <p>
                Focus on low-competition keywords where the top results are
                weak. Create content that is more thorough and better structured
                than what currently ranks. Build strong internal links. Backlinks
                help, but you can rank for easy keywords without them.
              </p>
            ),
            answerText:
              "Focus on low-competition keywords where the top results are weak. Create content that is more thorough and better structured than what currently ranks. Build strong internal links. Backlinks help, but you can rank for easy keywords without them.",
          },
          {
            question: "How many pages does a new website need to rank?",
            answer: (
              <p>
                There is no minimum, but more quality pages means more chances to
                rank. Aim for at least 15 to 20 well-optimized articles within
                your first 3 to 6 months. Each page targeting a specific keyword
                is another entry point from Google.
              </p>
            ),
            answerText:
              "There is no minimum, but more quality pages means more chances to rank. Aim for at least 15 to 20 well-optimized articles within your first 3 to 6 months. Each page targeting a specific keyword is another entry point from Google.",
          },
          {
            question: "Can a new website rank quickly on Google?",
            answer: (
              <p>
                Yes, but only for low-competition keywords. New sites cannot
                compete for competitive terms. Target long-tail keywords with
                weak results and you can see first-page rankings within 2 to 4
                months.
              </p>
            ),
            answerText:
              "Yes, but only for low-competition keywords. New sites cannot compete for competitive terms. Target long-tail keywords with weak results and you can see first-page rankings within 2 to 4 months.",
          },
          {
            question:
              "Should I invest in SEO or paid ads for a new website?",
            answer: (
              <p>
                Both have their place. SEO takes longer but builds a compounding
                asset. Paid ads give immediate traffic but stop when you stop
                paying. The smartest approach for most new sites is to start SEO
                early for long-term growth while using small ad budgets for
                immediate validation.
              </p>
            ),
            answerText:
              "Both have their place. SEO takes longer but builds a compounding asset. Paid ads give immediate traffic but stop when you stop paying. The smartest approach for most new sites is to start SEO early for long-term growth while using small ad budgets for immediate validation.",
          },
        ]}
      />
    </>
  );
}
