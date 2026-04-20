"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
}

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";

function scrambleChar(real: string): string {
  if (real >= "a" && real <= "z") return LOWER[Math.floor(Math.random() * LOWER.length)];
  if (real >= "A" && real <= "Z") return UPPER[Math.floor(Math.random() * UPPER.length)];
  if (real >= "0" && real <= "9") return DIGITS[Math.floor(Math.random() * DIGITS.length)];
  return real;
}

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
            return scrambleChar(char);
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
