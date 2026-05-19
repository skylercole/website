import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs tracking-widest uppercase text-[var(--accent-gold)]">
        § 404
      </span>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight md:text-6xl">
        This page is not here.
      </h1>
      <p className="mt-4 max-w-md text-text-secondary">
        The URL may be wrong, or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full border border-accent/30 bg-accent/10 px-6 py-3 font-heading text-sm text-accent transition-all duration-300 hover:border-accent hover:bg-accent/20"
      >
        Back to the site
      </Link>
    </main>
  );
}
