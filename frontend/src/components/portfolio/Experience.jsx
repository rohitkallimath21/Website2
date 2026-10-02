import { motion } from "framer-motion";
import { useState } from "react";
import { CV } from "../../data/cv";
import { Reveal } from "./Reveal";

export const Experience = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="work" data-testid="experience" className="relative py-24 sm:py-36 border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">(02) — Experience</span>
            <h2 className="font-display font-bold tracking-[-0.02em] text-4xl sm:text-5xl lg:text-6xl mt-4">
              Where I've<br />run the systems
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-[var(--muted)] max-w-xs">
              Eight roles · five industries · one throughline — reliable, secure IT operations.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-[var(--line)]">
          {CV.experience.map((job, i) => (
            <motion.div
              key={job.company}
              data-testid={`exp-row-${i}`}
              onMouseEnter={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`relative border-b border-[var(--line)] py-8 sm:py-10 transition-colors duration-500 ${
                active === i ? "bg-[var(--ink-2)]" : ""
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start px-2 sm:px-4">
                <div className="lg:col-span-2 font-mono text-sm text-[var(--lime)]">{job.period}</div>
                <div className="lg:col-span-4">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">{job.title}</h3>
                  <p className="text-[var(--paper)]/70 mt-1">
                    {job.company} <span className="text-[var(--muted)]">· {job.place}</span>
                  </p>
                </div>
                <ul className="lg:col-span-6 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] text-[var(--paper)]/70 leading-relaxed">
                      <span className="text-[var(--lime)] mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--lime)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute left-0 top-0 h-full w-[2px] bg-[var(--lime)] origin-top transition-transform duration-500"
                   style={{ transform: `scaleY(${active === i ? 1 : 0})` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
