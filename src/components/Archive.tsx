import type { Component } from 'solid-js';

const Archive: Component = () => {
  const projects = [
    {
      year: "2019",
      title: "IoT Garden Gnome",
      tech: "React, C, NodeMCU, AWS IoT, DynamoDB",
      desc: "Automated gardening system with real-time sensor data API.",
      img: "/GardenGnomePrototype1.jpg"
    },
    {
      year: "2018",
      title: "Wearable BioSensor System",
      tech: "C#, C, Myo Band",
      desc: "Gesture-controlled 3D LED cube using electromyography.",
      img: "/Wearable-BioSensor.gif"
    },
    {
      year: "2017",
      title: "Single Axis CNC",
      tech: "Arduino, CAD, 3D Printing",
      desc: "Robotic arm prototype designed to assist clients with cerebral palsy.",
      img: "/Single-Axis-CNC-prototype.gif"
    }
  ];

  return (
    <section id="archive" style={{ padding: "8rem 2rem" }}>
      <div class="section-header">04 // Project Archive</div>

      <div style={{ display: "flex", "flex-direction": "column", gap: "4rem" }}>
        {projects.map((proj, i) => (
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", "align-items": "center", "border-top": i === 0 ? "1px solid var(--border-color)" : "none", "padding-top": i === 0 ? "4rem" : "0" }}>
            
            <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
              <div style={{ "font-family": "var(--font-mono)", "font-size": "0.85rem", color: "var(--accent-teal)", "margin-bottom": "0.5rem" }}>
                {proj.year} // {proj.tech}
              </div>
              <h3 style={{ "font-size": "2rem", "margin-bottom": "1rem" }}>{proj.title}</h3>
              <p style={{ "font-size": "1.05rem" }}>{proj.desc}</p>
            </div>

            <div style={{ order: i % 2 === 0 ? 2 : 1, border: "1px solid var(--border-color)", padding: "0.5rem" }}>
              <img src={proj.img} alt={proj.title} style={{ width: "100%", height: "auto", display: "block", filter: "grayscale(100%)", transition: "filter 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%)"} onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%)"} />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Archive;
