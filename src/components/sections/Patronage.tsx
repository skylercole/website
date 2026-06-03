"use client";

import { PATRONAGE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Patronage() {
  return (
    <section id="patronage" className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-gold)]">
            Patronage
          </span>
          <h2 className="mt-3 font-heading text-xl font-semibold tracking-tight md:text-2xl">
            Supporting Finnish judo.
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-border-subtle" />
            <span className="h-px w-6 bg-[var(--accent-gold)]" />
          </div>
          <p className="mt-8 text-base leading-relaxed text-text-secondary md:text-lg">
            300 Consulting supports{" "}
            <span className="text-text-primary font-semibold">
              {PATRONAGE.athlete}
            </span>
            {`, ${PATRONAGE.title}, training with `}
            <a
              href={PATRONAGE.clubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline underline-offset-2 decoration-text-tertiary hover:decoration-text-primary"
            >
              {PATRONAGE.club}
            </a>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
