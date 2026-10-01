"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-24 lg:pt-24">
        <div>
          <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.22em] text-accent">
            {t("kicker")}
          </p>
          <h1 className="max-w-[12ch] text-[3.1rem] font-medium leading-[1.02] tracking-[-0.04em] sm:text-[4.6rem]">
            {t("headline")}
          </h1>
          <p className="mt-6 text-xl text-paper/80">{t("subheadline")}</p>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            {t("body")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-paper px-6 py-3 text-[14px] font-medium text-ink transition hover:bg-white"
            >
              {t("primary")}
            </Link>
            <Link
              href="/#technology"
              className="rounded-full border border-line px-6 py-3 text-[14px] text-paper transition hover:border-paper/40"
            >
              {t("secondary")}
            </Link>
          </div>
        </div>

        <figure className="relative overflow-hidden rounded-[28px] border border-line bg-ink-2 p-5">
          <figcaption className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-muted">
            <span>{t("visualLabel")}</span>
            <span>{t("visualCaption")}</span>
          </figcaption>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#08090c]">
            <motion.div
              className="absolute inset-0"
              animate={reduce ? undefined : { opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(125,206,196,0.18), transparent 42%)",
              }}
            />
            <svg viewBox="0 0 400 300" className="relative h-full w-full">
              <ellipse cx="200" cy="196" rx="88" ry="18" fill="none" stroke="rgba(243,239,230,0.12)" />
              <rect x="154" y="118" width="92" height="18" rx="9" fill="none" stroke="#7dcec4" strokeWidth="1.4" />
              <rect x="188" y="86" width="24" height="36" rx="8" fill="none" stroke="rgba(243,239,230,0.35)" />
              <circle cx="200" cy="78" r="16" fill="none" stroke="#7dcec4" strokeWidth="1.4" />
              <circle cx="200" cy="78" r="4" fill="#7dcec4" />
              <path
                d="M40 230 C 90 210, 140 248, 200 228 S 320 200, 360 220"
                fill="none"
                stroke="rgba(125,206,196,0.45)"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </figure>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-16 text-[13px] leading-relaxed text-warn">
        {t("disclaimer")}
      </p>
    </section>
  );
}
