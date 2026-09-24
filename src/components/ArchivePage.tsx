import { createSignal, createMemo, For, type Component } from "solid-js";
import {
  archiveProjects,
  archiveCategories,
  archivePageContent,
  type FilterCategory,
} from "../data/archiveContent";
import ArchiveCard from "./ArchiveCard";

interface ArchivePageProps {
  onBack: () => void;
}

const ArchivePage: Component<ArchivePageProps> = (props) => {
  const [selectedCategory, setSelectedCategory] =
    createSignal<FilterCategory>("All");
  const [searchQuery, setSearchQuery] = createSignal("");

  const filteredProjects = createMemo(() => {
    const cat = selectedCategory();
    const query = searchQuery().toLowerCase().trim();

    return archiveProjects.filter((p) => {
      const matchesCategory = cat === "All" || p.category === cat;
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.stack.some((s) => s.toLowerCase().includes(query)) ||
        p.year.includes(query);
      return matchesCategory && matchesQuery;
    });
  });

  return (
    <div class="archive-view">
      {/* Top Header Lintel with Return Navigation */}
      <header
        style={{
          padding: "1.25rem 2.5rem",
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "flex-wrap": "wrap",
          gap: "1.25rem",
          "border-bottom": "2px solid var(--grid-border)",
          "background-color": "var(--concrete-slab)",
          "font-family": "var(--font-telemetry)",
          "font-size": "0.85rem",
          "letter-spacing": "0.08em",
        }}
      >
        <button
          onClick={() => props.onBack()}
          class="pill-button"
          style={{
            padding: "0.5rem 1.25rem",
            "font-size": "0.8rem",
            display: "inline-flex",
            "align-items": "center",
            gap: "0.5rem",
          }}
        >
          <span>←</span>
          <span>{archivePageContent.returnTopButton}</span>
        </button>

        <div
          style={{
            display: "flex",
            "align-items": "center",
            gap: "0.75rem",
            color: "var(--ink-primary)",
            "font-weight": "700",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              "background-color": "var(--grid-border)",
              "border-radius": "50%",
            }}
          />
          <span>{archivePageContent.headerTag}</span>
        </div>
      </header>

      {/* Main Archive Monolith */}
      <section style={{ padding: "4rem 3rem" }}>
        <div class="grid-crosshair" style={{ top: "1.5rem", left: "1.5rem" }} />
        <div
          class="grid-crosshair"
          style={{ top: "1.5rem", right: "1.5rem" }}
        />

        <div class="section-header-beam">
          <div class="section-header-title">
            <span>{archivePageContent.sectionTitle}</span>
          </div>
          <div class="section-telemetry-tag">
            {filteredProjects().length} {archivePageContent.systemsSuffix}
          </div>
        </div>

        {/* Hero Introduction for Archive */}
        <div style={{ "margin-bottom": "3rem", "max-width": "900px" }}>
          <h1
            style={{
              "font-size": "clamp(2.5rem, 6vw, 4.5rem)",
              color: "var(--ink-primary)",
              "margin-bottom": "1.5rem",
              "line-height": "1",
            }}
          >
            {archivePageContent.headline.first}
            <br />
            {archivePageContent.headline.second}
          </h1>
          <p
            style={{
              "font-size": "1.15rem",
              color: "var(--ink-secondary)",
              "line-height": "1.6",
            }}
          >
            {archivePageContent.intro}
          </p>
        </div>

        {/* Controls: Search & Category Chips */}
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            gap: "1.5rem",
            "margin-bottom": "3.5rem",
            padding: "1.75rem",
            background: "var(--concrete-pylon)",
            border: "2px solid var(--grid-border)",
            "border-radius": "24px",
            "box-shadow": "var(--shadow-hard-sm)",
          }}
        >
          {/* Search Box */}
          <div
            style={{ display: "flex", gap: "1rem", "align-items": "center" }}
          >
            <span
              style={{
                "font-family": "var(--font-telemetry)",
                "font-size": "0.8rem",
                "font-weight": "700",
                color: "var(--ink-primary)",
              }}
            >
              {archivePageContent.filterQueryLabel}
            </span>
            <input
              type="text"
              placeholder={archivePageContent.searchPlaceholder}
              value={searchQuery()}
              onInput={(e) => setSearchQuery(e.currentTarget.value)}
              style={{
                flex: "1",
                padding: "0.6rem 1rem",
                "font-family": "var(--font-telemetry)",
                "font-size": "0.85rem",
                border: "2px solid var(--grid-border)",
                "border-radius": "9999px",
                background: "var(--bg-concrete)",
                color: "var(--ink-primary)",
                outline: "none",
              }}
            />
            {searchQuery() && (
              <button
                onClick={() => setSearchQuery("")}
                class="pill-button"
                style={{ padding: "0.4rem 0.8rem", "font-size": "0.75rem" }}
              >
                {archivePageContent.clearButton}
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div
            style={{
              display: "flex",
              "flex-wrap": "wrap",
              gap: "0.75rem",
              "align-items": "center",
            }}
          >
            <span
              style={{
                "font-family": "var(--font-telemetry)",
                "font-size": "0.8rem",
                "font-weight": "700",
                color: "var(--ink-primary)",
                "margin-right": "0.5rem",
              }}
            >
              {archivePageContent.disciplineLabel}
            </span>
            <For each={archiveCategories}>
              {(cat) => {
                const active = () => selectedCategory() === cat;
                return (
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: "0.45rem 1rem",
                      "border-radius": "9999px",
                      border: "2px solid var(--grid-border)",
                      background: active()
                        ? "var(--grid-border)"
                        : "var(--concrete-slab)",
                      color: active() ? "#ffffff" : "var(--ink-primary)",
                      "font-family": "var(--font-telemetry)",
                      "font-size": "0.75rem",
                      "font-weight": active() ? "700" : "500",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {cat}
                  </button>
                );
              }}
            </For>
          </div>
        </div>

        {/* Chronological Timeline Grid */}
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "2.5rem",
          }}
          class="interactive-cluster"
        >
          <For each={filteredProjects()}>
            {(project) => <ArchiveCard project={project} />}
          </For>
        </div>

        {/* Bottom Return Button */}
        <div style={{ "margin-top": "4rem", "text-align": "center" }}>
          <button
            onClick={() => props.onBack()}
            class="pill-button"
            style={{
              padding: "0.9rem 2.5rem",
              "font-size": "0.9rem",
              "font-weight": "700",
            }}
          >
            {archivePageContent.returnBottomButton}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ArchivePage;
