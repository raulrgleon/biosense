import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Folded into Development on the public homepage. */
export function ResponsibleDevelopment() {
  const t = useTranslations("development");

  return (
    <Section>
      <Reveal className="max-w-3xl">
        <p className="max-w-[40rem] text-lg leading-relaxed text-muted">{t("responsible")}</p>
      </Reveal>
    </Section>
  );
}
