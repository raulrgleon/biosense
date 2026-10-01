"use client";

import { useTranslations } from "next-intl";
import { ROADMAP_GROUPS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Development() {
  const t = useTranslations("development");

  return (
    <Section id="development" tone="soft">
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
        <p className="mt-8 max-w-[40rem] text-lg leading-relaxed text-muted">{t("body")}</p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {ROADMAP_GROUPS.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.08} className="rounded-[2rem] bg-white p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {t(`status.${group.status}`)}
            </p>
            <h3 className="mt-3 text-2xl font-medium">{t(group.id)}</h3>
            <ul className="mt-6 space-y-3 text-muted">
              {group.items.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <p className="mt-14 max-w-[42rem] text-lg leading-relaxed text-muted">{t("responsible")}</p>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-warn">{t("disclaimer")}</p>
    </Section>
  );
}
