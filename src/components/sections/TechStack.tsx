"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TechStack() {
  return (
    <section className="border-y border-border-subtle bg-bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs tracking-widest text-accent uppercase">
              Tech Stack
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-5xl">
              Tools of the trade
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
              className={`group rounded-2xl border border-border-subtle bg-bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_0_40px_rgba(16,185,129,0.06)] ${
                group.featured ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              data-cursor-hover
            >
              <h3 className="mb-4 font-heading text-sm font-semibold tracking-wider text-accent uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border-subtle bg-bg-base px-3 py-1.5 font-mono text-xs text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-accent"
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
