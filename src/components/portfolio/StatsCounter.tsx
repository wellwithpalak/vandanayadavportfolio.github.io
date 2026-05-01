import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 153, suffix: "+", label: "Team members led" },
  { value: 1500, suffix: "+", label: "People trained" },
  { value: 40, suffix: "%", label: "Faster turnaround" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
      else setN(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="relative bg-[#1a1a1a] py-16 text-cream md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-coral">
          By the numbers
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-700 md:text-5xl">
          Proof, in figures.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur md:p-8"
            >
              <p className="font-display text-4xl font-700 leading-none text-coral md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cream/60 md:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
