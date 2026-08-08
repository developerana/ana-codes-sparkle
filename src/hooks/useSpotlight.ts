import { useEffect } from "react";

/**
 * Global mouse tracking:
 * - sets --mx / --my (0..1) on <html> for background parallax
 * - sets --spot-x / --spot-y (px) on the hovered card for the spotlight halo
 */
export function useSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let last: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const root = document.documentElement;
        root.style.setProperty("--mx", (e.clientX / window.innerWidth).toFixed(4));
        root.style.setProperty("--my", (e.clientY / window.innerHeight).toFixed(4));

        const target = e.target as HTMLElement | null;
        const card = target?.closest<HTMLElement>(".bento, .glass-card, .spotlight");

        if (last && last !== card) {
          last.style.removeProperty("--spot-o");
          last = null;
        }
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
          card.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
          card.style.setProperty("--spot-o", "1");
          last = card;
        }
      });
    };

    const onLeave = () => {
      if (last) {
        last.style.removeProperty("--spot-o");
        last = null;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
