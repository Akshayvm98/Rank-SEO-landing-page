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

export default function InternalLinksPerPage() {
  return (
    <>
      <ArticleHero
        title="How Many Internal Links Per Page for SEO"
        subtitle="Everyone wants a magic number. 3 links? 10? 50? The truth is there is no fixed rule, and chasing a number is the wrong approach. What matters is relevance, context, and whether each link actually helps the reader. This guide gives you practical guidelines instead of arbitrary limits."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="Stop looking for a number. Start thinking about value.">
        <Paragraph>
          The question &quot;how many internal links should a page have&quot;
          comes up constantly. It makes sense. People want a clear target to
          aim for. But{" "}
          <a
            href="/seo-guide/on-page-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            on-page SEO
          </a>{" "}
          does not work with fixed numbers. A 500-word article needs different
          linking than a 3,000-word guide. A pillar page linking to 15
          subtopics is not the same as a blog post with 15 random links.
        </Paragraph>
        <Paragraph>
          This{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          article gives you the practical guidelines, context, and best
          practices to get internal linking right on every page.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Is there a fixed number */}
      {/* ------------------------------------------------------------------ */}
      <Section id="no-fixed-number" title="There is no fixed number of internal links per page">
        <Paragraph>
          Google has never published a specific limit or recommendation for
          internal links per page. In the past, there was informal guidance
          about keeping total links (internal plus external) under roughly 100
          per page, but Google has said this is no longer a hard rule.
        </Paragraph>
        <Paragraph>
          The real constraint is not a number. It is usefulness. Every link
          should help the reader find something relevant. If a link does not
          add value at that point in the content, it should not be there,
          regardless of whether you are at 3 links or 30.
        </Paragraph>
        <Callout type="info">
          Google&apos;s John Mueller has said: &quot;We can follow a lot of
          links per page. It is not about a specific number. It is about
          making your site work for users.&quot;
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Practical guidelines */}
      {/* ------------------------------------------------------------------ */}
      <Section id="guidelines" title="How many internal links should you actually use">
        {/* Visual: Linking Density */}
        <div className="mt-2 mb-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Internal Link Density Guide
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-amber-100/60 bg-amber-50/20 px-4 py-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wide text-amber-600 mb-1">
                Too few
              </p>
              <p className="text-[18px] font-bold text-foreground">0-1 links</p>
              <p className="mt-1 text-[12px] text-muted">
                Page is isolated. Google struggles to find it and understand
                its context.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                Optimal range
              </p>
              <p className="text-[18px] font-bold text-foreground">3-10 links</p>
              <p className="mt-1 text-[12px] text-muted">
                Well-connected, contextual, and relevant. Each link adds
                value for the reader.
              </p>
            </div>
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-600 mb-1">
                Too many
              </p>
              <p className="text-[18px] font-bold text-foreground">20+ links</p>
              <p className="mt-1 text-[12px] text-muted">
                Dilutes each link&apos;s value. Feels cluttered and
                overwhelming to readers.
              </p>
            </div>
          </div>
        </div>

        <Paragraph>
          <strong>For short content (under 1,000 words):</strong> 3 to 5
          contextual internal links is usually enough. The content does not
          have enough depth to support more without forcing them.
        </Paragraph>
        <Paragraph>
          <strong>For medium content (1,000 to 2,000 words):</strong> 5 to 8
          contextual links gives you room to connect related topics naturally
          across multiple sections.
        </Paragraph>
        <Paragraph>
          <strong>For long-form guides (2,000+ words):</strong> 8 to 15 links
          is reasonable. Comprehensive guides naturally touch on many
          subtopics, and each one is an opportunity to link to a deeper
          resource.
        </Paragraph>
        <Paragraph>
          <strong>For pillar pages and topic hubs:</strong> These pages exist
          specifically to link out to subtopics. 15 to 25 links can be
          appropriate when the page is designed as a navigation hub.
        </Paragraph>
        <Callout type="tip">
          These are guidelines, not rules. The right number for your page is
          however many relevant, useful links naturally fit the content. If you
          can only find 3 natural linking points, use 3. If 12 makes sense,
          use 12.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What matters more */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-matters-more" title="What matters more than the number of links">
        <NumberedList
          items={[
            {
              title: "Relevance",
              text: "Every link should connect to a page that is genuinely related to the current content. A link that makes the reader think 'yes, I want to learn more about that' is a good link. A link that makes them think 'why is this here?' is not.",
            },
            {
              title: "Context",
              text: "Links placed within body paragraphs surrounded by relevant text carry more weight than links in sidebars, footers, or navigation. Google uses the surrounding text to understand the link's purpose.",
            },
            {
              title: "Anchor text quality",
              text: "Descriptive anchor text that previews the destination is more valuable than generic text. 'Our internal linking guide' is better than 'click here.' Our anchor text best practices guide covers this in detail.",
            },
            {
              title: "Page importance distribution",
              text: "Links should flow toward your most important pages. If a low-priority page has 20 internal links and your highest-value page has 2, the distribution is wrong. Direct more links to the pages you most want to rank.",
            },
            {
              title: "User experience",
              text: "A page where every other sentence is a link feels spammy and is hard to read. Links should enhance the reading experience, not interrupt it. If the page reads better without a link, remove it.",
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
          covers how to implement all five of these factors effectively.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Best practices */}
      {/* ------------------------------------------------------------------ */}
      <Section id="best-practices" title="Best practices for internal link counts">
        <NumberedList
          items={[
            {
              title: "Link naturally within the flow of content",
              text: "Place links where they make sense in context. If a paragraph discusses keyword research, that is a natural place to link to your keyword research guide. Do not force links into unrelated paragraphs.",
            },
            {
              title: "Prioritize important pages with more incoming links",
              text: "Your most valuable pages should receive the most internal links. Identify which 5 to 10 pages matter most to your business and ensure they are well-linked from related content across the site.",
            },
            {
              title: "Use descriptive anchor text for every link",
              text: "Replace all 'click here' and 'read more' anchors with text that describes the destination. This makes every link count for both readers and Google.",
            },
            {
              title: "Distribute links across sections, not clusters",
              text: "Spread your internal links throughout the article. Five links in the introduction and zero in the rest feels forced. One or two links per major section creates a natural reading experience.",
            },
            {
              title: "Update old content when you publish new pages",
              text: "Every new page is an opportunity to add a link from an existing article. Go back to 3 to 5 related posts and add a contextual link to the new content. This is one of the most impactful and most overlooked practices.",
            },
            {
              title: "Remove links that add no value",
              text: "If a link does not help the reader or does not connect to relevant content, remove it. Fewer, higher-quality links are always better than many low-quality ones.",
            },
          ]}
        />
        <Paragraph>
          RankSEO&apos;s{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal linking tools
          </a>{" "}
          analyze your link distribution across every page and surface
          specific opportunities to improve.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common internal link count mistakes">
        <NumberedList
          items={[
            {
              title: "Overlinking every sentence",
              text: "Making every other sentence a link turns your content into a navigation menu, not an article. Readers cannot focus on the content, and each link loses its value. Fix: limit to one link per 100 to 200 words of body content as a rough guideline.",
            },
            {
              title: "Adding irrelevant links to hit a target number",
              text: "Inserting links to unrelated pages just because you read you should have 'at least X links' dilutes the relevance signal for every link on the page. Fix: only link to pages that genuinely relate to the current content.",
            },
            {
              title: "Using generic anchor text to save time",
              text: "'Read more,' 'learn more,' and 'click here' provide zero context to Google. They waste the SEO value of the link. Fix: take 10 extra seconds to write descriptive anchor text for every link.",
            },
            {
              title: "Ignoring orphan pages because they seem fine",
              text: "A page can have great content and still underperform because no internal links point to it. Fix: run a regular audit to catch orphan pages. Our internal link audit guide walks through the process.",
            },
            {
              title: "Forcing links into the introduction",
              text: "Cramming three internal links into the first paragraph feels aggressive and distracts from the hook. Fix: one link in the introduction is enough. Save the rest for the body sections where they are more contextually relevant.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Checklist */ }
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="Internal linking checklist">
        <div className="mt-2 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Pre-Publish Linking Check
          </p>
          <div className="space-y-2.5">
            {[
              "Page has 3-10 contextual internal links (adjusted for content length)",
              "Every link connects to a relevant, related page",
              "Anchor text is descriptive and varied",
              "Links are distributed across sections, not clustered",
              "Most important target pages receive incoming links",
              "No generic 'click here' or 'read more' anchors used",
              "Page links both up to topic pages and sideways to related articles",
              "Content reads naturally with links included",
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
      <Section id="rankseo" title="How RankSEO helps with internal link optimization">
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
              analyze internal link counts across every page and flag under-
              and over-linked content with specific recommendations
            </span>,
            "Shows which pages have too few internal links and need more connections",
            "Identifies pages with excessive links that should be trimmed",
            "Suggests the best pages to link from based on authority and relevance",
            "Tracks your internal linking distribution over time as your site grows",
          ]}
        />
        <Paragraph>
          Get the right balance on every page. Explore{" "}
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
          to optimize your internal linking at scale.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="Quality beats quantity. Every time.">
        <Paragraph>
          The right number of internal links is however many genuinely help
          the reader and connect to relevant content. For most blog posts,
          that is 3 to 10. For pillar pages, it may be more. The number
          matters less than the relevance, context, and anchor text of each
          link.
        </Paragraph>
        <Paragraph>
          The rest of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers everything else you need to rank.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "How many internal links should a page have?",
            answer: (
              <p>
                There is no fixed number. For short content, 3 to 5 contextual
                links is typical. For medium content, 5 to 8. For long-form
                guides, 8 to 15. The right number depends on content length,
                the number of relevant topics covered, and whether each link
                genuinely helps the reader.
              </p>
            ),
            answerText:
              "There is no fixed number. For short content, 3 to 5 contextual links is typical. For medium content, 5 to 8. For long-form guides, 8 to 15. The right number depends on content length, the number of relevant topics covered, and whether each link genuinely helps the reader.",
          },
          {
            question: "Can too many internal links hurt SEO?",
            answer: (
              <p>
                Yes, indirectly. Excessive internal links dilute the value of
                each link, overwhelm readers, and can make content feel
                spammy. Google will not penalize you for having many links,
                but the quality of each link diminishes as the quantity
                increases.
              </p>
            ),
            answerText:
              "Yes, indirectly. Excessive internal links dilute the value of each link, overwhelm readers, and can make content feel spammy. Google will not penalize you for having many links, but the quality of each link diminishes as the quantity increases.",
          },
          {
            question: "What is overlinking?",
            answer: (
              <p>
                Overlinking means adding more internal links to a page than is
                useful for the reader. It creates a cluttered reading
                experience and reduces the SEO value of each individual link.
                If a page has links in every other sentence, it is probably
                overlinked.
              </p>
            ),
            answerText:
              "Overlinking means adding more internal links to a page than is useful for the reader. It creates a cluttered reading experience and reduces the SEO value of each individual link. If a page has links in every other sentence, it is probably overlinked.",
          },
          {
            question: "Do internal links help rankings?",
            answer: (
              <p>
                Yes. Internal links help Google discover pages, understand
                content relationships, and distribute authority across your
                site. Pages with strong, relevant internal links from
                authoritative pages tend to rank better than isolated pages.
              </p>
            ),
            answerText:
              "Yes. Internal links help Google discover pages, understand content relationships, and distribute authority across your site. Pages with strong, relevant internal links from authoritative pages tend to rank better than isolated pages.",
          },
          {
            question: "How do I choose which pages to link to?",
            answer: (
              <p>
                Link to pages that are genuinely relevant to the current
                content. Ask: would a reader benefit from visiting this page at
                this point? Prioritize your most important pages (those you
                want to rank) and make sure they receive internal links from
                related, high-authority content.
              </p>
            ),
            answerText:
              "Link to pages that are genuinely relevant to the current content. Ask: would a reader benefit from visiting this page at this point? Prioritize your most important pages (those you want to rank) and make sure they receive internal links from related, high-authority content.",
          },
          {
            question: "Should pillar pages have more internal links than blog posts?",
            answer: (
              <p>
                Yes. Pillar pages are designed to be hub pages that link out to
                all subtopics within a cluster. They naturally have more links
                (15 to 25) because their purpose is navigation and overview.
                Blog posts should have fewer, more focused links (3 to 10)
                within the body content.
              </p>
            ),
            answerText:
              "Yes. Pillar pages are designed to be hub pages that link out to all subtopics within a cluster. They naturally have more links (15 to 25) because their purpose is navigation and overview. Blog posts should have fewer, more focused links (3 to 10) within the body content.",
          },
        ]}
      />
    </>
  );
}
