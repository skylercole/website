"use client";

import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InlineList from "@/components/ui/InlineList";

export default function Capabilities() {
  return (
    <Section id="capabilities">
      <SectionHeader label="Capabilities" />

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="divide-y divide-border-subtle border-b border-border-subtle"
      >
        {CAPABILITIES.primary.map((cap) => (
          <motion.li
            key={cap.title}
            variants={fadeInUp}
            className="grid gap-4 py-8 first:pt-0 md:grid-cols-12 md:gap-8 md:py-12"
          >
            <h3 className="font-heading text-h2 text-text-primary md:col-span-5">
              {cap.title}
            </h3>
            <div className="md:col-span-7">
              <p className="text-lead text-text-secondary">{cap.description}</p>
              <InlineList
                items={cap.detail}
                className="mt-4 text-meta text-text-secondary"
              />
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <ScrollReveal>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-heading text-body">
          <span className="text-text-secondary">Also:</span>
          <InlineList
            items={CAPABILITIES.supporting}
            separator="tick"
            className="text-text-primary"
          />
        </div>
      </ScrollReveal>
    </Section>
  );
}
