"use client";

import { motion } from "framer-motion";
import { DOCTRINE } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Doctrine() {
  return (
    <section id="doctrine" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-10">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-gold)]">
              Doctrine
            </span>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-border-subtle" />
              <span className="h-px w-6 bg-[var(--accent-gold)]" />
            </div>
          </div>
        </ScrollReveal>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="space-y-10 md:space-y-12"
        >
          {DOCTRINE.map((tenet) => (
            <motion.li
              key={tenet.numeral}
              variants={fadeInUp}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 md:gap-x-10"
            >
              <span
                aria-hidden
                className="font-heading text-3xl font-semibold tabular-nums text-[var(--accent-gold)] md:text-5xl"
              >
                {tenet.numeral}.
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary md:text-2xl">
                  {tenet.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-text-secondary md:text-lg">
                  {tenet.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
