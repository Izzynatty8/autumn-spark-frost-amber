import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as SITE } from "./router-B-vLJxu2.mjs";
import { p as processSteps, r as deliverables, y as tools } from "./content-BcsYOsP5.mjs";
import { t as PageIntro } from "./page-intro-DMVIaD6M.mjs";
import { t as ClosingCta } from "./closing-cta-ZJROMNJ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-BKuIWfAW.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Process",
			title: "A brief, a sample, then the files in your hands.",
			lede: `${SITE.revisions}. You remain the author and the publisher of record. We reply ${SITE.replyTime}.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mx-auto max-w-6xl px-4 pb-8 sm:px-6",
			children: processSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-3 border-t border-border py-8 md:grid-cols-12 md:items-baseline",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tabular-nums text-subtle md:col-span-2",
						children: step.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium md:col-span-3",
						children: step.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted md:col-span-7",
						children: step.body
					})
				]
			}, step.n))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium",
					children: "Tools"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-muted",
					children: tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: tool }, tool))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: "Handoff"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-muted",
						children: deliverables.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-subtle",
						children: "We send what you asked for — not a bundle of files you have to decode."
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
//#endregion
export { ProcessPage as component };
