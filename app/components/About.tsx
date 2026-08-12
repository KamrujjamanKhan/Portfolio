"use client";

import { Reveal, SectionHeading } from "./motion";

export default function About() {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <div className="container-max">
        <SectionHeading
          eyebrow="About"
          title="Curious builder from Dhaka, Bangladesh"
          subtitle="Lifelong passion for technology, emerging trends, and shipping work that matters."
        />
        <Reveal className="mx-auto max-w-3xl">
          <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
            <p className="relative text-base leading-relaxed text-muted-foreground md:text-lg">
              Originally from Rangpur and currently based in Mirpur, Dhaka, I am a passionate technology enthusiast with a strong interest in emerging innovations and industry trends. Driven by curiosity and a commitment to continuous learning, I aspire to contribute to leading global technology companies such as Google, Microsoft, and Yahoo. With a hardworking mindset, strong problem-solving abilities, and a dedication to growth, I actively seek opportunities to create innovative solutions and make a meaningful impact in the field of technology.
            </p>
            <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Year", value: "4th · SWE" },
                { label: "CGPA", value: "3.70" },
                { label: "Based in", value: "Dhaka" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background/40 px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
