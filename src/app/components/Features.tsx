import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  BookOpen,
  Mic2,
  UserSquare2,
  FileVideo,
  CalendarDays,
  Globe2,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description:
      "Centralise all your expertise — PDFs, notes, blog posts, transcripts — into a searchable knowledge library that powers every piece of content.",
    color: "var(--brand-indigo)",
    bg: "rgba(79,110,247,0.08)",
    tag: "Core",
  },
  {
    icon: Mic2,
    title: "Brand Voice AI",
    description:
      "Train a bespoke AI model on your writing style. It learns your vocabulary, cadence, and perspective so every post sounds unmistakably you.",
    color: "var(--brand-teal)",
    bg: "rgba(61,217,179,0.08)",
    tag: "AI",
  },
  {
    icon: UserSquare2,
    title: "Avatar Studio",
    description:
      "Create a photorealistic AI video avatar that presents your content. Lip-synced, studio-quality video without a camera or microphone.",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.08)",
    tag: "AI",
  },
  {
    icon: FileVideo,
    title: "Document-to-Video",
    description:
      "Upload any document and watch it become a polished explainer video complete with voiceover, B-roll, captions, and music — automatically.",
    color: "#FB923C",
    bg: "rgba(251,146,60,0.08)",
    tag: "Popular",
  },
  {
    icon: CalendarDays,
    title: "Content Calendar",
    description:
      "A 30-day content plan, generated in seconds. Balanced across formats and platforms, ready to review, tweak, and schedule in one place.",
    color: "var(--brand-coral)",
    bg: "rgba(255,137,102,0.08)",
    tag: "Core",
  },
  {
    icon: Globe2,
    title: "Multi-Platform Publishing",
    description:
      "Connect LinkedIn, YouTube, TikTok, Instagram, X, and Facebook. Schedule once, publish everywhere — format-adapted for each platform.",
    color: "var(--brand-indigo)",
    bg: "rgba(79,110,247,0.08)",
    tag: "Core",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track reach, engagement, follower growth, and top-performing content across all channels in real time. Know what works and double down.",
    color: "var(--brand-teal)",
    bg: "rgba(61,217,179,0.08)",
    tag: "Insights",
  },
];

const tagColor: Record<string, string> = {
  Core: "rgba(79,110,247,0.1)",
  AI: "rgba(61,217,179,0.1)",
  Popular: "rgba(255,137,102,0.12)",
  Insights: "rgba(167,139,250,0.1)",
};
const tagText: Record<string, string> = {
  Core: "var(--brand-indigo)",
  AI: "var(--brand-teal)",
  Popular: "var(--brand-coral)",
  Insights: "#A78BFA",
};

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: feature.bg }}
        >
          <feature.icon size={22} style={{ color: feature.color }} />
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: tagColor[feature.tag], color: tagText[feature.tag], fontFamily: "var(--font-body)" }}
        >
          {feature.tag}
        </span>
      </div>

      <h3
        className="mb-2"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: "1.0625rem",
          color: "var(--brand-slate)",
        }}
      >
        {feature.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
      >
        {feature.description}
      </p>

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
      />
    </motion.div>
  );
}

export function Features() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      id="features"
      className="py-24 lg:py-32"
      style={{ background: "var(--muted)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(79,110,247,0.08)",
              color: "var(--brand-indigo)",
              fontFamily: "var(--font-body)",
              border: "1px solid rgba(79,110,247,0.18)",
            }}
          >
            Everything You Need
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--brand-slate)",
            }}
          >
            A complete personal branding engine
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)", lineHeight: 1.7 }}
          >
            Every tool you need to build authority, grow your audience, and convert followers into
            clients — in one seamlessly integrated platform.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
