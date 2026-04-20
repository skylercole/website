export const BASE_PATH = "/portfolio";

export const SITE = {
  name: "300 Consulting",
  title: "300 Consulting | Solution Architecture & Cloud Engineering",
  description:
    "Solution architecture and cloud engineering. Built once. Built to hold. 24+ years of enterprise delivery.",
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
    description: "End-to-end delivery. No handoffs, no gaps.",
    icon: "Layers",
    size: "medium" as const,
  },
  {
    title: "Cloud Architecture",
    description: "Migrate. Modernize. Scale without drama.",
    icon: "Cloud",
    size: "large" as const,
  },
  {
    title: "Distributed Systems",
    description: "50+ microservices built or moved. Zero downtime.",
    icon: "Network",
    size: "small" as const,
  },
  {
    title: "Solution Design",
    description: "Whiteboard to production. Without the detour.",
    icon: "PenTool",
    size: "small" as const,
  },
  {
    title: "AI / ML Integration",
    description: "Machine learning that survives production.",
    icon: "Brain",
    size: "medium" as const,
  },
  {
    title: "DevOps & Infrastructure",
    description: "CI/CD, Kubernetes, Terraform. The plumbing that holds.",
    icon: "Container",
    size: "small" as const,
  },
  {
    title: "IoT & Real-Time Systems",
    description: "Sensors to dashboards. Physical world, measured.",
    icon: "Cpu",
    size: "small" as const,
  },
  {
    title: "Legacy Modernization",
    description: "10+ systems pulled into the present, intact.",
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
    items: ["Kubernetes", "Docker", "Terraform", "GitHub Actions", "Azure DevOps"],
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
      "Contributed to resilient, distributed applications used across large-scale enterprise systems. Migrated 50+ microservices from AWS to Azure and Kubernetes.",
    tech: [".NET", "Azure", "AWS", "Kubernetes", "Kafka", "Terraform"],
    gradient: "from-[#10b98118] via-[#0c0c0c00] to-[#10b98108]",
    diagram: "relex-migration",
  },
  {
    client: "Rolls-Royce Marine",
    location: "Finland",
    outcome: "AI object detection and autonomous operations for shipping.",
    description:
      "Led development of an interfacing layer for Intelligent Asset Management and Remote/Autonomous operations in shipping, integrating sensor data, AI object detection, and video streaming.",
    tech: ["C++", "Unity", "gRPC", "LiDAR", "AI"],
    gradient: "from-[#0d2318] via-[#0c0c0c00] to-[#161616]",
    diagram: "rolls-royce-sensors",
  },
  {
    client: "Rocla / Mitsubishi",
    location: "Finland",
    outcome: "IoT dashboards that turned maintenance data into sales leads.",
    description:
      "Built an IoT dashboard for AGVs, enabling real-time monitoring, predictive maintenance, and maintenance-related sales lead generation.",
    tech: [".NET", "Azure", "Azure ML", "CosmosDB", "IoT"],
    gradient: "from-[#1a1a2a] via-[#0c0c0c00] to-[#0d2318]",
    diagram: "rocla-iot",
  },
  {
    client: "Stora Enso",
    location: "Finland",
    outcome: "IoT lifecycle tracking from smart buildings to consumer packaging.",
    description:
      "Developed software for tracking the full lifecycle of wood-based buildings, from production to IoT-enabled performance monitoring. Built IoT solution covering consumer goods from production and logistics to consumption and recycling.",
    tech: ["React", ".NET", "IoT", "Azure"],
    gradient: "from-[#10b98112] via-[#161616] to-[#1e1e2e]",
    diagram: "stora-enso-lifecycle",
  },
  {
    client: "Airpro",
    location: "Finland",
    outcome: "Near real-time analytics for Finland's airport ground handling operations.",
    description:
      "Enabled near real-time analytics across operations to manage large-scale data flows and support data-driven decision-making across the organization.",
    tech: [".NET", "Azure", "Databricks", "Kubernetes", "Terraform"],
    gradient: "from-[#1e1e2e] via-[#0c0c0c00] to-[#10b98108]",
  },
  {
    client: "Palkkaus.fi",
    location: "Finland",
    outcome: "API integration systems for accounting and payments.",
    description:
      "Developed API integration systems for accounting and payments, enabling seamless financial data flows across the platform.",
    tech: [".NET", "Angular"],
    gradient: "from-[#161616] via-[#0d2318] to-[#0c0c0c00]",
  },
  {
    client: "Kone",
    location: "Finland",
    outcome: "Domain-specific HTML VR browser for Microsoft HoloLens.",
    description:
      "Built a domain-specific HTML VR browser for Microsoft HoloLens, enabling immersive visualization for elevator and building solutions.",
    tech: [".NET", "Unity"],
    gradient: "from-[#1e1e2e] via-[#0c0c0c00] to-[#0d1f15]",
  },
  {
    client: "ABB",
    location: "Germany",
    outcome: "Development for the ABB Drive Composer tool.",
    description:
      "Contributed to the development of the ABB Drive Composer tool, a professional PC tool for commissioning and maintaining ABB drives.",
    tech: [".NET"],
    gradient: "from-[#0d2318] via-[#161616] to-[#1a1a2a]",
  },
];

export const CLIENT_LOGOS = [
  "Relex Solutions",
  "Airpro",
  "Rolls-Royce",
  "Mitsubishi Electric",
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
    description: "A blueprint you can stand behind.",
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
    body: "The work is owed. It is finished when the client can stand without us.",
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
  { label: "Doctrine", href: "#doctrine" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];
