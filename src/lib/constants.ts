export const SITE = {
  name: "300 Consulting",
  title: "300 Consulting | Solution Architecture & Cloud Engineering",
  description:
    "Solution architecture and cloud engineering from Helsinki. 25+ years building systems that stay useful.",
  url: "https://300consulting.fi",
  email: "stanislav.sp@300consulting.fi",
  linkedin: "https://www.linkedin.com/in/stanislav-sp/",
  github: "https://github.com/skylercole",
  location: "Helsinki, Finland",
};

export const METRICS = [
  { prefix: "/01", value: 25, suffix: "+", label: "Years of Engineering" },
  { prefix: "/02", value: 15, suffix: "+", label: "Enterprise Clients" },
  { prefix: "/03", value: 50, suffix: "+", label: "Microservices Migrated" },
  { prefix: "/04", value: 3, suffix: "", label: "Fortune 100 Companies" },
];

export const CAPABILITIES = {
  primary: [
    {
      title: "Architecture & complex systems",
      description: "Architecture that can become code.",
      detail: ["Solution design", "Distributed systems", "50+ microservices"],
      icon: "PenTool",
    },
    {
      title: "Cloud & modernization",
      description:
        "Cloud migrations that ship without downtime. Older systems moved forward without losing the business logic.",
      detail: ["Azure", "AWS", "Kubernetes", "Terraform"],
      icon: "Cloud",
    },
    {
      title: "Hands-on engineering",
      description: "One person accountable from design to release.",
      detail: ["Back end", "Front end", "CI/CD"],
      icon: "Layers",
    },
  ],
  supporting: [
    "AI / ML integration",
    "IoT & real-time systems",
    "DevOps & infrastructure",
  ],
};

export const CREDO =
  "Everyone can generate software now. Experience separates the great from the generated.";

export const EXPERIENCE = [
  "Design patterns",
  "Systems thinking",
  "Domain modeling",
];

export const TECH_STACK = {
  core: ["C# / .NET", "Azure", "Kubernetes", "Terraform", "TypeScript"],
  also: [
    { category: "Languages", items: ["Python", "JavaScript", "C++"] },
    { category: "Cloud", items: ["AWS", "GCP"] },
    {
      category: "Frontend",
      items: ["React", "Vue", "Angular", "Blazor", "Flutter", "Avalonia", "Next.js", "Three.js"],
    },
    {
      category: "Data",
      items: ["SQL Server", "PostgreSQL", "MongoDB", "CosmosDB", "Firebase"],
    },
    {
      category: "DevOps",
      items: ["Docker", "GitHub Actions", "Azure DevOps", "Backstage"],
    },
    {
      category: "AI / ML",
      items: ["PyTorch", "TensorFlow", "Azure ML", "RAG", "ML.NET", "Scikit-learn", "Face-recognition", "MediaPipe", "Ollama"],
    },
    { category: "Messaging", items: ["Kafka", "RabbitMQ"] },
  ],
};

export const CASE_STUDIES = [
  // {
  //   client: "50Hertz",
  //   location: "Germany",
  //   outcome: "Unified development practices across an energy infrastructure giant.",
  //   description:
  //     "Designed and implemented a cross-language project scaffolding solution in .NET to unify development practices across the energy infrastructure sector. Built a best-practices framework and CLI tooling to support cell-based microservices architecture.",
  //   tech: [".NET", "Python", "Java", "Azure DevOps", "Backstage"],
  //   gradient: "from-emerald-900/40 to-emerald-950/20",
  // },
  {
    client: "Relex Solutions",
    location: "Finland",
    outcome: "Migrated 50+ microservices from AWS to Azure. Zero downtime.",
    description:
      "Developed distributed enterprise applications and moved 50+ microservices from AWS to Azure and Kubernetes.",
    tech: [".NET", "Azure", "AWS", "Kubernetes", "Kafka", "Terraform"],
    gradient: "from-[#10b98118] via-[#0c0c0c00] to-[#10b98108]",
    diagram: "relex-migration",
  },
  {
    client: "Rolls-Royce Marine",
    location: "Finland",
    outcome: "AI object detection and autonomous operations for shipping.",
    description:
      "Led the interface layer for Intelligent Asset Management and remote/autonomous shipping. The work tied together sensor data, AI object detection, and video streams.",
    tech: ["C++", "Unity", "gRPC", "LiDAR", "AI"],
    gradient: "from-[#0d2318] via-[#0c0c0c00] to-[#161616]",
    diagram: "rolls-royce-sensors",
  },
  {
    client: "Rocla / Mitsubishi",
    location: "Finland",
    outcome:
      "Predictive maintenance for an AGV fleet. Faults caught before downtime, service needs turned into sales leads.",
    description:
      "Built an IoT dashboard for AGVs with live telemetry and predictive maintenance. Faults appeared early enough to plan service before downtime.",
    tech: [".NET", "Azure", "Azure ML", "CosmosDB", "IoT"],
    gradient: "from-[#1a1a2a] via-[#0c0c0c00] to-[#0d2318]",
    diagram: "rocla-iot",
  },
  {
    client: "Stora Enso",
    location: "Finland",
    outcome: "IoT lifecycle tracking from smart buildings to consumer packaging.",
    description:
      "Developed lifecycle tracking for wood-based buildings, from production to IoT performance monitoring. Also built IoT software for consumer goods, covering production, logistics, use, and recycling.",
    tech: ["React", ".NET", "IoT", "Azure"],
    gradient: "from-[#10b98112] via-[#161616] to-[#1e1e2e]",
    diagram: "stora-enso-lifecycle",
  },
  {
    client: "Airpro / Finavia",
    location: "Finland",
    outcome:
      "Near real-time analytics for Finland's airport ground handling, used in daily operational decisions.",
    description:
      "Built near real-time analytics for airport ground handling, with large data flows made usable for day-to-day operations.",
    tech: [".NET", "Azure", "Databricks", "Kubernetes", "Terraform"],
    gradient: "from-[#1e1e2e] via-[#0c0c0c00] to-[#10b98108]",
  },
  {
    client: "Palkkaus.fi",
    location: "Finland",
    outcome: "API integration systems for accounting and payments.",
    description:
      "Developed API integrations for accounting and payments, keeping financial data moving between the platform and external systems.",
    tech: [".NET", "Angular"],
    gradient: "from-[#161616] via-[#0d2318] to-[#0c0c0c00]",
  },
  {
    client: "Kone",
    location: "Finland",
    outcome: "Domain-specific HTML VR browser for Microsoft HoloLens.",
    description:
      "Built a domain-specific HTML VR browser for Microsoft HoloLens, used to view elevator and building solutions in 3D.",
    tech: [".NET", "Unity"],
    gradient: "from-[#1e1e2e] via-[#0c0c0c00] to-[#0d1f15]",
  },
  {
    client: "ABB",
    location: "Germany",
    outcome: "Development for the ABB Drive Composer tool.",
    description:
      "Developer work for ABB Drive Composer, the PC tool used to commission and maintain ABB drives.",
    tech: [".NET"],
    gradient: "from-[#0d2318] via-[#161616] to-[#1a1a2a]",
  },
];

export const CLIENT_LOGOS = [
  "Relex Solutions",
  "Airpro / Finavia",
  "Rolls-Royce Marine",
  "Rocla / Mitsubishi Electric",
  "Stora Enso",
  "Kone",
  "ABB",
  "GE Healthcare",
  "Thermo Fisher",
  "ThoughtWorks",
  "Palkkaus.fi"
];

export const PROCESS_STEPS = [
  {
    number: "/01",
    title: "Discovery",
    description: "Define the problem worth solving.",
  },
  {
    number: "/02",
    title: "Architecture",
    description: "A plan detailed enough to build from.",
  },
  {
    number: "/03",
    title: "Build",
    description: "Incremental delivery. Working software every sprint.",
  },
  {
    number: "/04",
    title: "Handoff",
    description: "Docs, knowledge, and a system your team owns.",
  },
];

export const DOCTRINE = [
  {
    numeral: "I",
    title: "Discipline",
    body: "Commitments are explicit. Risks surface early.",
  },
  {
    numeral: "II",
    title: "Craft",
    body: "Code is written to be read. Systems are built for those who will run them.",
  },
  {
    numeral: "III",
    title: "Restraint",
    body: "The plainest design that bears the load. Complexity is earned.",
  },
  {
    numeral: "IV",
    title: "Finish",
    body: "The work is not done until it stands without the hand that made it.",
  },
];

export const NAV_LINKS = [
  { label: "Work", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Labs", href: "#labs" },
  { label: "Doctrine", href: "#doctrine" },
  { label: "Contact", href: "#contact" },
];

export type LabProject = {
  id: string;
  name: string;
  tagline: string;
  url: string;
  accent: string;
  stats?: string[];
  featured?: boolean;
};

export const LABS: LabProject[] = [
  {
    id: "parallel-editions",
    name: "Parallel Editions",
    tagline: "Bilingual classics on Kindle, side-by-side.",
    url: "https://parallel.pub",
    accent: "#b04020",
    stats: ["100+ classics", "13+ languages", "970+ editions"],
    featured: true,
  },
  {
    id: "playable-me",
    name: "PlayableMe",
    tagline: "Recreate yourself in the games you play.",
    url: "https://playableme.com",
    accent: "#7c6cff",
  },
  {
    id: "belter-charts",
    name: "Belter Charts",
    tagline: "Unofficial Expanse navigator, loved by the Reddit community.",
    url: "https://belter-charts.pages.dev",
    accent: "#6ee7b7",
  },
  {
    id: "barline",
    name: "Barline",
    tagline: "Barbell form analysis from a phone camera.",
    url: "https://barline.web.app",
    accent: "#22d3ee",
  },
  {
    id: "callvaders",
    name: "CallVaders",
    tagline: "A fun weekend project using MediaPipe, turning your video call into a Space Invaders - type game.",
    url: "https://callvaders.web.app",
    accent: "#3b8d6a",
  },
];

export const PATRONAGE = {
  athlete: "Matfei Polishchuk",
  title: "U21 Finnish judo champion",
  club: "Tikkurilan Judokat",
  clubUrl: "https://www.tikkurilanjudokat.fi/",
};
