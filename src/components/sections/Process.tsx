"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs tracking-widest text-accent uppercase">
              Process
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-5xl">
              How I work
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-8 w-px bg-border-subtle md:left-1/2" />

          <div className="space-y-16">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 z-10 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg-base">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-16 w-full md:ml-0 md:w-[calc(50%-3rem)] ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="font-mono text-xs tracking-widest text-accent">
                    {step.number}
                  </span>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-text-secondary">{step.description}</p>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
