import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cn, s as useMode } from "./router-B-vLJxu2.mjs";
import { n as covers, v as testimonials } from "./content-BcsYOsP5.mjs";
import { t as PageIntro } from "./page-intro-DMVIaD6M.mjs";
import { t as ClosingCta } from "./closing-cta-ZJROMNJ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-Bk0-7tBE.js
var import_jsx_runtime = require_jsx_runtime();
function CoverCard({ cover, ink = "ivory" }) {
	const onDark = ink === "ivory";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-2/3 overflow-hidden rounded-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: cover.src,
			alt: "",
			className: "absolute inset-0 h-full w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col justify-between p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-xs font-medium uppercase tracking-[0.2em]", onDark ? "text-cover-ivory/80" : "text-cover-ink/70"),
				children: cover.lane.split("·")[0]?.trim()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 max-w-[12ch] font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl", onDark ? "text-cover-ivory" : "text-cover-ink"),
				children: cover.title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-xs tracking-wide", onDark ? "text-cover-ivory/75" : "text-cover-ink/70"),
				children: cover.note
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xl",
			children: cover.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: cover.lane
		})]
	})] });
}
function WorkPage() {
	const mode = useMode((s) => s.mode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Work",
			title: "Covers we can show. Titles we cannot.",
			lede: "Client books leave this site unnamed. The directions below are studio samples — the kind of jacket we make — so you can see the hand without reading someone else's spine."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverCard, {
					cover: covers[0],
					ink: "ivory"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverCard, {
					cover: covers[1],
					ink: "ink"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: "From the roster's desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted",
						children: "Names shortened. Book titles withheld under confidence."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-6 md:grid-cols-2",
						children: testimonials.map((item) => {
							const dim = mode === "childrens" ? item.lane !== "Children's" : item.lane === "Children's";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: cn("rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8", dim && "opacity-70"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-xl leading-snug text-fg",
										children: [
											"“",
											item.quote,
											"”"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-6 text-sm text-muted",
										children: [
											item.name,
											" · ",
											item.role
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs uppercase tracking-widest text-subtle",
										children: item.lane
									})
								]
							}, item.name);
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
//#endregion
export { WorkPage as component };
