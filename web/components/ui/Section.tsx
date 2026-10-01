import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  wide = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <section id={id} className={`border-t border-line ${className}`}>
      <div className={`mx-auto px-5 py-24 md:px-8 md:py-32 ${wide ? "max-w-[1400px]" : "max-w-[1280px]"}`}>
        {children}
      </div>
    </section>
  );
}
