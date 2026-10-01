"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FAQ as FAQ_KEYS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  const t = useTranslations("faq");
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<string | null>(FAQ_KEYS[0]);

  return (
    <Section id="faq" tone="soft">
      <Reveal>
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
      </Reveal>
      <div className="mt-12 max-w-3xl">
        {FAQ_KEYS.map((key) => {
          const isOpen = open === key;
          return (
            <div key={key} className="border-t border-line last:border-b">
              <button
                type="button"
                className="flex w-full items-center justify-between py-5 text-left text-lg font-medium"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : key)}
              >
                {t(`${key}.q`)}
                <span aria-hidden className="ml-4 text-muted">{isOpen ? "–" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 max-w-[40rem] leading-relaxed text-muted">{t(`${key}.a`)}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
