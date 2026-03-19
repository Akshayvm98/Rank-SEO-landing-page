import type { Metadata } from "next";
import { GuideLayout } from "@/components/seo-guide/GuideLayout";
import { GuideRelated } from "@/components/seo-guide/GuideRelated";
import {
  getTopicBySlug,
  getArticlesByTopic,
  getPageHref,
  buildGuideMetadata,
} from "@/lib/guide";
import { Icon, Icons } from "@/components/ui/Icon";

const page = getTopicBySlug("ai-seo")!;

export const metadata: Metadata = buildGuideMetadata(page);

export default function AiSeoPage() {
  const articles = getArticlesByTopic("ai-seo");

  return (
    <GuideLayout pathname="/seo-guide/ai-seo">
      {/* Hero */}
      <section className="relative overflow-hidden pt-6 pb-6 md:pt-8 md:pb-8">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative mx-auto max-w-[720px] px-6">
          <p className="animate-hero text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            SEO Guide
          </p>
          <h1 className="animate-hero-delay-1 mt-3 text-[2rem] font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            AI SEO Guide
          </h1>
          <p className="animate-hero-delay-2 mt-5 text-[16px] leading-[1.7] text-muted">
            AI is changing how SEO content is created, optimized, and scaled.
            Used correctly, it lets you produce more high-quality content in
            less time without sacrificing what Google rewards. This guide
            covers practical strategies for using AI to grow organic traffic.
          </p>
        </div>
      </section>

      {/* What this guide covers */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-[720px] px-6">
          <h2
            id="overview"
            className="reveal text-[1.5rem] font-bold leading-[1.2] tracking-[-0.02em] text-foreground md:text-[1.75rem]"
          >
            What this guide covers
          </h2>
          <div className="reveal reveal-delay-1 mt-6">
            <p className="text-[15px] leading-[1.75] text-muted">
              AI SEO is not about replacing human judgment. It is about
              automating the repetitive parts of content creation so you can
              focus on strategy and quality. This topic covers how to scale
              content with AI, when to use AI vs human writing, how to
              automate your content workflow, and which tools deliver the best
              results.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-muted">
              For the broader SEO picture, see our{" "}
              <a
                href="/seo-guide"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                complete SEO guide
              </a>
              . For AI content quality specifically, our{" "}
              <a
                href="/seo-guide/content-seo/ai-content-seo"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                AI content SEO article
              </a>{" "}
              covers Google&apos;s policies and quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Articles in this topic */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-[720px] px-6">
          <h2
            id="articles"
            className="reveal text-[1.5rem] font-bold leading-[1.2] tracking-[-0.02em] text-foreground md:text-[1.75rem]"
          >
            AI SEO articles
          </h2>
          <div className="reveal reveal-delay-1 mt-6 space-y-3">
            {articles.map((article) => (
              <a
                key={article.id}
                href={getPageHref(article)}
                className="group flex items-start gap-4 rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
              >
                <div className="flex-1">
                  <h3 className="text-[15px] font-bold text-foreground group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-muted">
                    {article.excerpt}
                  </p>
                  {article.readingTime && (
                    <span className="mt-2 inline-block rounded-full bg-border-light px-2.5 py-0.5 text-[11px] font-medium text-muted">
                      {article.readingTime} min read
                    </span>
                  )}
                </div>
                <Icon
                  icon={Icons.arrowRight}
                  size="sm"
                  className="mt-1 shrink-0 text-muted transition-all group-hover:text-accent group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="reveal rounded-2xl border border-accent/20 bg-accent-bg/30 p-6 text-center">
            <h2 className="text-[1.25rem] font-bold text-foreground">
              Ready to scale your content with AI?
            </h2>
            <p className="mt-2 text-[14px] text-muted">
              RankSEO automates keyword research, content creation, and
              optimization so you can grow traffic faster.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="/features"
                className="rounded-xl bg-accent px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
              >
                Explore features
              </a>
              <a
                href="/pricing"
                className="rounded-xl border border-accent/20 bg-white px-5 py-2.5 text-[13px] font-semibold text-accent transition-colors hover:bg-accent-bg/50"
              >
                View pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <GuideRelated pathname="/seo-guide/ai-seo" />
    </GuideLayout>
  );
}
