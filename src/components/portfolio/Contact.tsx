import { motion } from "framer-motion";

export function Contact() {
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
          Need a leader who<br />
          <span className="italic">actually</span> ships?
        </motion.h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:vandana@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            vandana@example.com →
          </a>
          <a
            href="https://www.youtube.com/@indianbhaktiaisongs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/40 bg-coral-soft/40 px-8 py-4 text-sm font-semibold text-ink hover:border-ink transition-colors"
          >
            YouTube channel
          </a>
        </div>

        <p className="mt-10 text-sm text-ink/70">Based in Delhi · Open to remote and on-site engagements</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} Vandana Yadav. All rights reserved.</p>
        <p className="font-display">Designed with rigor. Shipped with energy.</p>
        <a href="/portal" className="text-xs uppercase tracking-widest text-cream/40 hover:text-coral transition-colors">
          Admin portal →
        </a>
      </div>
    </footer>
  );
}