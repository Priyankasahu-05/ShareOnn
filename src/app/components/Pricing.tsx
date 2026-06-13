import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, Zap, Rocket, Crown } from "lucide-react";

const plans = [
  {
    name: "Spark",
    icon: Zap,
    monthly: 0,
    annual: 0,
    tagline: "Everything you need to start building your personal brand.",
    highlight: false,
    color: "var(--brand-slate-muted)",
    features: [
      "5 AI-generated posts per month",
      "1 Knowledge Base document",
      "Brand Voice AI (basic)",
      "LinkedIn publishing",
      "Content calendar (7-day view)",
      "Email support",
    ],
    cta: "Start Free",
    ctaStyle: "outline",
  },
  {
    name: "Creator",
    icon: Rocket,
    monthly: 79,
    annual: 63,
    tagline: "The full engine for creators ready to grow their audience fast.",
    highlight: true,
    color: "var(--brand-indigo)",
    features: [
      "Unlimited AI-generated posts",
      "50 Knowledge Base documents",
      "Brand Voice AI (advanced)",
      "Avatar Studio (5 videos/mo)",
      "Document-to-Video (10/mo)",
      "All platforms publishing",
      "30-day content calendar",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Get Started",
    ctaStyle: "filled",
    badge: "Most Popular",
  },
  {
    name: "Pro",
    icon: Crown,
    monthly: 199,
    annual: 159,
    tagline: "Agency-grade power for coaches, consultants, and teams.",
    highlight: false,
    color: "#A78BFA",
    features: [
      "Everything in Creator",
      "Unlimited Knowledge Base",
      "Custom AI avatar (full clone)",
      "Unlimited Document-to-Video",
      "Team seats (up to 5)",
      "White-label reports",
      "API access",
      "Dedicated account manager",
      "Custom onboarding",
    ],
    cta: "Contact Sales",
    ctaStyle: "outline",
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32"
      style={{ background: "var(--muted)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
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
            Pricing
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
            Invest in your personal brand
          </h2>
          <p
            className="text-base max-w-lg mx-auto mb-8"
            style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)", lineHeight: 1.7 }}
          >
            Start free, scale when you're ready. No hidden fees — cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full border border-border bg-card shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
              style={{
                fontFamily: "var(--font-body)",
                background: !annual ? "var(--brand-indigo)" : "transparent",
                color: !annual ? "white" : "var(--brand-slate-muted)",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2"
              style={{
                fontFamily: "var(--font-body)",
                background: annual ? "var(--brand-indigo)" : "transparent",
                color: annual ? "white" : "var(--brand-slate-muted)",
              }}
            >
              Annual
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{
                  background: annual ? "rgba(255,255,255,0.25)" : "rgba(61,217,179,0.18)",
                  color: annual ? "white" : "var(--brand-teal)",
                }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards — equal height, horizontally centered */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl p-8 flex flex-col transition-all"
              style={
                plan.highlight
                  ? {
                      background: "linear-gradient(145deg, #4F6EF7 0%, #5F7EF8 50%, #3DD9B3 130%)",
                      boxShadow: "0 20px 60px rgba(79,110,247,0.38), 0 0 0 2px rgba(79,110,247,0.6)",
                      border: "2px solid rgba(255,255,255,0.15)",
                    }
                  : {
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }
              }
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{
                    background: "var(--brand-coral)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                    boxShadow: "0 4px 12px rgba(255,137,102,0.4)",
                  }}
                >
                  ✦ {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: plan.highlight ? "rgba(255,255,255,0.2)" : "rgba(79,110,247,0.08)",
                  }}
                >
                  <plan.icon size={20} style={{ color: plan.highlight ? "white" : plan.color }} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: plan.highlight ? "white" : "var(--brand-slate)",
                  }}
                >
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-end gap-1">
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: "2.75rem",
                      lineHeight: 1,
                      color: plan.highlight ? "white" : "var(--brand-slate)",
                    }}
                  >
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  {(annual ? plan.annual : plan.monthly) > 0 && (
                    <span
                      className="mb-1.5 text-sm"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: plan.highlight ? "rgba(255,255,255,0.7)" : "var(--brand-slate-muted)",
                      }}
                    >
                      /mo
                    </span>
                  )}
                </div>
                {annual && plan.monthly > 0 && (
                  <p
                    className="text-xs mt-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: plan.highlight ? "rgba(255,255,255,0.65)" : "var(--brand-slate-muted)",
                    }}
                  >
                    Billed ${plan.annual! * 12}/yr — save ${(plan.monthly - plan.annual!) * 12}
                  </p>
                )}
              </div>

              <p
                className="text-sm mb-6 leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: plan.highlight ? "rgba(255,255,255,0.82)" : "var(--brand-slate-muted)",
                }}
              >
                {plan.tagline}
              </p>

              {/* CTA button */}
              <button
                className="w-full py-3 rounded-2xl font-semibold text-sm mb-7 transition-all hover:opacity-90 active:scale-95"
                style={{
                  fontFamily: "var(--font-body)",
                  ...(plan.ctaStyle === "filled"
                    ? {
                        background: "white",
                        color: "var(--brand-indigo)",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.14)",
                      }
                    : plan.highlight
                    ? {
                        background: "rgba(255,255,255,0.16)",
                        color: "white",
                        border: "1.5px solid rgba(255,255,255,0.35)",
                      }
                    : {
                        background: "transparent",
                        color: "var(--brand-indigo)",
                        border: "1.5px solid rgba(79,110,247,0.3)",
                      }),
                }}
              >
                {plan.cta}
              </button>

              {/* Divider */}
              <div
                className="mb-5 h-px"
                style={{
                  background: plan.highlight
                    ? "rgba(255,255,255,0.18)"
                    : "var(--border)",
                }}
              />

              {/* Features — flex-1 pushes CTA to top and features to fill remaining */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                      style={{
                        background: plan.highlight
                          ? "rgba(255,255,255,0.22)"
                          : "rgba(61,217,179,0.15)",
                      }}
                    >
                      <Check
                        size={9}
                        strokeWidth={3.5}
                        style={{ color: plan.highlight ? "white" : "var(--brand-teal)" }}
                      />
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: plan.highlight ? "rgba(255,255,255,0.88)" : "var(--brand-slate)",
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p
          className="text-center text-sm mt-8"
          style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
        >
          All plans include a 14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
