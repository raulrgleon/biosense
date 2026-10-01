"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Mark } from "./Mark";

const LINKS = [
  { href: "/", key: "home" },
  { href: "/#technology", key: "technology" },
  { href: "/#benefits", key: "benefits" },
  { href: "/#development", key: "development" },
  { href: "/#faq", key: "faq" },
  { href: "/#contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-5">
        <Link href="/" className="flex items-center gap-2.5 text-paper">
          <Mark className="h-6 w-6 text-accent" />
          <span className="text-[15px] font-medium tracking-[0.14em] uppercase">
            BioSense
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 text-[14px] text-muted lg:flex">
          {LINKS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="transition hover:text-paper"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <LanguageSwitcher />
          <Link
            href="/#contact"
            className="hidden rounded-full bg-paper px-4 py-2 text-[13px] font-medium text-ink transition hover:bg-white sm:inline-flex"
          >
            {t("cta")}
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span className="h-px bg-paper" />
              <span className="h-px bg-paper" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="grid gap-3 border-t border-line px-5 py-4 lg:hidden">
          {LINKS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-[16px] text-paper"
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="pt-2 text-accent"
            onClick={() => setOpen(false)}
          >
            {t("cta")}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
