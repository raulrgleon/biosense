"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CONTINUITY_WORDS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Continuity() {
  const t = useTranslations("continuity");

  return (
    <Section>
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
        <p className="mt-8 text-lg text-muted">{t("p1")}</p>
      </Reveal>
      <div className="mt-12 flex flex-wrap gap-3">
        {CONTINUITY_WORDS.map((key, i) => (
          <motion.span
            key={key}
            initial={{ opacity: 0.35 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="rounded-full border border-line px-4 py-2 text-sm"
          >
            {t(key)}
          </motion.span>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">{t("p2")}</p>
    </Section>
  );
}
