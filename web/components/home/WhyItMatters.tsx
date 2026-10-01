"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { WHY_BENEFITS, WHY_WORDS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function WhyItMatters() {
  const t = useTranslations("why");
  const reduce = useReducedMotion();

  return (
    <Section id="why" className="relative overflow-hidden">
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
      </Reveal>

      <div className="relative mt-14 flex flex-wrap justify-center gap-3">
        {WHY_WORDS.map((key, i) => (
          <motion.span
            key={key}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
            className="rounded-full bg-white px-5 py-2 text-sm shadow-[0_8px_24px_rgba(10,13,16,0.04)]"
          >
            {t(key)}
          </motion.span>
        ))}
      </div>

      <p className="relative mx-auto mt-12 max-w-[38rem] text-center text-lg leading-relaxed text-muted">{t("body")}</p>

      <div className="relative mt-16 grid gap-6 md:grid-cols-3">
        {WHY_BENEFITS.map((key, i) => (
          <Reveal key={key} delay={i * 0.08} variant="scale" className="rounded-[2rem] bg-white p-8">
            {i === 0 ? <BenefitTrace reduce={!!reduce} /> : null}
            <h3 className="text-2xl font-medium">{t(`${key}.title`)}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t(`${key}.body`)}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function BenefitTrace({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 280 72" className="mb-6 w-full" aria-hidden>
      <motion.path
        d="M8 48 C 48 48, 62 16, 98 16 S 140 58, 176 40 S 230 12, 272 28"
        fill="none"
        stroke="#3fc5d8"
        strokeWidth="2"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </svg>
  );
}
