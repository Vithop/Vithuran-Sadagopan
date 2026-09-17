import { createResource, For } from "solid-js";
import type { Component } from "solid-js";

const fetchRepos = async () => {
  const res = await fetch(
    "https://api.github.com/users/vithop/repos?sort=updated&per_page=4"
  );
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const GithubActivity: Component = () => {
  const [repos] = createResource(fetchRepos);

  return (
    <section id="github">
      <div
        class="grid-crosshair"
        style={{ top: "1.5rem", left: "1.5rem" }}
      ></div>

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>03 // Vitrine — Open Source Telemetry</span>
        </div>
        <div class="section-telemetry-tag">PUBLIC REPOSITORIES // @VITHOP</div>
      </div>

      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.75rem",
        }}
      >
        {repos.loading && (
          <div
            class="board-formed-surface"
            style={{
              padding: "2.5rem",
              "font-family": "var(--font-telemetry)",
              "font-size": "0.85rem",
              color: "var(--stone-dim)",
            }}
          >
            INITIALIZING STRUCTURAL TELEMETRY STREAM...
          </div>
        )}

        {repos.error && (
          <div
            class="board-formed-surface"
            style={{
              padding: "2.5rem",
              "font-family": "var(--font-telemetry)",
              "font-size": "0.85rem",
              color: "var(--cedar-wood)",
            }}
          >
            OFFLINE MONOLITH MODE // GITHUB API RATE LIMITED
          </div>
        )}

        {repos() && (
          <For each={repos()}>
            {(repo: any) => (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                class="reflecting-glass terrace-card"
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "justify-content": "space-between",
                  padding: "2rem",
                  "min-height": "220px",
                  position: "relative",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      "justify-content": "space-between",
                      "align-items": "center",
                      "margin-bottom": "1rem",
                    }}
                  >
                    <span
                      style={{
                        "font-family": "var(--font-telemetry)",
                        "font-size": "0.7rem",
                        color: "var(--pool-cyan)",
                        "letter-spacing": "0.1em",
                      }}
                    >
                      REPOSITORY // {repo.visibility || "PUBLIC"}
                    </span>
                    <span
                      style={{
                        "font-family": "var(--font-telemetry)",
                        "font-size": "0.75rem",
                        color: "var(--cedar-wood)",
                      }}
                    >
                      ★ {repo.stargazers_count}
                    </span>
                  </div>

                  <h4
                    style={{
                      "font-size": "1.25rem",
                      color: "var(--stone-aggregate)",
                      "margin-bottom": "0.75rem",
                      "word-break": "break-word",
                    }}
                  >
                    {repo.name}
                  </h4>

                  <p
                    style={{
                      "font-size": "0.85rem",
                      color: "var(--stone-muted)",
                      "line-height": "1.5",
                      "margin-bottom": "1.5rem",
                    }}
                  >
                    {repo.description ||
                      "Experimental architecture, tools, and system prototypes."}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between",
                    "align-items": "center",
                    "border-top": "1px solid rgba(225, 221, 213, 0.1)",
                    "padding-top": "1rem",
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                  }}
                >
                  <span style={{ color: "var(--stone-aggregate)" }}>
                    {repo.language || "TypeScript / Shell"}
                  </span>
                  <span style={{ color: "var(--pool-cyan)" }}>EXPLORE ↗</span>
                </div>
              </a>
            )}
          </For>
        )}
      </div>
    </section>
  );
};

export default GithubActivity;
