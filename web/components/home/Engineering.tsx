import { useTranslations } from "next-intl";
import { ENGINEERING_ITEMS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Engineering() {
  const t = useTranslations("engineering");

  return (
    <Section tone="soft">
      <Reveal className="max-w-3xl">
        <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
        <h2 className="mt-4 text-[clamp(2.4rem,5vw,3.6rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
        <p className="mt-6 max-w-[40rem] text-lg text-muted">{t("lead")}</p>
      </Reveal>
      <div className="mt-12 flex flex-wrap gap-2">
        {ENGINEERING_ITEMS.map((key) => (
          <span key={key} className="rounded-full bg-white px-3 py-1.5 text-sm text-muted">
            {t(key)}
          </span>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-warn">{t("aducm")}</p>
    </Section>
  );
}
