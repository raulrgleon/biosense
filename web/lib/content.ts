export const NAV = [
  { href: "/#technology", key: "technology" },
  { href: "/#why", key: "why" },
  { href: "/#development", key: "development" },
  { href: "/#vision", key: "vision" },
  { href: "/#partners", key: "partners" },
  { href: "/#faq", key: "faq" },
] as const;

export const SIGNALS = [
  { id: "glucose", label: "underDevelopment" },
  { id: "oxygen", label: "notSpo2" },
  { id: "temperature", label: "underDevelopment" },
] as const;

export const ECOSYSTEM_STEPS = ["sensor", "band", "app", "insight"] as const;

export const INSIGHT_STEPS = ["signal", "context", "pattern", "insight"] as const;

export const BENEFITS = [
  "awareness",
  "nutrition",
  "activity",
  "trends",
  "personal",
  "research",
] as const;

export const ROADMAP = [
  { id: "s01", status: "activeValidated" },
  { id: "s02", status: "active" },
  { id: "s03", status: "active" },
  { id: "s04", status: "development" },
  { id: "s05", status: "planned" },
  { id: "s06", status: "planned" },
  { id: "s07", status: "future" },
  { id: "s08", status: "future" },
] as const;

export const ENGINEERING_ITEMS = [
  "electrochemical",
  "afe",
  "potentiostat",
  "tia",
  "adc",
  "mcu",
  "inductive",
  "telemetry",
  "bioband",
  "software",
] as const;

export const DISCIPLINES = [
  "electrochemistry",
  "biomedical",
  "embedded",
  "rf",
  "materials",
  "firmware",
  "mobile",
  "data",
  "design",
] as const;

export const AUDIENCES = [
  "researcher",
  "engineer",
  "university",
  "lab",
  "manufacturer",
  "investor",
  "healthcare",
] as const;

export const INTERESTS = [
  "consumer",
  "researcher",
  "engineer",
  "investor",
  "partner",
  "media",
  "other",
] as const;

export const FAQ = [
  "what",
  "available",
  "device",
  "measure",
  "battery",
  "spo2",
  "stage",
  "collaborate",
] as const;

export const CONTINUITY_WORDS = [
  "meals",
  "movement",
  "sleep",
  "stress",
  "recovery",
  "environment",
] as const;
