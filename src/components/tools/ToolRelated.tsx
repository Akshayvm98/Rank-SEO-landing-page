import { Icon, Icons } from "@/components/ui/Icon";
import { getPublishedTools } from "@/lib/tools/tools-data";
import type { ToolMeta } from "@/lib/tools/types";

/**
 * Data-driven related tools mapping.
 * Each tool ID maps to 3-4 related tool IDs.
 */
const RELATED_MAP: Record<string, string[]> = {
  "content-length-analyzer": ["readability-checker", "content-structure-checker", "keyword-density-checker"],
  "meta-tag-checker": ["title-tag-analyzer", "open-graph-checker", "canonical-tag-checker"],
  "heading-structure-checker": ["content-structure-checker", "readability-checker", "keyword-density-checker"],
  "keyword-density-checker": ["content-length-analyzer", "readability-checker", "heading-structure-checker"],
  "readability-checker": ["content-length-analyzer", "content-structure-checker", "heading-structure-checker"],
  "internal-link-checker": ["anchor-text-analyzer", "broken-link-checker", "content-structure-checker"],
  "broken-link-checker": ["internal-link-checker", "sitemap-checker", "canonical-tag-checker"],
  "serp-preview-tool": ["title-tag-analyzer", "meta-tag-checker", "open-graph-checker", "url-slug-analyzer"],
  "url-slug-analyzer": ["serp-preview-tool", "title-tag-analyzer", "canonical-tag-checker"],
  "content-structure-checker": ["heading-structure-checker", "readability-checker", "internal-link-checker"],
  "title-tag-analyzer": ["serp-preview-tool", "meta-tag-checker", "keyword-density-checker"],
  "anchor-text-analyzer": ["internal-link-checker", "broken-link-checker", "keyword-density-checker"],
  "robots-txt-checker": ["sitemap-checker", "noindex-checker", "canonical-tag-checker"],
  "sitemap-checker": ["robots-txt-checker", "broken-link-checker", "noindex-checker"],
  "canonical-tag-checker": ["noindex-checker", "meta-tag-checker", "robots-txt-checker"],
  "noindex-checker": ["canonical-tag-checker", "robots-txt-checker", "meta-tag-checker"],
  "open-graph-checker": ["meta-tag-checker", "serp-preview-tool", "title-tag-analyzer"],
  "image-alt-text-checker": ["heading-structure-checker", "content-structure-checker", "anchor-text-analyzer"],
};

const allTools = getPublishedTools();
const toolMap = new Map<string, ToolMeta>(allTools.map((t) => [t.id, t]));

/** Shared related tools section for tool pages */
export function ToolRelated({ currentToolId }: { currentToolId: string }) {
  const relatedIds = RELATED_MAP[currentToolId] ?? [];
  const related = relatedIds.map((id) => toolMap.get(id)).filter(Boolean) as ToolMeta[];

  if (related.length === 0) return null;

  return (
    <section className="py-6">
      <div className="mx-auto max-w-[680px] px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">
          Related tools
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((tool) => (
            <a
              key={tool.id}
              href={tool.href}
              className="group flex items-center gap-3 rounded-xl border border-black/[0.04] bg-white p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                <Icon
                  icon={Icons[tool.icon as keyof typeof Icons] ?? Icons.fileText}
                  size="sm"
                  className="text-accent"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                  {tool.name}
                </p>
                <p className="text-[11px] text-muted truncate">
                  {tool.tagline}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
