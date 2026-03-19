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
import type { StructureQuality } from "@/lib/tools/structure-analysis";

const TOOL_ID = "content-structure-checker";

interface AnalysisResult {
  url: string;
  title: string;
  totalWords: number;
  headingCount: number;
  paragraphCount: number;
  listCount: number;
  internalLinkCount: number;
  headingsPerKWords: number;
  avgWordsPerParagraph: number;
  denseParagraphs: number;
  quality: StructureQuality;
  issues: { severity: "good" | "warning" | "problem"; message: string }[];
  recommendations: string[];
}

const qualityStyles: Record<StructureQuality, { bg: string; text: string; badge: string; border: string }> = {
  poor: { bg: "bg-red-50/40", text: "text-red-700", badge: "bg-red-100 text-red-700", border: "border-red-200" },
  "needs improvement": { bg: "bg-amber-50/40", text: "text-amber-700", badge: "bg-amber-100 text-amber-700", border: "border-amber-200" },
  solid: { bg: "bg-blue-50/40", text: "text-blue-700", badge: "bg-blue-100 text-blue-700", border: "border-blue-200" },
  strong: { bg: "bg-emerald-50/40", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", border: "border-emerald-200" },
};

const severityStyles: Record<string, string> = {
  good: "border-emerald-200 bg-emerald-50/30 text-emerald-700",
  warning: "border-amber-200 bg-amber-50/30 text-amber-700",
  problem: "border-red-200 bg-red-50/30 text-red-700",
};

export function ContentStructureChecker() {
  const [url, setUrl] = useState("");
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
      const res = await fetch("/api/tools/content-structure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
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
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, quality: data.data.quality });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      trackToolEvent("analysis_failed", { toolId: TOOL_ID, error: message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Content Structure Checker"
        subtitle="Analyze headings, paragraphs, lists, and section flow to improve readability and SEO."
      />

      <ToolInput value={url} onChange={setUrl} onSubmit={handleAnalyze} loading={loading} placeholder="https://example.com/page" buttonText="Check structure" />

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {loading && <ToolLoading message="Analyzing content structure..." />}
      {error && <ToolError message={error} onRetry={handleAnalyze} />}

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Analyzed page</p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">{result.title || result.url}</h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{result.url}</p>
            </div>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <ToolResultCard label="Words" value={result.totalWords.toLocaleString()} />
              <ToolResultCard label="Headings" value={result.headingCount} />
              <ToolResultCard label="Paragraphs" value={result.paragraphCount} />
              <ToolResultCard label="Lists" value={result.listCount} />
              <ToolResultCard label="Internal links" value={result.internalLinkCount} />
            </div>

            {/* Score */}
            <div className={`mt-6 rounded-2xl border p-6 ${qualityStyles[result.quality].bg} ${qualityStyles[result.quality].border}`}>
              <div className="flex items-center gap-3">
                <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${qualityStyles[result.quality].badge}`}>
                  {result.quality}
                </span>
                <span className={`text-[14px] font-semibold ${qualityStyles[result.quality].text}`}>
                  Content structure
                </span>
              </div>
            </div>

            {/* Detailed metrics */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <ToolResultCard label="Headings per 1K words" value={result.headingsPerKWords} />
              <ToolResultCard label="Avg words/paragraph" value={result.avgWordsPerParagraph} />
              <ToolResultCard label="Dense paragraphs" value={result.denseParagraphs} note="150+ words" />
            </div>

            {/* Issues */}
            {result.issues.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Structure checks</p>
                <div className="space-y-2">
                  {result.issues.map((issue, i) => (
                    <div key={i} className={`rounded-xl border px-5 py-3 text-[13px] ${severityStyles[issue.severity]}`}>
                      {issue.message}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {result.recommendations.length > 0 && (
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
            )}
          </div>
        </section>
      )}

      <ToolGuides toolId={TOOL_ID} />
      <ToolRelated currentToolId={TOOL_ID} />

      <ToolContextCTA toolId={TOOL_ID} />

      <ToolFAQ faqs={[
        { question: "What is content structure in SEO?", answer: "Content structure refers to how your page is organized using headings, paragraphs, lists, and sections. Good structure helps search engines understand your content and helps readers scan and navigate it quickly." },
        { question: "Does content structure affect rankings?", answer: "Indirectly, yes. Well-structured content improves user experience, reduces bounce rates, and increases engagement. These signals support better rankings. Google also uses headings to understand page topics." },
        { question: "How many headings should a blog post have?", answer: "For a 1,000 to 2,000 word post, aim for 4 to 8 H2 headings with H3 subheadings as needed. A good rule is one heading per 200 to 300 words. More important than the count is that headings create a logical, scannable outline." },
        { question: "Are short paragraphs better for SEO?", answer: "Short paragraphs (2 to 4 sentences) are better for web readability. On screens, especially mobile, they create visual breathing room and make content easier to scan. This improves engagement, which supports SEO." },
        { question: "Should blog posts include lists?", answer: "Yes, where appropriate. Bullet and numbered lists are easy to scan, improve readability, and can help your content appear in featured snippets. Use them for any content that can be enumerated." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
