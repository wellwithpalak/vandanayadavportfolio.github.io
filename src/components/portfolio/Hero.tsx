import { motion } from "framer-motion";
import { Avatar3D } from "./Avatar3D";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0a0f] text-white"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/25 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-[40vmin] w-[40vmin] rounded-full bg-indigo-500/20 blur-[100px]" />
      </div>

      {/* Top bar */}
      <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 pt-6 text-[10px] uppercase tracking-[0.25em] text-white/60 md:px-6 md:pt-8 md:text-xs">
        <span className="font-display text-base font-semibold tracking-normal text-white">VY</span>
        <span className="hidden sm:inline">Marketing · AI · Brand strategy</span>
      </div>

      {/* Avatar centerpiece */}
      <div className="absolute inset-0 z-10">
        <Avatar3D />
      </div>

      {/* Overlay text — mobile: stacked top/bottom; desktop: side-by-side */}
      <div className="pointer-events-none relative z-20 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-between gap-6 px-5 py-6 md:grid md:grid-cols-12 md:items-center md:px-6 md:py-0">
        {/* TOP / LEFT */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="md:col-span-4"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-sm">Hello! I'm</p>
          <h1 className="mt-2 font-display text-4xl font-700 leading-[0.95] sm:text-5xl md:mt-3 md:text-6xl lg:text-7xl">
            VANDANA<br />YADAV
          </h1>
        </motion.div>

        {/* spacer for avatar in middle on desktop */}
        <div className="hidden md:col-span-4 md:block" />

        {/* BOTTOM / RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-right md:col-span-4"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-sm">MBA · Marketing</p>
          <h2 className="mt-2 font-display text-4xl font-700 leading-[0.95] sm:text-5xl md:mt-3 md:text-6xl lg:text-7xl">
            B2B<br />
            <span className="bg-gradient-to-r from-coral to-amber-300 bg-clip-text text-transparent">
              STRATEGIST
            </span>
          </h2>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-16 right-5 z-20 md:bottom-20 md:right-6"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur transition-all hover:border-coral hover:bg-coral hover:text-ink md:px-6 md:py-3 md:text-xs"
        >
          See work →
        </a>
      </motion.div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap py-2.5 md:py-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-6 px-6 font-display text-[11px] uppercase tracking-[0.2em] text-white/70 md:gap-10 md:text-sm">
              <span>153+ team led</span><span className="text-coral">●</span>
              <span>1,500+ trained</span><span className="text-coral">●</span>
              <span>AI Marketing</span><span className="text-coral">●</span>
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
