import type { Component } from 'solid-js';

const Hero: Component = () => {
  return (
    <section class="hero-section" style={{ "min-height": "80vh", display: "flex", "flex-direction": "column", "justify-content": "center" }}>
      <div class="hero-content">
        <h1 style={{ "font-size": "clamp(3rem, 8vw, 7rem)", "line-height": "0.9", "margin-bottom": "1rem" }}>
          VITHURAN<br />SADAGOPAN
        </h1>
        <div style={{ "display": "flex", "justify-content": "space-between", "align-items": "flex-end", "margin-top": "2rem", "flex-wrap": "wrap", gap: "2rem" }}>
          <p style={{ "max-width": "500px", "font-size": "1.2rem" }}>
            Software Development Engineer building highly available, low-latency distributed systems and premium frontend experiences.
          </p>
          <div class="contact-links" style={{ "display": "flex", gap: "2rem", "font-family": "var(--font-mono)", "font-size": "0.9rem", "text-transform": "uppercase" }}>
            <a href="mailto:vithuran.sada@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://linkedin.com/in/vithuran-sada" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/vithop" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Fluid Curve */}
      <svg class="organic-curve" viewBox="0 0 1000 300" style={{ right: "-200px", top: "10%", width: "800px", opacity: 0.6 }}>
        <path d="M 0,150 C 200,150 300,50 500,50 C 700,50 800,250 1000,250" />
      </svg>
    </section>
  );
};

export default Hero;
