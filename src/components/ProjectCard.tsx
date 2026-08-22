import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "../data/projects";
import { SkillBadge } from "./SkillBadge";

const STATUS_LABEL: Record<Project["status"], string> = {
  prod: "in production",
  shipped: "shipped",
  exploring: "exploring",
};

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">{project.tag}</p>
          <h3 className="mt-1.5 font-mono text-lg font-semibold text-[var(--color-text)]">{project.title}</h3>
        </div>
        <span className="shrink-0 rounded border border-[var(--color-border)] px-2 py-1 font-mono text-[10px] text-[var(--color-accent)]">
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 flex items-center gap-1.5 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
      >
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        {open ? "hide details" : "view project"}
      </button>

      {open && (
        <div className="mt-4 space-y-4 border-t border-[var(--color-border-soft)] pt-4">
          <div>
            <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">problem</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">solution</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.solution}</p>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">key features</p>
            <ul className="mt-1.5 space-y-1.5">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-5 flex gap-4 border-t border-[var(--color-border-soft)] pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
          >
            <GithubIcon className="h-3.5 w-3.5" /> code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
          >
            <ExternalLink className="h-3.5 w-3.5" /> demo
          </a>
        )}
      </div>
    </div>
  );
}
