import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Vídeos", href: "#reel" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Experiência", href: "#experience" },
  { name: "Contato", href: "#contact" },
];


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

        <motion.a
          href="#home"
          className="text-xl font-heading font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Ana Helouise
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link text-sm font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="heroOutline" size="sm" asChild>
            <a
              href="/curriculo-ana-helouise.pdf"
              download="Curriculo-Ana-Helouise.pdf"
            >
              <Download className="w-4 h-4 mr-2" />
              Currículo
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 md:hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/curriculo-ana-helouise.pdf"
                  download="Curriculo-Ana-Helouise.pdf"
                  className="inline-flex items-center text-primary font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Currículo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
