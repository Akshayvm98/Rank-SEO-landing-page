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
import { assessAnchorQuality } from "@/lib/tools/link-analysis";
import type { PageLink, GateDecision } from "@/lib/tools/types";
import type { AnchorQuality } from "@/lib/tools/link-analysis";

const TOOL_ID = "anchor-text-analyzer";

const qualityStyles: Record<AnchorQuality, { bg: string; text: string; label: string }> = {
  good: { bg: "bg-emerald-100", text: "text-emerald-700", label: "Descriptive" },
  generic: { bg: "bg-amber-100", text: "text-amber-700", label: "Generic" },
  empty: { bg: "bg-red-100", text: "text-red-700", label: "Empty" },
};

interface AnchorProfile {
  totalLinks: number;
  internalCount: number;
  externalCount: number;
  uniqueAnchors: number;
  descriptiveCount: number;
  genericCount: number;
  emptyCount: number;
  repeatedAnchors: { text: string; count: number }[];
  insights: string[];
  recommendations: string[];
}

function analyzeAnchors(internal: PageLink[], external: PageLink[]): AnchorProfile {
  const all = [...internal, ...external];
  const anchorCounts = new Map<string, number>();
  let descriptiveCount = 0;
  let genericCount = 0;
  let emptyCount = 0;

  for (const link of all) {
    const quality = assessAnchorQuality(link.text);
    if (quality === "good") descriptiveCount++;
    else if (quality === "generic") genericCount++;
    else emptyCount++;

    const normalized = link.text.trim().toLowerCase();
    if (normalized) anchorCounts.set(normalized, (anchorCounts.get(normalized) ?? 0) + 1);
  }

  const repeated = Array.from(anchorCounts.entries())
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .map(([text, count]) => ({ text, count }));

  const uniqueAnchors = anchorCounts.size;

  // Insights
  const insights: string[] = [];
  if (emptyCount > 0) {
    insights.push(`${emptyCount} link${emptyCount === 1 ? " has" : "s have"} empty anchor text. Google gets no context from these.`);
  }
  if (genericCount > 3) {
    insights.push(`${genericCount} links use generic anchor text ('click here', 'read more'). These provide weak SEO signals.`);
  } else if (genericCount > 0) {
    insights.push(`${genericCount} generic anchor${genericCount === 1 ? "" : "s"} found. Try to use descriptive text instead.`);
  }
  if (descriptiveCount > all.length * 0.7 && all.length > 3) {
    insights.push("Most anchors are descriptive. Anchor text profile looks healthy.");
  }
  if (repeated.length > 0) {
    insights.push(`${repeated.length} anchor phrase${repeated.length === 1 ? "" : "s"} repeated 3+ times. Vary your anchor text for better signals.`);
  }
  if (insights.length === 0) {
    insights.push("Anchor text usage looks balanced with no major issues.");
  }

  // Recommendations
  const recommendations: string[] = [];
  if (emptyCount > 0) recommendations.push("Add descriptive anchor text to all links. Every link should tell users and Google where it goes.");
  if (genericCount > 2) recommendations.push("Replace generic anchors ('click here', 'read more') with descriptive phrases.");
  if (repeated.length > 0) recommendations.push("Vary repeated anchor text. Using the same phrase for every link looks unnatural.");
  if (recommendations.length === 0) recommendations.push("Anchor text profile looks good. Keep using descriptive, varied anchor text.");

  return {
    totalLinks: all.length,
    internalCount: internal.length,
    externalCount: external.length,
    uniqueAnchors,
    descriptiveCount,
    genericCount,
    emptyCount,
    repeatedAnchors: repeated,
    insights,
    recommendations,
  };
}

export function AnchorTextAnalyzer() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [links, setLinks] = useState<PageLink[] | null>(null);
  const [allLinks, setAllLinks] = useState<PageLink[]>([]);
  const [pageTitle, setPageTitle] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [profile, setProfile] = useState<AnchorProfile | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true); setError(null); setLinks(null); setProfile(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/analyze-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), toolId: TOOL_ID }),
      });
      const data = await res.json();

      if (!data.success) {
        if (res.status === 429) { setGate(data.gate); setShowGateModal(true); trackToolEvent("gate_triggered", { toolId: TOOL_ID }); return; }
        throw new Error(data.error || "Analysis failed");
      }

      const internal: PageLink[] = data.data.internalLinks;
      const external: PageLink[] = data.data.externalLinks;
      setLinks(internal);
      setAllLinks([...internal, ...external]);
      setPageTitle(data.data.title || data.data.url);
      setPageUrl(data.data.url);
      setProfile(analyzeAnchors(internal, external));
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      trackToolEvent("analysis_failed", { toolId: TOOL_ID });
    } finally { setLoading(false); }
  }

  return (
    <>
      <ToolHero badge="Free SEO Tool" title="Anchor Text Analyzer" subtitle="Analyze anchor text quality, link clarity, and internal linking signals for SEO." />

      <ToolInput value={url} onChange={setUrl} onSubmit={handleAnalyze} loading={loading} placeholder="https://example.com/page" buttonText="Analyze anchors" />

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {loading && <ToolLoading message="Analyzing anchor text..." />}
      {error && <ToolError message={error} onRetry={handleAnalyze} />}

      {profile && links && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Analyzed page</p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">{pageTitle}</h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{pageUrl}</p>
            </div>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <ToolResultCard label="Total links" value={profile.totalLinks} />
              <ToolResultCard label="Unique anchors" value={profile.uniqueAnchors} />
              <ToolResultCard label="Descriptive" value={profile.descriptiveCount} />
              <ToolResultCard label="Generic" value={profile.genericCount} />
              <ToolResultCard label="Empty" value={profile.emptyCount} />
            </div>

            {/* Quality breakdown */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/30 p-4 text-center">
                <p className="text-[22px] font-bold text-emerald-700">{profile.descriptiveCount}</p>
                <p className="text-[12px] text-emerald-600 font-medium">Descriptive</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-4 text-center">
                <p className="text-[22px] font-bold text-amber-700">{profile.genericCount}</p>
                <p className="text-[12px] text-amber-600 font-medium">Generic</p>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50/30 p-4 text-center">
                <p className="text-[22px] font-bold text-red-700">{profile.emptyCount}</p>
                <p className="text-[12px] text-red-600 font-medium">Empty</p>
              </div>
            </div>

            {/* Repeated anchors */}
            {profile.repeatedAnchors.length > 0 && (
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/30 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-amber-600 mb-3">Repeated anchor text (3+)</p>
                <div className="space-y-1.5">
                  {profile.repeatedAnchors.map((a) => (
                    <div key={a.text} className="flex justify-between text-[13px] text-amber-800">
                      <span>&ldquo;{a.text}&rdquo;</span>
                      <span className="font-bold">{a.count}x</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Anchor text table */}
            <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Anchor text details ({allLinks.length})</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-border-light text-left">
                      <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">Anchor</th>
                      <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">URL</th>
                      <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">Type</th>
                      <th className="pb-2 font-semibold text-muted-light text-[11px] uppercase tracking-wide text-right">Quality</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allLinks.slice(0, 50).map((link, i) => {
                      const q = assessAnchorQuality(link.text);
                      const s = qualityStyles[q];
                      return (
                        <tr key={`${link.href}-${i}`} className="border-b border-border-light/50 last:border-0">
                          <td className="py-2.5 pr-3 font-medium text-foreground max-w-[180px] truncate">{link.text || <span className="text-red-500 italic">empty</span>}</td>
                          <td className="py-2.5 pr-3 text-muted max-w-[250px] truncate">{link.href}</td>
                          <td className="py-2.5 pr-3"><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${link.isInternal ? "bg-accent-bg text-accent" : "bg-gray-100 text-gray-500"}`}>{link.isInternal ? "Internal" : "External"}</span></td>
                          <td className="py-2.5 text-right"><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${s.bg} ${s.text}`}>{s.label}</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {allLinks.length > 50 && <p className="mt-3 text-[12px] text-muted">Showing first 50 of {allLinks.length} links.</p>}
              </div>
            </div>

            {/* Insights */}
            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/30 p-5">
              <p className="text-[11px] font-medium uppercase tracking-wide text-blue-600 mb-3">Insights</p>
              <ul className="space-y-2">{profile.insights.map((ins, i) => (<li key={i} className="flex items-start gap-2 text-[13px] text-blue-800 leading-[1.6]"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />{ins}</li>))}</ul>
            </div>

            {/* Recommendations */}
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
              <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">Recommendations</p>
              <ul className="space-y-2">{profile.recommendations.map((rec, i) => (<li key={i} className="flex items-start gap-2 text-[13px] text-foreground leading-[1.6]"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{rec}</li>))}</ul>
            </div>
          </div>
        </section>
      )}

      <ToolGuides toolId={TOOL_ID} />
      <ToolRelated currentToolId={TOOL_ID} />

      <ToolContextCTA toolId={TOOL_ID} />

      <ToolFAQ faqs={[
        { question: "What is anchor text?", answer: "Anchor text is the visible, clickable text in a hyperlink. It tells users and search engines what the linked page is about. Descriptive anchor text is better for SEO than generic phrases like 'click here'." },
        { question: "Does anchor text matter for SEO?", answer: "Yes. Google uses anchor text to understand the context and topic of the linked page. Descriptive anchor text reinforces relevance, while generic or empty anchors waste that opportunity." },
        { question: "What is good anchor text?", answer: "Good anchor text is descriptive, concise (2 to 5 words), and accurately describes the linked page. 'Our keyword research guide' is better than 'click here' because it tells Google and users what to expect." },
        { question: "Is 'click here' bad for SEO?", answer: "From an SEO perspective, yes. 'Click here' provides no context about the linked page. Google cannot use it to understand relationships between pages. Replace it with descriptive text whenever possible." },
        { question: "How do I optimize internal link anchors?", answer: "Use descriptive phrases that include relevant keywords naturally. Vary anchor text across links to the same page. Avoid repeating the exact same anchor. Make every anchor useful to the reader." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
