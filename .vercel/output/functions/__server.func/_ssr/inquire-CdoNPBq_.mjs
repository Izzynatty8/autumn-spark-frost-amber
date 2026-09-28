import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Copy, l as Check } from "../_libs/lucide-react.mjs";
import { a as string, i as object, t as _enum } from "../_libs/zod.mjs";
import { a as cn, i as Button, o as SITE, r as Route$3 } from "./router-B-vLJxu2.mjs";
import { a as families, c as formatOptions, d as packageById, f as packages, g as servicesForFamily, h as services, i as draftStages, l as haveOptions, t as audienceOptions } from "./content-BcsYOsP5.mjs";
import { t as PageIntro } from "./page-intro-DMVIaD6M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquire-CdoNPBq_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-md bg-bg-elevated px-3 text-base text-fg shadow-[var(--shadow-border)]", "placeholder:text-subtle transition-[box-shadow] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-md bg-bg-elevated px-3 py-3 text-base text-fg shadow-[var(--shadow-border)]", "placeholder:text-subtle transition-[box-shadow] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var schema = object({
	name: string().min(2, "Please add your name."),
	email: string().email("A working email helps us reply."),
	intent: _enum([
		"quote",
		"sample",
		"both"
	]),
	wordCount: string().min(1, "Word count, even approximate."),
	genre: string().min(2, "Genre or category."),
	audience: string().min(1, "Choose a lane."),
	language: string().min(1, "Language of the manuscript."),
	stage: string().min(1, "Where is the draft?"),
	deadline: string(),
	message: string()
});
var empty = (init) => ({
	name: "",
	email: "",
	intent: init?.intent ?? "quote",
	wordCount: "",
	genre: "",
	audience: init?.audience ?? "",
	language: "English",
	stage: "",
	deadline: "",
	message: "",
	packageId: init?.packageId ?? "",
	serviceIds: init?.serviceIds ?? [],
	formats: [],
	alreadyHave: []
});
function toggle(list, value) {
	return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}
function buildBody(data) {
	const pkg = data.packageId ? packageById(data.packageId)?.name : "None selected";
	const serviceNames = data.serviceIds.map((id) => services.find((s) => s.id === id)?.name).filter(Boolean).join(", ");
	const formatNames = data.formats.map((v) => formatOptions.find((o) => o.value === v)?.label).filter(Boolean).join(", ");
	const haveNames = data.alreadyHave.map((v) => haveOptions.find((o) => o.value === v)?.label).filter(Boolean).join(", ");
	return [
		`Intent: ${data.intent}`,
		`Name: ${data.name}`,
		`Email: ${data.email}`,
		`Package: ${pkg}`,
		`Services: ${serviceNames || "—"}`,
		`Word count: ${data.wordCount}`,
		`Genre: ${data.genre}`,
		`Audience: ${data.audience}`,
		`Language: ${data.language}`,
		`Draft stage: ${data.stage}`,
		`Formats: ${formatNames || "—"}`,
		`Already have: ${haveNames || "—"}`,
		`Deadline: ${data.deadline || "Flexible"}`,
		"",
		data.message || "(no additional note)",
		"",
		data.intent !== "quote" ? "Sample requested: first 1,000 words to follow in reply." : ""
	].filter((line) => line !== "").join("\n");
}
function InquireForm({ initialIntent, initialPackage, initialFamily }) {
	const presetServices = (0, import_react.useMemo)(() => {
		if (initialFamily && [
			"manuscript",
			"writing",
			"formatting",
			"design",
			"publishing"
		].includes(initialFamily)) return servicesForFamily(initialFamily).map((s) => s.id);
		if (initialPackage) return packageById(initialPackage)?.serviceIds.slice(0, 8) ?? [];
		return [];
	}, [initialFamily, initialPackage]);
	const [form, setForm] = (0, import_react.useState)(() => empty({
		intent: initialIntent,
		packageId: initialPackage ?? "",
		serviceIds: presetServices,
		audience: initialFamily === "childrens" ? "childrens" : ""
	}));
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [copied, setCopied] = (0, import_react.useState)(false);
	function set(key, value) {
		setForm((prev) => ({
			...prev,
			[key]: value
		}));
	}
	async function onSubmit(event) {
		event.preventDefault();
		const parsed = schema.safeParse(form);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = String(issue.path[0]);
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});
		const body = buildBody(form);
		const subject = form.intent === "sample" ? `Sample request — ${form.name}` : `Manuscript brief — ${form.name}`;
		try {
			await navigator.clipboard.writeText(`To: ${SITE.email}\nSubject: ${subject}\n\n${body}`);
			setCopied(true);
		} catch {
			setCopied(false);
		}
		const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;
		setStatus("sent");
	}
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-6 text-fg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-2xl",
				children: "Brief ready."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-lg text-muted",
				children: [
					copied ? "A copy is on your clipboard. If your mail app did not open, paste it to " : "If your mail app did not open, write to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-fg underline-offset-4 hover:underline",
						href: `mailto:${SITE.email}`,
						children: SITE.email
					}),
					". We reply ",
					SITE.replyTime,
					"."
				]
			}),
			form.intent !== "quote" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Attach or paste the first 1,000 words in that email. Do not put the excerpt in this form."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.telegram,
						children: "Message on Telegram"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					type: "button",
					onClick: () => setStatus("idle"),
					children: "Edit the brief"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-10",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "font-display text-xl",
					children: "What do you need today?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-3",
					children: [
						["quote", "A quote"],
						["sample", "Free 1,000-word sample"],
						["both", "Both"]
					].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 cursor-pointer items-center gap-2 rounded-md bg-bg-elevated px-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "intent",
							value,
							checked: form.intent === value,
							onChange: () => set("intent", value),
							className: "size-4 accent-current"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: label
						})]
					}, value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: form.name,
						onChange: (e) => set("name", e.target.value),
						autoComplete: "name",
						required: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					error: errors.email,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "email",
						value: form.email,
						onChange: (e) => set("email", e.target.value),
						autoComplete: "email",
						required: true
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Named package (optional)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "flex h-11 w-full rounded-md bg-bg-elevated px-3 text-base text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					value: form.packageId,
					onChange: (e) => set("packageId", e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "À la carte — I will tick services"
					}), packages.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: pkg.id,
						children: [
							pkg.name,
							" — ",
							pkg.forWho.replace(/^For /, "")
						]
					}, pkg.id))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "font-display text-xl",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Tick what you think you need. If you are unsure, leave it and say so in the note — that is what the review is for."
					}),
					families.map((family) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "rounded-lg bg-bg-elevated px-4 py-3 shadow-[var(--shadow-border)]",
						open: initialFamily === family.id,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "cursor-pointer py-2 font-medium",
							children: family.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2 pb-3 sm:grid-cols-2",
							children: servicesForFamily(family.id).map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 items-start gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "mt-1 size-4 accent-current",
									checked: form.serviceIds.includes(service.id),
									onChange: () => set("serviceIds", toggle(form.serviceIds, service.id))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service.name })]
							}, service.id))
						})]
					}, family.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Word count",
						error: errors.wordCount,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.wordCount,
							onChange: (e) => set("wordCount", e.target.value),
							placeholder: "e.g. 72,000 or 24 spreads",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Genre / category",
						error: errors.genre,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.genre,
							onChange: (e) => set("genre", e.target.value),
							placeholder: "e.g. literary fiction, memoir, picture book",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Audience",
						error: errors.audience,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "flex h-11 w-full rounded-md bg-bg-elevated px-3 text-base text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							value: form.audience,
							onChange: (e) => set("audience", e.target.value),
							required: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}), audienceOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: o.value,
								children: o.label
							}, o.value))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Language of the manuscript",
						error: errors.language,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "flex h-11 w-full rounded-md bg-bg-elevated px-3 text-base text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							value: form.language,
							onChange: (e) => set("language", e.target.value),
							children: [SITE.languages.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: lang,
								children: lang
							}, lang)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Other",
								children: "Other (describe in the note)"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Draft stage",
						error: errors.stage,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "flex h-11 w-full rounded-md bg-bg-elevated px-3 text-base text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							value: form.stage,
							onChange: (e) => set("stage", e.target.value),
							required: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}), draftStages.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: o.value,
								children: o.label
							}, o.value))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Deadline (optional)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.deadline,
							onChange: (e) => set("deadline", e.target.value),
							placeholder: "e.g. 12 October, or flexible"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-sm font-medium",
					children: "Formats you want"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2",
					children: formatOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-4 accent-current",
							checked: form.formats.includes(o.value),
							onChange: () => set("formats", toggle(form.formats, o.value))
						}), o.label]
					}, o.value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-sm font-medium",
					children: "What you already have"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2",
					children: haveOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-4 accent-current",
							checked: form.alreadyHave.includes(o.value),
							onChange: () => set("alreadyHave", toggle(form.alreadyHave, o.value))
						}), o.label]
					}, o.value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Anything we should know",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: form.message,
					onChange: (e) => set("message", e.target.value),
					placeholder: "Series, previous editions, a hard date, a language pair, a dummy already made…"
				})
			}),
			form.intent !== "quote" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Do not paste the 1,000 words here. After you send the brief, attach the excerpt in your reply."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Send brief"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-subtle",
					children: [
						"Opens your mail app to ",
						SITE.email,
						". We reply ",
						SITE.replyTime,
						"."
					]
				})]
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: error
			}) : null
		]
	});
}
function InquirePage() {
	const search = Route$3.useSearch();
	const pkg = search.package ? packageById(search.package) : void 0;
	const family = search.family;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Inquire",
		title: search.intent === "sample" ? "A free first thousand words." : pkg ? `A brief for ${pkg.name}.` : "Tell us where the manuscript is.",
		lede: `No public prices. We quote the book in front of us, usually the same day. We reply ${SITE.replyTime} from West Africa Time.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-20 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireForm, {
			initialIntent: search.intent,
			initialPackage: search.package,
			initialFamily: family
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-10 text-sm text-subtle",
			children: [
				"Prefer Telegram?",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "text-fg underline-offset-4 hover:underline",
					href: SITE.telegram,
					children: SITE.telegramHandle
				}),
				". Manuscripts are confidential."
			]
		})]
	})] });
}
//#endregion
export { InquirePage as component };
