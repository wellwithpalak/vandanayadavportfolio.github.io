import { motion } from "framer-motion";
import avatar from "@/assets/vandana-cutout.png";

/**
 * Animated 2D avatar — replaces the 3D model.
 * Floats gently, parallax glow, subtle rotation. Mobile-friendly, no WebGL.
 */
export function AnimatedAvatar() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
      {/* Soft halo */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[68vmin] w-[68vmin] rounded-full bg-gradient-to-br from-coral/35 via-coral/15 to-transparent blur-[80px]" />
      </motion.div>

      {/* Pulsing ring */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[52vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-coral/30"
      />

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-1.5 w-1.5 rounded-full bg-coral/80"
          style={{
            left: `${20 + (i * 9) % 60}%`,
            top: `${15 + (i * 13) % 55}%`,
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0, 1, 0],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating avatar */}
      <motion.img
        src={avatar}
        alt="Vandana Yadav portrait"
        loading="eager"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 h-[78%] w-auto max-w-[94%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] md:h-[88%]"
        style={{ animation: "avatar-float 6s ease-in-out infinite" }}
      />

      <style>{`
        @keyframes avatar-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-1.2deg); }
        }
      `}</style>
    </div>
  );
}
