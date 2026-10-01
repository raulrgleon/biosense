"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { SYSTEM_STEPS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";

export function SystemOverview() {
  const t = useTranslations("system");
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = SYSTEM_STEPS.map((_, i) => document.getElementById(`sys-${i}`));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target.id) return;
        const index = Number(visible.target.id.replace("sys-", ""));
        if (!Number.isNaN(index)) setActive(index);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.6] },
    );
    nodes.forEach((node) => node && io.observe(node));
    return () => io.disconnect();
  }, []);

  return (
    <Section id="system">
      <Reveal>
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">
          {t("title1")}
          <span className="mt-1 block text-ink/50">{t("title2")}</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(10,13,16,0.05)]">
            <ProductVisual slot="system" alt={t("title1")} concept={t("label")} aspect="mb-6 aspect-[16/10]" />
            <SystemDiagram active={active} reduce={!!reduce} />
            <ol className="mt-8 space-y-3">
              {SYSTEM_STEPS.map((key, i) => (
                <li key={key} className={i === active ? "text-ink" : "text-muted"}>
                  <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                  <span className="ml-3">{t(`${key}.label`)}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="space-y-24">
          {SYSTEM_STEPS.map((key, i) => (
            <article key={key} id={`sys-${i}`} className="scroll-mt-32">
              <h3 className="text-2xl font-medium">{t(`${key}.label`)}</h3>
              <p className="mt-4 max-w-[38rem] text-lg leading-relaxed text-muted">{t(`${key}.body`)}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 overflow-hidden rounded-[2rem] bg-dark px-8 py-14 text-paper md:px-14">
        <Reveal>
          <h3 className="max-w-[18ch] text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium tracking-[-0.04em] text-white">
            {t("powerTitle")}
          </h3>
          <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-white/60">{t("powerBody")}</p>
          <p className="mt-6 text-sm text-white/45">{t("note")}</p>
        </Reveal>
      </div>

      <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <ProductVisual slot="underSkin" alt={t("label")} concept={t("label")} aspect="aspect-[5/4]" />
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="max-w-[14ch] text-[clamp(2.2rem,4vw,3.4rem)] font-medium tracking-[-0.05em]">{t("underTitle")}</h3>
          <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-muted">{t("underBody")}</p>
          <p className="mt-6 max-w-[36rem] leading-relaxed text-muted">{t("form")}</p>
          <p className="mt-3 max-w-[36rem] text-sm text-muted">{t("materials")}</p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-muted">{t("label")}</p>
        </Reveal>
      </div>
    </Section>
  );
}

function SystemDiagram({ active, reduce }: { active: number; reduce: boolean }) {
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
