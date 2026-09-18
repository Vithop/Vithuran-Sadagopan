import type { Component } from "solid-js";

const experiences = [
  {
    tier: "TIER 03 // EL +10.5M",
    role: "Software Development Engineer II",
    company: "AMAZON",
    period: "OCT 2023 – PRESENT",
    location: "VANCOUVER, BC",
    description:
      "Architected an extensible plugin platform for Amazon's multi-region payment interfaces, decoupling merchant onboarding from core releases.",
    achievements: [
      "Reduced SSR Lambda execution runtime by ~40% through Node 14 → 20 architectural migration.",
      "Engineered mock harnesses and daily development loops supporting ~150 frontend and backend engineers.",
      "Maintained five-nines availability across high-concurrency peak retail shopping events.",
    ],
    tech: [
      "TypeScript",
      "Node.js 20",
      "AWS Lambda",
      "Distributed Systems",
      "SSR",
    ],
  },
  {
    tier: "TIER 02 // EL +7.0M",
    role: "Software Development Engineer I",
    company: "AMAZON",
    period: "MAY 2021 – OCT 2023",
    location: "VANCOUVER, BC",
    description:
      "Modernized payment checkout UX and built robust finite state machine architectures, driving $300M in incremental annual revenue.",
    achievements: [
      "Built declarative state machine engine reducing payment method integration cycle from ~1 month to ~1 week.",
      "Automated event telemetry and validation layers ensuring zero transaction loss during checkout failures.",
      "Mentored junior engineers on frontend architecture patterns and AWS event-driven paradigms.",
    ],
    tech: [
      "React",
      "TypeScript",
      "State Machines",
      "AWS Step Functions",
      "GraphQL",
    ],
  },
  {
    tier: "TIER 01 // EL +3.5M",
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
          <span>WORK EXPERIENCE // STEPPED CYLINDRICAL TERRACES</span>
        </div>
        <div class="section-telemetry-tag">
          STRUCTURAL RECORD // 2019 — 2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          gap: "2.75rem",
          "max-width": "1100px",
          margin: "0 auto",
        }}
        class="interactive-cluster"
      >
        {experiences.map((exp, index) => (
          <div
            class="erickson-lantern"
            style={{
              padding: "2.75rem",
              "margin-left": `${index * 2.5}rem`,
              "border-radius": "32px",
              "border-left": "8px solid var(--grid-border)",
            }}
          >
            {/* Top Meta Beam */}
            <div
              style={{
                display: "flex",
                "justify-content": "space-between",
                "align-items": "center",
                "flex-wrap": "wrap",
                gap: "1rem",
                "border-bottom": "2px solid var(--grid-hairline)",
                "padding-bottom": "1.25rem",
                "margin-bottom": "1.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  "align-items": "center",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    "font-weight": "700",
                    color: "var(--ink-primary)",
                    background: "var(--concrete-slab)",
                    padding: "0.35rem 0.85rem",
                    "border-radius": "9999px",
                    border: "1px solid var(--grid-border)",
                  }}
                >
                  {exp.tier}
                </span>
                <span
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.8rem",
                    color: "var(--ink-secondary)",
                  }}
                >
                  {exp.location}
                </span>
              </div>

              <div
                style={{
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.85rem",
                  "font-weight": "700",
                  color: "var(--ink-primary)",
                  "letter-spacing": "0.05em",
                }}
              >
                {exp.company} // {exp.period}
              </div>
            </div>

            {/* Content & Architectural Details */}
            <div
              style={{
                display: "grid",
                "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    "font-size": "2rem",
                    color: "var(--ink-primary)",
                    "margin-bottom": "1rem",
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  style={{
                    "font-size": "1.1rem",
                    color: "var(--ink-secondary)",
                    "line-height": "1.6",
                    "margin-bottom": "1.75rem",
                  }}
                >
                  {exp.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    "flex-wrap": "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {exp.tech.map((t) => (
                    <span
                      style={{
                        "font-family": "var(--font-telemetry)",
                        "font-size": "0.75rem",
                        padding: "0.35rem 0.85rem",
                        background: "var(--concrete-slab)",
                        border: "1px solid var(--grid-border)",
                        "border-radius": "9999px",
                        color: "var(--ink-primary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements Column */}
              <div
                style={{
                  background: "var(--bg-concrete)",
                  padding: "1.75rem",
                  "border-radius": "20px",
                  border: "1px solid var(--grid-hairline)",
                }}
              >
                <div
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--ink-primary)",
                    "font-weight": "700",
                    "margin-bottom": "1.25rem",
                    "letter-spacing": "0.1em",
                  }}
                >
                  ARCHITECTURAL MILESTONES
                </div>
                <ul
                  style={{
                    "list-style": "none",
                    display: "flex",
                    "flex-direction": "column",
                    gap: "1rem",
                  }}
                >
                  {exp.achievements.map((item) => (
                    <li
                      style={{
                        display: "flex",
                        gap: "0.85rem",
                        "font-size": "0.95rem",
                        color: "var(--ink-secondary)",
                        "line-height": "1.5",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--grid-border)",
                          "font-weight": "800",
                        }}
                      >
                        ▸
                      </span>
                      <span>{item}</span>
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
