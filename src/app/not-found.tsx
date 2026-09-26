import Link from "next/link";
import { buttonClass } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-heading text-label uppercase text-text-secondary">
        404
      </span>
      <h1 className="mt-4 font-heading text-h1">This page is not here.</h1>
      <p className="mt-4 max-w-md text-body text-text-secondary">
        The URL may be wrong, or the page may have moved.
      </p>
      <Link href="/" className={`mt-8 ${buttonClass("outline", "lg")}`}>
        Back to the site
      </Link>
    </main>
  );
}
