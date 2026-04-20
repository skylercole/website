import { DOCTRINE, SITE } from "@/lib/constants";

export default function DoctrinePage() {
  return (
    <main className="min-h-screen bg-bg-base print:bg-white">
      <article className="mx-auto max-w-2xl px-8 py-16 print:py-8 print:text-black">
        <header className="mb-12">
          <p className="font-mono text-xs tracking-[.22em] uppercase text-[var(--accent-gold)] print:text-neutral-500">
            § 300 Consulting · Doctrine
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight print:text-3xl">
            What the work is held to.
          </h1>
        </header>
        <ol className="space-y-8">
          {DOCTRINE.map((t) => (
            <li
              key={t.numeral}
              className="grid grid-cols-[44px_1fr] gap-6 items-baseline"
            >
              <span className="font-heading text-3xl font-bold text-[var(--accent-gold)] print:text-black">
                {t.numeral}.
              </span>
              <div>
                <h2 className="font-heading text-xl font-semibold">
                  {t.title}
                </h2>
                <p className="mt-2 text-text-secondary print:text-neutral-700 leading-relaxed">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <footer className="mt-16 pt-6 border-t border-border-subtle print:border-neutral-300 font-mono text-[10px] tracking-[.2em] uppercase text-text-tertiary print:text-neutral-500">
          Helsinki · {SITE.url.replace(/^https?:\/\//, "")} · rev 2026
        </footer>
      </article>
    </main>
  );
}
