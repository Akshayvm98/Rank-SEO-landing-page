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
import type { AltStatus, AltTextSummary } from "@/lib/tools/image-alt-analysis";

const TOOL_ID = "image-alt-text-checker";

const statusStyles: Record<AltStatus, { bg: string; text: string; label: string }> = {
  descriptive: { bg: "bg-emerald-100", text: "text-emerald-700", label: "Descriptive" },
  generic: { bg: "bg-amber-100", text: "text-amber-700", label: "Generic" },
  empty: { bg: "bg-amber-100", text: "text-amber-700", label: "Empty" },
  missing: { bg: "bg-red-100", text: "text-red-700", label: "Missing" },
  duplicate: { bg: "bg-blue-100", text: "text-blue-700", label: "Duplicate" },
};

type Result = AltTextSummary & { url: string; title: string };

export function ImageAltTextChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true); setError(null); setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });
    try {
      const res = await fetch("/api/tools/image-alt", {
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
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, totalImages: data.data.totalImages });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally { setLoading(false); }
  }

  return (
    <>
      <ToolHero badge="Free SEO Tool" title="Image Alt Text Checker" subtitle="Check whether images on your page have useful alt text for accessibility and SEO." />
      <ToolInput value={url} onChange={setUrl} onSubmit={handleAnalyze} loading={loading} placeholder="https://example.com/page" buttonText="Check images" />
      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />
      {loading && <ToolLoading message="Checking image alt text..." />}
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
              <ToolResultCard label="Total images" value={result.totalImages} />
              <ToolResultCard label="With alt text" value={result.withAlt} />
              <ToolResultCard label="Missing alt" value={result.missingAlt} />
              <ToolResultCard label="Empty alt" value={result.emptyAlt} />
              <ToolResultCard label="Duplicate alt" value={result.duplicateAltCount} />
            </div>

            {/* Quality breakdown */}
            <div className="mt-6 grid gap-3 sm:grid-cols-5">
              {([
                { label: "Descriptive", count: result.descriptiveAlt, color: "emerald" },
                { label: "Generic", count: result.genericAlt, color: "amber" },
                { label: "Empty", count: result.emptyAlt, color: "amber" },
                { label: "Missing", count: result.missingAlt, color: "red" },
                { label: "Duplicate", count: result.duplicateAltCount, color: "blue" },
              ] as const).map((item) => (
                <div key={item.label} className={`rounded-xl border border-${item.color}-200 bg-${item.color}-50/30 p-3 text-center`}>
                  <p className={`text-[20px] font-bold text-${item.color}-700`}>{item.count}</p>
                  <p className={`text-[11px] font-medium text-${item.color}-600`}>{item.label}</p>
                </div>
              ))}
            </div>

            {/* Image table */}
            {result.images.length > 0 && (
              <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Image details ({result.images.length})</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="border-b border-border-light text-left">
                        <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">Image source</th>
                        <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">Alt text</th>
                        <th className="pb-2 font-semibold text-muted-light text-[11px] uppercase tracking-wide text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.images.slice(0, 50).map((img, i) => {
                        const s = statusStyles[img.altStatus];
                        return (
                          <tr key={`${img.src}-${i}`} className="border-b border-border-light/50 last:border-0">
                            <td className="py-2.5 pr-3 text-muted max-w-[250px] truncate font-mono text-[12px]">{img.src}</td>
                            <td className="py-2.5 pr-3 font-medium text-foreground max-w-[200px] truncate">
                              {img.alt === null ? <span className="text-red-500 italic">no alt attribute</span> : img.alt === "" ? <span className="text-amber-500 italic">empty</span> : img.alt}
                            </td>
                            <td className="py-2.5 text-right">
                              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${s.bg} ${s.text}`}>{s.label}</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {result.images.length > 50 && <p className="mt-3 text-[12px] text-muted">Showing first 50 of {result.images.length} images.</p>}
                </div>
              </div>
            )}

            {/* Findings */}
            <div className="mt-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Findings</p>
              <div className="space-y-2">{result.findings.map((f, i) => (
                <div key={i} className={`rounded-xl border px-5 py-3 text-[13px] ${f.severity === "good" ? "border-emerald-200 bg-emerald-50/30 text-emerald-700" : f.severity === "warning" ? "border-amber-200 bg-amber-50/30 text-amber-700" : "border-red-200 bg-red-50/30 text-red-700"}`}>{f.message}</div>
              ))}</div>
            </div>

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
        { question: "What is alt text?", answer: "Alt text (alternative text) is an HTML attribute that describes the content of an image. It is used by screen readers for accessibility and by search engines to understand what an image shows. It also appears when an image fails to load." },
        { question: "Does alt text matter for SEO?", answer: "Yes. Alt text helps Google understand your images, which supports image search rankings and provides context for the page content. It is also essential for web accessibility, which indirectly supports user experience signals." },
        { question: "Should every image have alt text?", answer: "Content images should always have descriptive alt text. Purely decorative images (borders, spacers) can use empty alt text (alt='') to indicate they should be ignored by screen readers. Never omit the alt attribute entirely." },
        { question: "Can empty alt text be valid?", answer: "Yes, for decorative images. Setting alt='' (empty string) tells screen readers to skip the image. This is appropriate for visual decorations that do not convey content. But informative images should always have descriptive alt text." },
        { question: "How do I write good alt text?", answer: "Describe what the image shows in 5 to 15 words. Be specific and concise. Include relevant keywords naturally but do not stuff keywords. Write as if you are describing the image to someone who cannot see it." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
