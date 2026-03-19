"use client";

import { useState } from "react";
import { Icon, Icons } from "@/components/ui/Icon";
import { ToolHero } from "./ToolHero";
import { ToolCTA } from "./ToolCTA";
import { ToolFAQ } from "./ToolFAQ";
import { GateModal } from "./GateModal";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import {
  scoreTitleLength,
  scoreMetaDescriptionLength,
  scoreUrlReadability,
  normalizePreviewUrl,
  generateSerpRecommendations,
} from "@/lib/tools/serp-scoring";
import type { LengthStatus } from "@/lib/tools/serp-scoring";
import type { GateDecision } from "@/lib/tools/types";

const TOOL_ID = "serp-preview-tool";

const statusColors: Record<LengthStatus, { bg: string; text: string }> = {
  missing: { bg: "bg-red-100", text: "text-red-700" },
  "too short": { bg: "bg-amber-100", text: "text-amber-700" },
  good: { bg: "bg-emerald-100", text: "text-emerald-700" },
  "too long": { bg: "bg-amber-100", text: "text-amber-700" },
};

export function SerpPreviewTool() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [fetchUrl, setFetchUrl] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  const titleScore = scoreTitleLength(title);
  const descScore = scoreMetaDescriptionLength(description);
  const urlScore = scoreUrlReadability(url);
  const displayUrl = normalizePreviewUrl(url);
  const recs = generateSerpRecommendations(title, description, url);

  const hasInput = title.trim() || description.trim() || url.trim();

  async function handleFetch() {
    if (!fetchUrl.trim()) return;
    setFetchLoading(true);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url: fetchUrl });

    try {
      const res = await fetch("/api/tools/meta-tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: fetchUrl.trim(), toolId: TOOL_ID }),
      });
      const data = await res.json();

      if (!data.success) {
        if (res.status === 429) {
          setGate(data.gate);
          setShowGateModal(true);
          trackToolEvent("gate_triggered", { toolId: TOOL_ID });
          return;
        }
        throw new Error(data.error);
      }

      // Populate fields from fetched data
      // title may be string or { value: string, assessment: object }
      const rawTitle = data.data.title;
      const titleStr = typeof rawTitle === "string" ? rawTitle : rawTitle?.value ?? "";
      if (titleStr) setTitle(titleStr);
      // description may be string or { value: string, assessment: object }
      const rawDesc = data.data.description ?? data.data.metaDescription;
      const descStr = typeof rawDesc === "string" ? rawDesc : rawDesc?.value ?? "";
      if (descStr) setDescription(descStr);
      setUrl(fetchUrl.trim());
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID });
    } catch {
      // Silently handle — user can still type manually
    } finally {
      setFetchLoading(false);
    }
  }

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="SERP Preview Tool"
        subtitle="Preview your title tag, meta description, and URL as they may appear in Google search results. Optimize before publishing."
      />

      {/* Fetch from URL */}
      <section className="py-2">
        <div className="mx-auto max-w-[680px] px-6">
          <div className="rounded-xl border border-border-light bg-surface p-4">
            <p className="text-[12px] font-semibold text-muted mb-2">Fetch from existing page (optional)</p>
            <form
              onSubmit={(e) => { e.preventDefault(); handleFetch(); }}
              className="flex gap-2"
            >
              <div className="relative flex-1">
                <Icon icon={Icons.globe} size="sm" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="url"
                  value={fetchUrl}
                  onChange={(e) => setFetchUrl(e.target.value)}
                  placeholder="https://example.com/page"
                  className="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-[13px] text-foreground placeholder:text-muted-light outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <button
                type="submit"
                disabled={fetchLoading}
                className="shrink-0 rounded-lg bg-accent px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
              >
                {fetchLoading ? "Fetching..." : "Fetch"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Manual input fields */}
      <section className="py-4">
        <div className="mx-auto max-w-[680px] px-6 space-y-3">
          <div>
            <label className="block text-[12px] font-semibold text-muted mb-1">
              Title tag <span className="font-normal text-muted-light">({title.length} / 60 chars)</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Your page title"
              maxLength={120}
              className="w-full rounded-xl border border-border bg-white py-3 px-4 text-[14px] text-foreground placeholder:text-muted-light outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <div>
            <label className="block text-[12px] font-semibold text-muted mb-1">
              Meta description <span className="font-normal text-muted-light">({description.length} / 155 chars)</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Your meta description"
              maxLength={300}
              rows={3}
              className="w-full rounded-xl border border-border bg-white py-3 px-4 text-[14px] text-foreground placeholder:text-muted-light outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
            />
          </div>
          <div>
            <label className="block text-[12px] font-semibold text-muted mb-1">
              URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/your-page"
              className="w-full rounded-xl border border-border bg-white py-3 px-4 text-[14px] text-foreground placeholder:text-muted-light outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>
        </div>
      </section>

      {/* Live SERP Preview */}
      <section className="py-6">
        <div className="mx-auto max-w-[680px] px-6">
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
            Google search preview
          </p>
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
            {/* Title */}
            <p
              className="text-[20px] leading-[1.3] font-normal cursor-pointer hover:underline"
              style={{ color: "#1a0dab", fontFamily: "Arial, sans-serif" }}
            >
              {title.trim()
                ? title.length > 60
                  ? title.slice(0, 57) + "..."
                  : title
                : "Page Title Will Appear Here"}
            </p>
            {/* URL */}
            <p
              className="mt-1 text-[14px]"
              style={{ color: "#006621", fontFamily: "Arial, sans-serif" }}
            >
              {displayUrl || "example.com"}
            </p>
            {/* Description */}
            <p
              className="mt-1 text-[14px] leading-[1.5]"
              style={{ color: "#545454", fontFamily: "Arial, sans-serif" }}
            >
              {description.trim()
                ? description.length > 155
                  ? description.slice(0, 152) + "..."
                  : description
                : "Your meta description will appear here. Write a compelling summary that encourages clicks from search results."}
            </p>
          </div>
        </div>
      </section>

      {/* Analysis cards */}
      {hasInput && (
        <section className="py-6">
          <div className="mx-auto max-w-[680px] px-6">
            <div className="grid gap-3 sm:grid-cols-3">
              {/* Title status */}
              <div className="rounded-xl border border-black/[0.04] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                  Title tag
                </p>
                <p className="mt-1 text-[18px] font-bold text-foreground">
                  {titleScore.length} chars
                </p>
                <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${statusColors[titleScore.status].bg} ${statusColors[titleScore.status].text}`}>
                  {titleScore.label}
                </span>
              </div>

              {/* Description status */}
              <div className="rounded-xl border border-black/[0.04] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                  Meta description
                </p>
                <p className="mt-1 text-[18px] font-bold text-foreground">
                  {descScore.length} chars
                </p>
                <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${statusColors[descScore.status].bg} ${statusColors[descScore.status].text}`}>
                  {descScore.label}
                </span>
              </div>

              {/* URL status */}
              <div className="rounded-xl border border-black/[0.04] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                  URL
                </p>
                <p className="mt-1 text-[14px] font-bold text-foreground truncate">
                  {displayUrl || "—"}
                </p>
                <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                  urlScore.status === "good"
                    ? "bg-emerald-100 text-emerald-700"
                    : urlScore.status === "acceptable"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {urlScore.label}
                </span>
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
              <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">
                Recommendations
              </p>
              <ul className="space-y-2">
                {recs.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-foreground leading-[1.6]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {rec.message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Related guides */}
      <section className="py-6">
        <div className="mx-auto max-w-[680px] px-6">
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
            Related SEO guides
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: "/seo-guide/on-page-seo/title-tags", label: "Title Tags Explained" },
              { href: "/seo-guide/content-seo/seo-introductions", label: "SEO-Friendly Introductions" },
              { href: "/seo-guide/on-page-seo/keyword-placement", label: "Keyword Placement Guide" },
              { href: "/seo-guide/seo-analytics/how-to-improve-ctr", label: "How to Improve CTR" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ToolCTA
        title="Want to optimize every page at scale?"
        description="RankSEO checks title tags, meta descriptions, and SERP appearance across your entire site automatically."
      />

      <ToolFAQ
        faqs={[
          {
            question: "What is a SERP preview tool?",
            answer:
              "A SERP preview tool shows you how your page may appear in Google search results. It lets you optimize your title tag, meta description, and URL before publishing to maximize click-through rate.",
          },
          {
            question: "What is the ideal title tag length?",
            answer:
              "Google typically displays 50 to 60 characters of a title tag. Aim for 30 to 60 characters. Titles longer than 60 characters may be truncated in search results.",
          },
          {
            question: "What is the ideal meta description length?",
            answer:
              "Google typically displays 120 to 155 characters of a meta description. Aim for 70 to 155 characters. Descriptions longer than 155 characters may be cut off.",
          },
          {
            question: "Does Google always show my meta description?",
            answer:
              "No. Google may generate its own snippet from page content if it determines the existing meta description does not match the search query well. Writing a clear, relevant description increases the chances Google uses it.",
          },
          {
            question: "Should my URL include keywords?",
            answer:
              "Including keywords in the URL slug can help, but it is a minor factor. More importantly, URLs should be short, readable, and descriptive. Avoid long parameter strings and unnecessary nesting.",
          },
        ]}
      />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
