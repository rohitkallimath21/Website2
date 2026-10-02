import { CV } from "../../data/cv";
import { Reveal } from "./Reveal";

export const Skills = () => (
  <section id="skills" data-testid="skills" className="relative py-24 sm:py-36 border-t border-[var(--line)]">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">(03) — Capabilities</span>
        <h2 className="font-display font-bold tracking-[-0.02em] text-4xl sm:text-5xl lg:text-6xl mt-4">
          The stack I<br />operate & secure
        </h2>
      </Reveal>

      <div className="mt-16 grid sm:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
        {CV.skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.06} className="bg-[var(--ink)] p-8 sm:p-10 group hover:bg-[var(--ink-2)] transition-colors duration-500">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display font-bold text-xl sm:text-2xl">{s.group}</h3>
              <span className="font-mono text-xs text-[var(--muted)]">0{i + 1}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span
                  key={it}
                  className="font-mono text-[11px] sm:text-xs tracking-wide px-3 py-1.5 rounded-full border border-[var(--line)] text-[var(--paper)]/80 group-hover:border-[var(--lime)]/40 transition-colors duration-500"
                >
                  {it}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
