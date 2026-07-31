import { Film, Megaphone, Palette, Code2, Gamepad2 } from "lucide-react";

export type Category =
  | "Todos"
  | "Vídeos"
  | "Marketing"
  | "Design"
  | "Web"
  | "Games";

export const categoryIcons: Record<string, typeof Film> = {
  Vídeos: Film,
  Marketing: Megaphone,
  Design: Palette,
  Web: Code2,
  Games: Gamepad2,
};

export const filters: Category[] = [
  "Todos",
  "Vídeos",
  "Marketing",
  "Design",
  "Web",
  "Games",
];

export type Project = {
  title: string;
  category: Exclude<Category, "Todos">;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  /** Video projects: shows a player-style preview card */
  kicker?: string;
  duration?: string;
  client?: string;
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Campanha Institucional",
    category: "Vídeos",
    kicker: "Vídeo Institucional",
    duration: "01:20",
    client: "UNIVETS Saúde Animal",
    description:
      "Vídeo institucional para clínica veterinária, do roteiro à finalização.",
    tags: ["Premiere Pro", "After Effects"],
  },
  {
    title: "Reels para Instagram",
    category: "Vídeos",
    kicker: "Social Media",
    duration: "00:30",
    client: "UNIVETS Saúde Animal",
    description:
      "Produção contínua de Reels com cortes dinâmicos, legendas animadas e trilha sincronizada.",
    tags: ["CapCut Pro", "Premiere Pro"],
  },
  {
    title: "Motion Graphics",
    category: "Design",
    description:
      "Aberturas, lower thirds e animações de logo para reforçar a identidade visual das marcas.",
    tags: ["After Effects", "Illustrator", "Branding"],
  },
  {
    title: "Gestão de Redes Sociais",
    category: "Marketing",
    description:
      "Planejamento editorial, criação de conteúdo, copywriting e métricas para a UNIVETS Saúde Animal.",
    tags: ["Social Media", "Copywriting", "Meta Ads"],
  },
  {
    title: "Identidade Visual",
    category: "Design",
    description:
      "Identidade visual e materiais gráficos, digitais e impressos, com consistência em todos os pontos de contato.",
    tags: ["Photoshop", "Illustrator", "Branding"],
  },
  {
    title: "Trailer Gamer",
    category: "Games",
    kicker: "Trailer",
    duration: "01:05",
    description:
      "Edição em ritmo cinematográfico com sound design, color grading e transições inspiradas em trailers de games.",
    tags: ["Premiere Pro", "DaVinci Resolve", "Sound Design"],
  },
  {
    title: "Sistema T21 Arena Park",
    category: "Web",
    description:
      "Sistema de gestão de atletas com Síndrome de Down: informações pessoais, anamnese e monitoramento.",
    tags: ["React", "Prisma", "Tailwind CSS"],
    demo: "https://t21-arena-park.com/",
  },
  {
    title: "Núcleo Mariense de Letras",
    category: "Web",
    description:
      "Site para um coletivo cultural de Maria da Fé - MG, promovendo a arte local em suas diversas formas.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://anahelouise.github.io/numale/",
  },
  {
    title: "E-commerce Opção Vidraçaria",
    category: "Web",
    description:
      "Loja virtual para uma vidraçaria: apresentação, serviços, orçamentos e produtos, com foco em UX.",
    tags: ["TypeScript", "React", "Vite"],
    demo: "https://opcaovidracaria.vercel.app/",
  },
  {
    title: "Attack On Titan Wiki",
    category: "Games",
    description:
      "Enciclopédia do universo de Shingeki no Kyojin, unindo cultura pop e desenvolvimento web.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://anahelouise.github.io/attackontitanwiki/",
  },
];
