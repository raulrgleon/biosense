import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AUDIENCES, DISCIPLINES } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Partners() {
  const t = useTranslations("partners");

  return (
    <Section id="partners">
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{t("title")}</h2>
      </Reveal>
      <div className="mt-12 flex flex-wrap gap-2">
        {DISCIPLINES.map((key) => (
          <span key={key} className="rounded-full border border-line px-3 py-1.5 text-sm">
            {t(key)}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2 text-muted">
        {AUDIENCES.map((key) => (
          <span key={key} className="text-sm">
            {t(key)}
          </span>
        ))}
      </div>
      <Link
        href="/#waitlist"
        className="mt-10 inline-flex rounded-full bg-paper px-6 py-3 text-sm font-medium text-bg"
      >
        {t("cta")}
      </Link>
    </Section>
  );
}
