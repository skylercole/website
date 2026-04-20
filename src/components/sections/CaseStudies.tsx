"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { DIAGRAM_MAP } from "@/components/diagrams";
import { ChevronRight, MapPin } from "lucide-react";

export default function CaseStudies() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs tracking-widest text-accent uppercase">
              § Case Studies
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-5xl">
              Selected work.
            </h2>
            <p className="mt-4 max-w-xl text-text-secondary">
              Energy, logistics, aviation, IoT, enterprise SaaS. Each one shipped.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2"
        >
          {CASE_STUDIES.map((study, i) => {
            const Diagram =
              DIAGRAM_MAP[study.diagram] ?? DIAGRAM_MAP.placeholder;
            return (
            <motion.div
              key={study.client}
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br ${study.gradient} bg-bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_0_60px_rgba(16,185,129,0.06)]`}
              data-cursor-hover
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border-subtle bg-bg-base/60">
                <Diagram />
              </div>
              <button
                onClick={() =>
                  setExpandedIdx(expandedIdx === i ? null : i)
                }
                className="w-full p-8 text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-text-primary">
                      {study.client}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-text-tertiary">
                      <MapPin className="h-3 w-3" />
                      {study.location}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIdx === i ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-5 w-5 text-text-tertiary transition-colors group-hover:text-accent" />
                  </motion.div>
                </div>

                <p className="mt-4 font-heading text-lg font-medium text-accent">
                  {study.outcome}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-subtle bg-bg-base/50 px-2.5 py-1 font-mono text-[10px] text-text-tertiary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>

              {/* Expanded details */}
              <AnimatePresence>
                {expandedIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border-subtle px-8 pb-8 pt-6">
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {study.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
