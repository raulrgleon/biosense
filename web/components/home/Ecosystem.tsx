"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ECOSYSTEM_STEPS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";

export function Ecosystem() {
  const t = useTranslations("ecosystem");
  const w = useTranslations("wireless");
  const reduce = useReducedMotion();
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
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">
          {t("title1")}
          <span className="mt-1 block text-ink/50">{t("title2")}</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(10,13,16,0.05)]">
            <ProductVisual slot="ecosystem" alt={t("title1")} concept={t("sensor.label")} aspect="mb-6 aspect-[16/10]" />
            <EcosystemDiagram active={active} reduce={!!reduce} power={w("power")} data={w("data")} />
            <ol className="mt-8 space-y-3">
              {ECOSYSTEM_STEPS.map((key, i) => (
                <li key={key} className={i === active ? "text-ink" : "text-muted"}>
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
              <p className="mt-4 max-w-[38rem] text-lg leading-relaxed text-muted">{t(`${key}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function EcosystemDiagram({
  active,
  reduce,
  power,
  data,
}: {
  active: number;
  reduce: boolean;
  power: string;
  data: string;
}) {
  return (
    <div className="relative mx-auto h-72 max-w-xs">
      <motion.div
        className="absolute left-1/2 top-4 w-20 -translate-x-1/2 rounded-[1.4rem] bg-ink p-3"
        animate={{ opacity: active >= 2 ? 1 : 0.18, y: reduce ? 0 : active >= 2 ? 0 : 10 }}
      >
        <div className="h-24 rounded-xl bg-paper" />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-[132px] h-7 w-36 -translate-x-1/2 rounded-full bg-ink"
        animate={{ opacity: active >= 1 ? 1 : 0.2 }}
      >
        <div className="mx-auto mt-2 h-3 w-16 rounded-full bg-accent" />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-[188px] flex -translate-x-1/2 flex-col items-center text-[10px] uppercase tracking-[0.16em] text-accent"
        animate={{ opacity: active >= 1 ? 1 : 0 }}
      >
        <span>{power} ↓</span>
        <span className="mt-1">{data} ↑</span>
      </motion.div>
      {!reduce && active >= 1 ? (
        <motion.div
          className="absolute left-1/2 top-[168px] h-16 w-16 -translate-x-1/2 rounded-full border border-accent/40"
          animate={{ scale: [0.7, 1.25], opacity: [0.45, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      ) : null}
      <motion.div
        className="absolute left-1/2 top-[230px] h-14 w-8 -translate-x-1/2 rounded-lg bg-[#d5e0e4]"
        animate={{ opacity: 1, y: reduce ? 0 : [0, -3, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
