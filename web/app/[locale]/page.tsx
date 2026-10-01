import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { ProductOverview } from "@/components/home/ProductOverview";
import { SensorSignals } from "@/components/home/SensorSignals";
import { WhyItMatters } from "@/components/home/WhyItMatters";
import { SystemOverview } from "@/components/home/SystemOverview";
import { Development } from "@/components/home/Development";
import { HumanVision } from "@/components/home/HumanVision";
import { FollowAndCollaborate } from "@/components/home/FollowAndCollaborate";
import { FAQ } from "@/components/home/FAQ";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <ProductOverview />
      <SensorSignals />
      <WhyItMatters />
      <SystemOverview />
      <Development />
      <HumanVision />
      <FollowAndCollaborate />
      <FAQ />
    </main>
  );
}
