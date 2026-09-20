import { createSignal, onCleanup, onMount, type Component } from "solid-js";

const Hero: Component = () => {
  const [time, setTime] = createSignal("");

  onMount(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Vancouver",
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
          padding: "1.25rem 2.5rem",
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
          style={{ display: "flex", "align-items": "center", gap: "1.25rem" }}
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
            ></span>
            <span style={{ "font-weight": "700", color: "var(--ink-primary)" }}>
              VITHURAN SADAGOPAN
            </span>
          </div>
          <span style={{ color: "var(--ink-dim)" }}>|</span>
          <span style={{ color: "var(--ink-secondary)" }}>
            VANCOUVER, BC // 49°16'N 123°07'W
          </span>
        </div>

        <nav
          style={{ display: "flex", gap: "1.5rem", "align-items": "center" }}
        >
          <a
            href="#about"
            style={{
              color: "var(--ink-primary)",
              "font-weight": "700",
              transition: "color 0.2s",
            }}
          >
            01 // ABOUT
          </a>
          <a
            href="#experience"
            style={{ color: "var(--ink-secondary)", transition: "color 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ink-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--ink-secondary)")
            }
          >
            02 // EXPERIENCE
          </a>
          <a
            href="#portfolio"
            style={{ color: "var(--ink-secondary)", transition: "color 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ink-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--ink-secondary)")
            }
          >
            03 // PORTFOLIO
          </a>
          <a
            href="#contact"
            style={{ color: "var(--ink-secondary)", transition: "color 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ink-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--ink-secondary)")
            }
          >
            04 // CONTACT
          </a>
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
          <span>PACIFIC TIME {time() || "12:00:00"}</span>
        </div>
      </header>

      {/* Main About Me Section */}
      <section style={{ padding: "5rem 3rem" }}>
        <div
          class="grid-crosshair"
          style={{ top: "1.5rem", left: "1.5rem" }}
        ></div>
        <div
          class="grid-crosshair"
          style={{ top: "1.5rem", right: "1.5rem" }}
        ></div>

        <div class="section-header-beam">
          <div class="section-header-title">
            <span>ABOUT</span>
          </div>
          <div class="section-telemetry-tag">SECTOR 01</div>
        </div>

        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            "align-items": "center",
          }}
          class="interactive-cluster"
        >
          {/* Monumental Typography & Bio */}
          <div>
            <h1
              style={{
                "font-size": "clamp(3.5rem, 8.5vw, 7.5rem)",
                "line-height": "0.95",
                "letter-spacing": "0.01em",
                color: "var(--ink-primary)",
                "margin-bottom": "2rem",
              }}
            >
              VITHURAN
              <br />
              SADAGOPAN
            </h1>

            <p
              style={{
                "font-size": "1.25rem",
                color: "var(--ink-secondary)",
                "line-height": "1.6",
                "margin-bottom": "2.5rem",
              }}
            >
              Software Development Engineer architecting high-availability
              distributed systems and deterministic frontend state machines at
              Amazon. Focused on low-latency microservices, developer
              acceleration, and tactile web interfaces.
            </p>

            <div style={{ display: "flex", "flex-wrap": "wrap", gap: "1rem" }}>
              <a href="#contact" class="pill-button">
                GET IN TOUCH ↗
              </a>
              <a
                href="#experience"
                class="pill-button"
                style={{ background: "transparent" }}
              >
                VIEW WORK EXPERIENCE ↓
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
                PROFILE VITRINE // TELEMETRY
              </span>
              <div
                style={{
                  width: "30px",
                  height: "14px",
                  background: "var(--grid-border)",
                  "border-radius": "9999px",
                }}
              ></div>
            </div>

            <div
              style={{
                display: "grid",
                "grid-template-columns": "1fr 1fr",
                gap: "1.5rem",
              }}
            >
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
                  $300M
                </div>
                <div
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--ink-muted)",
                    "margin-top": "0.25rem",
                  }}
                >
                  Incremental Revenue Driven
                </div>
              </div>

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
                  ~40%
                </div>
                <div
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--ink-muted)",
                    "margin-top": "0.25rem",
                  }}
                >
                  SSR Lambda Latency Cut
                </div>
              </div>

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
                  150+
                </div>
                <div
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--ink-muted)",
                    "margin-top": "0.25rem",
                  }}
                >
                  Engineers Daily Loop
                </div>
              </div>

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
                  1 Mo→1 Wk
                </div>
                <div
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--ink-muted)",
                    "margin-top": "0.25rem",
                  }}
                >
                  Payment Onboarding Cycle
                </div>
              </div>
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
              <span>DISCIPLINE: DISTRIBUTED SYSTEMS</span>
              <span
                style={{ color: "var(--ink-primary)", "font-weight": "700" }}
              >
                AMAZON SDE II
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
