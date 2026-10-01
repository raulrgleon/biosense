import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AUDIENCES, DISCIPLINES } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Partners() {
  const t = useTranslations("partners");

  return (
    <Section id="partners" tone="soft">
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
      </Reveal>
      <div className="mt-12 flex flex-wrap gap-2">
        {DISCIPLINES.map((key) => (
          <span key={key} className="rounded-full bg-white px-3 py-1.5 text-sm">
            {t(key)}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-muted">
        {AUDIENCES.map((key) => (
          <span key={key} className="text-sm">
            {t(key)}
          </span>
        ))}
      </div>
      <Link href="/#waitlist" className="btn-primary mt-10">
        {t("cta")}
      </Link>
    </Section>
  );
}
