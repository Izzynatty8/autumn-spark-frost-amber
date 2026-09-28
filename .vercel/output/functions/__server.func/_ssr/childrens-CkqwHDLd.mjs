import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button, s as useMode } from "./router-B-vLJxu2.mjs";
import { f as packages } from "./content-BcsYOsP5.mjs";
import { t as ClosingCta } from "./closing-cta-ZJROMNJ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/childrens-CkqwHDLd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChildrensPage() {
	const setMode = useMode((s) => s.setMode);
	(0, import_react.useEffect)(() => {
		setMode("childrens");
	}, [setMode]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-end gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
						children: "Children's pathway"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl",
						children: "Picture books, chapter books, middle grade — still a press, not a playroom."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-muted",
						children: "Page-turns are structure. Type size is a kindness. The jacket and the interior have to tell the same story to the child and to the adult who pays. This pathway keeps the studio's standards and warms the room."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inquire",
								search: {
									intent: "quote",
									family: "design"
								},
								children: "Inquire about a children's book"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/work",
								children: "Cover directions"
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "lg:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/cover-hare.jpg",
					alt: "Studio picture-book cover direction: a hare with a lantern under a baobab.",
					className: "aspect-3/4 w-full rounded-xl object-cover sm:aspect-square lg:aspect-3/4"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium",
					children: "What changes on this pathway"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-6 md:grid-cols-3",
					children: [
						{
							t: "Story",
							b: "Alpha and developmental notes read for spread, refrain, and age — not only for plot."
						},
						{
							t: "Jacket & interior",
							b: "Covers designed with the dummy. Interiors paced for the turn, with type a child can actually read."
						},
						{
							t: "Store",
							b: "KDP categories and keywords that reach parents and teachers, plus print files that survive bleed."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: item.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: item.b
						})]
					}, item.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium",
					children: "The same packages, in this room"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-border border-y border-border",
					children: packages.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-2 py-5 md:grid-cols-12 md:items-baseline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display md:col-span-4",
							children: pkg.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted md:col-span-8",
							children: pkg.childrensNote
						})]
					}, pkg.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {
			title: "Send the dummy, the manuscript, or both.",
			lede: "A free first thousand words still applies — or the first few spreads, if that is the book."
		})
	] });
}
//#endregion
export { ChildrensPage as component };
