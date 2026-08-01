import { motion } from "framer-motion";
import { Clapperboard, Megaphone, Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "MARKETING & CONTEÚDO",
    subtitle: "Estratégia e presença digital",
    description:
      "Planejamento de campanhas, produção de conteúdo e construção de marca com foco em resultado.",
    icon: Megaphone,
    skills: [
      "Social Media",
      "Branding",
      "Copywriting",
      "Planejamento",
      "Adobe Photoshop",
      "Canva",
    ],
  },
  {
    title: "PRODUÇÃO AUDIOVISUAL",
    subtitle: "Meu foco principal",
    description:
      "Edição, motion e finalização de vídeos para redes sociais e campanhas, do roteiro ao corte final.",
    icon: Clapperboard,
    skills: [
      "After Effects",
      "CapCut Pro",
      "Motion Graphics",
      "Color Grading",
    ],
  },
  {
    title: "DESENVOLVIMENTO",
    subtitle: "Meu diferencial técnico",
    description:
      "Interfaces web responsivas e bem estruturadas, unindo design, código e experiência do usuário.",
    icon: Code2,
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
  return (
    <>
      <div id="skills" className="md:col-span-12 sr-only">
        Competências
      </div>
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="md:col-span-4 bento bento-hover p-6 group"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <category.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm tracking-wide text-primary">
                {category.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.subtitle}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-5">
            {category.description}
          </p>

          <div className="flex flex-wrap gap-2">

            {category.skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
};
