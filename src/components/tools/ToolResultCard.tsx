/** A single metric card in the tool results grid */
export function ToolResultCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string | number;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-black/[0.04] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
        {label}
      </p>
      <p className="mt-1 text-[22px] font-bold tracking-tight text-foreground">
        {value}
      </p>
      {note && (
        <p className="mt-1 text-[12px] text-muted">{note}</p>
      )}
    </div>
  );
}
