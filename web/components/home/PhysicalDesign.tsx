import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function PhysicalDesign() {
  const t = useTranslations("physical");

  return (
    <Section>
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
        <p className="mt-8 text-lg leading-relaxed text-muted">{t("body")}</p>
        <p className="mt-5 text-muted">{t("materials")}</p>
        <p className="mt-10 text-[12px] uppercase tracking-[0.16em] text-accent">{t("target")}</p>
        <p className="mt-2 text-xl">{t("dims")}</p>
        <p className="mt-3 text-sm text-warn">{t("change")}</p>
      </Reveal>
    </Section>
  );
}
