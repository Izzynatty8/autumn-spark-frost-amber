import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as cn, i as Button, o as SITE, s as useMode } from "./router-B-vLJxu2.mjs";
import { _ as servicesForStage, a as families, f as packages, u as journey, y as tools } from "./content-BcsYOsP5.mjs";
import { t as ClosingCta } from "./closing-cta-ZJROMNJ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-w8mXsUQA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide text-muted shadow-[var(--shadow-border)]", className),
		children
	});
}
function JourneyMap() {
	const [active, setActive] = (0, import_react.useState)("draft");
	const stage = journey.find((s) => s.id === active);
	const related = servicesForStage(active).slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
					children: "The author journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl",
					children: "Six rooms. One studio. You enter where you are."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted",
					children: "New authors can walk the path. Returning authors can skip to the room that is stuck. Related services light with the stage."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6",
					children: journey.map((item) => {
						const isActive = item.id === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(item.id),
							"aria-pressed": isActive,
							className: cn("flex h-full min-h-24 w-full flex-col items-start rounded-lg px-3 py-3 text-left transition-[background-color,box-shadow] duration-150", isActive ? "bg-fg text-bg" : "bg-bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("font-display text-xs tabular-nums", isActive ? "text-bg/70" : "text-subtle"),
								children: item.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 font-display text-lg font-medium",
								children: item.label
							})]
						}) }, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)] sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: stage.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: stage.familyIds.map((id) => {
								const family = families.find((f) => f.id === id);
								return family ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									search: { family: id },
									className: "inline-flex min-h-11 items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: family.name })
								}, id) : null;
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-2 sm:grid-cols-2",
							children: related.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								search: {
									family: service.family,
									service: service.id
								},
								className: "group flex min-h-11 items-baseline justify-between gap-3 border-b border-border py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-fg group-hover:underline",
									children: service.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-xs text-subtle sm:inline",
									children: families.find((f) => f.id === service.family)?.name
								})]
							}) }, service.id))
						})
					]
				})
			]
		})
	});
}
function Home() {
	const childrens = useMode((s) => s.mode) === "childrens";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-end gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
						children: childrens ? "Picture books · chapter books · middle grade" : "Fiction · nonfiction · children's"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl lg:text-6xl",
						children: ["You write the story.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block italic text-muted",
							children: "We make it ready for readers."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
						children: [
							SITE.belief,
							" A small roster. ",
							SITE.years,
							" of KDP production. One brief from first draft to the store page."
						]
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-subtle",
						children: [
							"Replies ",
							SITE.replyTime,
							". No public rate card — we quote the book in front of us."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: childrens ? "/images/childrens-studio.jpg" : "/images/hero-desk.jpg",
					alt: childrens ? "A children's-book design table with watercolors, dummy book, and daylight." : "A night editorial desk with cream paper, metal type, and a fountain pen.",
					className: "aspect-4/3 w-full rounded-xl object-cover sm:aspect-3/2"
				}, childrens ? "childrens" : "literary"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-xs text-subtle",
					children: childrens ? "Children's interiors and jackets, designed as one object." : "Letterpress, manuscript, files. The work happens in that order."
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyMap, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
						children: "Named pathways"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Packages, not a menu of fifty ticks."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
						children: ["Or browse the constellation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 divide-y divide-border border-y border-border",
					children: packages.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-4 py-6 md:grid-cols-12 md:items-baseline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm tabular-nums text-subtle md:col-span-1",
								children: pkg.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-medium",
									children: pkg.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: pkg.forWho
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-1 text-sm text-muted md:col-span-5",
								children: [pkg.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)), childrens ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-fg",
									children: pkg.childrensNote
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-2 md:text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/inquire",
									search: {
										package: pkg.id,
										intent: "quote"
									},
									className: "inline-flex min-h-11 items-center text-sm font-medium text-fg underline-offset-4 hover:underline",
									children: "Inquire"
								})
							})
						]
					}, pkg.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/interior-spread.jpg",
					alt: "An open hardcover interior on a dark table, type softly out of focus.",
					className: "aspect-3/2 w-full rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
						children: "How files leave the studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium tracking-tight",
						children: "Edited pages. Print-ready PDFs. Covers that survive a thumbnail."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Two rounds of revision included. Tools we actually use, not a stack we namedrop."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 columns-2 gap-8 text-sm text-fg",
						children: tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "break-inside-avoid py-1",
							children: tool
						}, tool))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/process",
						className: "mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
						children: ["The process", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
//#endregion
export { Home as component };
