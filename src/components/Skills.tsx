import type { Component } from 'solid-js';

const Skills: Component = () => {
  const categories = [
    {
      title: "LANGUAGES",
      items: ["TypeScript", "JavaScript", "Node.js", "Java", "Scala", "Python", "GraphQL", "HTML/CSS"]
    },
    {
      title: "FRAMEWORKS",
      items: ["React", "React Native", "SolidJS", "XState", "Immer", "Vite", "Jest", "Playwright"]
    },
    {
      title: "INFRASTRUCTURE",
      items: ["AWS Lambda", "AWS CDK", "Step Functions", "DynamoDB", "API Gateway", "CI/CD"]
    }
  ];

  return (
    <section id="skills" style={{ padding: "8rem 2rem", position: "relative" }}>
      <div class="section-header">02 // Tech Stack</div>
      
      <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))", gap: "0", border: "1px solid var(--border-color)", "border-bottom": "none" }}>
        {categories.map((cat, i) => (
          <div style={{ "border-bottom": "1px solid var(--border-color)", "border-right": i < categories.length - 1 ? "1px solid var(--border-color)" : "none", padding: "2rem" }}>
            <h3 style={{ "font-family": "var(--font-mono)", "font-size": "0.9rem", color: "var(--accent-teal)", "margin-bottom": "1.5rem" }}>
              {cat.title}
            </h3>
            <ul style={{ "list-style": "none", display: "flex", "flex-direction": "column", gap: "0.8rem" }}>
              {cat.items.map(item => (
                <li style={{ "font-size": "1.05rem" }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Decorative Curve */}
      <svg class="organic-curve" viewBox="0 0 1000 300" style={{ right: "-50px", top: "50%", width: "600px", opacity: 0.4, transform: "translateY(-50%)" }}>
        <path d="M 1000,50 C 800,50 700,250 500,250 C 300,250 200,100 0,100" />
      </svg>
    </section>
  );
};

export default Skills;
