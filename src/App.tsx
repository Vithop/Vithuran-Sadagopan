import {
  createSignal,
  onCleanup,
  onMount,
  Show,
  type Component,
} from "solid-js";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Horizons from "./components/Horizons";
import ArchivePage from "./components/ArchivePage";
import Contact from "./components/Contact";
import { footerContent, navContent } from "./data/content";

const App: Component = () => {
  const [currentRoute, setCurrentRoute] = createSignal<"home" | "archive">(
    "home"
  );

  const navigateTo = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  onMount(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#/archive") {
        setCurrentRoute("archive");
      } else {
        setCurrentRoute("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    onCleanup(() => window.removeEventListener("hashchange", handleHashChange));
  });

  return (
    <div class="app-container">
      <Show
        when={currentRoute() === "archive"}
        fallback={
          <>
            {/* 01 // ABOUT ME */}
            <Hero onOpenArchive={() => navigateTo("#/archive")} />

            {/* 02 // WORK EXPERIENCE */}
            <Experience />

            {/* 03 // SKILLS & ARCHITECTURE */}
            <Skills />

            {/* 04 // PORTFOLIO */}
            <Portfolio onOpenArchive={() => navigateTo("#/archive")} />

            {/* 05 // RESEARCH HORIZONS & FUTURE GOALS */}
            <Horizons />

            {/* 06 // CONTACT ME */}
            <Contact />
          </>
        }
      >
        <ArchivePage onBack={() => navigateTo("#/")} />
      </Show>

      {/* Foundational Plinth Architectural Footer */}
      <footer
        style={{
          padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 3rem)",
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
              {navContent.brand.name} &copy; {new Date().getFullYear()}
            </div>
            <div
              style={{
                color: "var(--ink-muted)",
                "font-size": "0.75rem",
                "letter-spacing": "0.08em",
              }}
            >
              {footerContent.tagline}
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
              {footerContent.location}
            </div>
            <div
              style={{
                color: "var(--ink-muted)",
                "font-size": "0.75rem",
                "font-weight": "600",
              }}
            >
              {footerContent.edition}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
