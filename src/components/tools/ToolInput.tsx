"use client";

import { Icon, Icons } from "@/components/ui/Icon";

/** Reusable URL input form for free tools */
export function ToolInput({
  value,
  onChange,
  onSubmit,
  loading,
  loadingMessage = "Analyzing...",
  placeholder = "https://example.com/page",
  buttonText = "Analyze",
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
  loadingMessage?: string;
  placeholder?: string;
  buttonText?: string;
}) {
  return (
    <section className="py-2">
      <div className="mx-auto max-w-[680px] px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Icon
              icon={Icons.globe}
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="url"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              required
              className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-4 text-[14px] text-foreground placeholder:text-muted-light outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_0_4px_rgba(13,148,136,0.06)]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                {loadingMessage}
              </>
            ) : (
              <>
                <Icon icon={Icons.search} size="sm" />
                {buttonText}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
