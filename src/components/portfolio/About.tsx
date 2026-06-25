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
              <p className="font-display text-lg leading-tight">Vandanaa Yadav</p>
              <p className="text-xs text-cream/60">AI Creator · Video Editor · Delhi, IN</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">About</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl font-700 leading-[1.05] text-balance">
            Creator first.<br />Strategist always.
          </h2>
          <div className="mt-8 space-y-5 text-cream/80 text-lg max-w-2xl text-pretty">
            <p>
              I'm a creator who lives at the intersection of <span className="text-coral">video editing</span>,
              <span className="text-coral"> AI content</span> and <span className="text-coral">B2B strategy</span>.
              From cinematic reels in CapCut to AI-powered campaigns and prompt-engineered workflows,
              I help brands and creators move from idea to viral output.
            </p>
            <p>
              Video editing, generative AI, personal branding and content marketing —
              shipped with the rigor of a strategist and the eye of a storyteller.
            </p>
          </div>

          {/* Visual storytelling timeline */}
          <ol className="mt-10 relative border-l border-cream/15 pl-6 space-y-6">
            {[
              { k: "Now", v: "AI content + cinematic video editing for brands & creators" },
              { k: "Lately", v: "CapCut reels, motion graphics, prompt-engineered workflows" },
              { k: "Always", v: "B2B strategy, personal branding, content marketing" },
            ].map((t) => (
              <li key={t.k} className="relative">
                <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full bg-coral ring-4 ring-ink" />
                <p className="font-display text-sm uppercase tracking-[0.2em] text-coral">{t.k}</p>
                <p className="text-cream/80">{t.v}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "Video", v: "editor" },
              { k: "CapCut", v: "expert" },
              { k: "AI", v: "creator" },
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