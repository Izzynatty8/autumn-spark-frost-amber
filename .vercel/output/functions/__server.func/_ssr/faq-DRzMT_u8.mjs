import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as faqs } from "./content-BcsYOsP5.mjs";
import { t as PageIntro } from "./page-intro-DMVIaD6M.mjs";
import { t as ClosingCta } from "./closing-cta-ZJROMNJ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DRzMT_u8.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "FAQ",
			title: "The questions that arrive before the brief.",
			lede: "If yours is not here, put it in the note. Naming the work is part of the work."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl px-4 pb-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "divide-y divide-border border-y border-border",
				children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-xl font-medium",
						children: item.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-3 leading-relaxed text-muted",
						children: item.a
					})]
				}, item.q))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
//#endregion
export { FaqPage as component };
