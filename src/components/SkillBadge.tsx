export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-1.5 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
      {label}
    </span>
  );
}
