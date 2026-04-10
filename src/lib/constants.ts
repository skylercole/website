export const SITE = {
  name: "300 Consulting",
  title: "300 Consulting | Solution Architecture & Cloud Engineering",
  description:
    "Solution Architecture and Cloud Engineering for companies that need it done right the first time. 24+ years of enterprise-grade delivery.",
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
    description: "End-to-end delivery. No handoffs. No miscommunication.",
    icon: "Layers",
    size: "medium" as const,
  },
  {
    title: "Cloud Architecture",
    description:
      "Migrate, modernize, and scale without the 3 AM wake-up calls.",
    icon: "Cloud",
    size: "large" as const,
  },
  {
    title: "Distributed Systems",
    description: "50+ microservices migrated. Zero-downtime. Zero drama.",
    icon: "Network",
    size: "small" as const,
  },
  {
    title: "Solution Design",
    description:
      "From whiteboard to production-grade architecture in weeks, not quarters.",
    icon: "PenTool",
    size: "small" as const,
  },
  {
    title: "AI / ML Integration",
    description: "Practical ML that ships, not PowerPoint that doesn't.",
    icon: "Brain",
    size: "medium" as const,
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Terraform, Kubernetes, CI/CD — the plumbing that makes everything else possible.",
    icon: "Container",
    size: "small" as const,
  },
  {
    title: "IoT & Real-Time Systems",
    description:
      "Sensor data to dashboards. Physical world, digital intelligence.",
    icon: "Cpu",
    size: "small" as const,
  },
  {
    title: "Legacy Modernization",
    description:
      "Your monolith deserves a respectful decomposition, not a rewrite.",
    icon: "RefreshCw",
    size: "large" as const,
  },
];

export const TECH_STACK = [
  {
    category: "Languages",
    items: ["C#", "Python", "TypeScript", "JavaScript", "C++", "Kotlin"],
  },
  {
    category: "Cloud",
    items: ["Azure", "AWS", "GCP"],
    featured: true,
  },
  {
    category: "Frontend",
    items: ["React", "Vue", "Angular", "Blazor", "Flutter", "Avalonia"],
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
    items: ["PyTorch", "TensorFlow", "Azure ML", "RAG"],
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
    gradient: "from-blue-900/40 to-blue-950/20",
  },
  {
    client: "Airpro",
    location: "Finland",
    outcome: "Near real-time analytics for Finland's airport ground handling operations.",
    description:
      "Enabled near real-time analytics across operations to manage large-scale data flows and support data-driven decision-making across the organization.",
    tech: [".NET", "Azure", "Databricks", "Kubernetes", "Terraform"],
    gradient: "from-violet-900/40 to-violet-950/20",
  },
  {
    client: "Rolls-Royce Marine",
    location: "Finland",
    outcome: "AI object detection and autonomous operations for shipping.",
    description:
      "Led development of an interfacing layer for Intelligent Asset Management and Remote/Autonomous operations in shipping, integrating sensor data, AI object detection, and video streaming.",
    tech: ["C++", "Unity", "gRPC", "LiDAR", "AI"],
    gradient: "from-amber-900/40 to-amber-950/20",
  },
  {
    client: "Rocla / Mitsubishi",
    location: "Finland",
    outcome: "IoT dashboards that turned maintenance data into sales leads.",
    description:
      "Built an IoT dashboard for AGVs, enabling real-time monitoring, predictive maintenance, and maintenance-related sales lead generation.",
    tech: [".NET", "Azure", "Azure ML", "CosmosDB", "IoT"],
    gradient: "from-rose-900/40 to-rose-950/20",
  },
  {
    client: "Stora Enso",
    location: "Finland",
    outcome: "IoT lifecycle tracking from smart buildings to consumer packaging.",
    description:
      "Developed software for tracking the full lifecycle of wood-based buildings, from production to IoT-enabled performance monitoring. Built IoT solution covering consumer goods from production and logistics to consumption and recycling.",
    tech: ["React", ".NET", "IoT", "Azure"],
    gradient: "from-teal-900/40 to-teal-950/20",
  },
  {
    client: "Palkkaus.fi",
    location: "Finland",
    outcome: "API integration systems for accounting and payments.",
    description:
      "Developed API integration systems for accounting and payments, enabling seamless financial data flows across the platform.",
    tech: [".NET", "Angular"],
    gradient: "from-cyan-900/40 to-cyan-950/20",
  },
  {
    client: "Kone",
    location: "Finland",
    outcome: "Domain-specific HTML VR browser for Microsoft HoloLens.",
    description:
      "Built a domain-specific HTML VR browser for Microsoft HoloLens, enabling immersive visualization for elevator and building solutions.",
    tech: [".NET", "Unity"],
    gradient: "from-sky-900/40 to-sky-950/20",
  },
  {
    client: "ABB",
    location: "Germany",
    outcome: "Development for the ABB Drive Composer tool.",
    description:
      "Contributed to the development of the ABB Drive Composer tool, a professional PC tool for commissioning and maintaining ABB drives.",
    tech: [".NET"],
    gradient: "from-orange-900/40 to-orange-950/20",
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
    description:
      "We define the problem worth solving and the constraints worth respecting.",
  },
  {
    number: "/02",
    title: "Architecture",
    description:
      "A blueprint you can challenge, understand, and bet on.",
  },
  {
    number: "/03",
    title: "Build",
    description:
      "Incremental delivery. Working software every sprint.",
  },
  {
    number: "/04",
    title: "Handoff",
    description:
      "Documentation, knowledge transfer, and a system your team can own.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Work", href: "#case-studies" },
  // { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
