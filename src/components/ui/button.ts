// Two button styles, two sizes, one corner. Returns a class string so it works
// on <a>, motion.a and next/link alike.
const BASE =
  "inline-flex items-center justify-center gap-2 rounded-box border font-heading transition-colors duration-300";

const VARIANT = {
  outline:
    "border-border-subtle text-text-primary hover:border-border-strong hover:bg-text-primary/5",
  solid:
    "border-text-primary bg-text-primary text-bg-base hover:bg-text-primary/85",
};

const SIZE = {
  sm: "px-4 py-2 text-meta",
  lg: "px-6 py-3 text-body",
};

export function buttonClass(
  variant: keyof typeof VARIANT = "outline",
  size: keyof typeof SIZE = "sm",
) {
  return `${BASE} ${VARIANT[variant]} ${SIZE[size]}`;
}
