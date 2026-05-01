import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";

const STORAGE_KEY = "mic-drop-seen-v1";

export function MicDropLoader() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<"dark" | "drop" | "bright" | "done">("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setShow(true);
    sessionStorage.setItem(STORAGE_KEY, "1");

    const t1 = setTimeout(() => setPhase("drop"), 350);
    const t2 = setTimeout(() => setPhase("bright"), 1500);
    const t3 = setTimeout(() => setPhase("done"), 2400);
    const t4 = setTimeout(() => setShow(false), 2900);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            backgroundColor:
              phase === "bright" || phase === "done" ? "#fff7e8" : "#0a0a0f",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
        >
          {/* hall lights flooding in */}
          <AnimatePresence>
            {(phase === "bright" || phase === "done") && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 6, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute h-[40vmin] w-[40vmin] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,235,180,0.95) 0%, rgba(255,200,120,0.6) 35%, rgba(255,255,255,0) 70%)",
                  }}
                />
                {/* spotlight beams */}
                {[-30, -10, 10, 30].map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 0.55, scaleY: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    style={{
                      transform: `rotate(${a}deg)`,
                      transformOrigin: "top center",
                      background:
                        "linear-gradient(to bottom, rgba(255,230,170,0.7), rgba(255,230,170,0))",
                    }}
                    className="absolute top-0 h-[120vh] w-[18vmin] blur-2xl"
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* stage */}
          <div className="relative flex flex-col items-center">
            {/* mic */}
            <motion.div
              initial={{ y: -260, rotate: -8, opacity: 0 }}
              animate={
                phase === "dark"
                  ? { y: -260, opacity: 1 }
                  : phase === "drop"
                  ? { y: 0, rotate: 12, opacity: 1 }
                  : { y: 8, rotate: 18, opacity: phase === "done" ? 0 : 1 }
              }
              transition={{
                y: { type: "spring", stiffness: 320, damping: 14, duration: 0.9 },
                rotate: { duration: 0.9 },
                opacity: { duration: 0.4 },
              }}
              className="relative z-10"
            >
              <div
                className={`grid h-24 w-24 place-items-center rounded-full border-2 transition-colors duration-500 md:h-28 md:w-28 ${
                  phase === "bright" || phase === "done"
                    ? "border-[#1a0a05]/30 bg-white text-[#1a0a05] shadow-[0_20px_60px_rgba(255,180,100,0.55)]"
                    : "border-cream/20 bg-[#16161e] text-cream shadow-[0_10px_40px_rgba(255,106,77,0.25)]"
                }`}
              >
                <Mic className="h-10 w-10 md:h-12 md:w-12" strokeWidth={2.2} />
              </div>
              {/* cable */}
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: phase === "dark" ? 0 : phase === "drop" ? 220 : 220,
                }}
                transition={{ duration: 0.6 }}
                style={{ background: "linear-gradient(to bottom, currentColor, transparent)" }}
                className={`absolute left-1/2 top-0 -z-0 w-[2px] -translate-x-1/2 -translate-y-full ${
                  phase === "bright" || phase === "done" ? "text-[#1a0a05]/30" : "text-cream/30"
                }`}
              />
            </motion.div>

            {/* shockwave on drop */}
            <AnimatePresence>
              {phase === "drop" && (
                <motion.div
                  initial={{ scale: 0.2, opacity: 0.7 }}
                  animate={{ scale: 4, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="absolute bottom-[-20px] h-32 w-32 rounded-full border-2 border-orange-300/80"
                />
              )}
            </AnimatePresence>

            {/* tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase === "bright" ? 1 : 0,
                y: phase === "bright" ? 0 : 10,
              }}
              transition={{ duration: 0.45 }}
              className="mt-10 font-display text-2xl font-bold tracking-tight text-[#1a0a05] md:text-3xl"
            >
              The stage is yours.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
