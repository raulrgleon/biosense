import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";

/** Compact form-factor visual. Not used as a standalone homepage section. */
export function PhysicalDesign() {
  const t = useTranslations("system");

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="max-w-[14ch] text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("form")}</h2>
          <p className="mt-8 max-w-[38rem] text-lg leading-relaxed text-muted">{t("materials")}</p>
        </Reveal>
        <Reveal variant="scale" delay={0.1}>
          <ProductVisual slot="hero" alt={t("label")} concept={t("label")} aspect="aspect-[4/5]" />
        </Reveal>
      </div>
    </Section>
  );
}
