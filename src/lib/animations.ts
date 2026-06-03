import { type Variants } from "framer-motion";

// One quiet fade, reused everywhere. No translate, no scale, no theatrics.
const quietFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const fadeIn = quietFade;
export const fadeInUp = quietFade;
export const scaleIn = quietFade;
export const slideInLeft = quietFade;
export const slideInRight = quietFade;

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};
