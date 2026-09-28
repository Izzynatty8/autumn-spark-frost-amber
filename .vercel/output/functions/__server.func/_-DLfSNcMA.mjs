import { x as require_jsx_runtime, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Button } from "./_ssr/router-B-vLJxu2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_-DLfSNcMA.js
var import_jsx_runtime = require_jsx_runtime();
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-24 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-muted",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium",
				children: "This page is not in the signature."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: "The sheet you asked for is not bound into this site. The journey, the constellation, and the brief still are."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Home"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/inquire",
						children: "Inquire"
					})
				})]
			})
		]
	});
}
//#endregion
export { NotFound as component };
