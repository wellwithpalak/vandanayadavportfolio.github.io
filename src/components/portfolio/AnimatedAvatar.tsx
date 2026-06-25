import { motion } from "framer-motion";
import avatar from "@/assets/vandana-cutout.png";

/**
 * Lightweight animated 2D avatar — low CPU/GPU, runs smoothly on old devices.
 * Single CSS float + one static halo. No JS animation loops, no sparkles.
 */
export function AnimatedAvatar() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
      {/* Soft static halo — pure CSS, no animation */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-coral/30 via-coral/10 to-transparent blur-[60px]"
      />

      {/* Floating avatar — single fade-in, then CSS-only float */}
      <motion.img
        src={avatar}
        alt="Vandanaa Yadav portrait"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="motion-safe:animate-[avatar-float_7s_ease-in-out_infinite] relative z-10 h-[78%] w-auto max-w-[94%] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)] md:h-[88%]"
      />

      <style>{`
        @keyframes avatar-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="avatar-float"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
