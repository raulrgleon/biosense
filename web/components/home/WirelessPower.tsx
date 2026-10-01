import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Product-level energy note. Folded into SystemOverview on the public homepage. */
export function WirelessPower() {
  const t = useTranslations("system");

  return (
    <Section tone="dark">
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-medium tracking-[-0.05em] text-white">{t("powerTitle")}</h2>
        <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-white/60">{t("powerBody")}</p>
        <p className="mt-6 text-sm text-white/45">{t("note")}</p>
      </Reveal>
    </Section>
  );
}
