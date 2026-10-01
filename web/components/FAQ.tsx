import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const KEYS = ["what", "available", "device", "measure", "far", "join", "lang", "diagnosis"] as const;

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">{t("title")}</h2>
        </Reveal>
        <div className="mt-12 max-w-3xl">
          {KEYS.map((key) => (
            <details key={key} className="group border-t border-line py-2 last:border-b">
              <summary className="cursor-pointer list-none py-4 text-lg font-medium">
                {t(`items.${key}.q`)}
              </summary>
              <p className="pb-5 leading-relaxed text-muted">{t(`items.${key}.a`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
