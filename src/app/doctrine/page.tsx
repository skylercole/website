import type { Metadata } from "next";
import { BASE_PATH, DOCTRINE, SITE } from "@/lib/constants";

const DOCTRINE_URL = `${SITE.url}${BASE_PATH}/doctrine/`;
const DOCTRINE_TITLE = "Doctrine | 300 Consulting";
const DOCTRINE_DESCRIPTION =
  "The five tenets 300 Consulting works by: Duty, Discipline, Craft, Restraint, Finish.";

export const metadata: Metadata = {
  title: DOCTRINE_TITLE,
  description: DOCTRINE_DESCRIPTION,
  alternates: {
    canonical: DOCTRINE_URL,
  },
  openGraph: {
    title: DOCTRINE_TITLE,
    description: DOCTRINE_DESCRIPTION,
    url: DOCTRINE_URL,
    siteName: SITE.name,
    type: "article",
    images: [`${SITE.url}${BASE_PATH}/og.png`],
  },
};

export default function DoctrinePage() {
  return (
    <main className="min-h-screen bg-bg-base print:bg-white">
      <article className="mx-auto max-w-2xl px-8 py-16 print:py-8 print:text-black">
        <header className="mb-12">
          <p className="font-heading text-xs font-semibold tracking-[.22em] uppercase text-[var(--accent-gold)] print:text-neutral-500">
            300 Consulting · Doctrine
          </p>
        </header>
        <ol className="space-y-8">
          {DOCTRINE.map((t) => (
            <li
              key={t.numeral}
              className="grid grid-cols-[44px_1fr] gap-6 items-baseline"
            >
              <span className="font-heading text-3xl font-semibold text-[var(--accent-gold)] print:text-black">
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
        <footer className="mt-16 pt-6 border-t border-border-subtle print:border-neutral-300 text-[10px] tracking-[.2em] uppercase text-text-tertiary print:text-neutral-500">
          Helsinki · {SITE.url.replace(/^https?:\/\//, "")} · rev 2026
        </footer>
      </article>
    </main>
  );
}
