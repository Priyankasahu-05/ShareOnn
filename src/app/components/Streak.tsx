import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useTheme } from "next-themes";
import { Flame, Trophy, Calendar, TrendingUp, Zap } from "lucide-react";

// Generate 10 weeks × 7 days of mock streak data
function generateStreakGrid() {
  const cells: { published: boolean; count: number; date: string }[] = [];
  const today = new Date(2026, 5, 13); // June 13 2026
  for (let i = 69; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const rand = Math.random();
    const published = rand > 0.28;
    const count = published ? Math.floor(rand * 5) + 1 : 0;
    cells.push({
      published,
      count,
      date: d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    });
  }
  return cells;
}

const streakGrid = generateStreakGrid();

// Intensity based on post count
function cellColor(count: number, isDark: boolean): string {
  if (count === 0) return isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  if (count === 1) return "rgba(61,217,179,0.25)";
  if (count === 2) return "rgba(61,217,179,0.5)";
  if (count === 3) return "rgba(61,217,179,0.72)";
  return "var(--brand-teal)";
}

const milestones = [
  { days: 7, emoji: "🌱", label: "First Week", desc: "7-day publishing streak" },
  { days: 21, emoji: "🔥", label: "On Fire", desc: "3 weeks straight" },
  { days: 50, emoji: "⚡", label: "Lightning Rod", desc: "50-day milestone" },
  { days: 100, emoji: "🏆", label: "Century Club", desc: "100 days of consistency" },
];

const leaderboard = [
  { name: "Marcus C.", days: 127, avatar: "MC", bg: "linear-gradient(135deg,#4F6EF7,#6C8BF9)" },
  { name: "Priya N.", days: 94, avatar: "PN", bg: "linear-gradient(135deg,#3DD9B3,#2CB89A)" },
  { name: "Jordan E.", days: 88, avatar: "JE", bg: "linear-gradient(135deg,#A78BFA,#7C5CF8)" },
  { name: "Sofia M.", days: 61, avatar: "SM", bg: "linear-gradient(135deg,#FF8966,#FF6B45)" },
];

export function Streak() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState<null | { count: number; date: string }>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const currentStreak = 32;
  const longestStreak = 47;
  const totalPosts = streakGrid.filter((c) => c.published).length;

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "var(--muted)" }}
    >
      {/* Subtle background flame glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(255,137,102,0.08) 0%, transparent 70%)",
        }}
      />

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
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(255,137,102,0.10)",
              color: "var(--brand-coral)",
              fontFamily: "var(--font-body)",
              border: "1px solid rgba(255,137,102,0.2)",
            }}
          >
            <Flame size={13} />
            Publishing Streak
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
            Consistency is your
            <br />
            <span style={{ color: "var(--brand-coral)" }}>biggest competitive advantage</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)", lineHeight: 1.7 }}
          >
            ShareOn gamifies your publishing habit with streaks, milestones, and a community leaderboard —
            because showing up every day is what actually builds an audience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Left — streak heatmap */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-3xl p-6 border border-border"
            style={{ background: "var(--card)" }}
          >
            {/* Streak stats row */}
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,137,102,0.12)" }}
                >
                  <Flame size={22} style={{ color: "var(--brand-coral)" }} />
                </div>
                <div>
                  <div
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.75rem", color: "var(--brand-coral)", lineHeight: 1 }}
                  >
                    {currentStreak}
                  </div>
                  <div className="text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}>
                    day streak 🔥
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(79,110,247,0.08)" }}
                >
                  <Trophy size={20} style={{ color: "var(--brand-indigo)" }} />
                </div>
                <div>
                  <div
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.75rem", color: "var(--brand-slate)", lineHeight: 1 }}
                  >
                    {longestStreak}
                  </div>
                  <div className="text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}>
                    longest streak
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(61,217,179,0.10)" }}
                >
                  <TrendingUp size={20} style={{ color: "var(--brand-teal)" }} />
                </div>
                <div>
                  <div
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.75rem", color: "var(--brand-slate)", lineHeight: 1 }}
                  >
                    {totalPosts}
                  </div>
                  <div className="text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}>
                    posts this period
                  </div>
                </div>
              </div>
            </div>

            {/* Heatmap grid */}
            <div className="mb-3">
              <div
                className="text-xs font-semibold mb-3"
                style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
              >
                Last 10 weeks of publishing activity
              </div>
              <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(10, 1fr)" }}>
                {Array.from({ length: 10 }).map((_, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1.5">
                    {streakGrid.slice(weekIdx * 7, weekIdx * 7 + 7).map((cell, dayIdx) => (
                      <div
                        key={dayIdx}
                        className="relative w-full aspect-square rounded-md cursor-pointer transition-transform hover:scale-110"
                        style={{ background: cellColor(cell.count, isDark) }}
                        onMouseEnter={() => setHovered(cell)}
                        onMouseLeave={() => setHovered(null)}
                        title={`${cell.date}: ${cell.count} post${cell.count !== 1 ? "s" : ""}`}
                      >
                        {cell.count >= 4 && (
                          <div className="absolute inset-0 flex items-center justify-center text-white" style={{ fontSize: "0.45rem" }}>
                            🔥
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}>
                  Less
                </span>
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <div
                    key={lvl}
                    className="w-3.5 h-3.5 rounded-sm"
                    style={{ background: cellColor(lvl, isDark) }}
                  />
                ))}
                <span className="text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}>
                  More
                </span>
                {hovered && (
                  <span
                    className="ml-auto text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                  >
                    {hovered.date}: <strong style={{ color: "var(--brand-slate)" }}>{hovered.count} post{hovered.count !== 1 ? "s" : ""}</strong>
                  </span>
                )}
              </div>
            </div>

            {/* Milestone badges */}
            <div
              className="mt-5 pt-5 border-t border-border"
            >
              <div
                className="text-xs font-semibold mb-3"
                style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
              >
                Milestones
              </div>
              <div className="flex flex-wrap gap-2">
                {milestones.map((m) => {
                  const unlocked = currentStreak >= m.days || longestStreak >= m.days;
                  return (
                    <div
                      key={m.days}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border transition-all"
                      style={{
                        background: unlocked ? "rgba(61,217,179,0.08)" : "var(--muted)",
                        borderColor: unlocked ? "rgba(61,217,179,0.25)" : "var(--border)",
                        opacity: unlocked ? 1 : 0.5,
                      }}
                    >
                      <span style={{ fontSize: "1rem" }}>{m.emoji}</span>
                      <div>
                        <div
                          className="text-xs font-semibold leading-none"
                          style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}
                        >
                          {m.label}
                        </div>
                        <div
                          className="text-xs leading-none mt-0.5"
                          style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                        >
                          {m.desc}
                        </div>
                      </div>
                      {unlocked && (
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center ml-1"
                          style={{ background: "var(--brand-teal)" }}
                        >
                          <span style={{ fontSize: "0.55rem", color: "white" }}>✓</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — leaderboard + nudge */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Leaderboard */}
            <div
              className="rounded-3xl p-6 border border-border"
              style={{ background: "var(--card)" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Trophy size={16} style={{ color: "var(--brand-indigo)" }} />
                <span
                  className="font-semibold text-sm"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}
                >
                  Top Streakers This Month
                </span>
              </div>

              <div className="space-y-3">
                {leaderboard.map((user, idx) => (
                  <div key={user.name} className="flex items-center gap-3">
                    <span
                      className="w-5 text-center text-xs font-bold shrink-0"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: idx === 0 ? "#FBBF24" : idx === 1 ? "#94A3B8" : idx === 2 ? "#F97316" : "var(--brand-slate-muted)",
                      }}
                    >
                      {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `#${idx + 1}`}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: user.bg, fontFamily: "var(--font-heading)" }}
                    >
                      {user.avatar}
                    </div>
                    <span
                      className="flex-1 text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate)" }}
                    >
                      {user.name}
                    </span>
                    <div className="flex items-center gap-1">
                      <Flame size={12} style={{ color: "var(--brand-coral)" }} />
                      <span
                        className="text-sm font-semibold"
                        style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}
                      >
                        {user.days}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily nudge card */}
            <div
              className="rounded-3xl p-6 border border-border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,137,102,0.1) 0%, rgba(255,137,102,0.04) 100%)",
                borderColor: "rgba(255,137,102,0.2)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,137,102,0.15)" }}
                >
                  <Zap size={18} style={{ color: "var(--brand-coral)" }} />
                </div>
                <div>
                  <span
                    className="font-semibold text-sm block mb-0.5"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}
                  >
                    Today's nudge 👀
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                  >
                    1 post = 32% of audience growth in top performers
                  </span>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
              >
                You're on a <strong style={{ color: "var(--brand-coral)" }}>32-day streak</strong>. Publishing today keeps your momentum — and ShareOn has 3 ready-to-go posts waiting.
              </p>
              <button
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "var(--brand-coral)",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 14px rgba(255,137,102,0.28)",
                }}
              >
                Publish a post now →
              </button>
            </div>

            {/* Calendar icon hint */}
            <div
              className="rounded-2xl px-4 py-3 border border-border flex items-center gap-3"
              style={{ background: "var(--card)" }}
            >
              <Calendar size={16} style={{ color: "var(--brand-teal)" }} />
              <p
                className="text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
              >
                ShareOn reminds you before your streak breaks — via email, push, or Slack.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
