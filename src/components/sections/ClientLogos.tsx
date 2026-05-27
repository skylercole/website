"use client";

import { CLIENT_LOGOS } from "@/lib/constants";
import LogoMarquee from "@/components/ui/LogoMarquee";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClientLogos() {
  const firstHalf = CLIENT_LOGOS.slice(0, Math.ceil(CLIENT_LOGOS.length / 2));
  const secondHalf = CLIENT_LOGOS.slice(Math.ceil(CLIENT_LOGOS.length / 2));

  return (
    <section className="border-y border-border-subtle bg-bg-surface/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="mb-12 text-center font-heading text-sm tracking-wider text-text-tertiary uppercase">
            § Past clients
          </p>
        </ScrollReveal>
      </div>

      <div className="space-y-8">
        <LogoMarquee>
          {firstHalf.map((logo) => (
            <LogoPlaceholder key={logo} name={logo} />
          ))}
        </LogoMarquee>

        <LogoMarquee reverse>
          {secondHalf.map((logo) => (
            <LogoPlaceholder key={logo} name={logo} />
          ))}
        </LogoMarquee>
      </div>
    </section>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="flex h-16 w-44 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-surface/50 px-6 transition-all duration-300 hover:border-border-hover hover:bg-bg-surface"
      data-cursor-hover
    >
      <span className="font-heading text-sm font-medium text-text-tertiary transition-colors duration-300 hover:text-text-primary whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
