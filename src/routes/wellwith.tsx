import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GroundWorkMarquee } from "@/components/portfolio/GroundWorkMarquee";

export const Route = createFileRoute("/wellwith")({
  head: () => ({
    meta: [
      { title: "Wellwith — Seabuckthorn Brand Journey · Vandana Yadav" },
      { name: "description", content: "Vandana Yadav's complete marketing & content journey leading the Wellwith Seabuckthorn health brand — strategy, storytelling, reels, and growth." },
      { property: "og:title", content: "Wellwith — Seabuckthorn Brand Journey" },
      { property: "og:description", content: "End-to-end marketing journey behind the Wellwith Seabuckthorn brand." },
    ],
  }),
  component: WellwithPage,
});

type Berry = { id: number; left: number; delay: number; size: number; drift: number };

function BerryBurst() {
  const [berries, setBerries] = useState<Berry[]>([]);

  useEffect(() => {
    const arr: Berry[] = Array.from({ length: 36 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.2,
      size: 14 + Math.random() * 28,
      drift: -40 + Math.random() * 80,
    }));
    setBerries(arr);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {berries.map((b) => (
        <motion.span
          key={b.id}
          initial={{ y: "-10vh", x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: b.drift,
            opacity: [0, 1, 1, 0.8, 0],
            rotate: 360,
          }}
          transition={{
            duration: 3.2 + Math.random() * 1.4,
            delay: b.delay,
            ease: "easeIn",
          }}
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
          }}
          className="absolute rounded-full"
        >
          <span
            className="block h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #ffd166, #ff7a1a 55%, #c0390a 100%)",
              boxShadow:
                "0 0 14px rgba(255, 138, 30, 0.7), inset -2px -3px 6px rgba(120,30,0,0.45)",
            }}
          />
        </motion.span>
      ))}
    </div>
  );
}

const journey = [
  {
    phase: "Discovery",
    title: "Understanding the Seabuckthorn story",
    body: "Wellwith is built around the seabuckthorn berry — a Himalayan superfruit. The first job: turn deep ingredient science into a brand voice people actually want to read.",
  },
  {
    phase: "Brand Strategy",
    title: "Positioning a modern wellness identity",
    body: "Defined the audience, sharpened the visual language, and built a content framework that balances clinical credibility with warm, approachable storytelling.",
  },
  {
    phase: "Content & Reels",
    title: "Short-form video that actually converts",
    body: "Educational reels written, shot and edited in CapCut. Hooks, captions, ingredient breakdowns and lifestyle moments — built for organic reach on Instagram.",
  },
  {
    phase: "AI Marketing",
    title: "AI-powered creative engine",
    body: "Used generative AI tools to scale visual concepts, ad copy variants and thumbnail ideation — keeping cadence high without sacrificing brand quality.",
  },
  {
    phase: "Community",
    title: "Building the seabuckthorn audience",
    body: "Grew an engaged Instagram health community at @seabuckthorn.wellwith — turning followers into a feedback loop for product, content and creative direction.",
  },
  {
    phase: "Outcome",
    title: "A brand that punches above its weight",
    body: "A small, high-energy operation producing content quality that reads like a much larger team — the result of strategy, AI leverage, and obsessive iteration.",
  },
];

function WellwithPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a0a05] via-[#2a0f06] to-[#0f0603] text-cream">
      <BerryBurst />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[60vmin] w-[60vmin] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[40vmin] w-[40vmin] rounded-full bg-amber-400/15 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Top bar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cream/70 hover:text-orange-300 transition-colors">
            ← Back to portfolio
          </Link>
          <a
            href="https://www.instagram.com/seabuckthorn.wellwith/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200 hover:bg-orange-400/20 transition-colors"
          >
            @seabuckthorn.wellwith ↗
          </a>
        </div>

        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-center md:pt-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300"
          >
            Featured experience · Wellwith
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-700 leading-[0.95] text-balance md:text-7xl lg:text-8xl"
          >
            The Seabuckthorn{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
              Brand Journey
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-cream/75 text-pretty"
          >
            How a Himalayan berry became a modern wellness brand — through marketing
            strategy, content, reels and AI-powered creative leadership.
          </motion.p>
        </section>

        {/* Journey timeline */}
        <section className="relative mx-auto max-w-5xl px-6 pb-24">
          <div className="space-y-6">
            {journey.map((step, i) => (
              <motion.article
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-orange-300/15 bg-cream/[0.04] p-8 backdrop-blur md:p-10"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                    {String(i + 1).padStart(2, "0")} · {step.phase}
                  </p>
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-cream md:text-4xl">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-3xl text-cream/75 text-pretty">{step.body}</p>
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <GroundWorkMarquee />

        <section className="relative mx-auto max-w-4xl px-6 pb-32 pt-24 text-center">
          <h3 className="font-display text-4xl font-700 md:text-5xl">
            Want a brand journey like this?
          </h3>
          <p className="mt-4 text-cream/70">
            Marketing strategy, AI-powered content, and a leader who actually ships.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-8 py-4 text-sm font-semibold text-[#1a0a05] hover:bg-orange-300 transition-colors"
            >
              Start a conversation →
            </Link>
            <a
              href="https://www.instagram.com/seabuckthorn.wellwith/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold text-cream hover:border-orange-300 hover:text-orange-300 transition-colors"
            >
              Visit @seabuckthorn.wellwith
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
