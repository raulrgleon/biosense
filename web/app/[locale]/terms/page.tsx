import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("termsTitle") };
}

// Temporary informational copy. Replace with counsel-reviewed terms before any commercial offer.
export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.terms");

  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="text-4xl font-medium tracking-tight">{t("title")}</h1>
      <p className="mt-3 text-sm text-muted">{t("updated")}</p>
      <div className="mt-10 whitespace-pre-line leading-relaxed text-muted">{t("body")}</div>
    </main>
  );
}
