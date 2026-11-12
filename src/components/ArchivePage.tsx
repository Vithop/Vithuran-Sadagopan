import {
  createSignal,
  createMemo,
  onMount,
  onCleanup,
  Show,
  For,
  type Component,
} from "solid-js";
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

  const categoryCounts = createMemo(() => {
    const counts: Record<FilterCategory, number> = {
      All: archiveProjects.length,
      "Distributed & Cloud": 0,
      "Systems & Runtimes": 0,
      "Assistive & Hardware": 0,
      "Client & Web": 0,
    };
    for (const p of archiveProjects) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  });

  const filteredProjects = createMemo(() => {
    const cat = selectedCategory();
    const rawQuery = searchQuery().toLowerCase().trim();
    const queryTerms =
      rawQuery === "wasm"
        ? ["wasm", "webassembly"]
        : rawQuery === "webassembly"
          ? ["webassembly", "wasm"]
          : rawQuery
            ? [rawQuery]
            : [];

    return archiveProjects.filter((p) => {
      const matchesCategory = cat === "All" || p.category === cat;
      const matchesQuery =
        queryTerms.length === 0 ||
        queryTerms.some(
          (q) =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.stack.some((s) => s.toLowerCase().includes(q)) ||
            p.highlights.some((h) => h.toLowerCase().includes(q)) ||
            p.year.toLowerCase().includes(q)
        );
      return matchesCategory && matchesQuery;
    });
  });

  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (searchQuery()) {
          setSearchQuery("");
        } else if (selectedCategory() !== "All") {
          setSelectedCategory("All");
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    onCleanup(() => window.removeEventListener("keydown", handleKeyDown));
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
          aria-label="Return to main portfolio overview"
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
          <h2
            class="section-header-title"
            style={{ "font-size": "inherit", margin: "0" }}
          >
            <span>{archivePageContent.sectionTitle}</span>
          </h2>
          <div class="section-telemetry-tag" aria-live="polite">
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
            style={{
              display: "flex",
              gap: "1rem",
              "align-items": "center",
              "flex-wrap": "wrap",
            }}
          >
            <label
              for="archive-search-input"
              style={{
                "font-family": "var(--font-telemetry)",
                "font-size": "0.8rem",
                "font-weight": "700",
                color: "var(--ink-primary)",
                cursor: "pointer",
              }}
            >
              {archivePageContent.filterQueryLabel}
            </label>
            <input
              id="archive-search-input"
              type="search"
              aria-label={archivePageContent.filterQueryLabel}
              placeholder={archivePageContent.searchPlaceholder}
              value={searchQuery()}
              onInput={(e) => setSearchQuery(e.currentTarget.value)}
              style={{
                flex: "1 1 220px",
                padding: "0.6rem 1rem",
                "font-family": "var(--font-telemetry)",
                "font-size": "0.85rem",
                border: "2px solid var(--grid-border)",
                "border-radius": "9999px",
                background: "var(--bg-concrete)",
                color: "var(--ink-primary)",
              }}
            />
            {searchQuery() && (
              <button
                onClick={() => setSearchQuery("")}
                class="pill-button"
                aria-label="Clear search input"
                style={{ padding: "0.4rem 0.8rem", "font-size": "0.75rem" }}
              >
                {archivePageContent.clearButton}
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div
            role="group"
            aria-labelledby="discipline-filter-label"
            style={{
              display: "flex",
              "flex-wrap": "wrap",
              gap: "0.75rem",
              "align-items": "center",
            }}
          >
            <span
              id="discipline-filter-label"
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
                    aria-pressed={active()}
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
                    {cat} ({categoryCounts()[cat]})
                  </button>
                );
              }}
            </For>
          </div>
        </div>

        {/* Chronological Timeline Grid or Empty Search State */}
        <Show
          when={filteredProjects().length > 0}
          fallback={
            <div
              class="erickson-lantern"
              style={{
                padding: "3rem 2rem",
                "text-align": "center",
                "border-radius": "28px",
                display: "flex",
                "flex-direction": "column",
                "align-items": "center",
                gap: "1.25rem",
              }}
            >
              <span class="telemetry-badge">
                0 RECORDED SYSTEMS MATCHING QUERY
              </span>
              <h3
                style={{ "font-size": "1.6rem", color: "var(--ink-primary)" }}
              >
                NO MATCHING ARCHIVE RECORDS FOUND
              </h3>
              <p
                style={{
                  color: "var(--ink-secondary)",
                  "max-width": "520px",
                  "font-size": "0.95rem",
                }}
              >
                No systems matched &ldquo;{searchQuery()}&rdquo; in{" "}
                {selectedCategory()}. Reset the active search or discipline
                filter to view all {archiveProjects.length} recorded systems.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                class="pill-button pill-button-primary"
                style={{ padding: "0.65rem 1.5rem", "font-size": "0.8rem" }}
              >
                RESET ALL FILTERS
              </button>
            </div>
          }
        >
          <div
            style={{
              display: "grid",
              "grid-template-columns":
                "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
              gap: "2.5rem",
            }}
            class="interactive-cluster"
          >
            <For each={filteredProjects()}>
              {(project) => <ArchiveCard project={project} />}
            </For>
          </div>
        </Show>

        {/* Bottom Return Button */}
        <div style={{ "margin-top": "4rem", "text-align": "center" }}>
          <button
            onClick={() => props.onBack()}
            class="pill-button"
            aria-label="Return to top of portfolio"
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
