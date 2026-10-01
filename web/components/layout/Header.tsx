"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NAV } from "@/lib/content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Mark } from "@/components/ui/Mark";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center gap-8 px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-paper">
          <Mark className="h-6 w-6 text-accent" />
          <span className="text-[15px] font-medium tracking-[0.16em] uppercase">BioSense</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 text-[13px] text-muted xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.key} href={item.href} className="transition hover:text-paper">
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5 xl:ml-0">
          <LanguageSwitcher />
          <Link
            href="/#waitlist"
            className="hidden rounded-full bg-paper px-4 py-2 text-[13px] font-medium text-bg transition hover:bg-white sm:inline-flex"
          >
            {t("cta")}
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("close") : t("open")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className="h-px bg-paper" />
              <span className="h-px bg-paper" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="grid gap-1 border-t border-line px-5 py-5 xl:hidden">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="py-2 text-[17px] text-paper"
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
          <Link href="/#waitlist" className="pt-3 text-accent" onClick={() => setOpen(false)}>
            {t("cta")}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
