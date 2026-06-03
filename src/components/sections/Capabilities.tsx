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
    <section id="capabilities" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Capabilities
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4"
        >
          {CAPABILITIES.map((cap) => {
            const Icon = ICON_MAP[cap.icon] || Cloud;

            return (
              <motion.div
                key={cap.title}
                variants={fadeInUp}
                className="bg-bg-base p-8 transition-colors duration-300 hover:bg-bg-surface"
              >
                <Icon className="mb-4 h-6 w-6 text-text-tertiary" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
