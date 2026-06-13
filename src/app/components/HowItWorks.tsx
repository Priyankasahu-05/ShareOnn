import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { Upload, Brain, Clapperboard, Share2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Knowledge",
    description:
      "Drop in PDFs, notes, slide decks, articles, or paste raw text. ShareOn ingests everything — your IP is the foundation.",
    color: "var(--brand-indigo)",
    bg: "rgba(79,110,247,0.08)",
  },
  {
    step: "02",
    icon: Brain,
    title: "Train Your Brand Voice AI",
    description:
      "Our AI learns your tone, vocabulary, and expertise from your content. Every output sounds unmistakably like you.",
    color: "var(--brand-teal)",
    bg: "rgba(61,217,179,0.08)",
  },
  {
    step: "03",
    icon: Clapperboard,
    title: "Generate Content & Videos",
    description:
      "One click produces LinkedIn posts, YouTube scripts, TikTok videos with your AI avatar, carousels, and full content calendars.",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.08)",
  },
  {
    step: "04",
    icon: Share2,
    title: "Publish Everywhere",
    description:
      "Schedule and auto-post across LinkedIn, YouTube, TikTok, Instagram, X, and more — from a single unified dashboard.",
    color: "var(--brand-coral)",
    bg: "rgba(255,137,102,0.08)",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex flex-col gap-4"
    >
      {/* Connector line (desktop) */}
      {index < steps.length - 1 && (
        <div
          className="hidden lg:block absolute top-10 left-full w-full h-px z-0"
          style={{
            background: "linear-gradient(90deg, rgba(79,110,247,0.25) 0%, transparent 100%)",
            width: "calc(100% - 80px)",
            left: "calc(50% + 40px)",
          }}
        />
      )}

      {/* Icon bubble */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
        style={{ background: step.bg, border: `1.5px solid ${step.color}25` }}
      >
        <step.icon size={26} style={{ color: step.color }} />
        <span
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm"
          style={{
            background: step.color,
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "0.6rem",
          }}
        >
          {step.step}
        </span>
      </div>

      <div>
        <h3
          className="mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "1.0625rem",
            color: "var(--brand-slate)",
          }}
        >
          {step.title}
        </h3>
        <p
          className="leading-relaxed text-sm"
          style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16 lg:mb-20"
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
            The Process
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
            From raw expertise to published content
            <br />
            <span style={{ color: "var(--brand-indigo)" }}>in four simple steps</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)", lineHeight: 1.7 }}
          >
            ShareOn handles the heavy lifting so you can focus on what you know best — your craft.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
