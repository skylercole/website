// The logo lockup is artwork: its size, weights and tracking are exempt from
// the type roles in DESIGN.md. Change it here, deliberately, or not at all.
export default function Wordmark() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 font-heading text-xl font-semibold tracking-tight text-text-primary"
    >
      <span className="font-bold">300</span>
      <span className="font-normal tracking-wide text-text-secondary mx-[1px]">CONSULTING</span>
      {/* Plain img avoids Next.js static-export basePath bug with unoptimized images */}
      <img
        src="/logo-mark.webp"
        alt="300 Consulting"
        width={42}
        height={42}
        decoding="async"
        className="ml-2 hidden h-[42px] w-auto opacity-85 md:block"
      />
    </a>
  );
}
