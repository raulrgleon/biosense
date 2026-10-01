"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const ROLES = ["consumer", "investor", "researcher", "partner", "collaborator"] as const;

export function EarlyAccess() {
  const t = useTranslations("waitlist");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const role = String(data.get("role") || "consumer");

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">{t("title")}</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{t("lead")}</p>
        </Reveal>

        <Reveal>
          {status === "ok" ? (
            <div className="rounded-[28px] border border-line bg-ink-2 p-8">
              <h3 className="text-2xl font-medium">{t("successTitle")}</h3>
              <p className="mt-3 text-muted">{t("successBody")}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-[28px] border border-line bg-ink-2 p-6 sm:p-8">
              <label className="block text-sm text-muted">
                {t("name")}
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-accent"
                />
              </label>
              <label className="mt-4 block text-sm text-muted">
                {t("email")}
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-accent"
                />
              </label>
              <label className="mt-4 block text-sm text-muted">
                {t("role")}
                <select
                  name="role"
                  className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-accent"
                  defaultValue="consumer"
                >
                  {ROLES.map((role) => (
                    <option key={role} value={role}>
                      {t(`roles.${role}`)}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-full bg-paper py-3 text-sm font-medium text-ink transition hover:bg-white disabled:opacity-60"
              >
                {status === "sending" ? t("submitting") : t("submit")}
              </button>
              {status === "error" ? (
                <p className="mt-3 text-sm text-warn">{t("invalid")}</p>
              ) : null}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
