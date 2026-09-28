import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Palette, i as PenLine, n as Upload, s as LayoutTemplate, u as BookOpen } from "../_libs/lucide-react.mjs";
import { a as cn, n as Route$1 } from "./router-B-vLJxu2.mjs";
import { a as families, g as servicesForFamily, m as serviceById, o as familyLinks } from "./content-BcsYOsP5.mjs";
import { t as PageIntro } from "./page-intro-DMVIaD6M.mjs";
import { t as ClosingCta } from "./closing-cta-ZJROMNJ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CT2zHuza.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	manuscript: BookOpen,
	writing: PenLine,
	formatting: LayoutTemplate,
	design: Palette,
	publishing: Upload
};
var NODES = [
	{
		id: "writing",
		x: 400,
		y: 72
	},
	{
		id: "manuscript",
		x: 150,
		y: 200
	},
	{
		id: "design",
		x: 650,
		y: 200
	},
	{
		id: "formatting",
		x: 250,
		y: 390
	},
	{
		id: "publishing",
		x: 550,
		y: 390
	}
];
function uniqueEdges() {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const node of NODES) for (const other of familyLinks[node.id]) {
		const key = [node.id, other].sort().join("-");
		if (seen.has(key)) continue;
		seen.add(key);
		const b = NODES.find((n) => n.id === other);
		if (!b) continue;
		out.push({
			key,
			a: node,
			b
		});
	}
	return out;
}
var EDGES = uniqueEdges();
function Constellation({ active, onSelect }) {
	const lit = new Set(active ? [active, ...familyLinks[active]] : []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-2",
			children: families.map((family) => {
				const Icon = ICONS[family.id];
				const isActive = active === family.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(family.id),
					"aria-pressed": isActive,
					className: cn("flex w-full items-start gap-3 rounded-lg px-4 py-4 text-left transition-[background-color,box-shadow] duration-150", isActive ? "bg-fg text-bg" : "bg-bg-elevated shadow-[var(--shadow-border)]"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mt-0.5 size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-lg",
						children: family.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("mt-1 block text-sm", isActive ? "text-bg/70" : "text-muted"),
						children: [family.kicker, active === family.id ? ` · connects to ${familyLinks[family.id].map((id) => families.find((f) => f.id === id)?.name).join(", ")}` : ""]
					})] })]
				}) }, family.id);
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hidden md:block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 800 480",
			role: "img",
			"aria-label": "Service constellation. Five studio families connected by the publishing pipeline.",
			className: "h-auto w-full",
			children: [EDGES.map(({ key, a, b }) => {
				const on = active != null && (a.id === active || b.id === active) && lit.has(a.id) && lit.has(b.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: a.x,
					y1: a.y,
					x2: b.x,
					y2: b.y,
					stroke: on ? "var(--fg)" : "var(--border-strong)",
					strokeWidth: on ? 1.75 : 1,
					className: "transition-[stroke] duration-200"
				}, key);
			}), NODES.map((node) => {
				const family = families.find((f) => f.id === node.id);
				const isActive = active === node.id;
				const isLit = active == null || lit.has(node.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					onClick: () => onSelect(node.id),
					onKeyDown: (event) => {
						if (event.key === "Enter" || event.key === " ") {
							event.preventDefault();
							onSelect(node.id);
						}
					},
					role: "button",
					tabIndex: 0,
					"aria-pressed": isActive,
					"aria-label": family.name,
					className: "cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: node.x,
						cy: node.y,
						r: isActive ? 38 : 32,
						fill: isActive ? "var(--fg)" : "var(--bg-elevated)",
						stroke: isLit ? "var(--fg)" : "var(--border-strong)",
						strokeWidth: "1.25",
						className: "cursor-pointer transition-[fill,r] duration-200",
						onClick: () => onSelect(node.id)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: node.x,
						y: node.y + 4,
						textAnchor: "middle",
						className: "pointer-events-none select-none",
						fill: isActive ? "var(--bg)" : "var(--fg)",
						fontFamily: "var(--font-display)",
						fontSize: "13",
						fontWeight: 500,
						opacity: isLit ? 1 : .45,
						children: family.name
					})]
				}, node.id);
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-center text-xs text-subtle",
			children: "Click a family. Connected work lights with it."
		})]
	})] });
}
function FamilyPanel({ familyId }) {
	const family = families.find((f) => f.id === familyId);
	const list = servicesForFamily(familyId);
	const Icon = ICONS[familyId];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)] sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mt-1 size-5 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: family.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl font-medium",
						children: family.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
						children: family.blurb
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: list.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					id: service.id,
					className: "scroll-mt-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-medium",
							children: service.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: service.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-fg/90",
							children: service.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: service.related.slice(0, 3).map((rid) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								search: {
									family: serviceById(rid)?.family,
									service: rid
								},
								className: "text-xs text-muted underline-offset-4 hover:text-fg hover:underline",
								children: serviceById(rid)?.name ?? "Related"
							}, rid))
						})
					]
				}, service.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/inquire",
					search: {
						family: familyId,
						intent: "quote"
					},
					className: "text-sm font-medium text-fg underline-offset-4 hover:underline",
					children: [
						"Inquire about ",
						family.name.toLowerCase(),
						" services"
					]
				})
			})
		]
	});
}
function ServicesPage() {
	const search = Route$1.useSearch();
	const fromService = search.service ? serviceById(search.service) : void 0;
	const initial = search.family ?? fromService?.family ?? "manuscript";
	const [active, setActive] = (0, import_react.useState)(initial);
	(0, import_react.useEffect)(() => {
		setActive(search.family ?? fromService?.family ?? "manuscript");
	}, [search.family, fromService?.family]);
	(0, import_react.useEffect)(() => {
		if (!search.service) return;
		document.getElementById(search.service)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [search.service, active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "The constellation",
			title: "Five families of work. They are not a list — they are a pipeline.",
			lede: "Click a node. The work that sits beside it lights up. New authors can follow the line; returning authors can enter in the middle."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Constellation, {
					active,
					onSelect: setActive
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyPanel, { familyId: active })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-8 flex flex-wrap gap-2",
					"aria-label": "Service families",
					children: families.map((family) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(family.id),
						className: "min-h-11 rounded-md px-3 text-sm text-muted shadow-[var(--shadow-border)] hover:text-fg",
						children: family.name
					}, family.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {
			title: "Not sure which node you are on?",
			lede: "Send the brief. Naming the work is part of what we do."
		})
	] });
}
//#endregion
export { ServicesPage as component };
