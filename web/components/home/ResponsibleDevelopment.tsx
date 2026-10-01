import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ResponsibleDevelopment() {
  const t = useTranslations("responsible");

  return (
    <Section>
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
        <p className="mt-8 max-w-[40rem] text-lg leading-relaxed text-muted">{t("body")}</p>
        <p className="mt-8 max-w-[42rem] text-sm uppercase tracking-[0.08em] text-ink/45">{t("items")}</p>
      </Reveal>
    </Section>
  );
}
