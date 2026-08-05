export const BASE_PATH = "/portfolio";

export const SITE = {
  name: "300 Consulting",
  title: "300 Consulting | Solution Architecture & Cloud Engineering",
  description:
    "Solution architecture and cloud engineering from Helsinki. 24+ years building systems that stay useful.",
  url: "https://300consulting.fi",
  email: "stanislav.sp@300consulting.fi",
  linkedin: "https://www.linkedin.com/in/stanislav-sp/",
  github: "https://github.com/skylercole",
  location: "Helsinki, Finland",
};

export const METRICS = [
  { prefix: "/01", value: 24, suffix: "+", label: "Years of Engineering" },
  { prefix: "/02", value: 15, suffix: "+", label: "Enterprise Clients" },
  { prefix: "/03", value: 50, suffix: "+", label: "Microservices Migrated" },
  { prefix: "/04", value: 3, suffix: "", label: "Fortune 100 Companies" },
];

export const CAPABILITIES = [
  {
    title: "Full-Stack Development",
    description: "One person accountable from design to release.",
    icon: "Layers",
    size: "medium" as const,
  },
  {
    title: "Cloud Architecture",
    description: "Cloud migrations that ship without downtime.",
    icon: "Cloud",
    size: "large" as const,
  },
  {
    title: "Distributed Systems",
    description: "50+ microservices built or migrated.",
    icon: "Network",
    size: "small" as const,
  },
  {
    title: "Solution Design",
    description: "Architecture that can become code.",
    icon: "PenTool",
    size: "small" as const,
  },
  {
    title: "AI / ML Integration",
    description: "ML features that make it to production.",
    icon: "Brain",
    size: "medium" as const,
  },
  {
    title: "DevOps & Infrastructure",
    description: "CI/CD, Kubernetes, Terraform. Plumbing done well.",
    icon: "Container",
    size: "small" as const,
  },
  {
    title: "IoT & Real-Time Systems",
    description: "Sensor data, dashboards, and live equipment signals.",
    icon: "Cpu",
    size: "small" as const,
  },
  {
    title: "Legacy Modernization",
    description: "Older systems moved forward without losing the business logic.",
    icon: "RefreshCw",
    size: "large" as const,
  },
];

export const TECH_STACK = [
  {
    category: "Languages",
    items: ["C#", "Python", "TypeScript", "JavaScript", "C++"],
  },
  {
    category: "Cloud",
    items: ["Azure", "AWS", "GCP"],
    featured: true,
  },
  {
    category: "Frontend",
    items: ["React", "Vue", "Angular", "Blazor", "Flutter", "Avalonia", "Next.js"],
  },
  {
    category: "Data",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "CosmosDB", "Firebase"],
  },
  {
    category: "DevOps",
    items: ["Kubernetes", "Docker", "Terraform", "GitHub Actions", "Azure DevOps", "Backstage"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Azure ML", "RAG", "ML.NET", "Scikit-learn", "Face-recognition", "Ollama"],
  },
  {
    category: "Messaging",
    items: ["Kafka", "RabbitMQ"],
  },
];

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
    outcome: "Predictive maintenance dashboards for an AGV fleet.",
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
    outcome: "Near real-time analytics for Finland's airport ground handling operations.",
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
    title: "Duty",
    body: "The work is owed. It is finished when the client can run it without us.",
  },
  {
    numeral: "II",
    title: "Discipline",
    body: "Schedules are kept. Estimates are held. Effort does not waver.",
  },
  {
    numeral: "III",
    title: "Craft",
    body: "Code is written to be read. Systems are built for those who will run them.",
  },
  {
    numeral: "IV",
    title: "Restraint",
    body: "The plainest design that bears the load. Complexity is earned.",
  },
  {
    numeral: "V",
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
};

export const LABS: LabProject[] = [
  {
    id: "parallel-editions",
    name: "Parallel Editions",
    tagline: "Bilingual classics on Kindle, side-by-side.",
    url: "https://parallel-editions.web.app",
    accent: "#b04020",
    stats: ["50+ classics", "13+ languages", "500+ editions"],
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
    id: "avatar-mirror",
    name: "Avatar Mirror",
    tagline: "Your face, mapped into game character creators.",
    url: "https://avatarmirror.web.app",
    accent: "#7c6cff",
  },
];

export const PATRONAGE = {
  athlete: "Matfei Polishchuk",
  title: "U21 Finnish judo champion",
  club: "Tikkurilan Judokat",
  clubUrl: "https://www.tikkurilanjudokat.fi/",
};
