"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ImplantHero } from "@/components/visuals/ConceptRenders";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] items-end gap-12 px-5 pb-16 pt-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:min-h-[calc(100svh-72px)] lg:pb-20">
        <div>
          <p className="mb-6 text-[12px] uppercase tracking-[0.22em] text-accent">{t("badge")}</p>
          <motion.h1
            initial={reduce ? undefined : { opacity: 0.01, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[14ch] text-[3.2rem] font-medium leading-[1.02] tracking-[-0.045em] text-paper sm:text-[5rem]"
          >
            {t("line1")}
            <span className="mt-1 block text-paper/70">{t("line2")}</span>
          </motion.h1>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted">{t("body")}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/#why"
              className="rounded-full bg-paper px-6 py-3 text-[14px] font-medium text-bg transition hover:bg-white"
            >
              {t("primary")}
            </Link>
            <Link
              href="/#development"
              className="rounded-full border border-line px-6 py-3 text-[14px] text-paper transition hover:border-paper/30"
            >
              {t("secondary")}
            </Link>
          </div>
        </div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1 }}
        >
          <ImplantHero label={t("concept")} />
        </motion.div>
      </div>
      <p className="mx-auto max-w-[1400px] px-5 pb-16 text-[13px] leading-relaxed text-warn md:px-8">
        {t("disclaimer")}
      </p>
    </section>
  );
}
