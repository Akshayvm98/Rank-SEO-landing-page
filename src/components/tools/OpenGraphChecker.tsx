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
import type { GateDecision } from "@/lib/tools/types";

const TOOL_ID = "open-graph-checker";

const OG_FIELDS = ["og:title", "og:description", "og:image", "og:url", "og:type", "og:site_name", "og:locale"] as const;
const PRIMARY_FIELDS = ["og:title", "og:description", "og:image", "og:url"] as const;

function analyzeOg(ogTags: Record<string, string>) {
  const findings: { severity: "good" | "warning"; message: string }[] = [];
  const recommendations: string[] = [];
  const present = Object.keys(ogTags).length;

  if (present === 0) {
    findings.push({ severity: "warning", message: "No Open Graph tags found. Social shares will use generic title and description." });
    recommendations.push("Add Open Graph tags (og:title, og:description, og:image, og:url) for better social sharing previews.");
    return { status: "missing" as const, findings, recommendations };
  }

  let missingPrimary = 0;
  for (const field of PRIMARY_FIELDS) {
    if (!ogTags[field]) {
      missingPrimary++;
      findings.push({ severity: "warning", message: `${field} is missing.` });
      recommendations.push(`Add ${field} for better social sharing previews.`);
    } else {
      findings.push({ severity: "good", message: `${field} is set.` });
    }
  }

  if (!ogTags["og:image"]) {
    recommendations.push("Add an og:image. Social posts without images get significantly less engagement.");
  }

  if (ogTags["og:image"] && !ogTags["og:image"].startsWith("http")) {
    findings.push({ severity: "warning", message: "og:image uses a relative URL. Use an absolute URL for compatibility." });
    recommendations.push("Change og:image to an absolute URL (starting with https://).");
  }

  const status = missingPrimary === 0 ? "complete" : missingPrimary <= 2 ? "partial" : "weak";

  if (recommendations.length === 0) {
    recommendations.push("Open Graph setup looks complete. Test sharing on Facebook and LinkedIn to verify.");
  }

  return { status: status as "complete" | "partial" | "weak", findings, recommendations };
}

export function OpenGraphChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ogTags, setOgTags] = useState<Record<string, string> | null>(null);
  const [pageTitle, setPageTitle] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true); setError(null); setOgTags(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });
    try {
      const res = await fetch("/api/tools/meta-tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), toolId: TOOL_ID }),
      });
      const data = await res.json();
      if (!data.success) {
        if (res.status === 429) { setGate(data.gate); setShowGateModal(true); return; }
        throw new Error(data.error || "Analysis failed");
      }
      // API returns openGraph with unprefixed keys (title, description, image)
      // Re-prefix them to og:title, og:description, og:image for the UI
      const rawOg: Record<string, string> = data.data.openGraph ?? {};
      const prefixed: Record<string, string> = {};
      for (const [key, val] of Object.entries(rawOg)) {
        prefixed[key.startsWith("og:") ? key : `og:${key}`] = val;
      }
      setOgTags(prefixed);
      // title may be a string or { value: string } depending on API
      const rawTitle = data.data.title;
      const titleStr = typeof rawTitle === "string" ? rawTitle : rawTitle?.value ?? "";
      setPageTitle(titleStr || data.data.url || "");
      setPageUrl(data.data.url ?? "");
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally { setLoading(false); }
  }

  const analysis = ogTags ? analyzeOg(ogTags) : null;

  const statusBadge: Record<string, { bg: string; text: string }> = {
    complete: { bg: "bg-emerald-100", text: "text-emerald-700" },
    partial: { bg: "bg-amber-100", text: "text-amber-700" },
    weak: { bg: "bg-red-100", text: "text-red-700" },
    missing: { bg: "bg-red-100", text: "text-red-700" },
  };

  return (
    <>
      <ToolHero badge="Free SEO Tool" title="Open Graph Checker" subtitle="Check whether your page has the right Open Graph tags for better social sharing previews." />
      <ToolInput value={url} onChange={setUrl} onSubmit={handleAnalyze} loading={loading} placeholder="https://example.com/page" buttonText="Check OG tags" />
      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />
      {error && <div className="mx-auto max-w-[680px] px-6 py-4"><div className="rounded-xl border border-red-200 bg-red-50/40 px-5 py-3 text-[14px] text-red-700">{error}</div></div>}

      {ogTags && analysis && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Analyzed page</p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">{pageTitle}</h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{pageUrl}</p>
            </div>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-5">
              <ToolResultCard label="OG Status" value={analysis.status} />
              <ToolResultCard label="og:title" value={ogTags["og:title"] ? "Set" : "Missing"} />
              <ToolResultCard label="og:description" value={ogTags["og:description"] ? "Set" : "Missing"} />
              <ToolResultCard label="og:image" value={ogTags["og:image"] ? "Set" : "Missing"} />
              <ToolResultCard label="og:url" value={ogTags["og:url"] ? "Set" : "Missing"} />
            </div>

            {/* Social preview */}
            <div className="mt-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Social preview</p>
              <div className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
                {ogTags["og:image"] ? (
                  <div className="w-full h-48 bg-border-light flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ogTags["og:image"]} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                ) : (
                  <div className="w-full h-32 bg-border-light flex items-center justify-center">
                    <p className="text-[13px] text-muted">No og:image set</p>
                  </div>
                )}
                <div className="p-4">
                  <p className="text-[11px] text-muted uppercase">{ogTags["og:site_name"] || (() => { try { return new URL(pageUrl).hostname; } catch { return pageUrl; } })()}</p>
                  <p className="mt-1 text-[15px] font-bold text-foreground leading-snug">{ogTags["og:title"] || pageTitle || "No og:title"}</p>
                  <p className="mt-1 text-[13px] text-muted leading-snug line-clamp-2">{ogTags["og:description"] || "No og:description"}</p>
                </div>
              </div>
            </div>

            {/* OG fields */}
            <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Open Graph tags</p>
              <div className="space-y-2">
                {OG_FIELDS.map((field) => (
                  <div key={field} className="flex items-start gap-3 rounded-lg border border-border-light p-3">
                    <span className="shrink-0 text-[12px] font-bold text-muted w-28">{field}</span>
                    <span className="text-[13px] text-foreground flex-1 break-all">{ogTags[field] || <span className="text-muted italic">not set</span>}</span>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${ogTags[field] ? "bg-emerald-100 text-emerald-700" : PRIMARY_FIELDS.includes(field as typeof PRIMARY_FIELDS[number]) ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-500"}`}>
                      {ogTags[field] ? "Set" : "Missing"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Findings */}
            <div className="mt-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Findings</p>
              <div className="space-y-2">{analysis.findings.map((f, i) => (
                <div key={i} className={`rounded-xl border px-5 py-3 text-[13px] ${f.severity === "good" ? "border-emerald-200 bg-emerald-50/30 text-emerald-700" : "border-amber-200 bg-amber-50/30 text-amber-700"}`}>{f.message}</div>
              ))}</div>
            </div>

            {/* Recommendations */}
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
              <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">Recommendations</p>
              <ul className="space-y-2">{analysis.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-foreground leading-[1.6]"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{rec}</li>
              ))}</ul>
            </div>
          </div>
        </section>
      )}

      <section className="py-6"><div className="mx-auto max-w-[680px] px-6">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Related SEO guides</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { href: "/seo-guide/on-page-seo/title-tags", label: "Title Tags Explained" },
            { href: "/seo-guide/seo-analytics/how-to-improve-ctr", label: "How to Improve CTR" },
            { href: "/seo-guide/on-page-seo/keyword-placement", label: "Keyword Placement Guide" },
            { href: "/seo-guide/content-seo/seo-introductions", label: "SEO-Friendly Introductions" },
          ].map((link) => (<a key={link.href} href={link.href} className="flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{link.label}</a>))}
        </div>
      </div></section>

      <ToolCTA title="Want Open Graph checks across your site?" description="RankSEO audits meta tags, Open Graph, and social sharing readiness across every page." />

      <ToolFAQ faqs={[
        { question: "What are Open Graph tags?", answer: "Open Graph tags are meta tags that control how your page appears when shared on social platforms like Facebook, LinkedIn, and others. They define the title, description, image, and URL shown in the social preview." },
        { question: "Do Open Graph tags affect SEO?", answer: "Open Graph tags do not directly affect search rankings. However, they affect how your content appears on social media, which can drive traffic and engagement. Better social previews lead to more clicks and shares." },
        { question: "Why is og:image important?", answer: "Posts with images get significantly more engagement on social platforms. Without og:image, social platforms may show no image or pick a random one from your page. Set og:image to a compelling, relevant image." },
        { question: "What is the difference between title tag and og:title?", answer: "The title tag appears in Google search results and browser tabs. og:title appears in social sharing previews. They can be different. Many sites use the same value for both, but you can optimize each separately." },
        { question: "How do I add Open Graph tags?", answer: "Add meta tags with property='og:...' in your page's <head> section. Most CMS platforms and SEO plugins support Open Graph tags. At minimum, set og:title, og:description, og:image, and og:url." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
