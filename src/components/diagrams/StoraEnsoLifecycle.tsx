export default function StoraEnsoLifecycle() {
  const stages = [
    { x: 52, label: "PRODUCTION", active: true },
    { x: 124, label: "IOT", active: true },
    { x: 196, label: "LOGISTICS", active: true },
    { x: 268, label: "CONSUMER", active: false },
    { x: 340, label: "RECYCLE", active: false },
  ];

  return (
    <svg
      viewBox="0 0 400 225"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden
    >
      <text x="18" y="38" fontFamily="Inter, sans-serif" fontSize="10" className="fill-text-secondary" letterSpacing="1">
        LIFECYCLE
      </text>

      {/* timeline rail */}
      <line
        x1="52"
        y1="112"
        x2="340"
        y2="112"
        className="stroke-border-strong"
        strokeWidth="1"
      />

      {/* recycling return arc */}
      <g className="stroke-border-strong" strokeWidth="1" fill="none" strokeDasharray="2 3">
        <path d="M340 112 C 372 112, 372 180, 212 180 C 52 180, 52 130, 52 112" />
      </g>

      {stages.map((s) => {
        const color = s.active ? "fill-accent" : "fill-text-secondary";
        return (
          <g key={s.label}>
            <circle cx={s.x} cy={112} r={s.active ? 5 : 3.5} className={color} stroke="none" />
            {s.active && (
              <circle cx={s.x} cy={112} r={10} fill="none" className="stroke-accent" strokeWidth="1" />
            )}
            <text
              x={s.x}
              y={92}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              className={color}
              letterSpacing="1"
            >
              {s.label}
            </text>
          </g>
        );
      })}

      {/* connectors between stages */}
      <g className="stroke-accent" strokeWidth="1" fill="none">
        <polyline points="62,108 70,112 62,116" />
        <polyline points="134,108 142,112 134,116" />
        <polyline points="206,108 214,112 206,116" />
      </g>
      <g className="stroke-border-strong" strokeWidth="1" fill="none">
        <polyline points="278,108 286,112 278,116" />
      </g>

      <text x="18" y="202" fontFamily="Inter, sans-serif" fontSize="8" className="fill-text-secondary" letterSpacing="0.6">
        wood-based buildings · IoT monitoring · consumer packaging
      </text>
      <text x="18" y="216" fontFamily="Inter, sans-serif" fontSize="8" className="fill-text-secondary" letterSpacing="0.6">
        every stage measured
      </text>
    </svg>
  );
}
