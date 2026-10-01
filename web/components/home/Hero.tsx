"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ProductVisual } from "@/components/visuals/ProductVisual";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0.01, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_42%,rgba(166,242,245,0.55),transparent_48%)]" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 pb-10 pt-16 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:min-h-[calc(100svh-72px)] lg:pb-16">
        <div>
          <motion.p {...fade(0)} className="mb-6 text-[12px] uppercase tracking-[0.22em] text-muted">
            <span className="text-ink">{t("kicker")}</span>
            <span className="mx-2 text-line">/</span>
            <span className="text-accent">{t("badge")}</span>
          </motion.p>
          <h1 className="max-w-[13ch] text-[clamp(3.6rem,8vw,6rem)] font-medium leading-[0.96] tracking-[-0.055em]">
            <motion.span {...fade(0.12)} className="block">
              {t("line1")}
            </motion.span>
            <motion.span {...fade(0.24)} className="mt-1 block text-ink/55">
              {t("line2")}
            </motion.span>
          </h1>
          <motion.p {...fade(0.36)} className="mt-7 max-w-[36rem] text-[18px] leading-relaxed text-muted">
            {t("body")}
          </motion.p>
          <motion.div {...fade(0.48)} className="mt-9 flex flex-wrap gap-3">
            <Link href="/#overview" className="btn-primary">
              {t("primary")}
            </Link>
            <Link href="/#system" className="btn-ghost">
              {t("seeSystem")}
            </Link>
            <Link href="/#follow" className="btn-ghost">
              {t("secondary")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0.01, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(63,197,216,0.28),transparent_68%)] blur-2xl" />
          <ProductVisual slot="hero" alt={t("concept")} concept={t("concept")} float aspect="aspect-[5/6] sm:aspect-[4/5]" />
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-[1400px] items-end justify-between gap-8 px-5 pb-10 md:px-8">
        <p className="max-w-2xl text-[13px] leading-relaxed text-warn">{t("disclaimer")}</p>
        <motion.a
          href="#overview"
          className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted md:flex"
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {t("scroll")}
          <span aria-hidden className="block h-8 w-px bg-ink/20" />
        </motion.a>
      </div>
    </section>
  );
}
