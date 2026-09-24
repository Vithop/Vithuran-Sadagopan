import { For, type Component } from "solid-js";

interface PortfolioProps {
  onOpenArchive?: () => void;
}

const featuredProjects = [
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
    stack: ["TypeScript", "Web Audio API", "Audio DSP", "Tone Classification"],
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
];

const Portfolio: Component<PortfolioProps> = (props) => {
  return (
    <section id="portfolio">
      <div class="grid-crosshair" style={{ top: "1.5rem", right: "1.5rem" }} />
      <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>04 // FEATURED SOFTWARE ARCHITECTURES</span>
        </div>
        <div class="section-telemetry-tag">
          OPEN SOURCE & DISTRIBUTED SYSTEMS
        </div>
      </div>

      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
          "margin-bottom": "3.5rem",
        }}
        class="interactive-cluster"
      >
        <For each={featuredProjects}>
          {(item) => (
            <div
              class="erickson-lantern"
              style={{
                padding: "clamp(1.5rem, 5vw, 2.25rem)",
                display: "flex",
                "flex-direction": "column",
                "justify-content": "space-between",
                gap: "1.75rem",
                "border-radius": "28px",
              }}
            >
              <div>
                {/* Card Meta Bar */}
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between",
                    "align-items": "center",
                    "margin-bottom": "1.25rem",
                    "border-bottom": "2px solid var(--grid-hairline)",
                    "padding-bottom": "0.75rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      "align-items": "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        "font-family": "var(--font-telemetry)",
                        "font-size": "0.75rem",
                        color: "var(--ink-primary)",
                        "font-weight": "700",
                      }}
                    >
                      {item.code}
                    </span>
                    <span
                      style={{
                        "font-family": "var(--font-telemetry)",
                        "font-size": "0.65rem",
                        background: "var(--concrete-slab)",
                        padding: "0.15rem 0.5rem",
                        "border-radius": "9999px",
                        color: "var(--ink-secondary)",
                        border: "1px solid var(--grid-hairline)",
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <span
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.7rem",
                      color: "var(--ink-secondary)",
                      background: "var(--concrete-slab)",
                      padding: "0.25rem 0.6rem",
                      "border-radius": "9999px",
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <h3
                  style={{
                    "font-size": "1.75rem",
                    color: "var(--ink-primary)",
                    "margin-bottom": "0.75rem",
                    "line-height": "1.2",
                  }}
                >
                  {item.title}
                </h3>

                {/* Tech stack badge pills */}
                <div
                  style={{
                    display: "flex",
                    "flex-wrap": "wrap",
                    gap: "0.4rem",
                    "margin-bottom": "1.25rem",
                  }}
                >
                  <For each={item.stack}>
                    {(tech) => (
                      <span
                        style={{
                          "font-family": "var(--font-telemetry)",
                          "font-size": "0.75rem",
                          background: "var(--concrete-slab)",
                          border: "1px solid var(--grid-border)",
                          padding: "0.2rem 0.6rem",
                          "border-radius": "9999px",
                          color: "var(--ink-primary)",
                          "font-weight": "600",
                        }}
                      >
                        {tech}
                      </span>
                    )}
                  </For>
                </div>

                <p
                  style={{
                    "font-size": "0.95rem",
                    color: "var(--ink-secondary)",
                    "line-height": "1.6",
                    "margin-bottom": "1.5rem",
                  }}
                >
                  {item.description}
                </p>

                {/* Technical Specifications List */}
                <div
                  style={{
                    background: "var(--bg-concrete)",
                    padding: "1rem 1.25rem",
                    "border-radius": "16px",
                    border: "1px solid var(--grid-hairline)",
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                  }}
                >
                  <div
                    style={{
                      color: "var(--ink-primary)",
                      "font-weight": "700",
                      "margin-bottom": "0.5rem",
                    }}
                  >
                    TECHNICAL SPECIFICATIONS:
                  </div>
                  <ul
                    style={{
                      "list-style": "none",
                      display: "flex",
                      "flex-direction": "column",
                      gap: "0.35rem",
                      color: "var(--ink-muted)",
                    }}
                  >
                    <For each={item.specs}>{(s) => <li>• {s}</li>}</For>
                  </ul>
                </div>
              </div>

              {/* Action footer */}
              <div
                style={{
                  "border-top": "2px solid var(--grid-hairline)",
                  "padding-top": "1rem",
                  display: "flex",
                  "justify-content": "space-between",
                  "align-items": "center",
                }}
              >
                <span
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--ink-muted)",
                  }}
                >
                  PUBLIC REPOSITORY
                </span>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="pill-button"
                  style={{
                    padding: "0.4rem 0.95rem",
                    "font-size": "0.75rem",
                  }}
                >
                  VIEW GITHUB REPO ↗
                </a>
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Monumental Banner Link to Full Historical Archive */}
      <div
        class="erickson-lantern"
        style={{
          padding: "clamp(1.5rem, 5vw, 2.5rem) clamp(1.25rem, 5vw, 3rem)",
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "flex-wrap": "wrap",
          gap: "2rem",
          "border-radius": "32px",
          background: "var(--concrete-pylon)",
        }}
      >
        <div>
          <div
            style={{
              "font-family": "var(--font-telemetry)",
              "font-size": "0.75rem",
              color: "var(--ink-muted)",
              "font-weight": "700",
              "letter-spacing": "0.1em",
              "margin-bottom": "0.5rem",
            }}
          >
            HISTORICAL TIMELINE // 2018 — 2026
          </div>
          <h3
            style={{
              "font-size": "1.75rem",
              color: "var(--ink-primary)",
              "margin-bottom": "0.5rem",
            }}
          >
            LOOKING FOR EARLIER HARDWARE & SYSTEMS PROTOTYPES?
          </h3>
          <p style={{ color: "var(--ink-secondary)", "font-size": "0.95rem" }}>
            Explore the complete chronological archive including the IoT Garden
            Gnome, Wearable EMG BioSensor, Assistive CNC Robotics, and McMaster
            engineering projects.
          </p>
        </div>

        <button
          onClick={() => props.onOpenArchive?.()}
          class="pill-button"
          style={{
            padding: "0.85rem 2rem",
            "font-size": "0.9rem",
            background: "var(--grid-border)",
            color: "#ffffff",
            "white-space": "normal",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--ink-secondary)";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--grid-border)";
            e.currentTarget.style.color = "#ffffff";
          }}
        >
          VIEW CHRONOLOGICAL ARCHIVE (15+ PROJECTS) →
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
