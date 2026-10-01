import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function HumanVision() {
  const t = useTranslations("vision");

  return (
    <Section id="vision">
      <Reveal className="max-w-4xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
        <p className="mt-10 text-lg text-muted">{t("lead")}</p>
        <p className="mt-4 text-2xl sm:text-3xl">{t("line")}</p>
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
