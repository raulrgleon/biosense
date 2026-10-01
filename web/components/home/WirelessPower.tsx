"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";

export function WirelessPower() {
  const t = useTranslations("wireless");
  const reduce = useReducedMotion();

  return (
    <Section tone="dark" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(63,197,216,0.16),transparent_55%)]" />
      <Reveal className="relative max-w-3xl">
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em] text-white">
          {t("title")}
        </h2>
        <p className="mt-8 max-w-[38rem] text-lg leading-relaxed text-white/60">{t("p1")}</p>
        <p className="mt-4 max-w-[38rem] text-lg leading-relaxed text-white/60">{t("p2")}</p>
      </Reveal>

      <div className="relative mt-20 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
        <Reveal className="rounded-[2rem] border border-white/10 bg-white/4 p-8">
          <ProductVisual slot="bioband" alt={t("bandTitle")} concept={t("note")} aspect="mb-6 aspect-[16/9]" className="!rounded-[1.2rem]" />
          <p className="text-[12px] uppercase tracking-[0.16em] text-accent">{t("bandTitle")}</p>
          <p className="mt-4 text-white">{t("bandItems")}</p>
        </Reveal>

        <div className="relative flex flex-col items-center justify-center py-6">
          {!reduce ? (
            <>
              <motion.span
                className="absolute h-28 w-28 rounded-full border border-accent/30"
                animate={{ scale: [0.7, 1.35], opacity: [0.4, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute h-28 w-28 rounded-full border border-accent/20"
                animate={{ scale: [0.7, 1.35], opacity: [0.35, 0] }}
                transition={{ duration: 2.8, delay: 0.9, repeat: Infinity, ease: "easeOut" }}
              />
            </>
          ) : null}
          <p className="relative text-center font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            {t("power")} ↓
            <span className="mt-1 block">{t("data")} ↑</span>
          </p>
        </div>

        <Reveal className="rounded-[2rem] border border-white/10 bg-white/4 p-8">
          <p className="text-[12px] uppercase tracking-[0.16em] text-accent">{t("sensorTitle")}</p>
          <p className="mt-4 text-white">{t("sensorItems")}</p>
          <p className="mt-3 text-sm text-white/50">{t("sensorNone")}</p>
        </Reveal>
      </div>
      <p className="relative mt-10 text-sm text-white/45">{t("note")}</p>
    </Section>
  );
}
