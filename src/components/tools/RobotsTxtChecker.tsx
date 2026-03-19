"use client";

import { useState } from "react";
import { Icon, Icons } from "@/components/ui/Icon";
import { ToolHero } from "./ToolHero";
import { ToolInput } from "./ToolInput";
import { ToolResultCard } from "./ToolResultCard";
import { ToolGuides } from "./ToolGuides";
import { ToolContextCTA } from "./ToolContextCTA";
import { ToolFAQ } from "./ToolFAQ";
import { ToolError } from "./ToolError";
import { ToolLoading } from "./ToolLoading";
import { ToolRelated } from "./ToolRelated";
import { GateModal } from "./GateModal";
import { SignupPrompt } from "./SignupPrompt";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import type { GateDecision } from "@/lib/tools/types";
import type { RobotsTxtResult } from "@/lib/tools/robots-analysis";

const TOOL_ID = "robots-txt-checker";

// Human-readable interpretation of crawl rules
function interpretRules(result: RobotsTxtResult): string {
  if (!result.found) return "No robots.txt file was found. By default, search engines will attempt to crawl all pages.";

  const wildcardGroup = (result.groups ?? []).find((g) => g.userAgent === "*");
  if (wildcardGroup && wildcardGroup.disallows.includes("/")) {
    return "This robots.txt blocks all crawlers from the entire site. If this is unintentional, it will prevent any page from being crawled or ranked.";
  }

  const totalDisallows = result.totalDisallows ?? 0;
  if (totalDisallows === 0) {
    return "No pages are blocked from crawling. Search engines can access all content on the site.";
  }
  if (totalDisallows <= 3) {
    return "A few paths are blocked from crawling. This is typical for admin or internal pages.";
  }
  if (totalDisallows <= 10) {
    return "Several paths are restricted. Make sure important content pages are not accidentally blocked.";
  }
  return "Many paths are restricted from crawling. Review these rules to ensure nothing important is being blocked.";
}

export function RobotsTxtChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<RobotsTxtResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true); setError(null); setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/robots-txt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!data.success) {
        if (res.status === 429) { setGate(data.gate); setShowGateModal(true); return; }
        throw new Error(data.error || "Analysis failed");
      }
      setResult(data.data);
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, found: data.data.found });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally { setLoading(false); }
  }

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Robots.txt Checker"
        subtitle="See what your robots.txt file tells search engines. Check crawl rules, sitemap references, and find issues that might be blocking your pages."
      />

      <ToolInput
        value={url}
        onChange={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        loadingMessage="Checking robots.txt..."
        placeholder="https://example.com"
        buttonText="Check robots.txt"
      />

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {loading && <ToolLoading message="Fetching and parsing robots.txt..." />}

      {error && <ToolError message={error} onRetry={handleAnalyze} />}

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Status */}
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Checked URL</p>
              <p className="mt-1 text-[14px] font-medium text-foreground">{result.url}</p>
            </div>

            {/* ── Overview ── */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">Overview</p>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                <ToolResultCard
                  label="robots.txt"
                  value={result.found ? "Found" : "Not found"}
                  note={`HTTP ${result.statusCode}`}
                  status={result.found ? "good" : "warning"}
                />
                <ToolResultCard label="User-agents" value={(result.groups ?? []).length} />
                <ToolResultCard
                  label="Disallow rules"
                  value={result.totalDisallows ?? 0}
                  status={(result.totalDisallows ?? 0) > 10 ? "warning" : "neutral"}
                />
                <ToolResultCard label="Allow rules" value={result.totalAllows ?? 0} />
                <ToolResultCard
                  label="Sitemaps"
                  value={(result.sitemaps ?? []).length}
                  status={(result.sitemaps ?? []).length > 0 ? "good" : "warning"}
                />
              </div>
            </div>

            {/* ── Crawl rules interpretation ── */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">What this means</p>
              <div className={`rounded-2xl border p-5 ${
                !result.found ? "border-amber-200 bg-amber-50/30"
                : result.totalDisallows === 0 ? "border-emerald-200 bg-emerald-50/30"
                : (result.groups ?? []).some((g) => g.userAgent === "*" && g.disallows.includes("/"))
                  ? "border-red-200 bg-red-50/30"
                  : "border-blue-200 bg-blue-50/30"
              }`}>
                <p className={`text-[14px] leading-[1.7] font-medium ${
                  !result.found ? "text-amber-700"
                  : result.totalDisallows === 0 ? "text-emerald-700"
                  : (result.groups ?? []).some((g) => g.userAgent === "*" && g.disallows.includes("/"))
                    ? "text-red-700"
                    : "text-blue-700"
                }`}>
                  {interpretRules(result)}
                </p>
              </div>
            </div>

            {/* ── Directives ── */}
            {result.found && (result.groups ?? []).length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">Crawl rules</p>
                <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <div className="space-y-4">
                    {(result.groups ?? []).map((group, i) => (
                      <div key={i} className="rounded-lg border border-border-light p-4">
                        <p className="text-[13px] font-bold text-foreground mb-2">
                          <span className="text-muted font-normal">User-agent:</span> {group.userAgent}
                        </p>
                        {(group.disallows ?? []).length > 0 && (
                          <div className="mb-2 space-y-1">
                            {group.disallows.map((d, j) => (
                              <div key={j} className="flex items-center gap-2">
                                <Icon icon={Icons.x} size="sm" className="text-red-400 shrink-0" />
                                <p className="text-[12px] text-red-600 font-mono">Disallow: {d}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {(group.allows ?? []).length > 0 && (
                          <div className="mb-2 space-y-1">
                            {group.allows.map((a, j) => (
                              <div key={j} className="flex items-center gap-2">
                                <Icon icon={Icons.check} size="sm" className="text-emerald-500 shrink-0" />
                                <p className="text-[12px] text-emerald-600 font-mono">Allow: {a}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {group.crawlDelay !== undefined && (
                          <div className="flex items-center gap-2">
                            <Icon icon={Icons.clock} size="sm" className="text-amber-500 shrink-0" />
                            <p className="text-[12px] text-amber-600 font-mono">Crawl-delay: {group.crawlDelay}</p>
                          </div>
                        )}
                        {(group.disallows ?? []).length === 0 && (group.allows ?? []).length === 0 && (
                          <p className="text-[12px] text-muted">No specific rules for this user-agent. Everything is allowed.</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {(result.sitemaps ?? []).length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border-light">
                      <p className="text-[12px] font-semibold text-muted mb-2">Sitemaps referenced:</p>
                      {result.sitemaps.map((s, i) => (
                        <div key={i} className="flex items-center gap-2 mb-1">
                          <Icon icon={Icons.check} size="sm" className="text-emerald-500 shrink-0" />
                          <p className="text-[12px] text-accent font-mono truncate">{s}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Findings ── */}
            {(result.findings ?? []).length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">What we found</p>
                <div className="space-y-2">
                  {(result.findings ?? []).map((f, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 rounded-xl border px-5 py-3.5 ${
                        f.severity === "good" ? "border-emerald-200 bg-emerald-50/30" :
                        f.severity === "warning" ? "border-amber-200 bg-amber-50/30" :
                        "border-red-200 bg-red-50/30"
                      }`}
                    >
                      <Icon
                        icon={f.severity === "good" ? Icons.checkCircle : f.severity === "warning" ? Icons.alertTriangle : Icons.alertCircle}
                        size="sm"
                        className={`mt-0.5 shrink-0 ${
                          f.severity === "good" ? "text-emerald-500" :
                          f.severity === "warning" ? "text-amber-500" :
                          "text-red-500"
                        }`}
                      />
                      <p className={`text-[13px] leading-[1.6] ${
                        f.severity === "good" ? "text-emerald-700" :
                        f.severity === "warning" ? "text-amber-700" :
                        "text-red-700"
                      }`}>
                        {f.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Recommendations ── */}
            {(result.recommendations ?? []).length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-accent mb-3">What to do next</p>
                <div className="rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
                  <ul className="space-y-2.5">
                    {(result.recommendations ?? []).map((rec, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px] text-foreground leading-[1.6]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <ToolGuides toolId={TOOL_ID} />
      <ToolRelated currentToolId={TOOL_ID} />
      <ToolContextCTA toolId={TOOL_ID} />

      <ToolFAQ faqs={[
        { question: "What is robots.txt?", answer: "robots.txt is a plain text file at the root of a website (e.g. example.com/robots.txt) that tells search engine crawlers which pages they can and cannot access. It helps control crawl behavior, but it does not prevent pages from being indexed if Google finds them through external links." },
        { question: "Does every website need a robots.txt?", answer: "Not strictly, but it is recommended. Without a robots.txt file, search engines will attempt to crawl everything they can find. Having one gives you control over what gets crawled and helps crawlers discover your sitemap." },
        { question: "Can robots.txt block Google from indexing pages?", answer: "Not exactly. robots.txt blocks crawling, not indexing. If Google finds a URL through external links but cannot crawl it, it may still show the URL in search results without a content snippet. Use noindex to prevent indexing." },
        { question: "Should I include my sitemap in robots.txt?", answer: "Yes. Adding a Sitemap directive in robots.txt is a simple best practice that helps search engines discover your XML sitemap automatically, without needing to submit it manually in Search Console." },
        { question: "What does Disallow mean?", answer: "Disallow tells crawlers not to access the specified path. For example, Disallow: /admin/ tells crawlers to skip all URLs starting with /admin/. An empty Disallow line means nothing is blocked for that user-agent." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
