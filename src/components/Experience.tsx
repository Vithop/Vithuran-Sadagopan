import type { Component } from 'solid-js';

const Experience: Component = () => {
  return (
    <section id="experience" style={{ padding: "8rem 2rem" }}>
      <div class="section-header">01 // Experience</div>
      
      <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", "border-top": "1px solid var(--border-color)" }}>
        
        {/* Job 1 */}
        <div style={{ "border-right": "1px solid var(--border-color)", padding: "2rem 2rem 2rem 0", display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
          <div>
            <h3 style={{ "font-size": "1.5rem", "margin-bottom": "0.5rem" }}>Software Development Engineer II</h3>
            <p style={{ "font-family": "var(--font-mono)", "font-size": "0.85rem", color: "var(--accent-teal)" }}>AMAZON / OCT 2023 – PRESENT</p>
          </div>
          <p style={{ "font-size": "0.95rem" }}>
            Architected a plugin-based extensibility framework for Amazon's payment UI platform. Cut SSR Lambda runtime ~40% via Node 14→20 migration. Built daily dev loop for ~150 engineers.
          </p>
        </div>

        {/* Job 2 */}
        <div style={{ "border-right": "1px solid var(--border-color)", padding: "2rem 2rem 2rem 0", display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
          <div>
            <h3 style={{ "font-size": "1.5rem", "margin-bottom": "0.5rem" }}>Software Development Engineer I</h3>
            <p style={{ "font-family": "var(--font-mono)", "font-size": "0.85rem", color: "var(--accent-teal)" }}>AMAZON / MAY 2021 – OCT 2023</p>
          </div>
          <p style={{ "font-size": "0.95rem" }}>
            Generated $300M in incremental revenue modernizing payments UX. Built state machine framework cutting payment method onboarding from ~1 month to ~1 week.
          </p>
        </div>

        {/* Job 3 */}
        <div style={{ padding: "2rem 0", display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
          <div>
            <h3 style={{ "font-size": "1.5rem", "margin-bottom": "0.5rem" }}>Full Stack Developer (Co-op)</h3>
            <p style={{ "font-family": "var(--font-mono)", "font-size": "0.85rem", color: "var(--accent-teal)" }}>ELLISDON / MAY 2019 – AUG 2019</p>
          </div>
          <p style={{ "font-size": "0.95rem" }}>
            Shipped a microservice from inception to beta release in 4 months leading a 4-person team. Standardized project setup with one-click templates (React, Java, Go).
          </p>
        </div>
      </div>

      {/* Decorative Fluid Curve intersecting grid */}
      <svg class="organic-curve" viewBox="0 0 1000 300" style={{ left: "-100px", bottom: "-100px", width: "100%", opacity: 0.5 }}>
        <path d="M 0,250 C 300,250 400,100 700,100 C 900,100 950,200 1000,200" />
      </svg>
    </section>
  );
};

export default Experience;
