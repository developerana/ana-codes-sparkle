import { memo } from "react";

const BackgroundEffects = () => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        // parallax offsets derived from global --mx / --my
        ["--px" as string]: "calc((var(--mx, 0.5) - 0.5) * 1px)",
        ["--py" as string]: "calc((var(--my, 0.5) - 0.5) * 1px)",
      }}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Animated glass orbs with red accent glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/14 blur-[120px] animate-float-slow opacity-60" style={{ transform: `translate3d(calc(var(--px) * 60), calc(var(--py) * 60), 0)`, transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)" }} />
      <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-primary/12 blur-[140px] animate-float opacity-45" style={{ transform: `translate3d(calc(var(--px) * -45), calc(var(--py) * -45), 0)`, transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",  animationDelay: "-2s" }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-primary/14 blur-[120px] animate-float-slow opacity-50" style={{ transform: `translate3d(calc(var(--px) * 35), calc(var(--py) * 35), 0)`, transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",  animationDelay: "-4s" }} />
      <div className="absolute top-[60%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-primary/10 blur-[100px] animate-drift opacity-40" style={{ transform: `translate3d(calc(var(--px) * -70), calc(var(--py) * -70), 0)`, transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",  animationDelay: "-3s" }} />
      
      {/* Glassmorphism grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: "translate3d(calc(var(--px) * 20), calc(var(--py) * 20), 0)",
          transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",
        }}
      />
      
      {/* Subtle scanline */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.03) 50%)",
          backgroundSize: "100% 4px",
        }}
      />
      
      {/* Glassmorphism noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default memo(BackgroundEffects);
