import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function WirelessPower() {
  const t = useTranslations("wireless");

  return (
    <Section>
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
        <p className="mt-8 text-lg leading-relaxed text-muted">{t("p1")}</p>
        <p className="mt-4 text-lg leading-relaxed text-muted">{t("p2")}</p>
      </Reveal>
      <div className="mt-16 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Reveal className="rounded-[28px] border border-line bg-bg-2 p-8">
          <p className="text-[12px] uppercase tracking-[0.16em] text-accent">{t("bandTitle")}</p>
          <p className="mt-4 text-paper">{t("bandItems")}</p>
        </Reveal>
        <p className="px-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          {t("link")}
        </p>
        <Reveal className="rounded-[28px] border border-line bg-bg-2 p-8">
          <p className="text-[12px] uppercase tracking-[0.16em] text-accent">{t("sensorTitle")}</p>
          <p className="mt-4 text-paper">{t("sensorItems")}</p>
          <p className="mt-3 text-sm text-muted">{t("sensorNone")}</p>
        </Reveal>
      </div>
      <p className="mt-8 text-sm text-warn">{t("note")}</p>
    </Section>
  );
}
