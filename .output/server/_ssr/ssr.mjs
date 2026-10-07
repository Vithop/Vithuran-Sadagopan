import { FastURL, NodeResponse } from "../_libs/srvx.mjs";
import { NullProtoObj, addRoute, createRouter, findRoute } from "../_libs/h3+rou3+srvx.mjs";
import { ErrorBoundary, For, Hydration, HydrationScript, NoHydration, Show, Suspense, batch, catchError, children, createComponent, createContext, createMemo, createRenderEffect, createRoot, createSignal, createUniqueId, escape, getOwner, getRequestEvent, lazy, mergeProps, on, onCleanup, onMount, provideRequestEvent, renderToStream, renderToString, resetErrorBoundaries, runWithOwner, sharedConfig, ssr, ssrAttribute, ssrElement, ssrHydrationKey, ssrStyleProperty, startTransition, untrack, useAssets, useContext } from "../_libs/solid-js.mjs";
import { L, cu, fu } from "../_libs/seroval.mjs";
import { H, M, O, Q, de, i, j, l, le, oe, ye } from "../_libs/seroval-plugins.mjs";
import { join } from "../_libs/pathe.mjs";
import "../_libs/terracotta.mjs";
import { createRouter as createRouter$1 } from "../_libs/radix3.mjs";
//#region \0rolldown/runtime.js
var __defProp$1 = Object.defineProperty;
var __exportAll$1 = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp$1(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp$1(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/index.js
var ssr_exports = /* @__PURE__ */ __exportAll$1({
	ArchivePage: () => ArchivePage,
	Contact: () => Contact,
	Experience: () => Experience,
	Hero: () => Hero,
	Horizons: () => Horizons,
	Portfolio: () => Portfolio,
	Skills: () => Skills,
	default: () => entry_server_default,
	footerContent: () => footerContent,
	navContent: () => navContent
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var clientViteManifest = {
	"_Contact-CUNcwxRq.js": {
		"file": "_build/assets/Contact-CUNcwxRq.js",
		"name": "Contact"
	},
	"src/entry-client.tsx": {
		"file": "_build/assets/entry-client-CSx3sOGP.js",
		"name": "entry-client",
		"src": "src/entry-client.tsx",
		"isEntry": true,
		"imports": ["_Contact-CUNcwxRq.js"],
		"css": ["_build/assets/entry-client-DsQFOrPr.css"]
	},
	"src/routes/index.tsx?pick=default&pick=$css&lang.tsx": {
		"file": "_build/assets/index-BADjBvI4.js",
		"name": "index",
		"src": "src/routes/index.tsx?pick=default&pick=$css&lang.tsx",
		"isEntry": true,
		"imports": ["_Contact-CUNcwxRq.js"]
	}
};
function getSsrProdManifest() {
	const viteManifest = clientViteManifest;
	return {
		path(id) {
			if (id.startsWith("./")) id = id.slice(2);
			const viteManifestEntry = clientViteManifest[id];
			if (!viteManifestEntry) throw new Error(`No entry found in vite manifest for '${id}'`);
			return join("/Vithuran-Sadagopan/", viteManifestEntry.file);
		},
		async getAssets(id) {
			if (id.startsWith("./")) id = id.slice(2);
			return createHtmlTagsForAssets(findAssetsInViteManifest(clientViteManifest, id));
		},
		async json() {
			const json = {};
			const entryKeys = Object.keys(viteManifest).filter((id) => viteManifest[id]?.isEntry || viteManifest[id]?.isDynamicEntry).map((id) => id);
			for (const entryKey of entryKeys) json[entryKey] = {
				output: join("/Vithuran-Sadagopan/", viteManifest[entryKey].file),
				assets: await this.getAssets(entryKey)
			};
			return json;
		}
	};
}
function createHtmlTagsForAssets(assets) {
	return assets.filter((asset) => asset.endsWith(".css") || asset.endsWith(".js") || asset.endsWith(".ts") || asset.endsWith(".mjs")).map((asset) => ({
		tag: "link",
		attrs: {
			href: join("/Vithuran-Sadagopan/", asset),
			key: asset,
			...asset.endsWith(".css") ? { rel: "stylesheet" } : { rel: "modulepreload" }
		}
	}));
}
var entryId = "./src/entry-client.tsx".slice(2);
var entryImports = void 0;
function findAssetsInViteManifest(manifest, id, assetMap = /* @__PURE__ */ new Map(), stack = []) {
	if (stack.includes(id)) return [];
	const cached = assetMap.get(id);
	if (cached) return cached;
	const chunk = manifest[id];
	if (!chunk) return [];
	if (!entryImports) entryImports = [entryId, ...manifest[entryId]?.imports ?? []];
	const excludeEntryImports = id !== entryId;
	const assets = chunk.css?.filter(Boolean) || [];
	if (chunk.imports) {
		stack.push(id);
		for (let i = 0, l = chunk.imports.length; i < l; i++) {
			const importId = chunk.imports[i];
			if (!importId || excludeEntryImports && entryImports.includes(importId)) continue;
			assets.push(...findAssetsInViteManifest(manifest, importId, assetMap, stack));
		}
		stack.pop();
	}
	assets.push(chunk.file);
	const all = Array.from(new Set(assets));
	assetMap.set(id, all);
	return all;
}
function getSsrManifest(target) {
	return getSsrProdManifest();
}
var _tmpl$$12 = " ";
var assetMap = {
	style: (props) => ssrElement("style", props.attrs, () => props.children, true),
	link: (props) => ssrElement("link", props.attrs, void 0, true),
	script: (props) => {
		return props.attrs.src ? ssrElement("script", mergeProps(() => props.attrs, { get id() {
			return props.key;
		} }), () => ssr(_tmpl$$12), true) : null;
	},
	noscript: (props) => ssrElement("noscript", props.attrs, () => escape(props.children), true)
};
function renderAsset(asset, nonce) {
	let { tag, attrs: { key, ...attrs } = { key: void 0 }, children } = asset;
	return assetMap[tag]({
		attrs: {
			...attrs,
			nonce
		},
		key,
		children
	});
}
var REGISTRY = Symbol("assetRegistry");
var NOOP = () => "";
var keyAttrs = [
	"href",
	"rel",
	"data-vite-dev-id"
];
var getEntity = (registry, asset) => {
	let key = asset.tag;
	for (const k of keyAttrs) {
		if (!(k in asset.attrs)) continue;
		key += `[${k}='${asset.attrs[k]}']`;
	}
	return registry[key] ??= {
		key,
		consumers: 0
	};
};
var useAssets$1 = (assets, nonce) => {
	if (!assets.length) return;
	const registry = getRequestEvent().locals[REGISTRY] ??= {};
	const ssrRequestAssets = sharedConfig.context?.assets;
	const cssKeys = [];
	for (const asset of assets) {
		const entity = getEntity(registry, asset);
		if (asset.tag === "link" && asset.attrs.rel === "stylesheet" || asset.tag === "style") cssKeys.push(entity.key);
		entity.consumers++;
		if (entity.consumers > 1) continue;
		useAssets(() => renderAsset(asset, nonce));
		entity.ssrIdx = ssrRequestAssets.length - 1;
	}
	onCleanup(() => {
		for (const key of cssKeys) {
			const entity = registry[key];
			entity.consumers--;
			if (entity.consumers != 0) continue;
			ssrRequestAssets.splice(entity.ssrIdx, 1, NOOP);
			delete registry[key];
		}
	});
};
var assetsById = {};
var getAssets = async (id) => {
	if (assetsById[id]) return assetsById[id];
	const assets = await getSsrManifest("client").getAssets(id);
	assetsById[id] = assets;
	return assets;
};
var withAssets = function(fn) {
	const wrapper = async () => {
		const mod = await fn();
		const id = mod.id$$;
		if (!id) return mod;
		if (!mod.default) {
			console.error(`Module ${id} does not export default`);
			return { default: () => [] };
		}
		const assets = await getAssets(id);
		if (!assets.length) return mod;
		return { default: (props) => {
			const { nonce } = getRequestEvent();
			useAssets$1(assets, nonce);
			return mod.default(props);
		} };
	};
	return wrapper;
};
var lazy$1 = (fn) => lazy(withAssets(fn));
function createBeforeLeave() {
	let listeners = /* @__PURE__ */ new Set();
	function subscribe(listener) {
		listeners.add(listener);
		return () => listeners.delete(listener);
	}
	let ignore = false;
	function confirm(to, options) {
		if (ignore) return !(ignore = false);
		const e = {
			to,
			options,
			defaultPrevented: false,
			preventDefault: () => e.defaultPrevented = true
		};
		for (const l of listeners) l.listener({
			to,
			options,
			get defaultPrevented() {
				return e.defaultPrevented;
			},
			preventDefault: e.preventDefault,
			from: l.location,
			retry: (force) => {
				force && (ignore = true);
				l.navigate(to, {
					...options,
					resolve: false
				});
			}
		});
		return !e.defaultPrevented;
	}
	return {
		subscribe,
		confirm
	};
}
var hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
var trimPathRegex = /^\/+|(\/)\/+$/g;
var mockBase = "http://sr";
function normalizePath(path, omitSlash = false) {
	const s = path.replace(trimPathRegex, "$1");
	return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}
function resolvePath(base, path, from) {
	if (hasSchemeRegex.test(path)) return;
	const basePath = normalizePath(base);
	const fromPath = from && normalizePath(from);
	let result = "";
	if (!fromPath || path.startsWith("/")) result = basePath;
	else if (fromPath.toLowerCase().indexOf(basePath.toLowerCase()) !== 0) result = basePath + fromPath;
	else result = fromPath;
	return (result || "/") + normalizePath(path, !result);
}
function joinPaths(from, to) {
	return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
}
function extractSearchParams(url) {
	const params = {};
	url.searchParams.forEach((value, key) => {
		if (key in params) {
			if (Array.isArray(params[key])) params[key].push(value);
			else params[key] = [params[key], value];
		} else params[key] = value;
	});
	return params;
}
function createMatcher$1(path, partial, matchFilters) {
	const [pattern, splat] = path.split("/*", 2);
	const segments = pattern.split("/").filter(Boolean);
	const len = segments.length;
	return (location) => {
		const locSegments = location.split("/");
		if (locSegments[0] === "") locSegments.shift();
		if (locSegments.length && locSegments[locSegments.length - 1] === "") locSegments.pop();
		if (locSegments.includes("")) return null;
		const lenDiff = locSegments.length - len;
		if (lenDiff < 0 || lenDiff > 0 && splat === void 0 && !partial) return null;
		const match = {
			path: len ? "" : "/",
			params: {}
		};
		const matchFilter = (s) => matchFilters === void 0 ? void 0 : matchFilters[s];
		for (let i = 0; i < len; i++) {
			const segment = segments[i];
			const dynamic = segment[0] === ":";
			const locSegment = dynamic ? locSegments[i] : locSegments[i].toLowerCase();
			const key = dynamic ? segment.slice(1) : segment.toLowerCase();
			if (dynamic && matchSegment(locSegment, matchFilter(key))) match.params[key] = locSegment;
			else if (dynamic || !matchSegment(locSegment, key)) return null;
			match.path += `/${locSegment}`;
		}
		if (splat) {
			const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
			if (matchSegment(remainder, matchFilter(splat))) match.params[splat] = remainder;
			else return null;
		}
		return match;
	};
}
function matchSegment(input, filter) {
	const isEqual = (s) => s === input;
	if (filter === void 0) return true;
	else if (typeof filter === "string") return isEqual(filter);
	else if (typeof filter === "function") return filter(input);
	else if (Array.isArray(filter)) return filter.some(isEqual);
	else if (filter instanceof RegExp) return filter.test(input);
	return false;
}
function scoreRoute(route) {
	const [pattern, splat] = route.pattern.split("/*", 2);
	const segments = pattern.split("/").filter(Boolean);
	return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === void 0 ? 0 : 1));
}
function createMemoObject(fn) {
	const map = /* @__PURE__ */ new Map();
	const owner = getOwner();
	return new Proxy({}, {
		get(_, property) {
			if (!map.has(property)) runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property])));
			return map.get(property)();
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: true,
				configurable: true
			};
		},
		ownKeys() {
			return Reflect.ownKeys(fn());
		},
		has(_, property) {
			return property in fn();
		}
	});
}
function expandOptionals(pattern) {
	let match = /(\/?\:[^\/]+)\?/.exec(pattern);
	if (!match) return [pattern];
	let prefix = pattern.slice(0, match.index);
	let suffix = pattern.slice(match.index + match[0].length);
	const prefixes = [prefix, prefix += match[1]];
	while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
		prefixes.push(prefix += match[1]);
		suffix = suffix.slice(match[0].length);
	}
	return expandOptionals(suffix).reduce((results, expansion) => [...results, ...prefixes.map((p) => p + expansion)], []);
}
var MAX_REDIRECTS = 100;
/** Consider this API opaque and internal. It is likely to change in the future. */
var RouterContextObj = createContext();
var RouteContextObj = createContext();
var encodeSegment = (s) => encodeURIComponent(s).replace(/%(2B|40|3A|24|26|2C|3B|3D)/g, (m) => decodeURIComponent(m));
function createRoutes$1(routeDef, base = "") {
	const { component, preload, load, children, info } = routeDef;
	const isLeaf = !children || Array.isArray(children) && !children.length;
	const shared = {
		key: routeDef,
		component,
		preload: preload || load,
		info
	};
	return asArray(routeDef.path).reduce((acc, originalPath) => {
		for (const expandedPath of expandOptionals(originalPath)) {
			const path = joinPaths(base, expandedPath);
			let pattern = isLeaf ? path : path.split("/*", 1)[0];
			pattern = pattern.split("/").map((s) => {
				return s.startsWith(":") || s.startsWith("*") ? s : encodeSegment(s);
			}).join("/");
			acc.push({
				...shared,
				originalPath,
				pattern,
				matcher: createMatcher$1(pattern, !isLeaf, routeDef.matchFilters)
			});
		}
		return acc;
	}, []);
}
function createBranch(routes, index = 0) {
	return {
		routes,
		score: scoreRoute(routes[routes.length - 1]) * 1e4 - index,
		matcher(location) {
			const matches = [];
			for (let i = routes.length - 1; i >= 0; i--) {
				const route = routes[i];
				const match = route.matcher(location);
				if (!match) return null;
				matches.unshift({
					...match,
					route
				});
			}
			return matches;
		}
	};
}
function asArray(value) {
	return Array.isArray(value) ? value : [value];
}
function createBranches(routeDef, base = "", stack = [], branches = []) {
	const routeDefs = asArray(routeDef);
	for (let i = 0, len = routeDefs.length; i < len; i++) {
		const def = routeDefs[i];
		if (def && typeof def === "object") {
			if (!def.hasOwnProperty("path")) def.path = "";
			const routes = createRoutes$1(def, base);
			for (const route of routes) {
				stack.push(route);
				const isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
				if (def.children && !isEmptyArray) createBranches(def.children, route.pattern, stack, branches);
				else {
					const branch = createBranch([...stack], branches.length);
					branches.push(branch);
				}
				stack.pop();
			}
		}
	}
	return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
}
function getRouteMatches(branches, location) {
	for (let i = 0, len = branches.length; i < len; i++) {
		const match = branches[i].matcher(location);
		if (match) return match;
	}
	return [];
}
function createLocation(path, state, queryWrapper) {
	const origin = new URL(mockBase);
	const url = createMemo((prev) => {
		const path_ = path();
		try {
			return new URL(path_[0] === "/" ? mockBase + path_ : path_, origin);
		} catch (err) {
			console.error(`Invalid path ${path_}`);
			return prev;
		}
	}, origin, { equals: (a, b) => a.href === b.href });
	const pathname = createMemo(() => url().pathname);
	const search = createMemo(() => url().search, true);
	const hash = createMemo(() => url().hash);
	const key = () => "";
	const queryFn = on(search, () => extractSearchParams(url()));
	return {
		get pathname() {
			return pathname();
		},
		get search() {
			return search();
		},
		get hash() {
			return hash();
		},
		get state() {
			return state();
		},
		get key() {
			return key();
		},
		query: queryWrapper ? queryWrapper(queryFn) : createMemoObject(queryFn)
	};
}
var intent;
function getIntent() {
	return intent;
}
function createRouterContext(integration, branches, getContext, options = {}) {
	const { signal: [source, setSource], utils = {} } = integration;
	const parsePath = utils.parsePath || ((p) => p);
	const renderPath = utils.renderPath || ((p) => p);
	const beforeLeave = utils.beforeLeave || createBeforeLeave();
	const basePath = resolvePath("", options.base || "");
	if (basePath === void 0) throw new Error(`${basePath} is not a valid base path`);
	else if (basePath && !source().value) setSource({
		value: basePath,
		replace: true,
		scroll: false
	});
	const [isRouting, setIsRouting] = createSignal(false);
	let lastTransitionTarget;
	const transition = (newIntent, newTarget) => {
		if (newTarget.value === reference() && newTarget.state === state()) return;
		if (lastTransitionTarget === void 0) setIsRouting(true);
		intent = newIntent;
		lastTransitionTarget = newTarget;
		startTransition(() => {
			if (lastTransitionTarget !== newTarget) return;
			setReference(lastTransitionTarget.value);
			setState(lastTransitionTarget.state);
			resetErrorBoundaries();
		}).finally(() => {
			if (lastTransitionTarget !== newTarget) return;
			batch(() => {
				intent = void 0;
				if (newIntent === "navigate") navigateEnd(lastTransitionTarget);
				setIsRouting(false);
				lastTransitionTarget = void 0;
			});
		});
	};
	const [reference, setReference] = createSignal(source().value);
	const [state, setState] = createSignal(source().state);
	const location = createLocation(reference, state, utils.queryWrapper);
	const referrers = [];
	const submissions = createSignal(initFromFlash());
	const matches = createMemo(() => {
		if (typeof options.transformUrl === "function") return getRouteMatches(branches(), options.transformUrl(location.pathname));
		return getRouteMatches(branches(), location.pathname);
	});
	const buildParams = () => {
		const m = matches();
		const params = {};
		for (let i = 0; i < m.length; i++) Object.assign(params, m[i].params);
		return params;
	};
	const params = utils.paramsWrapper ? utils.paramsWrapper(buildParams, branches) : createMemoObject(buildParams);
	const baseRoute = {
		pattern: basePath,
		path: () => basePath,
		outlet: () => null,
		resolvePath(to) {
			return resolvePath(basePath, to);
		}
	};
	createRenderEffect(on(source, (source) => transition("native", source), { defer: true }));
	return {
		base: baseRoute,
		location,
		params,
		isRouting,
		get pendingTarget() {
			return lastTransitionTarget;
		},
		renderPath,
		parsePath,
		navigatorFactory,
		matches,
		beforeLeave,
		preloadRoute,
		singleFlight: options.singleFlight === void 0 ? true : options.singleFlight,
		submissions
	};
	function navigateFromRoute(route, to, options) {
		untrack(() => {
			if (typeof to === "number") {
				if (!to) {} else if (utils.go) utils.go(to);
				else console.warn("Router integration does not support relative routing");
				return;
			}
			const queryOnly = !to || to[0] === "?";
			const { replace, resolve, scroll, state: nextState } = {
				replace: false,
				resolve: !queryOnly,
				scroll: true,
				...options
			};
			const resolvedTo = resolve ? route.resolvePath(to) : resolvePath(queryOnly && location.pathname || "", to);
			if (resolvedTo === void 0) throw new Error(`Path '${to}' is not a routable path`);
			else if (referrers.length >= MAX_REDIRECTS) throw new Error("Too many redirects");
			if (resolvedTo !== reference() || nextState !== state()) {
				const e = getRequestEvent();
				e && (e.response = {
					status: 302,
					headers: new Headers({ Location: resolvedTo })
				});
				setSource({
					value: resolvedTo,
					replace,
					scroll,
					state: nextState
				});
			}
		});
	}
	function navigatorFactory(route) {
		route = route || useContext(RouteContextObj) || baseRoute;
		return (to, options) => navigateFromRoute(route, to, options);
	}
	function navigateEnd(next) {
		const first = referrers[0];
		if (first) {
			setSource({
				...next,
				replace: first.replace,
				scroll: first.scroll
			});
			referrers.length = 0;
		}
	}
	function preloadRoute(url, preloadData) {
		const matches = getRouteMatches(branches(), url.pathname);
		const prevIntent = intent;
		intent = "preload";
		for (let match in matches) {
			const { route, params } = matches[match];
			route.component && route.component.preload && route.component.preload();
			const { preload } = route;
			preloadData && preload && runWithOwner(getContext(), () => preload({
				params,
				location: {
					pathname: url.pathname,
					search: url.search,
					hash: url.hash,
					query: extractSearchParams(url),
					state: null,
					key: ""
				},
				intent: "preload"
			}));
		}
		intent = prevIntent;
	}
	function initFromFlash() {
		const e = getRequestEvent();
		return e && e.router && e.router.submission ? [e.router.submission] : [];
	}
}
function createRouteContext(router, parent, outlet, match) {
	const { base, location, params } = router;
	const { pattern, component, preload } = match().route;
	const path = createMemo(() => match().path);
	component && component.preload && component.preload();
	const data = preload ? preload({
		params,
		location,
		intent: intent || "initial"
	}) : void 0;
	return {
		parent,
		pattern,
		path,
		outlet: () => component ? createComponent(component, {
			params,
			location,
			data,
			get children() {
				return outlet();
			}
		}) : outlet(),
		resolvePath(to) {
			return resolvePath(base.path(), to, path());
		}
	};
}
var createRouterComponent = (router) => (props) => {
	const { base } = props;
	const routeDefs = children(() => props.children);
	const branches = createMemo(() => createBranches(routeDefs(), props.base || ""));
	let context;
	const routerState = createRouterContext(router, branches, () => context, {
		base,
		singleFlight: props.singleFlight,
		transformUrl: props.transformUrl
	});
	router.create && router.create(routerState);
	return createComponent(RouterContextObj.Provider, {
		value: routerState,
		get children() {
			return createComponent(Root$1, {
				routerState,
				get root() {
					return props.root;
				},
				get preload() {
					return props.rootPreload || props.rootLoad;
				},
				get children() {
					return [(context = getOwner()) && null, createComponent(Routes, {
						routerState,
						get branches() {
							return branches();
						}
					})];
				}
			});
		}
	});
};
function Root$1(props) {
	const location = props.routerState.location;
	const params = props.routerState.params;
	const data = createMemo(() => props.preload && untrack(() => {
		props.preload({
			params,
			location,
			intent: getIntent() || "initial"
		});
	}));
	return createComponent(Show, {
		get when() {
			return props.root;
		},
		keyed: true,
		get fallback() {
			return props.children;
		},
		children: (Root) => createComponent(Root, {
			params,
			location,
			get data() {
				return data();
			},
			get children() {
				return props.children;
			}
		})
	});
}
function Routes(props) {
	{
		const e = getRequestEvent();
		if (e && e.router && e.router.dataOnly) {
			dataOnly(e, props.routerState, props.branches);
			return;
		}
		e && ((e.router || (e.router = {})).matches || (e.router.matches = props.routerState.matches().map(({ route, path, params }) => ({
			path: route.originalPath,
			pattern: route.pattern,
			match: path,
			params,
			info: route.info
		}))));
	}
	const disposers = [];
	let root;
	onCleanup(() => disposers.forEach((dispose) => dispose()));
	const routeStates = createMemo(on(props.routerState.matches, (nextMatches, prevMatches, prev) => {
		let equal = prevMatches && nextMatches.length === prevMatches.length;
		const next = [];
		for (let i = 0, len = nextMatches.length; i < len; i++) {
			const prevMatch = prevMatches && prevMatches[i];
			const nextMatch = nextMatches[i];
			if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) next[i] = prev[i];
			else {
				equal = false;
				if (disposers[i]) disposers[i]();
				createRoot((dispose) => {
					disposers[i] = dispose;
					next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(() => routeStates()[i + 1]), () => {
						const routeMatches = props.routerState.matches();
						return routeMatches[i] ?? routeMatches[0];
					});
				});
			}
		}
		disposers.splice(nextMatches.length).forEach((dispose) => dispose());
		if (prev && equal) return prev;
		root = next[0];
		return next;
	}));
	return createOutlet(() => routeStates() && root)();
}
var createOutlet = (child) => {
	return () => createComponent(Show, {
		get when() {
			return child();
		},
		keyed: true,
		children: (child) => createComponent(RouteContextObj.Provider, {
			value: child,
			get children() {
				return child.outlet();
			}
		})
	});
};
var Route = (props) => {
	const childRoutes = children(() => props.children);
	return mergeProps(props, { get children() {
		return childRoutes();
	} });
};
function dataOnly(event, routerState, branches) {
	const url = new URL(event.request.url);
	const prevMatches = getRouteMatches(branches, new URL(event.router.previousUrl || event.request.url).pathname);
	const matches = getRouteMatches(branches, url.pathname);
	for (let match = 0; match < matches.length; match++) {
		if (!prevMatches[match] || matches[match].route !== prevMatches[match].route) event.router.dataOnly = true;
		const { route, params } = matches[match];
		route.preload && route.preload({
			params,
			location: routerState.location,
			intent: "preload"
		});
	}
}
function getPath(url) {
	const u = new URL(url);
	return u.pathname + u.search;
}
function StaticRouter(props) {
	let e;
	const obj = { value: props.url || (e = getRequestEvent()) && getPath(e.request.url) || "" };
	return createRouterComponent({ signal: [() => obj, (next) => Object.assign(obj, next)] })(props);
}
function Router(props) {
	return StaticRouter(props);
}
var MetaContext = createContext();
var cascadingTags = ["title", "meta"];
var titleTagProperties = [];
var metaTagProperties = [
	"name",
	"http-equiv",
	"content",
	"charset",
	"media"
].concat(["property"]);
var getTagKey = (tag, properties) => {
	const tagProps = Object.fromEntries(Object.entries(tag.props).filter(([k]) => properties.includes(k)).sort());
	if (Object.hasOwn(tagProps, "name") || Object.hasOwn(tagProps, "property")) {
		tagProps.name = tagProps.name || tagProps.property;
		delete tagProps.property;
	}
	return tag.tag + JSON.stringify(tagProps);
};
function initServerProvider() {
	const tags = [];
	useAssets(() => ssr(renderTags(tags)));
	return {
		addTag(tagDesc) {
			if (cascadingTags.indexOf(tagDesc.tag) !== -1) {
				const properties = tagDesc.tag === "title" ? titleTagProperties : metaTagProperties;
				const tagDescKey = getTagKey(tagDesc, properties);
				const index = tags.findIndex((prev) => prev.tag === tagDesc.tag && getTagKey(prev, properties) === tagDescKey);
				if (index !== -1) tags.splice(index, 1);
			}
			tags.push(tagDesc);
			return tags.length;
		},
		removeTag(tag, index) {}
	};
}
var MetaProvider = (props) => {
	const actions = initServerProvider();
	return createComponent(MetaContext.Provider, {
		value: actions,
		get children() {
			return props.children;
		}
	});
};
var MetaTag = (tag, props, setting) => {
	useHead({
		tag,
		props,
		setting,
		id: createUniqueId(),
		get name() {
			return props.name || props.property;
		}
	});
	return null;
};
function useHead(tagDesc) {
	const c = useContext(MetaContext);
	if (!c) throw new Error("<MetaProvider /> should be in the tree");
	createRenderEffect(() => {
		const index = c.addTag(tagDesc);
		onCleanup(() => c.removeTag(tagDesc, index));
	});
}
function renderTags(tags) {
	return tags.map((tag) => {
		const props = Object.keys(tag.props).map((k) => k === "children" ? "" : ` ${k}="${escape(tag.props[k], true)}"`).join("");
		let children = tag.props.children;
		if (Array.isArray(children)) children = children.join("");
		if (tag.setting?.close) return `<${tag.tag} data-sm="${tag.id}"${props}>${tag.setting?.escape ? escape(children) : children || ""}</${tag.tag}>`;
		return `<${tag.tag} data-sm="${tag.id}"${props}/>`;
	}).join("");
}
var Title = (props) => MetaTag("title", props, {
	escape: true,
	close: true
});
var Meta = (props) => MetaTag("meta", props);
var Link = (props) => MetaTag("link", props);
var socialsContent = {
	email: "vithuran.sada@gmail.com",
	githubUrl: "https://github.com/vithop",
	linkedinUrl: "https://linkedin.com/in/vithuran-sada",
	resumeUrl: `/Vithuran-Sadagopan/Vithuran_Sadagopan_Resume.pdf`
};
var navContent = {
	brand: {
		name: "VITHURAN SADAGOPAN",
		location: "VANCOUVER, BC ⇄ TORONTO, ON"
	},
	timeZoneLabel: "PACIFIC TIME",
	timeZone: "America/Vancouver",
	items: [
		{
			id: "about",
			number: "01",
			label: "ABOUT",
			href: "#about"
		},
		{
			id: "experience",
			number: "02",
			label: "EXPERIENCE",
			href: "#experience"
		},
		{
			id: "skills",
			number: "03",
			label: "SKILLS",
			href: "#skills"
		},
		{
			id: "portfolio",
			number: "04",
			label: "PORTFOLIO",
			href: "#portfolio"
		},
		{
			id: "horizons",
			number: "05",
			label: "HORIZONS",
			href: "#horizons"
		},
		{
			id: "archive",
			label: "ARCHIVE ↗",
			isArchiveTrigger: true
		},
		{
			id: "contact",
			number: "06",
			label: "CONTACT",
			href: "#contact"
		}
	]
};
var heroContent = {
	sectionNumber: "01",
	sectionTitle: "ABOUT",
	sectorTag: "SECTOR 01",
	headline: {
		first: "VITHURAN",
		second: "SADAGOPAN"
	},
	bio: "Software Development Engineer architecting high-availability distributed systems, deterministic frontend state machines, and autonomous developer tooling at Amazon. Focused on low-latency microservices, AI developer acceleration, and tactile web interfaces.",
	actions: {
		getInTouch: "GET IN TOUCH ↗",
		viewExperience: "VIEW WORK EXPERIENCE ↓",
		viewResume: "DOWNLOAD RESUME / CV ↓"
	},
	vitrine: {
		header: "PROFILE OVERVIEW",
		metrics: [
			{
				value: "$300M",
				label: "Incremental revenue driven through modernizing customer experiences"
			},
			{
				value: "~40%",
				label: "Overrall system latency reduction"
			},
			{
				value: "150+",
				label: "Engineers adopted new tooling, increasing speed of development by 1 month"
			},
			{
				value: "3 Mo→ 2 Wk",
				label: "Payment Onboarding Cycle"
			}
		],
		discipline: "DISCIPLINE: DISTRIBUTED WEB SERVICES",
		currentRole: "AMAZON SDE II"
	}
};
var experienceContent = {
	sectionNumber: "02",
	sectionTitle: "WORK EXPERIENCE",
	sectorTag: "STRUCTURAL RECORD // 2019 — 2026",
	milestonesTitle: "ARCHITECTURAL MILESTONES",
	items: [
		{
			tier: "TIER 03 // ELEVATION +10.5M // SDE II",
			role: "Software Development Engineer II",
			company: "AMAZON",
			period: "OCT 2023 – PRESENT",
			location: "VANCOUVER, BC",
			description: "Architected an extensible plugin platform, internal AI developer acceleration tooling, and declarative state machine engines for Amazon's multi-region payment interfaces, decoupling merchant onboarding from core releases.",
			achievements: [
				"Built declarative state machine workflows cutting payment method onboarding from ~1 month to ~2 weeks.",
				"Engineered and scaled an internal 'Caveman' developer accelerator plugin (inspired by grug brain) for Claude and Kiro across Amazon, streamlining daily dev loops.",
				"Authored and standardized agent steering documentation and structured knowledge bases across ~50 packages to maintain architectural invariants and code quality.",
				"Integrated federated GraphQL APIs and reduced SSR Lambda execution runtime by ~40% through Node 14 → 20 migration.",
				"Engineered mock harnesses and daily development loops supporting ~150 frontend and backend engineers.",
				"Maintained five-nines availability across high-concurrency peak retail shopping events."
			],
			tech: [
				"TypeScript",
				"GraphQL",
				"State Machines",
				"Claude / Kiro",
				"AI Developer Tooling",
				"Agent Steering Docs",
				"Node.js 20",
				"AWS Lambda",
				"Distributed Systems",
				"SSR"
			]
		},
		{
			tier: "TIER 02 // ELEVATION +7.0M // SDE I",
			role: "Software Development Engineer I",
			company: "AMAZON",
			period: "MAY 2021 – OCT 2023",
			location: "VANCOUVER, BC",
			description: "Modernized payment checkout architecture and high-throughput backend services handling massive transaction volumes, driving $300M in incremental annual revenue across multi-region retail checkout.",
			achievements: [
				"Scaled and maintained mission-critical payment services built with Java, Scala, and Apache Tomcat.",
				"Engineered comprehensive AWS CloudWatch observability alarms, synthetic monitors, and operational dashboards.",
				"Spearheaded rigorous test engineering and automated regression pipelines ensuring zero transaction loss during failures.",
				"Mentored junior engineers and interns on backend architecture patterns and operational excellence."
			],
			tech: [
				"Java",
				"Scala",
				"Apache Tomcat",
				"AWS CloudWatch",
				"Test Engineering",
				"TypeScript",
				"React"
			]
		},
		{
			tier: "TIER 01 // ELEVATION +3.5M // CO-OP",
			role: "Full Stack Developer (Co-op)",
			company: "ELLISDON",
			period: "MAY 2019 – AUG 2019",
			location: "TORONTO, ON",
			description: "Built construction technology microservices and multi-tenant developer scaffolding for one of Canada's premier civil infrastructure builders.",
			achievements: ["Delivered production beta microservice from inception in 4 months leading a 4-engineer pod.", "Standardized enterprise project scaffolding with automated one-click starters (React, Java, Go)."],
			tech: [
				"React",
				"Java",
				"Go",
				"Docker",
				"CI/CD Microservices"
			]
		}
	]
};
var skillsContent = {
	sectionNumber: "03",
	sectionTitle: "SKILLS & ARCHITECTURE",
	sectorTag: "TECHNICAL SPECIFICATIONS // SYSTEM CAPABILITIES",
	modules: [
		{
			moduleCode: "COFFER 01",
			title: "DISTRIBUTED SYSTEMS & CLOUD",
			description: "Serverless microservices, high-concurrency event ingestion backbones, and resilient distributed data tiers.",
			skills: [
				{
					name: "AWS Lambda",
					level: "Production Standard"
				},
				{
					name: "AWS CDK / CloudFormation",
					level: "Infrastructure as Code"
				},
				{
					name: "Step Functions",
					level: "State Orchestration"
				},
				{
					name: "DynamoDB",
					level: "Single-Digit ms Datastores"
				},
				{
					name: "API Gateway",
					level: "Federated API Edge"
				},
				{
					name: "EventBridge / SQS / SNS",
					level: "Event-Driven Backbones"
				}
			]
		},
		{
			moduleCode: "COFFER 02",
			title: "CORE LANGUAGES & RUNTIMES",
			description: "Type-safe systems programming, modern compiled runtimes, and high-throughput server backends.",
			skills: [
				{
					name: "TypeScript",
					level: "Advanced / Strict"
				},
				{
					name: "Node.js (v14-v20+)",
					level: "Runtime Optimization"
				},
				{
					name: "Java & Scala",
					level: "JVM Distributed Systems"
				},
				{
					name: "Rust & C",
					level: "Systems & Memory Safety"
				},
				{
					name: "GraphQL & REST",
					level: "Schema Design & Federation"
				},
				{
					name: "Python",
					level: "Automation & Data"
				}
			]
		},
		{
			moduleCode: "COFFER 03",
			title: "CLIENT ARCHITECTURE & WEB",
			description: "Deterministic UI state machines, fine-grained reactivity, and sub-second rendering performance.",
			skills: [
				{
					name: "SolidJS",
					level: "Fine-Grained Reactivity"
				},
				{
					name: "React & React Native",
					level: "Enterprise Scale"
				},
				{
					name: "XState / State Machines",
					level: "Deterministic Workflows"
				},
				{
					name: "Vite / Modern Bundlers",
					level: "High-Velocity Tooling"
				},
				{
					name: "SSR & Hydration Tuning",
					level: "40% Latency Optimization"
				},
				{
					name: "Immer / Functional Immutability",
					level: "State Safety"
				}
			]
		},
		{
			moduleCode: "COFFER 04",
			title: "RELIABILITY & TELEMETRY",
			description: "Comprehensive automated verification, synthetic monitoring, and end-to-end telemetry harnesses.",
			skills: [
				{
					name: "Playwright",
					level: "E2E Browser Automation"
				},
				{
					name: "Jest / Vitest",
					level: "Unit & Integration Testing"
				},
				{
					name: "CI/CD Pipelines",
					level: "Automated Deployment Gates"
				},
				{
					name: "Mock Telemetry Harnesses",
					level: "Dev Loop Velocity"
				},
				{
					name: "Observability & Metrics",
					level: "CloudWatch / Distributed Tracing"
				},
				{
					name: "Five-Nines SLA Engineering",
					level: "Zero-Downtime Releases"
				}
			]
		},
		{
			moduleCode: "COFFER 05",
			title: "AI INFRASTRUCTURE & AGENTIC WORKFLOWS",
			description: "Autonomous coding agents, Model Context Protocol (MCP) integrations, agent steering documentation, and deterministic guardrails.",
			skills: [
				{
					name: "Model Context Protocol (MCP)",
					level: "Custom Server Protocol & Synthesis"
				},
				{
					name: "Claude & Kiro Ecosystem",
					level: "Enterprise Dev Acceleration"
				},
				{
					name: "Agent Steering & Knowledge Bases",
					level: "Architecture Governance (~50 Packages)"
				},
				{
					name: "Autonomous Agent Harnesses",
					level: "Multi-Agent Orchestration & Dev Loops"
				},
				{
					name: "Deterministic Guardrails",
					level: "State Machine Invariants & Rollback"
				},
				{
					name: "Synthetic Testing & Evals",
					level: "Automated Verification Gates"
				}
			]
		}
	]
};
var projectsContent = {
	sectionNumber: "04",
	sectionTitle: "FEATURED SOFTWARE ARCHITECTURES",
	sectorTag: "OPEN SOURCE & DISTRIBUTED SYSTEMS",
	cardLabels: {
		specsTitle: "TECHNICAL SPECIFICATIONS:",
		publicRepo: "PUBLIC REPOSITORY",
		viewRepo: "VIEW GITHUB REPO ↗"
	},
	items: [
		{
			code: "PROJECT // 01",
			title: "Antigravity Agentic Workflows",
			stack: [
				"TypeScript",
				"Node.js",
				"AI Agent SDK",
				"State Machines"
			],
			category: "DISTRIBUTED & CLOUD",
			description: "Autonomous agent pairing workflows, tool synthesis engines, and deterministic state orchestration for advanced software engineering assistance and developer acceleration.",
			specs: [
				"Protocol: Model Context Protocol (MCP) tool integration",
				"Architecture: Deterministic state machines with transactional recovery",
				"Velocity: Integrated with high-velocity TypeScript development harnesses"
			],
			githubUrl: "https://github.com/Vithop/Antigravity",
			badge: "LATEST // 2025–2026"
		},
		{
			code: "PROJECT // 02",
			title: "BigRustyInteger & WASM Systems",
			stack: [
				"Rust",
				"Systems Programming",
				"WebAssembly",
				"Cargo"
			],
			category: "SYSTEMS & RUNTIMES",
			description: "Arbitrary-precision integer arithmetic engine implemented in Rust, engineered for high-performance mathematical computation with zero allocation overhead and linear memory safety.",
			specs: [
				"Engine: Memory-safe arbitrary-precision unsigned and signed arithmetic",
				"Algorithms: Custom bit manipulation and Karatsuba multiplication pipelines",
				"Compilation: Zero-copy bindings to WebAssembly and Canvas targets"
			],
			githubUrl: "https://github.com/Vithop/BigRustyInteger",
			badge: "RUST SYSTEMS"
		},
		{
			code: "PROJECT // 03",
			title: "Siren-Sense Acoustic Attenuation",
			stack: [
				"TypeScript",
				"Web Audio API",
				"Audio DSP",
				"Tone Classification"
			],
			category: "ASSISTIVE & SYSTEMS",
			description: "Assistive acoustic intelligence system that continuously monitors ambient acoustic feeds for emergency sirens or horns, automatically attenuating active headphone audio.",
			specs: [
				"Signal Processing: Real-time spectral FFT analysis to isolate emergency frequency profiles",
				"Safety: Automated headphone audio ducking to protect user situational awareness",
				"Deployment: Cross-platform desktop integration harness"
			],
			githubUrl: "https://github.com/Vithop/Siren-Sense",
			badge: "ASSISTIVE TECH"
		},
		{
			code: "PROJECT // 04",
			title: "Accessible Deterministic Calculator",
			stack: [
				"Svelte",
				"TypeScript",
				"WCAG AAA",
				"ARIA Live"
			],
			category: "CLIENT ARCHITECTURE",
			description: "Cross-platform calculator web application designed with the goal of being the most accessible, screen-reader-friendly calculator on the internet, built with deterministic state machines.",
			specs: [
				"Accessibility: Full keyboard navigation with dynamic ARIA Live state narration",
				"Precision: Decimal floating-point invariant engine preventing precision degradation",
				"Reactivity: Compile-time optimized UI bundle with sub-5ms input response"
			],
			githubUrl: "https://github.com/Vithop/CalculatorApp",
			badge: "ACCESSIBILITY"
		},
		{
			code: "PROJECT // 05",
			title: "TicTacToe Interactive Game Engine",
			stack: [
				"TypeScript",
				"State Machines",
				"Game Logic",
				"UI Architecture"
			],
			category: "CLIENT & ALGORITHMS",
			description: "Deterministic interactive game implementation with turn-based state machine transitions, heuristic evaluation, and responsive tactile interface feedback.",
			specs: [
				"Validation: Strict turn verification with instantaneous win/draw detection",
				"Heuristics: Algorithmic move evaluation for state transitions",
				"Interface: Tactile brutalist grid design with keyboard accessibility"
			],
			githubUrl: "https://github.com/Vithop/TicTacToe",
			badge: "GAME SYSTEMS"
		}
	],
	archiveBanner: {
		tag: "HISTORICAL TIMELINE // 2018 — 2026",
		headline: "LOOKING FOR EARLIER HARDWARE & SYSTEMS PROTOTYPES?",
		description: "Explore the complete chronological archive including the IoT Garden Gnome, Wearable EMG BioSensor, Assistive CNC Robotics, and McMaster engineering projects.",
		cta: "VIEW CHRONOLOGICAL ARCHIVE (15+ PROJECTS) →"
	}
};
var contactContent = {
	sectionNumber: "06",
	sectionTitle: "CONTACT",
	sectorTag: "DIRECT CHANNEL // VANCOUVER, BC",
	headline: {
		first: "INITIATE",
		second: "TRANSMISSION"
	},
	description: "Open to senior engineering roles, distributed systems consulting, and high-craft UI/UX collaborations. Based in Vancouver, BC (Pacific Time).",
	emailAction: {
		copyLabel: "COPY",
		copiedLabel: "COPIED TO CLIPBOARD!"
	},
	channels: [{
		platform: "LINKEDIN",
		label: "LINKEDIN // PROFILE",
		url: socialsContent.linkedinUrl
	}, {
		platform: "GITHUB",
		label: "GITHUB // REPOSITORIES",
		url: socialsContent.githubUrl
	}],
	portal: {
		tag: "CONTACT PORTAL // SECTOR 06",
		title: "AVAILABLE CHANNELS",
		description: "Reach out via email or LinkedIn for technical inquiries, architecture design reviews, or distributed systems opportunities. Responses typically within 24 hours.",
		location: "LOCATION: VANCOUVER, BC",
		status: "STATUS: ACTIVE TRANSMISSION",
		sendAction: "SEND DIRECT MESSAGE ✉"
	}
};
var footerContent = {
	tagline: "DISTRIBUTED SYSTEMS & EXPERIMENTAL CLIENT ARCHITECTURES",
	location: "VANCOUVER, BRITISH COLUMBIA, CANADA",
	edition: "LIGHT-CONCRETE BRUTALIST EDITION // MAQIVE TYPEFACE"
};
var _tmpl$$11 = [
	"<div",
	" id=\"about\"><header style=\"",
	"\"><div style=\"",
	"\"><div style=\"",
	"\"><span style=\"",
	"\"></span><span style=\"",
	"\">",
	"</span></div><span style=\"",
	"\">",
	"</span></div><nav aria-label=\"Main Navigation\" style=\"",
	"\">",
	"</nav><div style=\"",
	"\"><span><!--$-->",
	"<!--/--> <!--$-->",
	"<!--/--></span></div></header><section><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"section-header-beam\"><div class=\"section-header-title\"><span>",
	"</span></div><div class=\"section-telemetry-tag\">",
	"</div></div><div style=\"",
	"\" class=\"interactive-cluster\"><div><h1 style=\"",
	"\"><!--$-->",
	"<!--/--><br><!--$-->",
	"<!--/--></h1><p style=\"",
	"\">",
	"</p><div class=\"pill-button-group\" style=\"",
	"\"><a href=\"#contact\" class=\"pill-button\">",
	"</a><a href=\"#experience\" class=\"pill-button\" style=\"",
	"\">",
	"</a><a",
	" download=\"Vithuran_Sadagopan_Resume.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"pill-button\" aria-label=\"Download Resume / CV (PDF)\" style=\"",
	"\">",
	"</a></div></div><div class=\"erickson-lantern\" style=\"",
	"\"><div style=\"",
	"\"><span style=\"",
	"\">",
	"</span><div style=\"",
	"\"></div></div><div style=\"",
	"\">",
	"</div><div style=\"",
	"\"><span>",
	"</span><span style=\"",
	"\">",
	"</span></div></div></div></section></div>"
];
var _tmpl$2$9 = [
	"<button",
	" aria-label=\"View chronological project archive\" style=\"",
	"\">",
	"</button>"
];
var _tmpl$3$6 = [
	"<a",
	" style=\"",
	"\">",
	"</a>"
];
var _tmpl$4$4 = [
	"<div",
	" style=\"",
	"\"><div style=\"",
	"\">",
	"</div><div style=\"",
	"\">",
	"</div></div>"
];
var Hero = (props) => {
	const [time, setTime] = createSignal("");
	onMount(() => {
		const updateTime = () => {
			setTime((/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
				timeZone: navContent.timeZone,
				hour12: false,
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit"
			}));
		};
		updateTime();
		const interval = setInterval(updateTime, 1e3);
		onCleanup(() => clearInterval(interval));
	});
	return ssr(_tmpl$$11, ssrHydrationKey(), ssrStyleProperty("padding:", "1.25rem clamp(1rem, 5vw, 2.5rem)") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "1.25rem") + ssrStyleProperty(";border-bottom:", "2px solid var(--grid-border)") + ssrStyleProperty(";background-color:", "var(--concrete-slab)") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.85rem") + ssrStyleProperty(";letter-spacing:", "0.08em"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "1.25rem") + ssrStyleProperty(";flex-wrap:", "wrap"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "0.5rem"), ssrStyleProperty("width:", "10px") + ssrStyleProperty(";height:", "10px") + ssrStyleProperty(";background-color:", "var(--grid-border)") + ssrStyleProperty(";border-radius:", "50%"), ssrStyleProperty("font-weight:", "700") + ssrStyleProperty(";color:", "var(--ink-primary)"), escape(navContent.brand.name), ssrStyleProperty("color:", "var(--ink-secondary)") + ssrStyleProperty(";font-weight:", "600"), escape(navContent.brand.location), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";gap:", "1.5rem") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";flex-wrap:", "wrap"), escape(createComponent(For, {
		get each() {
			return navContent.items;
		},
		children: (item) => createComponent(Show, {
			get when() {
				return item.isArchiveTrigger;
			},
			get fallback() {
				return ssr(_tmpl$3$6, ssrHydrationKey() + ssrAttribute("href", escape(item.href, true), false), ssrStyleProperty("color:", item.id === "about" ? "var(--ink-primary)" : "var(--ink-secondary)") + ssrStyleProperty(";font-weight:", item.id === "about" ? "700" : "600") + ssrStyleProperty(";transition:", "color 0.2s"), item.number ? `${escape(item.number)} // ${escape(item.label)}` : escape(item.label));
			},
			get children() {
				return ssr(_tmpl$2$9, ssrHydrationKey(), ssrStyleProperty("background:", "none") + ssrStyleProperty(";border:", "none") + ssrStyleProperty(";padding:", "0") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.85rem") + ssrStyleProperty(";font-weight:", "600") + ssrStyleProperty(";letter-spacing:", "0.08em") + ssrStyleProperty(";cursor:", "pointer") + ssrStyleProperty(";transition:", "color 0.2s"), escape(item.label));
			}
		})
	})), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "0.6rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700"), escape(navContent.timeZoneLabel), escape(time() || "12:00:00"), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";left:", "1.5rem"), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";right:", "1.5rem"), escape(heroContent.sectionTitle), escape(heroContent.sectorTag), ssrStyleProperty("display:", "grid") + ssrStyleProperty(";grid-template-columns:", "repeat(auto-fit, minmax(280px, 1fr))") + ssrStyleProperty(";gap:", "3rem") + ssrStyleProperty(";align-items:", "center"), ssrStyleProperty("font-size:", "clamp(2rem, 11vw, 7.5rem)") + ssrStyleProperty(";line-height:", "0.95") + ssrStyleProperty(";letter-spacing:", "0.01em") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-bottom:", "2rem"), escape(heroContent.headline.first), escape(heroContent.headline.second), ssrStyleProperty("font-size:", "1.25rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.6") + ssrStyleProperty(";margin-bottom:", "2.5rem"), escape(heroContent.bio), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "1rem"), escape(heroContent.actions.getInTouch), ssrStyleProperty("background:", "transparent"), escape(heroContent.actions.viewExperience), ssrAttribute("href", escape(socialsContent.resumeUrl, true), false), ssrStyleProperty("background:", "var(--grid-border)") + ssrStyleProperty(";color:", "#ffffff"), escape(heroContent.actions.viewResume), ssrStyleProperty("padding:", "2.5rem") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "2rem") + ssrStyleProperty(";border-radius:", "32px") + ssrStyleProperty(";background:", "var(--concrete-pylon)"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";letter-spacing:", "0.1em"), escape(heroContent.vitrine.header), ssrStyleProperty("width:", "30px") + ssrStyleProperty(";height:", "14px") + ssrStyleProperty(";background:", "var(--grid-border)") + ssrStyleProperty(";border-radius:", "9999px"), ssrStyleProperty("display:", "grid") + ssrStyleProperty(";grid-template-columns:", "repeat(auto-fit, minmax(180px, 1fr))") + ssrStyleProperty(";gap:", "1.5rem"), escape(createComponent(For, {
		get each() {
			return heroContent.vitrine.metrics;
		},
		children: (metric) => ssr(_tmpl$4$4, ssrHydrationKey(), ssrStyleProperty("border-left:", "3px solid var(--grid-border)") + ssrStyleProperty(";padding-left:", "1rem"), ssrStyleProperty("font-family:", "var(--font-monumental)") + ssrStyleProperty(";font-size:", "2.2rem") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";color:", "var(--ink-primary)"), escape(metric.value), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.8rem") + ssrStyleProperty(";font-weight:", "500") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";margin-top:", "0.25rem"), escape(metric.label))
	})), ssrStyleProperty("border-top:", "2px solid var(--grid-border)") + ssrStyleProperty(";padding-top:", "1.25rem") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.8rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";justify-content:", "space-between"), escape(heroContent.vitrine.discipline), ssrStyleProperty("color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700"), escape(heroContent.vitrine.currentRole));
};
var _tmpl$$10 = [
	"<section",
	" id=\"experience\"><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"section-header-beam\"><h2 class=\"section-header-title\" style=\"",
	"\"><span><!--$-->",
	"<!--/--> // <!--$-->",
	"<!--/--></span></h2><div class=\"section-telemetry-tag\">",
	"</div></div><div style=\"",
	"\" class=\"interactive-cluster\">",
	"</div></section>"
];
var _tmpl$2$8 = [
	"<div",
	" style=\"",
	"\">",
	"</div>"
];
var _tmpl$3$5 = [
	"<div",
	" id=\"",
	"\" style=\"",
	"\"><div><h3 style=\"",
	"\">",
	"</h3><p style=\"",
	"\">",
	"</p><div style=\"",
	"\">",
	"</div></div><div style=\"",
	"\"><div style=\"",
	"\">",
	"</div><ul style=\"",
	"\">",
	"</ul></div></div>"
];
var _tmpl$4$3 = [
	"<div",
	" class=\"erickson-lantern\" style=\"",
	"\"><div",
	" aria-controls=\"",
	"\" style=\"",
	"\"><div style=\"",
	"\"><span style=\"",
	"\">",
	"</span><span style=\"",
	"\">",
	"</span></div><div style=\"",
	"\"><div style=\"",
	"\"><!--$-->",
	"<!--/--> // <!--$-->",
	"<!--/--></div><!--$-->",
	"<!--/--></div></div><!--$-->",
	"<!--/--></div>"
];
var _tmpl$5$2 = [
	"<span",
	" style=\"",
	"\">",
	"</span>"
];
var _tmpl$6 = [
	"<li",
	" style=\"",
	"\"><span style=\"",
	"\">▪</span><span>",
	"</span></li>"
];
var Experience = () => {
	const [expandedIndex, setExpandedIndex] = createSignal(0);
	const [isMobile, setIsMobile] = createSignal(false);
	onMount(() => {
		const mql = window.matchMedia("(max-width: 768px)");
		setIsMobile(mql.matches);
		const handler = (e) => setIsMobile(e.matches);
		mql.addEventListener("change", handler);
		onCleanup(() => mql.removeEventListener("change", handler));
	});
	return ssr(_tmpl$$10, ssrHydrationKey(), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";left:", "1.5rem"), ssrStyleProperty("font-size:", "inherit") + ssrStyleProperty(";margin:", "0"), escape(experienceContent.sectionNumber), escape(experienceContent.sectionTitle), escape(experienceContent.sectorTag), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "2.75rem") + ssrStyleProperty(";max-width:", "1100px") + ssrStyleProperty(";margin:", "0 auto"), escape(createComponent(For, {
		get each() {
			return experienceContent.items;
		},
		children: (exp, index) => {
			const isExpanded = () => !isMobile() || expandedIndex() === index();
			const isActive = () => isMobile() && expandedIndex() === index();
			return ssr(_tmpl$4$3, ssrHydrationKey(), ssrStyleProperty("padding:", "clamp(1.5rem, 5vw, 2.75rem)") + ssrStyleProperty(";margin-left:", isMobile() ? "0" : `${escape(index(), true) * 2.5}rem`) + ssrStyleProperty(";border-radius:", "32px") + ssrStyleProperty(";border-left:", "8px solid var(--grid-border)") + ssrStyleProperty(";border-color:", isActive() ? "var(--lantern-amber)" : "var(--grid-border)"), ssrAttribute("role", isMobile() ? "button" : escape(void 0, true), false) + ssrAttribute("tabindex", isMobile() ? 0 : escape(void 0, true), false) + ssrAttribute("aria-expanded", isMobile() ? escape(isExpanded(), true) : escape(void 0, true), false), `exp-details-${escape(index(), true)}`, ssrStyleProperty("display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "1rem") + ssrStyleProperty(";border-bottom:", "2px solid var(--grid-hairline)") + ssrStyleProperty(";padding-bottom:", "1.25rem") + ssrStyleProperty(";margin-bottom:", isExpanded() ? "1.75rem" : "0") + ssrStyleProperty(";cursor:", isMobile() ? "pointer" : "default"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "1rem"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";background:", "var(--concrete-slab)") + ssrStyleProperty(";padding:", "0.35rem 0.85rem") + ssrStyleProperty(";border-radius:", "9999px") + ssrStyleProperty(";border:", "1px solid var(--grid-border)"), escape(exp.tier), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.8rem") + ssrStyleProperty(";color:", "var(--ink-secondary)"), escape(exp.location), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "1rem"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.85rem") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";color:", isActive() ? "var(--lantern-amber-ink)" : "var(--ink-primary)") + ssrStyleProperty(";letter-spacing:", "0.05em"), escape(exp.company), escape(exp.period), escape(createComponent(Show, {
				get when() {
					return isMobile();
				},
				get children() {
					return ssr(_tmpl$2$8, ssrHydrationKey(), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.85rem") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";color:", isActive() ? "var(--lantern-amber-ink)" : "var(--ink-primary)"), isActive() ? "COLLAPSE [-]" : "[+]");
				}
			})), escape(createComponent(Show, {
				get when() {
					return isExpanded();
				},
				get children() {
					return ssr(_tmpl$3$5, ssrHydrationKey(), `exp-details-${escape(index(), true)}`, ssrStyleProperty("display:", "grid") + ssrStyleProperty(";grid-template-columns:", "repeat(auto-fit, minmax(250px, 1fr))") + ssrStyleProperty(";gap:", "2.5rem"), ssrStyleProperty("font-size:", "clamp(1.5rem, 5vw, 2rem)") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-bottom:", "1rem"), escape(exp.role), ssrStyleProperty("font-size:", "1.1rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.6") + ssrStyleProperty(";margin-bottom:", "1.75rem"), escape(exp.description), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "0.5rem"), escape(createComponent(For, {
						get each() {
							return exp.tech;
						},
						children: (t) => ssr(_tmpl$5$2, ssrHydrationKey(), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";padding:", "0.35rem 0.85rem") + ssrStyleProperty(";background:", "var(--concrete-slab)") + ssrStyleProperty(";border:", "1px solid var(--grid-border)") + ssrStyleProperty(";border-radius:", "9999px") + ssrStyleProperty(";color:", "var(--ink-primary)"), escape(t))
					})), ssrStyleProperty("background:", "var(--bg-concrete)") + ssrStyleProperty(";padding:", "clamp(1rem, 4vw, 1.75rem)") + ssrStyleProperty(";border-radius:", "20px") + ssrStyleProperty(";border:", "1px solid var(--grid-hairline)"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";margin-bottom:", "1.25rem") + ssrStyleProperty(";letter-spacing:", "0.1em"), escape(experienceContent.milestonesTitle), ssrStyleProperty("list-style:", "none") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "1rem"), escape(createComponent(For, {
						get each() {
							return exp.achievements;
						},
						children: (item) => ssr(_tmpl$6, ssrHydrationKey(), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";gap:", "0.85rem") + ssrStyleProperty(";align-items:", "flex-start") + ssrStyleProperty(";font-size:", "0.95rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.5"), ssrStyleProperty("color:", "var(--grid-border)") + ssrStyleProperty(";font-weight:", "700"), escape(item))
					})));
				}
			})));
		}
	})));
};
var _tmpl$$9 = [
	"<section",
	" id=\"skills\"><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"section-header-beam\"><h2 class=\"section-header-title\" style=\"",
	"\"><span><!--$-->",
	"<!--/--> // <!--$-->",
	"<!--/--></span></h2><div class=\"section-telemetry-tag\">",
	"</div></div><div style=\"",
	"\" class=\"interactive-cluster\">",
	"</div></section>"
];
var _tmpl$2$7 = [
	"<div",
	" class=\"erickson-lantern\" style=\"",
	"\"><div><div style=\"",
	"\"><span style=\"",
	"\">",
	"</span><span style=\"",
	"\"></span></div><h3 style=\"",
	"\">",
	"</h3><p style=\"",
	"\">",
	"</p></div><div style=\"",
	"\">",
	"</div></div>"
];
var _tmpl$3$4 = [
	"<div",
	" style=\"",
	"\"><span style=\"",
	"\">",
	"</span><span style=\"",
	"\">",
	"</span></div>"
];
var Skills = () => {
	return ssr(_tmpl$$9, ssrHydrationKey(), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";right:", "1.5rem"), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";left:", "1.5rem"), ssrStyleProperty("font-size:", "inherit") + ssrStyleProperty(";margin:", "0"), escape(skillsContent.sectionNumber), escape(skillsContent.sectionTitle), escape(skillsContent.sectorTag), ssrStyleProperty("display:", "grid") + ssrStyleProperty(";grid-template-columns:", "repeat(auto-fit, minmax(min(100%, 360px), 1fr))") + ssrStyleProperty(";gap:", "2.25rem"), escape(createComponent(For, {
		get each() {
			return skillsContent.modules;
		},
		children: (module) => ssr(_tmpl$2$7, ssrHydrationKey(), ssrStyleProperty("padding:", "clamp(1.5rem, 5vw, 2.25rem)") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";border-radius:", "28px"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";margin-bottom:", "1.25rem") + ssrStyleProperty(";border-bottom:", "2px solid var(--grid-hairline)") + ssrStyleProperty(";padding-bottom:", "0.75rem"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700"), escape(module.moduleCode), ssrStyleProperty("width:", "8px") + ssrStyleProperty(";height:", "8px") + ssrStyleProperty(";border-radius:", "50%") + ssrStyleProperty(";background:", "var(--grid-border)"), ssrStyleProperty("font-size:", "1.45rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-bottom:", "0.75rem"), escape(module.title), ssrStyleProperty("font-size:", "0.95rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";margin-bottom:", "1.75rem") + ssrStyleProperty(";line-height:", "1.55"), escape(module.description), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "0.5rem"), escape(createComponent(For, {
			get each() {
				return module.skills;
			},
			children: (s) => ssr(_tmpl$3$4, ssrHydrationKey(), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";padding:", "0.5rem 0.85rem") + ssrStyleProperty(";background:", "var(--bg-concrete)") + ssrStyleProperty(";border-radius:", "8px") + ssrStyleProperty(";border:", "1px solid var(--grid-hairline)"), ssrStyleProperty("font-size:", "0.85rem") + ssrStyleProperty(";font-weight:", "600") + ssrStyleProperty(";color:", "var(--ink-primary)"), escape(s.name), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";font-weight:", "600") + ssrStyleProperty(";color:", "var(--ink-secondary)"), escape(s.level))
		})))
	})));
};
var _tmpl$$8 = [
	"<section",
	" id=\"portfolio\"><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"section-header-beam\"><h2 class=\"section-header-title\" style=\"",
	"\"><span><!--$-->",
	"<!--/--> // <!--$-->",
	"<!--/--></span></h2><div class=\"section-telemetry-tag\">",
	"</div></div><div style=\"",
	"\" class=\"interactive-cluster\">",
	"</div><div class=\"erickson-lantern\" style=\"",
	"\"><div><div style=\"",
	"\">",
	"</div><h3 style=\"",
	"\">",
	"</h3><p style=\"",
	"\">",
	"</p></div><button class=\"pill-button\" style=\"",
	"\">",
	"</button></div></section>"
];
var _tmpl$2$6 = [
	"<div",
	" class=\"erickson-lantern\" style=\"",
	"\"><div><div style=\"",
	"\"><div style=\"",
	"\"><span style=\"",
	"\">",
	"</span><span style=\"",
	"\">",
	"</span></div><span style=\"",
	"\">",
	"</span></div><h3 style=\"",
	"\">",
	"</h3><div style=\"",
	"\">",
	"</div><p style=\"",
	"\">",
	"</p><div style=\"",
	"\"><div style=\"",
	"\">",
	"</div><ul style=\"",
	"\">",
	"</ul></div></div><div style=\"",
	"\"><span style=\"",
	"\">",
	"</span><a",
	" target=\"_blank\" rel=\"noopener noreferrer\" class=\"pill-button\" aria-label=\"",
	"\" style=\"",
	"\">",
	"</a></div></div>"
];
var _tmpl$3$3 = [
	"<span",
	" style=\"",
	"\">",
	"</span>"
];
var _tmpl$4$2 = [
	"<li",
	">• <!--$-->",
	"<!--/--></li>"
];
var Portfolio = (props) => {
	return ssr(_tmpl$$8, ssrHydrationKey(), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";right:", "1.5rem"), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";left:", "1.5rem"), ssrStyleProperty("font-size:", "inherit") + ssrStyleProperty(";margin:", "0"), escape(projectsContent.sectionNumber), escape(projectsContent.sectionTitle), escape(projectsContent.sectorTag), ssrStyleProperty("display:", "grid") + ssrStyleProperty(";grid-template-columns:", "repeat(auto-fit, minmax(280px, 1fr))") + ssrStyleProperty(";gap:", "2.5rem") + ssrStyleProperty(";margin-bottom:", "3.5rem"), escape(createComponent(For, {
		get each() {
			return projectsContent.items;
		},
		children: (item) => ssr(_tmpl$2$6, ssrHydrationKey(), ssrStyleProperty("padding:", "clamp(1.5rem, 5vw, 2.25rem)") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";gap:", "1.75rem") + ssrStyleProperty(";border-radius:", "28px"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";margin-bottom:", "1.25rem") + ssrStyleProperty(";border-bottom:", "2px solid var(--grid-hairline)") + ssrStyleProperty(";padding-bottom:", "0.75rem"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "0.5rem"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700"), escape(item.code), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.65rem") + ssrStyleProperty(";background:", "var(--concrete-slab)") + ssrStyleProperty(";padding:", "0.15rem 0.5rem") + ssrStyleProperty(";border-radius:", "9999px") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";border:", "1px solid var(--grid-hairline)"), escape(item.badge), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.7rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";background:", "var(--concrete-slab)") + ssrStyleProperty(";padding:", "0.25rem 0.6rem") + ssrStyleProperty(";border-radius:", "9999px"), escape(item.category), ssrStyleProperty("font-size:", "1.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-bottom:", "0.75rem") + ssrStyleProperty(";line-height:", "1.2"), escape(item.title), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "0.4rem") + ssrStyleProperty(";margin-bottom:", "1.25rem"), escape(createComponent(For, {
			get each() {
				return item.stack;
			},
			children: (tech) => ssr(_tmpl$3$3, ssrHydrationKey(), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";background:", "var(--concrete-slab)") + ssrStyleProperty(";border:", "1px solid var(--grid-border)") + ssrStyleProperty(";padding:", "0.2rem 0.6rem") + ssrStyleProperty(";border-radius:", "9999px") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "600"), escape(tech))
		})), ssrStyleProperty("font-size:", "0.95rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.6") + ssrStyleProperty(";margin-bottom:", "1.5rem"), escape(item.description), ssrStyleProperty("background:", "var(--bg-concrete)") + ssrStyleProperty(";padding:", "1rem 1.25rem") + ssrStyleProperty(";border-radius:", "16px") + ssrStyleProperty(";border:", "1px solid var(--grid-hairline)") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem"), ssrStyleProperty("color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";margin-bottom:", "0.5rem"), escape(projectsContent.cardLabels.specsTitle), ssrStyleProperty("list-style:", "none") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "0.35rem") + ssrStyleProperty(";color:", "var(--ink-secondary)"), escape(createComponent(For, {
			get each() {
				return item.specs;
			},
			children: (s) => ssr(_tmpl$4$2, ssrHydrationKey(), escape(s))
		})), ssrStyleProperty("border-top:", "2px solid var(--grid-hairline)") + ssrStyleProperty(";padding-top:", "1rem") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-secondary)"), escape(projectsContent.cardLabels.publicRepo), ssrAttribute("href", escape(item.githubUrl, true), false), `View GitHub repository for ${escape(item.title, true)}`, ssrStyleProperty("padding:", "0.4rem 0.95rem") + ssrStyleProperty(";font-size:", "0.75rem"), escape(projectsContent.cardLabels.viewRepo))
	})), ssrStyleProperty("padding:", "clamp(1.5rem, 5vw, 2.5rem) clamp(1.25rem, 5vw, 3rem)") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "2rem") + ssrStyleProperty(";border-radius:", "32px") + ssrStyleProperty(";background:", "var(--concrete-pylon)"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-muted)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";letter-spacing:", "0.1em") + ssrStyleProperty(";margin-bottom:", "0.5rem"), escape(projectsContent.archiveBanner.tag), ssrStyleProperty("font-size:", "1.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-bottom:", "0.5rem"), escape(projectsContent.archiveBanner.headline), ssrStyleProperty("color:", "var(--ink-secondary)") + ssrStyleProperty(";font-size:", "0.95rem"), escape(projectsContent.archiveBanner.description), ssrStyleProperty("padding:", "0.85rem 2rem") + ssrStyleProperty(";font-size:", "0.9rem") + ssrStyleProperty(";background:", "var(--grid-border)") + ssrStyleProperty(";color:", "#ffffff") + ssrStyleProperty(";white-space:", "normal"), escape(projectsContent.archiveBanner.cta));
};
var horizonsContent = {
	sectionNumber: "05",
	sectionTitle: "RESEARCH HORIZONS & FUTURE GOALS",
	sectorTag: "FORWARD-LOOKING SYSTEMS & ACTIVE EXPLORATIONS",
	headerDescription: "An architectural roadmap spanning autonomous agentic workflows, high-performance edge runtimes, enterprise developer acceleration, and formal verification safety contracts.",
	terminalTag: "RESEARCH HORIZON // 2026+",
	pillars: [
		{
			code: "HORIZON // 01",
			title: "Autonomous Agentic Systems & Multi-Agent Orchestration",
			subtitle: "DETERMINISTIC AGENT HARNESSES & MCP PROTOCOLS",
			statusBadge: "ACTIVE EXPLORATION",
			hypothesis: "Complex software engineering workflows require moving beyond stochastic chat loops into deterministic state machine-backed agent execution harnesses with transactional recovery.",
			stack: [
				"TypeScript",
				"Model Context Protocol (MCP)",
				"State Machines",
				"Transactional Rollback",
				"Claude / Antigravity"
			],
			activeExplorations: [
				"Engineered autonomous agent pairing workflows and MCP multi-server protocol hooks in Antigravity.",
				"Prototyped deterministic session transcript auditing and checkpoint rollback systems for autonomous code edits.",
				"Designed self-synthesizing tool discovery pipelines that dynamically negotiate capabilities across local environments."
			],
			futureMilestones: ["Decentralized multi-agent consensus protocols for automated cross-system integration and refactoring.", "Autonomous self-healing regression loops capable of reproducing, patching, and verifying test failures."]
		},
		{
			code: "HORIZON // 02",
			title: "High-Performance Systems & Local/Edge AI",
			subtitle: "ZERO-OVERHEAD RUNTIMES & LOW-LATENCY INFERENCE",
			statusBadge: "SYSTEMS RESEARCH",
			hypothesis: "Pushing developer intelligence to the edge requires native, memory-safe compiled runtimes that bypass heavy cloud roundtrips and eliminate garbage-collection stalls.",
			stack: [
				"Rust",
				"WebAssembly",
				"WebGPU",
				"Linear Memory Interop",
				"ONNX / Local Runtimes"
			],
			activeExplorations: [
				"Engineered zero-allocation arbitrary precision arithmetic in Rust (BigRustyInteger) compiling to WASM.",
				"Implemented high-throughput shared memory buffers between compiled WebAssembly binaries and browser canvas targets.",
				"Explored real-time edge DSP and acoustic frequency decomposition algorithms on local worker threads."
			],
			futureMilestones: ["Sub-10ms localized agent tool evaluation and small language model (SLM) embeddings running fully client-side.", "Zero-copy WebGPU acceleration pipelines for local code comprehension and AST vector indexing."]
		},
		{
			code: "HORIZON // 03",
			title: "Enterprise AI Developer Acceleration",
			subtitle: "AGENT STEERING & REPOSITORY KNOWLEDGE ARCHITECTURE",
			statusBadge: "PRODUCTION IMPACT",
			hypothesis: "AI tooling delivers maximum leverage when paired with disciplined engineering guardrails: structured context curation, concise mental models, and standardized agent steering.",
			stack: [
				"Claude & Kiro",
				"Agent Steering Frameworks",
				"Knowledge Curation",
				"AST Scaffolding",
				"Dev Loop Tooling"
			],
			activeExplorations: [
				"Created internal Amazon-wide 'Caveman' developer accelerator plugin (inspired by grug brain) for Claude & Kiro.",
				"Authored steering documents, system prompts, and structured knowledge bases governing ~50 packages.",
				"Engineered daily local mock harnesses reducing integration turnaround from weeks to days."
			],
			futureMilestones: ["Continuous semantic repository indexing that automatically syncs agent instructions with evolving APIs.", "Autonomous multi-repository dependency migration harnesses with zero human intervention on breaking changes."]
		},
		{
			code: "HORIZON // 04",
			title: "Formal Verification & Deterministic Guardrails",
			subtitle: "STATE MACHINE SAFETY & FIVE-NINES INVARIANTS",
			statusBadge: "ARCHITECTURE TARGET",
			hypothesis: "Mission-critical architectures cannot tolerate stochastic hallucinations; agent decisions and critical state transitions must be bound by provable formal contracts.",
			stack: [
				"XState / Finite State Machines",
				"Type Invariants",
				"Zod / Schema Validation",
				"Synthetic Telemetry",
				"Five-Nines SLAs"
			],
			activeExplorations: [
				"Architected declarative state machines decoupling checkout onboarding at Amazon to ensure zero transaction loss.",
				"Implemented strict compile-time invariant validation and accessibility narration models in client apps.",
				"Built synthetic telemetry alarms and monitors ensuring sub-second anomaly detection."
			],
			futureMilestones: ["Constraint-based runtime verification validating that autonomous agent actions satisfy strict security and data policies.", "Provably safe transactional rollback harnesses for distributed database mutations and serverless workflows."]
		}
	]
};
var _tmpl$$7 = [
	"<section",
	" id=\"horizons\"><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"section-header-beam\"><h2 class=\"section-header-title\" style=\"",
	"\"><span><!--$-->",
	"<!--/--> // <!--$-->",
	"<!--/--></span></h2><div class=\"section-telemetry-tag\">",
	"</div></div><div style=\"",
	"\"><p style=\"",
	"\">",
	"</p></div><div style=\"",
	"\" class=\"interactive-cluster\">",
	"</div><div class=\"erickson-lantern\" style=\"",
	"\"><div><div style=\"",
	"\">",
	"</div><div style=\"",
	"\">DUAL-TRACK ENGINEERING: MARRYING FIVE-NINES PRODUCTION RESILIENCE WITH HIGH-VELOCITY AUTONOMOUS AGENT RESEARCH.</div></div><a href=\"#contact\" class=\"pill-button\">DISCUSS COLLABORATIONS ↗</a></div></section>"
];
var _tmpl$2$5 = [
	"<div",
	" class=\"erickson-lantern\" style=\"",
	"\"><div><div style=\"",
	"\"><div style=\"",
	"\"><span style=\"",
	"\">",
	"</span></div><span style=\"",
	"\">",
	"</span></div><h3 style=\"",
	"\">",
	"</h3><div style=\"",
	"\">",
	"</div><div style=\"",
	"\"><div style=\"",
	"\">CORE HYPOTHESIS & THESIS:</div><p style=\"",
	"\">&ldquo;<!--$-->",
	"<!--/-->&rdquo;</p></div><div style=\"",
	"\">",
	"</div><div style=\"",
	"\"><div style=\"",
	"\"><span>ACTIVE PROTOTYPES &amp; SYSTEMS:</span></div><ul style=\"",
	"\">",
	"</ul></div><div><div style=\"",
	"\"><span>2026+ TARGET MILESTONES:</span></div><ul style=\"",
	"\">",
	"</ul></div></div></div>"
];
var _tmpl$3$2 = [
	"<span",
	" style=\"",
	"\">",
	"</span>"
];
var _tmpl$4$1 = [
	"<li",
	" style=\"",
	"\"><span style=\"",
	"\">▪</span><span>",
	"</span></li>"
];
var _tmpl$5$1 = [
	"<li",
	" style=\"",
	"\"><span style=\"",
	"\">↗</span><span>",
	"</span></li>"
];
var Horizons = () => {
	return ssr(_tmpl$$7, ssrHydrationKey(), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";right:", "1.5rem"), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";left:", "1.5rem"), ssrStyleProperty("font-size:", "inherit") + ssrStyleProperty(";margin:", "0"), escape(horizonsContent.sectionNumber), escape(horizonsContent.sectionTitle), escape(horizonsContent.sectorTag), ssrStyleProperty("margin-bottom:", "3rem") + ssrStyleProperty(";max-width:", "860px"), ssrStyleProperty("font-size:", "clamp(1.05rem, 2vw, 1.25rem)") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.6"), escape(horizonsContent.headerDescription), ssrStyleProperty("display:", "grid") + ssrStyleProperty(";grid-template-columns:", "repeat(auto-fit, minmax(min(100%, 480px), 1fr))") + ssrStyleProperty(";gap:", "2.5rem") + ssrStyleProperty(";margin-bottom:", "3.5rem"), escape(createComponent(For, {
		get each() {
			return horizonsContent.pillars;
		},
		children: (pillar) => ssr(_tmpl$2$5, ssrHydrationKey(), ssrStyleProperty("padding:", "clamp(1.5rem, 5vw, 2.25rem)") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";gap:", "1.75rem") + ssrStyleProperty(";border-radius:", "28px"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";margin-bottom:", "1.25rem") + ssrStyleProperty(";border-bottom:", "2px solid var(--grid-hairline)") + ssrStyleProperty(";padding-bottom:", "0.75rem") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "0.5rem"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "0.75rem"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.78rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700"), escape(pillar.code), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.68rem") + ssrStyleProperty(";letter-spacing:", "0.08em") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";padding:", "0.25rem 0.65rem") + ssrStyleProperty(";border-radius:", "9999px") + ssrStyleProperty(";border:", "1px solid var(--grid-border)") + ssrStyleProperty(";background:", "var(--concrete-slab)") + ssrStyleProperty(";color:", "var(--ink-primary)"), escape(pillar.statusBadge), ssrStyleProperty("font-size:", "clamp(1.2rem, 2.5vw, 1.45rem)") + ssrStyleProperty(";margin-bottom:", "0.4rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";line-height:", "1.25"), escape(pillar.title), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";letter-spacing:", "0.08em") + ssrStyleProperty(";font-weight:", "600") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";margin-bottom:", "1.25rem"), escape(pillar.subtitle), ssrStyleProperty("background:", "var(--concrete-slab)") + ssrStyleProperty(";border-left:", "3px solid var(--grid-border)") + ssrStyleProperty(";padding:", "0.85rem 1rem") + ssrStyleProperty(";margin-bottom:", "1.5rem") + ssrStyleProperty(";border-radius:", "0 8px 8px 0"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.7rem") + ssrStyleProperty(";letter-spacing:", "0.1em") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";margin-bottom:", "0.35rem"), ssrStyleProperty("font-size:", "0.88rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";line-height:", "1.5") + ssrStyleProperty(";font-style:", "italic"), escape(pillar.hypothesis), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "0.4rem") + ssrStyleProperty(";margin-bottom:", "1.75rem"), escape(createComponent(For, {
			get each() {
				return pillar.stack;
			},
			children: (tech) => ssr(_tmpl$3$2, ssrHydrationKey(), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.72rem") + ssrStyleProperty(";padding:", "0.2rem 0.55rem") + ssrStyleProperty(";border-radius:", "4px") + ssrStyleProperty(";border:", "1px solid var(--grid-hairline)") + ssrStyleProperty(";background:", "var(--concrete-pylon)") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";font-weight:", "500"), escape(tech))
		})), ssrStyleProperty("margin-bottom:", "1.5rem"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";letter-spacing:", "0.08em") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";margin-bottom:", "0.65rem") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "0.5rem"), ssrStyleProperty("list-style:", "none") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "0.5rem") + ssrStyleProperty(";padding:", 0), escape(createComponent(For, {
			get each() {
				return pillar.activeExplorations;
			},
			children: (item) => ssr(_tmpl$4$1, ssrHydrationKey(), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";gap:", "0.65rem") + ssrStyleProperty(";font-size:", "0.84rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.45"), ssrStyleProperty("color:", "var(--lantern-amber-ink)") + ssrStyleProperty(";font-weight:", "700"), escape(item))
		})), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";letter-spacing:", "0.08em") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";margin-bottom:", "0.65rem") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "0.5rem"), ssrStyleProperty("list-style:", "none") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "0.5rem") + ssrStyleProperty(";padding:", 0), escape(createComponent(For, {
			get each() {
				return pillar.futureMilestones;
			},
			children: (milestone) => ssr(_tmpl$5$1, ssrHydrationKey(), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";gap:", "0.65rem") + ssrStyleProperty(";font-size:", "0.84rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.45"), ssrStyleProperty("color:", "var(--reflecting-pool)") + ssrStyleProperty(";font-weight:", "700"), escape(milestone))
		})))
	})), ssrStyleProperty("padding:", "clamp(1.5rem, 4vw, 2.5rem)") + ssrStyleProperty(";border-radius:", "24px") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "1.5rem") + ssrStyleProperty(";background:", "var(--concrete-slab)"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";letter-spacing:", "0.1em") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";margin-bottom:", "0.5rem"), escape(horizonsContent.terminalTag), ssrStyleProperty("font-size:", "clamp(1.1rem, 2vw, 1.35rem)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";max-width:", "720px") + ssrStyleProperty(";line-height:", "1.35"));
};
var archiveCategories = [
	"All",
	"Distributed & Cloud",
	"Systems & Runtimes",
	"Assistive & Hardware",
	"Client & Web"
];
var archivePageContent = {
	returnTopButton: "RETURN TO OVERVIEW",
	headerTag: "HISTORICAL ARCHIVE // 2018 — 2026",
	sectionTitle: "PROJECT ARCHIVE & CHRONOLOGY",
	systemsSuffix: "RECORDED SYSTEMS",
	headline: {
		first: "CHRONOLOGICAL",
		second: "PROJECT INDEX"
	},
	intro: "An exhaustive record of software architectures, embedded firmware, systems engineering, and physical computing prototypes created between 2018 and 2026.",
	filterQueryLabel: "FILTER QUERY:",
	searchPlaceholder: "Search by technology (Rust, TypeScript, AWS), year, or keyword...",
	clearButton: "CLEAR",
	disciplineLabel: "DISCIPLINE:",
	returnBottomButton: "← RETURN TO MAIN TERMINAL",
	cardLabels: {
		highlightsTitle: "KEY HIGHLIGHTS:",
		recordTag: "ARCHIVE RECORD",
		githubButton: "GITHUB REPO ↗",
		demoButton: "LIVE DEMO ↗"
	}
};
var archiveProjects = [
	{
		id: "antigravity",
		year: "2025 – 2026",
		title: "Antigravity Agentic Workflows",
		category: "Distributed & Cloud",
		stack: [
			"TypeScript",
			"Node.js",
			"AI Agent SDK",
			"State Machines"
		],
		description: "Autonomous agent pairing workflows, tool synthesis engines, and deterministic state orchestration for advanced software engineering assistance.",
		highlights: [
			"Custom tool integration layer with multi-server protocol hooks",
			"Deterministic state recovery and session transcript auditing",
			"Integrated with high-velocity TypeScript development harnesses"
		],
		githubUrl: "https://github.com/Vithop/Antigravity"
	},
	{
		id: "tictactoe",
		year: "2024 – 2025",
		title: "TicTacToe Interactive Game Engine",
		category: "Client & Web",
		stack: [
			"TypeScript",
			"State Machines",
			"Game Logic",
			"UI Architecture"
		],
		description: "Deterministic game implementation with turn-based state machine transitions, heuristic evaluation, and responsive interactive feedback.",
		highlights: [
			"Strict state machine modeling for turn validation and win/draw detection",
			"Heuristic evaluation engine for intelligent move computation",
			"Tactile grid feedback with sub-second state resolution"
		],
		githubUrl: "https://github.com/Vithop/TicTacToe"
	},
	{
		id: "portfolio-brutalist",
		year: "2024 – 2026",
		title: "Architectural Portfolio Monolith",
		category: "Client & Web",
		stack: [
			"SolidJS",
			"TypeScript",
			"Vite",
			"Brutalist Architecture"
		],
		description: "Arthur Erickson-inspired light-concrete brutalist portfolio system featuring post-and-beam grid alignment, telemetry vitrines, and fine-grained reactive client state.",
		highlights: [
			"Light-concrete brutalist design system inspired by SFU & Robson Square",
			"Sub-50ms reactive routing and telemetry state with zero UI latency",
			"Fine-grained DOM updates using SolidJS signals"
		],
		githubUrl: "https://github.com/Vithop/Vithuran-Sadagopan",
		demoUrl: "https://vithop.github.io/Vithuran-Sadagopan/"
	},
	{
		id: "solid-docs",
		year: "2024",
		title: "SolidJS Documentation Contributions",
		category: "Client & Web",
		stack: [
			"SolidJS",
			"SolidStart",
			"Markdown",
			"Open Source"
		],
		description: "Explorations and documentation enhancements for the official next-generation SolidJS documentation platform.",
		highlights: ["Evaluated reactive primitives and client hydration lifecycles", "Community open-source tracking and documentation workflows"],
		githubUrl: "https://github.com/Vithop/solid-docs-next"
	},
	{
		id: "advent-of-code-2023",
		year: "2023",
		title: "Advent of Code Algorithmic Engine",
		category: "Systems & Runtimes",
		stack: [
			"TypeScript",
			"Algorithms",
			"Graph Theory",
			"Optimization"
		],
		description: "High-efficiency algorithmic solutions focusing on spatial graph searches, dynamic programming, and memory-conscious parsing.",
		highlights: ["Fast bitwise operations and graph traversal algorithms", "Automated verification test suites in TypeScript"],
		githubUrl: "https://github.com/Vithop/AdventOfCode2023"
	},
	{
		id: "big-rusty-integer",
		year: "2022",
		title: "BigRustyInteger — Arbitrary Precision Arithmetic",
		category: "Systems & Runtimes",
		stack: [
			"Rust",
			"Systems Programming",
			"Memory Safety",
			"Cargo"
		],
		description: "Arbitrary-precision integer arithmetic engine implemented in Rust, engineered for high-performance mathematical computation with zero allocation overhead.",
		highlights: [
			"Memory-safe arbitrary-precision unsigned and signed arithmetic",
			"Custom bit manipulation and Karatsuba-inspired multiplication pipelines",
			"Comprehensive fuzzing and invariant property unit tests"
		],
		githubUrl: "https://github.com/Vithop/BigRustyInteger"
	},
	{
		id: "wasm-game-of-life",
		year: "2021",
		title: "Rust WebAssembly Cellular Automata",
		category: "Systems & Runtimes",
		stack: [
			"Rust",
			"WebAssembly",
			"Canvas API",
			"Memory Interop"
		],
		description: "High-frequency 60fps Conway's Game of Life cellular universe compiled from Rust to WebAssembly with direct linear memory canvas rendering.",
		highlights: ["Direct shared memory buffer writes between Rust WASM and HTML5 Canvas", "Zero-copy frame updates sustaining thousands of concurrent live cells"],
		githubUrl: "https://github.com/Vithop/wasm-game-of-life"
	},
	{
		id: "calculator-app",
		year: "2021",
		title: "Accessible Deterministic Calculator",
		category: "Client & Web",
		stack: [
			"Svelte",
			"TypeScript",
			"WCAG AAA",
			"ARIA Live"
		],
		description: "Cross-platform calculator web application designed with the goal of being the most accessible, screen-reader-friendly calculator on the web.",
		highlights: ["Comprehensive keyboard navigation and audible state narration via ARIA Live", "Strict decimal precision engine preventing floating-point rounding quirks"],
		githubUrl: "https://github.com/Vithop/CalculatorApp"
	},
	{
		id: "gnome-api",
		year: "2021",
		title: "Serverless Garden Gnome Telemetry API",
		category: "Distributed & Cloud",
		stack: [
			"AWS Lambda",
			"API Gateway",
			"DynamoDB",
			"Node.js"
		],
		description: "Serverless REST & telemetry ingestion API powering real-time environmental monitoring, soil sensor logging, and automated notification webhooks.",
		highlights: ["Sub-50ms cold-start serverless endpoints on AWS Lambda", "DynamoDB single-table design for time-series agricultural telemetry"],
		githubUrl: "https://github.com/Vithop/gnome-app-api"
	},
	{
		id: "siren-sense",
		year: "2020 – 2021",
		title: "Siren-Sense Acoustic Attenuation System",
		category: "Assistive & Hardware",
		stack: [
			"TypeScript",
			"Web Audio API",
			"Audio DSP",
			"Tone Detection"
		],
		description: "Assistive acoustic intelligence application that continuously monitors ambient acoustic feeds for emergency sirens or horns, automatically attenuating headphone audio.",
		highlights: [
			"Real-time spectral FFT analysis to isolate emergency frequency profiles",
			"Automated headphone audio ducking to protect user situational awareness",
			"Cross-platform desktop integration harness"
		],
		githubUrl: "https://github.com/Vithop/Siren-Sense"
	},
	{
		id: "vue-opencv-wasm",
		year: "2020",
		title: "OpenCV WebAssembly Computer Vision Engine",
		category: "Systems & Runtimes",
		stack: [
			"Vue",
			"C++",
			"OpenCV",
			"WebAssembly",
			"Emscripten"
		],
		description: "Real-time client-side computer vision edge pipeline compiling native C++ OpenCV algorithms into WebAssembly for live camera stream edge processing.",
		highlights: ["In-browser edge contour detection without cloud server roundtrips", "Reusable starter template for compiling C++ to WebAssembly with Vue"],
		githubUrl: "https://github.com/Vithop/myVueOpenCVImageDetector"
	},
	{
		id: "pacemaker-dcm",
		year: "2019 – 2020",
		title: "Pacemaker Device Communications Monitor (DCM)",
		category: "Assistive & Hardware",
		stack: [
			"Vue",
			"Medical Instrumentation",
			"Telemetry",
			"McMaster 3K04"
		],
		description: "Safety-critical medical telemetry control interface for cardiac pacemaker parameter programming, telemetry visualization, and pacemaker mode switching.",
		highlights: ["Rigorous parameter bounds validation preventing lethal pacing misconfigurations", "Real-time electrogram waveform telemetry graphs and serial protocol drivers"],
		githubUrl: "https://github.com/Vithop/pacemaker_dcm"
	},
	{
		id: "garden-gnome",
		year: "2019 – 2020",
		title: "IoT Autonomous Garden Gnome",
		category: "Assistive & Hardware",
		stack: [
			"ESP8266 NodeMCU",
			"C",
			"AWS IoT Core",
			"MQTT",
			"DynamoDB"
		],
		description: "Autonomous agricultural telemetry monolith with embedded microcontrollers transmitting soil and irradiance data over MQTT to AWS with real-time alerting.",
		highlights: ["Low-power sleep state cycles maximizing remote battery life", "AWS IoT Core MQTT broker publishing sub-second environmental telemetry"],
		img: "GardenGnomePrototype1.jpg",
		githubUrl: "https://github.com/Vithop/gnome-app-api"
	},
	{
		id: "single-axis-cnc",
		year: "2019",
		title: "Single Axis CNC Assistive Robotics",
		category: "Assistive & Hardware",
		stack: [
			"Arduino",
			"Embedded C",
			"CAD",
			"NEMA-17",
			"Assistive Tech"
		],
		description: "Precision assistive robotic arm prototype engineered for clients with cerebral palsy, incorporating high-torque dampening and tactile control limiters.",
		highlights: ["Parametric 3D-printed chassis with vibration-dampened linear rails", "Embedded real-time limit switches preventing sudden assistive arm overtravel"],
		img: "Single-Axis-CNC-prototype.gif"
	},
	{
		id: "mac-image-decompressor",
		year: "2019",
		title: "FPGA Hardware Image Decompressor",
		category: "Systems & Runtimes",
		stack: [
			"Verilog",
			"FPGA",
			"Hardware Architecture",
			"McMaster 3DQ5"
		],
		description: "Hardware-level image decompression architecture implemented directly in Verilog hardware description language on Altera Cyclone IV FPGA silicon.",
		highlights: ["Pipelined hardware decoding stages executing IDCT in hardware registers", "Zero CPU clock overhead via custom FPGA datapath synthesis"],
		githubUrl: "https://github.com/Vithop/MAC_Image_Decompressor"
	},
	{
		id: "wearable-biosensor",
		year: "2018",
		title: "Wearable EMG BioSensor & 3D LED Volumetric Cube",
		category: "Assistive & Hardware",
		stack: [
			"C#",
			"C",
			"Myo Band",
			"EMG Sensors",
			"3D LED Matrix"
		],
		description: "Gesture-controlled volumetric 3D LED matrix powered by electromyography forearm signals, Fast Fourier transform gesture filtering, and spatial vector mapping.",
		highlights: ["8-channel medical-grade electromyography signal processing", "Real-time gesture recognition mapped to an 8x8x8 volumetric LED matrix"],
		img: "Wearable-BioSensor.gif",
		githubUrl: "https://github.com/Vithop/RGB_Cube"
	}
];
var _tmpl$$6 = [
	"<div",
	" class=\"erickson-lantern\" style=\"",
	"\"><div><div style=\"",
	"\"><span style=\"",
	"\">",
	"</span><span style=\"",
	"\">",
	"</span></div><h3 style=\"",
	"\">",
	"</h3><div style=\"",
	"\">",
	"</div><p style=\"",
	"\">",
	"</p><!--$-->",
	"<!--/--><div style=\"",
	"\"><div style=\"",
	"\">",
	"</div><ul style=\"",
	"\">",
	"</ul></div></div><div style=\"",
	"\"><span style=\"",
	"\">",
	"</span><div style=\"",
	"\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div></div></div>"
];
var _tmpl$2$4 = [
	"<span",
	" style=\"",
	"\">",
	"</span>"
];
var _tmpl$3$1 = [
	"<div",
	" style=\"",
	"\"><img",
	" alt=\"",
	"\" loading=\"lazy\" decoding=\"async\" width=\"400\" height=\"180\" style=\"",
	"\"></div>"
];
var _tmpl$4 = [
	"<li",
	">• <!--$-->",
	"<!--/--></li>"
];
var _tmpl$5 = [
	"<a",
	" target=\"_blank\" rel=\"noopener noreferrer\" class=\"pill-button\" aria-label=\"",
	"\" style=\"",
	"\">",
	"</a>"
];
var ArchiveCard = (props) => {
	const p = () => props.project;
	const imageSrc = () => p().img ? `/Vithuran-Sadagopan/${p().img}` : void 0;
	return ssr(_tmpl$$6, ssrHydrationKey(), ssrStyleProperty("padding:", "2.25rem") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";gap:", "1.75rem") + ssrStyleProperty(";border-radius:", "28px"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";margin-bottom:", "1.25rem") + ssrStyleProperty(";border-bottom:", "2px solid var(--grid-hairline)") + ssrStyleProperty(";padding-bottom:", "0.75rem"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";background:", "var(--concrete-slab)") + ssrStyleProperty(";padding:", "0.2rem 0.65rem") + ssrStyleProperty(";border-radius:", "9999px") + ssrStyleProperty(";border:", "1px solid var(--grid-hairline)"), escape(p().year), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.7rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";background:", "var(--concrete-slab)") + ssrStyleProperty(";padding:", "0.25rem 0.6rem") + ssrStyleProperty(";border-radius:", "9999px"), escape(p().category), ssrStyleProperty("font-size:", "1.6rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-bottom:", "0.75rem") + ssrStyleProperty(";line-height:", "1.2"), escape(p().title), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "0.4rem") + ssrStyleProperty(";margin-bottom:", "1.25rem"), escape(createComponent(For, {
		get each() {
			return p().stack;
		},
		children: (t) => ssr(_tmpl$2$4, ssrHydrationKey(), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.7rem") + ssrStyleProperty(";background:", "var(--bg-concrete)") + ssrStyleProperty(";border:", "1px solid var(--grid-hairline)") + ssrStyleProperty(";padding:", "0.2rem 0.55rem") + ssrStyleProperty(";border-radius:", "6px") + ssrStyleProperty(";color:", "var(--ink-primary)"), escape(t))
	})), ssrStyleProperty("font-size:", "0.95rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.6") + ssrStyleProperty(";margin-bottom:", "1.5rem"), escape(p().description), p().img && imageSrc() && ssr(_tmpl$3$1, ssrHydrationKey(), ssrStyleProperty("border:", "2px solid var(--grid-border)") + ssrStyleProperty(";border-radius:", "16px") + ssrStyleProperty(";overflow:", "hidden") + ssrStyleProperty(";margin-bottom:", "1.5rem") + ssrStyleProperty(";background:", "#000") + ssrStyleProperty(";box-shadow:", "var(--shadow-hard-sm)"), ssrAttribute("src", escape(imageSrc(), true), false), `Screenshot of ${escape(p().title, true)}`, ssrStyleProperty("width:", "100%") + ssrStyleProperty(";height:", "180px") + ssrStyleProperty(";object-fit:", "cover") + ssrStyleProperty(";display:", "block") + ssrStyleProperty(";filter:", "grayscale(40%)") + ssrStyleProperty(";transition:", "filter 0.3s ease, transform 0.3s ease")), ssrStyleProperty("background:", "var(--bg-concrete)") + ssrStyleProperty(";padding:", "1rem 1.25rem") + ssrStyleProperty(";border-radius:", "16px") + ssrStyleProperty(";border:", "1px solid var(--grid-hairline)") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";margin-bottom:", "1rem"), ssrStyleProperty("color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";margin-bottom:", "0.5rem"), escape(archivePageContent.cardLabels.highlightsTitle), ssrStyleProperty("list-style:", "none") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "0.35rem") + ssrStyleProperty(";color:", "var(--ink-secondary)"), escape(createComponent(For, {
		get each() {
			return p().highlights;
		},
		children: (h) => ssr(_tmpl$4, ssrHydrationKey(), escape(h))
	})), ssrStyleProperty("border-top:", "2px solid var(--grid-hairline)") + ssrStyleProperty(";padding-top:", "1rem") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "0.75rem") + ssrStyleProperty(";flex-wrap:", "wrap"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-secondary)"), escape(archivePageContent.cardLabels.recordTag), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";gap:", "0.75rem"), p().githubUrl && ssr(_tmpl$5, ssrHydrationKey() + ssrAttribute("href", escape(p().githubUrl, true), false), `View GitHub repository for ${escape(p().title, true)}`, ssrStyleProperty("padding:", "0.4rem 0.9rem") + ssrStyleProperty(";font-size:", "0.75rem"), escape(archivePageContent.cardLabels.githubButton)), p().demoUrl && ssr(_tmpl$5, ssrHydrationKey() + ssrAttribute("href", escape(p().demoUrl, true), false), `View live demo for ${escape(p().title, true)}`, ssrStyleProperty("padding:", "0.4rem 0.9rem") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";background:", "var(--grid-border)") + ssrStyleProperty(";color:", "#fff"), escape(archivePageContent.cardLabels.demoButton)));
};
var _tmpl$$5 = [
	"<div",
	" class=\"archive-view\"><header style=\"",
	"\"><button class=\"pill-button\" aria-label=\"Return to main portfolio overview\" style=\"",
	"\"><span>←</span><span>",
	"</span></button><div style=\"",
	"\"><span style=\"",
	"\"></span><span>",
	"</span></div></header><section style=\"",
	"\"><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"section-header-beam\"><h2 class=\"section-header-title\" style=\"",
	"\"><span>",
	"</span></h2><div class=\"section-telemetry-tag\"><!--$-->",
	"<!--/--> <!--$-->",
	"<!--/--></div></div><div style=\"",
	"\"><h1 style=\"",
	"\"><!--$-->",
	"<!--/--><br><!--$-->",
	"<!--/--></h1><p style=\"",
	"\">",
	"</p></div><div style=\"",
	"\"><div style=\"",
	"\"><label for=\"archive-search-input\" style=\"",
	"\">",
	"</label><input id=\"archive-search-input\" type=\"text\"",
	" style=\"",
	"\"><!--$-->",
	"<!--/--></div><div role=\"group\" aria-label=\"Filter archive projects by discipline\" style=\"",
	"\"><span id=\"discipline-filter-label\" style=\"",
	"\">",
	"</span><!--$-->",
	"<!--/--></div></div><div style=\"",
	"\" class=\"interactive-cluster\">",
	"</div><div style=\"",
	"\"><button class=\"pill-button\" aria-label=\"Return to top of portfolio\" style=\"",
	"\">",
	"</button></div></section></div>"
];
var _tmpl$2$3 = [
	"<button",
	" class=\"pill-button\" aria-label=\"Clear search input\" style=\"",
	"\">",
	"</button>"
];
var _tmpl$3 = [
	"<button",
	" style=\"",
	"\">",
	"</button>"
];
var ArchivePage = (props) => {
	const [selectedCategory, setSelectedCategory] = createSignal("All");
	const [searchQuery, setSearchQuery] = createSignal("");
	const filteredProjects = createMemo(() => {
		const cat = selectedCategory();
		const query = searchQuery().toLowerCase().trim();
		return archiveProjects.filter((p) => {
			const matchesCategory = cat === "All" || p.category === cat;
			const matchesQuery = !query || p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.stack.some((s) => s.toLowerCase().includes(query)) || p.year.includes(query);
			return matchesCategory && matchesQuery;
		});
	});
	return ssr(_tmpl$$5, ssrHydrationKey(), ssrStyleProperty("padding:", "1.25rem 2.5rem") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "1.25rem") + ssrStyleProperty(";border-bottom:", "2px solid var(--grid-border)") + ssrStyleProperty(";background-color:", "var(--concrete-slab)") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.85rem") + ssrStyleProperty(";letter-spacing:", "0.08em"), ssrStyleProperty("padding:", "0.5rem 1.25rem") + ssrStyleProperty(";font-size:", "0.8rem") + ssrStyleProperty(";display:", "inline-flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "0.5rem"), escape(archivePageContent.returnTopButton), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700"), ssrStyleProperty("width:", "10px") + ssrStyleProperty(";height:", "10px") + ssrStyleProperty(";background-color:", "var(--grid-border)") + ssrStyleProperty(";border-radius:", "50%"), escape(archivePageContent.headerTag), ssrStyleProperty("padding:", "4rem 3rem"), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";left:", "1.5rem"), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";right:", "1.5rem"), ssrStyleProperty("font-size:", "inherit") + ssrStyleProperty(";margin:", "0"), escape(archivePageContent.sectionTitle), escape(filteredProjects().length), escape(archivePageContent.systemsSuffix), ssrStyleProperty("margin-bottom:", "3rem") + ssrStyleProperty(";max-width:", "900px"), ssrStyleProperty("font-size:", "clamp(2.5rem, 6vw, 4.5rem)") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-bottom:", "1.5rem") + ssrStyleProperty(";line-height:", "1"), escape(archivePageContent.headline.first), escape(archivePageContent.headline.second), ssrStyleProperty("font-size:", "1.15rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.6"), escape(archivePageContent.intro), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "1.5rem") + ssrStyleProperty(";margin-bottom:", "3.5rem") + ssrStyleProperty(";padding:", "1.75rem") + ssrStyleProperty(";background:", "var(--concrete-pylon)") + ssrStyleProperty(";border:", "2px solid var(--grid-border)") + ssrStyleProperty(";border-radius:", "24px") + ssrStyleProperty(";box-shadow:", "var(--shadow-hard-sm)"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";gap:", "1rem") + ssrStyleProperty(";align-items:", "center"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.8rem") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";cursor:", "pointer"), escape(archivePageContent.filterQueryLabel), ssrAttribute("aria-label", escape(archivePageContent.filterQueryLabel, true), false) + ssrAttribute("placeholder", escape(archivePageContent.searchPlaceholder, true), false) + ssrAttribute("value", escape(searchQuery(), true), false), ssrStyleProperty("flex:", "1") + ssrStyleProperty(";padding:", "0.6rem 1rem") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.85rem") + ssrStyleProperty(";border:", "2px solid var(--grid-border)") + ssrStyleProperty(";border-radius:", "9999px") + ssrStyleProperty(";background:", "var(--bg-concrete)") + ssrStyleProperty(";color:", "var(--ink-primary)"), searchQuery() && ssr(_tmpl$2$3, ssrHydrationKey(), ssrStyleProperty("padding:", "0.4rem 0.8rem") + ssrStyleProperty(";font-size:", "0.75rem"), escape(archivePageContent.clearButton)), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-wrap:", "wrap") + ssrStyleProperty(";gap:", "0.75rem") + ssrStyleProperty(";align-items:", "center"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.8rem") + ssrStyleProperty(";font-weight:", "700") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-right:", "0.5rem"), escape(archivePageContent.disciplineLabel), escape(createComponent(For, {
		each: archiveCategories,
		children: (cat) => {
			const active = () => selectedCategory() === cat;
			return ssr(_tmpl$3, ssrHydrationKey() + ssrAttribute("aria-pressed", escape(active(), true), false), ssrStyleProperty("padding:", "0.45rem 1rem") + ssrStyleProperty(";border-radius:", "9999px") + ssrStyleProperty(";border:", "2px solid var(--grid-border)") + ssrStyleProperty(";background:", active() ? "var(--grid-border)" : "var(--concrete-slab)") + ssrStyleProperty(";color:", active() ? "#ffffff" : "var(--ink-primary)") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";font-weight:", active() ? "700" : "500") + ssrStyleProperty(";cursor:", "pointer") + ssrStyleProperty(";transition:", "all 0.2s"), escape(cat));
		}
	})), ssrStyleProperty("display:", "grid") + ssrStyleProperty(";grid-template-columns:", "repeat(auto-fill, minmax(340px, 1fr))") + ssrStyleProperty(";gap:", "2.5rem"), escape(createComponent(For, {
		get each() {
			return filteredProjects();
		},
		children: (project) => createComponent(ArchiveCard, { project })
	})), ssrStyleProperty("margin-top:", "4rem") + ssrStyleProperty(";text-align:", "center"), ssrStyleProperty("padding:", "0.9rem 2.5rem") + ssrStyleProperty(";font-size:", "0.9rem") + ssrStyleProperty(";font-weight:", "700"), escape(archivePageContent.returnBottomButton));
};
var _tmpl$$4 = [
	"<section",
	" id=\"contact\"><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"grid-crosshair\" style=\"",
	"\"></div><div class=\"section-header-beam\"><h2 class=\"section-header-title\" style=\"",
	"\"><span><!--$-->",
	"<!--/--> // <!--$-->",
	"<!--/--></span></h2><div class=\"section-telemetry-tag\">",
	"</div></div><div style=\"",
	"\" class=\"interactive-cluster\"><div><div style=\"",
	"\"><!--$-->",
	"<!--/--><br><!--$-->",
	"<!--/--></div><p style=\"",
	"\">",
	"</p><div style=\"",
	"\"><button class=\"pill-button\" style=\"",
	"\"><span>",
	"</span><span style=\"",
	"\">",
	"</span></button><span class=\"sr-only\" aria-live=\"polite\">",
	"</span><!--$-->",
	"<!--/--></div></div><div class=\"erickson-lantern\" style=\"",
	"\"><div style=\"",
	"\"><span style=\"",
	"\">",
	"</span><span style=\"",
	"\"></span></div><div><h3 style=\"",
	"\">",
	"</h3><p style=\"",
	"\">",
	"</p></div><div style=\"",
	"\"><span>",
	"</span><span>",
	"</span></div><a href=\"",
	"\" class=\"pill-button\" style=\"",
	"\">",
	"</a></div></div></section>"
];
var _tmpl$2$2 = [
	"<a",
	" target=\"_blank\" rel=\"noopener noreferrer\" class=\"pill-button\" aria-label=\"",
	"\" style=\"",
	"\"><span>",
	"</span><span style=\"",
	"\">↗</span></a>"
];
var Contact = () => {
	const [copied, setCopied] = createSignal(false);
	return ssr(_tmpl$$4, ssrHydrationKey(), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";left:", "1.5rem"), ssrStyleProperty("top:", "1.5rem") + ssrStyleProperty(";right:", "1.5rem"), ssrStyleProperty("font-size:", "inherit") + ssrStyleProperty(";margin:", "0"), escape(contactContent.sectionNumber), escape(contactContent.sectionTitle), escape(contactContent.sectorTag), ssrStyleProperty("display:", "grid") + ssrStyleProperty(";grid-template-columns:", "repeat(auto-fit, minmax(320px, 1fr))") + ssrStyleProperty(";gap:", "3rem") + ssrStyleProperty(";align-items:", "center"), ssrStyleProperty("font-family:", "var(--font-monumental)") + ssrStyleProperty(";font-size:", "clamp(2.5rem, 5vw, 4.5rem)") + ssrStyleProperty(";text-transform:", "uppercase") + ssrStyleProperty(";letter-spacing:", "0.02em") + ssrStyleProperty(";line-height:", "1.05") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-bottom:", "2rem"), escape(contactContent.headline.first), escape(contactContent.headline.second), ssrStyleProperty("font-size:", "1.2rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.6") + ssrStyleProperty(";margin-bottom:", "2.5rem"), escape(contactContent.description), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "1rem") + ssrStyleProperty(";max-width:", "360px"), ssrStyleProperty("width:", "100%") + ssrStyleProperty(";justify-content:", "space-between"), copied() ? escape(contactContent.emailAction.copiedLabel) : escape(socialsContent.email), ssrStyleProperty("color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700"), copied() ? "✓" : escape(contactContent.emailAction.copyLabel), copied() ? "Email address copied to clipboard" : "", escape(createComponent(For, {
		get each() {
			return contactContent.channels;
		},
		children: (channel) => ssr(_tmpl$2$2, ssrHydrationKey() + ssrAttribute("href", escape(channel.url, true), false), `Visit Vithuran on ${escape(channel.label, true)}`, ssrStyleProperty("width:", "100%") + ssrStyleProperty(";justify-content:", "space-between"), escape(channel.label), ssrStyleProperty("color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700"))
	})), ssrStyleProperty("padding:", "3rem") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";flex-direction:", "column") + ssrStyleProperty(";gap:", "2rem") + ssrStyleProperty(";border-radius:", "32px") + ssrStyleProperty(";background:", "var(--concrete-pylon)"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";justify-content:", "space-between") + ssrStyleProperty(";align-items:", "center"), ssrStyleProperty("font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";font-weight:", "700"), escape(contactContent.portal.tag), ssrStyleProperty("width:", "10px") + ssrStyleProperty(";height:", "10px") + ssrStyleProperty(";border-radius:", "50%") + ssrStyleProperty(";background:", "var(--grid-border)"), ssrStyleProperty("font-size:", "1.75rem") + ssrStyleProperty(";color:", "var(--ink-primary)") + ssrStyleProperty(";margin-bottom:", "1rem"), escape(contactContent.portal.title), ssrStyleProperty("font-size:", "1rem") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";line-height:", "1.6"), escape(contactContent.portal.description), ssrStyleProperty("padding:", "1.25rem") + ssrStyleProperty(";background:", "var(--bg-concrete)") + ssrStyleProperty(";border:", "1px solid var(--grid-hairline)") + ssrStyleProperty(";border-radius:", "16px") + ssrStyleProperty(";font-family:", "var(--font-telemetry)") + ssrStyleProperty(";font-size:", "0.8rem") + ssrStyleProperty(";font-weight:", "600") + ssrStyleProperty(";color:", "var(--ink-secondary)") + ssrStyleProperty(";display:", "flex") + ssrStyleProperty(";justify-content:", "space-between"), escape(contactContent.portal.location), escape(contactContent.portal.status), `mailto:${escape(socialsContent.email, true)}`, ssrStyleProperty("background:", "var(--grid-border)") + ssrStyleProperty(";color:", "#fff") + ssrStyleProperty(";border-color:", "var(--grid-border)") + ssrStyleProperty(";font-size:", "0.95rem"), escape(contactContent.portal.sendAction));
};
var _tmpl$$3 = [
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
var App$1 = () => {
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
	return ssr(_tmpl$$3, ssrHydrationKey(), ssrStyleProperty("outline:", "none"), escape(createComponent(Show, {
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
var app_exports = /* @__PURE__ */ __exportAll({
	default: () => Root,
	id$$: () => id$$
});
function Root() {
	return createComponent(Router, {
		root: (props) => createComponent(MetaProvider, { get children() {
			return [
				createComponent(Title, { children: "Vithuran Sadagopan // Software Development Engineer" }),
				createComponent(Meta, {
					name: "theme-color",
					content: "#eae5dc"
				}),
				createComponent(Meta, {
					name: "description",
					content: "Vithuran Sadagopan — Software Development Engineer building highly available distributed systems and high-craft interfaces."
				}),
				createComponent(Meta, {
					property: "og:title",
					content: "Vithuran Sadagopan // Software Development Engineer"
				}),
				createComponent(Meta, {
					property: "og:description",
					content: "Software Development Engineer building highly available distributed systems, deterministic state machines, and tactile interfaces."
				}),
				createComponent(Meta, {
					property: "og:type",
					content: "website"
				}),
				createComponent(Meta, {
					name: "twitter:card",
					content: "summary"
				}),
				createComponent(Meta, {
					name: "twitter:title",
					content: "Vithuran Sadagopan // Software Development Engineer"
				}),
				createComponent(Meta, {
					name: "twitter:description",
					content: "Software Development Engineer building highly available distributed systems and tactile interfaces."
				}),
				createComponent(Link, {
					rel: "preload",
					href: "/fonts/Maqive-q2gn2.ttf",
					as: "font",
					type: "font/ttf",
					crossorigin: "anonymous"
				}),
				createComponent(Link, {
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				}),
				createComponent(Link, {
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "anonymous"
				}),
				createComponent(Link, {
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
				}),
				createComponent(Suspense, { get children() {
					return props.children;
				} })
			];
		} }),
		get children() {
			return createComponent(Route, {
				path: "/",
				component: App$1
			});
		}
	});
}
/**
*
* Read more: https://docs.solidjs.com/solid-start/reference/server/http-status-code
*/
var HttpStatusCode = (props) => {
	const event = getRequestEvent();
	event.response.status = props.code;
	event.response.statusText = props.text;
	onCleanup(() => !event.complete && (event.response.status = 200));
	return null;
};
var _solid_start_seroval_plugins_default = [];
/**
* Plugins from `serialization.plugins` are appended rather than prepended:
* seroval picks the first plugin whose `test()` passes, so the built-ins win
* and a loose user `test()` can't take over `Request`/`FormData`/`URL`.
*
* The same list has to be used on both ends of a server function, which is why
* this comes from a virtual module bundled into the client and the server
* rather than a runtime option.
*/
var PLUGINS = [...[
	O,
	M,
	H,
	j,
	Q,
	i,
	l,
	oe,
	le,
	ye,
	de
], ..._solid_start_seroval_plugins_default];
var MAX_SERIALIZATION_DEPTH_LIMIT = 64;
var DISABLED_FEATURES = L.RegExp;
/**
* An error thrown by a server function is serialized and rethrown on the
* client, and seroval includes `Error.prototype.stack` by default. In
* production that leaks server file paths, internal function names and the
* shape of the deployment to anyone who can trigger a throw, so strip it.
* Development keeps the stack: that's where it's actually useful, and the
* paths it exposes are the developer's own.
*
* Only applied when writing; parsing leaves `DISABLED_FEATURES` alone so an
* incoming payload that does carry a stack still deserializes.
*/
var SERIALIZE_DISABLED_FEATURES = DISABLED_FEATURES | L.ErrorPrototypeStack;
L.ErrorPrototypeStack;
/**
* Alexis:
*
* A "chunk" is a piece of data emitted by the streaming serializer.
* Each chunk is represented by a 32-bit value (encoded in hexadecimal),
* followed by the encoded string (8-bit representation). This format
* is important so we know how much of the chunk being streamed we
* are expecting before parsing the entire string data.
*
* This is sort of a bootleg "multipart/form-data" except it's bad at
* handling File/Blob LOL
*
* The format is as follows:
* ;0xFFFFFFFF;<string data>
*/
function createChunk(data) {
	const encodeData = new TextEncoder().encode(data);
	const bytes = encodeData.length;
	const baseHex = bytes.toString(16);
	const totalHex = "00000000".substring(0, 8 - baseHex.length) + baseHex;
	const head = new TextEncoder().encode(`;0x${totalHex};`);
	const chunk = new Uint8Array(12 + bytes);
	chunk.set(head);
	chunk.set(encodeData, 12);
	return chunk;
}
function serializeToJSONStream(value) {
	return new ReadableStream({ start(controller) {
		cu(value, {
			disabledFeatures: SERIALIZE_DISABLED_FEATURES,
			depthLimit: MAX_SERIALIZATION_DEPTH_LIMIT,
			plugins: PLUGINS,
			onParse(node) {
				controller.enqueue(createChunk(JSON.stringify(node)));
			},
			onDone() {
				controller.close();
			},
			onError(error) {
				controller.error(error);
			}
		});
	} });
}
var SerovalChunkReader = class {
	reader;
	buffer;
	done;
	constructor(stream) {
		this.reader = stream.getReader();
		this.buffer = /* @__PURE__ */ new Uint8Array(0);
		this.done = false;
	}
	async readChunk() {
		const chunk = await this.reader.read();
		if (!chunk.done) {
			const newBuffer = new Uint8Array(this.buffer.length + chunk.value.length);
			newBuffer.set(this.buffer);
			newBuffer.set(chunk.value, this.buffer.length);
			this.buffer = newBuffer;
		} else this.done = true;
	}
	async next() {
		if (this.buffer.length < 12) {
			if (this.done) {
				if (this.buffer.length !== 0) throw new Error("Malformed server function stream.");
				return {
					done: true,
					value: void 0
				};
			}
			await this.readChunk();
			return await this.next();
		}
		const head = new TextDecoder().decode(this.buffer.subarray(1, 11));
		const bytes = Number.parseInt(head, 16);
		if (Number.isNaN(bytes)) throw new Error("Malformed server function stream.");
		while (bytes > this.buffer.length - 12) {
			if (this.done) throw new Error("Malformed server function stream.");
			await this.readChunk();
		}
		const partial = new TextDecoder().decode(this.buffer.subarray(12, 12 + bytes));
		this.buffer = this.buffer.subarray(12 + bytes);
		return {
			done: false,
			value: partial
		};
	}
	async drain(interpret) {
		while (true) {
			const result = await this.next();
			if (result.done) break;
			else interpret(result.value);
		}
	}
};
async function deserializeFromJSONString(json) {
	return await deserializeJSONStream(new Response(json));
}
async function deserializeJSONStream(response) {
	if (!response.body) throw new Error("missing body");
	const reader = new SerovalChunkReader(response.body);
	const result = await reader.next();
	if (!result.done) {
		const refs = /* @__PURE__ */ new Map();
		function interpretChunk(chunk) {
			return fu(JSON.parse(chunk), {
				refs,
				disabledFeatures: DISABLED_FEATURES,
				depthLimit: MAX_SERIALIZATION_DEPTH_LIMIT,
				plugins: PLUGINS
			});
		}
		reader.drain(interpretChunk);
		return interpretChunk(result.value);
	}
}
var BODY_FORMAT_KEY = "X-Start-Type";
var BODY_FORMAL_FILE = "__START__";
var BodyFormat;
(function(BodyFormat) {
	BodyFormat["Seroval"] = "0";
	BodyFormat["String"] = "1";
	BodyFormat["FormData"] = "2";
	BodyFormat["URLSearchParams"] = "3";
	BodyFormat["Blob"] = "4";
	BodyFormat["File"] = "5";
	BodyFormat["ArrayBuffer"] = "6";
	BodyFormat["Uint8Array"] = "7";
})(BodyFormat || (BodyFormat = {}));
function getHeadersAndBody(body) {
	switch (true) {
		case typeof body === "string": return {
			headers: {
				"Content-Type": "text/plain",
				[BODY_FORMAT_KEY]: BodyFormat.String
			},
			body
		};
		case body instanceof FormData: return {
			headers: { [BODY_FORMAT_KEY]: BodyFormat.FormData },
			body
		};
		case body instanceof URLSearchParams: return {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				[BODY_FORMAT_KEY]: BodyFormat.URLSearchParams
			},
			body
		};
		case body instanceof File: {
			const formData = new FormData();
			formData.append(BODY_FORMAL_FILE, body, body.name);
			return {
				headers: { [BODY_FORMAT_KEY]: BodyFormat.File },
				body: formData
			};
		}
		case body instanceof Blob: return {
			headers: { [BODY_FORMAT_KEY]: BodyFormat.Blob },
			body
		};
		case body instanceof ArrayBuffer: return {
			headers: { [BODY_FORMAT_KEY]: BodyFormat.ArrayBuffer },
			body
		};
		case body instanceof Uint8Array: return {
			headers: { [BODY_FORMAT_KEY]: BodyFormat.Uint8Array },
			body: new Uint8Array(body)
		};
		default: return;
	}
}
async function extractBody(instance, client, source) {
	const contentType = source.headers.get("content-type");
	const startType = source.headers.get(BODY_FORMAT_KEY);
	const clone = source.clone();
	switch (true) {
		case startType === BodyFormat.Seroval: return await deserializeJSONStream(clone);
		case startType === BodyFormat.String: return await clone.text();
		case startType === BodyFormat.File: return (await clone.formData()).get(BODY_FORMAL_FILE);
		case startType === BodyFormat.FormData:
		case contentType?.startsWith("multipart/form-data"): return await clone.formData();
		case startType === BodyFormat.URLSearchParams:
		case contentType?.startsWith("application/x-www-form-urlencoded"): return new URLSearchParams(await clone.text());
		case startType === BodyFormat.Blob: return await clone.blob();
		case startType === BodyFormat.ArrayBuffer: return await clone.arrayBuffer();
		case startType === BodyFormat.Uint8Array: return new Uint8Array(await clone.arrayBuffer());
	}
}
var _tmpl$$2 = [
	"<span",
	" style=\"font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;\">",
	"</span>"
];
var _tmpl$2$1 = ["<span", " style=\"font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;\">500 | Internal Server Error</span>"];
var ErrorBoundary$1 = (props) => {
	const message = "500 | Internal Server Error";
	return createComponent(ErrorBoundary, {
		fallback: (error) => {
			console.error(error);
			return [ssr(_tmpl$$2, ssrHydrationKey(), escape(message)), createComponent(HttpStatusCode, { code: 500 })];
		},
		get children() {
			return props.children;
		}
	});
};
var TopErrorBoundary = (props) => {
	let isError = false;
	const res = catchError(() => props.children, (err) => {
		console.error(err);
		isError = !!err;
	});
	return isError ? [ssr(_tmpl$2$1, ssrHydrationKey()), createComponent(HttpStatusCode, { code: 500 })] : res;
};
/**
* Patches the data-vite-dev-id attribute for style tags of virtual modules
*
* Per Vite's convention, virtual module ids are prefixed with \0 (null byte):
* https://vite.dev/guide/api-plugin#virtual-modules-convention
*
* However this null byte cannot be server rendered properly.
* Vite client runtime then fails to find style's with wrong null bytes,
* and instead inserts duplicate style's.
*
* This patch replaces the serializable /@id/__x00__ with the proper null byte,
* and has to run before Vite's client runtime:
* https://github.com/vitejs/vite/blob/130e7181a55c524383c63bbfb1749d0ff7185cad/packages/vite/src/client/client.ts#L529
*
* TODO: This should be solved in Vite directly!
*/
var patch = function() {
	document.querySelectorAll("style[data-vite-dev-id]").forEach(function(el) {
		el.setAttribute("data-vite-dev-id", el.dataset.viteDevId.replace("/@id/__x00__", "\0"));
	});
};
`${patch.toString()}`;
var PatchVirtualDevStyles = (props) => {};
var _tmpl$$1 = [
	"<script",
	" type=\"module\"",
	" async",
	"><\/script>"
];
var docType = ssr("<!DOCTYPE html>");
/**
*
* Read more: https://docs.solidjs.com/solid-start/reference/server/start-server
*/
function StartServer(props) {
	const context = getRequestEvent();
	const nonce = context.nonce;
	useAssets$1(context.assets, nonce);
	return createComponent(NoHydration, { get children() {
		return [docType, createComponent(TopErrorBoundary, { get children() {
			return createComponent(props.document, {
				get assets() {
					return createComponent(HydrationScript, {});
				},
				get scripts() {
					return [createComponent(PatchVirtualDevStyles, { nonce }), ssr(_tmpl$$1, ssrHydrationKey(), ssrAttribute("nonce", escape(nonce, true), false), ssrAttribute("src", escape(getSsrManifest("client").path("./src/entry-client.tsx"), true), false))];
				},
				get children() {
					return createComponent(Hydration, { get children() {
						return createComponent(ErrorBoundary$1, { get children() {
							return createComponent(Root, {});
						} });
					} });
				}
			});
		} })];
	} });
}
function stripBase(pathname, base) {
	if (pathname === base || pathname.startsWith(base + "/") || pathname.startsWith(base + "?")) return "/" + pathname.slice(base.length).replace(/^\/+/, "");
	return pathname;
}
function hasEmptySegmentAfterBase(pathname, base) {
	return pathname.startsWith(base + "//");
}
var NEEDLESS_ESCAPE_SRC = String.raw`%(?:2[146-9A-E]|3[0-9ABD]|4[0-9A-F]|5[0-9ABDF]|6[1-9A-F]|7[0-9ACE])`;
var NEEDLESS_ESCAPE_RE = /* @__PURE__ */ new RegExp(NEEDLESS_ESCAPE_SRC, "i");
var NEEDLESS_ESCAPE_RE_G = /* @__PURE__ */ new RegExp(NEEDLESS_ESCAPE_SRC, "gi");
function isNonCanonicalPathname(pathname) {
	return NEEDLESS_ESCAPE_RE.test(pathname);
}
function canonicalPathname(pathname) {
	return pathname.replace(NEEDLESS_ESCAPE_RE_G, (m) => String.fromCharCode(Number.parseInt(m.slice(1), 16)));
}
var ABSOLUTE_URL_RE = /^[a-z][a-z\d+\-.]*:\/\//i;
var ROUTE_ENCODE_RE = /[\u0000-\u0020"#<>\u0060]|[^\u0000-\u007E]/gu;
function normalizeRoute(route) {
	if (ABSOLUTE_URL_RE.test(route)) throw new Error(`Route patterns are pathnames, received URL: ${route}`);
	if (route.charCodeAt(0) !== 47) route = `/${route}`;
	route = canonicalPathname(route.replace(ROUTE_ENCODE_RE, encodeURIComponent));
	return route.includes("/.") ? resolveDotSegments(route) : route;
}
function resolveDotSegments(pathname) {
	const out = [];
	let dot = false;
	for (const segment of pathname.split("/")) {
		dot = segment === "." || segment === "..";
		if (!dot) out.push(segment);
		else if (segment.length === 2 && out.length > 1) out.pop();
	}
	if (dot) out.push("");
	return out.join("/");
}
function decodePathname(pathname) {
	try {
		return decodeURI(pathname);
	} catch {
		return;
	}
}
var kEventNS = "h3.internal.event.";
var kEventRes = /* @__PURE__ */ Symbol.for(`${kEventNS}res`);
var kEventResHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.headers`);
var kEventResErrHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.err.headers`);
var kMalformedURL = /* @__PURE__ */ Symbol.for(`${kEventNS}malformed`);
var H3Event = class {
	app;
	req;
	url;
	context;
	static __is_event__ = true;
	constructor(req, context, app) {
		this.context = req.context = context || req.context || new NullProtoObj();
		this.req = req;
		this.app = app;
		const _url = req._url;
		let url = _url && _url instanceof URL ? _url : new FastURL(req.url);
		const pathname = url.pathname;
		if (pathname.includes("%")) {
			if (decodePathname(pathname) === void 0) this[kMalformedURL] = true;
			else if (isNonCanonicalPathname(pathname)) url = new FastURL(`${url.protocol}//${url.host}${canonicalPathname(pathname)}${url.search}`);
		}
		this.url = url;
	}
	get res() {
		return this[kEventRes] ||= new H3EventResponse();
	}
	get runtime() {
		return this.req.runtime;
	}
	waitUntil(promise) {
		this.req.waitUntil?.(promise);
	}
	toString() {
		return `[${this.req.method}] ${this.req.url}`;
	}
	toJSON() {
		return this.toString();
	}
	get node() {
		return this.req.runtime?.node;
	}
	get headers() {
		return this.req.headers;
	}
	get path() {
		return this.url.pathname + this.url.search;
	}
	get method() {
		return this.req.method;
	}
};
var H3EventResponse = class {
	status;
	statusText;
	get headers() {
		return this[kEventResHeaders] ||= new Headers();
	}
	get errHeaders() {
		return this[kEventResErrHeaders] ||= new Headers();
	}
};
var DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
	return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
	if (!statusCode) return defaultStatusCode;
	if (typeof statusCode === "string") statusCode = +statusCode;
	if (!Number.isInteger(statusCode) || statusCode < 100 || statusCode > 599) return defaultStatusCode;
	return statusCode;
}
var HTTPError = class HTTPError extends Error {
	get name() {
		return "HTTPError";
	}
	status;
	statusText;
	headers;
	cause;
	data;
	body;
	unhandled;
	static isError(input) {
		return input instanceof Error && input?.name === "HTTPError" && input.status > 99;
	}
	static status(status, statusText, details) {
		return new HTTPError({
			...details,
			statusText,
			status
		});
	}
	constructor(arg1, arg2) {
		let messageInput;
		let details;
		if (typeof arg1 === "string") {
			messageInput = arg1;
			details = arg2;
		} else details = arg1;
		const status = sanitizeStatusCode(details?.status || details?.statusCode || details?.cause?.status || details?.cause?.statusCode, 500);
		const statusText = sanitizeStatusMessage(details?.statusText || details?.statusMessage || details?.cause?.statusText || details?.cause?.statusMessage);
		const message = messageInput || details?.message || details?.cause?.message || details?.statusText || details?.statusMessage || [
			"HTTPError",
			status,
			statusText
		].filter(Boolean).join(" ");
		super(message, { cause: details });
		this.cause = details;
		this.status = status;
		this.statusText = statusText || void 0;
		const rawHeaders = details?.headers || details?.cause?.headers;
		this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
		this.unhandled = details?.unhandled ?? details?.cause?.unhandled ?? void 0;
		this.data = details?.data;
		this.body = details?.body;
	}
	get statusCode() {
		return this.status;
	}
	get statusMessage() {
		return this.statusText;
	}
	toJSON() {
		const unhandled = this.unhandled;
		return {
			status: this.status,
			statusText: this.statusText,
			unhandled,
			message: unhandled ? "HTTPError" : this.message,
			data: unhandled ? void 0 : this.data,
			...unhandled ? void 0 : this.body
		};
	}
};
function isJSONSerializable(value, _type) {
	if (value === null || value === void 0) return true;
	if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
	if (typeof value.toJSON === "function") return true;
	if (Array.isArray(value)) return true;
	if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
	if (value instanceof NullProtoObj) return true;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null;
}
var kEventDispose = /* @__PURE__ */ Symbol.for("h3.internal.event.dispose");
var kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
var kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
function toResponse(val, event, config = {}) {
	if (typeof val?.then === "function") return val.then((resolvedVal) => toResponse(resolvedVal, event, config), (r) => toResponse(toError(r), event, config));
	let response;
	try {
		response = prepareResponse(val, event, config);
	} catch (error) {
		return toResponse(toError(error), event, config);
	}
	if (typeof response?.then === "function") return toResponse(response, event, config);
	const { onResponse } = config;
	if (onResponse) return Promise.resolve().then(() => onResponse(response, event)).catch((error) => {
		if (!config.silent) console.error(error);
	}).then(() => event[kEventDispose]?.observe(response, val) ?? response);
	return event[kEventDispose]?.observe(response, val) ?? response;
}
function toError(value) {
	if (value === kNotFound || value === kHandled || value instanceof Error) return value;
	if (typeof value === "number") return new HTTPError({ status: value });
	const error = new HTTPError({
		status: 500,
		unhandled: true
	});
	error.cause = value;
	return error;
}
var kHTTPResponse = /* @__PURE__ */ Symbol.for("h3.HTTPResponse");
var HTTPResponse = class {
	#headers;
	#init;
	body;
	constructor(body, init) {
		this.body = body;
		this.#init = init;
	}
	get status() {
		return this.#init?.status;
	}
	get statusText() {
		return this.#init?.statusText;
	}
	get headers() {
		return this.#headers ||= new Headers(this.#init?.headers);
	}
};
HTTPResponse.prototype[kHTTPResponse] = true;
function prepareResponse(val, event, config, nested) {
	if (val === kHandled) return new NodeResponse(null);
	if (val === kNotFound) val = new HTTPError({
		status: 404,
		message: `Cannot find any route matching [${event.req.method}] ${event.url}`
	});
	if (val && val instanceof Error) {
		const isHTTPError = HTTPError.isError(val);
		const error = isHTTPError ? val : new HTTPError(val);
		if (!isHTTPError) {
			error.unhandled = true;
			if (val?.stack) error.stack = val.stack;
		}
		if (error.unhandled && !config.silent) console.error(error);
		const { onError } = config;
		const errHeaders = event[kEventRes]?.[kEventResErrHeaders];
		if (onError && !nested) return Promise.resolve().then(() => onError(error, event)).catch(toError).then((newVal) => prepareResponse(newVal ?? val, event, config, true));
		event[kEventRes] = void 0;
		return errorResponse(error, config.debug, errHeaders);
	}
	const preparedRes = event[kEventRes];
	let preparedHeaders = preparedRes?.[kEventResHeaders];
	event[kEventRes] = void 0;
	if (!(val instanceof Response)) {
		const res = prepareResponseBody(val, event, config);
		const rawStatus = res.status || preparedRes?.status;
		const status = rawStatus ? sanitizeStatusCode(rawStatus) : void 0;
		const rawStatusText = res.statusText || preparedRes?.statusText;
		return new NodeResponse(nullBody(event.req.method, status) ? null : res.body, {
			status,
			statusText: rawStatusText === void 0 ? void 0 : sanitizeStatusMessage(rawStatusText),
			headers: res.headers && preparedHeaders ? mergeHeaders(res.headers, preparedHeaders) : res.headers || preparedHeaders
		});
	}
	if (val.status >= 400) preparedHeaders = preparedRes?.[kEventResErrHeaders];
	if (preparedHeaders && !nested && !preparedHeaders.keys().next().done) return new NodeResponse(nullBody(event.req.method, val.status) ? null : val.body, {
		status: val.status,
		statusText: val.statusText,
		headers: mergeHeaders(val.headers, preparedHeaders)
	});
	return event.req.method === "HEAD" && val.body !== null ? new NodeResponse(null, {
		status: val.status,
		statusText: val.statusText,
		headers: val.headers
	}) : val;
}
function mergeHeaders(base, overrides, target = new Headers(base)) {
	for (const [name, value] of overrides) if (name === "set-cookie") target.append(name, value);
	else target.set(name, value);
	return target;
}
var frozen = (name) => (...args) => {
	throw new Error(`Headers are frozen (${name} ${args.join(", ")})`);
};
var FrozenHeaders = class extends Headers {
	set = frozen("set");
	append = frozen("append");
	delete = frozen("delete");
};
var emptyHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-length": "0" });
var jsonHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-type": "application/json;charset=UTF-8" });
function prepareResponseBody(val, event, config) {
	if (val === null || val === void 0) return {
		body: "",
		headers: emptyHeaders
	};
	const valType = typeof val;
	if (valType === "string") return { body: val };
	if (val instanceof Uint8Array) return {
		body: val,
		headers: new Headers({ "content-length": val.byteLength.toString() })
	};
	if (val instanceof HTTPResponse || val?.[kHTTPResponse] === true) return val;
	if (isJSONSerializable(val, valType)) return {
		body: JSON.stringify(val, void 0, config.debug ? 2 : void 0),
		headers: jsonHeaders
	};
	if (valType === "bigint") return {
		body: val.toString(),
		headers: jsonHeaders
	};
	if (val instanceof Blob) {
		const headers = new Headers({
			"content-type": val.type,
			"content-length": val.size.toString()
		});
		let filename = val.name;
		if (filename) {
			filename = encodeURIComponent(filename);
			headers.set("content-disposition", `filename="${filename}"; filename*=UTF-8''${filename}`);
		}
		return {
			body: val.stream(),
			headers
		};
	}
	if (valType === "symbol") return { body: val.toString() };
	if (valType === "function") return { body: `${val.name}()` };
	return { body: val };
}
function nullBody(method, status) {
	return method === "HEAD" || status === 100 || status === 101 || status === 102 || status === 204 || status === 205 || status === 304;
}
function errorResponse(error, debug, errHeaders) {
	let headers = error.headers ? mergeHeaders(jsonHeaders, error.headers) : new Headers(jsonHeaders);
	if (errHeaders) headers = mergeHeaders(headers, errHeaders);
	return new NodeResponse(JSON.stringify({
		...error.toJSON(),
		stack: debug && error.stack ? error.stack.split("\n").map((l) => l.trim()) : void 0
	}, void 0, debug ? 2 : void 0), {
		status: error.status,
		statusText: error.statusText,
		headers
	});
}
var LITERAL_ROUTE_RE = /^(?:\/[^/:*(){}\\?^\0- "#<>`\x7F-\uFFFF]+)*\/?$/;
var LITERAL_PREFIX_ROUTE_RE = /^((?:\/[^/:*(){}\\?^\0- "#<>`\x7F-\uFFFF]+)*)\/\*\*\/?$/;
function createRouteMatcher(route) {
	if (route.charCodeAt(0) !== 47) route = `/${route}`;
	const prefixMatch = LITERAL_PREFIX_ROUTE_RE.exec(route);
	if (prefixMatch) {
		const base = prefixMatch[1];
		const prefix = `${base}/`;
		return (pathname) => {
			if (pathname === base || pathname === prefix) return;
			if (!pathname.startsWith(prefix)) return false;
			const rest = trimTrailingSlash(pathname.slice(prefix.length));
			return {
				0: rest,
				_: rest
			};
		};
	}
	if (LITERAL_ROUTE_RE.test(route)) {
		const base = route.endsWith("/") ? route.slice(0, -1) : route;
		return (pathname) => pathname === base || pathname === `${base}/` ? void 0 : false;
	}
	const router = createRouter();
	addRoute(router, "", route, true);
	return (pathname) => {
		const match = findRoute(router, "", pathname);
		return match ? match.params : false;
	};
}
function trimTrailingSlash(rest) {
	return rest.endsWith("/") ? rest.slice(0, -1) : rest;
}
function normalizeMiddleware(input, opts = {}) {
	const matcher = createMatcher(opts);
	if (!matcher && (input.length > 1 || input.constructor?.name === "AsyncFunction")) return input;
	return (event, next) => {
		if (matcher && !matcher(event)) return next();
		const res = input(event, next);
		return res === void 0 || res === kNotFound ? next() : res;
	};
}
function createMatcher(opts) {
	if (!opts.route && !opts.method && !opts.match) return;
	const routeMatcher = opts.route ? createRouteMatcher(normalizeRoute(opts.route)) : void 0;
	const method = opts.method?.toUpperCase();
	return function _middlewareMatcher(event) {
		if (method) {
			const reqMethod = event.req.method.toUpperCase();
			if (reqMethod !== method && !(method === "GET" && reqMethod === "HEAD")) return false;
		}
		if (opts.match && !opts.match(event)) return false;
		if (!routeMatcher) return true;
		const params = routeMatcher(event.url.pathname);
		if (params === false) return false;
		if (params) event.context.middlewareParams = {
			...event.context.middlewareParams,
			...params
		};
		return true;
	};
}
function composeMiddleware(middleware) {
	let chain = (event, handler) => handler(event);
	for (let i = middleware.length - 1; i >= 0; i--) {
		const fn = middleware[i];
		const inner = chain;
		chain = (event, handler) => callLayer(fn, event, handler, inner);
	}
	return chain;
}
function composeHandler(middleware, handler) {
	const chain = composeMiddleware(middleware);
	return function _composedHandler(event) {
		return chain(event, handler);
	};
}
function callMiddleware(event, middleware, handler, index = 0) {
	return index === middleware.length ? handler(event) : callLayer(middleware[index], event, handler, (_event, _handler) => callMiddleware(_event, middleware, _handler, index + 1));
}
function callLayer(fn, event, handler, inner) {
	let nextCalled;
	let nextResult;
	const next = () => {
		if (nextCalled) return nextResult;
		nextCalled = true;
		nextResult = inner(event, handler);
		return nextResult;
	};
	const ret = fn(event, next);
	return isUnhandledResponse(ret) ? next() : typeof ret?.then === "function" ? ret.then((resolved) => isUnhandledResponse(resolved) ? next() : resolved) : ret;
}
function isUnhandledResponse(val) {
	return val === void 0 || val === kNotFound;
}
function requestWithURL(req, url) {
	const cache = new NullProtoObj();
	cache.url = url;
	cache._url = void 0;
	return new Proxy(req, {
		get(target, prop) {
			if (prop in cache) return cache[prop];
			const value = Reflect.get(target, prop);
			if (prop === "bodyUsed") return value;
			cache[prop] = typeof value === "function" && prop !== "constructor" ? value.bind(target) : value;
			return cache[prop];
		},
		set(target, prop, value) {
			if (prop !== "url" && prop !== "_url") delete cache[prop];
			return Reflect.set(target, prop, value);
		}
	});
}
function requestWithBaseURL(req, base, options = {}) {
	const url = new URL(options.url || req.url);
	url.pathname = stripBase(url.pathname, base);
	return requestWithURL(req, url.href);
}
function toRequest(input, options) {
	if (typeof input === "string") {
		let url = input;
		if (url[0] === "/") url = `http://${safeHost((options?.headers ? new Headers(options.headers) : void 0)?.get("host"))}${url}`;
		return new Request(url, options);
	} else if (options || input instanceof URL) return new Request(input, options);
	return input;
}
function getRequestIP(event, opts = {}) {
	if (opts.xForwardedFor) {
		const _header = event.req.headers.get("x-forwarded-for");
		if (_header) {
			const xForwardedFor = _header.split(",")[0].trim();
			if (xForwardedFor) return xForwardedFor;
		}
	}
	return event.req.context?.clientAddress || event.req.ip || void 0;
}
function safeHost(host) {
	return host && !/[/\\?#@\s]/.test(host) ? host : "localhost";
}
function defineHandler(input) {
	if (typeof input === "function") return handlerWithFetch(input);
	const handler = input.handler || (input.fetch ? function _fetchHandler(event) {
		return input.fetch(event.req);
	} : NoHandler);
	const composed = input.middleware?.length && composeHandler(input.middleware, handler);
	const eventHandler = handlerWithFetch(composed || handler);
	return Object.assign(eventHandler, input, composed && { fetch: eventHandler.fetch });
}
function handlerWithFetch(handler) {
	if ("fetch" in handler) return handler;
	return Object.assign(handler, { fetch: (req) => {
		if (typeof req === "string") req = new URL(req, "http://_");
		if (req instanceof URL) req = new Request(req);
		const event = new H3Event(req);
		try {
			return Promise.resolve(toResponse(handler(event), event));
		} catch (error) {
			return Promise.resolve(toResponse(toError(error), event));
		}
	} });
}
function toEventHandler(handler) {
	if (typeof handler === "function") return handler;
	if (typeof handler?.handler === "function" && handler.constructor?.["~h3"]) return handler.handler;
	if (typeof handler?.fetch === "function") return function _fetchHandler(event) {
		return handler.fetch(event.req);
	};
}
var NoHandler = () => kNotFound;
var H3Core = class {
	static "~h3" = true;
	config;
	"~middleware";
	"~routes" = [];
	"~dispatch";
	"~composed";
	constructor(config = {}) {
		this["~middleware"] = [];
		this.config = config;
		this.fetch = this.fetch.bind(this);
		this.handler = this.handler.bind(this);
	}
	fetch(request) {
		return this["~request"](request);
	}
	handler(event) {
		const route = this["~findRoute"](event);
		if (route) {
			event.context.params = route.params;
			event.context.matchedRoute = route.data;
		}
		return (this["~dispatch"] ??= createDispatcher(this))(event, route);
	}
	"~request"(request, context) {
		const event = new H3Event(request, context, this);
		let handlerRes;
		try {
			if (event[kMalformedURL] && !this.config.allowMalformedURL) throw new HTTPError({
				status: 400,
				message: "Bad Request"
			});
			if (this.config.onRequest) {
				const hookRes = this.config.onRequest(event);
				handlerRes = typeof hookRes?.then === "function" ? hookRes.then(() => this.handler(event)) : this.handler(event);
			} else handlerRes = this.handler(event);
		} catch (error) {
			handlerRes = Promise.reject(error);
		}
		return toResponse(handlerRes, event, this.config);
	}
	"~findRoute"(_event) {}
	"~addRoute"(_route) {
		this["~routes"].push(_route);
	}
	"~getMiddleware"(_event, _route) {
		return this["~middleware"];
	}
};
function createDispatcher(app) {
	if (app["~getMiddleware"] !== H3Core.prototype["~getMiddleware"]) return (event, route) => callMiddleware(event, app["~getMiddleware"](event, route || void 0), routeHandler(route));
	const middleware = app["~middleware"];
	if (middleware.length === 0) return (event, route) => routeHandler(route)(event);
	const composed = app["~composed"] ??= composeMiddleware(middleware);
	return (event, route) => composed(event, routeHandler(route));
}
function routeHandler(route) {
	const data = route?.data;
	if (!data) return NoHandler;
	return data.middleware?.length ? data["~composed"] ??= composeHandler(data.middleware, data.handler) : data.handler;
}
var H3 = /* @__PURE__ */ (() => {
	class H3 extends H3Core {
		"~rou3";
		constructor(config = {}) {
			super(config);
			this["~rou3"] = createRouter();
			this.request = this.request.bind(this);
			config.plugins?.forEach((plugin) => plugin(this));
		}
		register(plugin) {
			plugin(this);
			return this;
		}
		request(_req, _init, context) {
			return this["~request"](toRequest(_req, _init), context);
		}
		mount(base, input) {
			base = !base || base === "/" ? "" : normalizeRoute(base).replace(/\/$/, "");
			if ("handler" in input) {
				if (input["~middleware"].length > 0) {
					this["~middleware"].push((event, next) => {
						const originalPathname = event.url.pathname;
						if (!originalPathname.startsWith(base) || originalPathname.length > base.length && originalPathname[base.length] !== "/") return next();
						if (hasEmptySegmentAfterBase(originalPathname, base)) throw new HTTPError({ status: 404 });
						event.url.pathname = stripBase(originalPathname, base);
						const restore = () => {
							event.url.pathname = originalPathname;
						};
						try {
							const result = (input["~composed"] ??= composeMiddleware(input["~middleware"]))(event, () => {
								restore();
								return next();
							});
							if (typeof result?.then === "function") return Promise.resolve(result).finally(restore);
							restore();
							return result;
						} catch (err) {
							restore();
							throw err;
						}
					});
					this["~dispatch"] = this["~composed"] = void 0;
				}
				for (const r of input["~routes"]) this["~addRoute"]({
					...r,
					route: base + r.route
				});
			} else {
				const fetchHandler = "fetch" in input ? input.fetch : input;
				this.all(`${base}/**`, function _mountedMiddleware(event) {
					if (hasEmptySegmentAfterBase(event.url.pathname, base)) throw new HTTPError({ status: 404 });
					return fetchHandler(requestWithBaseURL(event.req, base, { url: event.url }));
				});
			}
			return this;
		}
		on(method, route, handler, opts) {
			const _method = (method || "").toUpperCase();
			route = normalizeRoute(route);
			this["~addRoute"]({
				method: _method,
				route,
				handler: toEventHandler(handler),
				middleware: opts?.middleware,
				meta: {
					...handler.meta,
					...opts?.meta
				}
			});
			return this;
		}
		all(route, handler, opts) {
			return this.on("", route, handler, opts);
		}
		"~findRoute"(_event) {
			const match = findRoute(this["~rou3"], _event.req.method, _event.url.pathname);
			if (match === void 0 && _event.req.method === "HEAD") return findRoute(this["~rou3"], "GET", _event.url.pathname);
			return match;
		}
		"~addRoute"(_route) {
			addRoute(this["~rou3"], _route.method, _route.route, _route);
			super["~addRoute"](_route);
		}
		use(arg1, arg2, arg3) {
			let route;
			let fn;
			let opts;
			if (typeof arg1 === "string") {
				route = arg1;
				fn = arg2;
				opts = arg3;
			} else {
				fn = arg1;
				opts = arg2;
			}
			if (typeof fn !== "function" && "handler" in fn) return this.mount(route || "", fn);
			this["~middleware"].push(normalizeMiddleware(fn, {
				...opts,
				route
			}));
			this["~dispatch"] = this["~composed"] = void 0;
			return this;
		}
	}
	for (const method of [
		"GET",
		"POST",
		"PUT",
		"DELETE",
		"PATCH",
		"HEAD",
		"OPTIONS",
		"CONNECT",
		"TRACE",
		"QUERY"
	]) H3Core.prototype[method.toLowerCase()] = function(route, handler, opts) {
		return this.on(method, route, handler, opts);
	};
	return H3;
})();
var textEncoder = /* @__PURE__ */ new TextEncoder();
function serializeIterableValue(value) {
	switch (typeof value) {
		case "string": return textEncoder.encode(value);
		case "boolean":
		case "number":
		case "bigint":
		case "symbol": return textEncoder.encode(value.toString());
		case "object":
			if (value instanceof Uint8Array) return value;
			return textEncoder.encode(JSON.stringify(value));
	}
	return /* @__PURE__ */ new Uint8Array();
}
function coerceIterable(iterable) {
	if (typeof iterable === "function") iterable = iterable();
	if (Symbol.iterator in iterable) return iterable[Symbol.iterator]();
	if (Symbol.asyncIterator in iterable) return iterable[Symbol.asyncIterator]();
	return iterable;
}
function redirect(location, status = 302, statusText) {
	return new HTTPResponse(`<html><head><meta http-equiv="refresh" content="0; url=${escapeHtml(location)}" /></head></html>`, {
		status,
		statusText: statusText ?? STATUS_TEXT[status],
		headers: {
			"content-type": "text/html; charset=utf-8",
			location
		}
	});
}
async function iterable(iterable, options) {
	const serializer = options?.serializer ?? serializeIterableValue;
	const iterator = coerceIterable(iterable);
	let first = await iterator.next();
	return new HTTPResponse(new ReadableStream({
		async pull(controller) {
			const { value, done } = first ?? await iterator.next();
			first = void 0;
			if (value !== void 0) {
				const chunk = serializer(value);
				if (chunk !== void 0) controller.enqueue(chunk);
			}
			if (done) controller.close();
		},
		cancel() {
			iterator.return?.();
		}
	}));
}
var STATUS_TEXT = {
	204: "No Content",
	301: "Moved Permanently",
	302: "Found",
	303: "See Other",
	307: "Temporary Redirect",
	308: "Permanent Redirect"
};
var HTML_ESCAPES = {
	"&": "&amp;",
	"\"": "&quot;",
	"'": "&#39;",
	"<": "&lt;",
	">": "&gt;"
};
function escapeHtml(str) {
	return str.replace(/[&"'<>]/g, (c) => HTML_ESCAPES[c]);
}
var COOKIE_MAX_AGE_LIMIT$1 = 3456e4;
function endIndex(str, min, len) {
	const index = str.indexOf(";", min);
	return index === -1 ? len : index;
}
function eqIndex(str, min, max) {
	const index = str.indexOf("=", min);
	return index < max ? index : -1;
}
function valueSlice(str, min, max) {
	if (min === max) return "";
	let start = min;
	let end = max;
	do {
		const code = str.charCodeAt(start);
		if (code !== 32 && code !== 9) break;
	} while (++start < end);
	while (end > start) {
		const code = str.charCodeAt(end - 1);
		if (code !== 32 && code !== 9) break;
		end--;
	}
	return str.slice(start, end);
}
var NullObject = /* @__PURE__ */ (() => {
	const C = function() {};
	C.prototype = Object.create(null);
	return C;
})();
function parse(str, options) {
	const obj = new NullObject();
	const len = str.length;
	if (len < 2) return obj;
	const dec = options?.decode || decode;
	const allowMultiple = options?.allowMultiple || false;
	let index = 0;
	do {
		const eqIdx = eqIndex(str, index, len);
		if (eqIdx === -1) break;
		const endIdx = endIndex(str, index, len);
		if (eqIdx > endIdx) {
			index = str.lastIndexOf(";", eqIdx - 1) + 1;
			continue;
		}
		const key = valueSlice(str, index, eqIdx);
		if (options?.filter && !options.filter(key)) {
			index = endIdx + 1;
			continue;
		}
		const val = dec(valueSlice(str, eqIdx + 1, endIdx));
		if (allowMultiple) {
			const existing = obj[key];
			if (existing === void 0) obj[key] = val;
			else if (Array.isArray(existing)) existing.push(val);
			else obj[key] = [existing, val];
		} else if (obj[key] === void 0) obj[key] = val;
		index = endIdx + 1;
	} while (index < len);
	return obj;
}
function decode(str) {
	if (!str.includes("%")) return str;
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}
var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
var pathValueRegExp = /^[\u0020-\u003A\u003C-\u007E]*$/;
var __toString = Object.prototype.toString;
function serialize(_a0, _a1, _a2) {
	const isObj = typeof _a0 === "object" && _a0 !== null;
	const options = isObj ? _a1 : _a2;
	const stringify = options?.stringify || JSON.stringify;
	const cookie = isObj ? _a0 : {
		..._a2,
		name: _a0,
		value: _a1 == void 0 ? "" : typeof _a1 === "string" ? _a1 : stringify(_a1)
	};
	const enc = options?.encode || encodeURIComponent;
	if (!cookieNameRegExp.test(cookie.name)) throw new TypeError(`argument name is invalid: ${cookie.name}`);
	const value = cookie.value ? enc(cookie.value) : "";
	if (!cookieValueRegExp.test(value)) throw new TypeError(`argument val is invalid: ${cookie.value}`);
	if (!cookie.secure) {
		if (cookie.partitioned) throw new TypeError(`Partitioned cookies must have the Secure attribute`);
		if (cookie.sameSite && String(cookie.sameSite).toLowerCase() === "none") throw new TypeError(`SameSite=None cookies must have the Secure attribute`);
		if (cookie.name.length > 9 && cookie.name.charCodeAt(0) === 95 && cookie.name.charCodeAt(1) === 95) {
			const nameLower = cookie.name.toLowerCase();
			if (nameLower.startsWith("__secure-") || nameLower.startsWith("__host-")) throw new TypeError(`${cookie.name} cookies must have the Secure attribute`);
		}
	}
	if (cookie.name.length > 7 && cookie.name.charCodeAt(0) === 95 && cookie.name.charCodeAt(1) === 95 && cookie.name.toLowerCase().startsWith("__host-")) {
		if (cookie.path !== "/") throw new TypeError(`__Host- cookies must have Path=/`);
		if (cookie.domain) throw new TypeError(`__Host- cookies must not have a Domain attribute`);
	}
	let str = cookie.name + "=" + value;
	if (cookie.maxAge !== void 0) {
		if (!Number.isInteger(cookie.maxAge)) throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
		str += "; Max-Age=" + Math.max(0, Math.min(cookie.maxAge, COOKIE_MAX_AGE_LIMIT$1));
	}
	if (cookie.domain) {
		if (!domainValueRegExp.test(cookie.domain)) throw new TypeError(`option domain is invalid: ${cookie.domain}`);
		str += "; Domain=" + cookie.domain;
	}
	if (cookie.path) {
		if (!pathValueRegExp.test(cookie.path)) throw new TypeError(`option path is invalid: ${cookie.path}`);
		str += "; Path=" + cookie.path;
	}
	if (cookie.expires) {
		if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) throw new TypeError(`option expires is invalid: ${cookie.expires}`);
		str += "; Expires=" + cookie.expires.toUTCString();
	}
	if (cookie.httpOnly) str += "; HttpOnly";
	if (cookie.secure) str += "; Secure";
	if (cookie.partitioned) str += "; Partitioned";
	if (cookie.priority) switch (typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0) {
		case "low":
			str += "; Priority=Low";
			break;
		case "medium":
			str += "; Priority=Medium";
			break;
		case "high":
			str += "; Priority=High";
			break;
		default: throw new TypeError(`option priority is invalid: ${cookie.priority}`);
	}
	if (cookie.sameSite) switch (typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite) {
		case true:
		case "strict":
			str += "; SameSite=Strict";
			break;
		case "lax":
			str += "; SameSite=Lax";
			break;
		case "none":
			str += "; SameSite=None";
			break;
		default: throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
	}
	return str;
}
function isDate(val) {
	return __toString.call(val) === "[object Date]";
}
var maxAgeRegExp$1 = /^-?\d+$/;
var _nullProto$1 = /* @__PURE__ */ Object.getPrototypeOf({});
function parseSetCookie$1(str, options) {
	const len = str.length;
	let _endIdx = len;
	let eqIdx = -1;
	for (let i = 0; i < len; i++) {
		const c = str.charCodeAt(i);
		if (c === 59) {
			_endIdx = i;
			break;
		}
		if (c === 61 && eqIdx === -1) eqIdx = i;
	}
	if (eqIdx >= _endIdx) eqIdx = -1;
	const name = eqIdx === -1 ? "" : _trim$1(str, 0, eqIdx);
	if (name && name in _nullProto$1) return void 0;
	let value = eqIdx === -1 ? _trim$1(str, 0, _endIdx) : _trim$1(str, eqIdx + 1, _endIdx);
	if (!name && !value) return void 0;
	if (name.length + value.length > 4096) return void 0;
	if (options?.decode !== false) value = _decode$1(value, options?.decode);
	const setCookie = {
		name,
		value
	};
	let index = _endIdx + 1;
	while (index < len) {
		let endIdx = len;
		let attrEqIdx = -1;
		for (let i = index; i < len; i++) {
			const c = str.charCodeAt(i);
			if (c === 59) {
				endIdx = i;
				break;
			}
			if (c === 61 && attrEqIdx === -1) attrEqIdx = i;
		}
		if (attrEqIdx >= endIdx) attrEqIdx = -1;
		const attr = attrEqIdx === -1 ? _trim$1(str, index, endIdx) : _trim$1(str, index, attrEqIdx);
		const val = attrEqIdx === -1 ? void 0 : _trim$1(str, attrEqIdx + 1, endIdx);
		if (val === void 0 || val.length <= 1024) switch (attr.toLowerCase()) {
			case "httponly":
				setCookie.httpOnly = true;
				break;
			case "secure":
				setCookie.secure = true;
				break;
			case "partitioned":
				setCookie.partitioned = true;
				break;
			case "domain":
				if (val) setCookie.domain = (val.charCodeAt(0) === 46 ? val.slice(1) : val).toLowerCase();
				break;
			case "path":
				setCookie.path = val;
				break;
			case "max-age":
				if (val && maxAgeRegExp$1.test(val)) setCookie.maxAge = Math.min(Number(val), COOKIE_MAX_AGE_LIMIT$1);
				break;
			case "expires": {
				if (!val) break;
				const date = new Date(val);
				if (Number.isFinite(date.valueOf())) {
					const maxDate = new Date(Date.now() + COOKIE_MAX_AGE_LIMIT$1 * 1e3);
					setCookie.expires = date > maxDate ? maxDate : date;
				}
				break;
			}
			case "priority": {
				if (!val) break;
				const priority = val.toLowerCase();
				if (priority === "low" || priority === "medium" || priority === "high") setCookie.priority = priority;
				break;
			}
			case "samesite": {
				if (!val) break;
				const sameSite = val.toLowerCase();
				if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") setCookie.sameSite = sameSite;
				else setCookie.sameSite = "lax";
				break;
			}
			default: {
				const attrLower = attr.toLowerCase();
				if (attrLower && !(attrLower in _nullProto$1)) setCookie[attrLower] = val;
			}
		}
		index = endIdx + 1;
	}
	return setCookie;
}
function _trim$1(str, start, end) {
	if (start === end) return "";
	let s = start;
	let e = end;
	while (s < e && (str.charCodeAt(s) === 32 || str.charCodeAt(s) === 9)) s++;
	while (e > s && (str.charCodeAt(e - 1) === 32 || str.charCodeAt(e - 1) === 9)) e--;
	return str.slice(s, e);
}
function _decode$1(value, decode) {
	if (!decode && !value.includes("%")) return value;
	try {
		return (decode || decodeURIComponent)(value);
	} catch {
		return value;
	}
}
function parseCookies(event) {
	return parse(event.req.headers.get("cookie") || "");
}
function getCookie(event, name) {
	return parseCookies(event)[name];
}
function setCookie(event, name, value, options) {
	const { encode, stringify, ...attrs } = options ?? {};
	const newCookie = serialize({
		name,
		value,
		path: "/",
		...attrs
	}, {
		encode,
		stringify
	});
	const currentCookies = event.res.headers.getSetCookie();
	if (currentCookies.length === 0) {
		event.res.headers.set("set-cookie", newCookie);
		return;
	}
	const namePrefix = `${name}=`;
	if (!currentCookies.some((cookie) => cookie.startsWith(namePrefix))) {
		event.res.headers.append("set-cookie", newCookie);
		return;
	}
	const newCookieKey = _getDistinctCookieKey(name, options || {});
	event.res.headers.delete("set-cookie");
	for (const cookie of currentCookies) {
		const parsed = parseSetCookie$1(cookie);
		if (parsed ? _getDistinctCookieKey(cookie.split("=")?.[0], parsed) === newCookieKey : cookie.startsWith(namePrefix)) continue;
		event.res.headers.append("set-cookie", cookie);
	}
	event.res.headers.append("set-cookie", newCookie);
}
function _getDistinctCookieKey(name, options) {
	return [
		name,
		(options.domain || "").replace(/^\./, "").toLowerCase(),
		options.path || "/",
		options.partitioned ? "1" : "0"
	].join(";");
}
var FETCH_EVENT_CONTEXT = "solidFetchEvent";
function createFetchEvent(event) {
	return {
		request: event.req,
		response: event.res,
		clientAddress: getRequestIP(event),
		locals: {},
		nativeEvent: event
	};
}
function getFetchEvent(h3Event) {
	if (!h3Event.context[FETCH_EVENT_CONTEXT]) {
		const fetchEvent = createFetchEvent(h3Event);
		h3Event.context[FETCH_EVENT_CONTEXT] = fetchEvent;
	}
	return h3Event.context[FETCH_EVENT_CONTEXT];
}
function mergeResponseHeaders(h3Event, headers) {
	for (const [key, value] of headers.entries()) h3Event.res.headers.append(key, value);
}
/**
* Wrap an h3 event handler so Solid's request context is available while it runs.
*
* @experimental
*/
var decorateHandler = (fn) => (event) => provideRequestEvent(getFetchEvent(event), () => fn(event));
/**
* Wrap h3 middleware so Solid's request context is available while it runs.
*
* @experimental
*/
var decorateMiddleware = (fn) => (event, next) => provideRequestEvent(getFetchEvent(event), () => fn(event, next));
var _solid_start_middleware_default = {};
var solid_start_routes_default = [{
	"page": true,
	"$component": {
		"src": "src\\routes\\index.tsx?pick=default&pick=$css&lang.tsx",
		"build": () => import("./index-BwWuEd1L.mjs"),
		"import": () => import("./index-BwWuEd1L.mjs")
	},
	"path": "/"
}];
var pageRoutes = defineRoutes(solid_start_routes_default.filter((o) => o.page));
function defineRoutes(fileRoutes) {
	function processRoute(routes, route, id, full) {
		const parentRoute = Object.values(routes).find((o) => {
			return id.startsWith(o.id + "/");
		});
		if (!parentRoute) {
			routes.push({
				...route,
				id,
				path: id.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/")
			});
			return routes;
		}
		processRoute(parentRoute.children || (parentRoute.children = []), route, id.slice(parentRoute.id.length), full);
		return routes;
	}
	return fileRoutes.sort((a, b) => a.path.length - b.path.length).reduce((prevRoutes, route) => {
		return processRoute(prevRoutes, route, route.path, route.path);
	}, []);
}
var router = createRouter$1({ routes: solid_start_routes_default.reduce((memo, route) => {
	if (!containsHTTP(route)) return memo;
	const path = route.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (_, m) => `**:${m}`).split("/").map((s) => s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s)).join("/");
	if (/:[^/]*\?/g.test(path)) throw new Error(`Optional parameters are not supported in API routes: ${path}`);
	if (memo[path]) throw new Error(`Duplicate API routes for "${path}" found at "${memo[path].route.path}" and "${route.path}"`);
	memo[path] = { route };
	return memo;
}, {}) });
function containsHTTP(route) {
	return route["$HEAD"] || route["$GET"] || route["$POST"] || route["$PUT"] || route["$PATCH"] || route["$DELETE"];
}
function matchAPIRoute(path, method) {
	const match = router.lookup(path);
	if (match && match.route) {
		const route = match.route;
		const handler = method === "HEAD" ? route.$HEAD || route.$GET : route[`$${method}`];
		if (handler === void 0) return;
		const isPage = route.page === true && route.$component !== void 0;
		return {
			handler,
			params: match.params,
			isPage
		};
	}
}
var components = {};
function createRoutes() {
	function createRoute(route) {
		const component = route.$component && (components[route.$component.src] ??= lazy$1(route.$component.import));
		return {
			...route,
			...route.$$route ? route.$$route.require().route : void 0,
			info: {
				...route.$$route ? route.$$route.require().route.info : {},
				filesystem: true
			},
			component,
			children: route.children ? route.children.map(createRoute) : void 0
		};
	}
	return pageRoutes.map(createRoute);
}
var COOKIE_MAX_AGE_LIMIT = 3456e4;
var maxAgeRegExp = /^-?\d+$/;
var _nullProto = /* @__PURE__ */ Object.getPrototypeOf({});
function parseSetCookie(str, options) {
	const len = str.length;
	let _endIdx = len;
	let eqIdx = -1;
	for (let i = 0; i < len; i++) {
		const c = str.charCodeAt(i);
		if (c === 59) {
			_endIdx = i;
			break;
		}
		if (c === 61 && eqIdx === -1) eqIdx = i;
	}
	if (eqIdx >= _endIdx) eqIdx = -1;
	const name = eqIdx === -1 ? "" : _trim(str, 0, eqIdx);
	if (name && name in _nullProto) return void 0;
	let value = eqIdx === -1 ? _trim(str, 0, _endIdx) : _trim(str, eqIdx + 1, _endIdx);
	if (!name && !value) return void 0;
	if (name.length + value.length > 4096) return void 0;
	if (options?.decode !== false) value = _decode(value, options?.decode);
	const setCookie = {
		name,
		value
	};
	let index = _endIdx + 1;
	while (index < len) {
		let endIdx = len;
		let attrEqIdx = -1;
		for (let i = index; i < len; i++) {
			const c = str.charCodeAt(i);
			if (c === 59) {
				endIdx = i;
				break;
			}
			if (c === 61 && attrEqIdx === -1) attrEqIdx = i;
		}
		if (attrEqIdx >= endIdx) attrEqIdx = -1;
		const attr = attrEqIdx === -1 ? _trim(str, index, endIdx) : _trim(str, index, attrEqIdx);
		const val = attrEqIdx === -1 ? void 0 : _trim(str, attrEqIdx + 1, endIdx);
		if (val === void 0 || val.length <= 1024) switch (attr.toLowerCase()) {
			case "httponly":
				setCookie.httpOnly = true;
				break;
			case "secure":
				setCookie.secure = true;
				break;
			case "partitioned":
				setCookie.partitioned = true;
				break;
			case "domain":
				if (val) setCookie.domain = (val.charCodeAt(0) === 46 ? val.slice(1) : val).toLowerCase();
				break;
			case "path":
				setCookie.path = val;
				break;
			case "max-age":
				if (val && maxAgeRegExp.test(val)) setCookie.maxAge = Math.min(Number(val), COOKIE_MAX_AGE_LIMIT);
				break;
			case "expires": {
				if (!val) break;
				const date = new Date(val);
				if (Number.isFinite(date.valueOf())) {
					const maxDate = new Date(Date.now() + COOKIE_MAX_AGE_LIMIT * 1e3);
					setCookie.expires = date > maxDate ? maxDate : date;
				}
				break;
			}
			case "priority": {
				if (!val) break;
				const priority = val.toLowerCase();
				if (priority === "low" || priority === "medium" || priority === "high") setCookie.priority = priority;
				break;
			}
			case "samesite": {
				if (!val) break;
				const sameSite = val.toLowerCase();
				if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") setCookie.sameSite = sameSite;
				else setCookie.sameSite = "lax";
				break;
			}
			default: {
				const attrLower = attr.toLowerCase();
				if (attrLower && !(attrLower in _nullProto)) setCookie[attrLower] = val;
			}
		}
		index = endIdx + 1;
	}
	return setCookie;
}
function _trim(str, start, end) {
	if (start === end) return "";
	let s = start;
	let e = end;
	while (s < e && (str.charCodeAt(s) === 32 || str.charCodeAt(s) === 9)) s++;
	while (e > s && (str.charCodeAt(e - 1) === 32 || str.charCodeAt(e - 1) === 9)) e--;
	return str.slice(s, e);
}
function _decode(value, decode) {
	if (!decode && !value.includes("%")) return value;
	try {
		return (decode || decodeURIComponent)(value);
	} catch {
		return value;
	}
}
var REGISTRATIONS = /* @__PURE__ */ new Map();
function getServerFunction(id) {
	const fn = REGISTRATIONS.get(id);
	if (fn) return fn;
	throw new Error("invalid server function: " + id);
}
async function applyServerFunctionErrorHandler(thrown) {
	try {
		return await void 0 ?? thrown;
	} catch {
		return thrown;
	}
}
var validRedirectStatuses = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]);
function getExpectedRedirectStatus(response) {
	if (response.status && validRedirectStatuses.has(response.status)) return response.status;
	return 302;
}
async function handleServerFunction(h3Event) {
	const event = getFetchEvent(h3Event);
	const request = event.request;
	const serverReference = request.headers.get("X-Server-Id");
	const instance = request.headers.get("X-Server-Instance");
	const singleFlight = request.headers.has("X-Single-Flight");
	const url = new URL(request.url);
	let functionId;
	if (serverReference) [functionId] = serverReference.split("#");
	else {
		functionId = url.searchParams.get("id");
		if (!functionId) return new Response(null, { status: 404 });
	}
	const serverFunction = getServerFunction(functionId);
	let parsed = [];
	if (!instance || request.method === "GET") {
		const args = url.searchParams.get("args");
		if (args) {
			const result = await deserializeFromJSONString(args);
			for (const arg of result) parsed.push(arg);
		}
	}
	if (request.method === "POST" && request.body !== null) {
		const bodyFormat = request.headers.get(BODY_FORMAT_KEY);
		const decoded = await extractBody("", false, request.clone());
		if (bodyFormat === BodyFormat.Seroval) parsed = decoded;
		else parsed.push(decoded);
	}
	try {
		let result = await provideRequestEvent(event, async () => {
			sharedConfig.context = { event };
			event.locals.serverFunctionMeta = { id: functionId };
			return serverFunction(...parsed);
		});
		if (singleFlight && instance) result = await handleSingleFlight(event, result);
		if (result instanceof Response) {
			if (result.headers && result.headers.has("X-Content-Raw")) return result;
			if (instance) {
				if (result.headers) mergeResponseHeaders(h3Event, result.headers);
				if (result.status && (result.status < 300 || result.status >= 400)) h3Event.res.status = result.status;
				if (result.customBody) result = await result.customBody();
				else if (result.body == null) result = null;
			}
		}
		if (!instance) return await handleNoJS(result, request, parsed);
		const body = getHeadersAndBody(result);
		if (body) return new Response(body.body, { headers: body.headers });
		h3Event.res.headers.set(BODY_FORMAT_KEY, BodyFormat.Seroval);
		h3Event.res.headers.set("content-type", "text/plain; charset=utf-8");
		return serializeToJSONStream(result);
	} catch (x) {
		x = await applyServerFunctionErrorHandler(x);
		if (x instanceof Response) {
			if (singleFlight && instance) x = await handleSingleFlight(event, x);
			if (x.headers) mergeResponseHeaders(h3Event, x.headers);
			if (x.status && (!instance || x.status < 300 || x.status >= 400)) h3Event.res.status = x.status;
			if (x.customBody) x = await x.customBody();
			else if (x.body == null) x = null;
			h3Event.res.headers.set("X-Error", "true");
		} else if (instance) {
			const error = x instanceof Error ? x.message : typeof x === "string" ? x : "true";
			h3Event.res.headers.set("X-Error", toHeaderValue(error));
		} else x = await handleNoJS(x, request, parsed, true);
		if (instance) {
			const body = getHeadersAndBody(x);
			if (body) {
				const headers = new Headers(body.headers);
				const errorHeader = h3Event.res.headers.get("X-Error");
				if (errorHeader !== null) headers.set("X-Error", errorHeader);
				return new Response(body.body, { headers });
			}
			h3Event.res.headers.set(BODY_FORMAT_KEY, BodyFormat.Seroval);
			h3Event.res.headers.set("content-type", "text/plain; charset=utf-8");
			return serializeToJSONStream(x);
		}
		return x;
	}
}
function toHeaderValue(value) {
	const stripped = value.replace(/[\r\n]+/g, "");
	try {
		return /[^\x00-\xFF]/.test(stripped) ? encodeURIComponent(stripped) : stripped;
	} catch {
		return "true";
	}
}
function getRefererLocation(request, url) {
	const referer = request.headers.get("referer");
	try {
		if (referer) return new URL(referer).toString();
	} catch {}
	return new URL("/Vithuran-Sadagopan/", url.origin).toString();
}
async function handleNoJS(result, request, parsed, thrown) {
	const url = new URL(request.url);
	const isError = result instanceof Error;
	let statusCode = 302;
	let headers;
	if (result instanceof Response) {
		headers = new Headers(result.headers);
		if (result.headers.has("Location")) {
			headers.set(`Location`, new URL(result.headers.get("Location"), url.origin + "/Vithuran-Sadagopan/").toString());
			statusCode = getExpectedRedirectStatus(result);
		} else headers.set("Location", getRefererLocation(request, url));
		headers.delete("Content-Type");
		result = result.customBody ? await result.customBody() : null;
	} else headers = new Headers({ Location: getRefererLocation(request, url) });
	if (result) headers.append("Set-Cookie", `flash=${encodeURIComponent(JSON.stringify({
		url: url.pathname + url.search,
		result: isError ? result.message : result,
		thrown,
		error: isError,
		input: parsed.length ? [...parsed.slice(0, -1), [...parsed[parsed.length - 1].entries()]] : []
	}))}; Secure; HttpOnly;`);
	return new Response(null, {
		status: statusCode,
		headers
	});
}
var App;
function createSingleFlightHeaders(sourceEvent, result) {
	const headers = new Headers(sourceEvent.request.headers);
	const cookies = parseCookies(sourceEvent.nativeEvent);
	const SetCookies = sourceEvent.response.headers.getSetCookie();
	if (result instanceof Response) SetCookies.push(...result.headers.getSetCookie());
	headers.delete("cookie");
	SetCookies.forEach((cookie) => {
		if (!cookie) return;
		const parsed = parseSetCookie(cookie);
		if (!parsed) return;
		const { maxAge, expires, name, value } = parsed;
		if (maxAge != null && maxAge <= 0) {
			delete cookies[name];
			return;
		}
		if (expires != null && expires.getTime() <= Date.now()) {
			delete cookies[name];
			return;
		}
		cookies[name] = value;
	});
	Object.entries(cookies).forEach(([key, value]) => {
		headers.append("cookie", `${key}=${value}`);
	});
	return headers;
}
async function handleSingleFlight(sourceEvent, result) {
	let revalidate;
	let url = new URL(sourceEvent.request.headers.get("referer")).toString();
	if (result instanceof Response) {
		if (result.headers.has("X-Revalidate")) revalidate = result.headers.get("X-Revalidate").split(",");
		if (result.headers.has("Location")) url = new URL(result.headers.get("Location"), new URL(sourceEvent.request.url).origin + "/Vithuran-Sadagopan/").toString();
	}
	const event = { ...sourceEvent };
	event.request = new Request(url, { headers: createSingleFlightHeaders(sourceEvent, result) });
	return await provideRequestEvent(event, async () => {
		await createPageEvent(event);
		App || (App = (await Promise.resolve().then(() => app_exports)).default);
		event.router.dataOnly = revalidate || true;
		event.router.previousUrl = sourceEvent.request.headers.get("referer");
		try {
			renderToString(() => {
				sharedConfig.context.event = event;
				App();
			});
		} catch (e) {
			console.log(e);
		}
		const body = event.router.data;
		if (!body) return result;
		let containsKey = false;
		for (const key in body) if (body[key] === void 0) delete body[key];
		else containsKey = true;
		if (!containsKey) return result;
		if (!(result instanceof Response)) {
			body["_$value"] = result;
			result = new Response(null, { status: 200 });
		} else if (result.customBody) body["_$value"] = result.customBody();
		result.customBody = () => body;
		result.headers.set("X-Single-Flight", "true");
		return result;
	});
}
/** Convert Solid's streaming SSR result into a cancellation-safe web stream. */
function toWebReadableStream(stream) {
	const encoder = new TextEncoder();
	let active = true;
	return new ReadableStream({
		start(controller) {
			stream.pipe({
				write(payload) {
					if (!active) return;
					controller.enqueue(encoder.encode(payload));
				},
				end() {
					if (!active) return;
					active = false;
					controller.close();
				}
			});
		},
		cancel() {
			active = false;
		}
	});
}
function stripPathBase(path, base) {
	if (!base || base === "/") return path;
	const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
	if (path === normalizedBase) return "/";
	if (path.startsWith(`${normalizedBase}/`)) return path.slice(normalizedBase.length);
	return path;
}
var SERVER_FN_BASE = "/_server";
function createBaseHandler(createPageEvent, fn, options = {}, routerLoad) {
	const handler = defineHandler({
		middleware: _solid_start_middleware_default.length ? _solid_start_middleware_default.map(decorateMiddleware) : void 0,
		handler: decorateHandler(async (e) => {
			const event = getRequestEvent();
			const pathname = stripBaseUrl(new URL(event.request.url).pathname);
			if (pathname.startsWith(SERVER_FN_BASE)) return await handleServerFunction(e);
			const match = matchAPIRoute(pathname, event.request.method);
			if (match) {
				const mod = await match.handler.import();
				const fn = event.request.method === "HEAD" ? mod["HEAD"] || mod["GET"] : mod[event.request.method];
				if (typeof fn === "function") {
					event.params = match.params || {};
					sharedConfig.context = { event };
					const res = await fn(event);
					if (res !== void 0) return res;
					if (event.request.method !== "GET") throw new Error(`API handler for ${event.request.method} "${event.request.url}" did not return a response.`);
					if (!match.isPage) return;
				}
			}
			if (routerLoad) await routerLoad(event);
			const context = await createPageEvent(event);
			const resolvedOptions = typeof options === "function" ? await options(context) : { ...options };
			const mode = resolvedOptions.mode || "stream";
			if (resolvedOptions.nonce) context.nonce = resolvedOptions.nonce;
			if (mode === "sync" || false) {
				const html = renderToString(() => {
					sharedConfig.context.event = context;
					return fn(context);
				}, resolvedOptions);
				context.complete = true;
				if (context.response && context.response.headers.get("Location")) {
					const status = getExpectedRedirectStatus(context.response);
					return redirect(context.response.headers.get("Location"), status);
				}
				event.response.headers.set("content-type", "text/html");
				return html;
			}
			if (resolvedOptions.onCompleteAll) {
				const og = resolvedOptions.onCompleteAll;
				resolvedOptions.onCompleteAll = (options) => {
					handleStreamCompleteRedirect(context)(options);
					og(options);
				};
			} else resolvedOptions.onCompleteAll = handleStreamCompleteRedirect(context);
			if (resolvedOptions.onCompleteShell) {
				const og = resolvedOptions.onCompleteShell;
				resolvedOptions.onCompleteShell = (options) => {
					handleShellCompleteRedirect(context, e)();
					og(options);
				};
			} else resolvedOptions.onCompleteShell = handleShellCompleteRedirect(context, e);
			const stream = renderToStream(() => {
				sharedConfig.context.event = context;
				return fn(context);
			}, resolvedOptions);
			if (context.response && context.response.headers.get("Location")) {
				const status = getExpectedRedirectStatus(context.response);
				return redirect(context.response.headers.get("Location"), status);
			}
			if (mode === "async") return await stream;
			return iterable(toWebReadableStream(stream));
		})
	});
	const app = new H3();
	app.use(handler);
	return app;
}
function createHandler(fn, options = {}, routerLoad) {
	return createBaseHandler(createPageEvent, fn, options, routerLoad);
}
async function createPageEvent(ctx) {
	ctx.response.headers.set("Content-Type", "text/html");
	const manifest = getSsrManifest("client");
	const assets = [
		...await manifest.getAssets("style.css"),
		...await manifest.getAssets("./src/entry-client.tsx"),
		...await manifest.getAssets("C:\\Users\\Vithuran\\Documents\\Github\\Vithuran-Sadagopan\\src\\app.tsx")
	];
	return Object.assign(ctx, {
		assets,
		router: { submission: initFromFlash(ctx) },
		routes: createRoutes(),
		complete: false,
		$islands: /* @__PURE__ */ new Set()
	});
}
function initFromFlash(ctx) {
	const flash = getCookie(ctx.nativeEvent, "flash");
	if (!flash) return;
	try {
		const param = JSON.parse(flash);
		if (!param || !param.result) return;
		const input = [...param.input.slice(0, -1), new Map(param.input[param.input.length - 1])];
		const result = param.error ? new Error(param.result) : param.result;
		return {
			input,
			url: param.url,
			pending: false,
			result: param.thrown ? void 0 : result,
			error: param.thrown ? result : void 0
		};
	} catch (e) {
		console.error(e);
	} finally {
		setCookie(ctx.nativeEvent, "flash", "", { maxAge: 0 });
	}
}
function handleShellCompleteRedirect(context, e) {
	return () => {
		if (context.response && context.response.headers.get("Location")) {
			const status = getExpectedRedirectStatus(context.response);
			e.res.status = status;
			e.res.headers.set("Location", context.response.headers.get("Location"));
		}
	};
}
function handleStreamCompleteRedirect(context) {
	return ({ write }) => {
		context.complete = true;
		const to = context.response && context.response.headers.get("Location");
		if (!to) return;
		write(`<script${context.nonce ? ` nonce="${escapeAttribute(context.nonce)}"` : ""}>window.location=${JSON.stringify(to).replace(/</g, "\\u003c")}<\/script>`);
	};
}
function escapeAttribute(value) {
	return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}
function stripBaseUrl(path) {
	return stripPathBase(path, "/Vithuran-Sadagopan/");
}
/**
* Checks if user has set a redirect status in the response.
* If not, falls back to the 302 (temporary redirect)
*/
var _tmpl$ = ["<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg?v=9\">", "</head>"];
var _tmpl$2 = [
	"<html",
	" lang=\"en\">",
	"<body><div id=\"root\">",
	"</div><!--$-->",
	"<!--/--></body></html>"
];
var entry_server_default = createHandler(() => createComponent(StartServer, { document: ({ assets, children, scripts }) => ssr(_tmpl$2, ssrHydrationKey(), createComponent(NoHydration, { get children() {
	return ssr(_tmpl$, escape(assets));
} }), escape(children), escape(scripts)) }));
//#endregion
export { ArchivePage, Contact, Experience, Hero, Horizons, Portfolio, Skills, entry_server_default as default, footerContent, navContent, ssr_exports };
