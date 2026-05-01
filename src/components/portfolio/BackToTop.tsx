import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[120] grid h-12 w-12 place-items-center rounded-full bg-ink text-cream shadow-2xl ring-1 ring-white/10 hover:bg-coral hover:text-ink transition-colors md:bottom-6 md:right-6"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.4} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
