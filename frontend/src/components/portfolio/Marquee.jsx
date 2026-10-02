import { CV } from "../../data/cv";

export const Marquee = () => {
  const set = [...CV.marquee, ...CV.marquee];
  return (
    <section data-testid="marquee" className="relative border-y border-[var(--line)] bg-[var(--ink-2)] py-6 overflow-hidden">
      <div className="marquee-track">
        {set.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-semibold text-2xl sm:text-4xl px-6 text-[var(--paper)]/90">
              {item}
            </span>
            <span className="text-[var(--lime)] text-2xl sm:text-4xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};
