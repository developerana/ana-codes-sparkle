import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const experiences = [
    {
    type: "education", 
    title: "Bacharel em Sistemas de Informação",
    company: "Fundação de Ensino e Pesquisa de Itajubá - FEPI",
    period: "2022 - 2025",
    description: "Formação completa com foco em desenvolvimento de software, banco de dados, engenharia de software e gestão de projetos.",
    icon: GraduationCap,
  },
  {
    type: "work",
    title: "Scrum Master",
    company: "Plataforma de Gerenciamento de Atletas - T21 Arena Park (FEPI)",
    period: "07/2024 - 12/2024",
    description: "Liderei uma equipe multidisciplinar, composta por desenvolvedores, designers, analistas e testadores, garantindo que todos estivessem alinhados com os objetivos do nosso projeto",
    icon: Briefcase,
  },
  {
    type: "internship",
    title: "Desenvolvedora Front-End",
    company: "Plataforma de Gerenciamento de Atletas - T21 Arena Park (FEPI)",
    period: "03/2024 - 06/2024",
    description: "Trabalhei com tecnologias como React.js e Tailwind CSS para garantir uma experiência fluida para os usuários. Sempre ocando em práticas de desenvolvimento responsivo, acessível e intuitivas",
    icon: Briefcase,
  },
  {
    type: "internship",
    title: "Site de Saude Mental",
    company: "Escola Estadual Nossa Senhora de Lourdes",
    period: "2018 - 2020",
    description: "Durante o ensino médio, criei um site chamado “Corrente do Bem” para ajudar pessoas lidando com depressão e ansiedade. O site oferecia recursos úteis e mensagens de apoio para aqueles que precisavam de orientação e conforto. Palestrei sobre o projeto para dezenas de pessoas.",
    icon: Briefcase,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 glow-orb" />
      <div className="absolute bottom-1/4 -right-32 w-48 h-48 glow-orb" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="gradient-text">Experiência</span> & Formação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional e acadêmica, com foco em desenvolvimento web e tecnologia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-20">
                  <div className="w-full h-full rounded-full bg-primary animate-pulse-glow" />
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                </div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card-hover p-6 group"
                  >
                    {/* Icon badge */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-primary/80 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Decorative gradient line */}
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/50 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
