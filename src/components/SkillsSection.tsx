import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clapperboard, Megaphone, Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Produção Audiovisual",
    subtitle: "Meu foco principal",
    icon: Clapperboard,
    featured: true,
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "CapCut Pro",
      "DaVinci Resolve",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
    ],
  },
  {
    title: "Marketing & Conteúdo",
    subtitle: "Estratégia e presença digital",
    icon: Megaphone,
    featured: true,
    skills: [
      "Social Media",
      "Branding",
      "Copywriting",
      "Meta Ads",
      "Estratégia Digital",
      "Planejamento de Campanhas",
      "Adobe Photoshop",
      "Canva",
    ],
  },
  {
    title: "Desenvolvimento",
    subtitle: "Meu diferencial técnico",
    icon: Code2,
    featured: false,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML & CSS",
      "Git / GitHub",
      "Figma",
      "SQL",
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Competências
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3">
            O que eu <span className="gradient-text">faço</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Uma combinação de produção audiovisual, estratégia de marketing e
            domínio técnico — tudo aplicado no mesmo projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`p-6 lg:p-8 group ${
                category.featured ? "glass-card-intense rounded-2xl" : "glass-card-hover"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.04,
                    }}
                    className="text-sm px-3 py-1.5 rounded-lg bg-muted/60 border border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
