import { Icon, Icons } from "@/components/ui/Icon";

/** Shared empty state for when analysis succeeds but finds nothing relevant */
export function ToolEmpty({
  message = "No relevant data found on this page.",
  suggestion,
}: {
  message?: string;
  suggestion?: string;
}) {
  return (
    <div className="mx-auto max-w-[680px] px-6 py-6">
      <div className="rounded-xl border border-border-light bg-surface p-6 text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-border-light">
          <Icon icon={Icons.info} size="md" className="text-muted-light" />
        </div>
        <p className="mt-3 text-[14px] font-medium text-foreground">
          {message}
        </p>
        {suggestion && (
          <p className="mt-1 text-[13px] text-muted">
            {suggestion}
          </p>
        )}
      </div>
    </div>
  );
}
