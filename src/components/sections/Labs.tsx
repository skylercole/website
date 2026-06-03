"use client";

import { motion } from "framer-motion";
import { LABS, BASE_PATH } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export default function Labs() {
  return (
    <section id="labs" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Labs
            </h2>
            <p className="mt-4 max-w-xl text-text-secondary">
              Projects built outside client engagements. Same engineering
              discipline, different problems.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2"
        >
          {LABS.map((project) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group relative block overflow-hidden rounded-xl border border-border-subtle bg-bg-surface transition-colors duration-300 hover:border-border-hover"
            >
              <div
                className={`relative flex aspect-[5/2] items-center justify-center overflow-hidden border-b border-border-subtle ${project.logoBg}`}
              >
                <img
                  src={`${BASE_PATH}/labs/${project.logo}`}
                  alt={`${project.name} logo`}
                  className="h-1/2 w-auto max-w-[22%] opacity-95 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold text-text-primary md:text-xl">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-text-tertiary transition-colors group-hover:text-text-primary" />
                </div>

                <p className="mt-2 font-heading text-sm font-medium text-accent md:text-base">
                  {project.tagline}
                </p>

                {project.tech.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border-subtle bg-bg-base px-2 py-0.5 text-[11px] text-text-tertiary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-text-tertiary transition-colors group-hover:text-text-primary">
                  View live
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
