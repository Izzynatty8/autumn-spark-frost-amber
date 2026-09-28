export const SITE = {
  name: "Victors' Book Services",
  shortName: "Victors'",
  tagline: "You Write the Story. We Make It Ready for Readers.",
  belief:
    "Your book is in capable hands — clarity, polish, and a professional finish, so you can publish with confidence.",
  email: "victorsbookservices@gmail.com",
  telegram: "https://t.me/VictorsBookServices",
  telegramHandle: "@VictorsEdits",
  location: "Remote, West Africa Time",
  replyTime: "within 1–2 hours",
  languages: ["English", "Yoruba", "French", "Spanish"] as const,
  years: "More than four years",
  revisions: "Two rounds of revision included",
  sampleWords: 1000,
} as const;

export const NAV = [
  { to: "/services" as const, label: "Services" },
  { to: "/process" as const, label: "Process" },
  { to: "/work" as const, label: "Work" },
  { to: "/about" as const, label: "Studio" },
  { to: "/faq" as const, label: "FAQ" },
] as const;
