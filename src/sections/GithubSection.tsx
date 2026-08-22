import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export function GithubSection() {
  const featured = projects.filter((p) => p.github).slice(0, 3);

  return (
    <section className="border-t border-[var(--color-border-soft)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="git remote -v" title="My Code & Open Source Work" />

        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)]">
                <GithubIcon className="h-5 w-5 text-[var(--color-accent)]" />
              </span>
              <div>
                <p className="font-mono text-sm font-semibold text-[var(--color-text)]">@karthikraja46</p>
                <p className="font-mono text-xs text-[var(--color-text-faint)]">source code, frameworks & experiments</p>
              </div>
            </div>
            <Button href={profile.github} target="_blank" variant="ghost" icon={<ArrowUpRight className="h-4 w-4" />}>
              View Profile
            </Button>
          </div>

          <div className="mt-6 grid gap-3 border-t border-[var(--color-border-soft)] pt-6 sm:grid-cols-3">
            {featured.map((p) => (
              <a
                key={p.id}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-md border border-[var(--color-border-soft)] p-4 transition-colors hover:border-[var(--color-accent)]/50"
              >
                <p className="font-mono text-sm text-[var(--color-text)] group-hover:text-[var(--color-accent)]">{p.title}</p>
                <p className="mt-1.5 font-mono text-xs text-[var(--color-text-faint)]">{p.stack.slice(0, 2).join(" · ")}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
