"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonClass } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-24">
      <div className="site-container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl font-heading text-display"
        >
          Architecture, cloud, and production code.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 max-w-xl text-lead text-text-secondary"
        >
          25 years of it, from Helsinki.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`group mt-8 ${buttonClass()}`}
        >
          Discuss a project
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </motion.a>
      </div>
    </section>
  );
}
