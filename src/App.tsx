import type { Component } from "solid-js";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import GithubActivity from "./components/GithubActivity";
import Archive from "./components/Archive";

const App: Component = () => {
  return (
    <div class="app-container">
      <Hero />
      <Experience />
      <Skills />
      <GithubActivity />
      <Archive />

      {/* Foundational Plinth / Architectural Footer */}
      <footer
        class="board-formed-surface"
        style={{
          padding: "3.5rem 3rem",
          "border-left": "none",
          "border-right": "none",
          "border-bottom": "none",
          "font-family": "var(--font-telemetry)",
          "font-size": "0.8rem",
          color: "var(--stone-muted)",
        }}
      >
        <div class="cedar-louver" style={{ "margin-bottom": "2.5rem" }}></div>

        <div
          style={{
            display: "flex",
            "justify-content": "space-between",
            "align-items": "flex-start",
            "flex-wrap": "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <div
              style={{
                color: "var(--stone-aggregate)",
                "font-weight": "600",
                "margin-bottom": "0.5rem",
              }}
            >
              VITHURAN SADAGOPAN &copy; {new Date().getFullYear()}
            </div>
            <div
              style={{
                color: "var(--stone-dim)",
                "font-size": "0.75rem",
                "letter-spacing": "0.08em",
              }}
            >
              STAFF-READY DISTRIBUTED SYSTEMS & EXPERIMENTAL UI ARCHITECTURE
            </div>
          </div>

          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "flex-end",
              gap: "0.4rem",
            }}
          >
            <div style={{ color: "var(--stone-aggregate)" }}>
              VANCOUVER, BRITISH COLUMBIA, CANADA
            </div>
            <div style={{ color: "var(--cedar-wood)", "font-size": "0.75rem" }}>
              ARTHUR ERICKSON WEST COAST BRUTALIST MOTIF
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
