import type { Component } from "solid-js";

const skillModules = [
  {
    moduleCode: "COFFER 01",
    title: "DISTRIBUTED SYSTEMS & CLOUD",
    description:
      "Serverless architectures, high-concurrency event ingestion, and resilient storage tiers.",
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
      "Type-safe systems programming and high-performance backend runtimes.",
    skills: [
      { name: "TypeScript", level: "Advanced / Strict" },
      { name: "Node.js (v14-v20+)", level: "Runtime Optimization" },
      { name: "Java & Scala", level: "JVM Distributed Systems" },
      { name: "Python", level: "Automation & Data" },
      { name: "GraphQL & REST", level: "Schema Design & Federation" },
      { name: "Rust / C", level: "Systems Exploration" },
    ],
  },
  {
    moduleCode: "COFFER 03",
    title: "CLIENT ARCHITECTURE & WEB",
    description:
      "Deterministic UI state machines, fine-grained reactivity, and sub-second web performance.",
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
      "Comprehensive automated verification and end-to-end telemetry harnesses.",
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
];

const Skills: Component = () => {
  return (
    <section id="skills">
      <div
        class="grid-crosshair"
        style={{ top: "1.5rem", right: "1.5rem" }}
      ></div>

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>02 // Coffered Waffle Slab — Systems & Tech</span>
        </div>
        <div class="section-telemetry-tag">
          STRUCTURAL SPEC 033000 // CONCRETE REINFORCED
        </div>
      </div>

      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {skillModules.map((module) => (
          <div
            class="board-formed-surface terrace-card"
            style={{
              padding: "2.5rem",
              display: "flex",
              "flex-direction": "column",
              "justify-content": "space-between",
              border: "1px solid var(--border-structural)",
              "box-shadow":
                "inset 0 0 40px rgba(0,0,0,0.5), var(--reveal-shadow)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  "justify-content": "space-between",
                  "align-items": "center",
                  "margin-bottom": "1.25rem",
                  "border-bottom": "1px solid var(--border-subtle)",
                  "padding-bottom": "0.75rem",
                }}
              >
                <span
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--pool-cyan)",
                  }}
                >
                  {module.moduleCode}
                </span>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "var(--cedar-wood)",
                  }}
                ></span>
              </div>

              <h3
                style={{
                  "font-size": "1.35rem",
                  color: "var(--stone-aggregate)",
                  "margin-bottom": "0.75rem",
                }}
              >
                {module.title}
              </h3>

              <p
                style={{
                  "font-size": "0.9rem",
                  color: "var(--stone-muted)",
                  "margin-bottom": "2rem",
                  "line-height": "1.5",
                }}
              >
                {module.description}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                "flex-direction": "column",
                gap: "0.75rem",
              }}
            >
              {module.skills.map((skill) => (
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between",
                    "align-items": "baseline",
                    padding: "0.5rem 0.75rem",
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--pool-cyan)";
                    e.currentTarget.style.background =
                      "rgba(55, 139, 132, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.background = "rgba(0,0,0,0.3)";
                  }}
                >
                  <span
                    style={{
                      "font-family": "var(--font-structural)",
                      "font-size": "0.95rem",
                      "font-weight": "500",
                      color: "var(--stone-aggregate)",
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.7rem",
                      color: "var(--stone-dim)",
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
