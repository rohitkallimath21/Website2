import { CV } from "../../data/cv";
import { Reveal } from "./Reveal";

export const Education = () => (
  <section id="education" data-testid="education" className="relative py-24 sm:py-32 border-t border-[var(--line)]">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">(04) — Education</span>
          <h2 className="font-display font-bold tracking-[-0.02em] text-3xl sm:text-4xl mt-4">
            Foundations & continuous learning
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Certifications</div>
            <ul className="mt-4 space-y-2.5">
              {CV.certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-[var(--paper)]/75 leading-relaxed">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--lime)]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Languages</div>
            <div className="flex flex-wrap gap-2 mt-4">
              {CV.languages.map((l) => (
                <span key={l} className="font-mono text-xs px-4 py-2 rounded-full border border-[var(--line)] text-[var(--paper)]/80">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-8">
        <div className="border-t border-[var(--line)]">
          {CV.education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <div className="border-b border-[var(--line)] py-7 grid sm:grid-cols-12 gap-3 items-start hover:bg-[var(--ink-2)] transition-colors duration-500 px-2">
                <div className="sm:col-span-2 font-mono text-sm text-[var(--lime)]">{e.year}</div>
                <div className="sm:col-span-6">
                  <h3 className="font-display font-semibold text-xl">{e.title}</h3>
                  <p className="text-[var(--paper)]/60 text-sm mt-1">{e.org}</p>
                </div>
                <div className="sm:col-span-4 text-[var(--paper)]/55 text-sm">{e.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
