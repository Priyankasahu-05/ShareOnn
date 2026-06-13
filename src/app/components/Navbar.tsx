import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { SignInModal } from "./SignInModal";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 group"
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
                style={{ background: "linear-gradient(135deg, #4F6EF7, #6C8BF9)" }}
              >
                <Zap size={16} className="text-white fill-current" />
              </div>
              <span
                className="tracking-tight"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.125rem", color: "var(--brand-slate)" }}
              >
                Share<span style={{ color: "var(--brand-indigo)" }}>On</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium transition-colors hover:opacity-80"
                  style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-2">
              {/* Dark mode toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  style={{
                    background: isDark ? "rgba(108,139,249,0.15)" : "rgba(79,110,247,0.08)",
                    color: "var(--brand-indigo)",
                    border: "1px solid var(--border)",
                  }}
                  aria-label="Toggle dark mode"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isDark ? "sun" : "moon"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="flex"
                    >
                      {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    </motion.span>
                  </AnimatePresence>
                </button>
              )}

              <button
                onClick={() => setSignInOpen(true)}
                className="text-sm font-medium px-4 py-2 rounded-xl transition-all hover:bg-muted"
                style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
              >
                Sign In
              </button>
              <button
                onClick={() => scrollTo("#cta")}
                className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #4F6EF7, #6C8BF9)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 14px rgba(79,110,247,0.35)",
                }}
              >
                Get Started Free
              </button>
            </div>

            {/* Mobile right side */}
            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: isDark ? "rgba(108,139,249,0.15)" : "rgba(79,110,247,0.08)",
                    color: "var(--brand-indigo)",
                  }}
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}
              <button
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                style={{ color: "var(--brand-slate)" }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden backdrop-blur-md border-t border-border overflow-hidden"
              style={{ background: "var(--card)" }}
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-sm font-medium transition-colors py-1 hover:opacity-80"
                    style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate)" }}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-border flex flex-col gap-3">
                  <button
                    onClick={() => { setMobileOpen(false); setSignInOpen(true); }}
                    className="text-sm font-medium text-left"
                    style={{ color: "var(--brand-slate-muted)" }}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => scrollTo("#cta")}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-white text-center"
                    style={{ background: "linear-gradient(135deg, #4F6EF7, #6C8BF9)" }}
                  >
                    Get Started Free
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  );
}
