import { createResource, For } from 'solid-js';
import type { Component } from 'solid-js';

const fetchRepos = async () => {
  const res = await fetch('https://api.github.com/users/vithop/repos?sort=updated&per_page=4');
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const GithubActivity: Component = () => {
  const [repos] = createResource(fetchRepos);

  return (
    <section id="github" style={{ padding: "8rem 2rem", position: "relative" }}>
      <div class="section-header">03 // Open Source Activity</div>

      <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fill, minmax(300px, 1fr))", gap: "0", "border-top": "1px solid var(--border-color)", "border-left": "1px solid var(--border-color)" }}>
        
        {repos.loading && <div style={{ padding: "2rem", border: "1px solid var(--border-color)", "border-top": "none", "border-left": "none" }}>Loading telemetry...</div>}
        {repos.error && <div style={{ padding: "2rem", border: "1px solid var(--border-color)", "border-top": "none", "border-left": "none" }}>Offline mode. GitHub API unreachable.</div>}
        
        {repos() && <For each={repos()}>
          {(repo: any) => (
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "2rem", border: "1px solid var(--border-color)", "border-top": "none", "border-left": "none", transition: "background-color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
              <h4 style={{ "font-family": "var(--font-mono)", "font-size": "1.1rem", "margin-bottom": "1rem", color: "var(--text-color)" }}>{repo.name}</h4>
              <p style={{ "font-size": "0.9rem", "margin-bottom": "2rem", "min-height": "40px" }}>{repo.description || "No description provided."}</p>
              
              <div style={{ display: "flex", "justify-content": "space-between", "font-family": "var(--font-mono)", "font-size": "0.8rem", color: "var(--accent-teal)" }}>
                <span>{repo.language || "Unknown"}</span>
                <span>★ {repo.stargazers_count}</span>
              </div>
            </a>
          )}
        </For>}

      </div>
    </section>
  );
};

export default GithubActivity;
