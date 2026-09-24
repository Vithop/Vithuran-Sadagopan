import {
  createSignal,
  onCleanup,
  onMount,
  For,
  Show,
  type Component,
} from "solid-js";
import { heroContent, navContent, socialsContent } from "../data/content";

interface HeroProps {
  onOpenArchive?: () => void;
}

const Hero: Component<HeroProps> = (props) => {
  const [time, setTime] = createSignal("");

  onMount(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: navContent.timeZone,
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    onCleanup(() => clearInterval(interval));
  });

  return (
    <div id="about">
      {/* Top Post-and-Beam Header Lintel */}
      <header
        style={{
          padding: "1.25rem clamp(1rem, 5vw, 2.5rem)",
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "flex-wrap": "wrap",
          gap: "1.25rem",
          "border-bottom": "2px solid var(--grid-border)",
          "background-color": "var(--concrete-slab)",
          "font-family": "var(--font-telemetry)",
          "font-size": "0.85rem",
          "letter-spacing": "0.08em",
        }}
      >
        <div
          style={{
            display: "flex",
            "align-items": "center",
            gap: "1.25rem",
            "flex-wrap": "wrap",
          }}
        >
          <div
            style={{ display: "flex", "align-items": "center", gap: "0.5rem" }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                "background-color": "var(--grid-border)",
                "border-radius": "50%",
              }}
            />
            <span style={{ "font-weight": "700", color: "var(--ink-primary)" }}>
              {navContent.brand.name}
            </span>
          </div>
          <span style={{ color: "var(--ink-secondary)" }}>
            {navContent.brand.location}
          </span>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            "align-items": "center",
            "flex-wrap": "wrap",
          }}
        >
          <For each={navContent.items}>
            {(item) => (
              <Show
                when={item.isArchiveTrigger}
                fallback={
                  <a
                    href={item.href}
                    style={{
                      color:
                        item.id === "about"
                          ? "var(--ink-primary)"
                          : "var(--ink-secondary)",
                      "font-weight": item.id === "about" ? "700" : "normal",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--ink-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        item.id === "about"
                          ? "var(--ink-primary)"
                          : "var(--ink-secondary)")
                    }
                  >
                    {item.number
                      ? `${item.number} // ${item.label}`
                      : item.label}
                  </a>
                }
              >
                <button
                  onClick={() => props.onOpenArchive?.()}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "0",
                    color: "var(--ink-secondary)",
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.85rem",
                    "letter-spacing": "0.08em",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--ink-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--ink-secondary)")
                  }
                >
                  {item.label}
                </button>
              </Show>
            )}
          </For>
        </nav>

        <div
          style={{
            display: "flex",
            "align-items": "center",
            gap: "0.6rem",
            color: "var(--ink-primary)",
            "font-weight": "700",
          }}
        >
          <span>
            {navContent.timeZoneLabel} {time() || "12:00:00"}
          </span>
        </div>
      </header>

      {/* Main About Me Section */}
      <section>
        <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />
        <div
          class="grid-crosshair"
          style={{ top: "1.5rem", right: "1.5rem" }}
        />

        <div class="section-header-beam">
          <div class="section-header-title">
            <span>{heroContent.sectionTitle}</span>
          </div>
          <div class="section-telemetry-tag">{heroContent.sectorTag}</div>
        </div>

        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            "align-items": "center",
          }}
          class="interactive-cluster"
        >
          {/* Monumental Typography & Bio */}
          <div>
            <h1
              style={{
                "font-size": "clamp(2rem, 11vw, 7.5rem)",
                "line-height": "0.95",
                "letter-spacing": "0.01em",
                color: "var(--ink-primary)",
                "margin-bottom": "2rem",
              }}
            >
              {heroContent.headline.first}
              <br />
              {heroContent.headline.second}
            </h1>

            <p
              style={{
                "font-size": "1.25rem",
                color: "var(--ink-secondary)",
                "line-height": "1.6",
                "margin-bottom": "2.5rem",
              }}
            >
              {heroContent.bio}
            </p>

            <div
              class="pill-button-group"
              style={{ display: "flex", "flex-wrap": "wrap", gap: "1rem" }}
            >
              <a href="#contact" class="pill-button">
                {heroContent.actions.getInTouch}
              </a>
              <a
                href="#experience"
                class="pill-button"
                style={{ background: "transparent" }}
              >
                {heroContent.actions.viewExperience}
              </a>
              <a
                href={socialsContent.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="pill-button"
                style={{
                  background: "var(--grid-border)",
                  color: "#ffffff",
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
                {heroContent.actions.viewResume}
              </a>
            </div>
          </div>

          {/* Rounded Profile Vitrine with Emissive Light Effect */}
          <div
            class="erickson-lantern"
            style={{
              padding: "2.5rem",
              display: "flex",
              "flex-direction": "column",
              gap: "2rem",
              "border-radius": "32px",
              background: "var(--concrete-pylon)",
            }}
          >
            <div
              style={{
                display: "flex",
                "justify-content": "space-between",
                "align-items": "center",
              }}
            >
              <span
                style={{
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.75rem",
                  color: "var(--ink-primary)",
                  "font-weight": "700",
                  "letter-spacing": "0.1em",
                }}
              >
                {heroContent.vitrine.header}
              </span>
              <div
                style={{
                  width: "30px",
                  height: "14px",
                  background: "var(--grid-border)",
                  "border-radius": "9999px",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                "grid-template-columns": "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <For each={heroContent.vitrine.metrics}>
                {(metric) => (
                  <div
                    style={{
                      "border-left": "3px solid var(--grid-border)",
                      "padding-left": "1rem",
                    }}
                  >
                    <div
                      style={{
                        "font-family": "var(--font-monumental)",
                        "font-size": "2.2rem",
                        "font-weight": "700",
                        color: "var(--ink-primary)",
                      }}
                    >
                      {metric.value}
                    </div>
                    <div
                      style={{
                        "font-family": "var(--font-telemetry)",
                        "font-size": "0.75rem",
                        color: "var(--ink-muted)",
                        "margin-top": "0.25rem",
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                )}
              </For>
            </div>

            <div
              style={{
                "border-top": "2px solid var(--grid-border)",
                "padding-top": "1.25rem",
                "font-family": "var(--font-telemetry)",
                "font-size": "0.8rem",
                color: "var(--ink-secondary)",
                display: "flex",
                "justify-content": "space-between",
              }}
            >
              <span>{heroContent.vitrine.discipline}</span>
              <span
                style={{ color: "var(--ink-primary)", "font-weight": "700" }}
              >
                {heroContent.vitrine.currentRole}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
