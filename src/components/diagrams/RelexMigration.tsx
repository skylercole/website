export default function RelexMigration() {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* left cluster (AWS) */}
      <g stroke="rgba(26,23,20,.28)" strokeWidth="1" fill="none">
        <rect x="18" y="40" width="96" height="145" rx="6" />
        <line x1="18" y1="60" x2="114" y2="60" />
      </g>
      <text
        x="28"
        y="55"
        fontFamily="Inter, sans-serif"
        fontSize="8"
        fill="rgba(26,23,20,.5)"
        letterSpacing="1.2"
      >
        AWS
      </text>
      <g fill="rgba(26,23,20,.55)">
        <circle cx="38" cy="80" r="3" />
        <circle cx="66" cy="80" r="3" />
        <circle cx="94" cy="80" r="3" />
        <circle cx="38" cy="105" r="3" />
        <circle cx="66" cy="105" r="3" />
        <circle cx="94" cy="105" r="3" />
        <circle cx="38" cy="130" r="3" />
        <circle cx="66" cy="130" r="3" />
        <circle cx="94" cy="130" r="3" />
        <circle cx="38" cy="155" r="3" />
        <circle cx="66" cy="155" r="3" />
        <circle cx="94" cy="155" r="3" />
      </g>
      {/* arrow */}
      <g stroke="#9c2b2b" strokeWidth="1.2" fill="none">
        <line x1="130" y1="112" x2="268" y2="112" strokeDasharray="3 3" />
        <polyline points="260,106 270,112 260,118" />
      </g>
      <text
        x="199"
        y="104"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="8"
        fill="#9c2b2b"
        letterSpacing="1.2"
      >
        migrate, zero downtime
      </text>
      <text
        x="199"
        y="128"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="7"
        fill="rgba(26,23,20,.42)"
        letterSpacing="1"
      >
        terraform · k8s · kafka
      </text>
      {/* right cluster (Azure) */}
      <g stroke="#9c2b2b" strokeWidth="1" fill="none">
        <rect x="286" y="40" width="96" height="145" rx="6" />
        <line x1="286" y1="60" x2="382" y2="60" />
      </g>
      <text
        x="296"
        y="55"
        fontFamily="Inter, sans-serif"
        fontSize="8"
        fill="#9c2b2b"
        letterSpacing="1.2"
      >
        AZURE
      </text>
      <g fill="#9c2b2b">
        <circle cx="306" cy="80" r="3" />
        <circle cx="334" cy="80" r="3" />
        <circle cx="362" cy="80" r="3" />
        <circle cx="306" cy="105" r="3" />
        <circle cx="334" cy="105" r="3" />
        <circle cx="362" cy="105" r="3" />
        <circle cx="306" cy="130" r="3" />
        <circle cx="334" cy="130" r="3" />
        <circle cx="362" cy="130" r="3" />
        <circle cx="306" cy="155" r="3" />
        <circle cx="334" cy="155" r="3" />
        <circle cx="362" cy="155" r="3" />
      </g>
      <text
        x="18"
        y="210"
        fontFamily="Inter, sans-serif"
        fontSize="7"
        fill="rgba(26,23,20,.42)"
        letterSpacing="1"
      >
      50+ services updated and moved to Kubernetes in Azure
      </text>
    </svg>
  );
}
