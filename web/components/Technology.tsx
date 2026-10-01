"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const POINTS = ["sensor", "wearable", "app", "layer"] as const;
const FLOW = ["sensor", "wearable", "app", "insight"] as const;

export function Technology() {
  const t = useTranslations("technology");

  return (
    <section id="technology" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-[18ch] text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t("lead")}</p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {POINTS.map((key, i) => (
            <Reveal key={key} delay={i * 0.06}>
              <article className="border-t border-line pt-5">
                <h3 className="text-xl font-medium">{t(`points.${key}.title`)}</h3>
                <p className="mt-3 text-muted">{t(`points.${key}.body`)}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="text-[12px] uppercase tracking-[0.16em] text-muted">{t("measuresTitle")}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full border border-line px-4 py-2 text-sm">{t("glucose")}</span>
            <span className="rounded-full border border-line px-4 py-2 text-sm">{t("oxygen")}</span>
            <span className="rounded-full border border-line px-4 py-2 text-sm">{t("temperature")}</span>
          </div>
          <p className="mt-4 text-sm text-warn">{t("measuresNote")}</p>
        </Reveal>

        <Reveal className="mt-16">
          <p className="mb-6 text-[12px] uppercase tracking-[0.16em] text-muted">{t("flowTitle")}</p>
          <div className="grid gap-3 sm:grid-cols-4">
            {FLOW.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-line bg-ink-2 px-4 py-5 text-center"
              >
                <p className="font-mono text-[11px] text-accent">0{i + 1}</p>
                <p className="mt-2 text-sm">{t(`flow.${key}`)}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
