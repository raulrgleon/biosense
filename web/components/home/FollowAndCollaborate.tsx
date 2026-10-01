import { useTranslations } from "next-intl";
import { COLLABORATE_AUDIENCES } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WaitlistForm } from "@/components/home/Waitlist";

export function FollowAndCollaborate() {
  const t = useTranslations("follow");

  return (
    <Section id="follow">
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium tracking-[-0.05em]">
          {t("title1")}
          <span className="mt-1 block text-ink/50">{t("title2")}</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-line bg-white p-6 sm:p-8">
            <p className="text-[12px] uppercase tracking-[0.18em] text-accent">{t("followTitle")}</p>
            <p className="mt-4 max-w-[34rem] leading-relaxed text-muted">{t("followBody")}</p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="flex h-full flex-col rounded-[2rem] bg-surface-2/90 p-6 sm:p-8">
            <p className="text-[12px] uppercase tracking-[0.18em] text-accent">{t("collabTitle")}</p>
            <p className="mt-4 max-w-[34rem] leading-relaxed text-muted">{t("collabBody")}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {COLLABORATE_AUDIENCES.map((key) => (
                <li key={key} className="rounded-full bg-white px-3 py-1.5 text-sm">
                  {t(key)}
                </li>
              ))}
            </ul>
            <a href="mailto:hello@biosense.dev" className="btn-primary mt-10 w-fit">
              {t("collabCta")}
            </a>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
