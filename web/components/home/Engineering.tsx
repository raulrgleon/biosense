import { useTranslations } from "next-intl";
import { ENGINEERING_ITEMS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Engineering() {
  const t = useTranslations("engineering");

  return (
    <Section>
      <Reveal className="max-w-3xl">
        <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
        <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">{t("title")}</h2>
        <p className="mt-6 text-lg text-muted">{t("lead")}</p>
      </Reveal>
      <div className="mt-12 flex flex-wrap gap-2">
        {ENGINEERING_ITEMS.map((key) => (
          <span key={key} className="rounded-full border border-line px-3 py-1.5 text-sm text-muted">
            {t(key)}
          </span>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-warn">{t("aducm")}</p>
    </Section>
  );
}
