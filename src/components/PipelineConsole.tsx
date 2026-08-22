import { useEffect, useState } from "react";

const STAGES = [
  { id: "lint", label: "lint" },
  { id: "unit", label: "unit" },
  { id: "e2e", label: "e2e (playwright)" },
  { id: "api", label: "api" },
  { id: "deploy", label: "deploy" },
] as const;

const LOG_LINES = [
  "$ playwright test --project=chromium",
  "  ✓ auth.spec.ts (12 passed)",
  "$ pytest tests/api -q",
  "  ✓ 15 endpoints validated",
  "$ gh workflow run regression.yml",
  "  ✓ pipeline green — deploy queued",
];

export function PipelineConsole() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (STAGES.length + 1));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % (LOG_LINES.length + 1));
    }, 550);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass relative overflow-hidden rounded-lg border border-[var(--color-border)] shadow-2xl">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg-raised)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-red)]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-amber)]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]/70" />
        <span className="ml-3 font-mono text-xs text-[var(--color-text-faint)]">regression.yml — GitHub Actions</span>
      </div>

      <div className="p-5 sm:p-6">
        {/* pipeline stages */}
        <div className="flex items-center overflow-x-auto pb-1">
          {STAGES.map((stage, i) => {
            const done = i < activeIndex;
            const running = i === activeIndex;
            return (
              <div key={stage.id} className="flex items-center shrink-0">
                <div
                  className={`flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors duration-300 ${
                    done
                      ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                      : running
                        ? "border-[var(--color-amber)] bg-[var(--color-amber-soft)] text-[var(--color-amber)]"
                        : "border-[var(--color-border)] text-[var(--color-text-faint)]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      done ? "bg-[var(--color-accent)]" : running ? "bg-[var(--color-amber)] animate-pulse" : "bg-[var(--color-text-faint)]"
                    }`}
                  />
                  {done ? "✓ " : ""}
                  {stage.label}
                </div>
                {i < STAGES.length - 1 && (
                  <span className={`mx-1.5 h-px w-5 shrink-0 ${i < activeIndex ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* terminal log */}
        <div className="mt-5 rounded-md border border-[var(--color-border-soft)] bg-black/30 p-4 font-mono text-[13px] leading-relaxed">
          {LOG_LINES.slice(0, logIndex).map((line, i) => (
            <div
              key={i}
              className={line.trim().startsWith("✓") ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]"}
            >
              {line}
            </div>
          ))}
          <span className="inline-block h-3.5 w-2 translate-y-0.5 bg-[var(--color-accent)] animate-blink" />
        </div>
      </div>
    </div>
  );
}
