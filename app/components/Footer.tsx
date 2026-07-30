import Link from "next/link";
import { GithubLogo, EnvelopeSimple } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-12 lg:px-20">
      <div className="container-max flex flex-col items-center justify-between gap-5 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 Kamrujjaman Khan Bilas. Crafted with Next.js & Tailwind CSS.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/KamrujjamanKhan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-accent"
          >
            <GithubLogo size={16} weight="duotone" />
            GitHub
          </a>
          <a
            href="mailto:khan2305341424@diu.edu.bd"
            className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-accent"
          >
            <EnvelopeSimple size={16} weight="duotone" />
            Email
          </a>
          <Link href="/" className="cursor-pointer transition-colors hover:text-accent">
            Home
          </Link>
          <span>Mirpur, Dhaka</span>
        </div>
      </div>
    </footer>
  );
}
