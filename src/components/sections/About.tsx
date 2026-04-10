"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Pull quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInLeft}
          >
            <p className="font-heading text-3xl font-bold leading-snug tracking-tight md:text-4xl lg:text-5xl">
              You&apos;re not hiring a developer.
              <br />
              <span className="text-accent">
                You&apos;re hiring 24 years of knowing what breaks at scale.
              </span>
            </p>
          </motion.div>

          {/* Body */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInRight}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              300 Consulting is a one-person firm by design. When you work with
              me, you get a Microsoft Certified Azure Solutions Architect with
              direct, senior-level attention on every decision — from initial
              discovery through production deployment.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              I&apos;ve delivered for Fortune 100 companies and early-stage startups
              alike. The scope changes. The standard doesn&apos;t.
            </p>

            {/* Certification badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 rounded-lg border border-border-subtle bg-bg-surface px-4 py-3"
            >
              <Award className="h-8 w-8 text-accent" />
              <div>
                <p className="font-heading text-sm font-semibold text-text-primary">
                  Microsoft Certified
                </p>
                <p className="text-xs text-text-secondary">
                  Azure Solutions Architect Expert
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
