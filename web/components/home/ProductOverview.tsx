"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { OVERVIEW_STEPS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TraceField } from "@/components/visuals/ConceptRenders";

export function ProductOverview() {
  const t = useTranslations("overview");
  const reduce = useReducedMotion();

  return (
    <Section id="overview" className="relative overflow-hidden">
      <TraceField />
      <Reveal className="relative max-w-3xl">
        <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
        <h2 className="mt-4 max-w-[16ch] text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">
          {t("title")}
        </h2>
        <p className="mt-8 max-w-[40rem] text-lg leading-relaxed text-muted">{t("body")}</p>
      </Reveal>

      <div className="relative mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {OVERVIEW_STEPS.map((key, i) => (
          <div key={key} className="contents">
            <Reveal delay={i * 0.08} variant="scale">
              <article className="h-full rounded-[2rem] bg-white p-8 shadow-[0_16px_50px_rgba(10,13,16,0.04)]">
                <p className="font-mono text-[11px] text-accent">0{i + 1}</p>
                <h3 className="mt-4 text-2xl font-medium">{t(`${key}.label`)}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t(`${key}.body`)}</p>
              </article>
            </Reveal>
            {i < OVERVIEW_STEPS.length - 1 ? (
              <motion.div
                aria-hidden
                className="hidden items-center justify-center text-accent lg:flex"
                initial={reduce ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl">→</span>
              </motion.div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
