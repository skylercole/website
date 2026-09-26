"use client";

import { motion } from "framer-motion";
import { DOCTRINE } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Doctrine() {
  return (
    <Section id="doctrine">
      <SectionHeader label="Doctrine" />

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="divide-y divide-border-subtle"
      >
        {DOCTRINE.map((tenet) => (
          <motion.li
            key={tenet.numeral}
            variants={fadeInUp}
            className="grid grid-cols-[3rem_1fr] items-baseline gap-x-6 py-8 first:pt-0 md:grid-cols-[5rem_1fr] md:gap-x-8"
          >
            <span aria-hidden className="font-heading text-h1 text-mark">
              {tenet.numeral}.
            </span>
            <div>
              <h3 className="font-heading text-h3 text-text-primary">
                {tenet.title}
              </h3>
              <p className="mt-2 text-lead text-text-secondary">{tenet.body}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
