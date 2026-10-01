import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { Why } from "@/components/Why";
import { Benefits } from "@/components/Benefits";
import { Technology } from "@/components/Technology";
import { Development } from "@/components/Development";
import { Impact } from "@/components/Impact";
import { Showcase } from "@/components/Showcase";
import { Partners } from "@/components/Partners";
import { EarlyAccess } from "@/components/EarlyAccess";
import { FAQ } from "@/components/FAQ";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Why />
      <Benefits />
      <Technology />
      <Development />
      <Impact />
      <Showcase />
      <Partners />
      <EarlyAccess />
      <FAQ />
    </main>
  );
}
