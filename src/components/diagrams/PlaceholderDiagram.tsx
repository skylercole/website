export default function PlaceholderDiagram() {
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 8px, rgba(255,255,255,.015) 8px 9px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-mono text-[11px] uppercase tracking-[.2em] text-text-tertiary"
          style={{ opacity: 0.4 }}
        >
          // diagram — coming
        </span>
      </div>
    </div>
  );
}
