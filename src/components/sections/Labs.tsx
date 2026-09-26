"use client";

import { motion } from "framer-motion";
import { LABS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InlineList from "@/components/ui/InlineList";
import LabCardArt from "@/components/art/LabCardArt";
import { ArrowUpRight } from "lucide-react";

const CARD =
  "group relative flex flex-col overflow-hidden rounded-box border border-border-subtle bg-bg-surface transition-colors duration-300 hover:border-border-strong";

const VIEW_LIVE =
  "mt-auto flex items-center gap-1 font-heading text-label uppercase text-text-secondary transition-colors group-hover:text-text-primary";

export default function Labs() {
  return (
    <Section id="labs">
      <SectionHeader
        label="Labs"
        intro="Projects built outside client engagements. Same engineering discipline, different problems."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4"
      >
        {LABS.map((project) =>
          project.featured ? (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className={`${CARD} col-span-2 md:flex-row lg:col-span-4`}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border-subtle md:w-1/2 md:border-r md:border-b-0">
                <LabCardArt project={project} />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-h3 text-text-primary">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-text-secondary transition-colors group-hover:text-text-primary" />
                </div>

                <p className="mt-2 text-body text-text-secondary">
                  {project.tagline}
                </p>

                {project.stats && (
                  <InlineList
                    items={project.stats}
                    className="mt-4 text-meta text-text-secondary"
                  />
                )}

                <div className={`${VIEW_LIVE} pt-6`}>
                  View live
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </motion.a>
          ) : (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className={CARD}
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

                <div className={`${VIEW_LIVE} pt-3`}>
                  View live
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </motion.a>
          ),
        )}
      </motion.div>
    </Section>
  );
}
