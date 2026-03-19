"use client";

import { useState } from "react";
import { ToolHero } from "./ToolHero";
import { ToolInput } from "./ToolInput";
import { ToolResultCard } from "./ToolResultCard";
import { ToolCTA } from "./ToolCTA";
import { ToolFAQ } from "./ToolFAQ";
import { GateModal } from "./GateModal";
import { SignupPrompt } from "./SignupPrompt";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import { getContentLengthRecommendation } from "@/lib/tools/recommendations";
import type { PageAnalysis, GateDecision } from "@/lib/tools/types";

const TOOL_ID = "content-length-analyzer";

export function ContentLengthAnalyzer() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PageAnalysis | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/analyze-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), toolId: TOOL_ID }),
      });

      const data = await res.json();

      if (!data.success) {
        if (res.status === 429) {
          setGate(data.gate);
          setShowGateModal(true);
          trackToolEvent("gate_triggered", { toolId: TOOL_ID });
          return;
        }
        throw new Error(data.error || "Analysis failed");
      }

      setResult(data.data);
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, wordCount: data.data.wordCount });

      if (data.gate?.showSignupPrompt) {
        trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      trackToolEvent("analysis_failed", { toolId: TOOL_ID, error: message });
    } finally {
      setLoading(false);
    }
  }

  const recommendation = result ? getContentLengthRecommendation(result.wordCount) : null;

  const colorMap: Record<string, string> = {
    red: "border-red-200 bg-red-50/40 text-red-700",
    amber: "border-amber-200 bg-amber-50/40 text-amber-700",
    emerald: "border-emerald-200 bg-emerald-50/40 text-emerald-700",
    blue: "border-blue-200 bg-blue-50/40 text-blue-700",
    violet: "border-violet-200 bg-violet-50/40 text-violet-700",
  };

  const badgeColorMap: Record<string, string> = {
    red: "bg-red-100 text-red-700",
    amber: "bg-amber-100 text-amber-700",
    emerald: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
    violet: "bg-violet-100 text-violet-700",
  };

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Content Length Analyzer"
        subtitle="Enter any URL and get a complete breakdown of word count, headings, links, reading time, and SEO content-length recommendations."
      />

      <ToolInput
        value={url}
        onChange={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        placeholder="https://example.com/blog-post"
        buttonText="Analyze page"
      />

      {/* Signup prompt */}
      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {/* Error */}
      {error && (
        <div className="mx-auto max-w-[680px] px-6 py-4">
          <div className="rounded-xl border border-red-200 bg-red-50/40 px-5 py-3 text-[14px] text-red-700">
            {error}
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Page title */}
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                Analyzed page
              </p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">
                {result.title || result.url}
              </h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">
                {result.url}
              </p>
            </div>

            {/* Metric grid */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              <ToolResultCard label="Word count" value={result.wordCount.toLocaleString()} />
              <ToolResultCard label="Characters" value={result.characterCount.toLocaleString()} />
              <ToolResultCard label="Chars (no spaces)" value={result.characterCountNoSpaces.toLocaleString()} />
              <ToolResultCard label="Sentences" value={result.sentenceCount.toLocaleString()} />
              <ToolResultCard label="Paragraphs" value={result.paragraphCount.toLocaleString()} />
              <ToolResultCard
                label="Reading time"
                value={`${result.readingTimeMinutes} min`}
                note="Based on 238 wpm"
              />
              <ToolResultCard
                label="Speaking time"
                value={`${result.speakingTimeMinutes} min`}
                note="Based on 150 wpm"
              />
              <ToolResultCard
                label="Headings"
                value={result.headings.length}
                note={Object.entries(result.headingCounts)
                  .sort()
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(", ")}
              />
              <ToolResultCard label="Internal links" value={result.internalLinkCount} />
              <ToolResultCard label="External links" value={result.externalLinkCount} />
            </div>

            {/* Recommendation */}
            {recommendation && (
              <div className={`mt-6 rounded-2xl border p-6 ${colorMap[recommendation.color] ?? ""}`}>
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${
                      badgeColorMap[recommendation.color] ?? ""
                    }`}
                  >
                    {recommendation.label}
                  </span>
                  <span className="text-[14px] font-semibold">
                    {result.wordCount.toLocaleString()} words
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-[1.7] font-medium">
                  {recommendation.summary}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {recommendation.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[13px] leading-[1.6]">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-40" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Meta info */}
            {(result.title || result.metaDescription) && (
              <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                  Page metadata
                </p>
                {result.title && (
                  <div className="mb-2">
                    <p className="text-[12px] font-semibold text-muted">Title tag</p>
                    <p className="text-[14px] text-foreground">{result.title}</p>
                  </div>
                )}
                {result.metaDescription && (
                  <div>
                    <p className="text-[12px] font-semibold text-muted">Meta description</p>
                    <p className="text-[14px] text-foreground">{result.metaDescription}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Related SEO guides */}
      <section className="py-6">
        <div className="mx-auto max-w-[680px] px-6">
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
            Related SEO guides
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: "/seo-guide/content-seo/blog-structure", label: "Blog Structure for SEO" },
              { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
              { href: "/seo-guide/content-seo/content-readability", label: "Content Readability for SEO" },
              { href: "/seo-guide/on-page-seo/headings-seo", label: "Heading Tags Best Practices" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ToolCTA
        title="Want full content analysis?"
        description="RankSEO analyzes your entire site, not just one page. Get content audits, keyword tracking, and optimization recommendations."
      />

      <ToolFAQ
        faqs={[
          {
            question: "What does this content length analyzer do?",
            answer:
              "It fetches any public web page, extracts the visible text, and gives you a full breakdown of word count, character count, reading time, sentence count, paragraph count, heading counts, and internal/external link counts. It also provides SEO recommendations based on the content length.",
          },
          {
            question: "What is a good word count for SEO?",
            answer:
              "There is no universal answer. For most blog posts, 1,000 to 2,000 words performs well. Comprehensive guides often need 2,000 to 4,000 words. Simple product pages can work with less. What matters most is covering the topic thoroughly without padding.",
          },
          {
            question: "Does Google have a minimum word count?",
            answer:
              "No. Google does not enforce a minimum word count. However, pages with very little content (under 300 words) are often considered thin and may struggle to rank for competitive queries. Focus on depth and value, not hitting a number.",
          },
          {
            question: "How is reading time calculated?",
            answer:
              "Reading time is calculated based on an average reading speed of 238 words per minute, which is the standard used by most publishing platforms. Speaking time uses 150 words per minute.",
          },
          {
            question: "Is this tool free to use?",
            answer:
              "Yes. Anonymous visitors get 2 free analyses per day. Create an account for unlimited access to all free SEO tools.",
          },
        ]}
      />

      {/* Gate modal */}
      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
