import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    title: "Marketing",
    company: "UNIVETS Saúde Animal",
    period: "02/2026 - Atual",
    description:
      "Planejamento de campanhas, criação de Reels, motion design, edição de vídeos, gestão de redes sociais, identidade visual e materiais impressos.",
    current: true,
  },
  {
    title: "Criação e gerenciamento de conteúdo — construção civil",
    company: "Opção Vidraçaria",
    period: "01/2024 - 06/2024",
    description:
      "Criei uma conta para promover os serviços de uma vidraçaria, utilizando copy e design para compartilhar trabalhos realizados e atrair novos clientes. Explorei estratégias de marketing digital e como alcançar e converter o público-alvo online.",
  },
  {
    title: "Desenvolvimento Web",
    company: "INVEZTE",
    period: "08/2025 - 11/2025",
    description: "Atuei como Desenvolvedora Web e na prototipação de interfaces.",
  },
  {
    title: "Scrum Master",
    company: "Plataforma de Gerenciamento de Atletas - T21 Arena Park",
    period: "08/2024 - 12/2024",
    description:
      "Atuei como intermediadora para facilitar o desenvolvimento e a entrega de soluções ágeis. Liderei uma equipe multidisciplinar composta por desenvolvedores, designers e analistas/testadores, garantindo alinhamento com os objetivos do projeto.",
  },
  {
    title: "Prototipagem (Figma)",
    company: "Plataforma de Gerenciamento de Atletas - T21 Arena Park",
    period: "05/2024 - 07/2024",
    description:
      "Desenvolvi a interface da plataforma no Figma criando wireframes, mockups e protótipos interativos. Realizei testes de usabilidade com a equipe e trabalhei no design responsivo a partir dos feedbacks.",
  },
  {
    title: "Desenvolvedora Front-End",
    company: "Plataforma de Gerenciamento de Atletas - T21 Arena Park",
    period: "02/2024 - 05/2024",
    description:
      "Trabalhei com React.js e Tailwind CSS para garantir uma experiência fluida, sempre focando em práticas de desenvolvimento responsivo, acessível e intuitivo.",
  },
  {
    title: "Aplicativo de gestão de bibliotecas",
    company: "Gerenciamento de Biblioteca",
    period: "07/2023 - 12/2023",
    description:
      "Liderei uma equipe na criação de uma aplicação completa (front-end e back-end) para gerenciar uma biblioteca, coordenando o trabalho e garantindo a entrega de todos os aspectos do projeto.",
  },
  {
    title: "Criação e gerenciamento de conteúdo — indústria musical",
    company: "Projeto próprio",
    period: "03/2020 - 04/2023",
    description:
      "Criei uma conta para compartilhar vídeos da indústria musical e alcancei dezenas de milhares de acessos em poucas semanas, aprendendo estratégias de marketing digital e crescimento de audiência.",
  },
  {
    title: "Site sobre saúde mental",
    company: "Corrente do Bem",
    period: "02/2018 - 12/2020",
    description:
      "Criei um site para ajudar pessoas lidando com depressão e ansiedade, oferecendo recursos úteis e mensagens de apoio. Palestrei sobre o projeto para centenas de pessoas.",
  },
  {
    title: "Gerenciamento de Rádio",
    company: "Rádio Ginásio",
    period: "02/2018 - 12/2020",
    description:
      "Liderei uma rádio, responsável por criar conteúdos e apoiar professores e palestrantes, desenvolvendo liderança, colaboração e produção de conteúdo em áudio.",
  },
  {
    title: "Secretária",
    company: "Opção Vidraçaria",
    period: "2018 - 2020",
    description:
      "Atendimento direto ao público, recepção de clientes e suporte às suas demandas, além de apoio à organização das rotinas administrativas e à comunicação entre clientes e operacional.",
  },
];


const competencies = [
  { name: "Desenvolvimento do front-end de aplicações", level: "Iniciante" },
  { name: "Criação de conteúdo relevante e informativo", level: "Intermediário" },
  { name: "Trabalho de forma autônoma e em equipe", level: "Intermediário" },
  { name: "Figma", level: "Intermediário" },
  { name: "Comunicação e empatia", level: "Avançado" },
  { name: "Desenvolvimento de websites", level: "Iniciante" },
  { name: "Edição de Vídeo", level: "Intermediário" },
  { name: "Criação de conteúdo com escrita criativa", level: "Intermediário" },
  { name: "Notion", level: "Intermediário" },
];




const Curriculo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          VOLTAR AO PORTFÓLIO
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bento p-6 lg:p-10 mb-4"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3">
            Currículo & Experiência
          </p>
          <p className="text-muted-foreground">
            Trajetória profissional, formação acadêmica e habilidades. Bacharel em
            Sistemas de Informação.
          </p>
        </motion.header>

        <section className="bento p-6 lg:p-10 mb-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight mb-8">
            EXPERIÊNCIA
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.period}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
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

        <div className="grid grid-cols-1 gap-4">
          <section className="bento p-6 lg:p-10">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-xl font-bold tracking-tight">
                FORMAÇÃO
              </h2>
            </div>
            <div className="relative pl-6 border-l-2 border-primary/25">
              <span className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-muted" />
              <div className="text-xs font-bold text-muted-foreground mb-1">
                02/2022 - 02/2026
              </div>
              <h3 className="font-heading font-semibold leading-tight">
                Sistemas de Informação — Bacharelado
              </h3>
              <p className="text-sm text-muted-foreground">
                Fundação de Ensino e Pesquisa de Itajubá - FEPI
              </p>
            </div>

          </section>
        </div>

        <section className="bento p-6 lg:p-8 mt-4">
          <h2 className="font-heading text-xl font-bold tracking-tight mb-6">
            COMPETÊNCIAS
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {competencies.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center rounded-full bg-background border border-border/60 px-4 py-2 text-sm leading-none"
              >
                {c.name}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Curriculo;
