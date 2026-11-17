"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <Section id="about">
      <SectionHeader label="About" />

      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Pull quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideInLeft}
        >
          <p className="font-heading text-h1">
            A developer, first.
            <br />
            <span className="text-text-secondary">
              25 years close to production.
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
          <p className="text-lead text-text-secondary">
            300 Consulting is a one-person firm. The same person handles the
            work from the first conversation to production.
          </p>
          <p className="text-lead text-text-secondary">
            The clients range from early-stage companies to global enterprises.
          </p>

          <p className="text-lead text-text-secondary">
            When a project needs more hands, trusted people 300 Consulting has
            worked with before can join, including{" "}
            <a
              href="http://eladaus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline underline-offset-2 decoration-border-strong hover:decoration-text-primary"
            >
              Eladaus
            </a>{" "}
            and{" "}
            <a
              href="https://techie.fi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline underline-offset-2 decoration-border-strong hover:decoration-text-primary"
            >
              Techie Solutions
            </a>
            .
          </p>

          <p className="text-meta text-text-secondary">
            Microsoft Certified: Azure Solutions Architect Expert
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
