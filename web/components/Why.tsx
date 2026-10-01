import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const KEYS = ["awareness", "prevention", "agency"] as const;

export function Why() {
  const t = useTranslations("why");

  return (
    <section id="why" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-[16ch] text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t("lead")}</p>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {KEYS.map((key, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <article className="border-t border-line pt-6">
                <h3 className="text-xl font-medium">{t(`items.${key}.title`)}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t(`items.${key}.body`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
