import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, Clapperboard } from "lucide-react";

const experiences = [
  {
    title: "Marketing & Conteúdo",
    company: "UNIVETS Saúde Animal",
    period: "02/2026 - Atualmente",
    description:
      "Sou responsável por toda a área de marketing da UNIVETS Saúde Animal, conduzindo o planejamento, a criação, a execução e a evolução da comunicação da clínica. Na prática, atuo como o setor de marketing da empresa, liderando todas as frentes relacionadas à marca, conteúdo e presença digital.\nGerencio integralmente as redes sociais, desenvolvo campanhas, produzo e edito vídeos, crio peças para mídias digitais e impressas, elaboro materiais institucionais, acompanho resultados e defino estratégias de comunicação alinhadas a gestão e aos objetivos do negócio.\nEssa atuação exige autonomia, visão estratégica e capacidade de transformar demandas do dia a dia em ações de marketing consistentes. Mais do que produzir conteúdo, sou responsável por manter a marca ativa, coerente e relevante em todos os pontos de contato com o público, conectando criatividade, organização e tomada de decisão para sustentar a comunicação da clínica de ponta a ponta.",
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
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <Reveal as="section" id="experience" className="md:col-span-12 bento p-6 lg:p-8 flex flex-col">
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
            <p
              className={`text-sm text-muted-foreground/80 leading-relaxed whitespace-pre-line ${
                !expanded[index] ? "line-clamp-4 md:line-clamp-none" : ""
              }`}
            >
              {exp.description}
            </p>
            {exp.description.length > 200 && (
              <button
                type="button"
                onClick={() =>
                  setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
                }
                className="md:hidden mt-2 text-xs font-bold text-primary"
              >
                {expanded[index] ? "Ver menos" : "Ver mais +"}
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-auto pt-6 flex justify-center">
        <Link
          to="/curriculo"
          className="px-5 py-2 rounded-full text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          VER EXPERIÊNCIA
        </Link>
      </div>
    </Reveal>
  );
};
