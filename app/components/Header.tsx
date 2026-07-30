"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import ThemeToggle from "./ThemeToggle";
import { easeOutExpo } from "./motion";

const sectionLinks = [
  { hash: "about", label: "About" },
  { hash: "education", label: "Education" },
  { hash: "skills", label: "Skills" },
  { hash: "projects", label: "Projects" },
  { hash: "interests", label: "Interests" },
  { hash: "contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  const sectionHref = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-strong shadow-[0_8px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)]" : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between px-6 py-4 md:px-8 lg:px-4">
        <Link href="/" className="group flex items-center gap-2.5 cursor-pointer">
          <span className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
            &lt;Bilas /&gt;
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {sectionLinks.map((link) => (
            <a
              key={link.hash}
              href={sectionHref(link.hash)}
              className="cursor-pointer rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/gallery"
            className="cursor-pointer rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Gallery
          </Link>
          <Link href="/resume" className="btn-ghost ml-2 !px-4 !py-2 text-sm">
            Resume
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-muted/50"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: easeOutExpo }}
            className="glass-strong border-t border-border lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {sectionLinks.map((link) => (
                <a
                  key={link.hash}
                  href={sectionHref(link.hash)}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer rounded-xl px-3 py-3 text-base text-foreground hover:bg-accent-soft"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/gallery"
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-xl px-3 py-3 text-base text-foreground hover:bg-accent-soft"
              >
                Gallery
              </Link>
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 text-center"
              >
                Resume
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
