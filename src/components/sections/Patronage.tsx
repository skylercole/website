import { PATRONAGE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Patronage() {
  return (
    <Section id="patronage">
      <SectionHeader label="Patronage" numbered={false} />

      <ScrollReveal>
        <h3 className="font-heading text-h3 text-text-primary">
          Supporting Finnish judo.
        </h3>
        <p className="mt-4 max-w-2xl text-lead text-text-secondary">
          300 Consulting supports{" "}
          <span className="font-semibold text-text-primary">
            {PATRONAGE.athlete}
          </span>
          {`, ${PATRONAGE.title}, training with `}
          <a
            href={PATRONAGE.clubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary underline underline-offset-2 decoration-border-strong hover:decoration-text-primary"
          >
            {PATRONAGE.club}
          </a>
          .
        </p>
      </ScrollReveal>
    </Section>
  );
}
