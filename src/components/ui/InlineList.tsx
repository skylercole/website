import { Tick } from "@/components/ui/Tick";

interface InlineListProps {
  items: readonly string[];
  separator?: "dot" | "tick";
  className?: string;
}

// A run of items that wraps as needed. Supporting information is set as text,
// never as pills. Separators trail their item, so a wrapped line never starts
// with one.
export default function InlineList({
  items,
  separator = "dot",
  className = "",
}: InlineListProps) {
  const gap = separator === "tick" ? "gap-x-4" : "gap-x-2";

  return (
    <ul className={`flex flex-wrap items-center gap-y-1 ${gap} ${className}`.trim()}>
      {items.map((item, i) => (
        <li key={item} className={`flex items-center ${gap}`}>
          {item}
          {i < items.length - 1 &&
            (separator === "tick" ? (
              <Tick short />
            ) : (
              <span aria-hidden className="text-border-strong">
                ·
              </span>
            ))}
        </li>
      ))}
    </ul>
  );
}
