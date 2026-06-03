"use client";

import { motion } from "framer-motion";
import { METRICS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Metrics() {
  return (
    <section className="border-y border-border-subtle py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4"
      >
        {METRICS.map((metric) => (
          <motion.div
            key={metric.label}
            variants={fadeInUp}
            className="text-center md:text-left"
          >
            <div className="font-heading text-4xl font-semibold tabular-nums text-text-primary md:text-5xl">
              {metric.value}
              {metric.suffix}
            </div>
            <p className="mt-2 text-sm text-text-secondary">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
