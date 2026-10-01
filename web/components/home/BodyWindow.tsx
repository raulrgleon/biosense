import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TraceField } from "@/components/visuals/ConceptRenders";

export function BodyWindow() {
  const t = useTranslations("window");

  return (
    <Section id="why" className="relative overflow-hidden">
      <TraceField />
      <Reveal className="relative max-w-4xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{t("p1")}</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t("p2")}</p>
      </Reveal>
    </Section>
  );
}
