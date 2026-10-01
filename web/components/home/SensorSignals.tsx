import { useTranslations } from "next-intl";
import { SIGNALS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function SensorSignals() {
  const t = useTranslations("signals");

  return (
    <Section id="technology">
      <Reveal>
        <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
        <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
      </Reveal>
      <div className="mt-16 grid gap-0 md:grid-cols-3">
        {SIGNALS.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.06} className="border-t border-line py-8 md:border-l md:border-t-0 md:px-8 md:first:border-l-0 md:first:pl-0">
            <h3 className="text-2xl font-medium">{t(`${item.id}.title`)}</h3>
            <p className="mt-4 leading-relaxed text-muted">{t(`${item.id}.body`)}</p>
            <p className="mt-5 text-[12px] uppercase tracking-[0.14em] text-warn">{t(item.label)}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
