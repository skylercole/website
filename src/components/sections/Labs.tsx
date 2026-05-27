"use client";

import { motion } from "framer-motion";
import { LABS, BASE_PATH } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export default function Labs() {
  return (
    <section id="labs" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs tracking-widest text-accent uppercase">
              § Labs
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-5xl">
              Independent work.
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
              className={`group relative block overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br ${project.gradient} bg-bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_0_60px_rgba(16,185,129,0.06)]`}
              data-cursor-hover
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
                  <h3 className="font-heading text-lg font-bold text-text-primary md:text-xl">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-text-tertiary transition-colors group-hover:text-accent" />
                </div>

                <p className="mt-2 font-heading text-sm font-medium text-accent md:text-base">
                  {project.tagline}
                </p>

                {project.tech.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border-subtle bg-bg-base/50 px-2 py-0.5 font-mono text-[10px] text-text-tertiary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-text-tertiary transition-colors group-hover:text-accent">
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
