"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  GithubLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { easeOutExpo, useMotionReady } from "./motion";

const ROLES = [
  "Full-Stack Developer",
  "Software Engineering Student",
  "Freelance Photographer",
  "Open to Collaborations",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const ready = useMotionReady();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(35);
  const springX = useSpring(spotlightX, { stiffness: 120, damping: 24 });
  const springY = useSpring(spotlightY, { stiffness: 120, damping: 24 });
  const spotlightBg = useMotionTemplate`radial-gradient(560px circle at ${springX}% ${springY}%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 55%)`;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const springRY = useSpring(rotateY, { stiffness: 160, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduce]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    spotlightX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotlightY.set(((e.clientY - rect.top) / rect.height) * 100);

    const card = cardRef.current;
    if (!card) return;
    const c = card.getBoundingClientRect();
    const cx = (e.clientX - c.left) / c.width - 0.5;
    const cy = (e.clientY - c.top) / c.height - 0.5;
    rotateY.set(cx * 14);
    rotateX.set(cy * -12);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const animateIn = ready && !reduce;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden section-pad pt-10 md:pt-16 lg:pt-20"
    >
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-80"
          style={{ background: spotlightBg }}
        />
      ) : null}

      <div className="container-max relative z-[1] grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          className="space-y-7"
          initial={false}
          animate={animateIn ? { y: 0 } : undefined}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="relative flex h-2 w-2">
              <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open for opportunities
          </p>

          <div className="space-y-3">
            <p className="font-mono text-sm text-muted-foreground">Hi, I&apos;m</p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem] xl:leading-[1.05]">
              <span className="gradient-text">Bilas.dev</span>
            </h1>
            <p className="font-heading text-xl font-medium text-foreground/90 sm:text-2xl">
              Kamrujjaman Khan Bilas
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground sm:text-sm">
            <span className="text-accent">$</span>
            <span className="relative inline-flex h-5 min-w-[14rem] items-center overflow-hidden">
              <motion.span
                key={ROLES[roleIndex]}
                initial={reduce ? false : { y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: easeOutExpo }}
                className="absolute text-foreground"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </span>
            <span className="inline-block h-4 w-[2px] animate-pulse bg-accent" aria-hidden />
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Software Engineering student · Full-Stack Developer · Freelance Photographer.
            Building scalable apps from Mirpur, Dhaka — aiming for top tech teams.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="/#projects" className="btn-primary">
              Explore Projects
              <ArrowRight size={18} weight="bold" />
            </a>
            <a href="/#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2 text-sm text-muted-foreground">
            <a
              href="mailto:khan2305341424@diu.edu.bd"
              className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-accent"
            >
              <EnvelopeSimple size={16} weight="duotone" />
              <span className="truncate">khan2305341424@diu.edu.bd</span>
            </a>
            <a
              href="tel:+8801717137071"
              className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone size={16} weight="duotone" />
              +8801717137071
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} weight="duotone" />
              Mirpur, Dhaka
            </span>
            <a
              href="https://github.com/KamrujjamanKhan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-accent"
            >
              <GithubLogo size={16} weight="duotone" />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          ref={cardRef}
          className="relative mx-auto w-full max-w-md [perspective:1000px] lg:mx-0 lg:justify-self-end"
          initial={false}
          animate={animateIn ? { y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 0.08, ease: easeOutExpo }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/25 via-sky-400/10 to-transparent blur-2xl" />
          <motion.div
            style={
              reduce
                ? undefined
                : {
                    rotateX: springRX,
                    rotateY: springRY,
                    transformStyle: "preserve-3d",
                  }
            }
            className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface p-2 shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
          >
            <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-muted">
              <Image
                src="/bilas.png"
                alt="Kamrujjaman Khan Bilas"
                width={560}
                height={560}
                priority
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </motion.div>
          {!reduce ? (
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Move your cursor — portrait tilts with you
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
