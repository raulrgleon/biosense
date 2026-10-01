"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="lang-pill text-[11px] uppercase tracking-[0.16em] text-muted">
      <Link href={pathname} locale="en" aria-current={locale === "en" ? "page" : undefined}>
        EN
      </Link>
      <Link href={pathname} locale="es" aria-current={locale === "es" ? "page" : undefined}>
        ES
      </Link>
    </div>
  );
}
