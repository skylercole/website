// The site's one ornament: a short gold hairline. It ends every section rule,
// sits above the credo and separates items in a line. Drawn with borders, not
// backgrounds, so it survives print.
export function Tick({ short = false }: { short?: boolean }) {
  return (
    <span
      aria-hidden
      className={`block shrink-0 border-t border-mark ${short ? "w-4" : "w-6"}`}
    />
  );
}

export function Rule() {
  return (
    <div aria-hidden className="flex items-center gap-4">
      <span className="flex-1 border-t border-border-subtle" />
      <Tick />
    </div>
  );
}
