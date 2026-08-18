"use client";

import { motion } from "framer-motion";
import { LABS, BASE_PATH, type LabProject } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

function LabCardArt({ project }: { project: LabProject }) {
  const base = `${BASE_PATH}/labs`;

  switch (project.id) {
    case "parallel-editions":
      return (
        <div className="relative h-full overflow-hidden bg-[#f5efe3]">
          <img
            src={`${base}/parallel-editions-hero.png`}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf3e3]/35 via-[#f5efe3]/15 to-[#e8dcc8]/50" />
          <div className="absolute inset-x-0 bottom-0 top-6 flex items-end justify-center pb-3">
            <div className="relative flex h-[72%] w-[88%] items-end justify-center">
              <img
                src={`${base}/parallel-editions-sherlock.jpg`}
                alt=""
                aria-hidden
                className="absolute bottom-0 left-[4%] z-10 h-[78%] w-[30%] rotate-[-7deg] rounded-sm object-cover shadow-[0_8px_24px_rgba(80,40,20,0.28)] ring-1 ring-black/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-9deg]"
              />
              <img
                src={`${base}/parallel-editions-gatsby.webp`}
                alt=""
                aria-hidden
                className="relative z-20 h-[88%] w-[34%] rounded-sm object-cover shadow-[0_12px_32px_rgba(80,40,20,0.35)] ring-1 ring-black/10 transition-transform duration-500 group-hover:-translate-y-2"
              />
              <img
                src={`${base}/parallel-editions-oz.jpg`}
                alt=""
                aria-hidden
                className="absolute bottom-0 right-[4%] z-10 h-[78%] w-[30%] rotate-[7deg] rounded-sm object-cover shadow-[0_8px_24px_rgba(80,40,20,0.28)] ring-1 ring-black/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[9deg]"
              />
            </div>
          </div>
          {project.stats && (
            <div className="absolute left-2.5 top-2.5 flex flex-wrap gap-1">
              {project.stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full bg-[#18171a]/85 px-2 py-0.5 text-[9px] font-medium tracking-wide text-white/90"
                >
                  {stat}
                </span>
              ))}
            </div>
          )}
        </div>
      );

    case "playable-me":
      return (
        <div className="relative h-full overflow-hidden bg-[#080c0d]">
          <img
            src={`${base}/playableme-hero.webp`}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080c0d]/60" />
          <div className="absolute inset-x-0 bottom-0 top-6 flex items-end justify-center pb-3">
            <div className="relative flex h-[72%] w-[88%] items-end justify-center">
              <img
                src={`${base}/playableme-cyberpunk.webp`}
                alt=""
                aria-hidden
                className="absolute bottom-0 left-[4%] z-10 h-[78%] w-[30%] rotate-[-7deg] rounded-sm object-cover shadow-[0_8px_24px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-9deg]"
              />
              <img
                src={`${base}/playableme-starfield.webp`}
                alt=""
                aria-hidden
                className="relative z-20 h-[88%] w-[34%] rounded-sm object-cover shadow-[0_12px_32px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-2"
              />
              <img
                src={`${base}/playableme-fallout.webp`}
                alt=""
                aria-hidden
                className="absolute bottom-0 right-[4%] z-10 h-[78%] w-[30%] rotate-[7deg] rounded-sm object-cover shadow-[0_8px_24px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[9deg]"
              />
            </div>
          </div>
        </div>
      );

    case "belter-charts":
      return (
        <div className="flex h-full items-center justify-center overflow-hidden bg-black p-1">
          <img
            src={`${base}/belter-charts-hero.png`}
            alt=""
            aria-hidden
            className="h-full w-full object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
          />
        </div>
      );

    case "barline":
      return (
        <div className="flex h-full items-center justify-center overflow-hidden bg-black p-1">
          <img
            src={`${base}/barline-hero.png`}
            alt=""
            aria-hidden
            className="h-full w-full object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
          />
        </div>
      );

    default:
      return null;
  }
}

export default function Labs() {
  return (
    <section id="labs" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mb-8">
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
          className="grid grid-cols-2 gap-3 md:gap-4"
        >
          {LABS.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-border-subtle bg-bg-surface transition-all duration-300 hover:border-border-hover hover:shadow-[0_8px_32px_rgba(24,23,26,0.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border-subtle">
                <LabCardArt project={project} />
              </div>

              <div className="flex flex-1 flex-col p-3 md:p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-sm font-semibold leading-snug text-text-primary md:text-base">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-tertiary transition-colors group-hover:text-text-primary" />
                </div>

                <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-text-secondary md:text-xs">
                  {project.tagline}
                </p>

                <div className="mt-auto flex items-center gap-1 pt-2.5 text-[10px] uppercase tracking-[0.14em] text-text-tertiary transition-colors group-hover:text-text-primary">
                  <span
                    className="mr-1 inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                  View live
                  <ArrowUpRight className="h-2.5 w-2.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
