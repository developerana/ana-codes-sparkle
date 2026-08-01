import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="md:col-span-12 rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between gap-8"
    >
      <h2 className="font-heading font-bold text-2xl tracking-tight">SOBRE</h2>
      <div className="space-y-4">
        <p className="font-heading font-bold text-2xl leading-tight">
          Trabalho na interseção entre vídeo, marketing e desenvolvimento.
        </p>
        <p className="font-medium leading-relaxed opacity-90">
          Gosto de criar projetos que tenham propósito: aqueles que comunicam
          uma ideia com clareza, funcionam bem na prática e também despertam
          alguma emoção em quem vê. Minha formação técnica me deu estrutura para
          pensar em estratégia, organização e experiência do usuário. Já a
          edição de vídeo, o design e o marketing me ensinaram a observar
          detalhes, contar histórias e transformar conceitos em algo visualmente
          memorável. Grande parte do meu repertório criativo vem de coisas que
          fazem parte do meu dia a dia: games, filmes, séries, animes e música.
          Essas referências aparecem naturalmente na forma como penso ritmo,
          estética, narrativa e identidade visual. Acredito que os melhores
          projetos surgem quando criatividade e tecnologia trabalham juntas. É
          esse equilíbrio que busco em cada trabalho que desenvolvo.
        </p>
      </div>
      <a
        href="#projects"
        aria-label="Ver trabalhos"
        className="w-11 h-11 rounded-full bg-background text-primary flex items-center justify-center hover:scale-105 transition-transform"
      >
        <ArrowRight className="w-5 h-5" />
      </a>
    </motion.section>
  );
};
