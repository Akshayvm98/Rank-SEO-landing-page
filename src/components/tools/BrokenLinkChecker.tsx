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
import type { CheckedLink, LinkStatus } from "@/lib/tools/broken-link-check";

const TOOL_ID = "broken-link-checker";

const statusStyles: Record<LinkStatus, { bg: string; text: string; label: string }> = {
  valid: { bg: "bg-emerald-100", text: "text-emerald-700", label: "Valid" },
  redirected: { bg: "bg-blue-100", text: "text-blue-700", label: "Redirect" },
  broken: { bg: "bg-red-100", text: "text-red-700", label: "Broken" },
  unreachable: { bg: "bg-amber-100", text: "text-amber-700", label: "Unreachable" },
  ignored: { bg: "bg-gray-100", text: "text-gray-500", label: "Ignored" },
};

interface AnalysisResult {
  url: string;
  title: string;
  totalChecked: number;
  validCount: number;
  redirectedCount: number;
  brokenCount: number;
  unreachableCount: number;
  ignoredCount: number;
  brokenInternalCount: number;
  brokenExternalCount: number;
  brokenLinks: CheckedLink[];
  validLinks: CheckedLink[];
  redirectedLinks: CheckedLink[];
  unreachableLinks: CheckedLink[];
  ignoredLinks: CheckedLink[];
  insights: string[];
  recommendations: string[];
}

function LinkStatusTable({ links, title }: { links: CheckedLink[]; title: string }) {
  if (links.length === 0) return null;

  return (
    <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
        {title} ({links.length})
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-border-light text-left">
              <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">Anchor</th>
              <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">URL</th>
              <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">Type</th>
              <th className="pb-2 font-semibold text-muted-light text-[11px] uppercase tracking-wide text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {links.slice(0, 50).map((link, i) => {
              const style = statusStyles[link.status];
              return (
                <tr key={`${link.href}-${i}`} className="border-b border-border-light/50 last:border-0">
                  <td className="py-2.5 pr-3 font-medium text-foreground max-w-[160px] truncate">
                    {link.anchorText || <span className="text-muted italic">empty</span>}
                  </td>
                  <td className="py-2.5 pr-3 text-muted max-w-[260px] truncate">{link.href}</td>
                  <td className="py-2.5 pr-3">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${link.isInternal ? "bg-accent-bg text-accent" : "bg-gray-100 text-gray-500"}`}>
                      {link.isInternal ? "Internal" : "External"}
                    </span>
                  </td>
                  <td className="py-2.5 text-right">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${style.bg} ${style.text}`}>
                      {link.statusLabel}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {links.length > 50 && (
          <p className="mt-3 text-[12px] text-muted">Showing first 50 of {links.length} links.</p>
        )}
      </div>
    </div>
  );
}

export function BrokenLinkChecker() {
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
      const res = await fetch("/api/tools/broken-links", {
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
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, brokenCount: data.data.brokenCount });

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

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Broken Link Checker"
        subtitle="Find broken internal and external links on your page and fix SEO issues faster."
      />

      <ToolInput
        value={url}
        onChange={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        placeholder="https://example.com/page"
        buttonText="Check links"
      />

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {loading && <ToolLoading message="Checking links (this may take a moment)..." />}
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
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <ToolResultCard label="Links checked" value={result.totalChecked} />
              <ToolResultCard label="Broken" value={result.brokenCount} />
              <ToolResultCard label="Broken internal" value={result.brokenInternalCount} />
              <ToolResultCard label="Broken external" value={result.brokenExternalCount} />
              <ToolResultCard label="Valid" value={result.validCount} />
            </div>

            {/* Additional counts */}
            {(result.redirectedCount > 0 || result.unreachableCount > 0) && (
              <div className="mt-3 grid gap-3 grid-cols-2 sm:grid-cols-3">
                {result.redirectedCount > 0 && (
                  <ToolResultCard label="Redirected" value={result.redirectedCount} note="Update to final URL" />
                )}
                {result.unreachableCount > 0 && (
                  <ToolResultCard label="Unreachable" value={result.unreachableCount} note="Timeout or blocked" />
                )}
                {result.ignoredCount > 0 && (
                  <ToolResultCard label="Ignored" value={result.ignoredCount} note="mailto, tel, etc." />
                )}
              </div>
            )}

            {/* Broken links table */}
            <div className="mt-6">
              <LinkStatusTable links={result.brokenLinks} title="Broken links" />
            </div>

            {/* Unreachable links */}
            {result.unreachableLinks.length > 0 && (
              <div className="mt-4">
                <LinkStatusTable links={result.unreachableLinks} title="Unreachable links" />
              </div>
            )}

            {/* Redirected links */}
            {result.redirectedLinks.length > 0 && (
              <div className="mt-4">
                <LinkStatusTable links={result.redirectedLinks} title="Redirected links" />
              </div>
            )}

            {/* Valid links (collapsed) */}
            {result.validLinks.length > 0 && (
              <div className="mt-4">
                <details className="rounded-xl border border-black/[0.04] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <summary className="cursor-pointer px-5 py-4 text-[11px] font-medium uppercase tracking-wide text-muted-light hover:text-foreground transition-colors">
                    Valid links ({result.validLinks.length}) — click to expand
                  </summary>
                  <div className="px-5 pb-5">
                    <div className="overflow-x-auto">
                      <table className="w-full text-[13px]">
                        <tbody>
                          {result.validLinks.slice(0, 30).map((link, i) => (
                            <tr key={`${link.href}-${i}`} className="border-b border-border-light/50 last:border-0">
                              <td className="py-2 pr-3 font-medium text-foreground max-w-[200px] truncate">
                                {link.anchorText || <span className="text-muted italic">empty</span>}
                              </td>
                              <td className="py-2 text-muted max-w-[350px] truncate">{link.href}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {result.validLinks.length > 30 && (
                        <p className="mt-2 text-[12px] text-muted">Showing first 30 of {result.validLinks.length} valid links.</p>
                      )}
                    </div>
                  </div>
                </details>
              </div>
            )}

            {/* Insights */}
            {result.insights.length > 0 && (
              <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/30 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-blue-600 mb-3">
                  Insights
                </p>
                <ul className="space-y-2">
                  {result.insights.map((ins, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-blue-800 leading-[1.6]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {ins}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            {result.recommendations.length > 0 && (
              <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">
                  Recommendations
                </p>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, i) => (
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
            question: "What is a broken link?",
            answer:
              "A broken link is a hyperlink that points to a page that no longer exists or cannot be reached. They typically return 404 (Not Found) or 5xx (Server Error) status codes. Broken links create dead ends for both users and search engine crawlers.",
          },
          {
            question: "Do broken links hurt SEO?",
            answer:
              "Yes. Broken links waste crawl budget, hurt user experience, and can reduce trust signals. Broken internal links are especially harmful because they prevent Google from discovering and indexing your pages. Fixing broken links is one of the simplest SEO improvements you can make.",
          },
          {
            question: "Should I fix external broken links?",
            answer:
              "Yes, when practical. Broken external links hurt user experience even though they do not directly affect your site's authority. Replace them with working alternatives or remove them if no good replacement exists.",
          },
          {
            question: "How often should I check for broken links?",
            answer:
              "At least once per quarter for most sites. If you publish content frequently, check monthly. Broken links accumulate over time as external sites change and internal pages get renamed or deleted.",
          },
          {
            question: "What causes broken links?",
            answer:
              "Common causes include deleted or renamed pages, changed URL structures, expired external content, typos in URLs, and site migrations. Regular link audits catch these issues before they affect your SEO.",
          },
        ]}
      />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
