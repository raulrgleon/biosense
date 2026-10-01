export const NAV = [
  { href: "/#technology", key: "technology" },
  { href: "/#why", key: "why" },
  { href: "/#development", key: "development" },
  { href: "/#vision", key: "vision" },
  { href: "/#follow", key: "follow" },
  { href: "/#faq", key: "faq" },
] as const;

export const SIGNALS = [
  { id: "glucose", label: "underDevelopment" },
  { id: "oxygen", label: "notSpo2" },
  { id: "temperature", label: "underDevelopment" },
] as const;

export const OVERVIEW_STEPS = ["sensor", "band", "app"] as const;

export const SYSTEM_STEPS = ["sensor", "band", "app", "insight"] as const;

export const WHY_WORDS = [
  "meals",
  "sleep",
  "movement",
  "stress",
  "recovery",
  "environment",
] as const;

export const WHY_BENEFITS = ["patterns", "change", "context"] as const;

export const ROADMAP_GROUPS = [
  { id: "today", status: "active", items: ["simulation", "research", "wireless"] },
  { id: "next", status: "planned", items: ["bench", "prototypes"] },
  { id: "future", status: "future", items: ["preclinical", "clinical"] },
] as const;

export const COLLABORATE_AUDIENCES = [
  "researcher",
  "engineer",
  "university",
  "lab",
  "manufacturer",
  "partner",
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
