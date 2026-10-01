import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "./Reveal";

export function Partners() {
  const t = useTranslations("partners");

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-[16ch] text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t("body")}</p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-full border border-line px-6 py-3 text-sm transition hover:border-paper/40"
          >
            {t("cta")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
