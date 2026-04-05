"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";

const variantMap: Record<Variant, { hidden: object; visible: object }> = {
  fadeUp:    { hidden: { opacity: 0, y: 40 },       visible: { opacity: 1, y: 0 } },
  fadeIn:    { hidden: { opacity: 0 },               visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -20 },       visible: { opacity: 1, x: 0 } },
  slideRight:{ hidden: { opacity: 0, x: 20 },        visible: { opacity: 1, x: 0 } },
  scaleIn:   { hidden: { opacity: 0, scale: 0.97 },  visible: { opacity: 1, scale: 1 } },
};

const reducedVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type AnimateInProps = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  viewportMargin?: string;
};

export default function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  stagger,
  className,
  viewportMargin = "-80px",
}: AnimateInProps) {
  const prefersReduced = useReducedMotion();
  const chosen = prefersReduced ? reducedVariant : variantMap[variant];

  if (stagger !== undefined) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: viewportMargin }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: stagger } },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={chosen}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Named export for stagger child items — apply this variant to direct children
// inside a stagger AnimateIn container
export function AnimateInItem({
  children,
  variant = "fadeUp",
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  duration?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const chosen = prefersReduced ? reducedVariant : variantMap[variant];

  return (
    <motion.div
      className={className}
      variants={chosen}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
