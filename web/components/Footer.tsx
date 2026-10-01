import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Mark } from "./Mark";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center gap-2 text-[15px] tracking-[0.14em] uppercase">
              <Mark className="h-5 w-5 text-accent" />
              BioSense
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{t("mission")}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            <Link href="/">{t("home")}</Link>
            <Link href="/#technology">{t("technology")}</Link>
            <Link href="/#contact">{t("contact")}</Link>
            <Link href="/privacy">{t("privacy")}</Link>
            <Link href="/terms">{t("terms")}</Link>
            <a href="mailto:hello@biosense.dev">{t("email")}</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <LanguageSwitcher />
          <p className="text-xs text-muted">{t("copyright", { year })}</p>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-warn">{t("disclaimer")}</p>
      </div>
    </footer>
  );
}
