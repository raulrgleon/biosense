import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";

export function PhysicalDesign() {
  const t = useTranslations("physical");
  const concept = useTranslations("hero");

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="max-w-[14ch] text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
          <p className="mt-8 max-w-[38rem] text-lg leading-relaxed text-muted">{t("body")}</p>
          <p className="mt-5 max-w-[36rem] text-muted">{t("materials")}</p>
          <p className="mt-10 text-[12px] uppercase tracking-[0.16em] text-accent">{t("target")}</p>
          <p className="mt-2 text-xl">{t("dims")}</p>
          <p className="mt-3 text-sm text-warn">{t("change")}</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal variant="scale" delay={0.1}>
            <ProductVisual slot="implant" alt={concept("concept")} concept={concept("concept")} aspect="aspect-[4/5]" />
          </Reveal>
          <Reveal variant="scale" delay={0.16}>
            <ProductVisual slot="exploded" alt={concept("concept")} concept={concept("concept")} aspect="aspect-[4/5]" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
