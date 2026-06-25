import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedAvatar } from "./AnimatedAvatar";

const ROLES = [
  "B2B Strategist",
  "Video Editor",
  "AI Content Creator",
  "Prompt Engineer",
  "Content Strategist",
  "Generative AI Creator",
  "Social Media Creator",
  "Creative Storyteller",
];

function RotatingRoles() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"type" | "pause" | "delete">("type");

  useEffect(() => {
    const full = ROLES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      if (text.length < full.length) {
        t = setTimeout(() => setText(full.slice(0, text.length + 1)), 55);
      } else {
        t = setTimeout(() => setPhase("pause"), 1400);
      }
    } else if (phase === "pause") {
      t = setTimeout(() => setPhase("delete"), 200);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(full.slice(0, text.length - 1)), 30);
      } else {
        setIdx((i) => (i + 1) % ROLES.length);
        setPhase("type");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx]);

  return (
    <span className="bg-gradient-to-r from-coral to-amber-300 bg-clip-text text-transparent">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-coral align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#1a1a1a] text-white pt-[max(env(safe-area-inset-top),0px)]"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-[40vmin] w-[40vmin] rounded-full bg-indigo-500/15 blur-[100px]" />
      </div>

      {/* Top bar */}
      <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 pt-6 text-[10px] uppercase tracking-[0.25em] text-white/60 md:px-6 md:pt-8 md:text-xs">
        <span className="font-display text-base font-semibold tracking-normal text-white">VY</span>
        <span className="hidden sm:inline">AI Content · Video Editing · B2B Strategy</span>
      </div>

      {/* Avatar centerpiece */}
      <div className="absolute inset-0 z-10">
        <AnimatedAvatar />
      </div>

      {/* Overlay text */}
      <div className="pointer-events-none relative z-20 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-between gap-6 px-5 py-6 md:grid md:grid-cols-12 md:items-center md:px-6 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="md:col-span-4"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-sm">Hi, I'm 👋</p>
          <h1 className="mt-2 font-display text-4xl font-700 leading-[0.95] sm:text-5xl md:mt-3 md:text-6xl lg:text-7xl">
            VANDANAA<br />YADAV
          </h1>
        </motion.div>

        <div className="hidden md:col-span-4 md:block" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-right md:col-span-4"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-sm">I am a</p>
          <h2 className="mt-2 min-h-[3em] font-display text-4xl font-700 leading-[0.95] sm:text-5xl md:mt-3 md:min-h-[2.4em] md:text-6xl lg:text-7xl">
            <RotatingRoles />
          </h2>
          <p className="pointer-events-auto mt-4 max-w-sm ml-auto text-sm text-white/70 md:text-base">
            Turning ideas into viral content with AI + Video Editing.
          </p>
          <div className="pointer-events-auto mt-5 flex flex-wrap justify-end gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:bg-coral/90 transition-all">
              View my work
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:border-coral hover:text-coral transition-all">
              Contact me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur pb-[env(safe-area-inset-bottom)]">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap py-2.5 md:py-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-6 px-6 font-display text-[11px] uppercase tracking-[0.2em] text-white/70 md:gap-10 md:text-sm">
              <span>Video Editor</span><span className="text-coral">●</span>
              <span>CapCut Expert</span><span className="text-coral">●</span>
              <span>AI Content Creator</span><span className="text-coral">●</span>
              <span>Prompt Engineer</span><span className="text-coral">●</span>
              <span>B2B Strategist</span><span className="text-coral">●</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}
