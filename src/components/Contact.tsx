import { createSignal, type Component } from "solid-js";

const Contact: Component = () => {
  const [copied, setCopied] = createSignal(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vithuran.sada@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact">
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
          <span>CONTACT ME // COMMUNICATIONS BAY</span>
        </div>
        <div class="section-telemetry-tag">DIRECT CHANNEL // VANCOUVER, BC</div>
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
        {/* Left Column: Contact Philosophy & Details */}
        <div>
          <h2
            style={{
              "font-size": "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--ink-primary)",
              "margin-bottom": "1.5rem",
            }}
          >
            INITIATE
            <br />
            TRANSMISSION
          </h2>

          <div class="cedar-louver" style={{ "margin-bottom": "2rem" }}></div>

          <p
            style={{
              "font-size": "1.2rem",
              color: "var(--ink-secondary)",
              "line-height": "1.6",
              "margin-bottom": "2.5rem",
            }}
          >
            Open to senior engineering roles, distributed systems consulting,
            and high-craft UI/UX collaborations. Based in Vancouver, BC (Pacific
            Time).
          </p>

          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              gap: "1rem",
              "max-width": "360px",
            }}
          >
            <button
              onClick={copyEmail}
              class="pill-button"
              style={{ width: "100%", "justify-content": "space-between" }}
            >
              <span>
                {copied() ? "COPIED TO CLIPBOARD!" : "vithuran.sada@gmail.com"}
              </span>
              <span style={{ color: "var(--cedar-wood)" }}>
                {copied() ? "✓" : "COPY"}
              </span>
            </button>

            <a
              href="https://linkedin.com/in/vithuran-sada"
              target="_blank"
              rel="noopener noreferrer"
              class="pill-button"
              style={{ width: "100%", "justify-content": "space-between" }}
            >
              <span>LINKEDIN // PROFILE</span>
              <span style={{ color: "var(--cedar-wood)" }}>↗</span>
            </a>

            <a
              href="https://github.com/vithop"
              target="_blank"
              rel="noopener noreferrer"
              class="pill-button"
              style={{ width: "100%", "justify-content": "space-between" }}
            >
              <span>GITHUB // REPOSITORIES</span>
              <span style={{ color: "var(--cedar-wood)" }}>↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Emissive Contact Portal Vitrine */}
        <div
          class="erickson-lantern"
          style={{
            padding: "3rem",
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
                color: "var(--cedar-wood)",
                "font-weight": "700",
              }}
            >
              CONTACT PORTAL // SECTOR 04
            </span>
            <span
              style={{
                width: "10px",
                height: "10px",
                "border-radius": "50%",
                background: "var(--cedar-wood)",
              }}
            ></span>
          </div>

          <div>
            <h3
              style={{
                "font-size": "1.75rem",
                color: "var(--ink-primary)",
                "margin-bottom": "1rem",
              }}
            >
              AVAILABLE CHANNELS
            </h3>
            <p
              style={{
                "font-size": "1rem",
                color: "var(--ink-secondary)",
                "line-height": "1.6",
              }}
            >
              Reach out via email or LinkedIn for technical inquiries,
              architecture design reviews, or distributed systems opportunities.
              Responses typically within 24 hours.
            </p>
          </div>

          <div
            style={{
              padding: "1.25rem",
              background: "var(--bg-concrete)",
              border: "1px solid var(--grid-hairline)",
              "border-radius": "16px",
              "font-family": "var(--font-telemetry)",
              "font-size": "0.8rem",
              color: "var(--ink-muted)",
              display: "flex",
              "justify-content": "space-between",
            }}
          >
            <span>LOCATION: VANCOUVER, BC</span>
            <span>STATUS: ACTIVE TRANSMISSION</span>
          </div>

          <a
            href="mailto:vithuran.sada@gmail.com"
            class="pill-button"
            style={{
              background: "var(--cedar-wood)",
              color: "#fff",
              "border-color": "var(--grid-border)",
              "font-size": "0.95rem",
            }}
          >
            SEND DIRECT MESSAGE ✉
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
