import { motion } from "framer-motion";
import { useState } from "react";

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
  const [ripple, setRipple] = useState(0);

  return (
    <motion.button
      type="button"
      onClick={() => {
        setRipple((r) => r + 1);
        onClick();
      }}
      aria-pressed={isActive}
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.9, y: 0 }}
      transition={{ type: "spring", stiffness: 600, damping: 24, mass: 0.5 }}
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
          transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.7 }}
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.55] }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ boxShadow: "0 0 22px hsl(var(--primary) / 0.6)" }}
          />
        </motion.span>
      )}

      {/* touch feedback ripple */}
      <motion.span
        key={ripple}
        initial={{ scale: 0, opacity: 0.45 }}
        animate={{ scale: 2.6, opacity: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full ${
          isActive ? "bg-primary-foreground/40" : "bg-primary/40"
        }`}
      />

      <motion.span
        className="relative block"
        animate={
          isActive
            ? { scale: 1, letterSpacing: "0.06em" }
            : { scale: 1, letterSpacing: "0.02em" }
        }
        transition={{ type: "spring", stiffness: 480, damping: 26 }}
      >
        {label.toUpperCase()}
      </motion.span>
    </motion.button>
  );
};
