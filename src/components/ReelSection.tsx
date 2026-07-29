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
      "Vídeo institucional para clínica veterinária, do roteiro à finalização.",
    tools: ["Premiere Pro", "After Effects"],
    accent: "from-primary/30 to-primary/5",
  },
  {
    title: "Série de Reels",
    client: "UNIVETS Saúde Animal",
    category: "Social Media",
    duration: "00:30",
    description:
      "Reels semanais com cortes dinâmicos, legendas animadas e trilha sincronizada.",
    tools: ["CapCut Pro", "Premiere Pro"],
    accent: "from-emerald-500/25 to-primary/5",
  },
  {
    title: "Motion Graphics",
    client: "Projetos diversos",
    category: "Motion Design",
    duration: "00:45",
    description:
      "Aberturas, lower thirds e animações de logo para reforçar identidade visual.",
    tools: ["After Effects", "Illustrator"],
    accent: "from-teal-500/25 to-primary/5",
  },
  {
    title: "Trailer Gamer",
    client: "Projeto pessoal",
    category: "Edição Cinematográfica",
    duration: "01:05",
    description:
      "Edição em ritmo cinematográfico com sound design e color grading.",
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative shrink-0 w-[280px] sm:w-[320px] snap-start"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/60 bg-background group-hover:border-primary/50 transition-all duration-500 group-hover:-translate-y-1">
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
          <div className={`absolute inset-0 bg-gradient-to-br ${reel.accent}`}>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <Clapperboard className="absolute inset-0 m-auto w-9 h-9 text-primary/40" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg transition-all duration-500 ${
              isHovered ? "scale-110" : "scale-100 opacity-85"
            }`}
          >
            <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
          </div>
        </div>

        <span className="absolute top-3 right-3 text-[11px] font-medium px-2 py-1 rounded-md bg-background/80 backdrop-blur border border-border/60 text-muted-foreground">
          {reel.duration}
        </span>

        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-[11px] uppercase tracking-wider text-primary font-medium">
            {reel.category}
          </p>
          <h3 className="font-heading font-semibold text-base leading-tight">
            {reel.title}
          </h3>
        </div>
      </div>

      <div className="mt-4 px-1">
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          {reel.description}
        </p>
        <p className="text-xs text-muted-foreground/70 mb-3">
          Cliente: <span className="text-foreground/80">{reel.client}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {reel.tools.map((tool) => (
            <span key={tool} className="tag">
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
    <section id="reel" className="md:col-span-12 bento p-6 lg:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            SHOWREEL
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Campanhas, Reels, motion graphics e edição cinematográfica.
          </p>
        </div>
        <a
          href="https://www.instagram.com/anahelouise/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-sm font-bold hover:underline"
        >
          VER TUDO
        </a>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x pb-4 scrollbar-none">
        {reels.map((reel, index) => (
          <ReelCard key={reel.title} reel={reel} index={index} />
        ))}
      </div>
    </section>
  );
};
