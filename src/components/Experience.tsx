import type { Component } from "solid-js";

const experiences = [
  {
    elevation: "EL +10.5M",
    terraceNumber: "TERRACE 03",
    role: "Software Development Engineer II",
    company: "AMAZON",
    period: "OCT 2023 – PRESENT",
    location: "VANCOUVER, BC",
    description:
      "Architected a plugin-based extensibility framework for Amazon's payments user interface platform, enabling cross-org federated contributions without core regression risks.",
    highlights: [
      "Cut SSR Lambda runtime ~40% via end-to-end Node 14 → Node 20 architecture migration.",
      "Engineered the daily local dev loop and mock telemetry harnesses used by ~150 engineers.",
      "Spearheaded reliability engineering achieving five-nines uptime across global payment funnels.",
    ],
    stack: [
      "TypeScript",
      "Node.js 20",
      "AWS Lambda",
      "Distributed Systems",
      "SSR Performance",
    ],
  },
  {
    elevation: "EL +7.0M",
    terraceNumber: "TERRACE 02",
    role: "Software Development Engineer I",
    company: "AMAZON",
    period: "MAY 2021 – OCT 2023",
    location: "VANCOUVER, BC",
    description:
      "Generated over $300M in incremental annual revenue by modernizing payments UX and architecting declarative state machine workflows.",
    highlights: [
      "Built resilient finite state machine engine cutting payment method onboarding from ~1 month to ~1 week.",
      "Redesigned critical checkout paths with high-concurrency event telemetry and zero-data-loss validation.",
      "Mentored junior engineers and interns in distributed systems patterns and frontend architecture.",
    ],
    stack: [
      "React",
      "TypeScript",
      "State Machines",
      "AWS Step Functions",
      "GraphQL",
      "Jest",
    ],
  },
  {
    elevation: "EL +3.5M",
    terraceNumber: "TERRACE 01",
    role: "Full Stack Developer (Co-op)",
    company: "ELLISDON",
    period: "MAY 2019 – AUG 2019",
    location: "TORONTO, ON",
    description:
      "Built enterprise construction technology microservices and cross-discipline developer tooling for one of Canada's premier builders.",
    highlights: [
      "Shipped microservice from blank slate to production beta in 4 months, leading a 4-person engineering team.",
      "Standardized enterprise project scaffolding with automated one-click templates (React, Java, Go).",
    ],
    stack: ["React", "Java", "Go", "Docker", "CI/CD Microservices"],
  },
];

const Experience: Component = () => {
  return (
    <section id="experience">
      <div
        class="grid-crosshair"
        style={{ top: "1.5rem", left: "1.5rem" }}
      ></div>

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>01 // Stepped Terraces — Experience</span>
        </div>
        <div class="section-telemetry-tag">
          STRUCTURAL RECORD // 2019 — 2026
        </div>
      </div>

      <div
        style={{ display: "flex", "flex-direction": "column", gap: "2.5rem" }}
      >
        {experiences.map((exp, index) => (
          <div
            class="board-formed-surface terrace-card"
            style={{
              padding: "2.5rem",
              "margin-left": `${index * 1.5}rem`,
              "border-left": "4px solid var(--cedar-wood)",
              position: "relative",
            }}
          >
            {/* Top Structural Plinth / Metadata */}
            <div
              style={{
                display: "flex",
                "justify-content": "space-between",
                "align-items": "baseline",
                "flex-wrap": "wrap",
                gap: "1rem",
                "border-bottom": "1px solid var(--border-subtle)",
                "padding-bottom": "1.25rem",
                "margin-bottom": "1.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  "align-items": "baseline",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--pool-cyan)",
                    background: "rgba(55, 139, 132, 0.15)",
                    padding: "0.25rem 0.6rem",
                    border: "1px solid rgba(78, 194, 184, 0.3)",
                  }}
                >
                  {exp.elevation}
                </span>
                <span
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.8rem",
                    color: "var(--stone-muted)",
                  }}
                >
                  {exp.terraceNumber}
                </span>
              </div>

              <div
                style={{
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.8rem",
                  color: "var(--cedar-wood)",
                  "letter-spacing": "0.08em",
                }}
              >
                {exp.company} // {exp.period}
              </div>
            </div>

            {/* Main Role & Description */}
            <div
              style={{
                display: "grid",
                "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    "font-size": "1.85rem",
                    color: "var(--stone-aggregate)",
                    "margin-bottom": "1rem",
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  style={{
                    "font-size": "1.05rem",
                    color: "var(--stone-aggregate)",
                    "line-height": "1.6",
                    "margin-bottom": "1.5rem",
                  }}
                >
                  {exp.description}
                </p>

                {/* Stack Badges */}
                <div
                  style={{
                    display: "flex",
                    "flex-wrap": "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {exp.stack.map((tech) => (
                    <span
                      style={{
                        "font-family": "var(--font-telemetry)",
                        "font-size": "0.75rem",
                        padding: "0.3rem 0.7rem",
                        background: "rgba(0,0,0,0.35)",
                        border: "1px solid var(--border-structural)",
                        color: "var(--stone-muted)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Highlights */}
              <div
                style={{
                  background: "rgba(0,0,0,0.25)",
                  padding: "1.5rem",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--stone-dim)",
                    "margin-bottom": "1rem",
                    "letter-spacing": "0.1em",
                  }}
                >
                  KEY ARCHITECTURAL HIGHLIGHTS
                </div>
                <ul
                  style={{
                    "list-style": "none",
                    display: "flex",
                    "flex-direction": "column",
                    gap: "0.85rem",
                  }}
                >
                  {exp.highlights.map((point) => (
                    <li
                      style={{
                        display: "flex",
                        gap: "0.85rem",
                        "font-size": "0.95rem",
                        color: "var(--stone-muted)",
                        "line-height": "1.5",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--pool-cyan)",
                          "font-weight": "700",
                        }}
                      >
                        ▸
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
