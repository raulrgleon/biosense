/**
 * Decorative traces used behind editorial sections.
 * Product image slots live in ProductVisual.tsx:
 *   /public/images/biosense/biosense-hero.webp
 *   /public/images/biosense/biosense-system.webp
 *   /public/images/biosense/biosense-under-skin.webp
 *   /public/images/biosense/lifestyle.webp
 */

export function TraceField() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-50" aria-hidden="true">
      <path d="M0 80 C 120 40, 220 140, 360 90 S 560 20, 800 90" fill="none" stroke="#3FC5D8" strokeWidth="1" />
      <path d="M0 140 C 160 180, 280 80, 440 150 S 640 190, 800 130" fill="none" stroke="#62DDEB" strokeWidth="0.8" opacity="0.55" />
    </svg>
  );
}
