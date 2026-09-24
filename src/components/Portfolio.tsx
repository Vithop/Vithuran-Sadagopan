import { For, type Component } from "solid-js";
import { projectsContent } from "../data/content";

interface PortfolioProps {
  onOpenArchive?: () => void;
}

const Portfolio: Component<PortfolioProps> = (props) => {
  return (
    <section id="portfolio">
      <div class="grid-crosshair" style={{ top: "1.5rem", right: "1.5rem" }} />
      <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>
            {projectsContent.sectionNumber} // {projectsContent.sectionTitle}
          </span>
        </div>
        <div class="section-telemetry-tag">{projectsContent.sectorTag}</div>
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
        <For each={projectsContent.items}>
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
                    {projectsContent.cardLabels.specsTitle}
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
                  {projectsContent.cardLabels.publicRepo}
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
                  {projectsContent.cardLabels.viewRepo}
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
            {projectsContent.archiveBanner.tag}
          </div>
          <h3
            style={{
              "font-size": "1.75rem",
              color: "var(--ink-primary)",
              "margin-bottom": "0.5rem",
            }}
          >
            {projectsContent.archiveBanner.headline}
          </h3>
          <p style={{ color: "var(--ink-secondary)", "font-size": "0.95rem" }}>
            {projectsContent.archiveBanner.description}
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
          {projectsContent.archiveBanner.cta}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
