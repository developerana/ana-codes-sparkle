import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FilterPill } from "@/components/FilterPill";
import { filters, projects, type Category } from "@/data/projects";

const Projetos = () => {
  const [active, setActive] = useState<Category>("Todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 w-full flex-1">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-3"
        >
          TODOS OS PROJETOS
        </motion.h1>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Vídeos, campanhas de marketing, design e desenvolvimento — a coleção
          completa dos meus trabalhos.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <FilterPill
              key={filter}
              label={filter}
              size="md"
              isActive={active === filter}
              layoutId="all-projects-filter-pill"
              onClick={() => setActive(filter)}
            />
          ))}
        </div>


        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, 9).map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projetos;
