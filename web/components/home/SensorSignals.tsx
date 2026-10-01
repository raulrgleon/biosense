"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { SIGNALS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function SensorSignals() {
  const t = useTranslations("signals");
  const reduce = useReducedMotion();

  return (
    <Section id="technology" tone="soft">
      <Reveal>
        <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
        <h2 className="mt-4 text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
      </Reveal>
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {SIGNALS.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.1} variant="scale">
            <article className="h-full rounded-[2rem] bg-white p-6 shadow-[0_16px_50px_rgba(10,13,16,0.04)]">
              <SignalViz kind={item.id} reduce={!!reduce} />
              <h3 className="mt-6 text-2xl font-medium">{t(`${item.id}.title`)}</h3>
              <p className="mt-3 max-w-[34rem] leading-relaxed text-muted">{t(`${item.id}.body`)}</p>
              <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-warn">{t(item.label)}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted">{t("viz")}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function SignalViz({ kind, reduce }: { kind: string; reduce: boolean }) {
  if (kind === "glucose") {
    return (
      <div className="relative h-28 overflow-hidden rounded-2xl bg-[#eef8fa]">
        <svg viewBox="0 0 300 112" className="h-full w-full" aria-hidden>
          <motion.path
            d="M8 70 C 40 70, 52 36, 84 36 S 126 78, 160 62 S 210 28, 248 44 S 280 72, 296 60"
            fill="none"
            stroke="#3fc5d8"
            strokeWidth="2"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.6 }}
          />
        </svg>
        {!reduce
          ? [0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-accent"
                style={{ top: `${38 + i * 14}%`, left: `${18 + i * 26}%` }}
                animate={{ y: [0, -6, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3.4 + i, repeat: Infinity, ease: "easeInOut" }}
              />
            ))
          : null}
      </div>
    );
  }

  if (kind === "oxygen") {
    return (
      <div className="relative h-28 overflow-hidden rounded-2xl bg-[#eef3f8]">
        <motion.div
          className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(98,221,235,0.45),transparent_62%)]"
          animate={reduce ? undefined : { scale: [0.92, 1.08, 0.92], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <div className="relative h-28 overflow-hidden rounded-2xl bg-gradient-to-r from-[#f4e8dc] via-[#f7f1ea] to-[#e8f4f2]">
      <svg viewBox="0 0 300 112" className="h-full w-full" aria-hidden>
        <path d="M10 68 C 70 62, 110 74, 160 66 S 240 58, 290 64" fill="none" stroke="#8a7048" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
