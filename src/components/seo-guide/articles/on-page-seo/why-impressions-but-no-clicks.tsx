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

export default function WhyImpressionButNoClicks() {
  return (
    <>
      <ArticleHero
        title="Why Impressions but No Clicks (And How to Fix It)"
        subtitle="Your pages are showing up in Google but nobody is clicking. This is frustrating, but it is also a sign that you are closer to results than you think. The visibility is there. The problem is how your pages appear in search results, and that is fixable."
        readingTime={10}
      />

      {/* ------------------------------------------------------------------ */}
      {/* What it means */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-it-means" title="What impressions but no clicks actually means">
        <Paragraph>
          An impression is counted every time your page appears in someone's
          search results. They do not need to scroll to it or even notice it. If
          Google showed your URL for a query, that counts as an impression.
        </Paragraph>
        <Paragraph>
          A click is counted when someone actually taps on your result and visits
          your page.
        </Paragraph>
        <Paragraph>
          The ratio between these two numbers is your click-through rate, or CTR.
          If your page gets 1,000 impressions and 20 clicks, your CTR is 2%.
        </Paragraph>
        <DataCard
          items={[
            { label: "Position 1", value: "~27%", note: "Average CTR" },
            { label: "Position 5", value: "~5%", note: "Average CTR" },
            { label: "Position 10", value: "~2%", note: "Average CTR" },
          ]}
        />
        <Paragraph>
          High impressions with low clicks means one of two things: either your
          page is showing up for the right queries but not compelling people to
          click, or it is showing up in positions where very few people look.
          Both situations are fixable once you identify the specific cause.
        </Paragraph>
        <Paragraph>
          Understanding this problem is part of effective{" "}
          <a
            href="/seo-guide/on-page-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            on-page SEO
          </a>
          . Your content might be great, but if the way it appears in search
          results is not compelling, you are leaving traffic on the table. For a
          broader perspective on where this fits into your strategy, see the
          complete{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 1: Weak title tags */}
      {/* ------------------------------------------------------------------ */}
      <Section id="weak-titles" title="Your title tag is not compelling">
        <Paragraph>
          The title tag is the first thing people see in search results. It is
          your headline, your hook, your one chance to earn the click. If it is
          vague, generic, or boring, people will scroll right past it.
        </Paragraph>
        <Paragraph>
          Titles like "SEO Tips" or "Marketing Guide" say nothing specific. They
          do not promise value, create curiosity, or give the searcher a reason
          to choose your result over the others on the page.
        </Paragraph>
        <Paragraph>
          <strong>How to identify it:</strong> Look at your title tags for pages
          with high impressions and low CTR in Search Console. Read them as if
          you were the searcher. Would you click? Be honest.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Put your keyword near the front of the title",
            "Add a benefit or outcome. Tell the reader what they will get",
            "Use numbers when appropriate. '7 Steps' beats 'Steps'",
            "Keep it under 60 characters so it does not get truncated",
            "Test brackets or parentheses for extra context: '(With Examples)' or '[2026 Guide]'",
          ]}
        />
        {/* Visual: Before vs After Title */}
        <div className="mt-4 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                Before
              </p>
              <p className="text-[13px] text-muted">&quot;Content Marketing Tips&quot;</p>
            </div>
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                After
              </p>
              <p className="text-[13px] font-medium text-foreground">
                &quot;9 Content Marketing Tips That Actually Drive Traffic&quot;
              </p>
            </div>
          </div>
        </div>
        <Paragraph>
          For a deeper look at writing titles that perform, see our{" "}
          <a
            href="/seo-guide/on-page-seo/title-tags"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            title tags guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 2: Weak meta descriptions */}
      {/* ------------------------------------------------------------------ */}
      <Section id="weak-meta" title="Your meta description is weak or missing">
        <Paragraph>
          The meta description is the two lines of text below your title in
          search results. If you leave it blank, Google generates one by pulling
          a random snippet from your page. That auto-generated description is
          rarely compelling.
        </Paragraph>
        <Paragraph>
          Even when you write one, a generic line like "Learn about SEO in this
          article" does nothing to differentiate your result from the ten others
          on the page.
        </Paragraph>
        <Paragraph>
          <strong>How to identify it:</strong> Check your page source or CMS for
          the meta description. If it is empty, duplicated across pages, or
          reads like filler, it is hurting your CTR.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Write a specific description for every important page",
            "Keep it between 140 and 155 characters",
            "Include your primary keyword naturally",
            "Focus on what the reader will learn or gain",
            "End with a subtle hook like 'Includes examples' or 'Step-by-step process'",
          ]}
        />
        <Callout type="tip">
          Think of the meta description as a mini ad for your page. It does not
          directly affect rankings, but it directly affects whether people click.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 3: Ranking too low */}
      {/* ------------------------------------------------------------------ */}
      <Section id="ranking-too-low" title="You are ranking too low on the page">
        <Paragraph>
          Position matters more than most people realize. The top 3 results on
          Google capture roughly 55% of all clicks. By position 7 or 8, CTR
          drops below 3%. If your page sits at position 10 or beyond, most
          searchers never see it.
        </Paragraph>
        <Paragraph>
          If you are getting impressions at position 12 or 15, that means your
          page appeared on page two. Almost nobody goes to page two.
        </Paragraph>
        <Paragraph>
          <strong>How to identify it:</strong> In Search Console, filter by pages
          with high impressions and check the average position. If it is above 7
          or 8, low CTR is expected regardless of how good your title is.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Focus on improving your ranking rather than your snippet. At position 15, even a perfect title will not get clicks",
            "Strengthen the content by covering the topic more thoroughly",
            "Build internal links from your stronger pages to push authority to the underperforming one",
            "Consider targeting less competitive keywords where you can realistically reach the top 5",
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
          is one of the fastest ways to move from page two to the top 5, where
          CTR improvements actually matter.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 4: Intent mismatch */}
      {/* ------------------------------------------------------------------ */}
      <Section id="intent-mismatch" title="Search intent mismatch">
        <Paragraph>
          Your page might rank for a keyword, but if your title and description
          signal a different type of content than what the searcher wants, they
          will skip you every time.
        </Paragraph>
        <Paragraph>
          For example, if someone searches "best CRM software" and your title
          says "What Is CRM? A Complete Guide," they are not going to click.
          They want a comparison, not a definition.
        </Paragraph>
        <Paragraph>
          <strong>How to identify it:</strong> Search your target keyword and
          look at the top 3 to 5 results. What format are they? Listicles?
          How-to guides? Product comparisons? If your page is a different format,
          you have an intent mismatch.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Study the search results for your keyword before writing or optimizing",
            "Match the format and depth of the top-ranking content",
            "Adjust your title to clearly signal that your page delivers what the searcher expects",
            "Restructure your content if needed to match the dominant format",
          ]}
        />
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/keyword-research/search-intent"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            search intent guide
          </a>{" "}
          breaks down the different types of intent and how to match your content
          to each one.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 5: Does not stand out */}
      {/* ------------------------------------------------------------------ */}
      <Section id="not-standing-out" title="Your content does not stand out in SERPs">
        <Paragraph>
          Even if your title is decent, the search results page is crowded.
          Featured snippets, "People Also Ask" boxes, video carousels, ads, and
          rich results all push organic listings down and compete for attention.
        </Paragraph>
        <Paragraph>
          If the results around you have star ratings, FAQ dropdowns, images, or
          other rich features, a plain blue link can easily get ignored.
        </Paragraph>
        <Paragraph>
          <strong>How to identify it:</strong> Search your keyword and look at
          what the results page actually looks like. Count how many organic
          results are visible above the fold. If your listing is buried below
          rich features, that explains the low clicks.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Add structured data (FAQ schema, how-to schema, review schema) to make your listing more visually prominent",
            "Target featured snippets by answering questions directly and concisely",
            "Use clear, benefit-driven titles that stand out even among rich results",
            "Optimize for 'People Also Ask' by including question-based headings in your content",
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 6: Strong competition */}
      {/* ------------------------------------------------------------------ */}
      <Section id="strong-competition" title="Strong competition around you">
        <Paragraph>
          Sometimes your CTR is low because the pages around you are simply more
          recognizable. If you are ranking alongside major brands, authoritative
          publications, or well-known industry sites, searchers may default to
          the names they trust.
        </Paragraph>
        <Paragraph>
          This is not a reflection of your content quality. It is a trust signal
          issue that takes time to overcome.
        </Paragraph>
        <Paragraph>
          <strong>How to identify it:</strong> Search your keyword and look at
          who occupies the other positions. If you are surrounded by Forbes,
          HubSpot, or similar brands, you are competing for trust as much as
          relevance.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Differentiate your title with specificity. Big brands often use generic titles. You can win with precision",
            "Add the current year to your title when relevant. '2026' signals freshness",
            "Focus on long-tail keywords where brand dominance is weaker",
            "Build your site's reputation over time with consistent, high-quality content",
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Reason 7: Wrong keywords */}
      {/* ------------------------------------------------------------------ */}
      <Section id="wrong-keywords" title="Wrong keyword targeting">
        <Paragraph>
          If you are ranking for keywords that are loosely related to your
          content but not what your page is actually about, impressions will pile
          up without clicks. Google might show your page for broad or tangential
          queries where it is technically relevant but not what the searcher
          needs.
        </Paragraph>
        <Paragraph>
          <strong>How to identify it:</strong> In Search Console, look at the
          specific queries driving impressions for the page. If most of those
          queries do not match the page's main topic, you have a targeting
          problem.
        </Paragraph>
        <Paragraph>
          <strong>How to fix it:</strong>
        </Paragraph>
        <BulletList
          items={[
            "Revisit your keyword strategy and make sure the page targets a specific, well-defined keyword",
            "Tighten your content focus so Google associates the page with the right queries",
            "Update your title tag and H1 to clearly reflect the primary keyword",
            "Consider creating separate pages for the tangential queries if they have enough volume",
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to improve CTR */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-improve" title="How to improve your click-through rate">
        <Paragraph>
          Once you have identified the cause, here is how to systematically
          improve CTR across your pages.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Rewrite your title tags",
              text: "This is the highest-impact change you can make. Lead with the keyword or benefit. Use numbers when the content supports it. Add brackets for context like '(With Examples)' or '[Step-by-Step]'. A better title can double your CTR without moving up a single position.",
            },
            {
              title: "Improve your meta descriptions",
              text: "Write every meta description as if it were ad copy. State the problem or question the page answers. Mention what makes your content different. Include the keyword once, naturally. Avoid generic phrases like 'Learn more about' or 'Read our guide on.'",
            },
            {
              title: "Match search intent precisely",
              text: "If your page format does not match what Google is rewarding, your CTR will suffer. Before optimizing any page, search the keyword and study the results. If every top result is a listicle and yours is a long essay, restructure.",
            },
            {
              title: "Target better keywords",
              text: "Sometimes the fix is not optimizing the page but choosing a better keyword. If you are stuck at position 14 for a broad term, a more specific variation where you can rank in the top 5 will deliver more actual traffic.",
            },
            {
              title: "Optimize for featured snippets",
              text: "Winning the featured snippet puts your content above all other organic results. Answer the target question directly in 40 to 60 words. Use clear heading structure and format with lists or tables depending on what Google currently shows.",
            },
            {
              title: "Add structured data",
              text: "FAQ schema, how-to schema, and review stars make your result take up more visual space in search results. More real estate in the SERPs means more attention and more clicks.",
            },
            {
              title: "Test and iterate",
              text: "Check CTR in Search Console monthly. Test title variations on your highest-impression pages first. Note the date of every change so you can measure results after 2 to 4 weeks.",
            },
          ]}
        />
        <Paragraph>
          For a full walkthrough on improving existing content, our{" "}
          <a
            href="/seo-guide/content-seo/content-optimization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content optimization guide
          </a>{" "}
          covers the step-by-step process.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* CTR Checklist */}
      {/* ------------------------------------------------------------------ */}
      <Section id="ctr-checklist" title="Quick CTR improvement checklist">
        <Paragraph>
          Use this checklist to audit your highest-impression pages.
        </Paragraph>
        <BulletList
          items={[
            "Title tag is specific, benefit-driven, and under 60 characters",
            "Meta description is written, compelling, and under 155 characters",
            "Page format matches the dominant search intent for the keyword",
            "Average position is in the top 5 (if not, focus on ranking first)",
            "No rich results or featured snippets pushing your listing off-screen",
            "Title stands out from competitors with specificity or freshness signals",
            "Structured data is added where the page supports FAQ, how-to, or reviews",
            "Changes are tracked with dates so you can measure impact in 2 to 4 weeks",
          ]}
        />
        <Callout type="tip">
          Start with pages that have 1,000 or more monthly impressions. That is
          where small CTR improvements translate into meaningful traffic gains.
          A page going from 2% to 5% CTR on 10,000 impressions means 300 extra
          clicks per month with zero additional content.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps you turn impressions into clicks">
        {/* Visual: CTR Improvement Checklist */}
        <div className="mb-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            CTR Improvement Checklist
          </p>
          <div className="space-y-2.5">
            {[
              "Identify pages with high impressions but low CTR in Search Console",
              "Rewrite title tags to be specific, compelling, and under 60 characters",
              "Improve meta descriptions to clearly promise value",
              "Check that your URL matches the search intent",
              "Compare your titles against competitors on page one",
              "Monitor CTR changes weekly after making improvements",
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
        <Paragraph>
          Manually auditing every page in Search Console, comparing titles
          against competitors, and tracking CTR changes over time is tedious
          work. It is the kind of task that gets pushed to "someday" and never
          actually happens.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                CTR optimization features
              </a>{" "}
              identify your pages with high impressions and low CTR, surface the
              specific issues, and suggest improvements to titles, descriptions,
              and content structure.
            </span>,
            "Flags pages with below-average CTR for their ranking position",
            "Suggests title tag variations based on what works in your niche",
            "Tracks CTR changes over time so you can measure what works and what does not",
            "Prioritizes opportunities by potential traffic impact so you fix the biggest wins first",
          ]}
        />
        <Paragraph>
          If you are sitting on thousands of impressions that are not converting
          to clicks, explore{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            RankSEO&apos;s features
          </a>{" "}
          to see what is fixable today. Or check our{" "}
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
            question: "What is a good CTR in SEO?",
            answer: (
              <p>
                It depends on your ranking position. Position 1 averages around
                27% CTR, position 3 around 10%, and position 10 around 2%. If
                your CTR is significantly below the average for your position,
                there is room to improve. A page at position 5 with 1% CTR is
                clearly underperforming.
              </p>
            ),
            answerText:
              "It depends on your ranking position. Position 1 averages around 27% CTR, position 3 around 10%, and position 10 around 2%. If your CTR is significantly below the average for your position, there is room to improve.",
          },
          {
            question: "Why do I get impressions but no clicks?",
            answer: (
              <p>
                The most common reasons are a weak title tag that does not
                attract attention, a missing or generic meta description, ranking
                too low on the page for anyone to notice, or a mismatch between
                your content and what the searcher is looking for. All of these
                are fixable with targeted optimizations.
              </p>
            ),
            answerText:
              "The most common reasons are a weak title tag, a missing or generic meta description, ranking too low on the page, or a mismatch between your content and what the searcher is looking for. All of these are fixable.",
          },
          {
            question: "Does ranking position affect CTR?",
            answer: (
              <p>
                Yes, significantly. The top result gets roughly 27% of clicks,
                while position 10 gets about 2%. Each position you move up can
                increase CTR by 2 to 5 percentage points. If you are below
                position 5, improving your ranking should be the priority over
                optimizing your snippet.
              </p>
            ),
            answerText:
              "Yes, significantly. The top result gets roughly 27% of clicks, while position 10 gets about 2%. Each position you move up can increase CTR by 2 to 5 percentage points.",
          },
          {
            question: "How can I increase my CTR on Google?",
            answer: (
              <p>
                Start by rewriting title tags on your highest-impression pages.
                Make them specific, benefit-driven, and under 60 characters.
                Write compelling meta descriptions. Match search intent by
                studying what format the top results use. Add structured data
                where appropriate. Then track changes over 2 to 4 weeks to
                measure impact.
              </p>
            ),
            answerText:
              "Start by rewriting title tags on your highest-impression pages. Make them specific and benefit-driven. Write compelling meta descriptions. Match search intent. Add structured data. Then track changes over 2 to 4 weeks.",
          },
          {
            question: "Should I change my title tags often?",
            answer: (
              <p>
                Not constantly, but you should test changes on underperforming
                pages. When you update a title, note the date and monitor CTR in
                Search Console for 2 to 4 weeks. If CTR improves, keep it. If
                not, try another variation. Avoid changing titles on pages that
                are already performing well.
              </p>
            ),
            answerText:
              "Not constantly, but test changes on underperforming pages. Note the date of changes and monitor CTR for 2 to 4 weeks. If it improves, keep it. If not, try another variation. Avoid changing titles on pages already performing well.",
          },
          {
            question: "Can a better meta description improve my clicks?",
            answer: (
              <p>
                Yes. While meta descriptions do not directly affect rankings,
                they directly affect whether someone clicks on your result. A
                well-written description that clearly states what the page offers
                can measurably increase CTR, especially for pages in positions 3
                to 7 where multiple results compete for attention.
              </p>
            ),
            answerText:
              "Yes. Meta descriptions do not directly affect rankings, but they directly affect clicks. A well-written description that clearly states what the page offers can measurably increase CTR, especially in positions 3 to 7.",
          },
        ]}
      />
    </>
  );
}
