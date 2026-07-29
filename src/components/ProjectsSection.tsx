import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Film,
  Megaphone,
  Palette,
  Code2,
  Gamepad2,
} from "lucide-react";

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
      "Vídeo institucional para clínica veterinária: roteiro, captação, edição, motion e finalização.",
    tags: ["Premiere Pro", "After Effects", "Motion"],
  },
  {
    title: "Reels para Instagram",
    category: "Vídeos",
    description:
      "Produção contínua de Reels com cortes dinâmicos, legendas animadas e trilha sincronizada.",
    tags: ["CapCut Pro", "Premiere Pro", "Social Media"],
  },
  {
    title: "Motion Graphics",
    category: "Design",
    description:
      "Aberturas, lower thirds e animações de logo para reforçar a identidade visual das marcas.",
    tags: ["After Effects", "Illustrator", "Branding"],
  },
  {
    title: "Gestão de Redes Sociais",
    category: "Marketing",
    description:
      "Planejamento editorial, criação de conteúdo, copywriting e métricas para a UNIVETS Saúde Animal.",
    tags: ["Social Media", "Copywriting", "Meta Ads"],
  },
  {
    title: "Identidade Visual",
    category: "Design",
    description:
      "Identidade visual e materiais gráficos, digitais e impressos, com consistência em todos os pontos de contato.",
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
      "Sistema de gestão de atletas com Síndrome de Down: informações pessoais, anamnese e monitoramento.",
    tags: ["React", "Prisma", "Tailwind CSS"],
    demo: "https://t21-arena-park.com/",
  },
  {
    title: "Núcleo Mariense de Letras",
    category: "Web",
    description:
      "Site para um coletivo cultural de Maria da Fé - MG, promovendo a arte local em suas diversas formas.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://anahelouise.github.io/numale/",
  },
  {
    title: "E-commerce Opção Vidraçaria",
    category: "Web",
    description:
      "Loja virtual para uma vidraçaria: apresentação, serviços, orçamentos e produtos, com foco em UX.",
    tags: ["TypeScript", "React", "Vite"],
    demo: "https://opcaovidracaria.vercel.app/",
  },
  {
    title: "Attack On Titan Wiki",
    category: "Games",
    description:
      "Enciclopédia do universo de Shingeki no Kyojin, unindo cultura pop e desenvolvimento web.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://anahelouise.github.io/attackontitanwiki/",
  },
];

export const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("Todos");

  const visible =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="md:col-span-7 bento p-6 lg:p-8 flex flex-col">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight">
          PROJETOS
        </h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`relative px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  isActive
                    ? "text-primary-foreground"
                    : "bg-muted/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{filter.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout className="grid sm:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => {
            const Icon = categoryIcons[project.category] ?? Film;
            return (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group rounded-2xl bg-background border border-border/60 hover:border-primary/40 transition-colors p-5 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Ver código no GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Ver projeto ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[10px] uppercase tracking-wider text-primary font-bold mb-1">
                  {project.category}
                </p>
                <h3 className="font-heading font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
