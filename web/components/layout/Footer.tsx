import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Mark } from "@/components/ui/Mark";

export function Footer() {
  const t = useTranslations("footer");
  const n = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center gap-2 tracking-[0.16em] uppercase">
              <Mark className="h-5 w-5 text-accent" />
              BioSense
            </p>
            <p className="mt-4 text-sm text-muted">{t("tagline")}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" aria-label="Footer">
            <Link href="/#technology">{n("technology")}</Link>
            <Link href="/#development">{n("development")}</Link>
            <Link href="/#vision">{n("vision")}</Link>
            <Link href="/#follow">{n("follow")}</Link>
            <Link href="/#faq">{n("faq")}</Link>
            <Link href="/#follow">{t("contact")}</Link>
            <Link href="/privacy">{t("privacy")}</Link>
            <Link href="/terms">{t("terms")}</Link>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <LanguageSwitcher />
          <p className="text-xs text-muted">{t("copyright", { year })}</p>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-warn">{t("disclaimer")}</p>
      </div>
    </footer>
  );
}
