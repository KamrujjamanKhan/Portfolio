"use client";

import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { SectionHeading, Stagger, StaggerItem } from "./motion";

const projects = [
  {
    title: "DevFlow",
    tag: "Q&A Platform",
    desc: "Collaborative knowledge-sharing with real-time voting, topic filters, and AI answer assistance.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
  },
  {
    title: "NexusMart",
    tag: "E-Commerce",
    desc: "Scalable storefront with dynamic cart, payments, order tracking, and an admin panel.",
    stack: ["React", "Express", "PostgreSQL", "Stripe"],
  },
  {
    title: "CloudTask",
    tag: "Workflow",
    desc: "Kanban-style team manager with drag-and-drop boards and workspace permissions.",
    stack: ["React", "Firebase", "WebSockets", "Tailwind"],
  },
  {
    title: "MetricsPulse",
    tag: "Dashboard",
    desc: "Real-time server monitoring for uptime, latency, and CPU/memory with interactive charts.",
    stack: ["Next.js", "Chart.js", "Express", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad scroll-mt-24">
      <div className="container-max">
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          subtitle="Representative builds across platforms, commerce, and observability."
        />

        <Stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_20px_50px_rgba(34,197,94,0.12)] md:p-7">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs text-accent">0{index + 1}</p>
                    <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{project.tag}</p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 group-hover:border-accent/40 group-hover:text-accent">
                    <ArrowUpRight size={18} weight="bold" />
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                  {project.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4 border-t border-border pt-4">
                  <a
                    href="#"
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    Live Demo
                    <ArrowUpRight size={14} weight="bold" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GithubLogo size={16} weight="duotone" />
                    GitHub
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
