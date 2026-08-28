"use client";

import { motion } from "framer-motion";
import { CREDO, EXPERIENCE } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Experience() {
  return (
    <section className="border-t border-border-subtle py-12 md:py-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mx-auto max-w-5xl px-6"
      >
        <motion.div variants={fadeInUp}>
          <span
            aria-hidden
            className="block h-px w-6 bg-[var(--accent-gold)]"
          />
          <p className="mt-4 max-w-2xl font-heading text-xl leading-snug text-text-primary md:text-2xl">
            {CREDO}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 font-heading text-base md:mt-7 md:text-lg"
        >
          <span className="text-text-tertiary">Experience in:</span>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 text-text-secondary">
            {EXPERIENCE.map((term, i) => (
              <li key={term} className="flex items-center gap-5">
                {i > 0 && (
                  <span
                    aria-hidden
                    className="h-px w-4 bg-[var(--accent-gold)]"
                  />
                )}
                {term}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
