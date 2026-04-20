export default function RoclaIoT() {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <text x="18" y="34" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(245,245,247,.5)" letterSpacing="1.2">
        AGV FLEET
      </text>

      {/* three AGV glyphs */}
      <g stroke="rgba(255,255,255,.18)" strokeWidth="1" fill="none">
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
      <g stroke="rgba(255,255,255,.18)" strokeWidth="1" fill="none">
        <path d="M76 72 C 120 72, 140 112, 172 112" strokeDasharray="2 3" />
        <path d="M76 126 L 172 122" strokeDasharray="2 3" />
        <path d="M76 180 C 120 180, 140 132, 172 132" strokeDasharray="2 3" />
      </g>

      {/* dashboard box */}
      <g stroke="rgba(255,255,255,.18)" strokeWidth="1" fill="none">
        <rect x="172" y="82" width="108" height="86" rx="6" />
        <line x1="172" y1="100" x2="280" y2="100" />
        <polyline points="182,150 200,138 218,144 236,124 254,132 270,116" />
        <circle cx="200" cy="138" r="1.6" fill="rgba(245,245,247,.6)" stroke="none" />
        <circle cx="218" cy="144" r="1.6" fill="rgba(245,245,247,.6)" stroke="none" />
        <circle cx="236" cy="124" r="1.6" fill="rgba(245,245,247,.6)" stroke="none" />
        <circle cx="254" cy="132" r="1.6" fill="rgba(245,245,247,.6)" stroke="none" />
        <circle cx="270" cy="116" r="1.6" fill="#10b981" stroke="none" />
      </g>
      <text x="180" y="95" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="rgba(245,245,247,.5)" letterSpacing="1.2">
        IOT DASHBOARD
      </text>

      {/* arrow to leads */}
      <g stroke="#10b981" strokeWidth="1.2" fill="none">
        <line x1="280" y1="125" x2="324" y2="125" strokeDasharray="3 3" />
        <polyline points="316,119 326,125 316,131" />
      </g>

      {/* leads node */}
      <g stroke="#10b981" strokeWidth="1" fill="none">
        <rect x="326" y="95" width="56" height="60" rx="6" />
        <circle cx="354" cy="125" r="3" fill="#10b981" stroke="none" />
      </g>
      <text x="333" y="114" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#10b981" letterSpacing="1.2">
        SALES
      </text>
      <text x="333" y="148" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#10b981" letterSpacing="1.2">
        LEADS
      </text>

      <text x="18" y="215" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="rgba(245,245,247,.35)" letterSpacing="1">
        // maintenance data → revenue signal
      </text>
    </svg>
  );
}
