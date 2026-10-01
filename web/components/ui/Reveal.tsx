"use client";

import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "up" | "fade" | "scale" | "left";

const variants: Record<Variant, { hidden: TargetAndTransition; show: TargetAndTransition }> = {
  up: { hidden: { opacity: 0.01, y: 28 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0.01 }, show: { opacity: 1 } },
  scale: { hidden: { opacity: 0.01, scale: 0.97 }, show: { opacity: 1, scale: 1 } },
  left: { hidden: { opacity: 0.01, x: -18 }, show: { opacity: 1, x: 0 } },
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const reduce = useReducedMotion();
  const v = variants[variant];

  return (
    <motion.div
      className={className}
      initial={reduce ? false : v.hidden}
      whileInView={v.show}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
