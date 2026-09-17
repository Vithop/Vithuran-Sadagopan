import type { Component } from 'solid-js';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import GithubActivity from './components/GithubActivity';
import Archive from './components/Archive';

const App: Component = () => {
  return (
    <div class="app-container">
      <Hero />
      <Experience />
      <Skills />
      <GithubActivity />
      <Archive />
      
      <footer style={{ padding: "4rem 2rem", "border-top": "1px solid var(--border-color)", display: "flex", "justify-content": "space-between", "font-family": "var(--font-mono)", "font-size": "0.8rem", color: "var(--text-muted)" }}>
        <div>VITHURAN SADAGOPAN &copy; {new Date().getFullYear()}</div>
        <div>VANCOUVER, BC, CANADA</div>
      </footer>
    </div>
  );
};

export default App;
