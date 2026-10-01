import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const ITEMS = [
  { key: "sensor", visual: "sensor" },
  { key: "band", visual: "band" },
  { key: "app", visual: "app" },
] as const;

function Visual({ kind }: { kind: (typeof ITEMS)[number]["visual"] }) {
  if (kind === "sensor") {
    return (
      <svg viewBox="0 0 280 180" className="h-full w-full">
        <ellipse cx="140" cy="96" rx="46" ry="18" fill="none" stroke="#7dcec4" />
        <ellipse cx="140" cy="88" rx="28" ry="10" fill="none" stroke="rgba(243,239,230,0.25)" />
        <circle cx="140" cy="84" r="3" fill="#7dcec4" />
      </svg>
    );
  }
  if (kind === "band") {
    return (
      <svg viewBox="0 0 280 180" className="h-full w-full">
        <rect x="58" y="78" width="164" height="22" rx="11" fill="none" stroke="#7dcec4" />
        <rect x="118" y="70" width="44" height="38" rx="10" fill="none" stroke="rgba(243,239,230,0.4)" />
      </svg>
    );
  }
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-28 rounded-[1.4rem] border border-line bg-ink p-3">
        <div className="mb-3 h-1.5 w-8 rounded-full bg-paper/20" />
        <div className="space-y-2">
          <div className="h-1.5 w-full rounded-full bg-accent/70" />
          <div className="h-1.5 w-4/5 rounded-full bg-paper/20" />
          <div className="h-1.5 w-3/5 rounded-full bg-paper/15" />
        </div>
      </div>
    </div>
  );
}

export function Showcase() {
  const t = useTranslations("showcase");

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">{t("title")}</h2>
          <p className="mt-5 max-w-xl text-muted">{t("lead")}</p>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <Reveal key={item.key}>
              <article className="overflow-hidden rounded-[28px] border border-line bg-ink-2">
                <div className="aspect-[16/10] bg-[#090b0e]">
                  <Visual kind={item.visual} />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                    {t(`items.${item.key}.label`)}
                  </p>
                  <h3 className="mt-2 text-xl font-medium">{t(`items.${item.key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(`items.${item.key}.body`)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
