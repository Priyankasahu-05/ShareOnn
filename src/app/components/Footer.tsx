import { useState } from "react";
import { Zap, Twitter, Linkedin, Youtube, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Creator Academy", href: "#" },
    { label: "Video Tutorials", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer
      className="pt-16 pb-8 border-t border-border"
      style={{ background: "var(--brand-slate)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                <Zap size={16} className="text-white fill-current" />
              </div>
              <span
                className="text-white"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.125rem" }}
              >
                Share<span style={{ color: "var(--brand-teal)" }}>On</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}
            >
              Turn your expertise into content that builds your brand — automatically. The AI personal branding agent for creators, coaches, and founders.
            </p>

            {/* Newsletter */}
            <p
              className="text-xs font-semibold mb-3 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}
            >
              Get weekly branding tips
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} style={{ color: "var(--brand-teal)" }} />
                <span className="text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--brand-teal)" }}>
                  You're subscribed!
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-xl text-sm outline-none border-0 focus:ring-1 focus:ring-primary"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                    minWidth: 0,
                  }}
                />
                <button
                  type="submit"
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity"
                  style={{ background: "var(--brand-indigo)" }}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} className="text-white" />
                </button>
              </form>
            )}
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}
              >
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => link.href.startsWith("#") ? scrollTo(link.href) : undefined}
                      className="text-sm hover:text-white transition-colors text-left"
                      style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p
            className="text-xs order-2 sm:order-1"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.35)" }}
          >
            © 2026 ShareOn, Inc. All rights reserved. ·{" "}
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>{" "}
            ·{" "}
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>{" "}
            ·{" "}
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {[
              { Icon: Twitter, label: "X (Twitter)" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
