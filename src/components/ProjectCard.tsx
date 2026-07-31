import { motion } from "framer-motion";
import { ExternalLink, Github, Film, Play } from "lucide-react";
import { categoryIcons, type Project } from "@/data/projects";

type Props = {
  project: Project;
  index?: number;
};

export const ProjectCard = ({ project, index = 0 }: Props) => {
  const Icon = categoryIcons[project.category] ?? Film;
  const isVideo = Boolean(project.duration);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.94, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -12, scale: 0.92, filter: "blur(10px)" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
        layout: { type: "spring", stiffness: 300, damping: 32, mass: 0.8 },
      }}

      className={`group rounded-2xl bg-background border border-border/60 hover:border-primary/40 transition-all duration-300 p-5 flex flex-col ${
        isVideo ? "cursor-pointer hover:-translate-y-1" : ""
      }`}
    >
      {isVideo ? (
        <div className="relative mb-4 rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-primary/25 via-background to-background border border-border/60">
          <div
            className="absolute inset-0 opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:scale-105"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary) / 0.25) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.25) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
          <span className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-md bg-background/80 backdrop-blur text-[10px] font-bold text-foreground transition-opacity duration-300 group-hover:opacity-0">
            {project.duration}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg transition-all duration-300 ease-out scale-90 opacity-80 group-hover:scale-110 group-hover:opacity-100 group-hover:shadow-[0_0_28px_hsl(var(--primary)/0.55)]">
              <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
            </span>
          </div>
          <span className="absolute bottom-0 left-0 right-0 z-10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-foreground bg-gradient-to-t from-background to-transparent translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Assistir · {project.duration}
          </span>
        </div>
      ) : (
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
      )}

      <p className="text-[10px] uppercase tracking-wider text-primary font-bold mb-1">
        {project.kicker ?? project.category}
      </p>
      <h3 className="font-heading font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2 flex-grow">
        {project.description}
      </p>
      {project.client && (
        <p className="text-sm text-muted-foreground mb-3">
          Cliente: <span className="text-primary">{project.client}</span>
        </p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};
