"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { CONTINUITY_WORDS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Continuity() {
  const t = useTranslations("continuity");
  const reduce = useReducedMotion();

  return (
    <Section className="relative overflow-hidden">
      <svg className="pointer-events-none absolute inset-x-0 top-24 h-64 w-full opacity-70" aria-hidden>
        <motion.path
          d="M-20 110 C 120 40, 220 180, 360 90 S 620 20, 860 120 S 1100 200, 1400 90"
          fill="none"
          stroke="#3fc5d8"
          strokeWidth="1.4"
          initial={reduce ? false : { pathLength: 0, opacity: 0.25 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 2.2 }}
        />
      </svg>
      <Reveal className="relative mx-auto max-w-[18ch] text-center">
        <h2 className="text-[clamp(3rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">{t("title")}</h2>
        <p className="mx-auto mt-8 max-w-[34rem] text-lg text-muted">{t("p1")}</p>
      </Reveal>
      <div className="relative mt-16 flex flex-wrap justify-center gap-3">
        {CONTINUITY_WORDS.map((key, i) => (
          <motion.span
            key={key}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="rounded-full bg-white px-5 py-2 text-sm shadow-[0_8px_24px_rgba(10,13,16,0.04)]"
          >
            {t(key)}
          </motion.span>
        ))}
      </div>
      <p className="relative mx-auto mt-12 max-w-[38rem] text-center text-lg leading-relaxed text-muted">{t("p2")}</p>
    </Section>
  );
}
