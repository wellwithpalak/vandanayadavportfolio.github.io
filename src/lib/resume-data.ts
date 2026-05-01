/**
 * Resume content — auto-extracted from the portfolio site (About, Skills, Work).
 * Single source of truth for both the /resume page and the PDF export.
 */

export const resumeData = {
  name: "Vandana Yadav",
  title: "B2B Marketing Strategist · MBA Finance",
  location: "Delhi, India",
  email: "vy3638017@gmail.com",
  tagline: "AI-driven marketing leader. High energy. Higher standards.",
  summary:
    "MBA Finance professional with 3+ years building marketing systems for B2B and B2C brands. Led teams of 153, trained 1,500+ people, and shipped AI-powered creative workflows that cut campaign turnaround by 40%. Equal parts spreadsheet and stage — finance rigor with creative momentum.",
  highlights: [
    { k: "153+", v: "Team members led" },
    { k: "1,500+", v: "People trained" },
    { k: "40%", v: "Faster ad turnaround" },
    { k: "3+ yrs", v: "Marketing leadership" },
  ],
  experience: [
    {
      role: "Marketing Lead — Wellwith (Seabuckthorn brand)",
      period: "2023 — Present",
      bullets: [
        "Built end-to-end brand strategy: positioning, reels, AI creative, community.",
        "Grew an engaged Instagram health community around seabuckthorn education.",
        "Owned content calendar, CapCut reels production, and AI-assisted ad creative.",
      ],
    },
    {
      role: "B2B Marketing Strategist",
      period: "2022 — 2023",
      bullets: [
        "Designed a funnel-first B2B playbook that consistently exceeded quarterly KPIs.",
        "Cut team onboarding time by 25% via a documented operational excellence framework.",
        "Built CRM-driven dashboards surfacing healthcare data trends for client teams.",
      ],
    },
    {
      role: "Training & Leadership Hub",
      period: "2021 — 2022",
      bullets: [
        "Designed and delivered training seminars to 1,500+ participants.",
        "Topics: business development, operational excellence, public speaking.",
        "Led a 153-member team across marketing operations and outreach.",
      ],
    },
  ],
  skills: [
    {
      group: "Marketing Strategy",
      items: [
        "B2B & B2C funnels",
        "Brand positioning",
        "Campaign planning",
        "Growth playbooks",
      ],
    },
    {
      group: "AI-Powered Content",
      items: [
        "Generative ad creative",
        "Visual ideation",
        "Content automation",
        "Prompt systems",
      ],
    },
    {
      group: "Video & Reels",
      items: [
        "CapCut editing",
        "Short-form storytelling",
        "Hooks & captions",
        "Brand reels",
      ],
    },
    {
      group: "Sales & Growth",
      items: [
        "KPI ownership",
        "Onboarding playbooks",
        "Client comms",
        "Pipeline strategy",
      ],
    },
    {
      group: "Leadership",
      items: [
        "153+ team",
        "1,500+ trained",
        "Public speaking",
        "Training design",
      ],
    },
  ],
  education: [
    {
      degree: "MBA — Finance",
      school: "Master of Business Administration",
      period: "Graduated",
    },
  ],
  tools: ["CapCut", "AI generative tools", "CRM & Analytics"],
  links: [
    { label: "Portfolio", href: "https://vandanas-creative-toolkit.lovable.app" },
    {
      label: "Wellwith Instagram",
      href: "https://www.instagram.com/seabuckthorn.wellwith/",
    },
    {
      label: "YouTube — @indianbhaktiaisongs",
      href: "https://www.youtube.com/@indianbhaktiaisongs",
    },
  ],
};

export type ResumeData = typeof resumeData;
