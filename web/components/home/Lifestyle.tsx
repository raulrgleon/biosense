import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";

export function Lifestyle() {
  const t = useTranslations("lifestyle");
  const concept = useTranslations("hero");

  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2.2rem] bg-white">
        <ProductVisual
          slot="lifestyle"
          alt={t("line1")}
          concept={concept("concept")}
          aspect="min-h-[420px] aspect-[16/9]"
          className="!rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <Reveal className="absolute inset-x-0 bottom-0 p-8 md:p-14">
          <h2 className="max-w-[14ch] text-[clamp(2.4rem,5.5vw,4.4rem)] font-medium leading-[1] tracking-[-0.05em]">
            {t("line1")}
            <span className="mt-2 block text-ink/50">{t("line2")}</span>
          </h2>
        </Reveal>
      </div>
    </Section>
  );
}
