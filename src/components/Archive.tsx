import type { Component } from "solid-js";

const portfolioItems = [
  {
    code: "PORTFOLIO // 01",
    title: "IoT Garden Gnome",
    stack: "React, C, NodeMCU, AWS IoT, DynamoDB",
    category: "CONNECTED SYSTEMS",
    description:
      "Autonomous agricultural monitoring system with embedded microcontrollers transmitting environmental telemetry over MQTT to AWS DynamoDB with real-time alerting APIs.",
    specs: [
      "Hardware: ESP8266 NodeMCU, Soil & Light Sensors",
      "Telemetry: MQTT via AWS IoT Core",
      "Latency: Sub-second live data ingestion",
    ],
    img: "/GardenGnomePrototype1.jpg",
  },
  {
    code: "PORTFOLIO // 02",
    title: "Wearable BioSensor System",
    stack: "C#, C, Myo Band, EMG Sensors",
    category: "PHYSICAL COMPUTING",
    description:
      "Gesture-controlled volumetric 3D LED cube powered by electromyography signals, signal processing algorithms, and spatial gesture vector mapping.",
    specs: [
      "Sensors: 8-channel medical-grade EMG",
      "Algorithm: Fast Fourier transform gesture filtering",
      "Output: 8x8x8 volumetric LED matrix",
    ],
    img: "/Wearable-BioSensor.gif",
  },
  {
    code: "PORTFOLIO // 03",
    title: "Single Axis CNC Prototype",
    stack: "Arduino, CAD, Stepper Motors, 3D Print",
    category: "ASSISTIVE ROBOTICS",
    description:
      "Precision assistive robotic arm prototype engineered for clients with cerebral palsy, incorporating high-torque dampening and tactile control limiters.",
    specs: [
      "Chassis: Custom CAD parametric 3D print",
      "Actuation: NEMA-17 stepper with microstepping",
      "Firmware: Embedded C with real-time stops",
    ],
    img: "/Single-Axis-CNC-prototype.gif",
  },
];

const Archive: Component = () => {
  return (
    <section id="portfolio">
      <div
        class="grid-crosshair"
        style={{ top: "1.5rem", right: "1.5rem" }}
      ></div>

      <div class="section-header-beam">
        <div class="section-header-title">
          <span>PORTFOLIO // PILL-SHAPED MODULAR VITRINES</span>
        </div>
        <div class="section-telemetry-tag">HARDWARE & DISTRIBUTED SYSTEMS</div>
      </div>

      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
        }}
        class="interactive-cluster"
      >
        {portfolioItems.map((item) => (
          <div
            class="erickson-lantern"
            style={{
              padding: "2.25rem",
              display: "flex",
              "flex-direction": "column",
              "justify-content": "space-between",
              gap: "1.75rem",
              "border-radius": "28px",
            }}
          >
            <div>
              {/* Card Meta Bar */}
              <div
                style={{
                  display: "flex",
                  "justify-content": "space-between",
                  "align-items": "center",
                  "margin-bottom": "1.25rem",
                  "border-bottom": "2px solid var(--grid-hairline)",
                  "padding-bottom": "0.75rem",
                }}
              >
                <span
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.75rem",
                    color: "var(--cedar-dark)",
                    "font-weight": "700",
                  }}
                >
                  {item.code}
                </span>
                <span
                  style={{
                    "font-family": "var(--font-telemetry)",
                    "font-size": "0.7rem",
                    color: "var(--ink-secondary)",
                    background: "var(--concrete-slab)",
                    padding: "0.25rem 0.6rem",
                    "border-radius": "9999px",
                  }}
                >
                  {item.category}
                </span>
              </div>

              <h3
                style={{
                  "font-size": "1.75rem",
                  color: "var(--ink-primary)",
                  "margin-bottom": "0.75rem",
                }}
              >
                {item.title}
              </h3>

              <div
                style={{
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.8rem",
                  color: "var(--cedar-wood)",
                  "margin-bottom": "1.25rem",
                }}
              >
                {item.stack}
              </div>

              <p
                style={{
                  "font-size": "0.95rem",
                  color: "var(--ink-secondary)",
                  "line-height": "1.6",
                  "margin-bottom": "1.5rem",
                }}
              >
                {item.description}
              </p>

              {/* Vitrine Image Container */}
              <div
                style={{
                  border: "2px solid var(--grid-border)",
                  "border-radius": "16px",
                  overflow: "hidden",
                  "margin-bottom": "1.5rem",
                  background: "#000",
                  "box-shadow": "var(--shadow-hard-sm)",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "190px",
                    "object-fit": "cover",
                    display: "block",
                    filter: "grayscale(50%)",
                    transition: "filter 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%)";
                    e.currentTarget.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(50%)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* Technical Specifications List */}
              <div
                style={{
                  background: "var(--bg-concrete)",
                  padding: "1rem 1.25rem",
                  "border-radius": "16px",
                  border: "1px solid var(--grid-hairline)",
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.75rem",
                }}
              >
                <div
                  style={{
                    color: "var(--ink-primary)",
                    "font-weight": "700",
                    "margin-bottom": "0.5rem",
                  }}
                >
                  TECHNICAL SPECIFICATIONS:
                </div>
                <ul
                  style={{
                    "list-style": "none",
                    display: "flex",
                    "flex-direction": "column",
                    gap: "0.35rem",
                    color: "var(--ink-muted)",
                  }}
                >
                  {item.specs.map((s) => (
                    <li>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                "border-top": "2px solid var(--grid-hairline)",
                "padding-top": "1rem",
                display: "flex",
                "justify-content": "space-between",
                "align-items": "center",
              }}
            >
              <span
                style={{
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.75rem",
                  color: "var(--ink-muted)",
                }}
              >
                INTERACTABLE LANTERN
              </span>
              <span
                style={{
                  "font-family": "var(--font-telemetry)",
                  "font-size": "0.8rem",
                  "font-weight": "700",
                  color: "var(--cedar-wood)",
                }}
              >
                ACTIVE ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archive;
