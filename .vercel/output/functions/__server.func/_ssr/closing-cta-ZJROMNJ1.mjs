import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button, o as SITE } from "./router-B-vLJxu2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/closing-cta-ZJROMNJ1.js
var import_jsx_runtime = require_jsx_runtime();
function ClosingCta({ title = SITE.tagline, lede = `Tell us where the manuscript is. We reply ${SITE.replyTime} with a quote or a sample.` }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted",
					children: lede
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inquire",
							search: { intent: "quote" },
							children: "Request a quote"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inquire",
							search: { intent: "sample" },
							children: "Free 1,000-word sample"
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { ClosingCta as t };
