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
              A developer, first.
              <br />
              <span className="text-accent">
                24 years close to production.
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
              300 Consulting is a one-person firm. One point of contact, from
              first conversation to production.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              The clients range from early-stage companies to global enterprises.
              The job stays the same: make the system work, and make it
              maintainable.
            </p>

            <p className="text-lg leading-relaxed text-text-secondary">
              When a project needs more hands, I bring in people I trust and
              have worked with before, including{" "}
              <a
                href="http://eladaus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-2 hover:underline"
              >
                Eladaus
              </a>{" "}
              and{" "}
              <a
                href="https://techie.fi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-2 hover:underline"
              >
                Techie Solutions
              </a>
              . The accountability stays in one place.
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
