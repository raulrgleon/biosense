import { useTranslations } from "next-intl";
import { ROADMAP } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Development() {
  const t = useTranslations("development");

  return (
    <Section id="development">
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
        <p className="mt-8 text-lg leading-relaxed text-muted">{t("body")}</p>
      </Reveal>
      <ol className="mt-16 divide-y divide-line border-y border-line">
        {ROADMAP.map((item) => (
          <li key={item.id} className="grid gap-3 py-6 md:grid-cols-[140px_1fr_auto] md:items-center">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent">
              {t(`${item.id}.stage`)}
            </p>
            <p className="text-lg">{t(`${item.id}.title`)}</p>
            <p className="text-[12px] uppercase tracking-[0.12em] text-muted">
              {t(`status.${item.status}`)}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-warn">{t("disclaimer")}</p>
    </Section>
  );
}
