import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as SITE } from "./router-B-vLJxu2.mjs";
import { a as families } from "./content-BcsYOsP5.mjs";
import { t as PageIntro } from "./page-intro-DMVIaD6M.mjs";
import { t as ClosingCta } from "./closing-cta-ZJROMNJ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DiOnb6Do.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "The studio",
			title: "A small roster. A full pipeline.",
			lede: `${SITE.name} is not a marketplace of strangers. Editors, designers, and formatters under one brief — ${SITE.years.toLowerCase()} walking books through KDP and print.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-base leading-relaxed text-muted lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-fg",
							children: "We started as production people: the ones who notice a bad gutter, a thumbnail that lies, a chapter that does not earn its place. The roster is still small on purpose. You are not handed off to a crowd."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"The studio holds formal training and production credentials, and the unromantic knowledge of Amazon's dashboard — categories, keywords, proof copies, files that actually upload. We work in ",
							SITE.languages.join(", "),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not list client titles here. Manuscripts are read under confidence. If you need a written NDA before pages leave your machine, say so in the brief." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You remain the author. You remain the publisher of record. Our name does not need to be on the jacket." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Where"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-fg",
								children: SITE.location
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Reply"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-fg",
								children: SITE.replyTime
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Languages"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-fg",
								children: SITE.languages.join(" · ")
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Revisions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-fg",
								children: SITE.revisions
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Write"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-fg underline-offset-4 hover:underline",
									href: `mailto:${SITE.email}`,
									children: SITE.email
								})
							})] })
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5",
				children: families.map((family) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					search: { family: family.id },
					className: "block min-h-11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-subtle",
						children: family.kicker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl",
						children: family.name
					})]
				}) }, family.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
//#endregion
export { AboutPage as component };
