"use client";

import { SectionHeading, Stagger, StaggerItem } from "./motion";

const engineering = [
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Docker",
  "Linux",
];

const creative = ["Freelance Photography", "Esports Gaming", "System Configuration"];

export default function Skills() {
  return (
    <section id="skills" className="section-pad scroll-mt-24">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack & craft"
          subtitle="Tools I use to ship products — plus creative skills beyond the IDE."
        />

        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Software Engineering
            </p>
            <Stagger className="flex flex-wrap justify-center gap-2.5">
              {engineering.map((skill) => (
                <StaggerItem key={skill}>
                  <span className="inline-flex cursor-default rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft hover:text-accent">
                    {skill}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Creative & Other
            </p>
            <Stagger className="flex flex-wrap justify-center gap-2.5">
              {creative.map((skill) => (
                <StaggerItem key={skill}>
                  <span className="inline-flex rounded-full border border-dashed border-border bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent">
                    {skill}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
