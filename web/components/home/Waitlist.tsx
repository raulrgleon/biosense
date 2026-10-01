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
          <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted">{t("body")}</p>
        </Reveal>
        <Reveal variant="scale">
          {status === "ok" ? (
            <div className="rounded-[2rem] border border-line bg-white p-8">
              <h3 className="text-2xl font-medium">{t("successTitle")}</h3>
              <p className="mt-3 text-muted">{t("successBody")}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-line bg-white p-6 sm:p-8">
              <label className="block text-sm text-muted">
                {t("firstName")}
                <input name="firstName" required autoComplete="given-name" className="field" />
              </label>
              <label className="mt-4 block text-sm text-muted">
                {t("email")}
                <input name="email" type="email" required autoComplete="email" className="field" />
              </label>
              <label className="mt-4 block text-sm text-muted">
                {t("interest")}
                <select name="interest" className="field" defaultValue="consumer">
                  {INTERESTS.map((item) => (
                    <option key={item} value={item}>
                      {t(item)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-5 flex items-start gap-3 text-sm text-muted">
                <input name="consent" type="checkbox" required className="mt-1 accent-[#3fc5d8]" />
                <span>{t("consent")}</span>
              </label>
              <button type="submit" disabled={status === "sending"} className="btn-primary mt-6 w-full disabled:opacity-60">
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
