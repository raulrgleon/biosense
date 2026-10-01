import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ResponsibleDevelopment() {
  const t = useTranslations("responsible");

  return (
    <Section>
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
        <p className="mt-8 text-lg leading-relaxed text-muted">{t("body")}</p>
        <p className="mt-8 text-sm uppercase tracking-[0.08em] text-paper/70">{t("items")}</p>
      </Reveal>
    </Section>
  );
}
