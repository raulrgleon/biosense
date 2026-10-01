import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Investors() {
  const t = useTranslations("investors");

  return (
    <Section>
      <Reveal className="max-w-2xl">
        <h2 className="text-[clamp(2.4rem,5vw,3.6rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
        <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-muted">{t("body")}</p>
        <Link href="mailto:hello@biosense.dev" className="mt-8 inline-flex text-accent">
          {t("cta")}
        </Link>
      </Reveal>
    </Section>
  );
}
