import { Rule } from "@/components/ui/Tick";

interface SectionHeaderProps {
  label: string;
  intro?: string;
  numbered?: boolean;
}

// Every section opens the same way: number and label, then a hairline that
// ends in the gold tick. The label is the section's h2. Numbers come from a
// CSS counter in globals.css, so they follow page order.
export default function SectionHeader({
  label,
  intro,
  numbered = true,
}: SectionHeaderProps) {
  return (
    <header className="mb-12">
      <h2 className="flex items-baseline gap-3 font-heading text-label uppercase text-text-secondary">
        {numbered && (
          <span
            aria-hidden
            className="section-number tabular-nums text-text-primary"
          />
        )}
        {label}
      </h2>
      <div className="mt-4">
        <Rule />
      </div>
      {intro && (
        <p className="mt-6 max-w-2xl text-lead text-text-secondary">{intro}</p>
      )}
    </header>
  );
}
