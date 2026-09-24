"use client";

import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Cloud, PenTool, Layers } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Cloud,
  PenTool,
  Layers,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Capabilities
            </h2>
          </div>
        </ScrollReveal>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border-subtle bg-border-subtle lg:grid-cols-3"
        >
          {CAPABILITIES.primary.map((cap) => {
            const Icon = ICON_MAP[cap.icon] || Cloud;

            return (
              <motion.li
                key={cap.title}
                variants={fadeInUp}
                className="flex flex-col bg-bg-base p-8 transition-colors duration-300 hover:bg-bg-surface md:p-10"
              >
                <Icon className="mb-5 h-7 w-7 text-text-tertiary" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-semibold text-text-primary md:text-2xl">
                  {cap.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  {cap.description}
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-2 pt-6 text-sm text-text-tertiary">
                  {cap.detail.map((item, i) => (
                    <li key={item} className="flex items-center gap-2">
                      {item}
                      {i < cap.detail.length - 1 && <span aria-hidden>·</span>}
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </motion.ul>

        <ScrollReveal>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 font-heading text-base">
            <span className="text-text-tertiary">Also:</span>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 text-text-secondary">
              {CAPABILITIES.supporting.map((item, i) => (
                <li key={item} className="flex items-center gap-5">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="h-px w-4 bg-[var(--accent-gold)]"
                    />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
