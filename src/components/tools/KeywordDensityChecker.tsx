"use client";

import { useState } from "react";
import { Icon, Icons } from "@/components/ui/Icon";
import { ToolHero } from "./ToolHero";
import { ToolResultCard } from "./ToolResultCard";
import { ToolFAQ } from "./ToolFAQ";
import { ToolError } from "./ToolError";
import { ToolLoading } from "./ToolLoading";
import { ToolRelated } from "./ToolRelated";
import { ToolGuides } from "./ToolGuides";
import { ToolContextCTA } from "./ToolContextCTA";
import { GateModal } from "./GateModal";
import { SignupPrompt } from "./SignupPrompt";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import type { GateDecision } from "@/lib/tools/types";
import type { KeywordEntry, DensityStatus } from "@/lib/tools/text-analysis";

const TOOL_ID = "keyword-density-checker";

interface AnalysisResult {
  url: string;
  title: string;
  totalWords: number;
  uniqueWords: number;
  topKeywords: KeywordEntry[];
  targetKeyword?: {
    keyword: string;
    count: number;
    density: number;
    status: DensityStatus;
  };
}

function getInsights(result: AnalysisResult): string[] {
  const insights: string[] = [];
  const target = result.targetKeyword;

  if (target) {
    if (target.status === "not found") {
      insights.push(`The keyword "${target.keyword}" was not found on this page. Consider adding it naturally to the content.`);
    } else if (target.status === "very low") {
      insights.push(`The keyword "${target.keyword}" appears ${target.count} time${target.count !== 1 ? "s" : ""} (${target.density}%). This is quite low. Consider using it in a few more sections.`);
    } else if (target.status === "natural") {
      insights.push(`The keyword "${target.keyword}" has a natural density of ${target.density}%. This is within the recommended range.`);
    } else if (target.status === "high") {
      insights.push(`The keyword "${target.keyword}" has a density of ${target.density}%, which is higher than recommended. Avoid over-optimizing.`);
    }
  }

  if (result.totalWords < 300) {
    insights.push("The page has very little text content. Keyword density percentages may be unreliable with so few words.");
  }

  if (result.topKeywords.length > 0) {
    const top = result.topKeywords[0];
    if (top.density > 3) {
      insights.push(`The most frequent term "${top.keyword}" appears at ${top.density}% density, which is high. Check if it is over-used.`);
    }
  }

  if (insights.length === 0) {
    insights.push("Keyword usage on this page looks balanced. No major issues detected.");
  }

  return insights;
}

function getRecommendations(result: AnalysisResult): string[] {
  const recs: string[] = [];
  const target = result.targetKeyword;

  if (target) {
    if (target.status === "not found") {
      recs.push(`Add "${target.keyword}" to the title, a heading, the introduction, and a few body paragraphs.`);
    } else if (target.status === "very low") {
      recs.push(`Consider using "${target.keyword}" in one or two more sections. Include it in a heading if it fits naturally.`);
    } else if (target.status === "natural") {
      recs.push("Keyword usage looks good. Focus on content quality and structure rather than adding more mentions.");
    } else if (target.status === "high") {
      recs.push(`Reduce repetition of "${target.keyword}." Use synonyms and related terms to cover the topic without over-optimizing.`);
    }
  }

  recs.push("Use semantic keywords and related terms naturally throughout the content.");
  recs.push("Focus on matching search intent rather than hitting a specific keyword density number.");

  return recs;
}

const statusStyles: Record<DensityStatus, { bg: string; text: string }> = {
  "not found": { bg: "bg-red-100", text: "text-red-700" },
  "very low": { bg: "bg-amber-100", text: "text-amber-700" },
  natural: { bg: "bg-emerald-100", text: "text-emerald-700" },
  high: { bg: "bg-red-100", text: "text-red-700" },
};

export function KeywordDensityChecker() {
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/keyword-density", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: url.trim(),
          keyword: keyword.trim() || undefined,
        }),
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
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, totalWords: data.data.totalWords });

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

  const insights = result ? getInsights(result) : [];
  const recommendations = result ? getRecommendations(result) : [];

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Keyword Density Checker"
        subtitle="Analyze keyword frequency, term usage, and content balance for SEO. Paste a URL and optionally specify a target keyword."
      />

      {/* Input section */}
      <section className="py-2">
        <div className="mx-auto max-w-[680px] px-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAnalyze();
            }}
            className="space-y-3"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Icon
                  icon={Icons.globe}
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/page"
                  required
                  className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-4 text-[14px] text-foreground placeholder:text-muted-light outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Icon icon={Icons.search} size="sm" />
                    Analyze
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <Icon
                icon={Icons.target}
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Target keyword (optional, e.g. 'keyword research')"
                className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-[14px] text-foreground placeholder:text-muted-light outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
          </form>
        </div>
      </section>

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {loading && <ToolLoading message="Analyzing keyword density..." />}
      {error && <ToolError message={error} onRetry={handleAnalyze} />}

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Page info */}
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                Analyzed page
              </p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">
                {result.title || result.url}
              </h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{result.url}</p>
            </div>

            {/* Overview cards */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
              <ToolResultCard label="Total words" value={result.totalWords.toLocaleString()} />
              <ToolResultCard label="Unique words" value={result.uniqueWords.toLocaleString()} />
              {result.targetKeyword && (
                <>
                  <ToolResultCard
                    label="Keyword count"
                    value={result.targetKeyword.count}
                    note={`"${result.targetKeyword.keyword}"`}
                  />
                  <ToolResultCard
                    label="Keyword density"
                    value={`${result.targetKeyword.density}%`}
                    note={result.targetKeyword.status}
                  />
                </>
              )}
            </div>

            {/* Target keyword analysis */}
            {result.targetKeyword && (
              <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                  Target keyword analysis
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[16px] font-bold text-foreground">
                    &ldquo;{result.targetKeyword.keyword}&rdquo;
                  </span>
                  <span className={`rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${statusStyles[result.targetKeyword.status].bg} ${statusStyles[result.targetKeyword.status].text}`}>
                    {result.targetKeyword.status}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-[11px] text-muted-light uppercase tracking-wide">Occurrences</p>
                    <p className="text-[18px] font-bold text-foreground">{result.targetKeyword.count}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-light uppercase tracking-wide">Density</p>
                    <p className="text-[18px] font-bold text-foreground">{result.targetKeyword.density}%</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-light uppercase tracking-wide">Total words</p>
                    <p className="text-[18px] font-bold text-foreground">{result.totalWords.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Top keywords table */}
            {result.topKeywords.length > 0 && (
              <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                  Top keywords (stop words excluded)
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="border-b border-border-light text-left">
                        <th className="pb-2 pr-4 font-semibold text-muted-light text-[11px] uppercase tracking-wide">Keyword</th>
                        <th className="pb-2 pr-4 font-semibold text-muted-light text-[11px] uppercase tracking-wide text-right">Count</th>
                        <th className="pb-2 font-semibold text-muted-light text-[11px] uppercase tracking-wide text-right">Density</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.topKeywords.map((kw) => (
                        <tr key={kw.keyword} className="border-b border-border-light/50 last:border-0">
                          <td className="py-2 pr-4 font-medium text-foreground">{kw.keyword}</td>
                          <td className="py-2 pr-4 text-right text-muted">{kw.count}</td>
                          <td className="py-2 text-right text-muted">{kw.density}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Insights */}
            {insights.length > 0 && (
              <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/30 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-blue-600 mb-3">
                  Insights
                </p>
                <ul className="space-y-2">
                  {insights.map((ins, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-blue-800 leading-[1.6]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {ins}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">
                  Recommendations
                </p>
                <ul className="space-y-2">
                  {recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-foreground leading-[1.6]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <ToolGuides toolId={TOOL_ID} />
      <ToolRelated currentToolId={TOOL_ID} />

      <ToolContextCTA toolId={TOOL_ID} />

      <ToolFAQ
        faqs={[
          {
            question: "What is keyword density?",
            answer:
              "Keyword density is the percentage of times a keyword appears in a page's text compared to the total word count. For example, if a keyword appears 5 times in a 500-word article, the density is 1%.",
          },
          {
            question: "Does keyword density matter for SEO?",
            answer:
              "Keyword density is not a direct ranking factor. Google uses semantic understanding rather than counting exact keyword matches. However, extremely low or high density can be a signal. If a keyword is absent, Google may not associate the page with that topic. If it is over-used, it may look like keyword stuffing.",
          },
          {
            question: "What is a good keyword density?",
            answer:
              "There is no magic number. A density between 0.5% and 2.5% is generally considered natural. Focus on writing helpful content that covers the topic thoroughly. Keywords should appear naturally, not be forced in to hit a target percentage.",
          },
          {
            question: "Can keyword stuffing hurt rankings?",
            answer:
              "Yes. Google's algorithms detect unnatural keyword repetition and it can trigger quality filters. Content that reads unnaturally because of forced keyword insertions will perform worse than content written naturally for the reader.",
          },
          {
            question: "Should I optimize for one keyword only?",
            answer:
              "No. A well-written page naturally includes variations, synonyms, and semantically related terms. Focus on covering the topic thoroughly rather than repeating a single exact phrase. Google understands meaning, not just exact word matches.",
          },
        ]}
      />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
