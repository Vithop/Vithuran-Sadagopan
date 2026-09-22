import { For, type Component } from "solid-js";
import type { ArchiveProject } from "../data/archiveData";

interface ArchiveCardProps {
  project: ArchiveProject;
}

const ArchiveCard: Component<ArchiveCardProps> = (props) => {
  const p = () => props.project;
  const imageSrc = () =>
    p().img ? `${import.meta.env.BASE_URL}${p().img}` : undefined;

  return (
    <div
      class="erickson-lantern"
      style={{
        padding: "2.25rem",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
        gap: "1.75rem",
        "border-radius": "28px",
      }}
    >
      <div>
        {/* Top Meta Bar */}
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
              background: "var(--concrete-slab)",
              padding: "0.2rem 0.65rem",
              "border-radius": "9999px",
              border: "1px solid var(--grid-hairline)",
            }}
          >
            {p().year}
          </span>
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
            {p().category}
          </span>
        </div>

        <h3
          style={{
            "font-size": "1.6rem",
            color: "var(--ink-primary)",
            "margin-bottom": "0.75rem",
            "line-height": "1.2",
          }}
        >
          {p().title}
        </h3>

        {/* Tech stack badges */}
        <div
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            gap: "0.4rem",
            "margin-bottom": "1.25rem",
          }}
        >
          <For each={p().stack}>
            {(t) => (
              <span
                style={{
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.7rem",
                  background: "var(--bg-concrete)",
                  border: "1px solid var(--grid-hairline)",
                  padding: "0.2rem 0.55rem",
                  "border-radius": "6px",
                  color: "var(--ink-primary)",
                }}
              >
                {t}
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
          {p().description}
        </p>

        {/* Image container if present */}
        {p().img && imageSrc() && (
          <div
            style={{
              border: "2px solid var(--grid-border)",
              "border-radius": "16px",
              overflow: "hidden",
              "margin-bottom": "1.5rem",
              background: "#000",
              "box-shadow": "var(--shadow-hard-sm)",
            }}
          >
            <img
              src={imageSrc()}
              alt={p().title}
              style={{
                width: "100%",
                height: "180px",
                "object-fit": "cover",
                display: "block",
                filter: "grayscale(40%)",
                transition: "filter 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(40%)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        )}

        {/* Highlights Bullet Box */}
        <div
          style={{
            background: "var(--bg-concrete)",
            padding: "1rem 1.25rem",
            "border-radius": "16px",
            border: "1px solid var(--grid-hairline)",
            "font-family": "var(--font-telemetry)",
            "font-size": "0.75rem",
            "margin-bottom": "1rem",
          }}
        >
          <div
            style={{
              color: "var(--ink-primary)",
              "font-weight": "700",
              "margin-bottom": "0.5rem",
            }}
          >
            KEY HIGHLIGHTS:
          </div>
          <ul
            style={{
              "list-style": "none",
              display: "flex",
              "flex-direction": "column",
              gap: "0.35rem",
              color: "var(--ink-secondary)",
            }}
          >
            <For each={p().highlights}>{(h) => <li>• {h}</li>}</For>
          </ul>
        </div>
      </div>

      {/* Footer Action Links */}
      <div
        style={{
          "border-top": "2px solid var(--grid-hairline)",
          "padding-top": "1rem",
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          gap: "0.75rem",
          "flex-wrap": "wrap",
        }}
      >
        <span
          style={{
            "font-family": "var(--font-telemetry)",
            "font-size": "0.75rem",
            color: "var(--ink-muted)",
          }}
        >
          ARCHIVE RECORD
        </span>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          {p().githubUrl && (
            <a
              href={p().githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="pill-button"
              style={{
                padding: "0.4rem 0.9rem",
                "font-size": "0.75rem",
              }}
            >
              GITHUB REPO ↗
            </a>
          )}
          {p().demoUrl && (
            <a
              href={p().demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="pill-button"
              style={{
                padding: "0.4rem 0.9rem",
                "font-size": "0.75rem",
                background: "var(--grid-border)",
                color: "#fff",
              }}
            >
              LIVE DEMO ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchiveCard;
