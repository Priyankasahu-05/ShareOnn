import { useRef } from "react";
import { motion, useInView } from "motion/react";

const platforms = [
  {
    name: "LinkedIn",
    description: "Publish thought-leadership posts and long-form articles. Reach decision-makers where they spend their professional time.",
    logo: LinkedInLogo,
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.08)",
    users: "930M+ members",
  },
  {
    name: "YouTube",
    description: "Auto-upload polished AI-avatar videos and Shorts. Grow an evergreen video library without ever touching a camera.",
    logo: YouTubeLogo,
    color: "#FF0000",
    bg: "rgba(255,0,0,0.07)",
    users: "2.7B+ users",
  },
  {
    name: "TikTok",
    description: "Schedule short-form videos at scale. Reach the fastest-growing discovery platform while you sleep.",
    logo: TikTokLogo,
    color: "var(--brand-slate)",
    bg: "rgba(128,128,128,0.10)",
    users: "1B+ monthly actives",
  },
  {
    name: "Instagram",
    description: "Post Reels, carousels, and static images in one click. Format-adapted automatically for maximum engagement.",
    logo: InstagramLogo,
    color: "#E1306C",
    bg: "rgba(225,48,108,0.08)",
    users: "2B+ users",
  },
  {
    name: "Facebook",
    description: "Reach your existing audience and grow community pages — cross-posted effortlessly from your single ShareOn dashboard.",
    logo: FacebookLogo,
    color: "#1877F2",
    bg: "rgba(24,119,242,0.08)",
    users: "3B+ monthly actives",
  },
  {
    name: "X (Twitter)",
    description: "Schedule threads, single tweets, and media posts. Stay in the conversation without opening the app every hour.",
    logo: XLogo,
    color: "var(--brand-slate)",
    bg: "rgba(128,128,128,0.10)",
    users: "550M+ users",
  },
];

export function Integrations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="integrations" className="py-24 lg:py-32 overflow-hidden">
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
            Publishing Channels
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
            One dashboard.
            <br />
            Every platform where your audience lives.
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)", lineHeight: 1.7 }}
          >
            Connect your channels once. ShareOn handles the rest — formatting, scheduling, and publishing your content exactly right on every platform.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex gap-4"
            >
              {/* Logo */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                style={{ background: p.bg }}
              >
                <p.logo />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="font-semibold"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "0.9375rem", color: "var(--brand-slate)" }}
                  >
                    {p.name}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full shrink-0 ml-2"
                    style={{
                      background: p.bg,
                      color: p.color,
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      opacity: 0.9,
                    }}
                  >
                    {p.users}
                  </span>
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                >
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom connector text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm mt-10"
          style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
        >
          Pinterest, Threads, and Substack integrations coming Q3 2026 ·
          <button
            className="ml-1 font-medium hover:underline"
            style={{ color: "var(--brand-indigo)" }}
          >
            Get notified when they launch →
          </button>
        </motion.p>
      </div>
    </section>
  );
}

// Platform SVG logos
function LinkedInLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2" />
    </svg>
  );
}

function YouTubeLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000" />
    </svg>
  );
}

function TikTokLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--brand-slate)" }}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.09a8.16 8.16 0 0 0 4.77 1.52V7.17a4.85 4.85 0 0 1-1-.48z" />
    </svg>
  );
}

function InstagramLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FD1D1D" />
          <stop offset="50%" stopColor="#E1306C" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#ig-grad)" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" strokeWidth="2" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)" />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
    </svg>
  );
}

function XLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--brand-slate)" }}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
