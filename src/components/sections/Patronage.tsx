"use client";

import { PATRONAGE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Patronage() {
  return (
    <section id="patronage" className="py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <span className="font-mono text-xs tracking-widest uppercase text-[var(--accent-gold)]">
            § Patronage
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight md:text-3xl">
            Discipline, off the page.
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-border-subtle" />
            <span className="h-px w-6 bg-[var(--accent-gold)]" />
          </div>
          <p className="mt-8 text-base leading-relaxed text-text-secondary md:text-lg">
            300 Consulting supports{" "}
            <span className="text-text-primary font-semibold">
              {PATRONAGE.athlete}
            </span>{" "}
            — {PATRONAGE.title}, training with{" "}
            <a
              href={PATRONAGE.clubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-2 hover:underline"
            >
              {PATRONAGE.club}
            </a>
            .
          </p>
          <p className="mt-3 font-mono text-xs tracking-widest uppercase text-text-tertiary">
            The same standard. A different mat.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
