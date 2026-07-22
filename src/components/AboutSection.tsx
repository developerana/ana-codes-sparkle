import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Briefcase, Heart } from "lucide-react";
const highlights = [{
  icon: GraduationCap,
  title: "Formação",
  description: "Bacharel em Sistemas de Informação"
}, {
  icon: Code,
  title: "Especialidade",
  description: "Desenvolvimento Front-End"
}, {
  icon: Briefcase,
  title: "Foco",
  description: "Interfaces Funcionais"
}, {
  icon: Heart,
  title: "Paixão",
  description: "Experiência do Usuário"
}];
export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174,72%,56%,0.03),transparent_50%)]" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground">
            Sobre Mim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3 text-primary">Quem sou eu?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou uma desenvolvedora com formação em Sistemas de
              Informação, dedicada a criar e desenvolver interfaces que combinam{" "}
              <span className="text-foreground font-medium">
                funcionalidade e estética
              </span>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Durante minha trajetória acadêmica, desenvolvi projetos reais que
              me permitiram aplicar conceitos de programação, design de
              interfaces e organização de sistemas. Meu foco está em entregar
              soluções que realmente façam sentido para o usuário final.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Estou sempre em busca de novos desafios e oportunidades para
              crescer profissionalmente na área de tecnologia, contribuindo com
              minha visão orientada a detalhes e qualidade de código.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.4,
            delay: 0.4 + index * 0.1
          }} className="glass-card-hover p-6 text-center group">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};