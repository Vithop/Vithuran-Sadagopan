import { For, type Component } from "solid-js";

const skillModules = [
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
];

const Skills: Component = () => {
  return (
    <section id="skills">
      <div class="grid-crosshair" style={{ top: "1.5rem", right: "1.5rem" }} />
      <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>03 // SKILLS & ARCHITECTURE</span>
        </div>
        <div class="section-telemetry-tag">
          TECHNICAL SPECIFICATIONS // SYSTEM CAPABILITIES
        </div>
      </div>

      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.25rem",
        }}
        class="interactive-cluster"
      >
        <For each={skillModules}>
          {(module) => (
            <div
              class="erickson-lantern"
              style={{
                padding: "2.25rem",
                display: "flex",
                "flex-direction": "column",
                "justify-content": "space-between",
                "border-radius": "28px",
              }}
            >
              <div>
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
                  <span
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.75rem",
                      color: "var(--ink-primary)",
                      "font-weight": "700",
                    }}
                  >
                    {module.moduleCode}
                  </span>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      "border-radius": "50%",
                      background: "var(--grid-border)",
                    }}
                  />
                </div>

                <h3
                  style={{
                    "font-size": "1.45rem",
                    color: "var(--ink-primary)",
                    "margin-bottom": "0.75rem",
                  }}
                >
                  {module.title}
                </h3>

                <p
                  style={{
                    "font-size": "0.95rem",
                    color: "var(--ink-secondary)",
                    "margin-bottom": "1.75rem",
                    "line-height": "1.55",
                  }}
                >
                  {module.description}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  gap: "0.5rem",
                }}
              >
                <For each={module.skills}>
                  {(skill) => (
                    <div
                      style={{
                        display: "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        padding: "0.6rem 0.85rem",
                        background: "var(--bg-concrete)",
                        border: "1px solid var(--grid-hairline)",
                        "border-radius": "10px",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--grid-border)";
                        e.currentTarget.style.background =
                          "var(--concrete-pylon-hover)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--grid-hairline)";
                        e.currentTarget.style.background = "var(--bg-concrete)";
                      }}
                    >
                      <span
                        style={{
                          "font-family": "var(--font-structural)",
                          "font-size": "0.9rem",
                          "font-weight": "600",
                          color: "var(--ink-primary)",
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          "font-family": "var(--font-telemetry)",
                          "font-size": "0.72rem",
                          color: "var(--ink-muted)",
                          "font-weight": "500",
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
};

export default Skills;
