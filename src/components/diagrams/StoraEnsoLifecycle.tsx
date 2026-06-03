export default function StoraEnsoLifecycle() {
  const stages = [
    { x: 40, label: "PRODUCTION", emerald: true },
    { x: 112, label: "IOT", emerald: true },
    { x: 184, label: "LOGISTICS", emerald: true },
    { x: 256, label: "CONSUMER", emerald: false },
    { x: 328, label: "RECYCLE", emerald: false },
  ];

  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <text x="18" y="38" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(26,23,20,.5)" letterSpacing="1.2">
        LIFECYCLE
      </text>

      {/* timeline rail */}
      <line
        x1="40"
        y1="112"
        x2="328"
        y2="112"
        stroke="rgba(26,23,20,.28)"
        strokeWidth="1"
      />

      {/* recycling return arc */}
      <g stroke="rgba(26,23,20,.28)" strokeWidth="1" fill="none" strokeDasharray="2 3">
        <path d="M328 112 C 360 112, 360 180, 200 180 C 40 180, 40 130, 40 112" />
      </g>

      {stages.map((s) => {
        const color = s.emerald ? "#9c2b2b" : "rgba(26,23,20,.5)";
        const ring = s.emerald ? "#9c2b2b" : "rgba(26,23,20,.28)";
        return (
          <g key={s.label}>
            <circle cx={s.x} cy={112} r={s.emerald ? 5 : 3.5} fill={color} stroke="none" />
            {s.emerald && (
              <circle cx={s.x} cy={112} r={10} fill="none" stroke={ring} strokeWidth="1" />
            )}
            <text
              x={s.x}
              y={92}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="7"
              fill={color}
              letterSpacing="1.2"
            >
              {s.label}
            </text>
          </g>
        );
      })}

      {/* connectors between stages */}
      <g stroke="#9c2b2b" strokeWidth="1" fill="none">
        <polyline points="50,108 58,112 50,116" />
        <polyline points="122,108 130,112 122,116" />
        <polyline points="194,108 202,112 194,116" />
      </g>
      <g stroke="rgba(26,23,20,.28)" strokeWidth="1" fill="none">
        <polyline points="266,108 274,112 266,116" />
      </g>

      <text x="40" y="140" fontFamily="Inter, sans-serif" fontSize="7" fill="rgba(26,23,20,.42)" letterSpacing="1">
        wood-based buildings · IoT monitoring · consumer packaging
      </text>
      <text x="40" y="210" fontFamily="Inter, sans-serif" fontSize="7" fill="rgba(26,23,20,.42)" letterSpacing="1">
        every stage measured
      </text>
    </svg>
  );
}
