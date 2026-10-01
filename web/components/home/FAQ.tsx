import { useTranslations } from "next-intl";
import { FAQ as FAQ_KEYS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <Section id="faq">
      <Reveal>
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
      </Reveal>
      <div className="mt-12 max-w-3xl">
        {FAQ_KEYS.map((key) => (
          <details key={key} className="border-t border-line last:border-b">
            <summary className="cursor-pointer list-none py-5 text-lg font-medium">
              {t(`${key}.q`)}
            </summary>
            <p className="pb-5 leading-relaxed text-muted">{t(`${key}.a`)}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
