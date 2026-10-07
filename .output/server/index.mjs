globalThis.__nitro_main__ = import.meta.url;
import { NodeResponse$1 as NodeResponse, serve } from "./_libs/srvx.mjs";
import { H3Core, HTTPError, composeMiddleware, createMatcherFromFind, defineHandler, defineLazyEventHandler, headers, memoizeRouteRulesMatcher, toEventHandler } from "./_libs/h3+rou3+srvx.mjs";
import { HookableCore } from "./_libs/hookable.mjs";
import { decodePath, joinURL, withLeadingSlash, withoutTrailingSlash } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/email.svg": {
		"type": "image/svg+xml",
		"etag": "\"f7-ESIm83q6U5xxorZjHv9izVi8/ME\"",
		"mtime": "2026-09-20T08:08:27.280Z",
		"size": 247,
		"path": "../public/email.svg"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13bf-M4VJ6uJb+q9LUqAEgRyRPIsZFaI\"",
		"mtime": "2026-09-20T08:08:27.284Z",
		"size": 5055,
		"path": "../public/icons.svg"
	},
	"/github-logo.png": {
		"type": "image/png",
		"etag": "\"342-TUhUX/V5Ar3HtvJ++SfN5wbNtwY\"",
		"mtime": "2026-09-20T08:08:27.284Z",
		"size": 834,
		"path": "../public/github-logo.png"
	},
	"/linkedin-logo.png": {
		"type": "image/png",
		"etag": "\"229-jCvQPcFVsVsjJb6m5r17Tltq1h4\"",
		"mtime": "2026-09-20T08:08:27.286Z",
		"size": 553,
		"path": "../public/linkedin-logo.png"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"33c-kNnDMn7OIXN9SRbLN49ui7ibTBU\"",
		"mtime": "2026-09-25T08:13:55.163Z",
		"size": 828,
		"path": "../public/llms.txt"
	},
	"/phone.svg": {
		"type": "image/svg+xml",
		"etag": "\"17a-zeDUYXuE1ifyn/L8GGCDyCXlF7M\"",
		"mtime": "2026-09-20T08:08:27.286Z",
		"size": 378,
		"path": "../public/phone.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-09-25T08:13:49.131Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"285e6-OVB0neyNmSiWOIc7U3t82PdcDq8\"",
		"mtime": "2026-09-24T07:11:41.578Z",
		"size": 165350,
		"path": "../public/favicon.svg"
	},
	"/index.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"1771d-cvmiTA5ISiI2HDbWNwRkGnU0hpw\"",
		"mtime": "2026-10-07T21:02:53.666Z",
		"size": 96029,
		"path": "../public/index.html"
	},
	"/Vithuran_Sadagopan_Resume.pdf": {
		"type": "application/pdf",
		"etag": "\"d304-nKmxPI9v7XphwBZiQatFs3KW+Tk\"",
		"mtime": "2026-09-24T09:38:26.182Z",
		"size": 54020,
		"path": "../public/Vithuran_Sadagopan_Resume.pdf"
	},
	"/Single-Axis-CNC.jpg": {
		"type": "image/jpeg",
		"etag": "\"291d2-MpnSw7aHX5pHA1PhqxIRc2TrFLc\"",
		"mtime": "2026-09-20T08:08:27.154Z",
		"size": 168402,
		"path": "../public/Single-Axis-CNC.jpg"
	},
	"/_build/assets/entry-client-CSx3sOGP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5571-rZQUttbKCgTaHK/xiSLJAYl69zk\"",
		"mtime": "2026-10-07T21:02:51.692Z",
		"size": 21873,
		"path": "../public/_build/assets/entry-client-CSx3sOGP.js"
	},
	"/_build/assets/Contact-CUNcwxRq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"158fc-b+SvbNalt/yVR8IozMf1ohaBYuc\"",
		"mtime": "2026-10-07T21:02:51.693Z",
		"size": 88316,
		"path": "../public/_build/assets/Contact-CUNcwxRq.js"
	},
	"/.vite/manifest.json": {
		"type": "application/json",
		"etag": "\"29e-YqIJQMx/zIbBsxQiY42MfrROT/c\"",
		"mtime": "2026-10-07T21:02:51.695Z",
		"size": 670,
		"path": "../public/.vite/manifest.json"
	},
	"/fonts/info.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"92-VzSHwmagfkxFviML4IqmmGCBu8o\"",
		"mtime": "2026-09-20T08:08:27.282Z",
		"size": 146,
		"path": "../public/fonts/info.txt"
	},
	"/_build/assets/index-BADjBvI4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c2-nzlAGWdtQRhIdmMYewor4FW6oGE\"",
		"mtime": "2026-10-07T21:02:51.692Z",
		"size": 1986,
		"path": "../public/_build/assets/index-BADjBvI4.js"
	},
	"/fonts/Maqive-q2gn2.ttf": {
		"type": "font/ttf",
		"etag": "\"9708-Vl4iMv5R9GjB9dKm3aKYT8vG+sM\"",
		"mtime": "2026-09-20T08:08:27.282Z",
		"size": 38664,
		"path": "../public/fonts/Maqive-q2gn2.ttf"
	},
	"/_build/assets/entry-client-DsQFOrPr.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"5875-VypAYFvwjQ5dad6lFarsLcKG2jE\"",
		"mtime": "2026-10-07T21:02:51.694Z",
		"size": 22645,
		"path": "../public/_build/assets/entry-client-DsQFOrPr.css"
	},
	"/fonts/misc/Readme-2.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"5be-AVm5bxnjwbeugQql+soHYDQxY/k\"",
		"mtime": "2026-09-20T08:08:27.282Z",
		"size": 1470,
		"path": "../public/fonts/misc/Readme-2.txt"
	},
	"/GardenGnomePrototype1.jpg": {
		"type": "image/jpeg",
		"etag": "\"389bc0-oDdujZZ0ntq/ZMOofkCLOev83po\"",
		"mtime": "2026-09-20T08:08:27.037Z",
		"size": 3709888,
		"path": "../public/GardenGnomePrototype1.jpg"
	},
	"/Wearable-BioSensor.gif": {
		"type": "image/gif",
		"etag": "\"15a8f3b-irUSHQrdqIs1Viea7z1DfcaDx5o\"",
		"mtime": "2026-09-20T08:08:27.278Z",
		"size": 22712123,
		"path": "../public/Wearable-BioSensor.gif"
	},
	"/Single-Axis-CNC-prototype.gif": {
		"type": "image/gif",
		"etag": "\"1768348-oppAALD7EEe8ExbMniywCnGBjsY\"",
		"mtime": "2026-09-20T08:08:27.150Z",
		"size": 24544072,
		"path": "../public/Single-Axis-CNC-prototype.gif"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = {
		route: "/_build/assets/**",
		rank: 0,
		rules: [{
			name: "headers",
			route: "/_build/assets/**",
			handler: headers,
			options: { "cache-control": "public, max-age=31536000, immutable" }
		}]
	};
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1);
		let s = p.split("/");
		let l = s.length;
		let _w;
		if (l > 1) {
			if (s[1] === "_build") {
				if (l > 2) {
					if (s[2] === "assets") r.push(l > 3 ? {
						data: $0,
						params: {
							"0": _w = p.slice(15),
							_: _w
						}
					} : {
						data: $0,
						params: {}
					});
				}
			}
		}
		return r.reverse();
	};
})();
var _lazy_2ddd6ce18afd6e99 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_2ddd6ce18afd6e99
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => {
		event.context.routeRules = getRouteRules(event.req.method, event.url.pathname).routeRules;
		return findRoute(event.req.method, event.url.pathname);
	};
	h3App["~middleware"].push(createRouteRulesMiddleware());
	h3App["~middleware"].push(...globalMiddleware);
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
var _matchRouteRules;
function getRouteRules(method, pathname) {
	return (_matchRouteRules ??= memoizeRouteRulesMatcher(createMatcherFromFind(findRouteRules)))(method, pathname);
}
function createRouteRulesMiddleware() {
	const composed = /* @__PURE__ */ new WeakMap();
	const middleware = (event, next) => {
		const ruleMiddleware = getRouteRules(event.req.method, event.url.pathname).routeRuleMiddleware;
		if (ruleMiddleware.length === 0) return next();
		let chain = composed.get(ruleMiddleware);
		if (!chain) {
			chain = composeMiddleware(ruleMiddleware);
			composed.set(ruleMiddleware, chain);
		}
		return chain(event, next);
	};
	return markUntraced(middleware);
}
function markUntraced(middleware) {
	middleware.__traced__ = true;
	return middleware;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/runtime/internal/shutdown.mjs
function setupCloseHooks(server) {
	const closeServer = server.close.bind(server);
	let closeHooks;
	server.close = (closeActiveConnections) => closeServer(closeActiveConnections).finally(() => closeHooks ??= callCloseHooks());
}
async function callCloseHooks() {
	try {
		await useNitroHooks().callHook("close");
	} catch (error) {
		console.error("[nitro] Error while calling `close` hooks:", error);
	}
}
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
setupCloseHooks(serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
}));
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
