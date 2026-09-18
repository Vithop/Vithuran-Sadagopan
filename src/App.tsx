import type { Component } from "solid-js";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Archive from "./components/Archive";
import Contact from "./components/Contact";

const App: Component = () => {
  return (
    <div class="app-container">
      {/* 01 // ABOUT ME */}
      <Hero />

      {/* 02 // WORK EXPERIENCE */}
      <Experience />

      {/* 03 // PORTFOLIO */}
      <Archive />

      {/* 04 // CONTACT ME */}
      <Contact />

      {/* Foundational Plinth Architectural Footer */}
      <footer
        style={{
          padding: "3.5rem 3rem",
          "background-color": "var(--concrete-slab)",
          "border-top": "2px solid var(--grid-border)",
          "font-family": "var(--font-telemetry)",
          "font-size": "0.85rem",
          color: "var(--ink-secondary)",
        }}
      >
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
                color: "var(--ink-primary)",
                "font-weight": "700",
                "font-size": "1rem",
                "margin-bottom": "0.5rem",
              }}
            >
              VITHURAN SADAGOPAN &copy; {new Date().getFullYear()}
            </div>
            <div
              style={{
                color: "var(--ink-muted)",
                "font-size": "0.75rem",
                "letter-spacing": "0.08em",
              }}
            >
              DISTRIBUTED SYSTEMS & EXPERIMENTAL CLIENT ARCHITECTURES
            </div>
          </div>

          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "flex-end",
              gap: "0.5rem",
            }}
          >
            <div style={{ color: "var(--ink-primary)", "font-weight": "600" }}>
              VANCOUVER, BRITISH COLUMBIA, CANADA
            </div>
            <div
              style={{
                color: "var(--ink-muted)",
                "font-size": "0.75rem",
                "font-weight": "600",
              }}
            >
              ARTHUR ERICKSON LIGHT-CONCRETE BRUTALIST EDITION // MAQIVE
              TYPEFACE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
