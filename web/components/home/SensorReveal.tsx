"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function SensorReveal() {
  const t = useTranslations("reveal");
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const shell = useTransform(scrollYProgress, [0, 0.18], [1, 0.12]);
  const coil = useTransform(scrollYProgress, [0.12, 0.28], [0, 1]);
  const sensors = useTransform(scrollYProgress, [0.26, 0.42], [0, 1]);
  const electronics = useTransform(scrollYProgress, [0.4, 0.56], [0, 1]);
  const channels = useTransform(scrollYProgress, [0.54, 0.7], [0, 1]);
  const band = useTransform(scrollYProgress, [0.66, 0.82], [0, 1]);
  const field = useTransform(scrollYProgress, [0.78, 0.95], [0, 1]);

  const labels = [
    { key: "shell", progress: shell },
    { key: "coil", progress: coil },
    { key: "sensors", progress: sensors },
    { key: "electronics", progress: electronics },
    { key: "band", progress: band },
    { key: "field", progress: field },
  ] as const;

  return (
    <section ref={ref} className="relative bg-surface-2/70">
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-[12ch] text-[clamp(2.8rem,6vw,4.5rem)] font-medium leading-[1] tracking-[-0.05em]">
          {t("line1")}
          <span className="mt-1 block text-ink/50">{t("line2")}</span>
        </h2>
      </div>

      <div className="relative mx-auto hidden min-h-[340vh] max-w-[1280px] px-5 md:block md:px-8">
        <div className="sticky top-24 grid items-center gap-12 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
          <ol className="space-y-4 text-sm">
            {labels.map(({ key, progress }) => (
              <motion.li key={key} style={{ opacity: reduce ? 1 : progress }} className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                {t(key)}
              </motion.li>
            ))}
          </ol>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(10,13,16,0.08)]">
            <p className="absolute left-5 top-5 z-10 text-[10px] uppercase tracking-[0.18em] text-muted">{t("concept")}</p>
            <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden>
              <motion.ellipse cx="240" cy="168" rx="110" ry="28" fill="none" stroke="#3fc5d8" strokeOpacity="0.2" style={{ opacity: reduce ? 1 : field }} />
              <motion.ellipse cx="240" cy="168" rx="148" ry="42" fill="none" stroke="#3fc5d8" strokeOpacity="0.12" style={{ opacity: reduce ? 1 : field }} />
              <motion.rect x="156" y="148" width="168" height="28" rx="14" fill="#111418" style={{ opacity: reduce ? 1 : band }} />
              <motion.rect x="186" y="156" width="78" height="12" rx="6" fill="#3fc5d8" style={{ opacity: reduce ? 1 : band }} />
              <motion.path d="M240 176v54" stroke="#3fc5d8" strokeDasharray="3 5" style={{ opacity: reduce ? 1 : field }} />
              <motion.rect x="214" y="228" width="52" height="108" rx="14" fill="#d5e0e4" style={{ opacity: reduce ? 1 : shell }} />
              <motion.circle cx="240" cy="268" r="22" fill="none" stroke="#3fc5d8" strokeWidth="2" style={{ opacity: reduce ? 1 : coil }} />
              <motion.circle cx="240" cy="268" r="6" fill="#3fc5d8" style={{ opacity: reduce ? 1 : sensors }} />
              <motion.rect x="224" y="296" width="32" height="18" rx="4" fill="#9fb4bb" style={{ opacity: reduce ? 1 : electronics }} />
              <motion.g style={{ opacity: reduce ? 1 : channels }}>
                <text x="300" y="256" fill="#3fc5d8" fontSize="11">{t("glucose")}</text>
                <text x="300" y="276" fill="#62ddeb" fontSize="11">{t("oxygen")}</text>
                <text x="300" y="296" fill="#8a7048" fontSize="11">{t("temperature")}</text>
              </motion.g>
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-8 px-5 pb-20 md:hidden">
        {labels.map(({ key }) => (
          <div key={key} className="rounded-[1.5rem] bg-white p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent">{t(key)}</p>
            <p className="mt-2 text-sm text-muted">{t("concept")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
