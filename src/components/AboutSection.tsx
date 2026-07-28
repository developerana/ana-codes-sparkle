import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clapperboard, Megaphone, Code2, Gamepad2 } from "lucide-react";

const highlights = [
  {
    icon: Clapperboard,
    title: "Audiovisual",
    description: "Edição de vídeos, CapCut Pro e storytelling visual.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Campanhas, social media e branding",
  },
  {
    icon: Code2,
    title: "Tecnologia",
    description: "Bacharel em Sistemas de Informação",
  },
  {
    icon: Gamepad2,
    title: "Universo Gamer",
    description: "Narrativa visual e estética cinematográfica",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(141,73%,42%,0.04),transparent_50%)]" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Sobre Mim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3">
            Criatividade com <span className="gradient-text">base técnica</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou Bacharel em Sistemas de Informação e atuo com{" "}
              <span className="text-foreground font-medium">
                edição de vídeo, marketing digital e desenvolvimento de
                experiências digitais
              </span>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acredito que os melhores projetos nascem da união entre
              criatividade, estratégia e tecnologia. Minha formação me permite
              transformar ideias em soluções visuais que não apenas chamam
              atenção, mas também comunicam com clareza e geram resultados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabalho com edição de vídeos, marketing, campanhas para redes
              sociais, identidade visual e desenvolvimento web, sempre buscando
              criar experiências que conectem marcas, pessoas e histórias de
              forma autêntica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card-hover p-6 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
