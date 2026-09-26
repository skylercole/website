"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { DIAGRAM_MAP } from "@/components/diagrams";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InlineList from "@/components/ui/InlineList";
import { ChevronRight } from "lucide-react";

export default function CaseStudies() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <Section id="case-studies">
      <SectionHeader
        label="Selected work"
        intro="Enterprise SaaS, aviation, logistics, IoT, and industrial tools."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid gap-4 md:grid-cols-2"
      >
        {CASE_STUDIES.map((study, i) => {
          const Diagram = study.diagram ? DIAGRAM_MAP[study.diagram] : null;
          const expanded = expandedIdx === i;
          const panelId = `case-study-${i}`;

          return (
            <motion.article
              key={study.client}
              variants={fadeInUp}
              className="group overflow-hidden rounded-box border border-border-subtle bg-bg-surface transition-colors duration-300 hover:border-border-strong"
            >
              {Diagram && (
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border-subtle bg-bg-raised/40">
                  <Diagram />
                </div>
              )}

              {/* The toggle lives in the heading; its ::after stretches over
                  this block so the whole card body stays clickable. */}
              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-h3 text-text-primary">
                    <button
                      type="button"
                      onClick={() => setExpandedIdx(expanded ? null : i)}
                      aria-expanded={expanded}
                      aria-controls={expanded ? panelId : undefined}
                      className="text-left after:absolute after:inset-0"
                    >
                      {study.client}
                    </button>
                  </h3>
                  <motion.div
                    animate={{ rotate: expanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-5 w-5 text-text-secondary transition-colors group-hover:text-text-primary" />
                  </motion.div>
                </div>

                <p className="mt-1 text-meta text-text-secondary">
                  {study.location}
                </p>

                <p className="mt-4 font-heading text-lead font-medium text-accent">
                  {study.outcome}
                </p>

                <InlineList
                  items={study.tech}
                  className="mt-4 text-meta text-text-secondary"
                />
              </div>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border-subtle px-6 py-6 md:px-8 md:pb-8">
                      <p className="text-body text-text-secondary">
                        {study.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
