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
    <div>
      {/* Top Monumental Lintel Beam / Navigation */}
      <header
        class="board-formed-surface"
        style={{
          padding: "1.25rem 2rem",
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "flex-wrap": "wrap",
          gap: "1rem",
          "border-top": "none",
          "border-left": "none",
          "border-right": "none",
          "font-family": "var(--font-telemetry)",
          "font-size": "0.8rem",
          "letter-spacing": "0.08em",
        }}
      >
        <div
          style={{ display: "flex", "align-items": "center", gap: "1.5rem" }}
        >
          <div
            style={{ display: "flex", "align-items": "center", gap: "0.5rem" }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                "background-color": "var(--pool-cyan)",
                display: "inline-block",
              }}
            ></span>
            <span
              style={{ "font-weight": "600", color: "var(--stone-aggregate)" }}
            >
              VITHURAN.DEV
            </span>
          </div>
          <span style={{ color: "var(--stone-dim)" }}>|</span>
          <span style={{ color: "var(--stone-muted)" }}>
            VANCOUVER, BC // LAT 49.28°N
          </span>
        </div>

        <nav
          style={{ display: "flex", gap: "1.75rem", "align-items": "center" }}
        >
          <a
            href="#experience"
            style={{ color: "var(--stone-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--stone-aggregate)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--stone-muted)")
            }
          >
            01 // EXPERIENCE
          </a>
          <a
            href="#skills"
            style={{ color: "var(--stone-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--stone-aggregate)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--stone-muted)")
            }
          >
            02 // SYSTEMS
          </a>
          <a
            href="#github"
            style={{ color: "var(--stone-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--stone-aggregate)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--stone-muted)")
            }
          >
            03 // TELEMETRY
          </a>
          <a
            href="#archive"
            style={{ color: "var(--stone-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--stone-aggregate)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--stone-muted)")
            }
          >
            04 // ARCHIVE
          </a>
        </nav>

        <div
          style={{
            display: "flex",
            "align-items": "center",
            gap: "0.75rem",
            color: "var(--cedar-wood)",
          }}
        >
          <span>PT {time() || "12:00:00"}</span>
        </div>
      </header>

      {/* Main Monumental Concrete Pavilion Hero */}
      <section
        class="hero-section"
        style={{ padding: "6rem 3rem 5rem 3rem", position: "relative" }}
      >
        {/* Architectural Grid Crosshairs */}
        <div
          class="grid-crosshair"
          style={{ top: "1.5rem", left: "1.5rem" }}
        ></div>
        <div
          class="grid-crosshair"
          style={{ top: "1.5rem", right: "1.5rem" }}
        ></div>

        <div
          style={{
            "margin-bottom": "1.5rem",
            display: "flex",
            "justify-content": "space-between",
            "align-items": "flex-end",
          }}
        >
          <div
            style={{
              "font-family": "var(--font-telemetry)",
              "font-size": "0.75rem",
              color: "var(--cedar-wood)",
              "letter-spacing": "0.15em",
            }}
          >
            WEST COAST BRUTALIST ARCHITECTURE // SECTOR 01
          </div>
          <div
            style={{
              "font-family": "var(--font-telemetry)",
              "font-size": "0.75rem",
              color: "var(--stone-dim)",
            }}
          >
            SCALE [ 0m ─── 5m ─── 10m ]
          </div>
        </div>

        {/* Monolithic Name Heading */}
        <h1
          style={{
            "font-size": "clamp(3.2rem, 9.5vw, 8.5rem)",
            "line-height": "0.88",
            "letter-spacing": "-0.04em",
            color: "var(--stone-aggregate)",
            "margin-bottom": "2rem",
            "text-shadow": "0 2px 40px rgba(0,0,0,0.8)",
          }}
        >
          VITHURAN
          <br />
          SADAGOPAN
        </h1>

        {/* Cedar Louver Structural Divider */}
        <div class="cedar-louver" style={{ "margin-bottom": "2.5rem" }}></div>

        {/* Terraced Content Layout */}
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            "align-items": "stretch",
          }}
        >
          {/* Mission & Architectural Statement */}
          <div
            class="board-formed-surface terrace-card"
            style={{
              padding: "2.5rem",
              display: "flex",
              "flex-direction": "column",
              "justify-content": "space-between",
              gap: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.75rem",
                  color: "var(--pool-cyan)",
                  "margin-bottom": "1rem",
                }}
              >
                SPEC // SYSTEMS ENGINEERING & UX
              </div>
              <p
                style={{
                  "font-size": "1.25rem",
                  color: "var(--stone-aggregate)",
                  "line-height": "1.5",
                }}
              >
                Software Development Engineer building highly available,
                low-latency distributed systems and premium frontend
                experiences.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                "font-family": "var(--font-telemetry)",
                "font-size": "0.85rem",
              }}
            >
              <a
                href="mailto:vithuran.sada@gmail.com"
                style={{
                  padding: "0.6rem 1.25rem",
                  background: "rgba(225, 221, 213, 0.06)",
                  border: "1px solid var(--border-prominent)",
                  color: "var(--stone-aggregate)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--cedar-wood)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(225, 221, 213, 0.06)";
                  e.currentTarget.style.color = "var(--stone-aggregate)";
                }}
              >
                EMAIL // CONTACT
              </a>
              <a
                href="https://linkedin.com/in/vithuran-sada"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.6rem 1.25rem",
                  background: "rgba(225, 221, 213, 0.06)",
                  border: "1px solid var(--border-prominent)",
                  color: "var(--stone-aggregate)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--cedar-wood)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(225, 221, 213, 0.06)";
                  e.currentTarget.style.color = "var(--stone-aggregate)";
                }}
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/vithop"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.6rem 1.25rem",
                  background: "rgba(225, 221, 213, 0.06)",
                  border: "1px solid var(--border-prominent)",
                  color: "var(--stone-aggregate)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--cedar-wood)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(225, 221, 213, 0.06)";
                  e.currentTarget.style.color = "var(--stone-aggregate)";
                }}
              >
                GITHUB
              </a>
            </div>
          </div>

          {/* Structural Telemetry & Metrics Block (Reflecting Glass) */}
          <div
            class="reflecting-glass terrace-card"
            style={{
              padding: "2.5rem",
              display: "flex",
              "flex-direction": "column",
              "justify-content": "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  "justify-content": "space-between",
                  "align-items": "center",
                  "margin-bottom": "1.5rem",
                }}
              >
                <span
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--pool-cyan)",
                    "letter-spacing": "0.1em",
                  }}
                >
                  TELEMETRY READOUT // KEY IMPACT
                </span>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    "border-radius": "50%",
                    "background-color": "var(--pool-cyan)",
                    "box-shadow": "0 0 8px var(--pool-cyan)",
                  }}
                ></span>
              </div>

              <div
                style={{
                  display: "grid",
                  "grid-template-columns": "1fr 1fr",
                  gap: "1.5rem",
                  "margin-top": "1rem",
                }}
              >
                <div
                  style={{
                    "border-left": "2px solid var(--pool-cyan)",
                    "padding-left": "1rem",
                  }}
                >
                  <div
                    style={{
                      "font-family": "var(--font-monumental)",
                      "font-size": "2rem",
                      "font-weight": "700",
                      color: "var(--stone-aggregate)",
                    }}
                  >
                    $300M
                  </div>
                  <div
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.75rem",
                      color: "var(--stone-muted)",
                      "margin-top": "0.25rem",
                    }}
                  >
                    Incremental Revenue Driven
                  </div>
                </div>

                <div
                  style={{
                    "border-left": "2px solid var(--pool-cyan)",
                    "padding-left": "1rem",
                  }}
                >
                  <div
                    style={{
                      "font-family": "var(--font-monumental)",
                      "font-size": "2rem",
                      "font-weight": "700",
                      color: "var(--stone-aggregate)",
                    }}
                  >
                    ~40%
                  </div>
                  <div
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.75rem",
                      color: "var(--stone-muted)",
                      "margin-top": "0.25rem",
                    }}
                  >
                    SSR Runtime Reduction
                  </div>
                </div>

                <div
                  style={{
                    "border-left": "2px solid var(--cedar-wood)",
                    "padding-left": "1rem",
                  }}
                >
                  <div
                    style={{
                      "font-family": "var(--font-monumental)",
                      "font-size": "2rem",
                      "font-weight": "700",
                      color: "var(--stone-aggregate)",
                    }}
                  >
                    150+
                  </div>
                  <div
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.75rem",
                      color: "var(--stone-muted)",
                      "margin-top": "0.25rem",
                    }}
                  >
                    Engineers on Daily Dev Loop
                  </div>
                </div>

                <div
                  style={{
                    "border-left": "2px solid var(--cedar-wood)",
                    "padding-left": "1rem",
                  }}
                >
                  <div
                    style={{
                      "font-family": "var(--font-monumental)",
                      "font-size": "2rem",
                      "font-weight": "700",
                      color: "var(--stone-aggregate)",
                    }}
                  >
                    1 Mo→1 Wk
                  </div>
                  <div
                    style={{
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.75rem",
                      color: "var(--stone-muted)",
                      "margin-top": "0.25rem",
                    }}
                  >
                    Payment Onboarding Velocity
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                "margin-top": "2rem",
                "padding-top": "1rem",
                "border-top": "1px solid rgba(78, 194, 184, 0.2)",
                "font-family": "var(--font-telemetry)",
                "font-size": "0.75rem",
                color: "var(--stone-dim)",
                display: "flex",
                "justify-content": "space-between",
              }}
            >
              <span>CURRENT STATUS: ACTIVE</span>
              <span>AMAZON SDE II // PAYMENTS UX</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
