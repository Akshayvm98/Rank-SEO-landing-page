"use client";

import { useState } from "react";
import { ToolHero } from "./ToolHero";
import { ToolInput } from "./ToolInput";
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

const TOOL_ID = "noindex-checker";

interface AnalysisResult {
  url: string;
  title: string;
  indexable: boolean;
  hasNoindex: boolean;
  hasNofollow: boolean;
  metaRobotsTags: { name: string; content: string; directives: string[] }[];
  xRobotsHeader: string | null;
  xRobotsDirectives: string[];
  allDirectives: string[];
  findings: { severity: "good" | "warning" | "problem"; message: string }[];
  recommendations: string[];
}

const severityStyles: Record<string, string> = {
  good: "border-emerald-200 bg-emerald-50/30 text-emerald-700",
  warning: "border-amber-200 bg-amber-50/30 text-amber-700",
  problem: "border-red-200 bg-red-50/30 text-red-700",
};

export function NoindexChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true); setError(null); setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });
    try {
      const res = await fetch("/api/tools/noindex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!data.success) {
        if (res.status === 429) { setGate(data.gate); setShowGateModal(true); return; }
        throw new Error(data.error || "Analysis failed");
      }
      setResult(data.data); setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, indexable: data.data.indexable });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally { setLoading(false); }
  }

  return (
    <>
      <ToolHero badge="Free SEO Tool" title="Noindex Checker" subtitle="Check whether a page has noindex directives that may prevent it from appearing in search." />
      <ToolInput value={url} onChange={setUrl} onSubmit={handleAnalyze} loading={loading} placeholder="https://example.com/page" buttonText="Check noindex" />
      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />
      {loading && <ToolLoading message="Checking indexing directives..." />}
      {error && <ToolError message={error} onRetry={handleAnalyze} />}

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Analyzed page</p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">{result.title || result.url}</h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{result.url}</p>
            </div>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
              <ToolResultCard label="Indexable" value={result.indexable ? "Yes" : "No"} />
              <ToolResultCard label="Has noindex" value={result.hasNoindex ? "Yes" : "No"} />
              <ToolResultCard label="Has nofollow" value={result.hasNofollow ? "Yes" : "No"} />
              <ToolResultCard label="Directives" value={(result.allDirectives ?? []).length} note={(result.allDirectives ?? []).length > 0 ? (result.allDirectives ?? []).join(", ") : "none"} />
            </div>

            {/* Indexability verdict */}
            <div className={`mt-6 rounded-2xl border p-6 ${result.indexable ? "bg-emerald-50/40 border-emerald-200" : "bg-red-50/40 border-red-200"}`}>
              <div className="flex items-center gap-3">
                <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${result.indexable ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                  {result.indexable ? "Indexable" : "Not indexable"}
                </span>
                <span className={`text-[14px] font-semibold ${result.indexable ? "text-emerald-700" : "text-red-700"}`}>
                  {result.indexable ? "This page can appear in search results" : "This page is blocked from search results"}
                </span>
              </div>
            </div>

            {/* Directive sources */}
            {((result.metaRobotsTags ?? []).length > 0 || result.xRobotsHeader) && (
              <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Directive sources</p>
                {(result.metaRobotsTags ?? []).map((tag, i) => (
                  <div key={i} className="mb-2 rounded-lg border border-border-light p-3">
                    <p className="text-[12px] font-semibold text-muted">&lt;meta name=&quot;{tag.name}&quot;&gt;</p>
                    <p className="text-[13px] font-mono text-foreground">{tag.content}</p>
                  </div>
                ))}
                {result.xRobotsHeader && (
                  <div className="rounded-lg border border-border-light p-3">
                    <p className="text-[12px] font-semibold text-muted">X-Robots-Tag header</p>
                    <p className="text-[13px] font-mono text-foreground">{result.xRobotsHeader}</p>
                  </div>
                )}
              </div>
            )}

            {/* Findings */}
            {result.findings.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Findings</p>
                <div className="space-y-2">{result.findings.map((f, i) => (
                  <div key={i} className={`rounded-xl border px-5 py-3 text-[13px] ${severityStyles[f.severity]}`}>{f.message}</div>
                ))}</div>
              </div>
            )}

            {/* Recommendations */}
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
              <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">Recommendations</p>
              <ul className="space-y-2">{result.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-foreground leading-[1.6]"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{rec}</li>
              ))}</ul>
            </div>
          </div>
        </section>
      )}

      <ToolGuides toolId={TOOL_ID} />
      <ToolRelated currentToolId={TOOL_ID} />
      <ToolContextCTA toolId={TOOL_ID} />

      <ToolFAQ faqs={[
        { question: "What is noindex?", answer: "noindex is a robots directive that tells search engines not to include a page in their index. Pages with noindex will not appear in search results, even if other signals suggest they should rank." },
        { question: "Does noindex stop a page from ranking?", answer: "Yes. A noindex directive tells Google not to include the page in its index. If a page is not indexed, it cannot rank for any queries. This is intentional for pages like admin panels, login pages, or duplicate content." },
        { question: "What is the difference between noindex and nofollow?", answer: "noindex prevents a page from appearing in search results. nofollow tells search engines not to follow the links on that page. They are independent. A page can be noindex but still pass link equity through its links if nofollow is not set." },
        { question: "Can X-Robots-Tag block indexing?", answer: "Yes. The X-Robots-Tag HTTP response header works the same as a meta robots tag. If it contains noindex, the page will not be indexed. This is often used for non-HTML files or when you cannot modify the HTML directly." },
        { question: "How do I remove noindex from a page?", answer: "Check both the HTML meta tags and server response headers. Remove or update the meta robots tag in your page template. If the X-Robots-Tag header is set, update your server configuration or CMS settings. After removing noindex, request reindexing in Google Search Console." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
