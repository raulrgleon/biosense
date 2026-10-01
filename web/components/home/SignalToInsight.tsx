import { useTranslations } from "next-intl";
import { INSIGHT_STEPS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function SignalToInsight() {
  const t = useTranslations("insight");

  return (
    <Section>
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
        <p className="mt-8 text-lg text-muted">{t("p1")}</p>
        <p className="mt-4 text-lg text-muted">{t("p2")}</p>
      </Reveal>
      <div className="mt-14 grid gap-3 sm:grid-cols-4">
        {INSIGHT_STEPS.map((key, i) => (
          <Reveal key={key} delay={i * 0.05} className="border-t border-line pt-5">
            <p className="font-mono text-[11px] text-accent">0{i + 1}</p>
            <p className="mt-2 text-lg">{t(key)}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
