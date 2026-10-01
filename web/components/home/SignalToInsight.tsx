import { useTranslations } from "next-intl";
import { INSIGHT_STEPS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";

export function SignalToInsight() {
  const t = useTranslations("insight");
  const concept = useTranslations("hero");

  return (
    <Section tone="soft">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
          <p className="mt-8 max-w-[38rem] text-lg text-muted">{t("p1")}</p>
          <p className="mt-4 max-w-[38rem] text-lg text-muted">{t("p2")}</p>
          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            {INSIGHT_STEPS.map((key, i) => (
              <Reveal key={key} delay={i * 0.06} className="border-t border-line pt-5">
                <p className="font-mono text-[11px] text-accent">0{i + 1}</p>
                <p className="mt-2 text-lg">{t(key)}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal variant="scale">
          <ProductVisual slot="app" alt={concept("concept")} concept={concept("concept")} aspect="aspect-[4/5]" />
        </Reveal>
      </div>
    </Section>
  );
}
