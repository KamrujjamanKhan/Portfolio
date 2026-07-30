"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function getPreferredTheme(): "light" | "dark" {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export default function ThemeToggle() {
  const reduce = useReducedMotion();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = getPreferredTheme();
    setTheme(current);
    document.documentElement.classList.toggle("dark", current === "dark");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative ml-1 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-muted/60 text-foreground transition-colors duration-200 hover:border-accent/40 hover:bg-accent-soft"
    >
      {mounted ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={reduce ? false : { opacity: 0, rotate: -40, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, rotate: 40, scale: 0.7 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {theme === "dark" ? (
              <Moon size={18} weight="duotone" />
            ) : (
              <Sun size={18} weight="duotone" />
            )}
          </motion.span>
        </AnimatePresence>
      ) : (
        <Sun size={18} weight="duotone" className="opacity-50" />
      )}
    </button>
  );
}
