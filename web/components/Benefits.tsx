import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const KEYS = ["insight", "awareness", "multi", "personal", "ecosystem", "everyday"] as const;

export function Benefits() {
  const t = useTranslations("benefits");

  return (
    <section id="benefits" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-[14ch] text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">{t("lead")}</p>
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KEYS.map((key, i) => (
            <Reveal key={key} delay={i * 0.05}>
              <article className="h-full rounded-3xl border border-line bg-ink-2/70 p-7">
                <h3 className="text-xl font-medium">{t(`cards.${key}.title`)}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t(`cards.${key}.body`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
