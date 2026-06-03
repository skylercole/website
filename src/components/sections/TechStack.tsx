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
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TECH_STACK.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              className={`group rounded-xl border border-border-subtle bg-bg-surface p-6 transition-colors duration-300 hover:border-border-hover ${
                group.featured ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-secondary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border-subtle bg-bg-base px-3 py-1.5 text-xs text-text-secondary transition-colors duration-200 hover:border-text-primary/20 hover:text-text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {group.featured && (
                <div className="mt-4 flex items-center gap-2 text-xs text-text-tertiary">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  Microsoft Certified Azure Solutions Architect Expert
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
