/** Shared humanized loading state for tool analysis */
export function ToolLoading({
  message = "Analyzing page...",
}: {
  message?: string;
}) {
  return (
    <div className="mx-auto max-w-[680px] px-6 py-6">
      <div className="flex items-center gap-4 rounded-xl border border-accent/15 bg-accent-bg/20 px-5 py-4">
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
          <span className="relative inline-block h-5 w-5 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
        </div>
        <div>
          <p className="text-[14px] font-medium text-accent">
            {message}
          </p>
          <p className="text-[12px] text-muted mt-0.5">
            This usually takes a few seconds.
          </p>
        </div>
      </div>
    </div>
  );
}
