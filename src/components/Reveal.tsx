import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Element to render, e.g. "section", "div", "li" */
  as?: ElementType;
  /** Stagger delay in seconds */
  delay?: number;
  /** Vertical travel distance in px */
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport" | "transition">;

/**
 * Scroll reveal wrapper: fade + subtle rise + glass-like blur clearing.
 * Always ends fully opaque and unblurred, so legibility is never affected.
 * Respects prefers-reduced-motion.
 */
export const Reveal = ({
  children,
  as = "div",
  delay = 0,
  y = 22,
  className,
  ...rest
}: Props) => {
  const reduced = useReducedMotion();
  const MotionTag = motion(as as ElementType) as typeof motion.div;

  if (reduced) {
    const Tag = as as ElementType;
    return (
      <Tag className={className} {...(rest as Record<string, unknown>)}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};
