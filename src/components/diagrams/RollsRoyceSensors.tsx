export default function RollsRoyceSensors() {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* sensor nodes (left) */}
      <g stroke="rgba(26,23,20,.28)" strokeWidth="1" fill="none">
        {/* LiDAR */}
        <rect x="20" y="46" width="72" height="40" rx="4" />
        <circle cx="34" cy="66" r="6" />
        <circle cx="34" cy="66" r="2.5" fill="rgba(26,23,20,.55)" stroke="none" />
        {/* Camera */}
        <rect x="20" y="102" width="72" height="40" rx="4" />
        <rect x="30" y="114" width="20" height="16" rx="2" />
        <circle cx="40" cy="122" r="4" />
        {/* Radar */}
        <rect x="20" y="158" width="72" height="40" rx="4" />
        <path d="M30 186 A 14 14 0 0 1 56 186" />
        <path d="M34 186 A 9 9 0 0 1 52 186" />
        <line x1="43" y1="186" x2="43" y2="176" />
      </g>
      <text x="54" y="60" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(26,23,20,.5)" letterSpacing="1.2">
        LIDAR
      </text>
      <text x="54" y="116" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(26,23,20,.5)" letterSpacing="1.2">
        CAMERA
      </text>
      <text x="54" y="172" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(26,23,20,.5)" letterSpacing="1.2">
        RADAR
      </text>

      {/* connectors into AI box */}
      <g stroke="rgba(26,23,20,.28)" strokeWidth="1" fill="none">
        <path d="M92 66 C 130 66, 140 112, 170 112" />
        <path d="M92 122 L 170 122" />
        <path d="M92 178 C 130 178, 140 132, 170 132" />
      </g>

      {/* AI box (center) */}
      <g stroke="#9c2b2b" strokeWidth="1.2" fill="none">
        <rect x="170" y="92" width="110" height="60" rx="6" />
      </g>
      <text x="180" y="118" fontFamily="Inter, sans-serif" fontSize="9" fill="#9c2b2b" letterSpacing="1.4">
        AI OBJECT
      </text>
      <text x="180" y="132" fontFamily="Inter, sans-serif" fontSize="9" fill="#9c2b2b" letterSpacing="1.4">
        DETECTION
      </text>

      {/* arrow to remote ops */}
      <g stroke="#9c2b2b" strokeWidth="1.2" fill="none">
        <line x1="280" y1="122" x2="334" y2="122" strokeDasharray="3 3" />
        <polyline points="326,116 336,122 326,128" />
      </g>

      {/* remote ops node */}
      <g stroke="#9c2b2b" strokeWidth="1" fill="none">
        <rect x="336" y="92" width="56" height="60" rx="6" />
        <circle cx="364" cy="118" r="3" fill="#9c2b2b" stroke="none" />
        <line x1="351" y1="134" x2="377" y2="134" />
      </g>
      <text x="341" y="108" fontFamily="Inter, sans-serif" fontSize="7" fill="#9c2b2b" letterSpacing="1.2">
        REMOTE
      </text>
      <text x="341" y="148" fontFamily="Inter, sans-serif" fontSize="7" fill="#9c2b2b" letterSpacing="1.2">
        OPS
      </text>

      <text x="18" y="215" fontFamily="Inter, sans-serif" fontSize="7" fill="rgba(26,23,20,.42)" letterSpacing="1">
      sensor fusion → autonomous shipping
      </text>
    </svg>
  );
}
