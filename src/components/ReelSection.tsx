import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Clapperboard } from "lucide-react";

type Reel = {
  title: string;
  client: string;
  category: string;
  duration: string;
  description: string;
  tools: string[];
  /** Optional MP4 URL — quando definido, o card faz preview em autoplay no hover */
  video?: string;
  accent: string;
};

const reels: Reel[] = [
  {
    title: "Campanha Institucional",
    client: "UNIVETS Saúde Animal",
    category: "Vídeo Institucional",
    duration: "01:20",
    description:
      "Vídeo institucional para clínica veterinária, do roteiro à finalização, com foco em transmitir cuidado e confiança.",
    tools: ["Premiere Pro", "After Effects"],
    accent: "from-primary/30 to-primary/5",
  },
  {
    title: "Série de Reels",
    client: "UNIVETS Saúde Animal",
    category: "Social Media",
    duration: "00:30",
    description:
      "Reels semanais para Instagram com cortes dinâmicos, legendas animadas e trilha sincronizada.",
    tools: ["CapCut Pro", "Premiere Pro"],
    accent: "from-emerald-500/25 to-primary/5",
  },
  {
    title: "Motion Graphics",
    client: "Projetos diversos",
    category: "Motion Design",
    duration: "00:45",
    description:
      "Aberturas, lower thirds e animações de logo para reforçar identidade visual em vídeos e campanhas.",
    tools: ["After Effects", "Illustrator"],
    accent: "from-teal-500/25 to-primary/5",
  },
  {
    title: "Trailer Gamer",
    client: "Projeto pessoal",
    category: "Edição Cinematográfica",
    duration: "01:05",
    description:
      "Edição em ritmo cinematográfico com sound design, color grading e transições inspiradas em trailers de games.",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    accent: "from-cyan-500/25 to-primary/5",
  },
];

const ReelCard = ({ reel, index }: { reel: Reel; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => undefined);
  };

  const handleLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative shrink-0 w-[280px] sm:w-[340px] snap-start"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/40 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_16px_48px_hsl(0,0%,0%,0.6)]">
        {reel.video ? (
          <video
            ref={videoRef}
            src={reel.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${reel.accent} bg-card`}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <Clapperboard className="absolute inset-0 m-auto w-10 h-10 text-primary/40" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Play badge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-500 ${
              isHovered ? "scale-110 opacity-100" : "scale-100 opacity-80"
            }`}
          >
            <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-0.5" />
          </div>
        </div>

        {/* HUD corner ticks */}
        <span className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <span className="absolute top-3 right-3 text-[11px] font-medium px-2 py-1 rounded-md bg-background/80 backdrop-blur border border-border/50 text-muted-foreground">
          {reel.duration}
        </span>

        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-[11px] uppercase tracking-wider text-primary font-medium">
            {reel.category}
          </p>
          <h3 className="font-heading font-semibold text-base leading-tight group-hover:text-primary transition-colors">
            {reel.title}
          </h3>
        </div>
      </div>

      <div className="mt-4 px-1">
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {reel.description}
        </p>
        <p className="text-xs text-muted-foreground/70 mb-3">
          Cliente: <span className="text-foreground/80">{reel.client}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {reel.tools.map((tool) => (
            <span
              key={tool}
              className="text-[11px] px-2.5 py-1 rounded-md bg-muted/60 border border-border/40 text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export const ReelSection = () => {
  return (
    <section id="reel" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(141,73%,42%,0.06),transparent_55%)]" />

      <div className="relative z-10">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Showreel
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3">
              Edição de <span className="gradient-text">Vídeos</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Campanhas, Reels, motion graphics e edição cinematográfica.
              Passe o mouse sobre um card para ver o preview.
            </p>
          </motion.div>
        </div>

        {/* Horizontal carousel */}
        <div className="section-container">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-none">
            {reels.map((reel, index) => (
              <ReelCard key={reel.title} reel={reel} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
