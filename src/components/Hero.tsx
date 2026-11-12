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
  const [activeSection, setActiveSection] = createSignal("about");

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

    const sectionIds = navContent.items
      .filter((item) => !item.isArchiveTrigger && item.id)
      .map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    onCleanup(() => {
      clearInterval(interval);
      observer.disconnect();
    });
  });

  return (
    <>
      {/* Top Post-and-Beam Header Lintel */}
      <header class="site-header-lintel">
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
          <span style={{ color: "var(--ink-secondary)", "font-weight": "600" }}>
            {navContent.brand.location}
          </span>
        </div>

        <nav
          aria-label="Main Navigation"
          style={{
            display: "flex",
            gap: "clamp(0.4rem, 1.2vw, 1rem)",
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
                    onClick={() => setActiveSection(item.id)}
                    aria-current={
                      activeSection() === item.id ? "location" : undefined
                    }
                    class={`nav-link ${activeSection() === item.id ? "active" : ""}`}
                  >
                    {item.number
                      ? `${item.number} // ${item.label}`
                      : item.label}
                  </a>
                }
              >
                <button
                  onClick={() => props.onOpenArchive?.()}
                  aria-label="View chronological project archive"
                  class="nav-link"
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
            {navContent.timeZoneLabel} {time() || "--:--:--"}
          </span>
        </div>
      </header>

      {/* Main About Me Section */}
      <section id="about">
        <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />
        <div
          class="grid-crosshair"
          style={{ top: "1.5rem", right: "1.5rem" }}
        />

        <div class="section-header-beam">
          <h2
            class="section-header-title"
            style={{ "font-size": "inherit", margin: "0" }}
          >
            <span>
              {heroContent.sectionNumber} // {heroContent.sectionTitle}
            </span>
          </h2>
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
                download="Vithuran_Sadagopan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="pill-button pill-button-primary"
                aria-label="Download Resume / CV (PDF)"
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
                        "font-size": "0.8rem",
                        "font-weight": "500",
                        color: "var(--ink-secondary)",
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
    </>
  );
};

export default Hero;
