import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";

export function HumanVision() {
  const t = useTranslations("vision");
  const concept = useTranslations("hero");

  return (
    <Section id="vision">
      <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="max-w-4xl">
          <h2 className="max-w-[16ch] text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
          <p className="mt-10 text-lg text-muted">{t("lead")}</p>
          <p className="mt-4 max-w-[20ch] text-2xl sm:text-3xl">{t("line")}</p>
          <div className="mt-12 space-y-2 text-muted">
            <p>{t("not1")}</p>
            <p>{t("not2")}</p>
            <p>{t("not3")}</p>
          </div>
          <div className="mt-8 space-y-2 text-xl">
            <p>{t("yes1")}</p>
            <p>{t("yes2")}</p>
            <p>{t("yes3")}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="relative overflow-hidden rounded-[2rem]">
          <ProductVisual
            slot="lifestyle"
            alt={t("life1")}
            concept={concept("concept")}
            aspect="min-h-[320px] aspect-[4/5]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/70 to-transparent p-8">
            <p className="max-w-[14ch] text-2xl font-medium tracking-[-0.04em]">
              {t("life1")}
              <span className="mt-1 block text-ink/50">{t("life2")}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
