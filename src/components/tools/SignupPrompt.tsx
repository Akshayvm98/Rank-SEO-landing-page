/** Subtle inline signup prompt shown after first successful use */
export function SignupPrompt({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="mx-auto max-w-[680px] px-6 py-3">
      <div className="flex items-center gap-3 rounded-xl border border-accent/20 bg-accent-bg/30 px-5 py-3">
        <span className="text-[13px] text-accent font-medium">
          1 free check remaining today.
        </span>
        <a
          href="/pricing"
          className="ml-auto shrink-0 rounded-lg bg-accent px-4 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Get unlimited
        </a>
      </div>
    </div>
  );
}
