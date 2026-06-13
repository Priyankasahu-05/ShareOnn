import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const perks = [
  "Free forever plan — no credit card needed",
  "Full access to Brand Voice AI on day one",
  "Cancel anytime, data exports included",
];

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #4F6EF7 0%, #6C8BF9 50%, #3DD9B3 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <h2
            className="mb-5 text-white"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              lineHeight: 1.15,
            }}
          >
            Your expertise is worth sharing.
            <br />
            Let's make it impossible to ignore.
          </h2>

          <p
            className="mb-8 text-lg"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
            }}
          >
            Join 3,400+ creators, coaches, and founders who are publishing smarter —
            not harder — with ShareOn.
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="Enter your work email"
                aria-label="Email address"
                className="flex-1 px-5 py-3.5 rounded-2xl text-sm outline-none border-0 focus:ring-2 transition-all"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  color: "var(--brand-slate)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  ...(error ? { ring: "2px solid #FF8966" } : {}),
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-70 whitespace-nowrap"
                style={{
                  background: "var(--brand-coral)",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 16px rgba(255,137,102,0.35)",
                }}
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Get Started Free
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl max-w-md mx-auto mb-6"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <CheckCircle2 size={20} className="text-white" />
              <span
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                You're on the list! Check your inbox to confirm.
              </span>
            </motion.div>
          )}

          {error && (
            <p
              className="text-sm mb-4 -mt-3"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)" }}
            >
              {error}
            </p>
          )}

          {/* Perks */}
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            {perks.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
              >
                <CheckCircle2 size={14} className="text-white/60 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
