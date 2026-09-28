import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-intro-DMVIaD6M.js
var import_jsx_runtime = require_jsx_runtime();
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 sm:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
				children: lede
			})
		]
	});
}
//#endregion
export { PageIntro as t };
