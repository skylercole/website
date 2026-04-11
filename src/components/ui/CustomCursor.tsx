"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const scale = useMotionValue(1);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  const springScale = useSpring(scale, { damping: 20, stiffness: 400 });

  useEffect(() => {
    // pointer:coarse = touch/stylus primary input; pointer:fine = mouse.
    // navigator.maxTouchPoints > 0 alone is wrong — Windows laptops expose
    // touch points even when the user is on a mouse, causing false positives.
    const isTouchPrimary = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchPrimary) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        scale.set(2.5);
      }
    };

    const handleMouseOut = () => {
      scale.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, scale]);

  // Don't render on touch devices (handled via SSR-safe check in the component)
  return (
    <>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x,
          y,
          scale: springScale,
          translateX: "-50%",
          translateY: "-50%",
          // Stays off-screen until first mousemove so it never flashes at (0,0)
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Avoid mix-blend-difference — it silently breaks on Windows with
            GPU compositing and renders the element invisible */}
        <div className="h-3 w-3 rounded-full border border-accent bg-accent/40" />
      </motion.div>
    </>
  );
}
