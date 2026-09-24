import {
  For,
  createSignal,
  onMount,
  onCleanup,
  Show,
  type Component,
} from "solid-js";
import { experienceContent } from "../data/content";

const Experience: Component = () => {
  const [expandedIndex, setExpandedIndex] = createSignal<number | null>(0);
  const [isMobile, setIsMobile] = createSignal(false);

  onMount(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    onCleanup(() => window.removeEventListener("resize", checkMobile));
  });

  return (
    <section id="experience">
      <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>
            {experienceContent.sectionNumber} //{" "}
            {experienceContent.sectionTitle}
          </span>
        </div>
        <div class="section-telemetry-tag">{experienceContent.sectorTag}</div>
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
        <For each={experienceContent.items}>
          {(exp, index) => {
            const isExpanded = () => !isMobile() || expandedIndex() === index();
            const isActive = () => isMobile() && expandedIndex() === index();

            return (
              <div
                class="erickson-lantern"
                style={{
                  padding: "clamp(1.5rem, 5vw, 2.75rem)",
                  "margin-left": isMobile() ? "0" : `${index() * 2.5}rem`,
                  "border-radius": "32px",
                  "border-left": "8px solid var(--grid-border)",
                  "border-color": isActive()
                    ? "var(--lantern-amber)"
                    : "var(--grid-border)",
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
                    "margin-bottom": isExpanded() ? "1.75rem" : "0",
                    cursor: isMobile() ? "pointer" : "default",
                  }}
                  onClick={() => {
                    if (isMobile()) {
                      setExpandedIndex(isActive() ? null : index());
                    }
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
                      display: "flex",
                      "align-items": "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        "font-family": "var(--font-telemetry)",
                        "font-size": "0.85rem",
                        "font-weight": "700",
                        color: isActive()
                          ? "var(--lantern-amber)"
                          : "var(--ink-primary)",
                        "letter-spacing": "0.05em",
                      }}
                    >
                      {exp.company} // {exp.period}
                    </div>
                    <Show when={isMobile()}>
                      <div
                        style={{
                          "font-family": "var(--font-telemetry)",
                          "font-size": "0.85rem",
                          "font-weight": "700",
                          color: isActive()
                            ? "var(--lantern-amber)"
                            : "var(--ink-primary)",
                        }}
                      >
                        {isActive() ? "COLLAPSE [-]" : "[+]"}
                      </div>
                    </Show>
                  </div>
                </div>

                <Show when={isExpanded()}>
                  {/* Content & Architectural Details */}
                  <div
                    style={{
                      display: "grid",
                      "grid-template-columns":
                        "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "2.5rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          "font-size": "clamp(1.5rem, 5vw, 2rem)",
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
                        <For each={exp.tech}>
                          {(t) => (
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
                          )}
                        </For>
                      </div>
                    </div>

                    {/* Achievements Column */}
                    <div
                      style={{
                        background: "var(--bg-concrete)",
                        padding: "clamp(1rem, 4vw, 1.75rem)",
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
                        {experienceContent.milestonesTitle}
                      </div>
                      <ul
                        style={{
                          "list-style": "none",
                          display: "flex",
                          "flex-direction": "column",
                          gap: "1rem",
                        }}
                      >
                        <For each={exp.achievements}>
                          {(item) => (
                            <li
                              style={{
                                display: "flex",
                                gap: "0.85rem",
                                "align-items": "flex-start",
                                "font-size": "0.95rem",
                                color: "var(--ink-secondary)",
                                "line-height": "1.5",
                              }}
                            >
                              <span
                                style={{
                                  color: "var(--grid-border)",
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
                  </div>
                </Show>
              </div>
            );
          }}
        </For>
      </div>
    </section>
  );
};

export default Experience;
