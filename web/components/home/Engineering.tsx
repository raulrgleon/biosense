import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** High-level technology note. Not used on the public homepage. */
export function Engineering() {
  const t = useTranslations("overview");

  return (
    <Section tone="soft">
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
        <p className="mt-6 max-w-[40rem] text-lg text-muted">{t("body")}</p>
      </Reveal>
    </Section>
  );
}
