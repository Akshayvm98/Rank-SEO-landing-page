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
import { assessAnchorQuality, summarizeLinkProfile } from "@/lib/tools/link-analysis";
import type { PageLink, GateDecision } from "@/lib/tools/types";
import type { AnchorQuality } from "@/lib/tools/link-analysis";

const TOOL_ID = "internal-link-checker";

const qualityStyles: Record<AnchorQuality, { bg: string; text: string; label: string }> = {
  good: { bg: "bg-emerald-100", text: "text-emerald-700", label: "Good" },
  generic: { bg: "bg-amber-100", text: "text-amber-700", label: "Generic" },
  empty: { bg: "bg-red-100", text: "text-red-700", label: "Empty" },
};

function LinkTable({ links, label }: { links: PageLink[]; label: string }) {
  if (links.length === 0) {
    return (
      <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
          {label}
        </p>
        <p className="text-[14px] text-muted">No {label.toLowerCase()} found on this page.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
        {label} ({links.length})
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-border-light text-left">
              <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">Anchor text</th>
              <th className="pb-2 pr-3 font-semibold text-muted-light text-[11px] uppercase tracking-wide">Destination</th>
              <th className="pb-2 font-semibold text-muted-light text-[11px] uppercase tracking-wide text-right">Anchor quality</th>
            </tr>
          </thead>
          <tbody>
            {links.slice(0, 50).map((link, i) => {
              const quality = assessAnchorQuality(link.text);
              const style = qualityStyles[quality];
              return (
                <tr key={`${link.href}-${i}`} className="border-b border-border-light/50 last:border-0">
                  <td className="py-2.5 pr-3 font-medium text-foreground max-w-[200px] truncate">
                    {link.text || <span className="text-red-500 italic">empty</span>}
                  </td>
                  <td className="py-2.5 pr-3 text-muted max-w-[280px] truncate">
                    {link.href}
                  </td>
                  <td className="py-2.5 text-right">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${style.bg} ${style.text}`}>
                      {style.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {links.length > 50 && (
          <p className="mt-3 text-[12px] text-muted">
            Showing first 50 of {links.length} links.
          </p>
        )}
      </div>
    </div>
  );
}

export function InternalLinkChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [internalLinks, setInternalLinks] = useState<PageLink[] | null>(null);
  const [externalLinks, setExternalLinks] = useState<PageLink[] | null>(null);
  const [pageTitle, setPageTitle] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setInternalLinks(null);
    setExternalLinks(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/analyze-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), toolId: TOOL_ID }),
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

      setInternalLinks(data.data.internalLinks);
      setExternalLinks(data.data.externalLinks);
      setPageTitle(data.data.title || data.data.url);
      setPageUrl(data.data.url);
      setGate(data.gate);
      trackToolEvent("analysis_completed", {
        toolId: TOOL_ID,
        internalLinks: data.data.internalLinkCount,
        externalLinks: data.data.externalLinkCount,
      });

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

  const profile =
    internalLinks && externalLinks
      ? summarizeLinkProfile(internalLinks, externalLinks)
      : null;

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Internal Link Checker"
        subtitle="Analyze internal links, anchor text quality, and page linking balance for better SEO."
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

      {loading && <ToolLoading message="Checking internal links..." />}
      {error && <ToolError message={error} onRetry={handleAnalyze} />}

      {profile && internalLinks && externalLinks && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Page info */}
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                Analyzed page
              </p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">
                {pageTitle}
              </h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{pageUrl}</p>
            </div>

            {/* Overview cards */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <ToolResultCard label="Total links" value={profile.totalLinks} />
              <ToolResultCard label="Internal links" value={profile.internalCount} />
              <ToolResultCard label="External links" value={profile.externalCount} />
              <ToolResultCard label="Unique internal" value={profile.uniqueInternalCount} />
              <ToolResultCard label="Unique external" value={profile.uniqueExternalCount} />
            </div>

            {/* Anchor quality summary */}
            {(profile.emptyAnchorCount > 0 || profile.genericAnchorCount > 0) && (
              <div className="mt-4 grid gap-3 grid-cols-2">
                <ToolResultCard
                  label="Empty anchors"
                  value={profile.emptyAnchorCount}
                  note="Links with no clickable text"
                />
                <ToolResultCard
                  label="Generic anchors"
                  value={profile.genericAnchorCount}
                  note="'click here', 'read more', etc."
                />
              </div>
            )}

            {/* Internal links table */}
            <div className="mt-6">
              <LinkTable links={internalLinks} label="Internal links" />
            </div>

            {/* External links table */}
            <div className="mt-6">
              <LinkTable links={externalLinks} label="External links" />
            </div>

            {/* Insights */}
            {profile.insights.length > 0 && (
              <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/30 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-blue-600 mb-3">
                  Insights
                </p>
                <ul className="space-y-2">
                  {profile.insights.map((ins, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-blue-800 leading-[1.6]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {ins}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            {profile.recommendations.length > 0 && (
              <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">
                  Recommendations
                </p>
                <ul className="space-y-2">
                  {profile.recommendations.map((rec, i) => (
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
            question: "What is an internal link?",
            answer:
              "An internal link is a hyperlink that connects one page on your website to another page on the same website. Internal links help users navigate and help search engines understand your site structure and content relationships.",
          },
          {
            question: "Do internal links help SEO?",
            answer:
              "Yes. Internal links help Google discover and index pages, understand topic relationships, and distribute ranking authority across your site. Pages with more relevant internal links tend to rank better than isolated pages.",
          },
          {
            question: "How many internal links should a page have?",
            answer:
              "There is no strict number, but 3 to 10 contextual internal links per content page is a good range. The right number depends on content length and how many relevant pages you can link to naturally.",
          },
          {
            question: "What is good anchor text?",
            answer:
              "Good anchor text is descriptive and tells users and search engines what the linked page is about. 'Our keyword research guide' is descriptive. 'Click here' is generic and provides no context.",
          },
          {
            question: "Are external links bad for SEO?",
            answer:
              "No. External links to authoritative sources can actually support your content's credibility. The issue is when external links greatly outnumber internal links or when you link to low-quality sites. A healthy balance of internal and external links is ideal.",
          },
        ]}
      />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
