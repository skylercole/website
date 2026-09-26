"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";
import { Copy, Check, Mail, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { buttonClass } from "@/components/ui/button";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = SITE.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader label="Contact" />

      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          className="order-first size-24 overflow-hidden rounded-box border border-border-subtle bg-bg-surface md:order-last md:size-32"
        >
          {/* Plain img avoids Next.js static-export basePath bug with unoptimized images */}
          <img
            src="/me.webp"
            alt="Stanislav Stoyanov-Pitkänen"
            width={128}
            height={128}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl"
        >
          <p className="font-heading text-h1">Get in touch.</p>
          <p className="mt-4 text-lead text-text-secondary">
            Send the short version. I&apos;ll tell you where I can help.
          </p>

          {/* Two actions, then the address with copy */}
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href={`mailto:${SITE.email}`}
              className={buttonClass("solid", "lg")}
            >
              <Mail className="h-4 w-4" />
              Email Stanislav
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("outline", "lg")}
            >
              Message on LinkedIn
              <ArrowUpRight className="h-4 w-4 text-text-secondary" />
            </a>
          </div>

          <button
            onClick={handleCopy}
            className="group mt-6 inline-flex items-center gap-2 text-meta text-text-secondary transition-colors duration-300 hover:text-text-primary"
          >
            <span>{SITE.email}</span>
            {copied ? (
              <Check className="h-3.5 w-3.5 text-text-primary" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-text-secondary transition-colors group-hover:text-text-primary" />
            )}
          </button>
          {copied && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-meta text-text-primary"
            >
              Copied.
            </motion.p>
          )}

          <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-meta text-text-secondary">
            <span>{SITE.location}</span>
            <span aria-hidden className="text-border-strong">
              ·
            </span>
            <span>Remote work across time zones.</span>
            <span aria-hidden className="text-border-strong">
              ·
            </span>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline decoration-border-strong underline-offset-2 transition-colors hover:text-text-primary hover:decoration-text-primary"
            >
              GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
