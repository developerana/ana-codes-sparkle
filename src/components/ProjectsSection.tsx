import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Film,
  Megaphone,
  Palette,
  Code2,
  Gamepad2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "Todos" | "Vídeos" | "Marketing" | "Design" | "Web" | "Games";

const categoryIcons: Record<string, typeof Film> = {
  Vídeos: Film,
  Marketing: Megaphone,
  Design: Palette,
  Web: Code2,
  Games: Gamepad2,
};

const filters: Category[] = [
  "Todos",
  "Vídeos",
  "Marketing",
  "Design",
  "Web",
  "Games",
];

type Project = {
  title: string;
  category: Exclude<Category, "Todos">;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Campanha Institucional",
    category: "Vídeos",
    description:
      "Vídeo institucional para clínica veterinária: roteiro, captação, edição, motion e finalização com foco em transmitir cuidado e credibilidade.",
    tags: ["Premiere Pro", "After Effects", "Motion"],
  },
  {
    title: "Reels para Instagram",
    category: "Vídeos",
    description:
      "Produção contínua de Reels com cortes dinâmicos, legendas animadas e trilha sincronizada para aumentar alcance e engajamento.",
    tags: ["CapCut Pro", "Premiere Pro", "Social Media"],
  },
  {
    title: "Motion Graphics",
    category: "Design",
    description:
      "Aberturas, lower thirds e animações de logo criadas para reforçar a identidade visual das marcas em vídeos e campanhas.",
    tags: ["After Effects", "Illustrator", "Branding"],
  },
  {
    title: "Gestão de Redes Sociais",
    category: "Marketing",
    description:
      "Planejamento editorial, criação de conteúdo, copywriting e acompanhamento de métricas para a UNIVETS Saúde Animal.",
    tags: ["Social Media", "Copywriting", "Meta Ads"],
  },
  {
    title: "Identidade Visual",
    category: "Design",
    description:
      "Criação de identidade visual e materiais gráficos — digitais e impressos — mantendo consistência em todos os pontos de contato.",
    tags: ["Photoshop", "Illustrator", "Branding"],
  },
  {
    title: "Trailer Gamer",
    category: "Games",
    description:
      "Edição em ritmo cinematográfico com sound design, color grading e transições inspiradas em trailers de games.",
    tags: ["Premiere Pro", "DaVinci Resolve", "Sound Design"],
  },
  {
    title: "Sistema T21 Arena Park",
    category: "Web",
    description:
      "Sistema de gestão de atletas com Síndrome de Down. Registra informações pessoais, anamnese e monitora aspectos físicos e psicológicos.",
    tags: ["React", "Prisma", "Tailwind CSS"],
    github: "#",
    demo: "https://t21-arena-park.com/",
  },
  {
    title: "Núcleo Mariense de Letras",
    category: "Web",
    description:
      "Site para um coletivo cultural de Maria da Fé - MG, com a missão de promover e difundir a arte local em suas mais diversas formas.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://anahelouise.github.io/numale/",
  },
  {
    title: "E-commerce Opção Vidraçaria",
    category: "Web",
    description:
      "Loja virtual para uma vidraçaria de Maria da Fé: apresentação, serviços, orçamentos e produtos. Foco em UX e performance.",
    tags: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    demo: "https://opcaovidracaria.vercel.app/",
  },
  {
    title: "Attack On Titan Wiki",
    category: "Games",
    description:
      "Enciclopédia dedicada ao universo de Shingeki no Kyojin, unindo meu interesse por games e cultura pop com desenvolvimento web.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://anahelouise.github.io/attackontitanwiki/",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<Category>("Todos");

  const visible =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(141,73%,42%,0.05),transparent_50%)]" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3">
            Projetos <span className="gradient-text">Selecionados</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Vídeos, campanhas, design e sistemas web — trabalhos que unem
            criatividade e execução técnica.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {filters.map((filter) => {
            const Icon = categoryIcons[filter];
            const isActive = active === filter;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${
                  isActive
                    ? "text-primary-foreground border-primary"
                    : "text-muted-foreground border-border/50 hover:text-foreground hover:border-primary/40"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {filter}
                </span>
              </button>
            );
          })}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => {
              const Icon = categoryIcons[project.category] ?? Film;
              return (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="glass-card-hover group p-6 lg:p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-primary font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Ver código no GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Ver projeto"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://www.instagram.com/anahelouise/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Film className="w-5 h-5 mr-2" />
              Ver mais trabalhos
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
