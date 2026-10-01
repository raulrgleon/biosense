import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  wide = false,
  tone = "light",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
  tone?: "light" | "soft" | "dark";
}) {
  const tones = {
    light: "bg-transparent",
    soft: "bg-surface-2/80",
    dark: "bg-dark text-paper",
  };

  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className={`mx-auto px-5 py-24 md:px-8 md:py-32 ${wide ? "max-w-[1400px]" : "max-w-[1280px]"}`}>
        {children}
      </div>
    </section>
  );
}
