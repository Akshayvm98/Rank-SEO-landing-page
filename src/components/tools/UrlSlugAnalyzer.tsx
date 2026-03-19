"use client";

import { useState } from "react";
import { Icon, Icons } from "@/components/ui/Icon";
import { ToolHero } from "./ToolHero";
import { ToolResultCard } from "./ToolResultCard";
import { ToolFAQ } from "./ToolFAQ";
import { ToolRelated } from "./ToolRelated";
import { ToolGuides } from "./ToolGuides";
import { ToolContextCTA } from "./ToolContextCTA";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import { analyzeSlugStructure } from "@/lib/tools/slug-analysis";
import type { SlugAnalysisResult, SlugQuality, SlugIssue } from "@/lib/tools/slug-analysis";

const TOOL_ID = "url-slug-analyzer";

const qualityStyles: Record<SlugQuality, { bg: string; text: string; badge: string }> = {
  poor: { bg: "bg-red-50/40", text: "text-red-700", badge: "bg-red-100 text-red-700" },
  "needs improvement": { bg: "bg-amber-50/40", text: "text-amber-700", badge: "bg-amber-100 text-amber-700" },
  good: { bg: "bg-blue-50/40", text: "text-blue-700", badge: "bg-blue-100 text-blue-700" },
  strong: { bg: "bg-emerald-50/40", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700" },
};

const qualityBorders: Record<SlugQuality, string> = {
  poor: "border-red-200", "needs improvement": "border-amber-200",
  good: "border-blue-200", strong: "border-emerald-200",
};

const severityStyles: Record<SlugIssue["severity"], string> = {
  good: "border-emerald-200 bg-emerald-50/30 text-emerald-700",
  warning: "border-amber-200 bg-amber-50/30 text-amber-700",
  problem: "border-red-200 bg-red-50/30 text-red-700",
};

export function UrlSlugAnalyzer() {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState<SlugAnalysisResult | null>(null);

  function handleAnalyze() {
    if (!input.trim()) return;
    trackToolEvent("analysis_started", { toolId: TOOL_ID });
    const analysis = analyzeSlugStructure(input.trim(), keyword.trim() || undefined);
    setResult(analysis);
    trackToolEvent("analysis_completed", { toolId: TOOL_ID, quality: analysis.quality });
  }

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="URL Slug Analyzer"
        subtitle="Check if your URL slug is clean, readable, and SEO-friendly. Paste a URL or enter a slug directly."
      />

      {/* Input */}
      <section className="py-2">
        <div className="mx-auto max-w-[680px] px-6">
          <form onSubmit={(e) => { e.preventDefault(); handleAnalyze(); }} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Icon icon={Icons.link} size="sm" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="https://example.com/your-page-slug or just your-page-slug"
                  required
                  className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-4 text-[14px] text-foreground placeholder:text-muted-light outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-accent-hover"
              >
                <Icon icon={Icons.search} size="sm" />
                Analyze
              </button>
            </div>
            <div className="relative">
              <Icon icon={Icons.target} size="sm" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Target keyword (optional)"
                className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-[14px] text-foreground placeholder:text-muted-light outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
          </form>
        </div>
      </section>

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Overview cards */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
              <ToolResultCard label="Slug length" value={`${result.slugLength} chars`} />
              <ToolResultCard label="Words" value={result.wordCount} />
              <ToolResultCard label="Quality" value={result.quality} />
              {result.keywordPresent && (
                <ToolResultCard label="Keyword" value={result.keywordPresent} />
              )}
            </div>

            {/* Slug breakdown */}
            <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Slug breakdown</p>
              <div className="space-y-2 text-[13px]">
                <div><span className="text-muted">Input:</span> <span className="font-medium text-foreground">{result.original}</span></div>
                <div><span className="text-muted">Extracted slug:</span> <span className="font-mono font-medium text-foreground">/{result.extractedSlug}</span></div>
                <div><span className="text-muted">Normalized:</span> <span className="font-mono font-medium text-accent">/{result.normalizedSlug}</span></div>
              </div>
            </div>

            {/* Quality score */}
            <div className={`mt-6 rounded-2xl border p-6 ${qualityStyles[result.quality].bg} ${qualityBorders[result.quality]}`}>
              <div className="flex items-center gap-3">
                <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${qualityStyles[result.quality].badge}`}>
                  {result.quality}
                </span>
                <span className={`text-[14px] font-semibold ${qualityStyles[result.quality].text}`}>
                  Slug quality
                </span>
              </div>
            </div>

            {/* Rule checks */}
            <div className="mt-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Checks</p>
              <div className="space-y-2">
                {result.issues.map((issue, i) => (
                  <div key={i} className={`rounded-xl border px-5 py-3 text-[13px] ${severityStyles[issue.severity]}`}>
                    <span className="font-semibold">{issue.label}:</span> {issue.message}
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
              <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">Recommendations</p>
              <ul className="space-y-2">
                {result.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-foreground leading-[1.6]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <ToolGuides toolId={TOOL_ID} />
      <ToolRelated currentToolId={TOOL_ID} />
      <ToolContextCTA toolId={TOOL_ID} />

      <ToolFAQ faqs={[
        { question: "What is a URL slug?", answer: "A URL slug is the part of the URL after the domain that identifies a specific page. For example, in rankseoengine.com/tools/url-slug-analyzer, the slug is 'tools/url-slug-analyzer'. Good slugs are short, readable, and descriptive." },
        { question: "Do URL slugs matter for SEO?", answer: "URL slugs are a minor ranking factor. More importantly, clean and readable URLs improve user experience, click-through rates, and shareability. Google recommends using simple, descriptive URLs." },
        { question: "Should URLs include keywords?", answer: "Including keywords in the URL slug can help with relevance signals, but it is a minor factor. Do not force keywords in. Focus on making the slug short, readable, and descriptive." },
        { question: "Are shorter URLs better for SEO?", answer: "Generally yes. Shorter URLs are easier to read, share, and remember. They also tend to perform slightly better in search results. Aim for 3 to 6 descriptive words in the slug." },
        { question: "Should I remove stop words from URLs?", answer: "Removing unnecessary stop words (the, and, of, etc.) can make URLs cleaner and shorter. However, do not remove them if it makes the URL less readable. Readability is more important than strict optimization." },
      ]} />
    </>
  );
}
