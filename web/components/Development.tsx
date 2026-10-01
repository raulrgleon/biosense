import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const KEYS = ["simulation", "architecture", "validation"] as const;

export function Development() {
  const t = useTranslations("development");

  return (
    <section id="development" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">{t("title")}</h2>
          <p className="mt-5 inline-flex rounded-full border border-accent/30 bg-accent-deep/40 px-3 py-1 text-[12px] uppercase tracking-[0.14em] text-accent">
            {t("badge")}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{t("body")}</p>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {KEYS.map((key) => (
            <Reveal key={key}>
              <article>
                <h3 className="text-xl font-medium">{t(`items.${key}.title`)}</h3>
                <p className="mt-3 text-muted">{t(`items.${key}.body`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-14 max-w-3xl text-sm leading-relaxed text-warn">{t("disclaimer")}</p>
      </div>
    </section>
  );
}
