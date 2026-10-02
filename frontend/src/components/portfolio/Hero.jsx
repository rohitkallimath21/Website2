import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CV } from "../../data/cv";
import { useMouseParallax } from "../../hooks/useMouseParallax";

const words = ["Rohit", "Kallimath"];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const line = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const { x, y } = useMouseParallax();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const px = useTransform(x, (v) => v * 26);
  const py = useTransform(y, (v) => v * 26);
  const px2 = useTransform(x, (v) => v * -14);
  const py2 = useTransform(y, (v) => v * -14);
  const imgPx = useTransform(x, (v) => v * 18);

  return (
    <section id="top" ref={ref} data-testid="hero" className="relative min-h-[100svh] overflow-hidden tick">
      {/* parallax image layer */}
      <motion.div style={{ y: imgY, scale: imgScale, x: imgPx }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(204,255,51,0.14),transparent_45%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 min-h-[100svh] flex flex-col justify-center pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[var(--lime)] flex items-center gap-3"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--lime)] animate-pulse" />
          {CV.role} · {CV.location}
        </motion.p>

        <motion.h1
          style={{ y: titleY }}
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display font-extrabold leading-[0.86] tracking-[-0.03em] mt-6"
        >
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                variants={line}
                className="block"
                style={{
                  fontSize: "clamp(3rem, 13.5vw, 12rem)",
                  color: i === 1 ? "transparent" : "var(--paper)",
                  WebkitTextStroke: i === 1 ? "1.5px var(--paper)" : "none",
                }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div style={{ x: px, y: py }} className="mt-8 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="text-base sm:text-lg text-[var(--paper)]/75 leading-relaxed"
          >
            {CV.tagline}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
          style={{ x: px2, y: py2 }}
        >
          <a
            href="#contact"
            data-testid="hero-contact-btn"
            className="group font-mono text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-full bg-[var(--lime)] text-[#0a0a0a] font-semibold hover:bg-[var(--paper)] transition-colors duration-300"
          >
            Get in touch
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#work"
            data-testid="hero-work-btn"
            className="font-mono text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-full border border-[var(--paper)]/25 hover:border-[var(--paper)] transition-colors duration-300"
          >
            View experience
          </a>
        </motion.div>
      </div>

      <motion.div
        style={{ x: px2, y: py2 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute z-10 top-1/2 right-[6%] -translate-y-1/2 w-[220px] xl:w-[260px]"
      >
        <div className="relative">
          <span className="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-2 border-l-2 border-[var(--lime)]" />
          <span className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-2 border-r-2 border-[var(--lime)]" />
          <div className="overflow-hidden rounded-lg border border-[var(--paper)]/15 aspect-[4/5] bg-[var(--ink-2)]">
            <img
              src={CV.photo}
              alt={CV.name}
              data-testid="hero-portrait"
              className="w-full h-full object-cover object-top grayscale contrast-[1.05]"
            />
          </div>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--paper)]/70">
            {CV.name}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-0 right-0 z-10 mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--muted)]"
      >
        <span>Scroll to explore</span>
        <span className="hidden sm:block">{CV.years} years · IT Infrastructure</span>
      </motion.div>
    </section>
  );
};
