"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ECOSYSTEM_STEPS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Ecosystem() {
  const t = useTranslations("ecosystem");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = ECOSYSTEM_STEPS.map((_, i) => document.getElementById(`eco-${i}`));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target.id) return;
        const index = Number(visible.target.id.replace("eco-", ""));
        if (!Number.isNaN(index)) setActive(index);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.6] },
    );
    nodes.forEach((node) => node && io.observe(node));
    return () => io.disconnect();
  }, []);

  return (
    <Section id="ecosystem">
      <Reveal>
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
          {t("title1")}
          <span className="mt-1 block text-paper/70">{t("title2")}</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[28px] border border-line bg-bg-2 p-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
              {t(`${ECOSYSTEM_STEPS[active]}.label`)}
            </p>
            <ol className="mt-8 space-y-4">
              {ECOSYSTEM_STEPS.map((key, i) => (
                <li key={key} className={i === active ? "text-paper" : "text-muted"}>
                  <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                  <span className="ml-3">{t(`${key}.label`)}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="space-y-24">
          {ECOSYSTEM_STEPS.map((key, i) => (
            <article key={key} id={`eco-${i}`} className="scroll-mt-32">
              <h3 className="text-2xl font-medium">{t(`${key}.label`)}</h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{t(`${key}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
