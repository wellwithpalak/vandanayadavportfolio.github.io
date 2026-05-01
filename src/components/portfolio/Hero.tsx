import { motion } from "framer-motion";
import { Avatar3D } from "./Avatar3D";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] text-white"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/25 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-[40vmin] w-[40vmin] rounded-full bg-indigo-500/20 blur-[100px]" />
      </div>

      {/* Top bar */}
      <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 text-xs uppercase tracking-[0.25em] text-white/60">
        <span className="font-display text-base font-semibold tracking-normal text-white">VY</span>
        <span className="hidden md:inline">Marketing · AI · Brand strategy</span>
      </div>

      {/* Avatar fills the screen as the hero centerpiece */}
      <div className="absolute inset-0 z-10">
        <Avatar3D />
      </div>

      {/* Overlay text — placed on the sides so the avatar is fully visible */}
      <div className="pointer-events-none relative z-20 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-12 items-center gap-6 px-6">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="col-span-12 md:col-span-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Hello! I'm</p>
          <h1 className="mt-3 font-display text-5xl font-700 leading-[0.95] md:text-6xl lg:text-7xl">
            VANDANA<br />YADAV
          </h1>
        </motion.div>

        {/* spacer for avatar in middle */}
        <div className="hidden md:col-span-4 md:block" />

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="col-span-12 text-right md:col-span-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">MBA · Finance</p>
          <h2 className="mt-3 font-display text-5xl font-700 leading-[0.95] md:text-6xl lg:text-7xl">
            B2B<br />
            <span className="bg-gradient-to-r from-coral to-amber-300 bg-clip-text text-transparent">
              STRATEGIST
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Side rail */}
      <div className="absolute bottom-8 left-6 z-20 hidden flex-col gap-4 text-[10px] uppercase tracking-[0.3em] text-white/50 md:flex">
        <span>Delhi · IN</span>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 right-6 z-20"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur transition-all hover:border-coral hover:bg-coral hover:text-ink"
        >
          See work →
        </a>
      </motion.div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap py-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 px-6 font-display text-sm uppercase tracking-[0.2em] text-white/70">
              <span>153+ team led</span><span className="text-coral">●</span>
              <span>1,500+ trained</span><span className="text-coral">●</span>
              <span>AI Generative Marketing</span><span className="text-coral">●</span>
              <span>CRM & Analytics</span><span className="text-coral">●</span>
              <span>Public Speaking</span><span className="text-coral">●</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}
