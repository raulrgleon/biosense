import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

export function Impact() {
  const t = useTranslations("impact");

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-[16ch] text-4xl font-medium tracking-[-0.03em] sm:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{t("body")}</p>
        </Reveal>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {(["one", "two", "three"] as const).map((key) => (
            <Reveal key={key}>
              <p className="rounded-3xl border border-line px-6 py-10 text-2xl font-medium tracking-tight">
                {t(`quotes.${key}`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
