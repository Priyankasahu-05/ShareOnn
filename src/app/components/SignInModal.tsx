import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, Eye, EyeOff, Zap, Loader2, ArrowRight } from "lucide-react";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
}

export function SignInModal({ open, onClose }: SignInModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setDone(true);
  };

  const reset = () => {
    setEmail(""); setPassword(""); setError(""); setDone(false); setLoading(false);
  };

  const handleClose = () => { reset(); onClose(); };
  const switchMode = () => { reset(); setMode((m) => m === "signin" ? "signup" : "signin"); };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="w-full max-w-md rounded-3xl shadow-2xl pointer-events-auto overflow-hidden"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative px-8 pt-8 pb-6 text-center">
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-xl flex items-center justify-center transition-colors hover:bg-muted"
                  style={{ color: "var(--brand-slate-muted)" }}
                >
                  <X size={16} />
                </button>

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #4F6EF7, #6C8BF9)", boxShadow: "0 6px 20px rgba(79,110,247,0.3)" }}
                >
                  <Zap size={20} className="text-white fill-current" />
                </div>

                <h2
                  className="mb-1"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.375rem", color: "var(--brand-slate)" }}
                >
                  {mode === "signin" ? "Welcome back 👋" : "Join ShareOn 🚀"}
                </h2>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                >
                  {mode === "signin"
                    ? "Sign in to continue building your brand"
                    : "Start publishing smarter in minutes"}
                </p>
              </div>

              {/* Body */}
              <div className="px-8 pb-8">
                {done ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "rgba(61,217,179,0.12)" }}
                    >
                      <span style={{ fontSize: "2rem" }}>✅</span>
                    </div>
                    <h3
                      className="mb-2"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: "var(--brand-slate)" }}
                    >
                      {mode === "signin" ? "You're in!" : "Account created!"}
                    </h3>
                    <p
                      className="text-sm mb-6"
                      style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                    >
                      {mode === "signin"
                        ? "Redirecting you to your dashboard…"
                        : "Check your inbox to verify your email, then we'll get you started."}
                    </p>
                    <button
                      onClick={handleClose}
                      className="text-sm font-medium"
                      style={{ color: "var(--brand-indigo)", fontFamily: "var(--font-body)" }}
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate)" }}
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <Mail
                          size={15}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: "var(--brand-slate-muted)" }}
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setError(""); }}
                          placeholder="you@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            background: "var(--input-background)",
                            color: "var(--brand-slate)",
                            fontFamily: "var(--font-body)",
                            border: "1.5px solid var(--border)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate)" }}
                      >
                        Password
                      </label>
                      <div className="relative">
                        <Lock
                          size={15}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: "var(--brand-slate-muted)" }}
                        />
                        <input
                          type={showPass ? "text" : "password"}
                          value={password}
                          onChange={(e) => { setPassword(e.target.value); setError(""); }}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-11 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            background: "var(--input-background)",
                            color: "var(--brand-slate)",
                            fontFamily: "var(--font-body)",
                            border: "1.5px solid var(--border)",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass((v) => !v)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2"
                          style={{ color: "var(--brand-slate-muted)" }}
                        >
                          {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                    </div>

                    {mode === "signin" && (
                      <div className="text-right">
                        <button
                          type="button"
                          className="text-xs font-medium hover:underline"
                          style={{ color: "var(--brand-indigo)", fontFamily: "var(--font-body)" }}
                        >
                          Forgot password?
                        </button>
                      </div>
                    )}

                    {error && (
                      <p
                        className="text-xs px-3 py-2 rounded-lg"
                        style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", fontFamily: "var(--font-body)" }}
                      >
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-70"
                      style={{
                        background: "linear-gradient(135deg, #4F6EF7, #6C8BF9)",
                        fontFamily: "var(--font-body)",
                        boxShadow: "0 6px 20px rgba(79,110,247,0.3)",
                      }}
                    >
                      {loading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          {mode === "signin" ? "Sign In" : "Create Account"}
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>

                    <p
                      className="text-center text-xs"
                      style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                    >
                      {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
                      <button
                        type="button"
                        onClick={switchMode}
                        className="font-semibold hover:underline"
                        style={{ color: "var(--brand-indigo)" }}
                      >
                        {mode === "signin" ? "Sign up free" : "Sign in"}
                      </button>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
