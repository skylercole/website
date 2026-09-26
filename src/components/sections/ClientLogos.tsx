import { CLIENT_LOGOS } from "@/lib/constants";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ClientLogos() {
  return (
    <Section>
      <SectionHeader label="Companies I've worked with" />

      <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-4">
        {CLIENT_LOGOS.map((name) => (
          <li
            key={name}
            className="border-t border-border-subtle py-4 font-heading text-lead text-text-primary"
          >
            {name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
