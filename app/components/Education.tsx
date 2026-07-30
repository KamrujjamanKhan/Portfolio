"use client";

import { GraduationCap } from "@phosphor-icons/react";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./motion";

const items = [
  {
    title: "B.Sc. in Software Engineering",
    school: "Daffodil International University (DIU)",
    meta: "Nov 2022 – Present · 4th Year",
    metric: "CGPA 3.70",
    detail: "Software Architecture, Database Systems, Web Engineering, Algorithms",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    school: "Rangpur Cantonment Public School and College",
    meta: "Dinajpur Board · 2020",
    metric: "GPA 5.00",
    detail: null,
  },
  {
    title: "Secondary School Certificate (SSC)",
    school: "Ulipur MS School and College, Kurigram",
    meta: "Dinajpur Board · 2018",
    metric: "GPA 5.00",
    detail: null,
  },
];

export default function Education() {
  return (
    <section id="education" className="section-pad scroll-mt-24">
      <div className="container-max">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey"
          subtitle="A clean timeline from SSC to senior year SWE."
        />

        <Reveal>
          <div className="relative mx-auto max-w-3xl">
            <div className="timeline-line hidden md:block" aria-hidden />
            <Stagger className="space-y-5">
              {items.map((item, i) => (
                <StaggerItem key={item.title}>
                  <article
                    className={`glass group relative rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 md:w-[calc(50%-1.25rem)] ${
                      i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <GraduationCap size={22} weight="duotone" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">{item.school}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.meta}
                      <span className="mx-2 text-border">·</span>
                      <span className="text-foreground/90">{item.metric}</span>
                    </p>
                    {item.detail ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    ) : null}
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
