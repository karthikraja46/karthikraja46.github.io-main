import { SectionHeading } from "../components/SectionHeading";
import { SkillBadge } from "../components/SkillBadge";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--color-border-soft)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="skills.json"
          title="Skills"
          description="Grouped the way they show up in day-to-day work — from writing manual test cases to shipping automation inside CI/CD."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.id} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <h3 className="font-mono text-sm font-semibold text-[var(--color-text)]">{group.label}</h3>
              <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">{group.comment}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
