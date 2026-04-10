"use client";

import { type ReactNode } from "react";

interface LogoMarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function LogoMarquee({
  children,
  reverse = false,
  className = "",
}: LogoMarqueeProps) {
  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      data-cursor-hover
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-bg-base to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-bg-base to-transparent" />

      <div
        className={`flex w-max gap-12 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
}
