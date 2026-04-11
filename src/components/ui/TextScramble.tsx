"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function TextScramble({
  text,
  className = "",
  speed = 30,
}: TextScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayText, setDisplayText] = useState(
    text.replace(/[^\s]/g, " ")
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let iteration = 0;
    const totalIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= totalIterations) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed]);

  return (
    // Outer span is block-level so the invisible ghost can reserve the correct
    // wrapped height; the scrambled text is then absolutely overlaid — this
    // prevents the varying char widths from causing layout shifts on mobile.
    <span ref={ref} className={`relative block ${className}`}>
      {/* Ghost: invisible real text that locks in the correct line-wrap height */}
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      {/* Scrambled text sits on top without affecting document flow */}
      <span className="absolute inset-0 text-center">{displayText}</span>
    </span>
  );
}
