import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60"
        >
          © {currentYear} ANA HELOUISE
        </motion.p>
      </div>
    </footer>
  );
};
