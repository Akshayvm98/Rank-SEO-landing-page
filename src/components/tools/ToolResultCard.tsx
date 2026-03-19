/** A single metric card in the tool results grid */
export function ToolResultCard({
  label,
  value,
  note,
  status,
}: {
  label: string;
  value: string | number;
  note?: string;
  status?: "good" | "warning" | "error" | "neutral";
}) {
  const statusAccent = status
    ? {
        good: "border-l-emerald-400",
        warning: "border-l-amber-400",
        error: "border-l-red-400",
        neutral: "border-l-gray-300",
      }[status]
    : "";

  return (
    <div
      className={`rounded-xl border border-black/[0.04] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] ${
        status ? `border-l-[3px] ${statusAccent}` : ""
      }`}
    >
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
