"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  GithubLogo,
  PaperPlaneTilt,
  CheckCircle,
} from "@phosphor-icons/react";
import { Reveal, SectionHeading, easeOutExpo } from "./motion";

const contacts = [
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: "khan2305341424@diu.edu.bd",
    href: "mailto:khan2305341424@diu.edu.bd",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801717137071",
    href: "tel:+8801717137071",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mirpur, Dhaka, Bangladesh",
    href: null,
  },
  {
    icon: GithubLogo,
    label: "GitHub",
    value: "KamrujjamanKhan",
    href: "https://github.com/KamrujjamanKhan",
  },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="section-pad scroll-mt-24">
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect & build together"
          subtitle="Have a role, collab, or idea? Drop a message — I usually reply within a day."
        />

        <Reveal className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-3">
            {contacts.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} weight="duotone" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-foreground break-all">
                      {value}
                    </span>
                  </span>
                </>
              );

              if (href) {
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="glass flex cursor-pointer items-center gap-3 rounded-2xl p-4 transition-colors hover:border-accent/40"
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <div key={label} className="glass flex items-center gap-3 rounded-2xl p-4">
                  {inner}
                </div>
              );
            })}
          </aside>

          <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: easeOutExpo }}
                  className="flex min-h-[280px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle size={48} weight="duotone" className="text-accent" />
                  <p className="mt-4 font-heading text-xl font-semibold text-foreground">
                    Message sent
                  </p>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  <label className="block md:col-span-1">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      Name
                    </span>
                    <input name="name" required className="input-field" placeholder="Your name" />
                  </label>
                  <label className="block md:col-span-1">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      Subject
                    </span>
                    <input name="subject" className="input-field" placeholder="What's this about?" />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      Message
                    </span>
                    <textarea
                      name="message"
                      required
                      className="input-field h-32 resize-none"
                      placeholder="Tell me about the role, project, or idea..."
                    />
                  </label>
                  <button type="submit" className="btn-primary md:col-span-2">
                    Send Message
                    <PaperPlaneTilt size={18} weight="bold" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
