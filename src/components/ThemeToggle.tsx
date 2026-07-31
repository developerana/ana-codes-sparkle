import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("theme") === "light" ? "light" : "dark";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
};

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggle } = useTheme();

  return (
    <Button
      variant="heroOutline"
      size="sm"
      onClick={toggle}
      className={className}
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 mr-2" />
      ) : (
        <Moon className="w-4 h-4 mr-2" />
      )}
      {theme === "dark" ? "Tema claro" : "Tema escuro"}
    </Button>
  );
};
