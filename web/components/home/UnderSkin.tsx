import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";

export function UnderSkin() {
  const t = useTranslations("underskin");

  return (
    <Section tone="soft">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <ProductVisual slot="underSkin" alt={t("label")} concept={t("label")} aspect="aspect-[5/4]" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-[14ch] text-[clamp(2.4rem,5vw,4rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
          <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-muted">{t("body")}</p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-muted">{t("label")}</p>
        </Reveal>
      </div>
    </Section>
  );
}
