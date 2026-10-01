"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Product image slots — drop real files here later:
 * Public homepage slots:
 * /public/images/biosense/biosense-hero.webp
 * /public/images/biosense/biosense-system.webp
 * /public/images/biosense/biosense-under-skin.webp
 * /public/images/biosense/lifestyle.webp
 *
 * Additional slots (not used on the public homepage):
 * /public/images/biosense/biosense-implant.webp
 * /public/images/biosense/biosense-bioband.webp
 * /public/images/biosense/biosense-ecosystem.webp
 * /public/images/biosense/biosense-app.webp
 */
export const PRODUCT_SLOTS = {
  hero: "/images/biosense/biosense-hero.webp",
  system: "/images/biosense/biosense-system.webp",
  underSkin: "/images/biosense/biosense-under-skin.webp",
  lifestyle: "/images/biosense/lifestyle.webp",
  implant: "/images/biosense/biosense-implant.webp",
  bioband: "/images/biosense/biosense-bioband.webp",
  ecosystem: "/images/biosense/biosense-ecosystem.webp",
  app: "/images/biosense/biosense-app.webp",
} as const;

export type ProductSlot = keyof typeof PRODUCT_SLOTS;

export function ProductVisual({
  slot,
  alt,
  concept,
  className = "",
  aspect = "aspect-[4/5]",
  float = false,
}: {
  slot: ProductSlot;
  alt: string;
  concept: string;
  className?: string;
  aspect?: string;
  float?: boolean;
}) {
  const [ok, setOk] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    const probe = new window.Image();
    probe.onload = () => {
      if (!cancelled) setOk(true);
    };
    probe.onerror = () => {
      if (!cancelled) setOk(false);
    };
    probe.src = PRODUCT_SLOTS[slot];
    return () => {
      cancelled = true;
    };
  }, [slot]);

  return (
    <motion.div
      className={`relative min-h-[280px] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(10,13,16,0.08)] ${aspect} ${className}`}
      animate={float && !reduce ? { y: [0, -6, 0] } : undefined}
      transition={float && !reduce ? { duration: 7.5, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      {ok ? (
        // Native img so a missing slot falls back without the Next optimizer 404ing.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={PRODUCT_SLOTS[slot]} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <Placeholder slot={slot} concept={concept} />
      )}
    </motion.div>
  );
}

function Placeholder({ slot, concept }: { slot: ProductSlot; concept: string }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#eef4f6] via-white to-[#e8f6f4]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(166,242,245,0.55),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(183,230,211,0.35),transparent_46%)]" />
      <div className="absolute left-4 top-4 rounded-full border border-ink/8 bg-white/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted">
        {concept}
      </div>
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden>
        {slot === "hero" || slot === "ecosystem" || slot === "system" ? <HeroScene /> : null}
        {slot === "implant" ? <ImplantScene /> : null}
        {slot === "bioband" ? <BandScene /> : null}
        {slot === "underSkin" ? <SkinScene /> : null}
        {slot === "app" ? <AppScene /> : null}
        {slot === "lifestyle" ? <LifeScene /> : null}
      </svg>
    </div>
  );
}

function HeroScene() {
  return (
    <g>
      <ellipse cx="200" cy="190" rx="120" ry="36" fill="#3fc5d8" fillOpacity="0.08" />
      <ellipse cx="200" cy="190" rx="88" ry="22" fill="none" stroke="#3fc5d8" strokeOpacity="0.45" />
      <ellipse cx="200" cy="190" rx="128" ry="38" fill="none" stroke="#3fc5d8" strokeOpacity="0.18" />
      <rect x="112" y="154" width="176" height="34" rx="17" fill="#111418" />
      <rect x="146" y="164" width="78" height="14" rx="7" fill="#3fc5d8" />
      <path d="M200 188v48" stroke="#3fc5d8" strokeWidth="1.6" strokeDasharray="3 5" />
      <rect x="174" y="236" width="52" height="108" rx="14" fill="#c5d4d9" />
      <rect x="182" y="250" width="36" height="36" rx="18" fill="#f7fbfc" stroke="#3fc5d8" strokeWidth="2" />
      <circle cx="200" cy="268" r="6" fill="#3fc5d8" />
      <rect x="184" y="296" width="32" height="16" rx="4" fill="#9aafb6" />
    </g>
  );
}

function ImplantScene() {
  return (
    <g transform="translate(200 250)">
      <rect x="-16" y={-36} width="32" height="72" rx="10" fill="#d7e2e6" />
      <circle r="7" fill="none" stroke="#3fc5d8" strokeWidth="2" />
    </g>
  );
}

function BandScene() {
  return (
    <g>
      <rect x="86" y="210" width="228" height="36" rx="18" fill="#161a1e" />
      <rect x="158" y="218" width="84" height="20" rx="10" fill="#3fc5d8" opacity="0.8" />
    </g>
  );
}

function SkinScene() {
  return (
    <g>
      <path d="M40 150 C140 110 260 110 360 150 V500 H40 Z" fill="#f3ebe4" />
      <path d="M40 150 C140 110 260 110 360 150 V210 C260 176 140 176 40 210 Z" fill="#e8d7cc" />
      <rect x="118" y="128" width="164" height="26" rx="13" fill="#111418" />
      <rect x="186" y="250" width="28" height="54" rx="8" fill="#c5d4d8" />
      <path d="M200 154v96" stroke="#3fc5d8" strokeWidth="1.2" strokeDasharray="3 4" />
    </g>
  );
}

function AppScene() {
  return (
    <g>
      <rect x="130" y="70" width="140" height="280" rx="28" fill="#111418" />
      <rect x="142" y="110" width="116" height="200" rx="12" fill="#f7f8fa" />
      <path d="M156 180 C176 150 196 210 216 170 C236 140 246 190 256 168" fill="none" stroke="#3fc5d8" strokeWidth="2" />
    </g>
  );
}

function LifeScene() {
  return (
    <g>
      <circle cx="120" cy="180" r="70" fill="#a6f2f5" opacity="0.35" />
      <circle cx="280" cy="280" r="90" fill="#b7e6d3" opacity="0.3" />
      <path d="M60 320 C140 240 220 360 340 250" fill="none" stroke="#3fc5d8" strokeWidth="2" opacity="0.5" />
    </g>
  );
}
