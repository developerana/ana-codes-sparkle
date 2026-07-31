import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "@/components/ProjectCard";
import { filters, projects, type Category } from "@/data/projects";

export const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("Todos");

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  const limit = filtered.slice(0, 6).some((p) => p.duration) ? 4 : 6;
  const visible = filtered.slice(0, limit);

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
          {visible.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-auto pt-6 flex justify-center">
        <Link
          to="/projetos"
          className="px-5 py-2 rounded-full text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          VER PROJETOS
        </Link>
      </div>
    </section>
  );
};
