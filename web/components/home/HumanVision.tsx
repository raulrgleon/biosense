import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function HumanVision() {
  const t = useTranslations("vision");

  return (
    <Section id="vision" tone="soft">
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
    </Section>
  );
}
