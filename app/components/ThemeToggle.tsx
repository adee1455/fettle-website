"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const t = stored === "dark" ? "dark" : "light";
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) {
    return <div className="w-8 h-8 rounded-[8px] border border-[var(--line)] opacity-30 animate-pulse" />;
  }

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="w-9 h-9 rounded-[8px] border border-[var(--line)] bg-transparent text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-soft)] hover:border-[var(--muted)] transition-all duration-150 grid place-items-center cursor-pointer"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 stroke-[1.75]" />
      ) : (
        <Sun className="w-4 h-4 stroke-[1.75]" />
      )}
    </button>
  );
}
