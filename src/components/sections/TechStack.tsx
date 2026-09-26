"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InlineList from "@/components/ui/InlineList";

// A spec sheet: one ruled row per category, the core stack set larger.
const ROW =
  "grid grid-cols-[7rem_1fr] items-baseline gap-x-6 py-4 first:pt-0 md:grid-cols-[12rem_1fr]";

export default function TechStack() {
  return (
    <Section>
      <SectionHeader label="Tech stack" />

      <motion.dl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="divide-y divide-border-subtle"
      >
        <motion.div variants={fadeInUp} className={ROW}>
          <dt className="text-meta text-text-secondary">Core</dt>
          <dd>
            <InlineList
              items={TECH_STACK.core}
              className="font-heading text-lead text-text-primary"
            />
          </dd>
        </motion.div>

        {TECH_STACK.also.map((group) => (
          <motion.div key={group.category} variants={fadeInUp} className={ROW}>
            <dt className="text-meta text-text-secondary">{group.category}</dt>
            <dd>
              <InlineList
                items={group.items}
                className="text-body text-text-secondary"
              />
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </Section>
  );
}
