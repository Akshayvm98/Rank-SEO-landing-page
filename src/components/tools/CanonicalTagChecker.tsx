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

const TOOL_ID = "canonical-tag-checker";

type CanonicalStatus = "self-referencing" | "different page" | "cross-domain" | "missing" | "multiple" | "invalid";

const statusStyles: Record<CanonicalStatus, { bg: string; text: string }> = {
  "self-referencing": { bg: "bg-emerald-100", text: "text-emerald-700" },
  "different page": { bg: "bg-blue-100", text: "text-blue-700" },
  "cross-domain": { bg: "bg-amber-100", text: "text-amber-700" },
  missing: { bg: "bg-red-100", text: "text-red-700" },
  multiple: { bg: "bg-red-100", text: "text-red-700" },
  invalid: { bg: "bg-red-100", text: "text-red-700" },
};

function normalizeForComparison(url: string): string {
  try {
    const u = new URL(url);
    return `${u.protocol}//${u.hostname}${u.pathname.replace(/\/$/, "")}`.toLowerCase();
  } catch { return url.toLowerCase().replace(/\/$/, ""); }
}

function analyzeCanonical(pageUrl: string, canonical: string | null, canonicalCount: number) {
  const findings: { severity: "good" | "warning" | "problem"; message: string }[] = [];
  const recommendations: string[] = [];

  if (!canonical || canonicalCount === 0) {
    return {
      status: "missing" as CanonicalStatus,
      canonicalUrl: null,
      canonicalCount: 0,
      findings: [{ severity: "warning" as const, message: "No canonical tag found on this page." }],
      recommendations: ["Add a canonical tag pointing to the preferred version of this URL.", "Use an absolute URL in the canonical tag (include https:// and the full domain)."],
    };
  }

  if (canonicalCount > 1) {
    findings.push({ severity: "problem", message: `${canonicalCount} canonical tags found. Only one canonical tag should exist per page.` });
    recommendations.push("Remove duplicate canonical tags. Keep only one with the correct URL.");
  }

  // Check if it's a valid URL
  let canonicalUrl: URL;
  try {
    canonicalUrl = new URL(canonical, pageUrl);
  } catch {
    return {
      status: "invalid" as CanonicalStatus,
      canonicalUrl: canonical,
      canonicalCount,
      findings: [{ severity: "problem" as const, message: `Canonical tag contains an invalid URL: "${canonical}"` }],
      recommendations: ["Fix the canonical tag to contain a valid absolute URL."],
    };
  }

  const isRelative = !canonical.startsWith("http");
  if (isRelative) {
    findings.push({ severity: "warning", message: "Canonical tag uses a relative URL. Absolute URLs are recommended." });
    recommendations.push("Change the canonical to an absolute URL (include https:// and domain).");
  }

  // Compare
  const normalizedPage = normalizeForComparison(pageUrl);
  const normalizedCanonical = normalizeForComparison(canonicalUrl.toString());

  let pageHostname: string;
  let canonicalHostname: string;
  try { pageHostname = new URL(pageUrl).hostname; } catch { pageHostname = ""; }
  try { canonicalHostname = canonicalUrl.hostname; } catch { canonicalHostname = ""; }

  let status: CanonicalStatus;

  if (normalizedPage === normalizedCanonical) {
    status = canonicalCount > 1 ? "multiple" : "self-referencing";
    if (canonicalCount <= 1) {
      findings.push({ severity: "good", message: "Canonical tag is self-referencing. This is the recommended setup." });
    }
  } else if (pageHostname !== canonicalHostname) {
    status = "cross-domain";
    findings.push({ severity: "warning", message: `Canonical points to a different domain (${canonicalHostname}). This is valid for cross-domain canonicalization but verify it is intentional.` });
    recommendations.push("Verify this cross-domain canonical is intentional. It tells Google the other domain has the preferred version.");
  } else {
    status = "different page";
    findings.push({ severity: "warning", message: "Canonical points to a different page on the same domain." });
    recommendations.push("Verify this canonical is correct. If this page should be indexed on its own, the canonical should point to itself.");
  }

  // Protocol mismatch
  try {
    const pageProto = new URL(pageUrl).protocol;
    if (pageProto !== canonicalUrl.protocol) {
      findings.push({ severity: "warning", message: `Protocol mismatch: page uses ${pageProto} but canonical uses ${canonicalUrl.protocol}.` });
      recommendations.push("Ensure the canonical URL uses the same protocol (https) as the page.");
    }
  } catch { /* skip */ }

  if (findings.filter((f) => f.severity === "good").length > 0 && recommendations.length === 0) {
    recommendations.push("Canonical tag looks correctly configured.");
  }

  return { status, canonicalUrl: canonicalUrl.toString(), canonicalCount, findings, recommendations };
}

export function CanonicalTagChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ReturnType<typeof analyzeCanonical> | null>(null);
  const [pageUrl, setPageUrl] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true); setError(null); setResult(null);
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
      setPageUrl(data.data.url ?? "");
      const rawTitle = data.data.title;
      setPageTitle((typeof rawTitle === "string" ? rawTitle : rawTitle?.value ?? "") || data.data.url || "");
      const canonical = data.data.canonical ?? null;
      const canonicalCount = data.data.canonicalCount ?? (canonical ? 1 : 0);
      setResult(analyzeCanonical(data.data.url, canonical, canonicalCount));
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally { setLoading(false); }
  }

  const severityStyles: Record<string, string> = {
    good: "border-emerald-200 bg-emerald-50/30 text-emerald-700",
    warning: "border-amber-200 bg-amber-50/30 text-amber-700",
    problem: "border-red-200 bg-red-50/30 text-red-700",
  };

  return (
    <>
      <ToolHero badge="Free SEO Tool" title="Canonical Tag Checker" subtitle="Check whether your page has a canonical tag and whether it points to the right URL." />
      <ToolInput value={url} onChange={setUrl} onSubmit={handleAnalyze} loading={loading} placeholder="https://example.com/page" buttonText="Check canonical" />
      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />
      {error && <div className="mx-auto max-w-[680px] px-6 py-4"><div className="rounded-xl border border-red-200 bg-red-50/40 px-5 py-3 text-[14px] text-red-700">{error}</div></div>}

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Analyzed page</p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">{pageTitle}</h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{pageUrl}</p>
            </div>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
              <ToolResultCard label="Canonical found" value={result.status === "missing" ? "No" : "Yes"} />
              <ToolResultCard label="Status" value={result.status} />
              <ToolResultCard label="Tags found" value={result.canonicalCount} />
              <ToolResultCard label="Canonical URL" value={result.canonicalUrl ? "Set" : "None"} note={result.canonicalUrl ? (result.canonicalUrl.length > 40 ? result.canonicalUrl.slice(0, 37) + "..." : result.canonicalUrl) : undefined} />
            </div>

            {/* Status card */}
            <div className={`mt-6 rounded-2xl border p-6 ${statusStyles[result.status].bg.replace("100", "50/40")} border-${result.status === "self-referencing" ? "emerald" : result.status === "different page" ? "blue" : result.status === "cross-domain" ? "amber" : "red"}-200`}>
              <div className="flex items-center gap-3">
                <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${statusStyles[result.status].bg} ${statusStyles[result.status].text}`}>
                  {result.status}
                </span>
              </div>
              {result.canonicalUrl && (
                <p className="mt-3 text-[13px] text-foreground font-mono truncate">{result.canonicalUrl}</p>
              )}
            </div>

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

      <section className="py-6"><div className="mx-auto max-w-[680px] px-6">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Related SEO guides</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { href: "/seo-guide/technical-seo", label: "Technical SEO Guide" },
            { href: "/seo-guide/technical-seo/why-pages-are-not-indexed", label: "Why Pages Are Not Indexed" },
            { href: "/seo-guide/technical-seo/discovered-not-indexed", label: "Discovered but Not Indexed" },
            { href: "/seo-guide/on-page-seo/title-tags", label: "Title Tags Explained" },
          ].map((link) => (<a key={link.href} href={link.href} className="flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{link.label}</a>))}
        </div>
      </div></section>

      <ToolCTA title="Want canonical checks across your site?" description="RankSEO audits canonical tags, redirects, and indexing signals across every page." />

      <ToolFAQ faqs={[
        { question: "What is a canonical tag?", answer: "A canonical tag (rel='canonical') tells search engines which version of a page is the preferred one. It helps prevent duplicate content issues when similar or identical content exists at multiple URLs." },
        { question: "Do all pages need canonical tags?", answer: "It is best practice to include a self-referencing canonical on every page. This clearly tells search engines which URL is the preferred version, even when no duplicates exist." },
        { question: "Should canonical point to itself?", answer: "Yes, in most cases. A self-referencing canonical is the standard setup. It explicitly tells Google that this URL is the canonical version. Only point to a different URL if you intentionally want to consolidate pages." },
        { question: "Can canonical tags affect SEO?", answer: "Yes. Canonical tags affect how Google handles duplicate content, which URL gets indexed, and how ranking signals are consolidated. Incorrect canonical tags can prevent pages from being indexed." },
        { question: "What if multiple canonical tags exist?", answer: "Only one canonical tag should exist per page. Multiple tags create confusion and Google may ignore them entirely. Check your template code for duplicate injections." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
