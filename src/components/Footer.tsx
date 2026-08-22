import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/profile";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-soft)] px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold text-[var(--color-text)]">
          <Terminal className="h-4 w-4 text-[var(--color-accent)]" />
          karthik<span className="text-[var(--color-accent)]">@</span>qa
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-5">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-[var(--color-text-faint)]">
        © 2026 {profile.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
