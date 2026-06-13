import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Video } from "lucide-react";

const floatingStats = [
  { icon: TrendingUp, label: "Avg. reach growth", value: "4.2×", color: "var(--brand-teal)" },
  { icon: Video, label: "Videos generated", value: "12K+", color: "var(--brand-indigo)" },
  { icon: Users, label: "Active creators", value: "3,400+", color: "var(--brand-coral)" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,110,247,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 60%, rgba(61,217,179,0.10) 0%, transparent 60%)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,110,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,110,247,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-6"
              style={{
                background: "rgba(79,110,247,0.08)",
                borderColor: "rgba(79,110,247,0.2)",
                color: "var(--brand-indigo)",
                fontFamily: "var(--font-body)",
              }}
            >
              <Sparkles size={14} />
              AI-Powered Personal Branding
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                color: "var(--brand-slate)",
                lineHeight: 1.15,
              }}
            >
              Turn your expertise into content that{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--brand-indigo) 0%, var(--brand-teal) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                builds your brand
              </span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
            >
              ShareOn transforms documents, notes, and ideas into polished videos, social posts,
              and full content calendars — then publishes them everywhere, automatically. No studio.
              No agency. Just your voice, amplified.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo("#cta")}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, var(--brand-indigo) 0%, #6C8BF9 100%)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 8px 24px rgba(79,110,247,0.35)",
                }}
              >
                Get Started Free
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("#how-it-works")}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold border-2 transition-all hover:bg-secondary active:scale-95"
                style={{
                  borderColor: "rgba(79,110,247,0.25)",
                  color: "var(--brand-indigo)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Play size={14} className="fill-current" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-sm"
              style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
            >
              Free forever plan · No credit card required · Cancel anytime
            </motion.p>
          </div>

          {/* Right — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <DashboardMockup />

            {/* Floating stat cards */}
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
                className={`absolute bg-card rounded-2xl shadow-lg border border-border px-4 py-3 flex items-center gap-3 ${
                  i === 0
                    ? "-left-4 top-12"
                    : i === 1
                    ? "-right-4 top-1/3"
                    : "-left-2 bottom-16"
                }`}
                style={{ minWidth: 160 }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${stat.color}18` }}
                >
                  <stat.icon size={16} style={{ color: stat.color }} />
                </div>
                <div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="font-bold leading-none mt-0.5"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--brand-slate)",
                      fontSize: "1.125rem",
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div
      className="relative rounded-3xl overflow-hidden border shadow-2xl"
      style={{
        background: "var(--card)",
        borderColor: "rgba(79,110,247,0.15)",
        boxShadow: "0 24px 80px rgba(79,110,247,0.18)",
      }}
    >
      {/* Top bar */}
      <div
        className="px-5 py-3 flex items-center gap-2 border-b"
        style={{ background: "var(--brand-indigo)", borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/30" />
          <div className="w-3 h-3 rounded-full bg-white/30" />
          <div className="w-3 h-3 rounded-full bg-white/30" />
        </div>
        <div
          className="ml-3 text-xs text-white/70 px-3 py-1 rounded-md flex-1"
          style={{ background: "rgba(255,255,255,0.12)", maxWidth: 200 }}
        >
          app.shareon.ai/dashboard
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 space-y-4" style={{ background: "var(--background)" }}>
        {/* Welcome row */}
        <div className="flex items-center justify-between">
          <div>
            <div
              className="text-sm font-semibold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}
            >
              Good morning, Sarah 👋
            </div>
            <div className="text-xs" style={{ color: "var(--brand-slate-muted)", fontFamily: "var(--font-body)" }}>
              3 posts scheduled for today
            </div>
          </div>
          <div
            className="text-xs px-3 py-1.5 rounded-full font-medium text-white"
            style={{ background: "var(--brand-teal)", fontFamily: "var(--font-body)" }}
          >
            Creator Plan
          </div>
        </div>

        {/* Metric row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Posts This Week", value: "14", delta: "+28%" },
            { label: "Total Impressions", value: "84.2K", delta: "+61%" },
            { label: "New Followers", value: "312", delta: "+19%" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-3 bg-card border border-border"
            >
              <div className="text-xs mb-1" style={{ color: "var(--brand-slate-muted)", fontFamily: "var(--font-body)" }}>
                {m.label}
              </div>
              <div
                className="font-bold"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--brand-slate)" }}
              >
                {m.value}
              </div>
              <div className="text-xs font-medium mt-0.5" style={{ color: "var(--brand-teal)" }}>
                {m.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Content calendar mini */}
        <div className="rounded-2xl p-4 bg-card border border-border space-y-2.5">
          <div className="text-xs font-semibold" style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}>
            Upcoming Content
          </div>
          {[
            { platform: "LI", color: "var(--brand-indigo)", title: "5 AI Tools I Use Daily", time: "Today, 9:00 AM" },
            { platform: "YT", color: "#FF0000", title: "My Content Creation System", time: "Wed, 2:00 PM" },
            { platform: "TK", color: "#000000", title: "Quick Win for Coaches", time: "Thu, 6:00 PM" },
          ].map((p) => (
            <div key={p.title} className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-lg text-white text-xs font-bold flex items-center justify-center shrink-0"
                style={{ background: p.color, fontFamily: "var(--font-heading)", fontSize: "0.6rem" }}
              >
                {p.platform}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-xs font-medium truncate"
                  style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate)" }}
                >
                  {p.title}
                </div>
                <div className="text-xs" style={{ color: "var(--brand-slate-muted)" }}>
                  {p.time}
                </div>
              </div>
              <div
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "rgba(61,217,179,0.12)", color: "var(--brand-teal)" }}
              >
                Ready
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
