import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Edição de Vídeos", "Marketing", "Desenvolvimento"];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="md:col-span-8 bento p-8 lg:p-12 flex flex-col justify-end min-h-[420px] relative overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-primary/20 blur-[110px]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at 70% 0%, black 10%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 0%, black 10%, transparent 65%)",
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {roles.map((role) => (
            <span key={role} className="chip">
              {role}
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-5"
        >
          Ana <span className="text-primary">Helouise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
        >
          Editora de vídeo, marketing e desenvolvimento. Transformando ideias em
          experiências visuais — do roteiro ao corte final, da campanha à
          interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="flex flex-wrap items-center gap-3 mt-8"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">Ver Meus Trabalhos</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">Vamos Criar Juntos</a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a
              href="/curriculo-ana-helouise.pdf"
              download="Curriculo-Ana-Helouise.pdf"
              className="text-primary hover:text-primary"
            >
              <Download className="w-5 h-5 mr-2" />
              Currículo
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-5 mt-8 pt-6 border-t border-border/60"
        >
          <a
            href="https://www.instagram.com/anahelouise/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/anahelouise/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/anahelouise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:anahelouise.ss@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
