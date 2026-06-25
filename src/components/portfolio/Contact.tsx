import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, Instagram, Mail } from "lucide-react";

const EMAIL = "vandanaayadavwork@gmail.com";
const INSTAGRAM = "https://www.instagram.com/vaandana.yadav";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };
  return (
    <section id="contact" className="relative overflow-hidden bg-coral text-ink py-24 md:py-32">
      <div className="absolute inset-0 opacity-30 bg-grid pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em]"
        >
          Let's build something
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 font-display text-[clamp(3rem,8vw,7rem)] font-700 leading-[0.9] text-balance"
        >
          Need a marketing leader who<br />
          <span className="italic">actually</span> ships?
        </motion.h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            preload="intent"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Open contact page →
          </Link>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-ink/40 bg-coral-soft/40 px-8 py-4 text-sm font-semibold text-ink hover:border-ink transition-colors"
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" /> Copied!
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" /> {EMAIL}
              </>
            )}
          </button>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-fuchsia-600 via-pink-500 to-amber-400 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Instagram className="h-4 w-4" /> @vaandana.yadav
          </a>
        </div>

        <p className="mt-10 text-sm text-ink/70">Based in Delhi · Open to remote and on-site engagements</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70 pt-14 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-700 text-cream">
            Vandanaa<span className="text-coral">.</span>
          </p>
          <p className="mt-2 text-sm">
            AI Content Creator · Video Editor · CapCut Expert · B2B Strategist · Prompt Engineer — based in Delhi.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/50">
            Sitemap
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-coral">Home</Link></li>
            <li><Link to="/wellwith" className="hover:text-coral">Wellwith — Experience</Link></li>
            <li><a href="/#reels" className="hover:text-coral">Video Showcase</a></li>
            <li><Link to="/contact" className="hover:text-coral">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/50">
            Elsewhere
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="hover:text-coral inline-flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" /> @vaandana.yadav ↗
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@indianbhaktiaisongs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-coral"
              >
                YouTube — @indianbhaktiaisongs ↗
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-coral">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-cream/10 px-6 pt-6 text-xs text-cream/50 md:flex-row">
        <p>© {new Date().getFullYear()} Vandanaa Yadav. All rights reserved.</p>
        <p className="font-display">Designed with rigor. Shipped with energy.</p>
      </div>
    </footer>
  );
}
