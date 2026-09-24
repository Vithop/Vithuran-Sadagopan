import { For, type Component } from "solid-js";
import { skillsContent } from "../data/content";

const Skills: Component = () => {
  return (
    <section id="skills">
      <div class="grid-crosshair" style={{ top: "1.5rem", right: "1.5rem" }} />
      <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>
            {skillsContent.sectionNumber} // {skillsContent.sectionTitle}
          </span>
        </div>
        <div class="section-telemetry-tag">{skillsContent.sectorTag}</div>
      </div>

      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2.25rem",
        }}
        class="interactive-cluster"
      >
        <For each={skillsContent.modules}>
          {(module) => (
            <div
              class="erickson-lantern"
              style={{
                padding: "clamp(1.5rem, 5vw, 2.25rem)",
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
                  {(s) => (
                    <div
                      style={{
                        display: "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        padding: "0.5rem 0.85rem",
                        background: "var(--bg-concrete)",
                        "border-radius": "8px",
                        border: "1px solid var(--grid-hairline)",
                      }}
                    >
                      <span
                        style={{
                          "font-size": "0.85rem",
                          "font-weight": "600",
                          color: "var(--ink-primary)",
                        }}
                      >
                        {s.name}
                      </span>
                      <span
                        style={{
                          "font-family": "var(--font-telemetry)",
                          "font-size": "0.7rem",
                          color: "var(--ink-muted)",
                        }}
                      >
                        {s.level}
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
