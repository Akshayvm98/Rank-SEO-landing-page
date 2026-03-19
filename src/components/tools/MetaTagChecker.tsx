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

const TOOL_ID = "meta-tag-checker";

// ---------------------------------------------------------------------------
// Result types (mirrors API response)
// ---------------------------------------------------------------------------

interface LengthAssessment {
  length: number;
  status: "too-short" | "optimal" | "too-long" | "missing";
  label: string;
  color: string;
  recommendation: string;
}

interface MetaTagInfo {
  name: string;
  content: string;
  property?: string;
}

interface MetaTagsResult {
  url: string;
  title: { value: string; assessment: LengthAssessment };
  description: { value: string; assessment: LengthAssessment };
  canonical: string | null;
  robots: string | null;
  viewport: string | null;
  charset: string | null;
  openGraph: Record<string, string>;
  twitterCard: Record<string, string>;
  otherMeta: MetaTagInfo[];
  totalTagCount: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const colorMap: Record<string, string> = {
  red: "border-red-200 bg-red-50/40 text-red-700",
  amber: "border-amber-200 bg-amber-50/40 text-amber-700",
  emerald: "border-emerald-200 bg-emerald-50/40 text-emerald-700",
  blue: "border-blue-200 bg-blue-50/40 text-blue-700",
  violet: "border-violet-200 bg-violet-50/40 text-violet-700",
};

const badgeColorMap: Record<string, string> = {
  red: "bg-red-100 text-red-700",
  amber: "bg-amber-100 text-amber-700",
  emerald: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  violet: "bg-violet-100 text-violet-700",
};

const dotColorMap: Record<string, string> = {
  red: "bg-red-500",
  amber: "bg-amber-500",
  emerald: "bg-emerald-500",
};

const barColorMap: Record<string, string> = {
  red: "bg-red-400",
  amber: "bg-amber-400",
  emerald: "bg-emerald-400",
};

function ogLabel(key: string): string {
  const labels: Record<string, string> = {
    title: "og:title",
    description: "og:description",
    image: "og:image",
    url: "og:url",
    type: "og:type",
    site_name: "og:site_name",
    locale: "og:locale",
  };
  return labels[key] ?? `og:${key}`;
}

function twitterLabel(key: string): string {
  const labels: Record<string, string> = {
    card: "twitter:card",
    title: "twitter:title",
    description: "twitter:description",
    image: "twitter:image",
    site: "twitter:site",
    creator: "twitter:creator",
  };
  return labels[key] ?? `twitter:${key}`;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function LengthIndicator({
  label,
  value,
  assessment,
  minOptimal,
  maxOptimal,
  maxDisplay,
}: {
  label: string;
  value: string;
  assessment: LengthAssessment;
  minOptimal: number;
  maxOptimal: number;
  maxDisplay: number;
}) {
  const pct = Math.min((assessment.length / maxDisplay) * 100, 100);
  const optimalStartPct = (minOptimal / maxDisplay) * 100;
  const optimalEndPct = (maxOptimal / maxDisplay) * 100;

  return (
    <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[12px] font-semibold text-muted">{label}</p>
        <div className="flex items-center gap-2">
          <span
            className={`inline-block h-2 w-2 rounded-full ${dotColorMap[assessment.color] ?? "bg-gray-400"}`}
          />
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
              badgeColorMap[assessment.color] ?? ""
            }`}
          >
            {assessment.label}
          </span>
        </div>
      </div>

      {value ? (
        <p className="text-[14px] text-foreground leading-[1.6] mb-3 break-words">
          {value}
        </p>
      ) : (
        <p className="text-[14px] text-red-500 italic mb-3">Not found</p>
      )}

      {/* Length bar */}
      <div className="relative h-2 w-full rounded-full bg-border-light overflow-hidden">
        {/* Optimal zone */}
        <div
          className="absolute top-0 h-full bg-emerald-100"
          style={{ left: `${optimalStartPct}%`, width: `${optimalEndPct - optimalStartPct}%` }}
        />
        {/* Current length */}
        <div
          className={`absolute top-0 h-full rounded-full transition-all duration-500 ${
            barColorMap[assessment.color] ?? "bg-gray-400"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex items-center justify-between mt-1.5">
        <span className="text-[11px] text-muted">{assessment.length} chars</span>
        <span className="text-[11px] text-muted">
          Optimal: {minOptimal}-{maxOptimal}
        </span>
      </div>

      <p className="mt-3 text-[13px] leading-[1.6] text-muted">
        {assessment.recommendation}
      </p>
    </div>
  );
}

function TagRow({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2.5 border-b border-black/[0.04] last:border-b-0">
      <span className="text-[12px] font-semibold text-muted shrink-0 sm:w-[140px]">
        {label}
      </span>
      {value ? (
        <span className="text-[13px] text-foreground break-all">{value}</span>
      ) : (
        <span className="text-[13px] text-red-400 italic">Not set</span>
      )}
    </div>
  );
}

function ComparisonCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 mt-6">
      {/* Good title example */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/30 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[12px] font-bold uppercase tracking-wide text-emerald-700">
            Good title example
          </span>
        </div>
        <p className="text-[14px] font-medium text-emerald-900 leading-[1.5]">
          &quot;How to Optimize Meta Tags for SEO in 2025 | RankSEO&quot;
        </p>
        <p className="mt-2 text-[12px] text-emerald-700 leading-[1.6]">
          55 characters. Includes primary keyword, year, and brand. Will display fully in search results.
        </p>
      </div>

      {/* Bad title example */}
      <div className="rounded-xl border border-red-200 bg-red-50/30 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
          <span className="text-[12px] font-bold uppercase tracking-wide text-red-700">
            Bad title example
          </span>
        </div>
        <p className="text-[14px] font-medium text-red-900 leading-[1.5]">
          &quot;Home&quot;
        </p>
        <p className="mt-2 text-[12px] text-red-700 leading-[1.6]">
          4 characters. No keywords, no context. Google has nothing to work with and users will not click.
        </p>
      </div>

      {/* Good description example */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/30 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[12px] font-bold uppercase tracking-wide text-emerald-700">
            Good description example
          </span>
        </div>
        <p className="text-[14px] font-medium text-emerald-900 leading-[1.5]">
          &quot;Learn how to write effective meta tags that improve click-through rates. Step-by-step guide with examples and best practices for 2025.&quot;
        </p>
        <p className="mt-2 text-[12px] text-emerald-700 leading-[1.6]">
          139 characters. Clear value proposition, includes keywords, and has a call to action.
        </p>
      </div>

      {/* Bad description example */}
      <div className="rounded-xl border border-red-200 bg-red-50/30 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
          <span className="text-[12px] font-bold uppercase tracking-wide text-red-700">
            Bad description example
          </span>
        </div>
        <p className="text-[14px] font-medium text-red-900 leading-[1.5]">
          &quot;Welcome to our website. We offer many services. Contact us today for more information about what we do and how we can help you with your needs.&quot;
        </p>
        <p className="mt-2 text-[12px] text-red-700 leading-[1.6]">
          Generic, no keywords, no unique value proposition. This will not stand out in search results.
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function MetaTagChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<MetaTagsResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/meta-tags", {
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

      // Normalize response to ensure all fields have safe defaults
      const d = data.data;
      const defaultAssessment = { length: 0, status: "missing" as const, label: "Missing", color: "red", recommendation: "" };
      setResult({
        url: d.url ?? "",
        title: {
          value: d.title?.value ?? (typeof d.title === "string" ? d.title : ""),
          assessment: d.title?.assessment ?? defaultAssessment,
        },
        description: {
          value: d.description?.value ?? (typeof d.description === "string" ? d.description : ""),
          assessment: d.description?.assessment ?? defaultAssessment,
        },
        canonical: d.canonical ?? null,
        robots: d.robots ?? null,
        viewport: d.viewport ?? null,
        charset: d.charset ?? null,
        openGraph: d.openGraph ?? {},
        twitterCard: d.twitterCard ?? {},
        otherMeta: Array.isArray(d.otherMeta) ? d.otherMeta : [],
        totalTagCount: d.totalTagCount ?? 0,
      });
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, tagCount: d.totalTagCount ?? 0 });

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
        title="Meta Tag Checker"
        subtitle="Enter any URL to analyze its meta tags. Check title tags, meta descriptions, Open Graph, Twitter Cards, and all other metadata."
      />

      <ToolInput
        value={url}
        onChange={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        placeholder="https://example.com/page"
        buttonText="Check meta tags"
      />

      {/* Signup prompt */}
      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {/* Error */}
      {error && (
        <div className="mx-auto max-w-[680px] px-6 py-4">
          <div className="rounded-xl border border-red-200 bg-red-50/40 px-5 py-3 text-[14px] text-red-700">
            {error}
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Page header */}
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                Analyzed page
              </p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">
                {result.title.value || result.url}
              </h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">
                {result.url}
              </p>
            </div>

            {/* Summary metrics */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              <ToolResultCard label="Total meta tags" value={result.totalTagCount} />
              <ToolResultCard
                label="Title length"
                value={`${result.title.assessment.length} chars`}
                note={result.title.assessment.label}
              />
              <ToolResultCard
                label="Description length"
                value={`${result.description.assessment.length} chars`}
                note={result.description.assessment.label}
              />
              <ToolResultCard
                label="OG tags"
                value={Object.keys(result.openGraph).length}
                note={Object.keys(result.openGraph).length > 0 ? "Found" : "Missing"}
              />
              <ToolResultCard
                label="Twitter tags"
                value={Object.keys(result.twitterCard).length}
                note={Object.keys(result.twitterCard).length > 0 ? "Found" : "Missing"}
              />
              <ToolResultCard
                label="Canonical"
                value={result.canonical ? "Set" : "Missing"}
              />
              <ToolResultCard
                label="Robots"
                value={result.robots ?? "Default"}
              />
              <ToolResultCard
                label="Viewport"
                value={result.viewport ? "Set" : "Missing"}
              />
            </div>

            {/* ---- Essential Tags: Title & Description with length indicators ---- */}
            <div className="mt-8">
              <h3 className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-4">
                Essential tags
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <LengthIndicator
                  label="Title tag"
                  value={result.title.value}
                  assessment={result.title.assessment}
                  minOptimal={50}
                  maxOptimal={60}
                  maxDisplay={80}
                />
                <LengthIndicator
                  label="Meta description"
                  value={result.description.value}
                  assessment={result.description.assessment}
                  minOptimal={120}
                  maxOptimal={155}
                  maxDisplay={200}
                />
              </div>

              {/* Other essential tags */}
              <div className="mt-4 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <TagRow label="Canonical URL" value={result.canonical} />
                <TagRow label="Robots" value={result.robots} />
                <TagRow label="Viewport" value={result.viewport} />
                <TagRow label="Charset" value={result.charset} />
              </div>
            </div>

            {/* ---- Open Graph Tags ---- */}
            <div className="mt-8">
              <h3 className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-4">
                Open Graph tags
              </h3>
              {Object.keys(result.openGraph).length > 0 ? (
                <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  {Object.entries(result.openGraph).map(([key, value]) => (
                    <TagRow key={key} label={ogLabel(key)} value={value} />
                  ))}
                </div>
              ) : (
                <div className={`rounded-xl border p-5 ${colorMap.amber}`}>
                  <p className="text-[14px] font-medium">
                    No Open Graph tags found
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.6] opacity-80">
                    Open Graph tags control how your page appears when shared on Facebook, LinkedIn, and other platforms. Add og:title, og:description, og:image, and og:url at minimum.
                  </p>
                </div>
              )}
            </div>

            {/* ---- Twitter Card Tags ---- */}
            <div className="mt-8">
              <h3 className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-4">
                Twitter Card tags
              </h3>
              {Object.keys(result.twitterCard).length > 0 ? (
                <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  {Object.entries(result.twitterCard).map(([key, value]) => (
                    <TagRow key={key} label={twitterLabel(key)} value={value} />
                  ))}
                </div>
              ) : (
                <div className={`rounded-xl border p-5 ${colorMap.amber}`}>
                  <p className="text-[14px] font-medium">
                    No Twitter Card tags found
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.6] opacity-80">
                    Twitter Card tags control how your page appears when shared on X (Twitter). Add twitter:card, twitter:title, twitter:description, and twitter:image for better social sharing.
                  </p>
                </div>
              )}
            </div>

            {/* ---- Other Meta Tags ---- */}
            {result.otherMeta.length > 0 && (
              <div className="mt-8">
                <h3 className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-4">
                  Other meta tags
                </h3>
                <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  {result.otherMeta.map((tag, i) => (
                    <TagRow key={`${tag.name}-${i}`} label={tag.name} value={tag.content} />
                  ))}
                </div>
              </div>
            )}

            {/* ---- Good vs Bad comparison cards ---- */}
            <div className="mt-8">
              <h3 className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-2">
                Good vs bad examples
              </h3>
              <ComparisonCards />
            </div>
          </div>
        </section>
      )}

      {/* Related SEO guides */}
      <section className="py-6">
        <div className="mx-auto max-w-[680px] px-6">
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
            Related SEO guides
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: "/seo-guide/on-page-seo/title-tags", label: "Title Tags Explained" },
              { href: "/seo-guide/on-page-seo/keyword-placement", label: "Keyword Placement Guide" },
              { href: "/seo-guide/on-page-seo/headings-seo", label: "Heading Tags Best Practices" },
              { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
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
        title="Want full meta tag audits?"
        description="RankSEO audits meta tags across your entire site, not just one page. Get automated checks, bulk analysis, and optimization recommendations."
      />

      <ToolFAQ
        faqs={[
          {
            question: "What are meta tags and why do they matter for SEO?",
            answer:
              "Meta tags are HTML elements that provide structured information about a page to search engines and social platforms. The title tag and meta description directly affect how your page appears in search results, influencing click-through rates. Open Graph and Twitter Card tags control how your content appears when shared on social media.",
          },
          {
            question: "What is the ideal title tag length?",
            answer:
              "The optimal title tag length is 50 to 60 characters. Titles shorter than 30 characters miss the opportunity to include keywords and context. Titles longer than 60 characters risk being truncated in search results, which can cut off important information or your brand name.",
          },
          {
            question: "What is the ideal meta description length?",
            answer:
              "The optimal meta description length is 120 to 155 characters. Descriptions under 70 characters waste valuable space to persuade searchers. Descriptions over 155 to 160 characters will be truncated by Google, potentially cutting off your call-to-action.",
          },
          {
            question: "Do Open Graph tags affect SEO rankings?",
            answer:
              "Open Graph tags do not directly affect search rankings. However, they control how your content appears when shared on Facebook, LinkedIn, and other platforms. Better-looking social previews lead to more clicks and shares, which can indirectly boost traffic and engagement signals.",
          },
          {
            question: "Is this tool free to use?",
            answer:
              "Yes. Anonymous visitors get 2 free checks per day. Create an account for unlimited access to all free SEO tools.",
          },
        ]}
      />

      {/* Gate modal */}
      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
