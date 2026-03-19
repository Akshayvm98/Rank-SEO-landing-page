"use client";

import { useState } from "react";
import { Icon, Icons } from "@/components/ui/Icon";
import { ToolHero } from "./ToolHero";
import { ToolResultCard } from "./ToolResultCard";
import { ToolFAQ } from "./ToolFAQ";
import { ToolRelated } from "./ToolRelated";
import { ToolGuides } from "./ToolGuides";
import { ToolContextCTA } from "./ToolContextCTA";
import { GateModal } from "./GateModal";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import { analyzeTitleTag } from "@/lib/tools/title-analysis";
import type { TitleAnalysisResult, TitleQuality } from "@/lib/tools/title-analysis";
import type { GateDecision } from "@/lib/tools/types";

const TOOL_ID = "title-tag-analyzer";

const qualityStyles: Record<TitleQuality, { bg: string; text: string; badge: string; border: string }> = {
  poor: { bg: "bg-red-50/40", text: "text-red-700", badge: "bg-red-100 text-red-700", border: "border-red-200" },
  "needs improvement": { bg: "bg-amber-50/40", text: "text-amber-700", badge: "bg-amber-100 text-amber-700", border: "border-amber-200" },
  good: { bg: "bg-blue-50/40", text: "text-blue-700", badge: "bg-blue-100 text-blue-700", border: "border-blue-200" },
  strong: { bg: "bg-emerald-50/40", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", border: "border-emerald-200" },
};

const severityStyles: Record<string, string> = {
  good: "border-emerald-200 bg-emerald-50/30 text-emerald-700",
  warning: "border-amber-200 bg-amber-50/30 text-amber-700",
  problem: "border-red-200 bg-red-50/30 text-red-700",
};

export function TitleTagAnalyzer() {
  const [titleInput, setTitleInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [fetchUrl, setFetchUrl] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [result, setResult] = useState<TitleAnalysisResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  function handleAnalyze() {
    if (!titleInput.trim()) return;
    trackToolEvent("analysis_started", { toolId: TOOL_ID });
    const analysis = analyzeTitleTag(titleInput.trim(), keyword.trim() || undefined);
    setResult(analysis);
    trackToolEvent("analysis_completed", { toolId: TOOL_ID, quality: analysis.quality });
  }

  async function handleFetch() {
    if (!fetchUrl.trim()) return;
    setFetchLoading(true);
    try {
      const res = await fetch("/api/tools/meta-tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: fetchUrl.trim(), toolId: TOOL_ID }),
      });
      const data = await res.json();
      if (!data.success) {
        if (res.status === 429) { setGate(data.gate); setShowGateModal(true); return; }
        return;
      }
      // title may be string or { value: string, assessment: object }
      const rawTitle = data.data.title;
      const titleStr = typeof rawTitle === "string" ? rawTitle : rawTitle?.value ?? "";
      if (titleStr) setTitleInput(titleStr);
      setGate(data.gate);
    } catch { /* silent */ } finally { setFetchLoading(false); }
  }

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Title Tag Analyzer"
        subtitle="Check your title tag for SEO length, keyword usage, and SERP readiness."
      />

      {/* Fetch from URL */}
      <section className="py-2">
        <div className="mx-auto max-w-[680px] px-6">
          <div className="rounded-xl border border-border-light bg-surface p-4">
            <p className="text-[12px] font-semibold text-muted mb-2">Fetch from existing page (optional)</p>
            <form onSubmit={(e) => { e.preventDefault(); handleFetch(); }} className="flex gap-2">
              <div className="relative flex-1">
                <Icon icon={Icons.globe} size="sm" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input type="url" value={fetchUrl} onChange={(e) => setFetchUrl(e.target.value)} placeholder="https://example.com/page" className="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-[13px] text-foreground placeholder:text-muted-light outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
              </div>
              <button type="submit" disabled={fetchLoading} className="shrink-0 rounded-lg bg-accent px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60">
                {fetchLoading ? "Fetching..." : "Fetch"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Manual input */}
      <section className="py-4">
        <div className="mx-auto max-w-[680px] px-6">
          <form onSubmit={(e) => { e.preventDefault(); handleAnalyze(); }} className="space-y-3">
            <div>
              <label className="block text-[12px] font-semibold text-muted mb-1">
                Title tag <span className="font-normal text-muted-light">({titleInput.length} chars)</span>
              </label>
              <input type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} placeholder="Enter your title tag" maxLength={150} required className="w-full rounded-xl border border-border bg-white py-3 px-4 text-[14px] text-foreground placeholder:text-muted-light outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-muted mb-1">Target keyword (optional)</label>
              <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g. keyword research" className="w-full rounded-xl border border-border bg-white py-3 px-4 text-[14px] text-foreground placeholder:text-muted-light outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover">
              <Icon icon={Icons.search} size="sm" />Analyze title
            </button>
          </form>
        </div>
      </section>

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Overview cards */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
              <ToolResultCard label="Characters" value={result.charCount} />
              <ToolResultCard label="Words" value={result.wordCount} />
              <ToolResultCard label="Length status" value={result.lengthStatus} />
              <ToolResultCard label="Quality" value={result.quality} />
            </div>

            {/* Displayed title */}
            <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-2">Your title</p>
              <p className="text-[18px] font-bold text-foreground">{result.title || "—"}</p>
              {result.charCount > 60 && (
                <p className="mt-2 text-[12px] text-amber-600">
                  Likely truncated in SERP: &quot;{result.title.slice(0, 57)}...&quot;
                </p>
              )}
            </div>

            {/* Quality score */}
            <div className={`mt-6 rounded-2xl border p-6 ${qualityStyles[result.quality].bg} ${qualityStyles[result.quality].border}`}>
              <div className="flex items-center gap-3">
                <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${qualityStyles[result.quality].badge}`}>
                  {result.quality}
                </span>
                <span className={`text-[14px] font-semibold ${qualityStyles[result.quality].text}`}>Title quality</span>
              </div>
            </div>

            {/* Checks */}
            <div className="mt-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Analysis</p>
              <div className="space-y-2">
                {result.issues.map((issue, i) => (
                  <div key={i} className={`rounded-xl border px-5 py-3 text-[13px] ${severityStyles[issue.severity]}`}>
                    {issue.message}
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
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{rec}
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
        { question: "What is a title tag?", answer: "A title tag is the HTML element that defines the title of a web page. It appears as the clickable headline in Google search results and in browser tabs. It is one of the most important on-page SEO elements." },
        { question: "How long should a title tag be?", answer: "Google typically displays 50 to 60 characters. Aim for 30 to 60 characters. Titles longer than 60 characters may be truncated in search results with an ellipsis." },
        { question: "Does the title tag affect rankings?", answer: "Yes. The title tag is one of the strongest on-page ranking signals. Google uses it to understand what the page is about. A well-optimized title with the target keyword helps the page rank for relevant queries." },
        { question: "Should the keyword be in the title?", answer: "Yes, when it fits naturally. Including the target keyword in the title, ideally near the beginning, helps Google understand the page topic and improves relevance for that query." },
        { question: "What makes a good SEO title?", answer: "A good title is 30 to 60 characters, includes the main keyword naturally, clearly describes the page content, and is compelling enough to earn clicks from search results." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
