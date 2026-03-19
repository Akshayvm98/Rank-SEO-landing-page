import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function WhyRankingDropped() {
  return (
    <>
      <ArticleHero
        title="Why Your Rankings Dropped Suddenly (And How to Fix It)"
        subtitle="A sudden drop in rankings is alarming, but it is usually traceable to a specific cause. Once you know where to look, you can fix it. This guide walks through every common reason rankings fall and exactly how to recover."
        readingTime={11}
      />

      {/* ------------------------------------------------------------------ */}
      {/* What a ranking drop actually means */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-it-means" title="What a ranking drop actually means">
        <Paragraph>
          Not every ranking change is a problem. Search positions fluctuate
          naturally as Google continuously re-evaluates content across the web.
          A drop of one or two positions for a few days is normal and usually
          corrects itself.
        </Paragraph>
        <Paragraph>
          A real problem is a sustained drop of five or more positions, or a
          loss of first-page rankings that lasts more than a week. That kind of
          movement signals something changed, either on your site, on
          competitors&apos; sites, or in Google&apos;s algorithm.
        </Paragraph>
        <Paragraph>
          The best place to confirm a real drop is the Google Search Console
          performance report. Filter by page and compare the drop period to the
          previous period. This tells you exactly which pages and queries lost
          ground.
        </Paragraph>
        <Paragraph>
          This article is part of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          and falls under the{" "}
          <a
            href="/seo-guide/technical-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            technical SEO
          </a>{" "}
          topic. If your site is not ranking at all, see our guide on{" "}
          <a
            href="/seo-guide/technical-seo/why-my-website-is-not-ranking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why your website is not ranking
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Google algorithm update */}
      {/* ------------------------------------------------------------------ */}
      <Section id="algorithm-update" title="Google algorithm update">
        <Paragraph>
          Google rolls out core updates several times per year. These updates
          re-evaluate content quality, relevance, and authority across the
          entire web. A single core update can reshuffle rankings for thousands
          of keywords overnight.
        </Paragraph>
        <Paragraph>
          <strong>How to identify:</strong> Check whether the timing of your
          drop aligns with a confirmed Google update. The Google Search Status
          Dashboard and major SEO news sites publish update announcements and
          timelines. If the dates match, an algorithm change is the likely
          cause.
        </Paragraph>
        <Paragraph>
          <strong>How to fix:</strong> Do not make panic changes. Review
          Google&apos;s guidance on helpful content. Focus on improving content
          quality, depth, and originality. Strengthen your E-E-A-T signals
          (Experience, Expertise, Authoritativeness, Trustworthiness). Recovery
          from a core update often takes until the next core update rolls out,
          so patience is essential.
        </Paragraph>
        <Callout type="info">
          Not every ranking drop is caused by an algorithm update. Check other
          causes before assuming Google changed the rules.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Your content became outdated */}
      {/* ------------------------------------------------------------------ */}
      <Section id="outdated-content" title="Your content became outdated">
        <Paragraph>
          Content that was once the best result for a keyword can lose ground
          over time. As competitors publish newer, more comprehensive versions,
          your page becomes less competitive even if you did not change
          anything.
        </Paragraph>
        <Paragraph>
          Stats from 2022 in a 2026 article signal staleness to both users and
          Google. Outdated examples, deprecated tools, and old screenshots all
          reduce the perceived value of your content.
        </Paragraph>
        <Paragraph>
          <strong>How to identify:</strong> Check the publish and update dates
          of the pages currently ranking above you. If they are fresher and
          more current, you are falling behind.
        </Paragraph>
        <Paragraph>
          <strong>How to fix:</strong> Update statistics, refresh examples, add
          new sections covering recent developments, and re-publish with the
          current date. For a detailed process, see our guide on{" "}
          <a
            href="/seo-guide/content-seo/how-to-update-old-content"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            how to update old content
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Competitors improved their content */}
      {/* ------------------------------------------------------------------ */}
      <Section id="competitors-improved" title="Competitors improved their content">
        <Paragraph>
          Rankings are relative. Even if you did nothing wrong, competitors
          getting better pushes you down. SEO is not a static achievement. It
          is a continuous competition where the top positions go to whoever
          provides the most value right now.
        </Paragraph>
        <Paragraph>
          <strong>How to identify:</strong> Search your target keyword and
          compare your content to the pages that now rank above you. Are they
          more thorough? Better structured? More recent? Do they cover
          subtopics you missed?
        </Paragraph>
        <Paragraph>
          <strong>How to fix:</strong> Analyze what the new top results do
          better and close the gap. Add missing subtopics, improve your
          structure, update your information, and strengthen your unique angle.
          The goal is not to copy competitors but to offer something
          meaningfully better.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Loss of backlinks */}
      {/* ------------------------------------------------------------------ */}
      <Section id="lost-backlinks" title="Loss of backlinks">
        <Paragraph>
          Backlinks remain one of the strongest ranking signals. If sites that
          linked to you remove those links, your authority drops and rankings
          can follow.
        </Paragraph>
        <Paragraph>
          <strong>How to identify:</strong> Check the Links report in Google
          Search Console or use third-party tools to monitor backlink changes
          over time. Look for a correlation between when links were lost and
          when rankings dropped.
        </Paragraph>
        <Paragraph>
          <strong>How to fix:</strong> Reach out to recover lost links if
          possible. Create new linkable content such as original research,
          data, or tools that naturally attract links. Focus on building
          authority through consistent quality rather than one-time link
          acquisition campaigns.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Technical issues */}
      {/* ------------------------------------------------------------------ */}
      <Section id="technical-issues" title="Technical issues">
        <Paragraph>
          Crawl errors, indexing problems, server downtime, broken redirects,
          and accidental noindex tags can all cause sudden ranking drops. These
          issues prevent Google from accessing or properly evaluating your
          content.
        </Paragraph>
        <Paragraph>
          <strong>How to identify:</strong> Check the coverage report and URL
          Inspection tool in Google Search Console. Look for spikes in errors
          around the same time as the ranking drop. Pay attention to server
          error rates, crawl anomalies, and any new noindex directives.
        </Paragraph>
        <Paragraph>
          <strong>How to fix:</strong> Resolve crawl errors, fix redirect
          chains, remove accidental noindex tags, and ensure your server is
          reliable. For a deeper walkthrough of indexing problems, see our
          guide on{" "}
          <a
            href="/seo-guide/technical-seo/why-pages-are-not-indexed"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why pages are not indexed
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Internal linking changes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="linking-changes" title="Internal linking changes">
        <Paragraph>
          Removing or changing internal links during a redesign or content
          reorganization can break the authority flow to important pages. If a
          page that previously had strong internal links suddenly loses them,
          Google may re-evaluate its importance and drop its rankings.
        </Paragraph>
        <Paragraph>
          <strong>How to identify:</strong> Check whether recent site changes
          affected the internal linking structure. Use the Links report in
          Search Console to see how many internal links currently point to the
          affected pages. If the number dropped recently, that is likely a
          contributing factor.
        </Paragraph>
        <Paragraph>
          <strong>How to fix:</strong> Restore internal links to affected
          pages. Make sure important pages have at least three to five internal
          links pointing to them. For a complete strategy, see our{" "}
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
      {/* Wrong SEO changes made recently */}
      {/* ------------------------------------------------------------------ */}
      <Section id="wrong-changes" title="Wrong SEO changes made recently">
        <Paragraph>
          Changing title tags, removing content, restructuring URLs, or
          modifying redirects can all cause ranking drops. Well-intentioned
          optimizations sometimes backfire when they disrupt signals Google was
          already using to rank your pages.
        </Paragraph>
        <Paragraph>
          <strong>How to identify:</strong> Review recent changes to your site.
          Did you update title tags, change URLs, remove pages, or modify
          robots.txt in the past two to four weeks? Any of these could be the
          cause.
        </Paragraph>
        <Paragraph>
          <strong>How to fix:</strong> Revert harmful changes where possible.
          If you changed URLs, make sure 301 redirects are in place from the
          old URLs to the new ones. If you rewrote title tags that were
          performing well, restore the originals. Going forward, make one
          change at a time so you can isolate the impact of each.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Search intent shifted */}
      {/* ------------------------------------------------------------------ */}
      <Section id="intent-shift" title="Search intent shifted">
        <Paragraph>
          What users want for a keyword can change over time. Google adjusts
          its results accordingly. A keyword that used to surface long-form
          guides might now favor comparison tools, videos, or product pages.
        </Paragraph>
        <Paragraph>
          <strong>How to identify:</strong> Search your target keyword now and
          compare the top results to what was ranking when you were doing well.
          If the format changed (for example, from guides to tools or from
          articles to videos), the dominant intent has shifted.
        </Paragraph>
        <Paragraph>
          <strong>How to fix:</strong> Adapt your content to match the new
          dominant intent. Sometimes this means restructuring your existing
          page. Sometimes it means creating a new page in a different format
          entirely. If intent has shifted, you may also notice high impressions
          with low clicks. Our guide on{" "}
          <a
            href="/seo-guide/on-page-seo/why-impressions-but-no-clicks"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why you get impressions but no clicks
          </a>{" "}
          covers that problem in detail.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to diagnose a ranking drop */}
      {/* ------------------------------------------------------------------ */}
      <Section id="diagnose" title="How to diagnose a ranking drop">
        <Paragraph>
          When rankings drop, a systematic approach saves time and prevents
          compounding mistakes. Work through these steps in order.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Check Google Search Console performance",
              text: "Compare the drop period to the previous period. Identify which pages and queries lost traffic. This narrows the scope of the investigation.",
            },
            {
              title: "Check for algorithm updates",
              text: "Look at the Google Search Status Dashboard and SEO news sites for confirmed updates around the drop date. If the timing aligns, an algorithm change is likely involved.",
            },
            {
              title: "Review recent site changes",
              text: "List any changes to content, URLs, internal links, or technical configuration in the past month. Even small changes can have outsized effects on rankings.",
            },
            {
              title: "Audit technical health",
              text: "Check for crawl errors, indexing issues, and server problems in Search Console. Technical issues are often the fastest to identify and fix.",
            },
            {
              title: "Analyze competitor changes",
              text: "Search your top keywords and see if new or improved competitors have taken your positions. If the top results changed significantly, the competition moved.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to recover your rankings */}
      {/* ------------------------------------------------------------------ */}
      <Section id="recover" title="How to recover your rankings">
        <Paragraph>
          Recovery follows a specific order. Fix the foundation first, then
          improve content, then rebuild authority.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Fix technical issues first",
              text: "Resolve any crawl errors, indexing blocks, or server problems before touching content. A technically broken site cannot rank well regardless of content quality.",
            },
            {
              title: "Update and improve affected content",
              text: "Refresh outdated information, add missing subtopics, and improve depth and structure. Focus on the specific pages that lost rankings rather than making sitewide changes.",
            },
            {
              title: "Restore broken internal links",
              text: "Make sure affected pages are well-connected to the rest of your site. Rebuild any internal links that were removed or broken during recent changes.",
            },
            {
              title: "Rebuild lost authority",
              text: "If backlinks were lost, focus on creating content that naturally earns links. Original research, comprehensive guides, and useful tools tend to attract links organically.",
            },
            {
              title: "Monitor and wait",
              text: "After making fixes, give Google two to six weeks to re-evaluate. Do not make additional changes during this period. Stacking changes makes it impossible to know what worked.",
            },
          ]}
        />
        <Callout type="tip">
          Do not make panic changes. Identify the specific cause first, make
          targeted fixes, and give Google time to respond. Rushing leads to
          compounding mistakes.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps you catch and fix ranking drops">
        <Paragraph>
          Catching ranking drops early is the difference between a minor dip
          and a major traffic loss. Manual monitoring is slow and easy to miss.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                ranking monitoring features
              </a>{" "}
              detect drops early and pinpoint the exact pages and keywords
              affected, so you can act before traffic loss compounds.
            </span>,
            "Alerts you to ranking changes before they show up as traffic drops",
            "Identifies technical issues and content gaps that cause rankings to slip",
            "Tracks competitor movements so you know when someone overtakes you",
          ]}
        />
        <Paragraph>
          If you want to stop guessing and start diagnosing ranking drops with
          real data, explore{" "}
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
            question: "Why did my rankings drop overnight?",
            answer: (
              <p>
                Overnight drops are usually caused by a Google algorithm update,
                a technical issue on your site (like an accidental noindex tag
                or server error), or a major change you made to the page. Check
                Search Console for errors and look for confirmed algorithm
                updates around the same date.
              </p>
            ),
            answerText:
              "Overnight drops are usually caused by a Google algorithm update, a technical issue on your site (like an accidental noindex tag or server error), or a major change you made to the page. Check Search Console for errors and look for confirmed algorithm updates around the same date.",
          },
          {
            question: "How long does it take to recover lost rankings?",
            answer: (
              <p>
                It depends on the cause. Technical fixes can restore rankings in
                one to two weeks. Content improvements typically take two to six
                weeks. Recovery from algorithm updates can take months and may
                require waiting for the next core update.
              </p>
            ),
            answerText:
              "It depends on the cause. Technical fixes can restore rankings in one to two weeks. Content improvements typically take two to six weeks. Recovery from algorithm updates can take months and may require waiting for the next core update.",
          },
          {
            question: "Can Google algorithm updates affect my site?",
            answer: (
              <p>
                Yes. Core updates can significantly reshuffle rankings across
                entire industries. If your content is thin, outdated, or not
                matching user intent, an update is more likely to hurt you.
                Sites with high-quality, helpful content tend to recover or
                improve.
              </p>
            ),
            answerText:
              "Yes. Core updates can significantly reshuffle rankings across entire industries. If your content is thin, outdated, or not matching user intent, an update is more likely to hurt you. Sites with high-quality, helpful content tend to recover or improve.",
          },
          {
            question: "How do I check what caused a ranking drop?",
            answer: (
              <p>
                Start with Google Search Console. Compare performance data
                between the drop period and the previous period. Check for crawl
                errors, indexing issues, and manual actions. Then look at
                whether an algorithm update was confirmed around the same date.
                Finally, review any recent changes you made to the site.
              </p>
            ),
            answerText:
              "Start with Google Search Console. Compare performance data between the drop period and the previous period. Check for crawl errors, indexing issues, and manual actions. Then look at whether an algorithm update was confirmed around the same date. Finally, review any recent changes you made to the site.",
          },
          {
            question: "Can I recover lost traffic after a ranking drop?",
            answer: (
              <p>
                In most cases, yes. The key is identifying the specific cause
                and making targeted fixes. Technical issues are the fastest to
                recover from. Content quality issues take longer. The worst
                approach is to make random changes without diagnosing the actual
                problem first.
              </p>
            ),
            answerText:
              "In most cases, yes. The key is identifying the specific cause and making targeted fixes. Technical issues are the fastest to recover from. Content quality issues take longer. The worst approach is to make random changes without diagnosing the actual problem first.",
          },
          {
            question: "Should I wait or take action after a ranking drop?",
            answer: (
              <p>
                Take action, but strategically. First diagnose the cause. If it
                is a technical issue, fix it immediately. If it is related to an
                algorithm update, analyze what changed in the top results and
                improve your content accordingly. Avoid making panic changes
                without understanding the root cause.
              </p>
            ),
            answerText:
              "Take action, but strategically. First diagnose the cause. If it is a technical issue, fix it immediately. If it is related to an algorithm update, analyze what changed in the top results and improve your content accordingly. Avoid making panic changes without understanding the root cause.",
          },
        ]}
      />
    </>
  );
}
