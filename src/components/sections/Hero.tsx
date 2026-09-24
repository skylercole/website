"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl"
        >
          Architecture, cloud, and production code.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          25 years of it, from Helsinki.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border-subtle px-5 py-2 font-heading text-sm text-text-primary transition-all duration-300 hover:border-text-primary/30 hover:bg-text-primary/[0.04]"
        >
          Discuss a project
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </motion.a>
      </div>
    </section>
  );
}
