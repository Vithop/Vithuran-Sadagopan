import "node:http";
import { PassThrough, Readable } from "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
//#region node_modules/rou3/dist/index.mjs
var NullProtoObj = /* @__PURE__ */ (() => {
	const e = function() {};
	return e.prototype = Object.create(null), Object.freeze(e.prototype), e;
})();
function createRouter() {
	return {
		root: { key: "" },
		static: new NullProtoObj()
	};
}
var UNNAMED_GROUP_PREFIX = "__rou3_unnamed_";
var ESCAPED_GROUP_PREFIX = "__rou3_esc_";
function toUnnamedGroupKey(key) {
	return typeof key === "string" ? toGroupName(key) : `${UNNAMED_GROUP_PREFIX}${key}`;
}
function toGroupName(name) {
	return /^(?!__rou3_|_\d)[A-Za-z_]\w*$/.test(name) ? name : ESCAPED_GROUP_PREFIX + name.replace(/[_-]/g, (c) => c === "_" ? "__" : "_h");
}
function fromGroupName(key) {
	if (key.charCodeAt(0) !== 95) return key;
	if (key.startsWith("__rou3_esc_")) return key.slice(11).replace(/__|_h/g, (c) => c === "__" ? "_" : "-");
	return key.startsWith("__rou3_unnamed_") ? key.slice(15) : key;
}
function emptyParam(m, segments) {
	const pMap = m.paramsMap;
	const params = pMap && getMatchParams(segments, pMap, m.suffix);
	return !!pMap?.some(([, name, , empty]) => !empty && name > ":" && /(^|\/)(\/|$)/.test(params[name]));
}
function matchesZero(m) {
	const last = m.paramsMap[m.paramsMap.length - 1];
	return last[2] || !!last[3] && !last[5];
}
function normalizePath(path) {
	if (!path.includes("/.")) return path;
	const r = [];
	let s = "";
	for (s of path.split("/")) if (s === ".") continue;
	else if (s === "..") {
		if (r.length > 1) r.pop();
	} else r.push(s);
	if (s === "." || s === "..") r.push("");
	return r.join("/") || "/";
}
function splitPath(path) {
	const s = path.split("/");
	s.shift();
	return s;
}
function methodEntries(methods, method, reverse) {
	let own = methods[method];
	let any = method ? methods[""] : void 0;
	if (reverse) {
		own &&= own.slice().reverse();
		any &&= any.slice().reverse();
	}
	return own && any ? any.concat(own) : own || any;
}
function reverseVariants(entries) {
	let out;
	for (let i = 0, j; i < entries.length; i = j) {
		const token = entries[i].variants;
		for (j = i + 1; token && entries[j]?.variants === token; j++);
		if (j - i > 1) (out ??= entries.slice()).splice(i, j - i, ...entries.slice(i, j).reverse());
	}
	return out || entries;
}
function setParam(params, key, value, join) {
	params[key] = join && params[key] !== void 0 ? params[key] + "/" + value : value;
}
function getMatchParams(segments, paramsMap, suffix, slash) {
	const params = new NullProtoObj();
	const end = suffix ? segments.length - suffix[1] : segments.length;
	for (const [index, name, optional, , , join] of paramsMap) {
		if (~index >= end && (optional || !slash)) continue;
		const segment = index < 0 ? segments.slice(~index, end).join("/") : segments[suffix && index > suffix[0] ? index - suffix[0] - 1 + end : index];
		if (typeof name === "string") {
			setParam(params, name, segment, join);
			if (index < 0 && optional && !join) params._ = segment;
		} else {
			const match = segment.match(name);
			if (match) {
				for (const key in match.groups) if (match.groups[key] !== void 0) setParam(params, fromGroupName(key), match.groups[key], join);
			}
		}
	}
	return params;
}
function encodeEscapes(path) {
	if (!path.includes("\\")) return path;
	return path.replace(/\\([:(){}\\])/g, (_, c) => "�" + ESCAPABLE.indexOf(c));
}
function decodeEscapes(segment, prefix) {
	return segment.replace(/\uFFFD([0-5])/g, (_, i) => prefix + ESCAPABLE[i]);
}
var ESCAPABLE = ":(){}\\";
function segmentKey(segment) {
	if (segment === "*" || segment.startsWith("**")) return 2;
	if (segment.includes(":") || segment.includes("(") || segmentWildcards(segment).length > 0) return 1;
	if (segment.includes("\\")) segment = segment.replace(/\\([\s\S])/g, "$1");
	if (segment.includes("�")) segment = decodeEscapes(segment, "");
	return encodeLiteral(segment);
}
function encodeLiteral(text) {
	return /[\0- "#<>?^`{}\x7F-\uFFFC]/.test(text) ? text.replace(/[\0- "#<>?^`{}\x7F-\uFFFC]+/g, (run) => encodeURIComponent(run.replace(/[\uD800-\uDFFF]/gu, "�"))) : text;
}
function checkConstraints(route) {
	if (!/[\t\n\r\\({}\uFFFD-\uFFFF]/.test(route)) return;
	if (/[\t\n\r\uFFFD-\uFFFF]/.test(route)) invalidSyntax("a tab, LF, CR (use %09, %0A, %0D) or U+FFFD-U+FFFF char", route);
	let s = route.replace(/\\([^/])/g, (_, c) => c > "0" && c <= "9" ? "\0" : "_");
	while (s !== (s = s.replace(/\([^()/]*\)/g, (group) => {
		if (/[$^]|^\(\?<?[=!]/.test(group.replace(/\[[^\]]*\]/g, "")) || group.includes("\0")) invalidSyntax("an anchor, look-around, backreference or capturing group in a constraint", route);
		if (classSetOp(group)) invalidSyntax("a `--` / `&&` in a class of a constraint", route);
		return group[1] === "?" && group[2] !== "<" ? "" : "\0";
	})));
	if (s.includes("(")) throw new Error(`rou3: a \`(\` must close in its own segment, escape a literal one as \`\\(\` (${route})`);
	if (s.includes("\\")) invalidSyntax("a `\\` must escape a char of its segment", route);
	if (/[{}]/.test(s.replace(/\{[^{}]*\}/g, ""))) invalidSyntax("unbalanced or nested `{}`", route);
}
function classSetOp(s) {
	let found = false;
	while (!found && /--|&&/.test(s) && s !== (s = s.replace(/\[[^[\]]*\]/g, (k) => {
		found ||= /--|&&/.test(k);
		return "_";
	})));
	return found;
}
function starGroups(path) {
	if (!path.includes("(.*)")) return [path];
	let count = 0;
	let unnamed;
	return [path.replace(/\\[\s\S]|(:[A-Za-z_]\w*)?\((?!\?)(\.\*\)(?!\*))?/g, (m, name, star, at) => {
		if (m[0] === "\\" || !star) {
			if (m[0] === "(") count++;
			return m;
		}
		if (name) {
			const k = count;
			unnamed = (index) => index === k ? name.slice(1) : index > k ? index - 1 : index;
		} else count++;
		return /(^|[^\\])(\\\\)*([)*}?]|:[A-Za-z_]\w*)\{?$/.test(path.slice(0, at)) ? "￿*" : "*";
	}), unnamed];
}
function absolutePattern(path) {
	return /^[/{]/.test(path) ? path : `/${path}`;
}
function dotSegments(path) {
	if (!DOT_SEGMENT.test(path)) return path;
	const s = path.split("/");
	const out = [s[0]];
	let dot = false;
	for (let i = 1; i < s.length; i++) {
		const m = /^(?:\.|%2e)(\.|%2e)?$/i.exec(s[i]);
		if (m) {
			if (m[1] && (out.length > 1 || out[0]) && !isText(out.pop())) invalidSyntax(DOT_SEGMENT_NEXT_TO, path);
			dot = true;
			continue;
		}
		if (dot && /^[:*(]/.test(s[i])) invalidSyntax(DOT_SEGMENT_NEXT_TO, path);
		out.push(s[i]);
		dot = false;
	}
	if (dot) out.push("");
	return out.join("/");
}
var isText = (segment) => typeof segmentKey(segment = encodeEscapes(segment)) === "string" && !/[{}]|(^|[^\\])\?/.test(segment);
var DOT_SEGMENT = /(?:^|\/)(?:\.|%2e){1,2}(?=\/|$)/i;
var DOT_SEGMENT_NEXT_TO = "`.` / `..` segment next to a param, catch-all or group";
function invalidSyntax(what, route) {
	throw new Error(`rou3: ${what} (${route})`);
}
var MISPLACED_MODIFIER = "misplaced `?` / `+` / `*`: `?` follows `:name` or `:name(…)`, `+` / `*` a whole-segment `:name`, none a catch-all (`(.*)` too); escape a literal one with `\\`";
var PARAM_MODIFIER = /^(.*)(:[A-Za-z_]\w*(?:\([^)]*\))?)([?+*])$/;
function expandModifiers(segments, input) {
	for (let i = 0; i < segments.length; i++) {
		const last = segments[i].charCodeAt(segments[i].length - 1);
		if (last !== 63 && last !== 43 && last !== 42) continue;
		const m = segments[i].match(PARAM_MODIFIER);
		if (!m) continue;
		const pre = segments.slice(0, i);
		const suf = segments.slice(i + 1);
		const without = "/" + pre.concat(m[1] || [], suf).join("/");
		if (m[3] === "?" && m[1] !== "**") {
			if (typeof segmentKey(m[1]) !== "string") continue;
			return ["/" + pre.concat(m[1] + m[2], suf).join("/"), without];
		}
		if (m[1] || m[2].includes("(")) invalidSyntax(MISPLACED_MODIFIER, input);
		const wc = "/" + pre.concat("**" + m[2], suf).join("/");
		return m[3] === "+" ? [wc] : [wc, without];
	}
}
function splitStar(segments, input) {
	for (let i = 0; i < segments.length; i++) {
		const segment = segments[i];
		const at = segment.startsWith("**") || segment === "*" ? [] : segmentWildcards(segment);
		if (at.length === 0) continue;
		for (let j = i + 1; j < segments.length && at.length === 1; j++) if (!segments[j].startsWith("**") && segments[j] !== "*") at.push(...segmentWildcards(segments[j]));
		if (at.length > 1) {
			if (at.some((x, k) => at[k + 1] === x + 1)) invalidSyntax(MISPLACED_MODIFIER, input);
			oneCatchAll(input);
		}
		const pre = segments.slice(0, i);
		const post = segments.slice(i + 1);
		const head = segment.slice(0, at[0]);
		const tail = segment.slice(at[0] + 1);
		if (!head) return [
			[pre.concat("**", segment, post)],
			i,
			false
		];
		if (!tail) return [
			[pre.concat(segment, "**", post), segments],
			i + 1,
			true
		];
		return [
			[pre.concat(head + "*", "**", "*" + tail, post), segments],
			i + 1,
			true
		];
	}
}
function oneCatchAll(input) {
	throw new Error(`rou3: a route can have only one \`*\`, \`**\`, \`:name+\` or \`:name*\` (${input})`);
}
function splitRoute(path) {
	const s = splitPath(path);
	while (s[s.length - 1] === "") s.pop();
	if (path.includes("**")) {
		for (let i = 0; i < s.length; i++) if (/^\*\*[^:{}]/.test(s[i])) s.splice(i, 1, ...s[i][2] === "*" ? ["**", s[i].slice(2)] : [s[i].slice(1)]);
	}
	return s;
}
function expandedRouteId(path) {
	if (path.charCodeAt(0) !== 47) return `{${expandedRouteId(`/${path}`)}`;
	return "/" + splitRoute(encodeEscapes(path)).map((segment) => {
		const key = segmentKey(segment);
		return typeof key === "string" ? key : segment;
	}).join("/");
}
function addName(names, name, input) {
	if (names.includes(name) || !/^[A-Za-z_]\w*$/.test(name)) invalidSyntax(`${names.includes(name) ? "duplicate" : "invalid"} param name "${decodeEscapes(name.replace(/\\(?=[\w$\x80-\ufffc])(?![^(]*\))/g, ""), "\\")}"`, input);
	names.push(name);
	return name;
}
function segmentWildcards(segment) {
	const at = [];
	let depth = 0;
	for (let i = 0; i < segment.length; i++) {
		const ch = segment.charCodeAt(i);
		if (ch === 92) i++;
		else if (ch === 40) depth++;
		else if (ch === 41 && depth > 0) depth--;
		else if (ch === 42 && depth === 0) at.push(i);
	}
	return at;
}
function scanFirstGroup(path) {
	let i = 0;
	let depth = 0;
	for (; i < path.length; i++) {
		const c = path.charCodeAt(i);
		if (c === 92) i++;
		else if (c === 40) depth++;
		else if (c === 41 && depth > 0) depth--;
		else if (c === 123 && depth === 0) break;
	}
	if (i >= path.length) return;
	let j = i + 1;
	depth = 0;
	for (; j < path.length; j++) {
		const c = path.charCodeAt(j);
		if (c === 92) j++;
		else if (c === 40) depth++;
		else if (c === 41 && depth > 0) depth--;
		else if (c === 125 && depth === 0) break;
	}
	if (j >= path.length) return;
	const mod = path[j + 1];
	const hasMod = mod === "?" || mod === "+" || mod === "*";
	return [
		path.slice(0, i),
		path.slice(i + 1, j).replace(NAME_CHAR, "\\$&"),
		path.slice(j + (hasMod ? 2 : 1)).replace(NAME_CHAR, "\\$&"),
		hasMod ? mod : void 0
	];
}
var NAME_CHAR = /^[\w$\x80-￼]/;
function expandGroupDelimiters(path, input = path) {
	if (!path.includes("{")) return;
	const group = scanFirstGroup(path);
	if (!group) return;
	const [pre, body, suf, mod] = group;
	if (mod === "+" || mod === "*") invalidSyntax(`unsupported \`{}${mod}\``, input);
	if (mod === "?" && /^(?!\*\*)./.test(pre.slice(pre.lastIndexOf("/") + 1)) && /^:[A-Za-z_]\w*(\([^)]*\))?$/.test(body) && (!suf || suf[0] === "/")) return [pre + body + "?" + suf];
	const full = joinGroup(joinGroup(pre, body, input), suf, input);
	const expanded = mod ? [full, joinGroup(pre, suf, input)] : [full];
	if (expanded.some((e) => DOT_SEGMENT.test(e))) invalidSyntax(DOT_SEGMENT_NEXT_TO, input);
	if (pre) return expanded;
	if (mod && body.charCodeAt(0) === 47 && suf && !/^\{?\//.test(suf)) invalidSyntax("text after a leading `{/...}?`", input);
	return expanded.map(absolutePattern);
}
function joinGroup(a, b, input) {
	const m = /(?<!\\)(\\\\)*((?<!\*\*):\w+|\([^/]*[^\\]\)|\*)([(?+*\uFFFF])$/.exec(a + b[0]);
	if (m) {
		if (m[3] === "￿") return a + b;
		if (m[3] > "(") invalidSyntax(MISPLACED_MODIFIER, input);
		if (m[2] > "*") a += "([^\\x2f]+?)";
	}
	return a + (b.charCodeAt(0) === 65535 ? b.slice(1) : b);
}
function getParamRegexp(segment, unnamedStart, names, input, groupKey = toUnnamedGroupKey) {
	let _i = unnamedStart;
	let _o;
	let _s = "", _d = 0, _e = -1, _g = 0, _r = 0;
	const _c = [];
	for (let j = 0; j < segment.length; j++) {
		const c = segment.charCodeAt(j);
		if (_d === 0) {
			if (c === 65535) {
				_s += "￿";
				continue;
			}
			if (c === 58) _e = j + 1 + addName(names, /^[\w$\x80-\ufffc]*/.exec(segment.slice(j + 1))[0], input).length;
			else if (c === 40 && /[?)]/.test(segment[j + 1])) invalidSyntax("empty or `(?` group", input);
			else if (c === 63 || c === 43 || c === 42 && j === _e) {
				if (c === 63 && j === segment.length - 1 && PARAM_MODIFIER.test(segment)) {
					_s += "?";
					_r--;
					continue;
				}
				invalidSyntax(MISPLACED_MODIFIER, input);
			} else if (c === 42) {
				_e = j + 1;
				_s += "([^/]*)";
				_r--;
				continue;
			}
		} else if (c === 58) {
			_s += "￾:";
			continue;
		}
		if (c === 40) {
			if (_d++ === 0) _g = j;
		} else if (c === 41 && _d > 0) {
			if (--_d === 0) {
				_e = j + 1;
				const p = segment.slice(_g + 1, j);
				if (p !== "[^\\x2f]+?") _c.push(p);
			}
		} else if (_d === 0 && c === 65533 && /[34]/.test(segment[j + 1])) {
			_s += encodeLiteral("{}"[+segment[++j] - 3]);
			_r += 768;
			continue;
		} else if (_d === 0 && /[\0- "#$).<>?[-^`{-}\x7F-\uFFFC]/.test(segment[j])) {
			const esc = c === 92 && j + 1 < segment.length ? 1 : 0;
			const ch = segment.slice(j + esc, j + esc + (segment.codePointAt(j + esc) > 65535 ? 2 : 1));
			const encoded = encodeLiteral(ch);
			j += esc + ch.length - 1;
			_s += encoded !== ch ? encoded : esc && ch !== "*" ? "￾" + ch : "\\" + ch;
			_r += encoded.length * 256;
			continue;
		}
		if (_d === 0 && j >= _e && segment.charCodeAt(j - 1) !== 65533) _r += 256;
		_s += segment[j];
	}
	const regex = decodeEscapes(_s.replace(/(?<!\uFFFE):([A-Za-z_]\w*)(?:\(([^)]*)\))?(\?$)?/g, (m, id, p, o, i, s) => {
		const group = `(?<${toGroupName(id)}>${p && (p != "[^\\x2f]+?" || !/[(\uFFFF]/.test(s[i + m.length])) ? p : "[^/]+?"})`;
		return o ? (_o = id, `(?:${group})?`) : group;
	}).replace(/\((?![?<])/g, () => `(?<${groupKey(_i++)}>`), "￾").replace(/\uFFFE([\s\S])|\uFFFF/g, (_, c = "") => /[.*+?^${}()|[\]\\]/.test(c) ? `\\${c}` : c);
	const regexp = new RegExp(`^${regex}$`);
	for (const p of _c) _r += new RegExp(`^(?:${decodeEscapes(p, "\\")})$`).test("") ? -1 : 1;
	return [
		regexp,
		_i,
		_o,
		_r
	];
}
function linearRegExp(regexp) {
	let source = regexp.source;
	if (!source.includes("[^/]+?)")) return regexp;
	let head = "";
	source = source.replace(/(\(\?<\w+>\[\^\/\]\*\))((?:\\[\s\S]|[^\\()]|(?:\(\?:)?\(\?<\w+>\[\^\/\]\+\?\)(?:\)\?)?)*)\$$/, (all, star, rest) => {
		if (!rest.includes("+?")) return all;
		head = `(?=[^/]*$(?<=(${rest.replace(/((?:\\[\s\S]|[^\\()])+)(?=\()|(\(\?:)?\(\?<\w+>\[\^\/\]\+\?\)(?:\)\?)?/g, (_, L, opt) => L ? L + upTo(L, true) : opt ? "" : "[^/]")})))`;
		return `${star}(?=\\1$)${rest}$`;
	});
	source = source.replace(/\[\^\/\]\+\?\)((?:\\[\s\S]|[^\\()])*)(?=(?:\(\?:)?\(\?<\w+>\[\^\/\](?:\+\?|\*)\))/g, (_, L) => `[^/]${L && upTo(L)})${L}`);
	return source === regexp.source ? regexp : new RegExp(`^${head}${source.slice(1)}`);
}
var upTo = (L, back) => L.replace(/^\\/, "").length < 2 ? `[^/${L}]*` : back ? `(?:[^/](?<!${L}))*` : `(?:(?!${L})[^/])*`;
function addRoute(ctx, method = "", path, data) {
	method = method.toUpperCase();
	path = absolutePattern(path);
	checkConstraints(path);
	const resolved = dotSegments(path);
	const [route, unnamed] = starGroups(resolved);
	variants = void 0;
	_add(ctx, method, route, data, unnamed && expandedRouteId(resolved), path, unnamed);
}
var variants;
function _add(ctx, method, path, data, route, input = path, unnamed = same) {
	const groupExpanded = expandGroupDelimiters(path, input);
	if (groupExpanded) {
		if (groupExpanded[1] !== void 0) {
			route ??= expandedRouteId(path);
			variants ??= {};
		}
		_add(ctx, method, groupExpanded[0], data, route, input, unnamed);
		if (groupExpanded[1] !== void 0) _add(ctx, method, groupExpanded[1], data, route, input, /[*(]/.test(path) ? skipGroup(path, input, unnamed) : unnamed);
		return 0;
	}
	path = encodeEscapes(path);
	const segments = splitRoute(path);
	const expanded = expandModifiers(segments, input);
	if (expanded) {
		route ??= expandedRouteId(path);
		variants ??= {};
		let count = 0;
		for (const p of expanded) count = _add(ctx, method, p, data, route, input, unnamed);
		return count;
	}
	const star = path.includes("*");
	const split = star ? splitStar(segments, input) : void 0;
	if (split) {
		const [routes, join, head] = split;
		if (routes.length > 1) {
			route ??= expandedRouteId(path);
			variants ??= {};
		}
		let count = 0;
		for (const r of routes) count = _insert(ctx, method, r, data, route, input, unnamed, star, r === segments ? -1 : join, head);
		return count;
	}
	return _insert(ctx, method, segments, data, route, input, unnamed, star);
}
function _insert(ctx, method, segments, data, route, input, unnamed, star, join = -1, head) {
	let node = ctx.root;
	let _unnamedParamIndex = 0;
	const paramsMap = [];
	const paramsRegexp = [];
	let rank = 0;
	const names = [];
	let named = false;
	const captureKey = (n) => {
		const k = unnamed(n);
		if (typeof k === "string" && !named) {
			named = true;
			addName(names, k, input);
		}
		return k;
	};
	let suffix;
	let wildcardIndex = -1;
	const trail = star ? [] : void 0;
	for (let i = 0; i < segments.length; i++) {
		let segment = segments[i];
		const key = segmentKey(segment);
		if (key === 2) {
			if (suffix) oneCatchAll(input);
			trail?.push(node);
			if (!node.wildcard) node.wildcard = { key: "**" };
			node = node.wildcard;
			const empty = segment.length === 1 || i === join;
			paramsMap.push([
				-(i + 1),
				i === join ? String(captureKey(head ? _unnamedParamIndex - 1 : _unnamedParamIndex++)) : segment.length === 2 ? (addName(names, "_", input), String(unnamed(_unnamedParamIndex++))) : empty ? String(captureKey(_unnamedParamIndex++)) : addName(names, segment.slice(3), input),
				segment.length === 2 && !(i === join && segments[i + 1]?.charCodeAt(0) !== 42),
				empty,
				void 0,
				i === join
			]);
			if (i === segments.length - 1) break;
			suffix = [];
			wildcardIndex = i;
			continue;
		}
		if (key === 1) {
			if (suffix) suffix.push(1);
			else {
				trail?.push(node);
				if (!node.param) node.param = { key: "*" };
				node = node.param;
			}
			if (!/^:[A-Za-z_]\w*$/.test(segment)) {
				const tail = i === join + 1 && segment.charCodeAt(0) === 42;
				const [source, nextIndex, inPlace, segmentRank] = getParamRegexp(segment, _unnamedParamIndex - (tail ? 1 : 0), names, input, (n) => toUnnamedGroupKey(captureKey(n)));
				_unnamedParamIndex = nextIndex;
				const regexp = paramsRegexp[i] = linearRegExp(source);
				rank += segmentRank;
				if (!suffix) node.hasRegexParam = true;
				paramsMap.push([
					i,
					regexp,
					false,
					/^(?!(?:[\s\S]*:\w+(?![\w?])){2})(?:\*|:[A-Za-z_]\w*)+\??$/.test(segment),
					inPlace,
					tail
				]);
			} else paramsMap.push([
				i,
				addName(names, segment.slice(1), input),
				false
			]);
			continue;
		}
		if (segment.includes("?") && /(^|[^\\])\?/.test(segment)) invalidSyntax(MISPLACED_MODIFIER, input);
		segment = segments[i] = key;
		if (suffix) {
			suffix.push(segment);
			continue;
		}
		trail?.push(node);
		const child = node.static?.[segment];
		if (child) node = child;
		else {
			const staticNode = { key: segment };
			if (!node.static) node.static = new NullProtoObj();
			node.static[segment] = staticNode;
			node = staticNode;
		}
	}
	if (suffix) {
		for (const n of trail) n.hasSuffix = true;
		node = node.suffix ??= { key: "" };
		for (let j = suffix.length - 1; j >= 0; j--) {
			const edge = suffix[j];
			if (edge === 1) node = node.param ??= { key: "*" };
			else node = (node.static ??= new NullProtoObj())[edge] ??= { key: edge };
		}
	}
	const hasParams = paramsMap.length > 0;
	const key = "/" + segments.join("/");
	const methods = node.methods ??= new NullProtoObj();
	(methods[method] ??= []).push({
		data: data ?? null,
		paramsRegexp,
		paramsMap: hasParams ? paramsMap : void 0,
		route: route ?? key,
		suffix: suffix && [wildcardIndex, suffix.length],
		variants,
		rank: rank / 2 ** 32
	});
	if (!hasParams) ctx.static[segments.length > 0 ? key : ""] = node;
	return _unnamedParamIndex;
}
var same = (index) => index;
function skipGroup(path, input, unnamed = same) {
	const [pre, body] = scanFirstGroup(path);
	if (!/[*(]/.test(body) && !pre.endsWith("*")) return unnamed;
	const count = (p) => _add(createRouter(), "", p, void 0, void 0, input);
	const before = count(pre);
	const skip = count(absolutePattern(joinGroup(pre, body, input))) - before;
	return skip ? (index) => unnamed(index < before ? index : index + skip) : unnamed;
}
function collectSuffix(node, method, segments, start, pos, matches, reverse) {
	const match = node.methods && methodEntries(node.methods, method, reverse);
	if (match) {
		const end = pos + 1;
		const weighted = [];
		for (const m of reverse ? match : reverseVariants(match)) {
			const w = m.suffix[0];
			let weight = 0;
			for (const [index, , optional, empty] of m.paramsMap) if (index < 0 && !optional) weight = end > start ? empty ? 2 : 4 : -1;
			const regexps = m.paramsRegexp;
			for (let i = 0; i < regexps.length && weight >= 0; i++) if (regexps[i]) weight = regexps[i].test(segments[i > w ? i - w - 1 + end : i]) ? weight + (m.paramsMap.find((e) => e[0] === i)[3] ? 1 : 4) : -1;
			if (weight >= 0) weighted.push([m, weight + m.rank]);
		}
		for (const [m] of weighted.sort((a, b) => a[1] - b[1])) matches.push(m);
	}
	if (pos >= start) {
		if (node.param) collectSuffix(node.param, method, segments, start, pos - 1, matches, reverse);
		const staticChild = node.static?.[segments[pos]];
		if (staticChild) collectSuffix(staticChild, method, segments, start, pos - 1, matches, reverse);
	}
}
function hasSuffixMatch(node, method, segments, index) {
	const trie = node.wildcard?.suffix;
	if (trie && (trie.param || trie.static?.[segments[segments.length - 1]])) {
		const matches = [];
		collectSuffix(trie, method, segments, index, segments.length - 1, matches);
		if (matches.length > 0) return true;
	}
	if (index < segments.length) {
		const staticChild = node.static?.[segments[index]];
		if (staticChild?.hasSuffix && hasSuffixMatch(staticChild, method, segments, index + 1)) return true;
		if (node.param?.hasSuffix && hasSuffixMatch(node.param, method, segments, index + 1)) return true;
	}
	return false;
}
function rankFromEnd(matches, segments) {
	const n = segments.length;
	return matches.sort((a, b) => {
		for (let p = n - 1; p >= 0; p--) {
			const x = kindAt(a, n, p);
			const y = kindAt(b, n, p);
			if (x < 0 && y < 0) p = ~Math.min(x, y);
			else if (Math.max(x, 0) !== Math.max(y, 0)) return Math.max(x, 0) - Math.max(y, 0);
		}
		return 0;
	});
}
function kindAt(m, n, p) {
	const suffix = m.suffix;
	const end = suffix ? n - suffix[1] : n;
	for (const [index, name, , plain] of m.paramsMap || []) if (index < 0) {
		if (p >= ~index && p < end) return index;
	} else if ((suffix && index > suffix[0] ? index - suffix[0] - 1 + end : index) === p) return typeof name === "string" || plain ? 0 : 2;
	return 3;
}
function _findRanked(ctx, method, segments, reverse) {
	let matches = _findAll(ctx.root, method, segments, 0, [], reverse);
	if (segments.includes("")) matches = matches.filter((m) => !emptyParam(m, segments));
	if (ctx.root.hasSuffix && matches.some((m) => m.suffix)) rankFromEnd(matches, segments);
	return matches;
}
function _findAll(node, method, segments, index, matches = [], reverse) {
	const segment = segments[index];
	if (node.wildcard) {
		const match = node.wildcard.methods && methodEntries(node.wildcard.methods, method, reverse);
		if (match) pushSorted(matches, index < segments.length ? match : match.filter((m) => matchesZero(m)), reverse);
		if (node.wildcard.suffix) collectSuffix(node.wildcard.suffix, method, segments, index, segments.length - 1, matches, reverse);
	}
	if (node.param && index < segments.length) {
		const start = matches.length;
		_findAll(node.param, method, segments, index + 1, matches, reverse);
		if (node.param.hasRegexParam) {
			for (let r = matches.length - 1; r >= start; r--) if (matches[r].paramsRegexp[index]?.test(segment) === false) matches.splice(r, 1);
		}
	}
	if (index < segments.length) {
		const staticChild = node.static?.[segment];
		if (staticChild) _findAll(staticChild, method, segments, index + 1, matches, reverse);
	}
	if (index === segments.length && node.methods) {
		const match = methodEntries(node.methods, method, reverse);
		if (match) pushSorted(matches, match, reverse);
	}
	return matches;
}
function pushSorted(matches, match, reverse) {
	if (match.length > 1) match = (reverse ? match : reverseVariants(match)).map((m) => {
		let w = m.rank;
		const { paramsRegexp: rx, paramsMap: pm } = m;
		for (let i = 0; i < rx.length; i++) if (rx[i]) w += 2;
		const last = pm?.[pm.length - 1];
		if (last && !last[2]) w += last[0] < 0 && last[3] ? 1 : 2;
		return [m, w];
	}).sort((a, b) => a[1] - b[1]).map((e) => e[0]);
	for (const m of match) matches.push(m);
}
function findRoute(ctx, method = "", path, opts) {
	if (opts?.normalize) path = normalizePath(path);
	const slash = path.charCodeAt(path.length - 1) === 47;
	if (slash) path = path.slice(0, -1);
	const staticNode = ctx.static[path];
	if (staticNode && staticNode.methods) {
		const staticMatch = staticNode.methods[method] || staticNode.methods[""];
		if (staticMatch !== void 0) return { data: staticMatch[0].data };
	}
	const segments = splitPath(path);
	let match;
	if (segments.includes("") || ctx.root.hasSuffix && hasSuffixMatch(ctx.root, method, segments, 0)) {
		const matches = _findRanked(ctx, method, segments, true);
		match = matches[matches.length - 1];
	} else match = _lookupTree(ctx.root, method, segments, 0);
	if (match === void 0) return;
	if (opts?.params === false) return { data: match.data };
	return {
		data: match.data,
		params: match.paramsMap ? getMatchParams(segments, match.paramsMap, match.suffix, slash) : void 0
	};
}
function _lookupTree(node, method, segments, index) {
	if (index === segments.length) {
		if (node.methods) {
			const match = _selectMatcher(node.methods, method, segments);
			if (match) return match;
		}
		return node.wildcard?.methods ? _selectMatcher(node.wildcard.methods, method, segments, true) : void 0;
	}
	const segment = segments[index];
	if (node.static) {
		const staticChild = node.static[segment];
		if (staticChild) {
			const match = _lookupTree(staticChild, method, segments, index + 1);
			if (match) return match;
		}
	}
	if (node.param) {
		const match = _lookupTree(node.param, method, segments, index + 1);
		if (match) return match;
	}
	if (node.wildcard && node.wildcard.methods) return _selectMatcher(node.wildcard.methods, method, segments);
}
function _selectMatcher(methods, method, segments, optionalOnly) {
	let any = methods[""];
	const match = methods[method] || any;
	if (!match) return;
	if (match === any) any = void 0;
	const first = match[0];
	if (!any && match.length === 1 && first.paramsRegexp.length === 0) return !optionalOnly || matchesZero(first) ? first : void 0;
	let best;
	let bestWeight = -1;
	let list = match;
	for (; list; list = list === any ? void 0 : any) for (const m of list) {
		const last = m.paramsMap?.[m.paramsMap.length - 1];
		if (optionalOnly && !matchesZero(m)) continue;
		let weight = m.rank + (last && !last[2] ? last[0] < 0 && last[3] ? 1 : 2 : 0);
		const regexps = m.paramsRegexp;
		for (let i = 0; i < regexps.length; i++) if (regexps[i]) {
			if (!regexps[i].test(segments[i])) {
				weight = -1;
				break;
			}
			weight += 2;
		}
		if (weight > bestWeight) {
			best = m;
			bestWeight = weight;
		}
	}
	return best;
}
//#endregion
//#region node_modules/h3/node_modules/srvx/dist/_chunks/_url.mjs
function lazyInherit(target, source, sourceKey) {
	for (const key of [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]) {
		if (key === "constructor") continue;
		const targetDesc = Object.getOwnPropertyDescriptor(target, key);
		const desc = Object.getOwnPropertyDescriptor(source, key);
		let modified = false;
		if (desc.get) {
			modified = true;
			desc.get = targetDesc?.get || function() {
				return this[sourceKey][key];
			};
		}
		if (desc.set) {
			modified = true;
			desc.set = targetDesc?.set || function(value) {
				this[sourceKey][key] = value;
			};
		}
		if (!targetDesc?.value && typeof desc.value === "function") {
			modified = true;
			desc.value = function(...args) {
				return this[sourceKey][key](...args);
			};
		}
		if (modified) Object.defineProperty(target, key, desc);
	}
}
var _needsNormRE = /(?:(?:^|\/)(?:\.|\.\.|%2e|%2e\.|\.%2e|%2e%2e)(?:\/|$))|[\\^#"<>{}`\x00-\x20\x7f-\uffff]/i;
var _searchNeedsNormRE = /[#"'<>\x00-\x20\x7f-\uffff]/;
var FastURL = /* @__PURE__ */ (() => {
	const NativeURL = globalThis.URL;
	const NativeSearchParams = globalThis.URLSearchParams;
	const FastURLSearchParams = class URLSearchParams {
		#owner;
		#params;
		constructor(owner) {
			this.#owner = owner;
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeSearchParams;
		}
		_adopt(params) {
			this.#params = params;
		}
		get _params() {
			if (!this.#params) {
				const search = this.#owner.search;
				this.#params ??= new NativeSearchParams(search);
			}
			return this.#params;
		}
		#mutable() {
			this.#owner._url;
			return this.#params;
		}
		append(name, value) {
			this.#mutable().append(name, value);
		}
		set(name, value) {
			this.#mutable().set(name, value);
		}
		delete(name, value) {
			this.#mutable().delete(name, value);
		}
		sort() {
			this.#mutable().sort();
		}
	};
	lazyInherit(FastURLSearchParams.prototype, NativeSearchParams.prototype, "_params");
	Object.setPrototypeOf(FastURLSearchParams.prototype, NativeSearchParams.prototype);
	Object.setPrototypeOf(FastURLSearchParams, NativeSearchParams);
	const FastURL = class URL {
		#url;
		#href;
		#protocol;
		#host;
		#pathname;
		#search;
		#searchParams;
		#pos;
		constructor(url) {
			if (typeof url === "string") {
				const isOriginForm = url[0] === "/";
				if (isOriginForm && !_searchNeedsNormRE.test(url)) this.#href = `http://localhost${url}`;
				else this.#url = new NativeURL(isOriginForm ? `http://localhost${url}` : url);
			} else if (_needsNormRE.test(url.pathname) || url.search && _searchNeedsNormRE.test(url.search)) this.#url = new NativeURL(`${url.protocol || "http:"}//${url.host || "localhost"}${url.pathname}${url.search || ""}`);
			else {
				this.#protocol = url.protocol;
				this.#host = url.host;
				this.#pathname = url.pathname;
				this.#search = url.search;
			}
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeURL;
		}
		get _url() {
			if (this.#url) return this.#url;
			this.#url = new NativeURL(this.href);
			this.#href = void 0;
			this.#protocol = void 0;
			this.#host = void 0;
			this.#pathname = void 0;
			this.#search = void 0;
			this.#pos = void 0;
			this.#searchParams?._adopt(this.#url.searchParams);
			return this.#url;
		}
		get href() {
			if (this.#url) return this.#url.href;
			if (!this.#href) this.#href = `${this.#protocol || "http:"}//${this.#host || "localhost"}${this.#pathname || "/"}${this.#search || ""}`;
			return this.#href;
		}
		#getPos() {
			if (!this.#pos) {
				const url = this.href;
				const protoIndex = url.indexOf("://");
				const pathnameIndex = protoIndex === -1 ? -1 : url.indexOf("/", protoIndex + 4);
				const qIndex = pathnameIndex === -1 ? -1 : url.indexOf("?", pathnameIndex);
				this.#pos = [
					protoIndex,
					pathnameIndex,
					qIndex
				];
			}
			return this.#pos;
		}
		get pathname() {
			if (this.#url) return this.#url.pathname;
			if (this.#pathname === void 0) {
				const [, pathnameIndex, queryIndex] = this.#getPos();
				if (pathnameIndex === -1) return this._url.pathname;
				this.#pathname = this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex);
			}
			return this.#pathname;
		}
		get search() {
			if (this.#url) return this.#url.search;
			if (this.#search === void 0) {
				const [, pathnameIndex, queryIndex] = this.#getPos();
				if (pathnameIndex === -1) return this._url.search;
				const url = this.href;
				this.#search = queryIndex === -1 || queryIndex === url.length - 1 ? "" : url.slice(queryIndex);
			}
			return this.#search;
		}
		get searchParams() {
			if (this.#searchParams) return this.#searchParams;
			if (this.#url) return this.#url.searchParams;
			return this.#searchParams = new FastURLSearchParams(this);
		}
		get protocol() {
			if (this.#url) return this.#url.protocol;
			if (this.#protocol === void 0) {
				const [protocolIndex] = this.#getPos();
				if (protocolIndex === -1) return this._url.protocol;
				const url = this.href;
				this.#protocol = url.slice(0, protocolIndex + 1);
			}
			return this.#protocol;
		}
		get hash() {
			if (this.#url) return this.#url.hash;
			return "";
		}
		toString() {
			return this.href;
		}
		toJSON() {
			return this.href;
		}
	};
	lazyInherit(FastURL.prototype, NativeURL.prototype, "_url");
	Object.setPrototypeOf(FastURL.prototype, NativeURL.prototype);
	Object.setPrototypeOf(FastURL, NativeURL);
	return FastURL;
})();
//#endregion
//#region node_modules/h3/node_modules/srvx/dist/adapters/node.mjs
var NodeResponse = /* @__PURE__ */ (() => {
	const NativeResponse = globalThis.Response;
	class NodeResponse {
		#body;
		#init;
		#headers;
		#response;
		constructor(body, init) {
			this.#body = body;
			this.#init = init;
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeResponse;
		}
		static json(data, init) {
			const body = JSON.stringify(data);
			if (body === void 0) throw new TypeError("Value is not JSON serializable");
			let headers = init?.headers;
			if (!headers) headers = { "content-type": "application/json" };
			else {
				const merged = new Headers(headers);
				if (!merged.has("content-type")) merged.set("content-type", "application/json");
				headers = merged;
			}
			return new NodeResponse(body, init ? {
				...init,
				headers
			} : { headers });
		}
		get status() {
			return this.#response?.status || this.#init?.status || 200;
		}
		get statusText() {
			return this.#response?.statusText || this.#init?.statusText || "";
		}
		get headers() {
			if (this.#response) return this.#response.headers;
			if (this.#headers) return this.#headers;
			return this.#headers = new Headers(this.#init?.headers);
		}
		get ok() {
			if (this.#response) return this.#response.ok;
			const status = this.status;
			return status >= 200 && status < 300;
		}
		get _response() {
			if (this.#response) return this.#response;
			let body = this.#body;
			if (body && typeof body.pipe === "function" && !(body instanceof Readable)) {
				const stream = new PassThrough();
				body.pipe(stream);
				const abort = body.abort;
				if (abort) stream.once("close", () => abort());
				body = stream;
			}
			this.#response = new NativeResponse(body, this.#headers ? {
				...this.#init,
				headers: this.#headers
			} : this.#init);
			this.#init = void 0;
			this.#headers = void 0;
			this.#body = void 0;
			return this.#response;
		}
		_toNodeResponse() {
			const status = this.status;
			const statusText = this.statusText;
			let body;
			let contentType;
			let contentLength;
			if (this.#response) body = this.#response.body;
			else if (this.#body != null) {
				if (this.#body instanceof ReadableStream) body = this.#body;
				else if (typeof this.#body === "string") {
					body = this.#body;
					contentType = "text/plain; charset=UTF-8";
					contentLength = Buffer.byteLength(this.#body);
				} else if (this.#body instanceof ArrayBuffer) {
					body = Buffer.from(this.#body);
					contentLength = this.#body.byteLength;
				} else if (this.#body instanceof Uint8Array) {
					body = this.#body;
					contentLength = this.#body.byteLength;
				} else if (this.#body instanceof DataView) {
					body = Buffer.from(this.#body.buffer, this.#body.byteOffset, this.#body.byteLength);
					contentLength = this.#body.byteLength;
				} else if (this.#body instanceof Blob) {
					body = this.#body.stream();
					contentType = this.#body.type;
					contentLength = this.#body.size;
				} else if (typeof this.#body.pipe === "function") body = this.#body;
				else body = this._response.body;
			}
			const headers = [];
			const initHeaders = this.#init?.headers;
			const headerEntries = this.#response?.headers || this.#headers || (initHeaders ? Array.isArray(initHeaders) ? initHeaders : initHeaders?.entries ? initHeaders.entries() : Object.entries(initHeaders) : void 0);
			let hasContentTypeHeader;
			let hasContentLength;
			if (headerEntries) for (const [key, value] of headerEntries) {
				const lowerKey = typeof key === "string" ? key.toLowerCase() : String(key);
				if (Array.isArray(value)) for (const v of value) headers.push(lowerKey, v);
				else headers.push(lowerKey, value);
				if (lowerKey === "content-type") hasContentTypeHeader = true;
				else if (lowerKey === "content-length") hasContentLength = true;
			}
			if (contentType && !hasContentTypeHeader) headers.push("content-type", contentType);
			if (contentLength != null && !hasContentLength) headers.push("content-length", String(contentLength));
			this.#init = void 0;
			this.#headers = void 0;
			this.#response = void 0;
			this.#body = void 0;
			return {
				status,
				statusText,
				headers,
				body
			};
		}
	}
	lazyInherit(NodeResponse.prototype, NativeResponse.prototype, "_response");
	Object.setPrototypeOf(NodeResponse, NativeResponse);
	Object.setPrototypeOf(NodeResponse.prototype, NativeResponse.prototype);
	return NodeResponse;
})();
//#endregion
//#region node_modules/h3/dist/response.mjs
var NEEDLESS_ESCAPE_SRC = String.raw`%(?:2[146-9A-E]|3[0-9ABD]|4[0-9A-F]|5[0-9ABDF]|6[1-9A-F]|7[0-9ACE])`;
var NEEDLESS_ESCAPE_RE = /* @__PURE__ */ new RegExp(NEEDLESS_ESCAPE_SRC, "i");
var NEEDLESS_ESCAPE_RE_G = /* @__PURE__ */ new RegExp(NEEDLESS_ESCAPE_SRC, "gi");
function isNonCanonicalPathname(pathname) {
	return NEEDLESS_ESCAPE_RE.test(pathname);
}
function canonicalPathname(pathname) {
	return pathname.replace(NEEDLESS_ESCAPE_RE_G, (m) => String.fromCharCode(Number.parseInt(m.slice(1), 16)));
}
function decodePathname(pathname) {
	try {
		return decodeURI(pathname);
	} catch {
		return;
	}
}
var ENCODED_SEP_RE_G$1 = /%(?:25)*(?:2f|5c)/gi;
var ENCODED_SEP_FLAT_RE_G = /%(?:2f|5c)/gi;
function decodePreservingSeparators(value, opts) {
	if (!value.includes("%")) return value;
	const decode = opts?.decode || decodeURIComponent;
	const re = opts?.nested === false ? ENCODED_SEP_FLAT_RE_G : ENCODED_SEP_RE_G$1;
	let result = "";
	let lastIndex = 0;
	re.lastIndex = 0;
	for (let m; m = re.exec(value);) {
		result += decode(value.slice(lastIndex, m.index)) + m[0];
		lastIndex = m.index + m[0].length;
	}
	return result + decode(value.slice(lastIndex));
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
		const status = sanitizeStatusCode(details?.status || details?.statusCode || (details?.cause)?.status || (details?.cause)?.statusCode, 500);
		const statusText = sanitizeStatusMessage(details?.statusText || details?.statusMessage || (details?.cause)?.statusText || (details?.cause)?.statusMessage);
		const message = messageInput || details?.message || (details?.cause)?.message || details?.statusText || details?.statusMessage || [
			"HTTPError",
			status,
			statusText
		].filter(Boolean).join(" ");
		super(message, { cause: details });
		this.cause = details;
		this.status = status;
		this.statusText = statusText || void 0;
		const rawHeaders = details?.headers || (details?.cause)?.headers;
		this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
		this.unhandled = details?.unhandled ?? (details?.cause)?.unhandled ?? void 0;
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
//#endregion
//#region node_modules/h3/dist/middleware.mjs
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
//#endregion
//#region node_modules/h3/dist/cache.mjs
function toRequest(input, options) {
	if (typeof input === "string") {
		let url = input;
		if (url[0] === "/") url = `http://${safeHost((options?.headers ? new Headers(options.headers) : void 0)?.get("host"))}${url}`;
		return new Request(url, options);
	} else if (options || input instanceof URL) return new Request(input, options);
	return input;
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
function defineLazyEventHandler(loader) {
	let handler;
	let promise;
	return defineHandler(function lazyHandler(event) {
		return handler ? handler(event) : (promise ??= Promise.resolve(loader()).then(function resolveLazyHandler(r) {
			handler = toEventHandler(r) || toEventHandler(r.default);
			if (typeof handler !== "function") throw new TypeError("Invalid lazy handler", { cause: { resolved: r } });
			return handler;
		})).then((r) => r(event));
	});
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
//#endregion
//#region node_modules/h3/dist/path.mjs
var DOT_SEGMENT_SRC = String.raw`(?:^|/)(?:\.|%(?:25)*2e){1,2}(?:/|$)`;
var ENCODED_SEP_SRC = String.raw`%(?:25)*(?:2f|5c)`;
var ENCODED_SEP_RE_G = /* @__PURE__ */ new RegExp(ENCODED_SEP_SRC, "gi");
var TRIGGER_RES = /* @__PURE__ */ (() => {
	const base = String.raw`\\|` + DOT_SEGMENT_SRC;
	return [
		new RegExp(base, "i"),
		new RegExp(`${base}|${ENCODED_SEP_SRC}`, "i"),
		new RegExp(`${base}|//`, "i"),
		new RegExp(`${base}|${ENCODED_SEP_SRC}|//`, "i")
	];
})();
var ENCODED_DOT_RE_G = /%(?:25)*2e/gi;
function resolveDotSegments(path, opts) {
	if (path[0] !== "/" || path[1] === "/" || path[1] === "\\") path = "/" + path.replace(/^[/\\]+/, "");
	if (isCanonicalPath(path, opts)) return path;
	const decodeSlashes = opts?.decodeSlashes;
	const mergeSlashes = opts?.mergeSlashes;
	let normalized = path.includes("\\") ? path.replaceAll("\\", "/") : path;
	if (decodeSlashes) normalized = normalized.replace(ENCODED_SEP_RE_G, "/");
	const segments = normalized.split("/");
	const lastIndex = segments.length - 1;
	const resolved = [];
	for (let i = 0; i <= lastIndex; i++) {
		const segment = segments[i];
		const normalizedSegment = segment.includes("%") ? segment.replace(ENCODED_DOT_RE_G, ".") : segment;
		const isDotSegment = normalizedSegment === "." || normalizedSegment === "..";
		if (normalizedSegment === "..") {
			if (resolved.length > 1) resolved.pop();
		} else if (mergeSlashes && normalizedSegment === "" && i > 0 && i < lastIndex) {} else if (!isDotSegment) resolved.push(segment);
		if (isDotSegment && i === lastIndex) resolved.push("");
	}
	return (resolved.join("/") || "/").replace(/^\/+/, "/");
}
function isCanonicalPath(path, opts) {
	return path[0] === "/" && path[1] !== "/" && path[1] !== "\\" && !TRIGGER_RES[(opts?.decodeSlashes ? 1 : 0) | (opts?.mergeSlashes ? 2 : 0)].test(path);
}
//#endregion
//#region node_modules/h3/dist/_utils.mjs
var CANONICAL_OPTS = { decodeSlashes: true };
var MERGED_OPTS = {
	decodeSlashes: true,
	mergeSlashes: true
};
function canonicalPath(pathname) {
	return resolveDotSegments(pathname, CANONICAL_OPTS);
}
function decodedPath(pathname) {
	let decoded = pathname;
	for (let pass = 0; hasDecodableEscape(decoded); pass++) {
		if (pass >= MAX_PASSES) return decoded;
		const input = pass < EXACT_PASSES ? decoded : flattenNesting(decoded);
		let next;
		try {
			next = decodePreservingSeparators(input);
		} catch {
			return input;
		}
		if (next === input) return input;
		decoded = next;
	}
	return decoded;
}
var PATH_ENCODE_RE = /(?:[\u0000-\u0020"#<>?^`{}]|[^\u0000-\u007E])+/gu;
function encodedReading(pathname) {
	return pathname.replace(PATH_ENCODE_RE, (run) => encodeURIComponent(run.replace(/[\uD800-\uDFFF]/gu, "�")));
}
var EXACT_PASSES = 8;
var MAX_PASSES = 24;
var CHAR_2 = 50;
var CHAR_5 = 53;
function needsCanonicalPasses(pathname) {
	return !isCanonicalPath(pathname, MERGED_OPTS);
}
function mergedCanonicalPath(pathname, canonical) {
	const merged = resolveDotSegments(pathname, MERGED_OPTS);
	return merged === canonical ? void 0 : merged;
}
function hasDecodableEscape(value) {
	for (let i = value.indexOf("%"); i !== -1; i = value.indexOf("%", i + 1)) {
		const byte = escapeByte(value, nestingEnd(value, i));
		if (byte !== 47 && byte !== 92) return true;
	}
	return false;
}
function flattenNesting(path) {
	let flat = "";
	let last = 0;
	for (let i = path.indexOf("%"); i !== -1; i = path.indexOf("%", i + 1)) {
		const end = nestingEnd(path, i);
		if (end === i + 1) continue;
		const byte = escapeByte(path, end);
		if (byte === 47 || byte === 92) continue;
		flat += path.slice(last, i) + (byte === -1 ? "%25" : "%");
		last = end;
	}
	return last === 0 ? path : flat + path.slice(last);
}
function nestingEnd(value, index) {
	let end = index + 1;
	while (value.charCodeAt(end) === CHAR_2 && value.charCodeAt(end + 1) === CHAR_5) end += 2;
	return end;
}
function escapeByte(value, index) {
	const high = hexDigit(value.charCodeAt(index));
	const low = hexDigit(value.charCodeAt(index + 1));
	return high === -1 || low === -1 ? -1 : high * 16 + low;
}
function hexDigit(code) {
	if (code >= 48 && code <= 57) return code - 48;
	if (code >= 97 && code <= 102) return code - 87;
	if (code >= 65 && code <= 70) return code - 55;
	return -1;
}
//#endregion
//#region node_modules/h3/dist/normalize.mjs
function recordResets(resets, resetEntries, routeRules, canOverride) {
	for (const entry of resetEntries) {
		const rule = routeRules[entry.name];
		if (!rule || !canOverride?.(entry.route, rule.route)) addReset(resets, entry.name, entry.route);
	}
}
function addReset(resets, name, route) {
	const routes = resets.get(name);
	if (!routes) resets.set(name, [route]);
	else if (!routes.includes(route)) routes.push(route);
}
function canReinstate(resetRoutes, route, canOverride) {
	return !resetRoutes || canOverride !== void 0 && resetRoutes.every((resetRoute) => canOverride(resetRoute, route));
}
function mergeMatchedRouteRules(rawLayers, altLayers, canOverride) {
	if (!altLayers) return resolveLayers(rawLayers);
	const resets = /* @__PURE__ */ new Map();
	const routeRules = resolveLayers(rawLayers, resets, canOverride);
	const resolved = altLayers.map((layers) => layers?.length ? resolveLayers(layers, resets, canOverride) : void 0);
	for (const rules of resolved) if (rules) unionRules(routeRules, rules, resets, canOverride);
	return routeRules;
}
function unionRules(routeRules, resolved, resets, canOverride) {
	for (const [name, rule] of Object.entries(resolved)) {
		const current = routeRules[name];
		if (current) {
			if (canOverride && !canOverride(current.route, rule.route)) continue;
		} else if (!rule.handler?.restricting && !canReinstate(resets.get(name), rule.route, canOverride)) continue;
		mergeRouteRule(routeRules, name, rule, rule.params);
	}
}
function resolveLayers(layers, resets, canOverride) {
	const firstData = layers?.[0]?.data;
	if (firstData && !Array.isArray(firstData)) return resolvePreMergedLayers(layers, resets);
	const routeRules = emptyRouteRules();
	let resetEntries;
	for (const layer of orderedLayers(layers)) for (const entry of layer.data) {
		if (resets && entry.options === false) (resetEntries ||= []).push(entry);
		mergeRouteRule(routeRules, entry.name, entry, layer.params);
	}
	if (resetEntries) recordResets(resets, resetEntries, routeRules, canOverride);
	return routeRules;
}
function isMergeableObject(value) {
	return value !== null && typeof value === "object";
}
function emptyRouteRules() {
	return Object.create(null);
}
function mergeRuleOptions(current, incoming) {
	return isMergeableObject(current) && isMergeableObject(incoming) ? {
		...current,
		...incoming
	} : incoming;
}
function orderedLayers(layers) {
	if (!layers || layers.length < 2) return layers || [];
	let ordered = layers;
	for (let i = 1; i < ordered.length; i++) {
		const layer = ordered[i];
		const rank = layerRank(layer);
		let j = i - 1;
		while (j >= 0 && layerRank(ordered[j]) > rank) {
			if (ordered === layers) ordered = [...layers];
			ordered[j + 1] = ordered[j];
			j--;
		}
		if (j + 1 !== i) ordered[j + 1] = layer;
	}
	return ordered;
}
function layerRank(layer) {
	return layer.data[0]?.rank ?? 0;
}
function resolvePreMergedLayers(rawLayers, resets) {
	const layers = rawLayers.length < 2 ? rawLayers : [...rawLayers].sort((a, b) => a.data.rank - b.data.rank);
	const routeRules = emptyRouteRules();
	const winning = layers[layers.length - 1].data;
	if (resets && winning.resets) for (const name of winning.resets) addReset(resets, name, winning.route);
	for (const entry of winning.rules) {
		const paramRoutes = entry.paramRoutes;
		let params;
		for (const layer of layers) {
			const layerParams = layer.params;
			if (!layerParams) continue;
			const layerRoute = layer.data.route;
			if (paramRoutes ? paramRoutes.includes(layerRoute) : layerRoute === entry.route) params = params ? {
				...params,
				...layerParams
			} : layerParams;
		}
		routeRules[entry.name] = {
			route: entry.route,
			options: entry.options,
			handler: entry.handler,
			params
		};
	}
	return routeRules;
}
function mergeRouteRule(routeRules, ruleName, rule, params) {
	const name = ruleName;
	const currentRule = routeRules[name];
	if (currentRule) {
		if (rule.options === false) {
			delete routeRules[name];
			return;
		}
		currentRule.options = mergeRuleOptions(currentRule.options, rule.options);
		currentRule.route = rule.route;
		if (currentRule.params || params) currentRule.params = {
			...currentRule.params,
			...params
		};
	} else if (rule.options !== false) routeRules[name] = {
		route: rule.route,
		options: rule.options,
		handler: rule.handler,
		params
	};
}
var headers = {
	order: -1,
	handler: (m) => {
		const entries = Object.entries(m.options || {});
		return async function headersRouteRule(event, next) {
			try {
				return await next();
			} finally {
				for (const [key, value] of entries) {
					event.res.headers.set(key, value);
					event.res.errHeaders.set(key, value);
				}
			}
		};
	}
};
var WHOLE_PARAM_SEGMENT_RE = /^:[A-Za-z_]\w*[?+*]?$/;
var CONCRETE_SEGMENT_RE = /^[^:*(){}\\]+$/;
var DOT_SEGMENT_RE = /(?:^|\/)(?:\.|%2e){1,2}(?:\/|$)/i;
var GROUP_RE = /[{}]/;
var canOverrideRouteShape = (currentRoute, incomingRoute) => {
	if (DOT_SEGMENT_RE.test(currentRoute) || DOT_SEGMENT_RE.test(incomingRoute)) return false;
	if (currentRoute === incomingRoute) return true;
	if (GROUP_RE.test(currentRoute) || GROUP_RE.test(incomingRoute)) return false;
	const current = currentRoute.split("/");
	const incoming = incomingRoute.split("/");
	for (let i = 0; i < current.length; i++) {
		const cur = current[i];
		if (cur === "**") return i === current.length - 1 && incoming.length > i && !current.slice(1, i).includes("");
		const inc = incoming[i];
		if (inc === void 0) return false;
		if (cur === inc) continue;
		if ((cur === "*" || WHOLE_PARAM_SEGMENT_RE.test(cur)) && CONCRETE_SEGMENT_RE.test(inc)) continue;
		return false;
	}
	return current.length === incoming.length;
};
function createMatcherFromFind(findRouteRules, canOverride = canOverrideRouteShape) {
	return (method, pathname) => {
		const rawLayers = findRouteRules(method, pathname);
		let altLayers;
		let hasAltMatch = false;
		const readings = alternateReadings(pathname);
		if (readings) {
			altLayers = [];
			for (const reading of readings) {
				const layers = findRouteRules(method, reading);
				if (layers?.length) hasAltMatch = true;
				altLayers.push(layers);
			}
		}
		if (!rawLayers?.length && !hasAltMatch) return {
			routeRules: {},
			matchedRules: {},
			routeRuleMiddleware: []
		};
		const matchedRules = mergeMatchedRouteRules(rawLayers, altLayers, canOverride);
		return {
			routeRules: toRouteRules(matchedRules),
			matchedRules,
			routeRuleMiddleware: buildRouteRuleMiddleware(matchedRules)
		};
	};
}
function toRouteRules(matchedRules) {
	const routeRules = Object.create(null);
	for (const name in matchedRules) routeRules[name] = matchedRules[name].options;
	return routeRules;
}
function buildRouteRuleMiddleware(matchedRules) {
	const routeRuleMiddleware = [];
	const rules = Object.entries(matchedRules);
	if (rules.length > 1) rules.sort(compareRuleOrder);
	for (const [, rule] of rules) {
		if (!rule.handler) continue;
		routeRuleMiddleware.push(rule.handler.handler(rule));
	}
	return routeRuleMiddleware;
}
function memoizeRouteRulesMatcher(matcher, opts) {
	const max = opts?.max ?? 1024;
	if (max <= 0) return matcher;
	const memo = /* @__PURE__ */ new Map();
	let hand;
	const evict = () => {
		for (;;) {
			let next = hand?.next();
			if (!next || next.done) {
				hand = memo.values();
				next = hand.next();
				if (next.done) return;
			}
			const entry = next.value;
			if (entry.visited) entry.visited = false;
			else {
				memo.delete(entry.key);
				return;
			}
		}
	};
	return (method, pathname) => {
		const key = method + " " + pathname;
		const entry = memo.get(key);
		if (entry) {
			entry.visited = true;
			return entry.result;
		}
		const result = matcher(method, pathname);
		if (memo.size >= max) evict();
		memo.set(key, {
			key,
			result,
			visited: false
		});
		return result;
	};
}
function alternateReadings(pathname) {
	const recase = pathname.includes("%") && !isNonCanonicalPathname(pathname);
	const upper = recase ? recaseEscapes(pathname, true) : pathname;
	const lower = recase ? recaseEscapes(pathname, false) : pathname;
	const decoded = decodedPath(pathname);
	const encoded = encodedReading(decoded);
	const lowerEncoded = recaseEscapes(encoded, false);
	if (upper === pathname && lower === pathname && decoded === pathname && encoded === pathname && lowerEncoded === pathname && !needsCanonicalPasses(pathname)) return;
	const readings = [];
	pushReading(readings, pathname, upper);
	pushReading(readings, pathname, lower);
	const spellings = [pathname];
	for (const spelling of [
		encoded,
		lowerEncoded,
		decoded
	]) if (!spellings.includes(spelling)) spellings.push(spelling);
	for (const spelling of spellings) {
		if (!needsCanonicalPasses(spelling)) {
			pushReading(readings, pathname, spelling);
			continue;
		}
		const canonical = canonicalPath(spelling);
		pushReading(readings, pathname, canonical);
		const merged = mergedCanonicalPath(spelling, canonical);
		if (merged !== void 0) pushReading(readings, pathname, merged);
	}
	return readings.length > 0 ? readings : void 0;
}
var ESCAPE_RE_G = /%[\da-f]{2}/gi;
function recaseEscapes(path, upper) {
	return path.includes("%") ? path.replace(ESCAPE_RE_G, (escape) => upper ? escape.toUpperCase() : escape.toLowerCase()) : path;
}
function pushReading(readings, pathname, reading) {
	if (reading !== pathname && !readings.includes(reading)) readings.push(reading);
}
var compareRuleOrder = (a, b) => orderWeight(a[1].handler) - orderWeight(b[1].handler) || (a[0] < b[0] ? -1 : 1);
function orderWeight(handler) {
	return handler?.order ?? 0;
}
//#endregion
export { H3Core, HTTPError, NullProtoObj, addRoute, composeMiddleware, createMatcherFromFind, createRouter, defineHandler, defineLazyEventHandler, findRoute, headers, memoizeRouteRulesMatcher, toEventHandler, toRequest };
