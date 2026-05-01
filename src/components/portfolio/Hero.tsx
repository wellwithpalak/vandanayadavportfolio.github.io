import { motion } from "framer-motion";
import { Avatar3D } from "./Avatar3D";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-16 pb-24 lg:grid-cols-12 lg:gap-6 lg:pt-24 lg:pb-32">
        {/* LEFT */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-ink/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Available for select projects · Delhi, IN
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-[clamp(3rem,7vw,6.5rem)] font-700 leading-[0.95] text-balance"
          >
            Finance brain.<br />
            <span className="italic text-coral">Creative</span> hustle.<br />
            Built to scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground text-pretty"
          >
            I'm <span className="font-semibold text-ink">Vandana Yadav</span> — MBA (Finance), high-energy
            operator and B2B strategist. I lead big teams, ship AI-powered marketing,
            and turn messy growth problems into clean systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              See selected work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card px-7 py-4 text-sm font-semibold text-ink hover:border-ink/60 transition-colors"
            >
              Hire Vandana
            </a>
          </motion.div>

          {/* metric strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[
              { k: "153+", v: "team led" },
              { k: "1,500+", v: "trained" },
              { k: "40%", v: "faster content" },
            ].map((m) => (
              <div key={m.v}>
                <dt className="font-display text-3xl font-semibold text-ink">{m.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{m.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* RIGHT — character */}
        <div className="lg:col-span-5 relative flex items-end justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-md"
          >
            {/* coral disc backdrop */}
            <div className="absolute inset-x-2 bottom-16 top-16 rounded-[2.5rem] bg-gradient-to-br from-coral-soft via-coral/30 to-coral/60 blur-md" />
            <div className="absolute inset-x-6 bottom-20 top-20 rounded-[2rem] bg-cream/30 backdrop-blur-sm" />

            <div className="relative z-10">
              <Avatar3D />
            </div>

            {/* floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute left-0 top-20 z-20 hidden rounded-2xl bg-card px-4 py-3 shadow-soft sm:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Now playing</p>
              <p className="font-display text-sm font-semibold">AI Marketing Suite</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -right-2 bottom-24 z-20 hidden rounded-2xl bg-ink px-4 py-3 text-cream shadow-soft sm:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-cream/60">KPI</p>
              <p className="font-display text-sm font-semibold">+25% onboarding speed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-y border-border bg-ink text-cream overflow-hidden">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap py-5">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6 font-display text-2xl">
              <span>MBA · Finance</span><span className="text-coral">●</span>
              <span>B2B Strategy</span><span className="text-coral">●</span>
              <span>AI Generative Marketing</span><span className="text-coral">●</span>
              <span>Public Speaking</span><span className="text-coral">●</span>
              <span>CRM & Analytics</span><span className="text-coral">●</span>
              <span>Content & Video</span><span className="text-coral">●</span>
              <span>Team Leadership</span><span className="text-coral">●</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}