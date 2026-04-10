"use client";

import { motion } from "framer-motion";
import { METRICS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import CounterAnimation from "@/components/ui/CounterAnimation";

export default function Metrics() {
  return (
    <section className="border-y border-border-subtle bg-bg-surface/50 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4"
      >
        {METRICS.map((metric) => (
          <motion.div
            key={metric.prefix}
            variants={fadeInUp}
            className="text-center md:text-left"
          >
            <span className="font-mono text-xs tracking-widest text-text-tertiary">
              {metric.prefix}
            </span>
            <div className="mt-2 font-heading text-4xl font-bold text-text-primary md:text-5xl">
              <CounterAnimation
                value={metric.value}
                suffix={metric.suffix}
                className="font-mono"
              />
            </div>
            <p className="mt-1 text-sm text-text-secondary">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
