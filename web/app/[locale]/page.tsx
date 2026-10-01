import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { BodyWindow } from "@/components/home/BodyWindow";
import { SensorSignals } from "@/components/home/SensorSignals";
import { SensorReveal } from "@/components/home/SensorReveal";
import { Ecosystem } from "@/components/home/Ecosystem";
import { WirelessPower } from "@/components/home/WirelessPower";
import { Continuity } from "@/components/home/Continuity";
import { SignalToInsight } from "@/components/home/SignalToInsight";
import { Benefits } from "@/components/home/Benefits";
import { Development } from "@/components/home/Development";
import { Engineering } from "@/components/home/Engineering";
import { PhysicalDesign } from "@/components/home/PhysicalDesign";
import { UnderSkin } from "@/components/home/UnderSkin";
import { ResponsibleDevelopment } from "@/components/home/ResponsibleDevelopment";
import { HumanVision } from "@/components/home/HumanVision";
import { Lifestyle } from "@/components/home/Lifestyle";
import { Partners } from "@/components/home/Partners";
import { Investors } from "@/components/home/Investors";
import { Waitlist } from "@/components/home/Waitlist";
import { FAQ } from "@/components/home/FAQ";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <BodyWindow />
      <SensorSignals />
      <SensorReveal />
      <Ecosystem />
      <WirelessPower />
      <Continuity />
      <SignalToInsight />
      <Benefits />
      <Development />
      <Engineering />
      <PhysicalDesign />
      <UnderSkin />
      <ResponsibleDevelopment />
      <HumanVision />
      <Lifestyle />
      <Partners />
      <Investors />
      <Waitlist />
      <FAQ />
    </main>
  );
}
