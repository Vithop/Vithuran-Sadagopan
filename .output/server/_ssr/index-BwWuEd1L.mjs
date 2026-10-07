import { Show, createComponent, createSignal, escape, onCleanup, onMount, ssr, ssrHydrationKey, ssrStyleProperty } from "../_libs/solid-js.mjs";
import { ArchivePage, Contact, Experience, Hero, Horizons, Portfolio, Skills, footerContent, navContent } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/index-BwWuEd1L.js
var _tmpl$ = [
	"<div",
	" class=\"app-container\"><a href=\"#main-content\" class=\"skip-link\">Skip to main content</a><main id=\"main-content\" tabindex=\"-1\" style=\"",
	"\">",
	"</main><footer role=\"contentinfo\" style=\"",
	"\"><div style=\"",
	"\"><div><div style=\"",
	"\"><!--$-->",
	"<!--/--> &copy; <!--$-->",
	"<!--/--></div><div style=\"",
	"\">",
	"</div></div><div style=\"",
	"\"><div style=\"",
	"\">",
	"</div><div style=\"",
	"\">",
	"</div></div></div></footer></div>"
];
var id$$ = "src/routes/index.tsx?pick=default&pick=$css&lang.tsx";
var App = () => {
	const [currentRoute, setCurrentRoute] = createSignal("home");
	const navigateTo = (hash) => {
		window.location.hash = hash;
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	onMount(() => {
		const handleHashChange = () => {
			if (window.location.hash === "#/archive") setCurrentRoute("archive");
			else setCurrentRoute("home");
		};
		handleHashChange();
		window.addEventListener("hashchange", handleHashChange);
		onCleanup(() => window.removeEventListener("hashchange", handleHashChange));
	});
	return ssr(_tmpl$, ssrHydrationKey(), ssrStyleProperty("outline:", "none"), escape(createComponent(Show, {
		get when() {
			return currentRoute() === "archive";
		},
		get fallback() {
			return [
				createComponent(Hero, { onOpenArchive: () => navigateTo("#/archive") }),
				createComponent(Experience, {}),
				createComponent(Skills, {}),
				createComponent(Portfolio, { onOpenArchive: () => navigateTo("#/archive") }),
				createComponent(Horizons, {}),
				createComponent(Contact, {})
			];
		},
		get children() {
			return createComponent(ArchivePage, { onBack: () => navigateTo("#/") });
		}
	})), ssrStyleProperty("padding:", "clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 3rem)") + ssrStyleProperty(";background-color:", "var(--concrete-slab)") + ssrStyleProperty(";border-top:", "2px solid var(--grid-border)") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.85rem") + ssrStyleProperty(";color:", "var(--ink-secondary)"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "flex-start") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "2rem"), ssrStyleProperty("color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";font-size:", "1rem") + ssrStyleProperty(";margin-bottom:", "0.5rem"), escape(navContent.brand.name), escape((/* @__PURE__ */ new Date()).getFullYear()), ssrStyleProperty("color:", "var(--ink-muted)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";letter-spacing:", "0.08em"), escape(footerContent.tagline), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";align-items:", "flex-end") + ssrStyleProperty(";gap:", "0.5rem"), ssrStyleProperty("color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "600"), escape(footerContent.location), ssrStyleProperty("color:", "var(--ink-muted)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";font-weight:", "600"), escape(footerContent.edition));
};
//#endregion
export { App as default, id$$ };
