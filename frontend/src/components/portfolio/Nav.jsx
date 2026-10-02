import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CV } from "../../data/cv";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[var(--line)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="font-display font-extrabold tracking-tight text-lg">
          RK<span className="text-[var(--lime)]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          {links.map((l) => (
            <a key={l.href} href={l.href} data-testid={`nav-${l.label.toLowerCase()}`} className="hover-line hover:text-[var(--paper)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={CV.cvUrl}
          target="_blank"
          rel="noreferrer"
          data-testid="nav-resume"
          className="font-mono text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-full border border-[var(--paper)]/25 hover:bg-[var(--lime)] hover:text-[#0a0a0a] hover:border-[var(--lime)] transition-colors duration-300"
        >
          Résumé ↗
        </a>
      </div>
    </motion.header>
  );
};
