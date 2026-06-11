"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE, BASE_PATH } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-bg-base/95"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-heading text-xl font-semibold tracking-tight text-text-primary"
        >
          <span className="font-bold">300</span>
          <span className="font-normal tracking-wide text-text-secondary mx-[1px]">CONSULTING</span>
          {/* Plain img avoids Next.js static-export basePath bug with unoptimized images */}
          <img
            src={`${BASE_PATH}/logo-mark.webp`}
            alt="300 Consulting"
            width={42}
            height={42}
            decoding="async"
            className="ml-2 hidden h-[42px] w-auto opacity-85 md:block"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-heading text-sm tracking-wide text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full border border-border-subtle bg-transparent px-5 py-2 font-heading text-sm text-text-primary transition-all duration-300 hover:border-text-primary/30 hover:bg-text-primary/[0.04]"
          >
            Email
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border-subtle bg-bg-base md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-heading text-lg text-text-secondary transition-colors hover:text-text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 inline-block rounded-full border border-border-subtle bg-transparent px-5 py-2 text-center font-heading text-sm text-text-primary transition-all duration-300 hover:border-text-primary/30 hover:bg-text-primary/[0.04]"
                onClick={() => setMobileOpen(false)}
              >
                Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
