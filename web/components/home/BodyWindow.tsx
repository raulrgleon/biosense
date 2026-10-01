import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TraceField } from "@/components/visuals/ConceptRenders";

export function BodyWindow() {
  const t = useTranslations("window");

  return (
    <Section id="why" className="relative overflow-hidden">
      <TraceField />
      <Reveal className="relative max-w-4xl" variant="left">
        <h2 className="max-w-[16ch] text-[clamp(2.8rem,6vw,4.8rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
        <p className="mt-8 max-w-[38rem] text-lg leading-relaxed text-muted">{t("p1")}</p>
        <p className="mt-5 max-w-[38rem] text-lg leading-relaxed text-muted">{t("p2")}</p>
      </Reveal>
    </Section>
  );
}
