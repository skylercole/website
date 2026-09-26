"use client";

import { motion } from "framer-motion";
import { CREDO, EXPERIENCE } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Section from "@/components/ui/Section";
import InlineList from "@/components/ui/InlineList";
import { Tick } from "@/components/ui/Tick";

export default function Experience() {
  return (
    <Section variant="band" className="border-t border-border-subtle">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Tick />
          <p className="mt-4 max-w-2xl font-heading text-h3 font-normal text-text-primary">
            {CREDO}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-heading text-body md:mt-8"
        >
          <span className="text-text-secondary">Experience in:</span>
          <InlineList
            items={EXPERIENCE}
            separator="tick"
            className="text-text-primary"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
