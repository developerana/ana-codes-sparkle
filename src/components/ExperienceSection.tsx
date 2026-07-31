import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Clapperboard } from "lucide-react";

const experiences = [
  {
    title: "Marketing & Editora de Vídeo",
    company: "UNIVETS Saúde Animal",
    period: "02/2026 - Atualmente",
    description:
      "Planejamento de campanhas, criação de Reels, motion design, edição de vídeos, gestão de redes sociais, identidade visual e materiais impressos.",
    icon: Clapperboard,
    current: true,
  },
  {
    title: "Bacharel em Sistemas de Informação",
    company: "Fundação de Ensino e Pesquisa de Itajubá - FEPI",
    period: "07/02/2022 - 07/02/2026",
    description:
      "Formação com foco em desenvolvimento de software, banco de dados, engenharia de software e gestão de projetos.",
    icon: GraduationCap,
    current: false,
  },
  {
    title: "Scrum Master",
    company: "T21 Arena Park (FEPI)",
    period: "07/2024 - 12/2024",
    description:
      "Liderei uma equipe multidisciplinar de desenvolvedores, designers, analistas e testadores, mantendo todos alinhados aos objetivos do projeto.",
    icon: Briefcase,
    current: false,
  },
  {
    title: "Desenvolvedora Front-End",
    company: "T21 Arena Park (FEPI)",
    period: "03/2024 - 06/2024",
    description:
      "React.js e Tailwind CSS com foco em desenvolvimento responsivo, acessível e intuitivo.",
    icon: Briefcase,
    current: false,
  },
];

export const ExperienceSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? experiences : experiences.slice(0, 2);

  return (
    <section id="experience" className="md:col-span-5 bento p-6 lg:p-8 flex flex-col">
      <h2 className="font-heading text-2xl font-bold tracking-tight mb-8">
        EXPERIÊNCIA
      </h2>

      <div className="space-y-6">

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="relative pl-6 border-l-2 border-primary/25 last:border-l-transparent pb-1"
          >
            <span
              className={`absolute -left-[9px] top-0.5 w-4 h-4 rounded-full ${
                exp.current ? "bg-primary" : "bg-muted"
              }`}
            />
            <div
              className={`text-xs font-bold mb-1 ${
                exp.current ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {exp.period}
            </div>
            <h3 className="font-heading font-semibold leading-tight">
              {exp.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
