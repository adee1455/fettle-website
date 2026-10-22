"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem("theme") || localStorage.getItem("fettle-theme")) as "light" | "dark" | null;
    const initialTheme = stored === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    localStorage.setItem("fettle-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <div className="w-[34px] h-[34px] rounded-full border border-[var(--line)] opacity-40 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="w-[34px] h-[34px] rounded-full border border-[var(--line)] bg-transparent text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-soft)] transition-colors duration-150 grid place-items-center cursor-pointer"
    >
      {theme === "light" ? (
        <Moon className="w-3.5 h-3.5 stroke-[2]" />
      ) : (
        <Sun className="w-3.5 h-3.5 stroke-[2]" />
      )}
    </button>
  );
}
