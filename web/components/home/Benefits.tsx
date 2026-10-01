import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Benefits() {
  const t = useTranslations("benefits");

  return (
    <Section tone="soft">
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">{t("title")}</h2>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal variant="scale" className="rounded-[2rem] bg-white p-8 md:p-12">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent">{t("awareness.title")}</p>
          <h3 className="mt-4 max-w-[12ch] text-[clamp(2.2rem,4vw,3.4rem)] font-medium tracking-[-0.04em]">
            {t("awareness.title")}
          </h3>
          <p className="mt-5 max-w-[34rem] text-lg leading-relaxed text-muted">{t("awareness.body")}</p>
          <svg viewBox="0 0 520 160" className="mt-10 w-full" aria-hidden>
            <path d="M10 110 C 70 110, 90 40, 150 40 S 210 130, 270 90 S 350 30, 410 70 S 480 120, 510 80" fill="none" stroke="#3fc5d8" strokeWidth="2" />
          </svg>
        </Reveal>
        <div className="grid gap-6">
          <Reveal delay={0.08} className="rounded-[2rem] bg-white p-8">
            <h3 className="text-2xl font-medium">{t("nutrition.title")}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t("nutrition.body")}</p>
          </Reveal>
          <Reveal delay={0.14} className="rounded-[2rem] bg-white p-8">
            <h3 className="text-2xl font-medium">{t("activity.title")}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t("activity.body")}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {(["trends", "personal", "research"] as const).map((key, i) => (
          <Reveal key={key} delay={i * 0.08} variant="left" className="rounded-[2rem] bg-white p-8">
            <h3 className="text-xl font-medium">{t(`${key}.title`)}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t(`${key}.body`)}</p>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 max-w-[42rem] text-sm text-warn">{t("disclaimer")}</p>
    </Section>
  );
}
