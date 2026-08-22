import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

const TRAITS = [
  { k: "manual → automation", v: "Grounded in manual QA fundamentals, now building automated coverage on top of that base." },
  { k: "playwright + typescript", v: "Writing and maintaining Playwright suites in TypeScript for UI and cross-browser regression." },
  { k: "ci/cd native", v: "Comfortable wiring test suites directly into GitHub Actions rather than running them by hand." },
  { k: "sql & data", v: "Working knowledge of SQL and relational databases for test data setup and validation." },
];

export function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="whoami" title="About Me" description={profile.summary} />

        <div className="grid gap-4 sm:grid-cols-2">
          {TRAITS.map((trait) => (
            <div
              key={trait.k}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <p className="font-mono text-sm text-[var(--color-accent)]">{trait.k}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{trait.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
