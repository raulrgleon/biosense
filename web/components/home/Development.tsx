"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ROADMAP } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Development() {
  const t = useTranslations("development");
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 40%"] });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="development">
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
        <p className="mt-8 max-w-[40rem] text-lg leading-relaxed text-muted">{t("body")}</p>
      </Reveal>

      <div ref={ref} className="relative mt-16 hidden md:block">
        <div className="absolute left-0 right-0 top-[5px] h-px bg-line" />
        <motion.div
          className="absolute left-0 top-[5px] h-px origin-left bg-accent"
          style={{ width: reduce ? "100%" : line }}
        />
        <ol className="grid grid-cols-8 gap-3">
          {ROADMAP.map((item) => (
            <li key={item.id}>
              <span className="mb-5 block h-2.5 w-2.5 rounded-full bg-white ring-1 ring-accent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{t(`status.${item.status}`)}</p>
              <p className="mt-2 text-sm leading-snug">{t(`${item.id}.title`)}</p>
            </li>
          ))}
        </ol>
      </div>

      <ol className="mt-12 space-y-6 border-l border-line pl-6 md:hidden">
        {ROADMAP.map((item) => (
          <li key={item.id}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{t(`status.${item.status}`)}</p>
            <p className="mt-1 text-lg">{t(`${item.id}.title`)}</p>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-warn">{t("disclaimer")}</p>
    </Section>
  );
}
