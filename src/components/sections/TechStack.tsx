"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TechStack() {
  return (
    <section className="border-y border-border-subtle bg-bg-surface/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Tech stack
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-4 lg:grid-cols-[2fr_3fr]"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-border-subtle bg-bg-surface p-6 md:p-8"
          >
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-secondary">
              Core
            </h3>
            <ul className="flex flex-wrap gap-2">
              {TECH_STACK.core.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border-subtle bg-bg-base px-4 py-2 font-heading text-base text-text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 text-xs text-text-tertiary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Microsoft Certified Azure Solutions Architect Expert
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-border-subtle p-6 md:p-8"
          >
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-tertiary">
              Also shipped with
            </h3>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 text-sm">
              {TECH_STACK.also.map((group) => (
                <div key={group.category} className="contents">
                  <dt className="text-text-tertiary">{group.category}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-x-2 text-text-secondary">
                      {group.items.map((item, i) => (
                        <li key={item} className="flex items-center gap-2">
                          {item}
                          {i < group.items.length - 1 && (
                            <span aria-hidden className="text-text-tertiary">
                              ·
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
