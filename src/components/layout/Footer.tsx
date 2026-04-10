import { SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-base px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-heading text-sm text-text-tertiary">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-text-tertiary">
          Helsinki, Finland
        </p>
      </div>
    </footer>
  );
}
