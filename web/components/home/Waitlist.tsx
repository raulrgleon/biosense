"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { INTERESTS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Waitlist() {
  const t = useTranslations("waitlist");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error" | "fail">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const interest = String(data.get("interest") || "consumer");
    const consent = data.get("consent") === "on";

    if (!firstName || !email || !consent) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, interest, consent }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("fail");
    }
  }

  return (
    <Section id="waitlist">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{t("body")}</p>
        </Reveal>
        <Reveal>
          {status === "ok" ? (
            <div className="rounded-[28px] border border-line bg-bg-2 p-8">
              <h3 className="text-2xl font-medium">{t("successTitle")}</h3>
              <p className="mt-3 text-muted">{t("successBody")}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-[28px] border border-line bg-bg-2 p-6 sm:p-8">
              <label className="block text-sm text-muted">
                {t("firstName")}
                <input
                  name="firstName"
                  required
                  autoComplete="given-name"
                  className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-paper outline-none focus:border-accent"
                />
              </label>
              <label className="mt-4 block text-sm text-muted">
                {t("email")}
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-paper outline-none focus:border-accent"
                />
              </label>
              <label className="mt-4 block text-sm text-muted">
                {t("interest")}
                <select
                  name="interest"
                  className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-paper outline-none focus:border-accent"
                  defaultValue="consumer"
                >
                  {INTERESTS.map((item) => (
                    <option key={item} value={item}>
                      {t(item)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-5 flex items-start gap-3 text-sm text-muted">
                <input name="consent" type="checkbox" required className="mt-1 accent-accent" />
                <span>{t("consent")}</span>
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-full bg-paper py-3 text-sm font-medium text-bg disabled:opacity-60"
              >
                {status === "sending" ? t("sending") : t("submit")}
              </button>
              {status === "error" || status === "fail" ? (
                <p className="mt-3 text-sm text-warn">{status === "fail" ? t("fail") : t("error")}</p>
              ) : null}
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
