"use client";

import { motion } from "framer-motion";
import { METRICS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Section from "@/components/ui/Section";

export default function Metrics() {
  return (
    <Section variant="band" className="border-y border-border-subtle">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid grid-cols-2 gap-8 md:grid-cols-4"
      >
        {METRICS.map((metric) => (
          <motion.div
            key={metric.label}
            variants={fadeInUp}
            className="text-center md:text-left"
          >
            <div className="font-heading text-h1 tabular-nums text-text-primary">
              {metric.value}
              {metric.suffix}
            </div>
            <p className="mt-2 text-meta text-text-secondary">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
