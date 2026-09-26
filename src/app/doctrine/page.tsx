import type { Metadata } from "next";
import { DOCTRINE, SITE } from "@/lib/constants";
import { Rule } from "@/components/ui/Tick";

const DOCTRINE_URL = `${SITE.url}/doctrine/`;
const DOCTRINE_TITLE = "Doctrine | 300 Consulting";
const DOCTRINE_DESCRIPTION =
  "The four tenets 300 Consulting works by: Discipline, Craft, Restraint, Finish.";

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
    images: [`${SITE.url}/og.png`],
  },
};

export default function DoctrinePage() {
  return (
    <main className="min-h-screen bg-bg-base print:bg-white">
      <article className="mx-auto max-w-2xl px-8 py-16 print:py-8 print:text-black">
        <header className="mb-12">
          <h1 className="font-heading text-label uppercase text-text-secondary print:text-neutral-500">
            300 Consulting · Doctrine
          </h1>
          <div className="mt-4">
            <Rule />
          </div>
        </header>
        <ol className="space-y-8">
          {DOCTRINE.map((t) => (
            <li
              key={t.numeral}
              className="grid grid-cols-[4rem_1fr] items-baseline gap-6"
            >
              <span className="font-heading text-h2 text-mark print:text-black">
                {t.numeral}.
              </span>
              <div>
                <h2 className="font-heading text-h3">{t.title}</h2>
                <p className="mt-2 text-body text-text-secondary print:text-neutral-700">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <footer className="mt-16 border-t border-border-subtle pt-6 font-heading text-label uppercase text-text-secondary print:border-neutral-300 print:text-neutral-500">
          Helsinki · {SITE.url.replace(/^https?:\/\//, "")} · rev 2026
        </footer>
      </article>
    </main>
  );
}
