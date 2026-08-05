"use client";

import { motion } from "framer-motion";

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
          24 years of it, from Helsinki.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10"
        >
          <span aria-hidden className="block h-px w-6 bg-[var(--accent-gold)]" />
          <p className="mt-4 max-w-xl font-heading text-base leading-relaxed text-text-secondary md:text-lg">
            In an era where machines can outthink us, my job is to outjudge the machines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
