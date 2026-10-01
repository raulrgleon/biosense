"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-[12px] uppercase tracking-[0.14em] text-muted">
      <Link
        href={pathname}
        locale="en"
        className={locale === "en" ? "text-paper" : "hover:text-paper"}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        href={pathname}
        locale="es"
        className={locale === "es" ? "text-paper" : "hover:text-paper"}
        aria-current={locale === "es" ? "page" : undefined}
      >
        ES
      </Link>
    </div>
  );
}
