"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "@phosphor-icons/react";

export default function Resume() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-background text-foreground print:bg-white print:text-black">
      {/* Print Button */}
      <div className="sticky top-0 z-40 glass-strong print:hidden border-b border-border px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ArrowLeft size={16} weight="bold" />
              Back to Portfolio
            </Link>
            <h1 className="hidden font-heading text-lg font-semibold text-foreground sm:block">
              Resume
            </h1>
          </div>
          <button
            onClick={handlePrint}
            className="btn-primary !px-4 !py-2 text-sm"
          >
            <Printer size={16} weight="bold" />
            Print / PDF
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <main className="px-6 md:px-12 lg:px-20 py-12 print:py-0 print:px-4">
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 print:mb-6 border-b-2 border-emerald-500/20 dark:border-emerald-500/30 print:border-black pb-6">
          <h1 className="text-4xl print:text-3xl font-bold text-black dark:text-white mb-2">
            Kamrujjaman Khan Bilas
          </h1>
          <p className="text-lg print:text-base text-emerald-600 dark:text-emerald-400 print:text-black mb-3 font-semibold">
            Software Engineering Student | Full-Stack Developer | Freelance Photographer
          </p>
          <div className="flex flex-wrap gap-3 print:gap-2 text-sm text-zinc-600 dark:text-emerald-300 print:text-black">
            <span>📧 khan2305341424@diu.edu.bd</span>
            <span>•</span>
            <span>📱 +8801717137071</span>
            <span>•</span>
            <span>📍 Mirpur, Dhaka, Bangladesh</span>
            <span>•</span>
            <span>🔗 github.com/KamrujjamanKhan</span>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-black dark:text-white mb-3 print:mb-2">
            Professional Summary
          </h2>
          <p className="text-zinc-700 dark:text-zinc-400 print:text-black leading-relaxed">
            Driven and hardworking software engineering student with a passion for building scalable applications. Proficient in full-stack development using modern technologies. Seeking opportunities with top-tier tech companies to contribute to impactful projects while continuously learning and innovating.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-black dark:text-white mb-4 print:mb-2 pb-2 border-b-2 border-zinc-200 dark:border-zinc-700 print:border-black">
            Education
          </h2>
          <div className="space-y-4 print:space-y-3">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-black dark:text-white print:text-black">
                  B.Sc. in Software Engineering
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 print:text-black">Nov 2022 – Present</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-emerald-300 font-semibold mt-1">
                Daffodil International University (DIU) • CGPA: 3.70
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 print:text-black mt-1">
                Coursework: Software Architecture, Database Systems, Web Engineering, Algorithms
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-black dark:text-white print:text-black">
                  Higher Secondary School Certificate (HSC)
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 print:text-black">2020</span>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                Rangpur Cantonment Public School and College, Rangpur • GPA: 5.00 / 5.00
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-black dark:text-white print:text-black">
                  Secondary School Certificate (SSC)
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 print:text-black">2018</span>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                Ulipur MS School and College, Kurigram • GPA: 5.00 / 5.00
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-black dark:text-white mb-4 print:mb-2 pb-2 border-b-2 border-zinc-200 dark:border-zinc-700 print:border-black">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            <div>
              <p className="font-semibold text-black dark:text-white print:text-black mb-1">Languages</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                JavaScript, TypeScript, Java, C++, Python
              </p>
            </div>
            <div>
              <p className="font-semibold text-black dark:text-white print:text-black mb-1">Frontend</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                React, Next.js, Tailwind CSS, Framer Motion
              </p>
            </div>
            <div>
              <p className="font-semibold text-black dark:text-white print:text-black mb-1">Backend</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                Node.js, Express.js, Java, Python
              </p>
            </div>
            <div>
              <p className="font-semibold text-black dark:text-white print:text-black mb-1">Databases & Tools</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                PostgreSQL, MongoDB, Firebase, Git, Docker, Linux
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-black dark:text-white mb-4 print:mb-2 pb-2 border-b-2 border-zinc-200 dark:border-zinc-700 print:border-black">
            Featured Projects
          </h2>
          <div className="space-y-4 print:space-y-3">
            <div>
              <h3 className="font-semibold text-black dark:text-white print:text-black">
                DevFlow - Developer Q&A Platform
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                Collaborative Q&A platform with real-time voting, topic filtering, and AI answer assistance using Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white print:text-black">
                NexusMart - Microservices E-Commerce Hub
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                Scalable e-commerce platform with dynamic cart management, payment integration, order tracking, and admin panel using React, Redux, Express.js, PostgreSQL, and Stripe API.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white print:text-black">
                CloudTask - Workflow & Team Manager
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                Kanban-style project management with real-time drag-and-drop task boards and team workspace permissions using React, Tailwind CSS, Firebase, and WebSockets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white print:text-black">
                MetricsPulse - Server Performance Dashboard
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 print:text-black">
                Real-time server monitoring dashboard tracking uptime, latency, and CPU/memory utilization using Next.js, Chart.js, Express.js, and Tailwind CSS.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Skills */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-black dark:text-white mb-4 print:mb-2 pb-2 border-b-2 border-zinc-200 dark:border-zinc-700 print:border-black">
            Additional Skills
          </h2>
          <div className="flex flex-wrap gap-2 print:gap-1">
            {[
              "Freelance Photography",
              "System Configuration",
              "Esports Gaming",
              "Problem Solving",
              "Team Collaboration",
              "Agile Methodology",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 print:px-2 print:py-0 print:text-xs rounded-full bg-emerald-100 dark:bg-emerald-500/15 print:bg-zinc-100 text-emerald-900 dark:text-emerald-300 print:text-black text-sm border border-emerald-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 print:mt-6 pt-6 border-t border-emerald-500/20 dark:border-emerald-500/30 print:border-black text-center text-sm text-zinc-600 dark:text-zinc-400 print:text-black">
          <p>© 2026 Kamrujjaman Khan Bilas. All rights reserved.</p>
        </div>
        </div>
      </main>
    </div>
  );
}
