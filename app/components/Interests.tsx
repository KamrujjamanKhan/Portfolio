"use client";

import { Camera, GameController, FilmStrip, AirplaneTilt } from "@phosphor-icons/react";
import { SectionHeading, Stagger, StaggerItem } from "./motion";

const items = [
  {
    icon: Camera,
    title: "Freelance Photography",
    desc: "Urban landscapes, portraits, and travel moments.",
  },
  {
    icon: GameController,
    title: "Esports & Gaming",
    desc: "Competitive play and community nights.",
  },
  {
    icon: FilmStrip,
    title: "Anime & Cinema",
    desc: "Stories, frames, and weekend rewatches.",
  },
  {
    icon: AirplaneTilt,
    title: "Travel",
    desc: "New places to recharge and reset perspective.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="section-pad scroll-mt-24">
      <div className="container-max">
        <SectionHeading
          eyebrow="Life"
          title="Beyond coding"
          subtitle="The hobbies that keep the creative muscle sharp."
        />

        <Stagger className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="group h-full rounded-3xl border border-border bg-surface p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} weight="duotone" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
