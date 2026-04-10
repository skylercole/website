"use client";

import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Cloud,
  Network,
  PenTool,
  Brain,
  Layers,
  Container,
  Cpu,
  RefreshCw,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Cloud,
  Network,
  PenTool,
  Brain,
  Layers,
  Container,
  Cpu,
  RefreshCw,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs tracking-widest text-accent uppercase">
              Capabilities
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-5xl">
              What I deliver
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-4"
        >
          {CAPABILITIES.map((cap, i) => {
            const Icon = ICON_MAP[cap.icon] || Cloud;
            const colSpan =
              cap.size === "large"
                ? "md:col-span-2"
                : cap.size === "medium"
                  ? "md:col-span-2"
                  : "md:col-span-1";

            return (
              <motion.div
                key={cap.title}
                variants={fadeInUp}
                className={`group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_0_40px_rgba(16,185,129,0.08)] ${colSpan}`}
                data-cursor-hover
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <Icon className="mb-4 h-8 w-8 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-heading text-xl font-semibold text-text-primary">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
