import { useTranslations } from "next-intl";
import { BENEFITS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Benefits() {
  const t = useTranslations("benefits");

  return (
    <Section>
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
      </Reveal>
      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((key) => (
          <Reveal key={key}>
            <h3 className="text-xl font-medium">{t(`${key}.title`)}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t(`${key}.body`)}</p>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 max-w-2xl text-sm text-warn">{t("disclaimer")}</p>
    </Section>
  );
}
