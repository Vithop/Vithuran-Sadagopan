export const archiveCategories = [
  "All",
  "Distributed & Cloud",
  "Systems & Runtimes",
  "Assistive & Hardware",
  "Client & Web",
] as const;

export type FilterCategory = (typeof archiveCategories)[number];

export interface ArchiveCardLabels {
  highlightsTitle: string;
  recordTag: string;
  githubButton: string;
  demoButton: string;
}

export interface ArchivePageContent {
  returnTopButton: string;
  headerTag: string;
  sectionTitle: string;
  systemsSuffix: string;
  headline: {
    first: string;
    second: string;
  };
  intro: string;
  filterQueryLabel: string;
  searchPlaceholder: string;
  clearButton: string;
  disciplineLabel: string;
  returnBottomButton: string;
  cardLabels: ArchiveCardLabels;
}

export const archivePageContent: ArchivePageContent = {
  returnTopButton: "RETURN TO OVERVIEW",
  headerTag: "HISTORICAL ARCHIVE // 2018 — 2026",
  sectionTitle: "PROJECT ARCHIVE & CHRONOLOGY",
  systemsSuffix: "RECORDED SYSTEMS",
  headline: {
    first: "CHRONOLOGICAL",
    second: "PROJECT INDEX",
  },
  intro:
    "An exhaustive record of software architectures, embedded firmware, systems engineering, and physical computing prototypes created between 2018 and 2026.",
  filterQueryLabel: "FILTER QUERY:",
  searchPlaceholder:
    "Search by technology (Rust, TypeScript, AWS), year, or keyword...",
  clearButton: "CLEAR",
  disciplineLabel: "DISCIPLINE:",
  returnBottomButton: "← RETURN TO MAIN TERMINAL",
  cardLabels: {
    highlightsTitle: "KEY HIGHLIGHTS:",
    recordTag: "ARCHIVE RECORD",
    githubButton: "GITHUB REPO ↗",
    demoButton: "LIVE DEMO ↗",
  },
};

export interface ArchiveProject {
  id: string;
  year: string;
  title: string;
  category:
    | "Distributed & Cloud"
    | "Systems & Runtimes"
    | "Assistive & Hardware"
    | "Client & Web";
  stack: string[];
  description: string;
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  img?: string;
}

export const archiveProjects: ArchiveProject[] = [
  {
    id: "antigravity",
    year: "2025 – 2026",
    title: "Antigravity Agentic Workflows",
    category: "Distributed & Cloud",
    stack: ["TypeScript", "Node.js", "AI Agent SDK", "State Machines"],
    description:
      "Autonomous agent pairing workflows, tool synthesis engines, and deterministic state orchestration for advanced software engineering assistance.",
    highlights: [
      "Custom tool integration layer with multi-server protocol hooks",
      "Deterministic state recovery and session transcript auditing",
      "Integrated with high-velocity TypeScript development harnesses",
    ],
    githubUrl: "https://github.com/Vithop/Antigravity",
  },
  {
    id: "tictactoe",
    year: "2024 – 2025",
    title: "TicTacToe Interactive Game Engine",
    category: "Client & Web",
    stack: ["TypeScript", "State Machines", "Game Logic", "UI Architecture"],
    description:
      "Deterministic game implementation with turn-based state machine transitions, heuristic evaluation, and responsive interactive feedback.",
    highlights: [
      "Strict state machine modeling for turn validation and win/draw detection",
      "Heuristic evaluation engine for intelligent move computation",
      "Tactile grid feedback with sub-second state resolution",
    ],
    githubUrl: "https://github.com/Vithop/TicTacToe",
  },
  {
    id: "portfolio-brutalist",
    year: "2024 – 2026",
    title: "Architectural Portfolio Monolith",
    category: "Client & Web",
    stack: ["SolidJS", "TypeScript", "Vite", "Brutalist Architecture"],
    description:
      "Arthur Erickson-inspired light-concrete brutalist portfolio system featuring post-and-beam grid alignment, telemetry vitrines, and fine-grained reactive client state.",
    highlights: [
      "Light-concrete brutalist design system inspired by SFU & Robson Square",
      "Sub-50ms reactive routing and telemetry state with zero UI latency",
      "Fine-grained DOM updates using SolidJS signals",
    ],
    githubUrl: "https://github.com/Vithop/Vithuran-Sadagopan",
    demoUrl: "https://vithop.github.io/Vithuran-Sadagopan/",
  },
  {
    id: "solid-docs",
    year: "2024",
    title: "SolidJS Documentation Contributions",
    category: "Client & Web",
    stack: ["SolidJS", "SolidStart", "Markdown", "Open Source"],
    description:
      "Explorations and documentation enhancements for the official next-generation SolidJS documentation platform.",
    highlights: [
      "Evaluated reactive primitives and client hydration lifecycles",
      "Community open-source tracking and documentation workflows",
    ],
    githubUrl: "https://github.com/Vithop/solid-docs-next",
  },
  {
    id: "advent-of-code-2023",
    year: "2023",
    title: "Advent of Code Algorithmic Engine",
    category: "Systems & Runtimes",
    stack: ["TypeScript", "Algorithms", "Graph Theory", "Optimization"],
    description:
      "High-efficiency algorithmic solutions focusing on spatial graph searches, dynamic programming, and memory-conscious parsing.",
    highlights: [
      "Fast bitwise operations and graph traversal algorithms",
      "Automated verification test suites in TypeScript",
    ],
    githubUrl: "https://github.com/Vithop/AdventOfCode2023",
  },
  {
    id: "big-rusty-integer",
    year: "2022",
    title: "BigRustyInteger — Arbitrary Precision Arithmetic",
    category: "Systems & Runtimes",
    stack: ["Rust", "Systems Programming", "Memory Safety", "Cargo"],
    description:
      "Arbitrary-precision integer arithmetic engine implemented in Rust, engineered for high-performance mathematical computation with zero allocation overhead.",
    highlights: [
      "Memory-safe arbitrary-precision unsigned and signed arithmetic",
      "Custom bit manipulation and Karatsuba-inspired multiplication pipelines",
      "Comprehensive fuzzing and invariant property unit tests",
    ],
    githubUrl: "https://github.com/Vithop/BigRustyInteger",
  },
  {
    id: "wasm-game-of-life",
    year: "2021",
    title: "Rust WebAssembly Cellular Automata",
    category: "Systems & Runtimes",
    stack: ["Rust", "WebAssembly", "Canvas API", "Memory Interop"],
    description:
      "High-frequency 60fps Conway's Game of Life cellular universe compiled from Rust to WebAssembly with direct linear memory canvas rendering.",
    highlights: [
      "Direct shared memory buffer writes between Rust WASM and HTML5 Canvas",
      "Zero-copy frame updates sustaining thousands of concurrent live cells",
    ],
    githubUrl: "https://github.com/Vithop/wasm-game-of-life",
  },
  {
    id: "calculator-app",
    year: "2021",
    title: "Accessible Deterministic Calculator",
    category: "Client & Web",
    stack: ["Svelte", "TypeScript", "WCAG AAA", "ARIA Live"],
    description:
      "Cross-platform calculator web application designed with the goal of being the most accessible, screen-reader-friendly calculator on the web.",
    highlights: [
      "Comprehensive keyboard navigation and audible state narration via ARIA Live",
      "Strict decimal precision engine preventing floating-point rounding quirks",
    ],
    githubUrl: "https://github.com/Vithop/CalculatorApp",
  },
  {
    id: "gnome-api",
    year: "2021",
    title: "Serverless Garden Gnome Telemetry API",
    category: "Distributed & Cloud",
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "Node.js"],
    description:
      "Serverless REST & telemetry ingestion API powering real-time environmental monitoring, soil sensor logging, and automated notification webhooks.",
    highlights: [
      "Sub-50ms cold-start serverless endpoints on AWS Lambda",
      "DynamoDB single-table design for time-series agricultural telemetry",
    ],
    githubUrl: "https://github.com/Vithop/gnome-app-api",
  },
  {
    id: "siren-sense",
    year: "2020 – 2021",
    title: "Siren-Sense Acoustic Attenuation System",
    category: "Assistive & Hardware",
    stack: ["TypeScript", "Web Audio API", "Audio DSP", "Tone Detection"],
    description:
      "Assistive acoustic intelligence application that continuously monitors ambient acoustic feeds for emergency sirens or horns, automatically attenuating headphone audio.",
    highlights: [
      "Real-time spectral FFT analysis to isolate emergency frequency profiles",
      "Automated headphone audio ducking to protect user situational awareness",
      "Cross-platform desktop integration harness",
    ],
    githubUrl: "https://github.com/Vithop/Siren-Sense",
  },
  {
    id: "vue-opencv-wasm",
    year: "2020",
    title: "OpenCV WebAssembly Computer Vision Engine",
    category: "Systems & Runtimes",
    stack: ["Vue", "C++", "OpenCV", "WebAssembly", "Emscripten"],
    description:
      "Real-time client-side computer vision edge pipeline compiling native C++ OpenCV algorithms into WebAssembly for live camera stream edge processing.",
    highlights: [
      "In-browser edge contour detection without cloud server roundtrips",
      "Reusable starter template for compiling C++ to WebAssembly with Vue",
    ],
    githubUrl: "https://github.com/Vithop/myVueOpenCVImageDetector",
  },
  {
    id: "pacemaker-dcm",
    year: "2019 – 2020",
    title: "Pacemaker Device Communications Monitor (DCM)",
    category: "Assistive & Hardware",
    stack: ["Vue", "Medical Instrumentation", "Telemetry", "McMaster 3K04"],
    description:
      "Safety-critical medical telemetry control interface for cardiac pacemaker parameter programming, telemetry visualization, and pacemaker mode switching.",
    highlights: [
      "Rigorous parameter bounds validation preventing lethal pacing misconfigurations",
      "Real-time electrogram waveform telemetry graphs and serial protocol drivers",
    ],
    githubUrl: "https://github.com/Vithop/pacemaker_dcm",
  },
  {
    id: "garden-gnome",
    year: "2019 – 2020",
    title: "IoT Autonomous Garden Gnome",
    category: "Assistive & Hardware",
    stack: ["ESP8266 NodeMCU", "C", "AWS IoT Core", "MQTT", "DynamoDB"],
    description:
      "Autonomous agricultural telemetry monolith with embedded microcontrollers transmitting soil and irradiance data over MQTT to AWS with real-time alerting.",
    highlights: [
      "Low-power sleep state cycles maximizing remote battery life",
      "AWS IoT Core MQTT broker publishing sub-second environmental telemetry",
    ],
    img: "GardenGnomePrototype1.jpg",
    githubUrl: "https://github.com/Vithop/gnome-app-api",
  },
  {
    id: "single-axis-cnc",
    year: "2019",
    title: "Single Axis CNC Assistive Robotics",
    category: "Assistive & Hardware",
    stack: ["Arduino", "Embedded C", "CAD", "NEMA-17", "Assistive Tech"],
    description:
      "Precision assistive robotic arm prototype engineered for clients with cerebral palsy, incorporating high-torque dampening and tactile control limiters.",
    highlights: [
      "Parametric 3D-printed chassis with vibration-dampened linear rails",
      "Embedded real-time limit switches preventing sudden assistive arm overtravel",
    ],
    img: "Single-Axis-CNC-prototype.gif",
  },
  {
    id: "mac-image-decompressor",
    year: "2019",
    title: "FPGA Hardware Image Decompressor",
    category: "Systems & Runtimes",
    stack: ["Verilog", "FPGA", "Hardware Architecture", "McMaster 3DQ5"],
    description:
      "Hardware-level image decompression architecture implemented directly in Verilog hardware description language on Altera Cyclone IV FPGA silicon.",
    highlights: [
      "Pipelined hardware decoding stages executing IDCT in hardware registers",
      "Zero CPU clock overhead via custom FPGA datapath synthesis",
    ],
    githubUrl: "https://github.com/Vithop/MAC_Image_Decompressor",
  },
  {
    id: "wearable-biosensor",
    year: "2018",
    title: "Wearable EMG BioSensor & 3D LED Volumetric Cube",
    category: "Assistive & Hardware",
    stack: ["C#", "C", "Myo Band", "EMG Sensors", "3D LED Matrix"],
    description:
      "Gesture-controlled volumetric 3D LED matrix powered by electromyography forearm signals, Fast Fourier transform gesture filtering, and spatial vector mapping.",
    highlights: [
      "8-channel medical-grade electromyography signal processing",
      "Real-time gesture recognition mapped to an 8x8x8 volumetric LED matrix",
    ],
    img: "Wearable-BioSensor.gif",
    githubUrl: "https://github.com/Vithop/RGB_Cube",
  },
];
