import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream font-sans text-sm">V</span>
          Vandana<span className="text-coral">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-ink/70 hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/wellwith" className="text-ink/70 hover:text-coral transition-colors">
              Wellwith
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-ink/70 hover:text-ink transition-colors">
              Contact
            </Link>
          </li>
        </ul>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream hover:bg-ink/90 transition-colors"
        >
          Let's talk
          <span aria-hidden>→</span>
        </Link>
      </nav>
    </motion.header>
  );
}
