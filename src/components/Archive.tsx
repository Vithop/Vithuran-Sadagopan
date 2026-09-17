import type { Component } from "solid-js";

const archiveProjects = [
  {
    specId: "ARTIFACT // 01",
    year: "2019",
    title: "IoT Garden Gnome",
    stack: "React, C, NodeMCU, AWS IoT, DynamoDB",
    desc: "Autonomous environmental cultivation system capturing soil moisture, ambient humidity, and solar flux with real-time distributed telemetry and alerting APIs.",
    img: "/GardenGnomePrototype1.jpg",
    details:
      "Custom embedded firmware communicating over MQTT to AWS IoT Core with sub-second dashboard updates.",
  },
  {
    specId: "ARTIFACT // 02",
    year: "2018",
    title: "Wearable BioSensor System",
    stack: "C#, C, Myo Band, EMG Sensors",
    desc: "Gesture-controlled volumetric 3D LED cube using surface electromyography muscle signals, real-time Fourier analysis, and spatial mapping.",
    img: "/Wearable-BioSensor.gif",
    details:
      "Low-latency gesture decoding pipeline mapping biological electrical impulses to physical light arrays.",
  },
  {
    specId: "ARTIFACT // 03",
    year: "2017",
    title: "Single Axis CNC Prototype",
    stack: "Arduino, CAD Modeling, 3D Printing",
    desc: "Robotic arm hardware prototype specifically engineered to assist clients with cerebral palsy, featuring tactile feedback and dampening controls.",
    img: "/Single-Axis-CNC-prototype.gif",
    details:
      "Parametric 3D-printed structural chassis with precision stepper actuation and safety limit stops.",
  },
];

const Archive: Component = () => {
  return (
    <section id="archive">
      <div
        class="grid-crosshair"
        style={{ top: "1.5rem", right: "1.5rem" }}
      ></div>

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>04 // Museum Vitrines — Physical & Hardware Archive</span>
        </div>
        <div class="section-telemetry-tag">
          HISTORICAL ARTIFACTS // UBC MOA INSPIRATION
        </div>
      </div>

      <div style={{ display: "flex", "flex-direction": "column", gap: "4rem" }}>
        {archiveProjects.map((project, idx) => (
          <div
            class="board-formed-surface terrace-card"
            style={{
              padding: "2.5rem",
              display: "grid",
              "grid-template-columns": "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3rem",
              "align-items": "center",
              "border-left":
                idx % 2 === 0
                  ? "4px solid var(--pool-cyan)"
                  : "4px solid var(--cedar-wood)",
            }}
          >
            {/* Project Details */}
            <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  "align-items": "center",
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.75rem",
                  "margin-bottom": "1rem",
                }}
              >
                <span
                  style={{
                    color: "var(--cedar-wood)",
                    "letter-spacing": "0.1em",
                  }}
                >
                  {project.specId}
                </span>
                <span style={{ color: "var(--stone-dim)" }}>|</span>
                <span style={{ color: "var(--stone-muted)" }}>
                  {project.year}
                </span>
              </div>

              <h3
                style={{
                  "font-size": "2rem",
                  color: "var(--stone-aggregate)",
                  "margin-bottom": "1rem",
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.8rem",
                  color: "var(--pool-cyan)",
                  "margin-bottom": "1.25rem",
                }}
              >
                {project.stack}
              </div>

              <p
                style={{
                  "font-size": "1.05rem",
                  color: "var(--stone-aggregate)",
                  "line-height": "1.6",
                  "margin-bottom": "1.5rem",
                }}
              >
                {project.desc}
              </p>

              <div
                style={{
                  padding: "1rem",
                  background: "rgba(0,0,0,0.35)",
                  border: "1px solid var(--border-subtle)",
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.75rem",
                  color: "var(--stone-muted)",
                }}
              >
                <span
                  style={{
                    color: "var(--stone-aggregate)",
                    "font-weight": "600",
                  }}
                >
                  NOTE:{" "}
                </span>
                {project.details}
              </div>
            </div>

            {/* Vitrine Image Container */}
            <div
              style={{
                order: idx % 2 === 0 ? 2 : 1,
                background: "var(--bg-deep)",
                border: "2px solid var(--border-prominent)",
                padding: "0.75rem",
                position: "relative",
                "box-shadow": "0 12px 30px rgba(0,0,0,0.7)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: "rgba(17,19,18,0.85)",
                  padding: "0.25rem 0.6rem",
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.65rem",
                  color: "var(--stone-aggregate)",
                  border: "1px solid var(--border-subtle)",
                  "z-index": 2,
                }}
              >
                EXHIBIT {idx + 1}
              </div>

              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "260px",
                  "object-fit": "cover",
                  display: "block",
                  filter: "grayscale(70%) contrast(110%)",
                  transition: "filter 0.4s ease, transform 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%) contrast(100%)";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter =
                    "grayscale(70%) contrast(110%)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archive;
