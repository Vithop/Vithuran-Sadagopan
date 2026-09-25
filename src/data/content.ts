/**
 * Central Content Manifest
 * ========================
 * Single source of truth for all user-facing copy, narrative editorial content,
 * structural telemetry labels, and section configurations across the portfolio.
 */

/* ==========================================================================
   TypeScript Interfaces
   ========================================================================== */

export interface SocialLinks {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export interface NavItem {
  id: string;
  number?: string;
  label: string;
  href?: string;
  isArchiveTrigger?: boolean;
}

export interface NavContent {
  brand: {
    name: string;
    location: string;
  };
  timeZoneLabel: string;
  timeZone: string;
  items: NavItem[];
}

export interface TelemetryMetric {
  value: string;
  label: string;
}

export interface HeroContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  headline: {
    first: string;
    second: string;
  };
  bio: string;
  actions: {
    getInTouch: string;
    viewExperience: string;
    viewResume: string;
  };
  vitrine: {
    header: string;
    metrics: TelemetryMetric[];
    discipline: string;
    currentRole: string;
  };
}

export interface ExperienceItem {
  tier: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface ExperienceContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  milestonesTitle: string;
  items: ExperienceItem[];
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillModule {
  moduleCode: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillsContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  modules: SkillModule[];
}

export interface FeaturedProject {
  code: string;
  title: string;
  stack: string[];
  category: string;
  description: string;
  specs: string[];
  githubUrl: string;
  demoUrl?: string;
  badge: string;
}

export interface ProjectsContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  cardLabels: {
    specsTitle: string;
    publicRepo: string;
    viewRepo: string;
  };
  items: FeaturedProject[];
  archiveBanner: {
    tag: string;
    headline: string;
    description: string;
    cta: string;
  };
}

export interface ContactChannel {
  platform: string;
  label: string;
  url: string;
}

export interface ContactPortalContent {
  tag: string;
  title: string;
  description: string;
  location: string;
  status: string;
  sendAction: string;
}

export interface ContactContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  headline: {
    first: string;
    second: string;
  };
  description: string;
  emailAction: {
    copyLabel: string;
    copiedLabel: string;
  };
  channels: ContactChannel[];
  portal: ContactPortalContent;
}

export interface FooterContent {
  tagline: string;
  location: string;
  edition: string;
}

export interface SiteContent {
  socials: SocialLinks;
  nav: NavContent;
  hero: HeroContent;
  experience: ExperienceContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  contact: ContactContent;
  footer: FooterContent;
}

/* ==========================================================================
   Shared Socials & Contact Metadata
   ========================================================================== */

export const socialsContent: SocialLinks = {
  email: "vithuran.sada@gmail.com",
  githubUrl: "https://github.com/vithop",
  linkedinUrl: "https://linkedin.com/in/vithuran-sada",
  resumeUrl: `${import.meta.env.BASE_URL}Vithuran_Sadagopan_Resume.pdf`,
};

/* ==========================================================================
   Navigation Content
   ========================================================================== */

export const navContent: NavContent = {
  brand: {
    name: "VITHURAN SADAGOPAN",
    location: "VANCOUVER, BC // 49°16'N 123°07'W",
  },
  timeZoneLabel: "PACIFIC TIME",
  timeZone: "America/Vancouver",
  items: [
    { id: "about", number: "01", label: "ABOUT", href: "#about" },
    {
      id: "experience",
      number: "02",
      label: "EXPERIENCE",
      href: "#experience",
    },
    { id: "skills", number: "03", label: "SKILLS", href: "#skills" },
    { id: "portfolio", number: "04", label: "PORTFOLIO", href: "#portfolio" },
    { id: "archive", label: "ARCHIVE ↗", isArchiveTrigger: true },
    { id: "contact", number: "05", label: "CONTACT", href: "#contact" },
  ],
};

/* ==========================================================================
   Hero / Sector 01 Content
   ========================================================================== */

export const heroContent: HeroContent = {
  sectionNumber: "01",
  sectionTitle: "ABOUT",
  sectorTag: "SECTOR 01",
  headline: {
    first: "VITHURAN",
    second: "SADAGOPAN",
  },
  bio: "Software Development Engineer architecting high-availability distributed systems and deterministic frontend state machines at Amazon. Focused on low-latency microservices, developer acceleration, and tactile web interfaces.",
  actions: {
    getInTouch: "GET IN TOUCH ↗",
    viewExperience: "VIEW WORK EXPERIENCE ↓",
    viewResume: "DOWNLOAD RESUME / CV ↓",
  },
  vitrine: {
    header: "PROFILE OVERVIEW",
    metrics: [
      {
        value: "$300M",
        label:
          "Incremental revenue driven through modernizing customer experiences",
      },
      {
        value: "~40%",
        label: "Overrall system latency reduction",
      },
      {
        value: "150+",
        label:
          "Engineers adopted new tooling, increasing speed of development by 1 month",
      },
      {
        value: "1 Mo→1 Wk",
        label: "Payment Onboarding Cycle",
      },
    ],
    discipline: "DISCIPLINE: DISTRIBUTED SYSTEMS",
    currentRole: "AMAZON SDE II",
  },
};

/* ==========================================================================
   Work Experience / Sector 02 Content
   ========================================================================== */

export const experienceContent: ExperienceContent = {
  sectionNumber: "02",
  sectionTitle: "WORK EXPERIENCE",
  sectorTag: "STRUCTURAL RECORD // 2019 — 2026",
  milestonesTitle: "ARCHITECTURAL MILESTONES",
  items: [
    {
      tier: "TIER 03 // ELEVATION +10.5M // SDE II",
      role: "Software Development Engineer II",
      company: "AMAZON",
      period: "OCT 2023 – PRESENT",
      location: "VANCOUVER, BC",
      description:
        "Architected an extensible plugin platform and declarative state machine engine for Amazon's multi-region payment interfaces, decoupling merchant onboarding from core releases.",
      achievements: [
        "Built declarative state machine workflows cutting payment method onboarding from ~1 month to ~1 week.",
        "Integrated federated GraphQL APIs and reduced SSR Lambda execution runtime by ~40% through Node 14 → 20 migration.",
        "Engineered mock harnesses and daily development loops supporting ~150 frontend and backend engineers.",
        "Maintained five-nines availability across high-concurrency peak retail shopping events.",
      ],
      tech: [
        "TypeScript",
        "GraphQL",
        "State Machines",
        "Node.js 20",
        "AWS Lambda",
        "Distributed Systems",
        "SSR",
      ],
    },
    {
      tier: "TIER 02 // ELEVATION +7.0M // SDE I",
      role: "Software Development Engineer I",
      company: "AMAZON",
      period: "MAY 2021 – OCT 2023",
      location: "VANCOUVER, BC",
      description:
        "Modernized payment checkout architecture and high-throughput backend services handling massive transaction volumes, driving $300M in incremental annual revenue across multi-region retail checkout.",
      achievements: [
        "Scaled and maintained mission-critical payment services built with Java, Scala, and Apache Tomcat.",
        "Engineered comprehensive AWS CloudWatch observability alarms, synthetic monitors, and operational dashboards.",
        "Spearheaded rigorous test engineering and automated regression pipelines ensuring zero transaction loss during failures.",
        "Mentored junior engineers and interns on backend architecture patterns and operational excellence.",
      ],
      tech: [
        "Java",
        "Scala",
        "Apache Tomcat",
        "AWS CloudWatch",
        "Test Engineering",
        "TypeScript",
        "React",
      ],
    },
    {
      tier: "TIER 01 // ELEVATION +3.5M // CO-OP",
      role: "Full Stack Developer (Co-op)",
      company: "ELLISDON",
      period: "MAY 2019 – AUG 2019",
      location: "TORONTO, ON",
      description:
        "Built construction technology microservices and multi-tenant developer scaffolding for one of Canada's premier civil infrastructure builders.",
      achievements: [
        "Delivered production beta microservice from inception in 4 months leading a 4-engineer pod.",
        "Standardized enterprise project scaffolding with automated one-click starters (React, Java, Go).",
      ],
      tech: ["React", "Java", "Go", "Docker", "CI/CD Microservices"],
    },
  ],
};

/* ==========================================================================
   Skills & Architecture / Sector 03 Content
   ========================================================================== */

export const skillsContent: SkillsContent = {
  sectionNumber: "03",
  sectionTitle: "SKILLS & ARCHITECTURE",
  sectorTag: "TECHNICAL SPECIFICATIONS // SYSTEM CAPABILITIES",
  modules: [
    {
      moduleCode: "COFFER 01",
      title: "DISTRIBUTED SYSTEMS & CLOUD",
      description:
        "Serverless microservices, high-concurrency event ingestion backbones, and resilient distributed data tiers.",
      skills: [
        { name: "AWS Lambda", level: "Production Standard" },
        { name: "AWS CDK / CloudFormation", level: "Infrastructure as Code" },
        { name: "Step Functions", level: "State Orchestration" },
        { name: "DynamoDB", level: "Single-Digit ms Datastores" },
        { name: "API Gateway", level: "Federated API Edge" },
        { name: "EventBridge / SQS / SNS", level: "Event-Driven Backbones" },
      ],
    },
    {
      moduleCode: "COFFER 02",
      title: "CORE LANGUAGES & RUNTIMES",
      description:
        "Type-safe systems programming, modern compiled runtimes, and high-throughput server backends.",
      skills: [
        { name: "TypeScript", level: "Advanced / Strict" },
        { name: "Node.js (v14-v20+)", level: "Runtime Optimization" },
        { name: "Java & Scala", level: "JVM Distributed Systems" },
        { name: "Rust & C", level: "Systems & Memory Safety" },
        { name: "GraphQL & REST", level: "Schema Design & Federation" },
        { name: "Python", level: "Automation & Data" },
      ],
    },
    {
      moduleCode: "COFFER 03",
      title: "CLIENT ARCHITECTURE & WEB",
      description:
        "Deterministic UI state machines, fine-grained reactivity, and sub-second rendering performance.",
      skills: [
        { name: "SolidJS", level: "Fine-Grained Reactivity" },
        { name: "React & React Native", level: "Enterprise Scale" },
        { name: "XState / State Machines", level: "Deterministic Workflows" },
        { name: "Vite / Modern Bundlers", level: "High-Velocity Tooling" },
        { name: "SSR & Hydration Tuning", level: "40% Latency Optimization" },
        { name: "Immer / Functional Immutability", level: "State Safety" },
      ],
    },
    {
      moduleCode: "COFFER 04",
      title: "RELIABILITY & TELEMETRY",
      description:
        "Comprehensive automated verification, synthetic monitoring, and end-to-end telemetry harnesses.",
      skills: [
        { name: "Playwright", level: "E2E Browser Automation" },
        { name: "Jest / Vitest", level: "Unit & Integration Testing" },
        { name: "CI/CD Pipelines", level: "Automated Deployment Gates" },
        { name: "Mock Telemetry Harnesses", level: "Dev Loop Velocity" },
        {
          name: "Observability & Metrics",
          level: "CloudWatch / Distributed Tracing",
        },
        { name: "Five-Nines SLA Engineering", level: "Zero-Downtime Releases" },
      ],
    },
  ],
};

/* ==========================================================================
   Featured Projects / Sector 04 Content
   ========================================================================== */

export const projectsContent: ProjectsContent = {
  sectionNumber: "04",
  sectionTitle: "FEATURED SOFTWARE ARCHITECTURES",
  sectorTag: "OPEN SOURCE & DISTRIBUTED SYSTEMS",
  cardLabels: {
    specsTitle: "TECHNICAL SPECIFICATIONS:",
    publicRepo: "PUBLIC REPOSITORY",
    viewRepo: "VIEW GITHUB REPO ↗",
  },
  items: [
    {
      code: "PROJECT // 01",
      title: "Antigravity Agentic Workflows",
      stack: ["TypeScript", "Node.js", "AI Agent SDK", "State Machines"],
      category: "DISTRIBUTED & CLOUD",
      description:
        "Autonomous agent pairing workflows, tool synthesis engines, and deterministic state orchestration for advanced software engineering assistance and developer acceleration.",
      specs: [
        "Protocol: Model Context Protocol (MCP) tool integration",
        "Architecture: Deterministic state machines with transactional recovery",
        "Velocity: Integrated with high-velocity TypeScript development harnesses",
      ],
      githubUrl: "https://github.com/Vithop/Antigravity",
      badge: "LATEST // 2025–2026",
    },
    {
      code: "PROJECT // 02",
      title: "BigRustyInteger & WASM Systems",
      stack: ["Rust", "Systems Programming", "WebAssembly", "Cargo"],
      category: "SYSTEMS & RUNTIMES",
      description:
        "Arbitrary-precision integer arithmetic engine implemented in Rust, engineered for high-performance mathematical computation with zero allocation overhead and linear memory safety.",
      specs: [
        "Engine: Memory-safe arbitrary-precision unsigned and signed arithmetic",
        "Algorithms: Custom bit manipulation and Karatsuba multiplication pipelines",
        "Compilation: Zero-copy bindings to WebAssembly and Canvas targets",
      ],
      githubUrl: "https://github.com/Vithop/BigRustyInteger",
      badge: "RUST SYSTEMS",
    },
    {
      code: "PROJECT // 03",
      title: "Siren-Sense Acoustic Attenuation",
      stack: [
        "TypeScript",
        "Web Audio API",
        "Audio DSP",
        "Tone Classification",
      ],
      category: "ASSISTIVE & SYSTEMS",
      description:
        "Assistive acoustic intelligence system that continuously monitors ambient acoustic feeds for emergency sirens or horns, automatically attenuating active headphone audio.",
      specs: [
        "Signal Processing: Real-time spectral FFT analysis to isolate emergency frequency profiles",
        "Safety: Automated headphone audio ducking to protect user situational awareness",
        "Deployment: Cross-platform desktop integration harness",
      ],
      githubUrl: "https://github.com/Vithop/Siren-Sense",
      badge: "ASSISTIVE TECH",
    },
    {
      code: "PROJECT // 04",
      title: "Accessible Deterministic Calculator",
      stack: ["Svelte", "TypeScript", "WCAG AAA", "ARIA Live"],
      category: "CLIENT ARCHITECTURE",
      description:
        "Cross-platform calculator web application designed with the goal of being the most accessible, screen-reader-friendly calculator on the internet, built with deterministic state machines.",
      specs: [
        "Accessibility: Full keyboard navigation with dynamic ARIA Live state narration",
        "Precision: Decimal floating-point invariant engine preventing precision degradation",
        "Reactivity: Compile-time optimized UI bundle with sub-5ms input response",
      ],
      githubUrl: "https://github.com/Vithop/CalculatorApp",
      badge: "ACCESSIBILITY",
    },
    {
      code: "PROJECT // 05",
      title: "TicTacToe Interactive Game Engine",
      stack: ["TypeScript", "State Machines", "Game Logic", "UI Architecture"],
      category: "CLIENT & ALGORITHMS",
      description:
        "Deterministic interactive game implementation with turn-based state machine transitions, heuristic evaluation, and responsive tactile interface feedback.",
      specs: [
        "Validation: Strict turn verification with instantaneous win/draw detection",
        "Heuristics: Algorithmic move evaluation for state transitions",
        "Interface: Tactile brutalist grid design with keyboard accessibility",
      ],
      githubUrl: "https://github.com/Vithop/TicTacToe",
      badge: "GAME SYSTEMS",
    },
  ],
  archiveBanner: {
    tag: "HISTORICAL TIMELINE // 2018 — 2026",
    headline: "LOOKING FOR EARLIER HARDWARE & SYSTEMS PROTOTYPES?",
    description:
      "Explore the complete chronological archive including the IoT Garden Gnome, Wearable EMG BioSensor, Assistive CNC Robotics, and McMaster engineering projects.",
    cta: "VIEW CHRONOLOGICAL ARCHIVE (15+ PROJECTS) →",
  },
};

/* ==========================================================================
   Contact / Sector 05 Content
   ========================================================================== */

export const contactContent: ContactContent = {
  sectionNumber: "05",
  sectionTitle: "CONTACT",
  sectorTag: "DIRECT CHANNEL // VANCOUVER, BC",
  headline: {
    first: "INITIATE",
    second: "TRANSMISSION",
  },
  description:
    "Open to senior engineering roles, distributed systems consulting, and high-craft UI/UX collaborations. Based in Vancouver, BC (Pacific Time).",
  emailAction: {
    copyLabel: "COPY",
    copiedLabel: "COPIED TO CLIPBOARD!",
  },
  channels: [
    {
      platform: "LINKEDIN",
      label: "LINKEDIN // PROFILE",
      url: socialsContent.linkedinUrl,
    },
    {
      platform: "GITHUB",
      label: "GITHUB // REPOSITORIES",
      url: socialsContent.githubUrl,
    },
  ],
  portal: {
    tag: "CONTACT PORTAL // SECTOR 05",
    title: "AVAILABLE CHANNELS",
    description:
      "Reach out via email or LinkedIn for technical inquiries, architecture design reviews, or distributed systems opportunities. Responses typically within 24 hours.",
    location: "LOCATION: VANCOUVER, BC",
    status: "STATUS: ACTIVE TRANSMISSION",
    sendAction: "SEND DIRECT MESSAGE ✉",
  },
};

/* ==========================================================================
   Footer Content
   ========================================================================== */

export const footerContent: FooterContent = {
  tagline: "DISTRIBUTED SYSTEMS & EXPERIMENTAL CLIENT ARCHITECTURES",
  location: "VANCOUVER, BRITISH COLUMBIA, CANADA",
  edition: "LIGHT-CONCRETE BRUTALIST EDITION // MAQIVE TYPEFACE",
};

/* ==========================================================================
   Unified Content Manifest
   ========================================================================== */

export const siteContent: SiteContent = {
  socials: socialsContent,
  nav: navContent,
  hero: heroContent,
  experience: experienceContent,
  skills: skillsContent,
  projects: projectsContent,
  contact: contactContent,
  footer: footerContent,
};

export default siteContent;
