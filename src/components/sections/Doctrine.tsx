"use client";

import { motion } from "framer-motion";
import { DOCTRINE, BASE_PATH } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Doctrine() {
  return (
    <section id="doctrine" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs tracking-widest uppercase text-[var(--accent-gold)]">
              § Doctrine
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-5xl">
              What the work is held to.
            </h2>
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
                className="font-heading text-3xl font-bold tabular-nums text-[var(--accent-gold)] md:text-5xl"
              >
                {tenet.numeral}.
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                  {tenet.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-text-secondary md:text-lg">
                  {tenet.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-16 text-center">
          <a
            href={`${BASE_PATH}/doctrine`}
            className="font-mono text-xs tracking-[.2em] uppercase text-text-tertiary hover:text-[var(--accent-gold)] transition-colors"
            data-cursor-hover
          >
            // carry the doctrine →
          </a>
        </div>
      </div>
    </section>
  );
}
