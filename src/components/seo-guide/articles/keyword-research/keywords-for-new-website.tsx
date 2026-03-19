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

export default function KeywordsForNewWebsite() {
  return (
    <>
      <ArticleHero
        title="How to Find Keywords for a New Website"
        subtitle="A new website has no authority, no traffic, and no ranking history. That means you cannot target the same keywords established sites go after. You need a different strategy. This guide shows you exactly how to find keywords that a new site can actually rank for."
        readingTime={10}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="New websites need a different keyword strategy">
        <Paragraph>
          The biggest mistake new website owners make is targeting the same
          keywords they see competitors ranking for. Those keywords are
          competitive precisely because established sites have been building
          authority around them for years.
        </Paragraph>
        <Paragraph>
          A new site needs keywords that match its current ability to compete.
          That means low competition, clear intent, and topics where the
          existing results are weak enough to beat. This{" "}
          <a
            href="/seo-guide/keyword-research"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword research
          </a>{" "}
          article gives you a step-by-step process for finding those
          opportunities.
        </Paragraph>

        {/* Visual: New Site Keyword Reality */}
        <DataCard
          items={[
            {
              label: "What new sites target",
              value: "High volume keywords",
              note: "Too competitive, no rankings for months",
            },
            {
              label: "What new sites should target",
              value: "Low competition long tail",
              note: "Realistic to rank, traffic in weeks",
            },
            {
              label: "The difference",
              value: "Strategy over ambition",
              note: "Smart targeting beats wishful thinking",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why new sites need different keywords */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-different" title="Why new websites cannot target competitive keywords">
        <Paragraph>
          Google evaluates hundreds of signals when deciding what to rank.
          Many of those signals are things new sites simply do not have yet.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Zero domain authority",
              text: "Authority is built through backlinks, content history, and user engagement. A new domain has none of these. Google has no reason to trust your content over sites that have been proving their value for years.",
            },
            {
              title: "No crawl history",
              text: "Google crawls established sites frequently because they have a track record of publishing quality content. New sites get crawled less often, meaning new content takes longer to get indexed and evaluated.",
            },
            {
              title: "No topical authority",
              text: "Google rewards sites that demonstrate deep expertise in a specific area. A new site with 5 pages cannot compete with a site that has 200 pages on the same topic. You need to build a content base first.",
            },
            {
              title: "Competitive SERPs are locked",
              text: "The first page for competitive keywords is dominated by sites with years of content, thousands of backlinks, and strong brand recognition. Trying to break in as a new site is unrealistic for these terms.",
            },
          ]}
        />
        <Paragraph>
          If your site is{" "}
          <a
            href="/seo-guide/technical-seo/new-website-no-traffic"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            new and not getting traffic
          </a>
          , the keyword strategy in this guide is exactly what you need to
          start building momentum.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to find keywords step by step */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-find" title="How to find keywords for a new website (step by step)">
        <NumberedList
          items={[
            {
              title: "Start with your niche and audience",
              text: "Before opening any tool, write down the specific problems your audience has. What questions do they search for? What frustrations do they have? Your keyword list should start with real problems, not random keyword ideas.",
            },
            {
              title: "Generate seed keywords from those problems",
              text: "Turn each problem into a search query. 'My website is not getting traffic' becomes 'how to get traffic to a new website.' 'I do not know which keywords to target' becomes 'how to find keywords for SEO.' These seed keywords are your starting point.",
            },
            {
              title: "Expand with keyword research tools",
              text: "Use tools like Google Keyword Planner, Ubersuggest, or Ahrefs to expand each seed keyword into related variations. Look for long-tail versions with lower search volume but clearer intent.",
            },
            {
              title: "Filter by difficulty",
              text: "Remove any keyword with a difficulty score your site cannot handle. For a brand new site, focus on keywords with the lowest difficulty scores. Verify by checking the actual search results. If the top results include forums, thin pages, or small sites, the keyword is truly low competition.",
            },
            {
              title: "Verify search intent",
              text: "Search each keyword on Google and look at what currently ranks. Make sure the intent matches the type of content you plan to create. If the results are all product pages and you want to write a guide, that keyword has the wrong intent for your format.",
            },
            {
              title: "Group keywords into topic clusters",
              text: "Organize your keywords into groups around core topics. Each cluster becomes a set of related pages that link to each other. This builds topical authority faster than publishing random, disconnected content.",
            },
            {
              title: "Prioritize by impact and feasibility",
              text: "Rank your keyword clusters by a combination of business relevance, competition level, and search volume. Start with the cluster that has the most low-competition keywords relevant to your business.",
            },
          ]}
        />
        <Paragraph>
          Our guide on{" "}
          <a
            href="/seo-guide/keyword-research/how-to-find-low-competition-keywords"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            finding low-competition keywords
          </a>{" "}
          goes deeper into step 4. And our{" "}
          <a
            href="/seo-guide/keyword-research/keyword-prioritization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword prioritization guide
          </a>{" "}
          covers step 7 in detail.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What to look for in keywords */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-to-look-for" title="What makes a good keyword for a new website">
        <Paragraph>
          Not every low-competition keyword is worth targeting. Here is what
          to look for.
        </Paragraph>

        {/* Visual: Ideal Keyword Traits */}
        <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Ideal Keywords for New Sites
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-2">
                Target these
              </p>
              <ul className="space-y-1.5 text-[13px] text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Long tail (3+ words)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Clear, specific search intent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Weak top results (forums, thin pages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Relevant to your business or niche</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Part of a topic cluster you can build around</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-2">
                Avoid these
              </p>
              <ul className="space-y-1.5 text-[13px] text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Short tail (1-2 words, high competition)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Vague intent (could mean anything)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Top results dominated by major brands</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>No connection to what you sell or offer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Isolated keywords with no cluster potential</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Paragraph>
          Understanding the difference between{" "}
          <a
            href="/seo-guide/keyword-research/short-vs-long-tail-keywords"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            short tail and long tail keywords
          </a>{" "}
          is essential here. For a new site, long tail keywords are not just
          preferable. They are the only realistic option.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Building a content plan */ }
      {/* ------------------------------------------------------------------ */}
      <Section id="content-plan" title="Turning keywords into a content plan">
        <Paragraph>
          Finding keywords is only half the job. You need to turn them into a
          publishing plan that builds authority over time.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Pick 2 to 3 core topic clusters",
              text: "Choose the topics most relevant to your business where you found the best keyword opportunities. Each cluster should have a pillar topic and 5 to 10 supporting keywords.",
            },
            {
              title: "Create one page per keyword",
              text: "Each keyword gets a dedicated, comprehensive page. Focus on one primary keyword per page with supporting variations woven in naturally. Our keywords-per-page guide explains the ideal approach.",
            },
            {
              title: "Publish consistently",
              text: "Aim for 2 to 4 articles per week in the first 3 months. Consistency signals to Google that your site is active and worth crawling frequently. It also builds your content library faster.",
            },
            {
              title: "Interlink everything",
              text: "Every new page should link to and from related pages in the same topic cluster. This builds topical authority and helps Google understand the relationship between your pages.",
            },
            {
              title: "Track and adapt",
              text: "Monitor which pages start getting impressions and early rankings. Double down on topics that show traction. If a cluster is not gaining any visibility after 2 to 3 months, reassess the keyword choices.",
            },
          ]}
        />
        <Paragraph>
          Knowing{" "}
          <a
            href="/seo-guide/keyword-research/keywords-per-page"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            how many keywords to target per page
          </a>{" "}
          and being aware of{" "}
          <a
            href="/seo-guide/keyword-research/keyword-cannibalization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword cannibalization
          </a>{" "}
          ensures your content plan stays clean and effective as it grows.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common keyword mistakes new websites make">
        <NumberedList
          items={[
            {
              title: "Targeting head terms from day one",
              text: "Keywords like 'SEO,' 'marketing,' or 'fitness' are dominated by massive sites. A new site will not rank for these for months or years. Fix: start with long tail variations and work up to competitive terms as your authority grows.",
            },
            {
              title: "Ignoring search intent",
              text: "Choosing a keyword without checking what Google actually shows for it leads to content mismatches. Fix: always search the keyword and match the format and depth of the top results.",
            },
            {
              title: "Spreading content across too many topics",
              text: "Publishing one article in 10 different categories builds zero topical authority. Fix: focus on 2 to 3 core topics and create deep content clusters around each one before expanding.",
            },
            {
              title: "Not verifying competition in the actual SERPs",
              text: "Relying solely on tool-generated difficulty scores without checking the real search results. Fix: search the keyword, look at who ranks, and assess whether you can create something better.",
            },
            {
              title: "Choosing keywords with no business connection",
              text: "Ranking for traffic that has nothing to do with your product or service is wasted effort. Fix: every keyword should connect to a problem your audience has or a solution you offer.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* New site keyword checklist */}
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="New website keyword checklist">
        <div className="mt-2 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Before You Start Writing
          </p>
          <div className="space-y-2.5">
            {[
              "Identified 20-30 low-competition long tail keywords",
              "Verified that search intent matches your content format",
              "Checked actual SERPs (not just difficulty scores) for each keyword",
              "Grouped keywords into 2-3 focused topic clusters",
              "Confirmed each keyword connects to your business or audience",
              "Planned internal links between all pages in each cluster",
              "Set a consistent publishing schedule (2-4 articles per week)",
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
      <Section id="rankseo" title="How RankSEO helps new websites find keywords">
        <Paragraph>
          Finding the right keywords for a new site takes research, filtering,
          and validation. RankSEO streamlines the entire process.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                keyword discovery tools
              </a>{" "}
              automatically surface low-competition keywords in your niche
              that new sites can realistically rank for
            </span>,
            "Filters keywords by true difficulty based on SERP analysis, not just tool scores",
            "Groups keywords into topic clusters so you can plan content strategically",
            "Identifies the weakest competitors in each SERP so you know where to focus",
            "Tracks your ranking progress as your new site builds authority",
          ]}
        />
        <Paragraph>
          Give your new website the best chance to rank from the start.
          Explore{" "}
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
          to find keywords that match your site&apos;s ability to compete.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="Start where you can win. Grow from there.">
        <Paragraph>
          A new website does not need thousands of keywords. It needs the
          right 20 to 30 keywords that match its current authority, serve its
          audience, and build toward bigger targets. Find those first, create
          great content around them, and the growth compounds from there.
        </Paragraph>
        <Paragraph>
          The rest of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers everything else you need to turn those keywords into rankings
          and traffic.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "How do I find keywords for a brand new website?",
            answer: (
              <p>
                Start by identifying your audience&apos;s problems and turning
                them into search queries. Use keyword tools to expand those
                into long-tail variations. Filter by low competition, verify
                intent by checking the actual SERPs, and group keywords into
                topic clusters for focused content creation.
              </p>
            ),
            answerText:
              "Start by identifying your audience's problems and turning them into search queries. Use keyword tools to expand those into long-tail variations. Filter by low competition, verify intent by checking the actual SERPs, and group keywords into topic clusters for focused content creation.",
          },
          {
            question: "Should a new website target high volume keywords?",
            answer: (
              <p>
                Not initially. High volume keywords are almost always highly
                competitive. A new site should start with lower volume, long
                tail keywords where the competition is weak. As the site builds
                authority through rankings and backlinks, it can gradually
                target more competitive terms.
              </p>
            ),
            answerText:
              "Not initially. High volume keywords are almost always highly competitive. A new site should start with lower volume, long tail keywords where the competition is weak. As the site builds authority through rankings and backlinks, it can gradually target more competitive terms.",
          },
          {
            question: "How many keywords should a new website target?",
            answer: (
              <p>
                Start with 20 to 30 well-chosen keywords grouped into 2 to 3
                topic clusters. Create one comprehensive page for each keyword.
                This gives you enough content to build topical authority without
                spreading too thin. Expand as you gain traction.
              </p>
            ),
            answerText:
              "Start with 20 to 30 well-chosen keywords grouped into 2 to 3 topic clusters. Create one comprehensive page for each keyword. This gives you enough content to build topical authority without spreading too thin. Expand as you gain traction.",
          },
          {
            question: "How long before a new website starts ranking?",
            answer: (
              <p>
                For low-competition long tail keywords, you can see first-page
                rankings within 2 to 4 months of consistent publishing. More
                competitive terms take 6 to 12 months or longer. The speed
                depends on content quality, publishing consistency, and how well
                you build internal links and earn backlinks.
              </p>
            ),
            answerText:
              "For low-competition long tail keywords, you can see first-page rankings within 2 to 4 months of consistent publishing. More competitive terms take 6 to 12 months or longer. The speed depends on content quality, publishing consistency, and how well you build internal links and earn backlinks.",
          },
          {
            question: "What type of keywords are easiest for new sites to rank for?",
            answer: (
              <p>
                Long tail keywords with 3 or more words, clear intent, and weak
                competition in the search results. Look for keywords where the
                current top results include forums, outdated content, or small
                sites with thin pages. These are the easiest to outrank with
                quality content.
              </p>
            ),
            answerText:
              "Long tail keywords with 3 or more words, clear intent, and weak competition in the search results. Look for keywords where the current top results include forums, outdated content, or small sites with thin pages. These are the easiest to outrank with quality content.",
          },
          {
            question: "Should I use keyword tools or manual research?",
            answer: (
              <p>
                Both. Start with manual brainstorming based on your
                audience&apos;s problems, then use keyword tools to expand and
                validate. Always verify tool data by checking the actual search
                results. Tools give you scale, but manual SERP analysis gives
                you accuracy.
              </p>
            ),
            answerText:
              "Both. Start with manual brainstorming based on your audience's problems, then use keyword tools to expand and validate. Always verify tool data by checking the actual search results. Tools give you scale, but manual SERP analysis gives you accuracy.",
          },
        ]}
      />
    </>
  );
}
