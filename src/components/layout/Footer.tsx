import { SITE, BASE_PATH } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <img
            src={`${BASE_PATH}/logo-mark.png`}
            alt=""
            width={30}
            height={30}
            className="h-[30px] w-auto opacity-50"
          />
          <p className="font-heading text-sm text-text-tertiary">
            &copy; 2020-2026 {SITE.name}. All rights reserved.
          </p>
        </div>
        <p className="text-xs tracking-wide text-text-tertiary">
          Helsinki, Finland
        </p>
      </div>
    </footer>
  );
}
