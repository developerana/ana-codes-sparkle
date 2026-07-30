import { motion } from "framer-motion";
import { ArrowRight, Clapperboard, Megaphone, Code2, Gamepad2 } from "lucide-react";

const highlights = [
  { icon: Clapperboard, title: "AUDIOVISUAL", subtitle: "Meu foco principal", description: "Edição, CapCut Pro e storytelling visual." },
  { icon: Megaphone, title: "MARKETING", subtitle: "Estratégia e presença digital", description: "Campanhas, social media e branding." },
  { icon: Code2, title: "FORMAÇÃO", subtitle: "Meu diferencial técnico", description: "Bacharel em Sistemas de Informação." },
  { icon: Gamepad2, title: "UNIVERSO NERD", subtitle: "Narrativa e referência", description: "Estética cinematográfica e storytelling." },
];

export const AboutSection = () => {
  return (
    <>
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="md:col-span-4 rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between gap-8 min-h-[420px]"
      >
        <h2 className="font-heading font-bold text-2xl tracking-tight">SOBRE</h2>
        <div className="space-y-4">
          <p className="font-heading font-bold text-2xl leading-tight">
            Estratégia, criatividade e tecnologia.
          </p>
          <p className="font-medium leading-relaxed opacity-90">
            Minha formação técnica me permite ir além da execução: penso cada
            projeto de forma estratégica, unindo criatividade, tecnologia e
            comunicação para construir experiências que geram impacto.
          </p>
        </div>
        <a
          href="#reel"
          aria-label="Ver trabalhos"
          className="w-11 h-11 rounded-full bg-background text-primary flex items-center justify-center hover:scale-105 transition-transform"
        >
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.section>

      {highlights.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="md:col-span-3 bento bento-hover p-6 group"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm tracking-wide text-primary-glow">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">{item.subtitle}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </>
  );
};
