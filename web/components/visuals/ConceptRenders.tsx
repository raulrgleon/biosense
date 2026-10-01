/**
 * Product render slots.
 * Replace these SVGs with files in:
 *   public/images/biosense/implant-hero.webp
 *   public/images/biosense/implant-exploded.webp
 *   public/images/biosense/bioband.webp
 *   public/images/biosense/ecosystem.webp
 *   public/images/biosense/app-dashboard.webp
 * Keep a CONCEPT / ENGINEERING CONCEPT label until photography exists.
 */

export function ImplantHero({ label }: { label: string }) {
  return (
    <figure className="relative overflow-hidden rounded-[32px] border border-line bg-bg-2">
      <figcaption className="absolute left-5 top-5 z-10 text-[11px] uppercase tracking-[0.18em] text-accent">
        {label}
      </figcaption>
      <svg viewBox="0 0 720 520" className="h-auto w-full" role="img" aria-label={label}>
        <defs>
          <radialGradient id="g" cx="50%" cy="40%" r="45%">
            <stop offset="0%" stopColor="#72E5F2" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#050607" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="720" height="520" fill="#090A0C" />
        <ellipse cx="360" cy="250" rx="210" ry="150" fill="url(#g)" />
        <ellipse cx="360" cy="318" rx="92" ry="22" fill="none" stroke="rgba(245,247,248,0.12)" />
        <rect x="292" y="228" width="136" height="28" rx="14" fill="none" stroke="#72E5F2" strokeWidth="1.4" />
        <rect x="338" y="188" width="44" height="48" rx="12" fill="none" stroke="rgba(245,247,248,0.35)" />
        <circle cx="360" cy="176" r="22" fill="none" stroke="#72E5F2" />
        <circle cx="360" cy="176" r="4" fill="#72E5F2" />
      </svg>
    </figure>
  );
}

export function TraceField() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
      <path d="M0 80 C 120 40, 220 140, 360 90 S 560 20, 800 90" fill="none" stroke="#72E5F2" strokeWidth="1" />
      <path d="M0 140 C 160 180, 280 80, 440 150 S 640 190, 800 130" fill="none" stroke="#47C7D9" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}
