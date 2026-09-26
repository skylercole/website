export default function RoclaIoT() {
  return (
    <svg
      viewBox="0 0 400 225"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden
    >
      <text x="18" y="34" fontFamily="Inter, sans-serif" fontSize="10" className="fill-text-secondary" letterSpacing="1">
        AGV FLEET
      </text>

      {/* three AGV glyphs */}
      <g className="stroke-border-strong" strokeWidth="1" fill="none">
        <rect x="20" y="54" width="56" height="36" rx="3" />
        <circle cx="32" cy="94" r="4" />
        <circle cx="64" cy="94" r="4" />

        <rect x="20" y="108" width="56" height="36" rx="3" />
        <circle cx="32" cy="148" r="4" />
        <circle cx="64" cy="148" r="4" />

        <rect x="20" y="162" width="56" height="36" rx="3" />
        <circle cx="32" cy="202" r="4" />
        <circle cx="64" cy="202" r="4" />
      </g>

      {/* signal lines into dashboard */}
      <g className="stroke-border-strong" strokeWidth="1" fill="none">
        <path d="M76 72 C 120 72, 140 112, 172 112" strokeDasharray="2 3" />
        <path d="M76 126 L 172 122" strokeDasharray="2 3" />
        <path d="M76 180 C 120 180, 140 132, 172 132" strokeDasharray="2 3" />
      </g>

      {/* dashboard box */}
      <g className="stroke-border-strong" strokeWidth="1" fill="none">
        <rect x="172" y="82" width="108" height="86" rx="6" />
        <line x1="172" y1="100" x2="280" y2="100" />
        <polyline points="182,150 200,138 218,144 236,124 254,132 270,116" />
        <circle cx="200" cy="138" r="1.6" className="fill-text-secondary" stroke="none" />
        <circle cx="218" cy="144" r="1.6" className="fill-text-secondary" stroke="none" />
        <circle cx="236" cy="124" r="1.6" className="fill-text-secondary" stroke="none" />
        <circle cx="254" cy="132" r="1.6" className="fill-text-secondary" stroke="none" />
        <circle cx="270" cy="116" r="1.6" className="fill-accent" stroke="none" />
      </g>
      <text x="180" y="95" fontFamily="Inter, sans-serif" fontSize="9" className="fill-text-secondary" letterSpacing="1">
        IOT DASHBOARD
      </text>

      {/* arrow to leads */}
      <g className="stroke-accent" strokeWidth="1.2" fill="none">
        <line x1="280" y1="125" x2="324" y2="125" strokeDasharray="3 3" />
        <polyline points="316,119 326,125 316,131" />
      </g>

      {/* predictive maintenance node */}
      <g className="stroke-accent" strokeWidth="1" fill="none">
        <rect x="326" y="95" width="56" height="60" rx="6" />
        <circle cx="354" cy="125" r="3" className="fill-accent" stroke="none" />
      </g>
      <text x="354" y="113" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" className="fill-accent" letterSpacing="1">
        PREDICT
      </text>
      <text x="354" y="146" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" className="fill-accent" letterSpacing="1">
        MAINT.
      </text>

      <text x="18" y="218" fontFamily="Inter, sans-serif" fontSize="8" className="fill-text-secondary" letterSpacing="0.6">
        telemetry to faults caught before downtime
      </text>
    </svg>
  );
}
