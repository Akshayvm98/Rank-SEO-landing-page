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

export default function KeywordsPerPage() {
  return (
    <>
      <ArticleHero
        title="How Many Keywords Should a Page Target?"
        subtitle="You have probably seen conflicting advice. Some people say one keyword per page. Others say you can rank for hundreds. The truth is simpler than either extreme, and once you understand how Google actually works, the answer becomes obvious."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="The keyword targeting question, simplified">
        <Paragraph>
          If you have ever sat down to write a page and wondered how many
          keywords to target, you are not alone. It is one of the most common
          SEO questions, and it gets a confusing range of answers.
        </Paragraph>
        <Paragraph>
          Some guides say you should only focus on one keyword. Others tell you
          to stuff as many as possible into the page. Neither approach is quite
          right, and both can lead to content that underperforms.
        </Paragraph>
        <Paragraph>
          The real answer has nothing to do with hitting a specific number. It
          has everything to do with understanding how Google interprets topics.
          This{" "}
          <a
            href="/seo-guide/keyword-research"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword research
          </a>{" "}
          article breaks it down clearly so you can stop guessing and start
          targeting keywords the right way.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why this confuses people */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-confusing" title="Why this question confuses most people">
        <Paragraph>
          The confusion comes from how SEO used to work compared to how it
          works now. And most advice online still mixes the two.
        </Paragraph>
        <Paragraph>
          <strong>Old SEO was keyword-centric.</strong> A decade ago, you would
          create one page for &quot;best running shoes,&quot; another for
          &quot;top running shoes,&quot; and another for &quot;best shoes for
          running.&quot; Each page targeted one exact keyword. It worked because
          Google was not smart enough to understand that all three meant the
          same thing.
        </Paragraph>
        <Paragraph>
          <strong>Modern SEO is topic-centric.</strong> Google now understands
          meaning, not just exact words. It groups related searches together
          and expects a single well-written page to cover an entire topic. If
          you still create separate pages for every keyword variation, you end
          up competing against yourself.
        </Paragraph>
        <Paragraph>
          The other source of confusion is the word &quot;targeting.&quot; When
          people say &quot;target a keyword,&quot; they often mean &quot;mention
          it in the title and repeat it throughout the page.&quot; But that is
          not how targeting works anymore. Targeting a keyword means creating
          content that fully satisfies the{" "}
          <a
            href="/seo-guide/keyword-research/search-intent"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            search intent
          </a>{" "}
          behind it.
        </Paragraph>
        <Callout type="info">
          Google does not rank pages based on how many times a keyword appears.
          It ranks pages based on how well they answer the question behind the
          search.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Core explanation */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-many-keywords" title="How many keywords should a page target?">
        <Paragraph>
          The straightforward answer: one primary keyword, supported by a
          handful of closely related variations and semantic terms. But the
          better way to think about it is this: you are not targeting multiple
          keywords. You are targeting a topic.
        </Paragraph>

        <DataCard
          items={[
            {
              label: "Primary keyword",
              value: "1 per page",
              note: "The main term your page is built around",
            },
            {
              label: "Supporting keywords",
              value: "3-8 variations",
              note: "Close synonyms and long-tail versions",
            },
            {
              label: "Semantic keywords",
              value: "Natural inclusion",
              note: "Related terms Google expects to see",
            },
          ]}
        />

        <Paragraph>
          <strong>Your primary keyword</strong> is the single term that best
          describes what the page is about. It goes in your title tag, your H1,
          your URL, and your meta description. This is the anchor of the page.
        </Paragraph>
        <Paragraph>
          <strong>Supporting keywords</strong> are close variations of your
          primary keyword. If your primary keyword is &quot;how to find easy
          keywords,&quot; supporting keywords might include &quot;find easy SEO
          keywords,&quot; &quot;easy keywords to rank for,&quot; or &quot;simple
          keywords for beginners.&quot; These share the same intent and can be
          woven into subheadings and body text naturally.
        </Paragraph>
        <Paragraph>
          <strong>Semantic keywords</strong> are terms that are conceptually
          related to your topic. For a page about keyword targeting, semantic
          keywords might include &quot;search volume,&quot; &quot;keyword
          density,&quot; &quot;topic clusters,&quot; and &quot;content
          optimization.&quot; Google uses these to understand the depth and
          relevance of your content. Learn more about how these work in our{" "}
          <a
            href="/seo-guide/keyword-research/semantic-keywords"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            semantic keywords guide
          </a>
          .
        </Paragraph>
        <Paragraph>
          The key insight is that all three layers serve the same topic. You are
          not scattering unrelated keywords across a page. You are building a
          comprehensive answer to one question from multiple angles.
        </Paragraph>
        <Callout type="tip">
          Think of it this way: your primary keyword is the question. Your
          supporting and semantic keywords are the vocabulary you naturally use
          when giving a thorough answer.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Topic cluster visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="topic-based-seo" title="Why topics beat keyword counts">
        {/* Visual: Old vs Modern Approach */}
        <div className="mt-2 mb-4 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-muted-light mb-3">
            Old SEO vs Modern SEO
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                Old Approach
              </p>
              <p className="text-[13px] text-muted">
                One page per exact keyword. Separate pages for &quot;best running shoes&quot; and &quot;top running shoes.&quot;
              </p>
            </div>
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                Modern Approach
              </p>
              <p className="text-[13px] font-medium text-foreground">
                One comprehensive page per topic. Covers all variations naturally and ranks for hundreds of related queries.
              </p>
            </div>
          </div>
        </div>
        <Paragraph>
          Google has evolved from matching keywords to understanding topics. A
          single well-structured page can rank for dozens or even hundreds of
          keyword variations if it covers the topic thoroughly.
        </Paragraph>

        <DataCard
          items={[
            {
              label: "Average page",
              value: "100+ keywords",
              note: "Pages ranking #1 rank for hundreds of related terms",
            },
            {
              label: "Explicitly targeted",
              value: "1 primary",
              note: "Only one keyword is deliberately optimized for",
            },
            {
              label: "Natural result",
              value: "Topic coverage",
              note: "Thorough content attracts related rankings",
            },
          ]}
        />

        <Paragraph>
          Research consistently shows that pages ranking in the top 3 for a
          competitive keyword also rank for hundreds of related searches. That
          does not happen because those pages targeted hundreds of keywords. It
          happens because they covered the topic so well that Google recognized
          them as relevant for many related queries.
        </Paragraph>
        <Paragraph>
          This is why obsessing over a specific number of keywords is the wrong
          approach. Focus on being the best answer for a topic, and the
          keyword rankings follow. Our{" "}
          <a
            href="/seo-guide/keyword-research/keyword-clustering"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword clustering guide
          </a>{" "}
          shows how to group keywords into topics that map to individual pages.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* When to target multiple */}
      {/* ------------------------------------------------------------------ */}
      <Section id="when-multiple-keywords" title="When to target multiple keywords on one page">
        <Paragraph>
          There are real situations where a single page should deliberately
          cover multiple keyword phrases. The rule is simple: if the keywords
          share the same intent, they belong on the same page.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Closely related keywords with the same intent",
              text: "Keywords like 'how to find easy keywords' and 'find simple keywords to rank for' mean the same thing. Google shows similar results for both. One page should cover them all.",
            },
            {
              title: "Long-tail variations of a head term",
              text: "If your primary keyword is 'keyword research,' long-tail variations like 'keyword research for beginners' or 'how to do keyword research for free' can often be addressed within the same page as subheadings or sections.",
            },
            {
              title: "Question-based keywords around the same topic",
              text: "Searches like 'how many keywords per page,' 'how many keywords should I target,' and 'number of keywords per blog post' are all asking the same question. One thorough page is the right approach.",
            },
            {
              title: "Synonyms and regional variations",
              text: "Terms like 'keyword targeting' and 'keyword optimization' often overlap enough that a single page covers both. Google understands these are closely related.",
            },
          ]}
        />
        <Paragraph>
          <strong>When NOT to combine keywords:</strong>
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Different search intent.</strong> &quot;What is keyword
              research&quot; (informational) and &quot;keyword research
              tool&quot; (commercial) need separate pages because users want
              completely different things.
            </span>,
            <span key="2">
              <strong>Different topics.</strong> &quot;Keyword research&quot; and
              &quot;link building&quot; are separate topics and need their own
              dedicated pages, even if both fall under SEO.
            </span>,
            <span key="3">
              <strong>Different stages of the funnel.</strong> A beginner
              searching &quot;what is SEO&quot; needs a different page than
              someone searching &quot;SEO audit checklist.&quot; Combining them
              dilutes both.
            </span>,
          ]}
        />
        <Callout type="warning">
          If Google shows completely different results for two keywords, that is
          a clear signal they require separate pages. Search both and compare
          the results before deciding.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What matters more */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-matters-more" title="What actually matters more than keyword count">
        <Paragraph>
          Counting keywords is the wrong metric. Here is what actually
          determines whether your page ranks well.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Search intent alignment",
              text: "Your page needs to match what the searcher actually wants. If someone searches 'how many keywords per page,' they want a clear answer with practical guidance, not a technical deep-dive into Google's algorithm. Match the format and depth to the intent.",
            },
            {
              title: "Content depth and quality",
              text: "Thorough content naturally includes more related keywords. Instead of trying to insert keywords, focus on answering the topic completely. Cover the angles your competitors miss. This is where real keyword coverage comes from.",
            },
            {
              title: "Internal linking structure",
              text: "Pages that are well-connected to the rest of your site rank better. Strong internal links pass authority, help Google understand topic relationships, and give readers paths to go deeper.",
            },
            {
              title: "Content structure and readability",
              text: "Clear headings, short paragraphs, logical flow, and scannable formatting all help. Google evaluates how well your page serves users. If your content is hard to read, it will not rank regardless of how many keywords are in it.",
            },
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
          covers how to improve all four of these factors. And our{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal linking guide
          </a>{" "}
          shows how to build a linking structure that boosts every page on
          your site.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Keyword targeting checklist */}
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="Keyword targeting checklist">
        <Paragraph>
          Use this checklist every time you create or optimize a page.
        </Paragraph>
        <BulletList
          items={[
            "Identify one clear primary keyword that defines the page's purpose",
            "Find 3 to 8 supporting keywords that are close variations with the same intent",
            "Include semantic keywords naturally as you write thorough content",
            "Check that your title tag and H1 include the primary keyword",
            "Use supporting keywords in subheadings where they fit naturally",
            "Verify that Google shows similar results for all your target keywords",
            "Link internally to related pages that go deeper on subtopics",
            "Read the page back and make sure it answers the core question completely",
          ]}
        />
        <Paragraph>
          RankSEO&apos;s{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword analysis features
          </a>{" "}
          can help you identify which supporting and semantic keywords to
          include for any given topic, so you cover the right ground without
          overthinking it.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common keyword targeting mistakes">
        <Paragraph>
          Most keyword targeting problems come from outdated thinking or
          trying too hard. Here are the mistakes that hurt rankings most.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Targeting too many unrelated keywords on one page",
              text: "Trying to rank a single page for 'keyword research,' 'link building,' and 'technical SEO' dilutes the page's focus. Google cannot figure out what the page is really about, so it does not rank well for any of them. Fix: one topic per page, always.",
            },
            {
              title: "Keyword stuffing",
              text: "Repeating your target keyword over and over does not help. Google's algorithms detect unnatural keyword density and it can trigger quality filters. If your content reads awkwardly because of forced keyword insertions, you have gone too far. Fix: write naturally and let keywords appear organically.",
            },
            {
              title: "Ignoring search intent",
              text: "Targeting a keyword without understanding what searchers actually want leads to content that does not satisfy anyone. A page targeting 'best project management tools' should be a comparison, not an essay about project management theory. Fix: search your keyword and study what currently ranks.",
            },
            {
              title: "Creating duplicate pages for similar keywords",
              text: "Making separate pages for 'how to find easy keywords' and 'finding easy keywords' is a waste. These are the same query. Multiple pages targeting the same intent cannibalize each other. Fix: consolidate into one comprehensive page.",
            },
            {
              title: "Choosing keywords that are too competitive",
              text: "Targeting keywords you cannot realistically rank for means your keyword targeting is technically correct but strategically useless. Fix: use our guide on finding low-competition keywords to pick battles you can win.",
            },
            {
              title: "Forgetting about supporting keywords entirely",
              text: "Only optimizing for your primary keyword and ignoring close variations means you miss easy ranking opportunities. Fix: research supporting keywords during planning and weave them into your subheadings and body content.",
            },
          ]}
        />
        <Paragraph>
          Finding keywords that match your site&apos;s actual ability to rank
          is just as important as how you target them. Our guide on{" "}
          <a
            href="/seo-guide/keyword-research/how-to-find-low-competition-keywords"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            finding low-competition keywords
          </a>{" "}
          walks through how to choose keywords strategically.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps with keyword targeting">
        <Paragraph>
          Getting keyword targeting right means choosing the right primary
          keyword, finding the right supporting terms, and making sure your
          content covers the topic thoroughly. RankSEO makes each step easier.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                keyword analysis tools
              </a>{" "}
              automatically group related keywords by intent so you know
              exactly which terms belong on the same page
            </span>,
            "Identifies your primary keyword and suggests supporting and semantic terms for each page",
            "Detects keyword cannibalization where multiple pages compete for the same queries",
            "Surfaces content gaps where you are missing keywords that competitors are ranking for",
            "Monitors your keyword rankings over time so you can track what is working",
          ]}
        />
        <Paragraph>
          Instead of guessing how many keywords to target, let RankSEO analyze
          the data and tell you exactly what to focus on. Explore{" "}
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
          to start targeting keywords with confidence.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="Stop counting keywords. Start covering topics.">
        <Paragraph>
          The number of keywords on a page is not what determines rankings.
          What matters is whether your page is the best answer for a topic.
          One primary keyword, a few supporting variations, and natural
          semantic coverage is all you need.
        </Paragraph>
        <Paragraph>
          Write for the topic. Match the intent. Structure the content well.
          Link it to the rest of your site. That is keyword targeting done
          right. The rest of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers every other piece of the puzzle.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "How many keywords should I target per page?",
            answer: (
              <p>
                Target one primary keyword per page, supported by 3 to 8
                closely related variations. The goal is to cover a single topic
                thoroughly, not to hit a specific keyword count.
              </p>
            ),
            answerText:
              "Target one primary keyword per page, supported by 3 to 8 closely related variations. The goal is to cover a single topic thoroughly, not to hit a specific keyword count.",
          },
          {
            question: "Can I rank for multiple keywords on one page?",
            answer: (
              <p>
                Yes. Pages that rank well for one keyword often rank for
                hundreds of related terms. This happens naturally when your
                content covers a topic comprehensively. You do not need to
                target each keyword individually.
              </p>
            ),
            answerText:
              "Yes. Pages that rank well for one keyword often rank for hundreds of related terms. This happens naturally when your content covers a topic comprehensively. You do not need to target each keyword individually.",
          },
          {
            question: "Is keyword stuffing bad for SEO?",
            answer: (
              <p>
                Yes. Keyword stuffing, which means repeating a keyword
                unnaturally to try to manipulate rankings, can trigger
                Google&apos;s quality filters and hurt your rankings. Write
                naturally and focus on answering the search query thoroughly
                instead of forcing keywords into the content.
              </p>
            ),
            answerText:
              "Yes. Keyword stuffing, which means repeating a keyword unnaturally to try to manipulate rankings, can trigger Google's quality filters and hurt your rankings. Write naturally and focus on answering the search query thoroughly instead of forcing keywords into the content.",
          },
          {
            question:
              "Should I create separate pages for each keyword variation?",
            answer: (
              <p>
                Only if the keywords have different search intent. If two
                keywords show similar search results on Google, they belong on
                the same page. Creating separate pages for similar keywords
                causes keyword cannibalization, where your own pages compete
                against each other.
              </p>
            ),
            answerText:
              "Only if the keywords have different search intent. If two keywords show similar search results on Google, they belong on the same page. Creating separate pages for similar keywords causes keyword cannibalization, where your own pages compete against each other.",
          },
          {
            question: "What are semantic keywords and should I use them?",
            answer: (
              <p>
                Semantic keywords are terms conceptually related to your main
                topic. For example, a page about keyword research would
                naturally mention terms like search volume, competition, and
                long-tail keywords. Including them helps Google understand your
                content depth. They should appear naturally, not be forced in.
              </p>
            ),
            answerText:
              "Semantic keywords are terms conceptually related to your main topic. For example, a page about keyword research would naturally mention terms like search volume, competition, and long-tail keywords. Including them helps Google understand your content depth. They should appear naturally, not be forced in.",
          },
          {
            question: "How do I know if keywords have the same search intent?",
            answer: (
              <p>
                Search both keywords on Google and compare the results. If the
                top results are mostly the same pages, the intent is the same
                and they belong on one page. If the results are completely
                different, the intent is different and you need separate pages.
              </p>
            ),
            answerText:
              "Search both keywords on Google and compare the results. If the top results are mostly the same pages, the intent is the same and they belong on one page. If the results are completely different, the intent is different and you need separate pages.",
          },
        ]}
      />
    </>
  );
}
