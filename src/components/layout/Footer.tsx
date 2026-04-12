import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-mark.png"
            alt=""
            width={20}
            height={20}
            className="h-5 w-auto opacity-40"
          />
          <p className="font-heading text-sm text-text-tertiary">
            &copy; 2020-2026 {SITE.name}. All rights reserved.
          </p>
        </div>
        <p className="font-mono text-xs text-text-tertiary">
          Helsinki, Finland
        </p>
      </div>
    </footer>
  );
}
