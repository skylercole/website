"use client";

import { motion } from "framer-motion";
import { LABS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import LabCardArt from "@/components/art/LabCardArt";
import { ArrowUpRight } from "lucide-react";

const CARD =
  "group relative flex flex-col overflow-hidden rounded-box border border-border-subtle bg-bg-surface transition-colors duration-300 hover:border-border-strong";

// The grid has six columns from 640px up. Cards sit three to a row; when the
// count is not a multiple of three, it opens with rows of two wider cards, so
// the last row is always full. Five cards make a row of two and a row of three.
const WIDE_CARDS = [0, 4, 2][LABS.length % 3];

// On a phone the cards pair up, and with an odd count the first one takes the
// full width.
const LEAD_ON_PHONE = LABS.length % 2 === 1;

function span(index: number) {
  const phone = LEAD_ON_PHONE && index === 0 ? "col-span-2" : "";
  const wide = index < WIDE_CARDS ? "sm:col-span-3" : "sm:col-span-2";
  return `${phone} ${wide}`.trim();
}

export default function Labs() {
  return (
    <Section id="labs">
      <SectionHeader
        label="Labs"
        intro="Projects built outside client engagements, with the same engineering discipline."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid grid-cols-2 gap-3 sm:grid-cols-6 md:gap-4"
      >
        {LABS.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            className={`${CARD} ${span(index)}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-border-subtle">
              <LabCardArt project={project} />
            </div>

            <div className="flex flex-1 flex-col p-3 md:p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-body font-semibold text-text-primary">
                  {project.name}
                </h3>
                <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-text-secondary transition-colors group-hover:text-text-primary" />
              </div>

              <p className="mt-1 text-meta text-text-secondary">
                {project.tagline}
              </p>

              <div className="mt-auto flex items-center gap-1 pt-3 font-heading text-label uppercase text-text-secondary transition-colors group-hover:text-text-primary">
                View live
                <ArrowUpRight className="h-3 w-3" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
