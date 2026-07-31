import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  label: string;
  isActive: boolean;
  layoutId: string;
  onClick: () => void;
  size?: "sm" | "md";
};

export const FilterPill = ({
  label,
  isActive,
  layoutId,
  onClick,
  size = "sm",
}: Props) => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>(
    [],
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: event.clientX - rect.left, y: event.clientY - rect.top },
    ]);
    window.setTimeout(
      () => setRipples((prev) => prev.filter((r) => r.id !== id)),
      600,
    );
    onClick();
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.92, y: 0 }}
      transition={{ type: "spring", stiffness: 520, damping: 26, mass: 0.6 }}
      aria-pressed={isActive}
      className={`relative overflow-hidden rounded-full text-xs font-bold outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        size === "md" ? "px-3.5 py-1.5" : "px-3 py-1"
      } ${
        isActive
          ? "text-primary-foreground"
          : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 rounded-full bg-primary"
          initial={false}
          animate={{
            boxShadow: [
              "0 0 0px hsl(var(--primary) / 0)",
              "0 0 26px hsl(var(--primary) / 0.55)",
              "0 0 16px hsl(var(--primary) / 0.35)",
            ],
          }}
          transition={{
            layout: { type: "spring", stiffness: 400, damping: 34, mass: 0.7 },
            boxShadow: { duration: 0.7, ease: "easeOut" },
          }}
        />
      )}

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="pointer-events-none absolute rounded-full bg-primary-foreground/35"
            style={{ left: ripple.x, top: ripple.y }}
            initial={{ width: 0, height: 0, opacity: 0.5, x: "-50%", y: "-50%" }}
            animate={{ width: 160, height: 160, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </AnimatePresence>

      <motion.span
        className="relative block"
        animate={{
          scale: isActive ? 1.05 : 1,
          letterSpacing: isActive ? "0.06em" : "0.02em",
        }}
        transition={{ type: "spring", stiffness: 480, damping: 22 }}
      >
        {label}
      </motion.span>
    </motion.button>
  );
};
