import { type ReactNode } from "react";

// Two rhythms. Standard sections open with a SectionHeader; bands (the credo
// and the metrics) are shorter strips between hairlines.
const PADDING = {
  standard: "py-16 md:py-24",
  band: "py-12 md:py-16",
};

interface SectionProps {
  id?: string;
  variant?: keyof typeof PADDING;
  className?: string;
  children: ReactNode;
}

export default function Section({
  id,
  variant = "standard",
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`${PADDING[variant]} ${className}`.trim()}>
      <div className="site-container">{children}</div>
    </section>
  );
}
