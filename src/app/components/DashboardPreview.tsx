import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TrendingUp, Users, Eye, Heart, ArrowUpRight } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { week: "W1", impressions: 4200, followers: 120 },
  { week: "W2", impressions: 6800, followers: 195 },
  { week: "W3", impressions: 5900, followers: 230 },
  { week: "W4", impressions: 9100, followers: 312 },
  { week: "W5", impressions: 11400, followers: 405 },
  { week: "W6", impressions: 14200, followers: 518 },
  { week: "W7", impressions: 18600, followers: 640 },
  { week: "W8", impressions: 22800, followers: 810 },
];

const topPosts = [
  { platform: "LI", color: "#0A66C2", title: "5 AI tools I use every day as a coach", impressions: "18.4K", engagement: "9.2%" },
  { platform: "YT", color: "#FF0000", title: "My Content Creation System (Full Breakdown)", views: "12.1K", engagement: "7.8%" },
  { platform: "TK", color: "#010101", title: "The #1 mistake new coaches make", views: "84.2K", engagement: "14.3%" },
];

const metrics = [
  { icon: Eye, label: "Total Impressions", value: "84.2K", delta: "+61%", color: "var(--brand-indigo)" },
  { icon: Users, label: "New Followers", value: "+810", delta: "+19%", color: "var(--brand-teal)" },
  { icon: Heart, label: "Avg. Engagement", value: "8.7%", delta: "+2.1%", color: "var(--brand-coral)" },
  { icon: TrendingUp, label: "Reach Growth", value: "4.2×", delta: "vs last month", color: "#A78BFA" },
];

export function DashboardPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--muted)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
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
            Analytics
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
            Watch your brand grow in real time
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)", lineHeight: 1.7 }}
          >
            A unified analytics dashboard that tracks every metric across every platform, so you always know what's working.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="rounded-3xl overflow-hidden border shadow-2xl"
          style={{
            background: "var(--card)",
            borderColor: "rgba(79,110,247,0.12)",
            boxShadow: "0 24px 80px rgba(79,110,247,0.14)",
          }}
        >
          {/* Top bar */}
          <div
            className="px-6 py-4 flex items-center justify-between border-b border-border"
            style={{ background: "var(--brand-indigo)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
              </div>
              <span
                className="text-white/80 text-sm"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                ShareOn Analytics — Last 8 Weeks
              </span>
            </div>
            <div
              className="text-xs px-3 py-1 rounded-full text-white font-medium"
              style={{ background: "rgba(255,255,255,0.15)", fontFamily: "var(--font-body)" }}
            >
              Live Data
            </div>
          </div>

          <div className="p-6 space-y-5">
            {/* Metrics row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl p-4 border border-border bg-background"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${m.color}15` }}
                    >
                      <m.icon size={15} style={{ color: m.color }} />
                    </div>
                    <span
                      className="text-xs font-semibold flex items-center gap-0.5"
                      style={{ color: "var(--brand-teal)", fontFamily: "var(--font-body)" }}
                    >
                      <ArrowUpRight size={10} />
                      {m.delta}
                    </span>
                  </div>
                  <div
                    className="leading-none mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: "var(--brand-slate)",
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart + top posts */}
            <div className="grid lg:grid-cols-5 gap-4">
              {/* Area chart */}
              <div className="lg:col-span-3 rounded-2xl p-5 border border-border bg-background">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}
                  >
                    Impressions Over Time
                  </span>
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1.5 text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}>
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: "var(--brand-indigo)" }} />
                      Impressions
                    </span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={160}>
                  <AreaChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                    <defs>
                      <linearGradient id="impressionGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F6EF7" stopOpacity={0.18} />
                        <stop offset="95%" stopColor="#4F6EF7" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#64748B", fontFamily: "var(--font-body)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#64748B", fontFamily: "var(--font-body)" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid rgba(79,110,247,0.15)",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontFamily: "var(--font-body)",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                      }}
                    />
                    <Area type="monotone" dataKey="impressions" stroke="#4F6EF7" strokeWidth={2} fill="url(#impressionGrad)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Top posts */}
              <div className="lg:col-span-2 rounded-2xl p-5 border border-border bg-background">
                <span
                  className="text-sm font-semibold block mb-4"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}
                >
                  Top Performing Posts
                </span>
                <div className="space-y-3">
                  {topPosts.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold shrink-0 mt-0.5"
                        style={{ background: p.color, fontSize: "0.6rem", fontFamily: "var(--font-heading)" }}
                      >
                        {p.platform}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs font-medium leading-tight mb-1 line-clamp-2"
                          style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate)" }}
                        >
                          {p.title}
                        </p>
                        <div className="flex gap-3">
                          <span className="text-xs" style={{ color: "var(--brand-slate-muted)", fontFamily: "var(--font-body)" }}>
                            {p.impressions || p.views}
                          </span>
                          <span className="text-xs font-medium" style={{ color: "var(--brand-teal)", fontFamily: "var(--font-body)" }}>
                            {p.engagement} eng.
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
