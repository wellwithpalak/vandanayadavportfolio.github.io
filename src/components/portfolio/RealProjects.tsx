import { motion } from "framer-motion";

/**
 * Real Projects showcase.
 *
 * Each slot renders either a real video/image (once you drop the file into
 * src/assets/projects/ and uncomment the import) or a clean upload placeholder.
 *
 * To add a real project:
 *   1. Upload the file (image or .mp4) — tell me the project number.
 *   2. I'll wire it into the matching slot.
 */

type Slot = {
  n: string;
  title: string;
  category: string;
  blurb: string;
  media?: { type: "image" | "video"; src: string };
};

const slots: Slot[] = [
  {
    n: "01",
    title: "AI-Powered Marketing Suite",
    category: "AI · Generative · B2B Healthcare",
    blurb:
      "LLM + Midjourney workflow that ships full-funnel campaigns. Drop a screen recording or hero image here.",
  },
  {
    n: "02",
    title: "Wellwith Brand Storytelling",
    category: "Short-form video · CapCut",
    blurb:
      "Educational reels that lifted organic engagement. MP4 of a finished reel works perfectly here.",
  },
  {
    n: "03",
    title: "The Leadership Hub — 1,500+ trained",
    category: "Public speaking · Live training",
    blurb:
      "Event photo or stage video. Wide-angle shot of the room recommended.",
  },
  {
    n: "04",
    title: "Growth Analytics Dashboard",
    category: "Finance · CRM · Healthcare data",
    blurb:
      "Screenshot of your CRM dashboard or an analytics chart export.",
  },
  {
    n: "05",
    title: "Operational Excellence Playbook",
    category: "B2B Strategy · Onboarding",
    blurb:
      "Cover slide / brochure PDF page exported as image.",
  },
  {
    n: "06",
    title: "Digital Outreach Toolkit",
    category: "20+ printable B2B frameworks",
    blurb:
      "Best as a flat-lay or grid of brochure pages.",
  },
];

function MediaSlot({ slot }: { slot: Slot }) {
  if (slot.media?.type === "image") {
    return (
      <img
        src={slot.media.src}
        alt={slot.title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    );
  }
  if (slot.media?.type === "video") {
    return (
      <video
        src={slot.media.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary via-cream to-coral-soft/40 p-6 text-center">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-ink/10 text-2xl text-ink/70">
        ↑
      </div>
      <p className="font-display text-base font-semibold text-ink">
        Upload required
      </p>
      <p className="max-w-[24ch] text-xs text-muted-foreground">{slot.blurb}</p>
      <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream">
        Slot {slot.n}
      </span>
    </div>
  );
}

export function RealProjects() {
  return (
    <section id="real-projects" className="relative bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">
              Real proof — videos & screenshots
            </p>
            <h2 className="mt-3 font-display text-5xl font-700 tracking-tight text-balance md:text-6xl">
              The actual work,<br />not just the résumé.
            </h2>
          </div>
          <p className="max-w-sm text-cream/70">
            Each slot below is a real project from Vandana's track record. Send me
            the matching video or image and I'll drop it into place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {slots.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-cream/10 bg-cream/[0.03] backdrop-blur"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <MediaSlot slot={s} />
                <div className="absolute left-3 top-3 z-10 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream backdrop-blur">
                  {s.n}
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-coral">
                  {s.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-cream">
                  {s.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-coral/40 bg-coral/10 p-6 text-sm text-cream/80 md:p-8">
          <p>
            <span className="font-semibold text-coral">Next step:</span> share
            the actual project files — short videos (.mp4), screen recordings,
            campaign screenshots, dashboard exports, training photos, brochure
            pages. Mention the slot number and I'll wire each one in.
          </p>
        </div>
      </div>
    </section>
  );
}