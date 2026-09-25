import { createSignal, For, type Component } from "solid-js";
import { contactContent, socialsContent } from "../data/content";

const Contact: Component = () => {
  const [copied, setCopied] = createSignal(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(socialsContent.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact">
      <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />
      <div class="grid-crosshair" style={{ top: "1.5rem", right: "1.5rem" }} />

      <div class="section-header-beam">
        <h2
          class="section-header-title"
          style={{ "font-size": "inherit", margin: "0" }}
        >
          <span>
            {contactContent.sectionNumber} // {contactContent.sectionTitle}
          </span>
        </h2>
        <div class="section-telemetry-tag">{contactContent.sectorTag}</div>
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
          <div
            style={{
              "font-family": "var(--font-monumental)",
              "font-size": "clamp(2.5rem, 5vw, 4.5rem)",
              "text-transform": "uppercase",
              "letter-spacing": "0.02em",
              "line-height": "1.05",
              color: "var(--ink-primary)",
              "margin-bottom": "2rem",
            }}
          >
            {contactContent.headline.first}
            <br />
            {contactContent.headline.second}
          </div>

          <p
            style={{
              "font-size": "1.2rem",
              color: "var(--ink-secondary)",
              "line-height": "1.6",
              "margin-bottom": "2.5rem",
            }}
          >
            {contactContent.description}
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
              aria-label="Copy email address to clipboard"
              style={{ width: "100%", "justify-content": "space-between" }}
            >
              <span>
                {copied()
                  ? contactContent.emailAction.copiedLabel
                  : socialsContent.email}
              </span>
              <span
                style={{ color: "var(--ink-primary)", "font-weight": "700" }}
              >
                {copied() ? "✓" : contactContent.emailAction.copyLabel}
              </span>
            </button>
            <span class="sr-only" aria-live="polite">
              {copied() ? "Email address copied to clipboard" : ""}
            </span>

            <For each={contactContent.channels}>
              {(channel) => (
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="pill-button"
                  aria-label={`Visit Vithuran on ${channel.label}`}
                  style={{ width: "100%", "justify-content": "space-between" }}
                >
                  <span>{channel.label}</span>
                  <span
                    style={{
                      color: "var(--ink-primary)",
                      "font-weight": "700",
                    }}
                  >
                    ↗
                  </span>
                </a>
              )}
            </For>
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
                color: "var(--ink-primary)",
                "font-weight": "700",
              }}
            >
              {contactContent.portal.tag}
            </span>
            <span
              style={{
                width: "10px",
                height: "10px",
                "border-radius": "50%",
                background: "var(--grid-border)",
              }}
            />
          </div>

          <div>
            <h3
              style={{
                "font-size": "1.75rem",
                color: "var(--ink-primary)",
                "margin-bottom": "1rem",
              }}
            >
              {contactContent.portal.title}
            </h3>
            <p
              style={{
                "font-size": "1rem",
                color: "var(--ink-secondary)",
                "line-height": "1.6",
              }}
            >
              {contactContent.portal.description}
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
              "font-weight": "600",
              color: "var(--ink-secondary)",
              display: "flex",
              "justify-content": "space-between",
            }}
          >
            <span>{contactContent.portal.location}</span>
            <span>{contactContent.portal.status}</span>
          </div>

          <a
            href={`mailto:${socialsContent.email}`}
            class="pill-button"
            aria-label="Send direct email to Vithuran Sadagopan"
            style={{
              background: "var(--grid-border)",
              color: "#fff",
              "border-color": "var(--grid-border)",
              "font-size": "0.95rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--concrete-pylon-hover)";
              e.currentTarget.style.color = "var(--ink-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--grid-border)";
              e.currentTarget.style.color = "#fff";
            }}
          >
            {contactContent.portal.sendAction}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
