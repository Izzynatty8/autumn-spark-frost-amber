import { useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { Check, Copy } from "lucide-react";
import { SITE } from "@/lib/site";
import {
  audienceOptions,
  draftStages,
  families,
  formatOptions,
  haveOptions,
  packageById,
  packages,
  services,
  servicesForFamily,
} from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Please add your name."),
  email: z.string().email("A working email helps us reply."),
  intent: z.enum(["quote", "sample", "both"]),
  wordCount: z.string().min(1, "Word count, even approximate."),
  genre: z.string().min(2, "Genre or category."),
  audience: z.string().min(1, "Choose a lane."),
  language: z.string().min(1, "Language of the manuscript."),
  stage: z.string().min(1, "Where is the draft?"),
  deadline: z.string(),
  message: z.string(),
});

type FormState = z.infer<typeof schema> & {
  packageId: string;
  serviceIds: string[];
  formats: string[];
  alreadyHave: string[];
};

const empty = (init?: Partial<FormState>): FormState => ({
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
  alreadyHave: [],
});

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function buildBody(data: FormState) {
  const pkg = data.packageId ? packageById(data.packageId)?.name : "None selected";
  const serviceNames = data.serviceIds
    .map((id) => services.find((s) => s.id === id)?.name)
    .filter(Boolean)
    .join(", ");
  const formatNames = data.formats
    .map((v) => formatOptions.find((o) => o.value === v)?.label)
    .filter(Boolean)
    .join(", ");
  const haveNames = data.alreadyHave
    .map((v) => haveOptions.find((o) => o.value === v)?.label)
    .filter(Boolean)
    .join(", ");

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
    data.intent !== "quote"
      ? "Sample requested: first 1,000 words to follow in reply."
      : "",
  ]
    .filter((line) => line !== "")
    .join("\n");
}

export function InquireForm({
  initialIntent,
  initialPackage,
  initialFamily,
}: {
  initialIntent?: "quote" | "sample" | "both";
  initialPackage?: string;
  initialFamily?: string;
}) {
  const presetServices = useMemo(() => {
    if (initialFamily && ["manuscript", "writing", "formatting", "design", "publishing"].includes(initialFamily)) {
      return servicesForFamily(initialFamily as never).map((s) => s.id);
    }
    if (initialPackage) return packageById(initialPackage)?.serviceIds.slice(0, 8) ?? [];
    return [];
  }, [initialFamily, initialPackage]);

  const [form, setForm] = useState<FormState>(() =>
    empty({
      intent: initialIntent,
      packageId: initialPackage ?? "",
      serviceIds: presetServices,
      audience: initialFamily === "childrens" ? "childrens" : "",
    }),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [copied, setCopied] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const body = buildBody(form);
    const subject =
      form.intent === "sample"
        ? `Sample request — ${form.name}`
        : `Manuscript brief — ${form.name}`;
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

  if (status === "sent") {
    return (
      <div className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-10">
        <Check className="size-6 text-fg" />
        <h2 className="mt-4 font-display text-2xl">Brief ready.</h2>
        <p className="mt-3 max-w-lg text-muted">
          {copied
            ? "A copy is on your clipboard. If your mail app did not open, paste it to "
            : "If your mail app did not open, write to "}
          <a className="text-fg underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          . We reply {SITE.replyTime}.
        </p>
        {form.intent !== "quote" ? (
          <p className="mt-3 text-sm text-muted">
            Attach or paste the first 1,000 words in that email. Do not put the excerpt in this form.
          </p>
        ) : null}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={SITE.telegram}>Message on Telegram</a>
          </Button>
          <Button variant="outline" type="button" onClick={() => setStatus("idle")}>
            Edit the brief
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      <fieldset className="space-y-3">
        <legend className="font-display text-xl">What do you need today?</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {(
            [
              ["quote", "A quote"],
              ["sample", "Free 1,000-word sample"],
              ["both", "Both"],
            ] as const
          ).map(([value, label]) => (
            <label
              key={value}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-md bg-bg-elevated px-3 shadow-[var(--shadow-border)]"
            >
              <input
                type="radio"
                name="intent"
                value={value}
                checked={form.intent === value}
                onChange={() => set("intent", value)}
                className="size-4 accent-current"
              />
              <span className="text-sm">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <Input
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
            required
          />
        </Field>
      </div>

      <Field label="Named package (optional)">
        <select
          className="flex h-11 w-full rounded-md bg-bg-elevated px-3 text-base text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          value={form.packageId}
          onChange={(e) => set("packageId", e.target.value)}
        >
          <option value="">À la carte — I will tick services</option>
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.name} — {pkg.forWho.replace(/^For /, "")}
            </option>
          ))}
        </select>
      </Field>

      <fieldset className="space-y-4">
        <legend className="font-display text-xl">Services</legend>
        <p className="text-sm text-muted">
          Tick what you think you need. If you are unsure, leave it and say so in the note — that is what the review is for.
        </p>
        {families.map((family) => (
          <details
            key={family.id}
            className="rounded-lg bg-bg-elevated px-4 py-3 shadow-[var(--shadow-border)]"
            open={initialFamily === family.id}
          >
            <summary className="cursor-pointer py-2 font-medium">{family.name}</summary>
            <div className="grid gap-2 pb-3 sm:grid-cols-2">
              {servicesForFamily(family.id).map((service) => (
                <label key={service.id} className="flex min-h-11 items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 accent-current"
                    checked={form.serviceIds.includes(service.id)}
                    onChange={() => set("serviceIds", toggle(form.serviceIds, service.id))}
                  />
                  <span>{service.name}</span>
                </label>
              ))}
            </div>
          </details>
        ))}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Word count" error={errors.wordCount}>
          <Input
            value={form.wordCount}
            onChange={(e) => set("wordCount", e.target.value)}
            placeholder="e.g. 72,000 or 24 spreads"
            required
          />
        </Field>
        <Field label="Genre / category" error={errors.genre}>
          <Input
            value={form.genre}
            onChange={(e) => set("genre", e.target.value)}
            placeholder="e.g. literary fiction, memoir, picture book"
            required
          />
        </Field>
        <Field label="Audience" error={errors.audience}>
          <select
            className="flex h-11 w-full rounded-md bg-bg-elevated px-3 text-base text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={form.audience}
            onChange={(e) => set("audience", e.target.value)}
            required
          >
            <option value="">Select</option>
            {audienceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Language of the manuscript" error={errors.language}>
          <select
            className="flex h-11 w-full rounded-md bg-bg-elevated px-3 text-base text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={form.language}
            onChange={(e) => set("language", e.target.value)}
          >
            {SITE.languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
            <option value="Other">Other (describe in the note)</option>
          </select>
        </Field>
        <Field label="Draft stage" error={errors.stage}>
          <select
            className="flex h-11 w-full rounded-md bg-bg-elevated px-3 text-base text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={form.stage}
            onChange={(e) => set("stage", e.target.value)}
            required
          >
            <option value="">Select</option>
            {draftStages.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Deadline (optional)">
          <Input
            value={form.deadline}
            onChange={(e) => set("deadline", e.target.value)}
            placeholder="e.g. 12 October, or flexible"
          />
        </Field>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">Formats you want</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {formatOptions.map((o) => (
            <label key={o.value} className="flex min-h-11 items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="size-4 accent-current"
                checked={form.formats.includes(o.value)}
                onChange={() => set("formats", toggle(form.formats, o.value))}
              />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">What you already have</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {haveOptions.map((o) => (
            <label key={o.value} className="flex min-h-11 items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="size-4 accent-current"
                checked={form.alreadyHave.includes(o.value)}
                onChange={() => set("alreadyHave", toggle(form.alreadyHave, o.value))}
              />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Anything we should know">
        <Textarea
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Series, previous editions, a hard date, a language pair, a dummy already made…"
        />
      </Field>

      {form.intent !== "quote" ? (
        <p className="text-sm text-muted">
          Do not paste the 1,000 words here. After you send the brief, attach the excerpt in your reply.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          <Copy className="size-4" />
          Send brief
        </Button>
        <p className="text-xs text-subtle">
          Opens your mail app to {SITE.email}. We reply {SITE.replyTime}.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-sm text-muted">{error}</p> : null}
    </div>
  );
}
