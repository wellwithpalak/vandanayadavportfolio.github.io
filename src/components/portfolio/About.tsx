import { motion } from "framer-motion";
import speakingImg from "@/assets/vandana-speaking.png";
import avatarImg from "@/assets/vandana-avatar.png";

export function About() {
  return (
    <section id="about" className="relative bg-ink text-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-cream/10"
          >
            <img src={speakingImg} alt="Vandana presenting on stage" className="w-full" loading="lazy" />
          </motion.div>
          <div className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-4">
            <img src={avatarImg} alt="Avatar" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="font-display text-lg leading-tight">Vandana Yadav</p>
              <p className="text-xs text-cream/60">MBA · Finance · Delhi, IN</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">About</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl font-700 leading-[1.05] text-balance">
            High energy.<br />Higher standards.
          </h2>
          <div className="mt-8 space-y-5 text-cream/80 text-lg max-w-2xl text-pretty">
            <p>
              Three-plus years in, I've already led teams of 153, trained over 1,500
              people, and built marketing systems that make growth feel boring — in the
              best possible way.
            </p>
            <p>
              My MBA in Finance keeps the numbers honest. My obsession with creative
              tools — AI generative platforms and CapCut — keeps the storytelling
              sharp. The combination is where I do my best work: B2B and B2C brands
              that need clarity, momentum, and a marketing leader who can do both the
              spreadsheet and the stage.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "MBA", v: "Finance" },
              { k: "3+ yrs", v: "experience" },
              { k: "B2B / B2C", v: "marketing" },
              { k: "Delhi", v: "based · global" },
            ].map((c) => (
              <div key={c.k} className="rounded-xl border border-cream/10 bg-cream/5 px-4 py-3">
                <p className="font-display text-xl">{c.k}</p>
                <p className="text-xs uppercase tracking-wider text-cream/50 mt-0.5">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}