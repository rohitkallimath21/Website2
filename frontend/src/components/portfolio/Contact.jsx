import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CV } from "../../data/cv";
import { MaskLine, Reveal } from "./Reveal";

export const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);

  return (
    <section id="contact" ref={ref} data-testid="contact" className="relative py-28 sm:py-40 border-t border-[var(--line)] overflow-hidden">
      <motion.div
        style={{ opacity: glow }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(204,255,51,0.18),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">(05) — Contact</span>
        </Reveal>

        <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.9] mt-6 text-5xl sm:text-7xl lg:text-8xl">
          <MaskLine>Let's build</MaskLine>
          <MaskLine delay={0.1}>
            <span className="text-[var(--lime)]">reliable</span> IT.
          </MaskLine>
        </h2>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${CV.email}`}
            data-testid="contact-email"
            className="group inline-flex items-center gap-3 mt-12 font-display font-semibold text-2xl sm:text-4xl hover-line"
          >
            {CV.email}
            <span className="group-hover:translate-x-2 transition-transform text-[var(--lime)]">↗</span>
          </a>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
          {[
            { label: "Phone", value: CV.phone, href: `tel:${CV.phone.replace(/\s/g, "")}` },
            { label: "Location", value: CV.location, href: "#top" },
            { label: "Résumé", value: "Download PDF ↗", href: CV.cvUrl },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06} className="bg-[var(--ink)] p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">{c.label}</div>
              <a
                href={c.href}
                target={c.label === "Résumé" ? "_blank" : undefined}
                rel="noreferrer"
                data-testid={`contact-${c.label.toLowerCase()}`}
                className="block mt-3 text-lg text-[var(--paper)] hover:text-[var(--lime)] transition-colors"
              >
                {c.value}
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          <span>© {new Date().getFullYear()} {CV.name}</span>
          <span>{CV.role} · {CV.years} years</span>
          <span>Designed & built with care</span>
        </div>
      </div>
    </section>
  );
};
