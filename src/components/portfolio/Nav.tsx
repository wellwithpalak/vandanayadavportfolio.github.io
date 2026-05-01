import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Briefcase, User, Sparkles, Leaf, Mail, ArrowRight, FileText } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const anchorLinks = [
  { href: "#work", label: "Work", icon: Briefcase },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Sparkles },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream font-sans text-sm">V</span>
          Vandana<span className="text-coral">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {anchorLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-ink/70 hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/wellwith" className="text-ink/70 hover:text-coral transition-colors">
              Wellwith <span className="ml-1 rounded-full bg-coral/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-coral">Experience</span>
            </Link>
          </li>
          <li>
            <Link to="/resume" className="text-ink/70 hover:text-coral transition-colors">
              Resume
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
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>

        {/* Mobile menu trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-background/60 text-ink"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[82vw] max-w-sm border-l border-ink/10 bg-[#0a0a0f] p-0 text-cream [&>button]:hidden"
          >
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>

            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-cream/10">
                <span className="font-display text-lg font-semibold">
                  Vandana<span className="text-coral">.</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-full border border-cream/15 hover:border-coral hover:text-coral"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <p className="px-3 pb-2 text-[10px] uppercase tracking-[0.25em] text-cream/40">
                  Explore
                </p>
                <ul className="space-y-1">
                  {anchorLinks.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-cream/85 hover:bg-cream/5 hover:text-cream"
                      >
                        <l.icon className="h-4 w-4 text-coral" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/wellwith"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-cream/85 hover:bg-cream/5 hover:text-coral"
                    >
                      <Leaf className="h-4 w-4 text-coral" />
                      Wellwith
                      <span className="ml-auto rounded-full bg-coral/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-coral">
                        Experience
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resume"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-cream/85 hover:bg-cream/5 hover:text-coral"
                    >
                      <FileText className="h-4 w-4 text-coral" />
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-cream/85 hover:bg-cream/5 hover:text-cream"
                    >
                      <Mail className="h-4 w-4 text-coral" />
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="border-t border-cream/10 p-4">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-ink hover:bg-coral/90"
                >
                  Let's talk
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <p className="mt-3 text-center text-[10px] uppercase tracking-[0.25em] text-cream/40">
                  Marketing · AI · Brand strategy
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
