"use client";

import { CLIENT_LOGOS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClientLogos() {
  return (
    <section className="border-y border-border-subtle bg-bg-surface/40 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="mb-12 text-center font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary">
            Past clients
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border-subtle bg-border-subtle sm:grid-cols-3 lg:grid-cols-4">
          {CLIENT_LOGOS.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center bg-bg-base px-6 py-8 text-center transition-colors duration-300 hover:bg-bg-surface"
            >
              <span className="font-heading text-sm font-medium text-text-secondary">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
