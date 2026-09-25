import { For, type Component } from "solid-js";
import { horizonsContent } from "../data/horizonsContent";

const Horizons: Component = () => {
  return (
    <section id="horizons">
      <div class="grid-crosshair" style={{ top: "1.5rem", right: "1.5rem" }} />
      <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />

      {/* Section Header Datum Beam */}
      <div class="section-header-beam">
        <div class="section-header-title">
          <span>
            {horizonsContent.sectionNumber} // {horizonsContent.sectionTitle}
          </span>
        </div>
        <div class="section-telemetry-tag">{horizonsContent.sectorTag}</div>
      </div>

      {/* Narrative Introduction Plinth */}
      <div
        style={{
          "margin-bottom": "3rem",
          "max-width": "860px",
        }}
      >
        <p
          style={{
            "font-size": "clamp(1.05rem, 2vw, 1.25rem)",
            color: "var(--ink-secondary)",
            "line-height": "1.6",
          }}
        >
          {horizonsContent.headerDescription}
        </p>
      </div>

      {/* Horizon Pillars Matrix */}
      <div
        style={{
          display: "grid",
          "grid-template-columns":
            "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
          gap: "2.5rem",
          "margin-bottom": "3.5rem",
        }}
        class="interactive-cluster"
      >
        <For each={horizonsContent.pillars}>
          {(pillar) => (
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
                {/* Pillar Meta Header */}
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between",
                    "align-items": "center",
                    "margin-bottom": "1.25rem",
                    "border-bottom": "2px solid var(--grid-hairline)",
                    "padding-bottom": "0.75rem",
                    "flex-wrap": "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      "align-items": "center",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        "font-family": "var(--font-telemetry)",
                        "font-size": "0.78rem",
                        color: "var(--ink-primary)",
                        "font-weight": "700",
                      }}
                    >
                      {pillar.code}
                    </span>
                  </div>

                  <span
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.68rem",
                      "letter-spacing": "0.08em",
                      "font-weight": "700",
                      padding: "0.25rem 0.65rem",
                      "border-radius": "9999px",
                      border: "1px solid var(--grid-border)",
                      background: "var(--concrete-slab)",
                      color: "var(--ink-primary)",
                    }}
                  >
                    {pillar.statusBadge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    "font-size": "clamp(1.2rem, 2.5vw, 1.45rem)",
                    "margin-bottom": "0.4rem",
                    color: "var(--ink-primary)",
                    "line-height": "1.25",
                  }}
                >
                  {pillar.title}
                </h3>
                <div
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.72rem",
                    "letter-spacing": "0.08em",
                    color: "var(--ink-muted)",
                    "margin-bottom": "1.25rem",
                  }}
                >
                  {pillar.subtitle}
                </div>

                {/* Core Architectural Hypothesis Box */}
                <div
                  style={{
                    background: "var(--concrete-slab)",
                    "border-left": "3px solid var(--grid-border)",
                    padding: "0.85rem 1rem",
                    "margin-bottom": "1.5rem",
                    "border-radius": "0 8px 8px 0",
                  }}
                >
                  <div
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.68rem",
                      "letter-spacing": "0.1em",
                      color: "var(--ink-muted)",
                      "font-weight": "700",
                      "margin-bottom": "0.35rem",
                    }}
                  >
                    CORE HYPOTHESIS & THESIS:
                  </div>
                  <p
                    style={{
                      "font-size": "0.88rem",
                      color: "var(--ink-primary)",
                      "line-height": "1.5",
                      "font-style": "italic",
                    }}
                  >
                    &ldquo;{pillar.hypothesis}&rdquo;
                  </p>
                </div>

                {/* Architecture & Stack Badges */}
                <div
                  style={{
                    display: "flex",
                    "flex-wrap": "wrap",
                    gap: "0.4rem",
                    "margin-bottom": "1.75rem",
                  }}
                >
                  <For each={pillar.stack}>
                    {(tech) => (
                      <span
                        style={{
                          "font-family": "var(--font-telemetry)",
                          "font-size": "0.72rem",
                          padding: "0.2rem 0.55rem",
                          "border-radius": "4px",
                          border: "1px solid var(--grid-hairline)",
                          background: "var(--concrete-pylon)",
                          color: "var(--ink-secondary)",
                          "font-weight": "500",
                        }}
                      >
                        {tech}
                      </span>
                    )}
                  </For>
                </div>

                {/* Active Lab Explorations */}
                <div style={{ "margin-bottom": "1.5rem" }}>
                  <div
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.75rem",
                      "letter-spacing": "0.08em",
                      color: "var(--ink-primary)",
                      "font-weight": "700",
                      "margin-bottom": "0.65rem",
                      display: "flex",
                      "align-items": "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span>ACTIVE PROTOTYPES &amp; SYSTEMS:</span>
                  </div>
                  <ul
                    style={{
                      "list-style": "none",
                      display: "flex",
                      "flex-direction": "column",
                      gap: "0.5rem",
                      padding: 0,
                    }}
                  >
                    <For each={pillar.activeExplorations}>
                      {(item) => (
                        <li
                          style={{
                            display: "flex",
                            gap: "0.65rem",
                            "font-size": "0.84rem",
                            color: "var(--ink-secondary)",
                            "line-height": "1.45",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--lantern-amber)",
                              "font-weight": "700",
                            }}
                          >
                            ▪
                          </span>
                          <span>{item}</span>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>

                {/* Target Milestones */}
                <div>
                  <div
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.75rem",
                      "letter-spacing": "0.08em",
                      color: "var(--ink-primary)",
                      "font-weight": "700",
                      "margin-bottom": "0.65rem",
                      display: "flex",
                      "align-items": "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span>2026+ TARGET MILESTONES:</span>
                  </div>
                  <ul
                    style={{
                      "list-style": "none",
                      display: "flex",
                      "flex-direction": "column",
                      gap: "0.5rem",
                      padding: 0,
                    }}
                  >
                    <For each={pillar.futureMilestones}>
                      {(milestone) => (
                        <li
                          style={{
                            display: "flex",
                            gap: "0.65rem",
                            "font-size": "0.84rem",
                            color: "var(--ink-secondary)",
                            "line-height": "1.45",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--reflecting-pool)",
                              "font-weight": "700",
                            }}
                          >
                            ↗
                          </span>
                          <span>{milestone}</span>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Bottom Synthesis Plinth */}
      <div
        class="erickson-lantern"
        style={{
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          "border-radius": "24px",
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "flex-wrap": "wrap",
          gap: "1.5rem",
          background: "var(--concrete-slab)",
        }}
      >
        <div>
          <div
            style={{
              "font-family": "var(--font-telemetry)",
              "font-size": "0.75rem",
              "letter-spacing": "0.1em",
              color: "var(--ink-muted)",
              "font-weight": "700",
              "margin-bottom": "0.5rem",
            }}
          >
            {horizonsContent.terminalTag}
          </div>
          <div
            style={{
              "font-size": "clamp(1.1rem, 2vw, 1.35rem)",
              "font-weight": "700",
              color: "var(--ink-primary)",
              "max-width": "720px",
              "line-height": "1.35",
            }}
          >
            DUAL-TRACK ENGINEERING: MARRYING FIVE-NINES PRODUCTION RESILIENCE
            WITH HIGH-VELOCITY AUTONOMOUS AGENT RESEARCH.
          </div>
        </div>

        <a href="#contact" class="pill-button">
          DISCUSS COLLABORATIONS ↗
        </a>
      </div>
    </section>
  );
};

export default Horizons;
