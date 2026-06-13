import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Does ShareOn really sound like me, or does it sound like generic AI?",
    a: "ShareOn's Brand Voice AI trains specifically on your writing — your blog posts, emails, documents, and notes. The more content you feed it, the more accurately it replicates your tone, vocabulary, and perspective. Most users say their audience can't tell the difference after 2–3 weeks of training.",
  },
  {
    q: "How does the AI avatar video feature work?",
    a: "Using HeyGen's technology, ShareOn creates a photorealistic digital twin from a short 2-minute recording of you. Once your avatar is set up, the platform generates lip-synced videos from any script — no camera, lights, or editing required. Videos are rendered in 1080p with optional captions and background music.",
  },
  {
    q: "What platforms can I publish to?",
    a: "ShareOn currently supports LinkedIn, YouTube, TikTok, Instagram (Reels & Posts), Facebook Pages, and X (Twitter). We're adding Pinterest, Threads, and Substack in Q3 2026. Each platform receives content automatically formatted to its optimal specifications.",
  },
  {
    q: "Is my content and data private?",
    a: "Absolutely. Your documents, voice model, and generated content are stored encrypted and are never used to train other users' models. You own everything you create. We're SOC 2 Type II compliant and GDPR-ready.",
  },
  {
    q: "How long does it take to get up and running?",
    a: "Most users publish their first piece of content within 20 minutes of signing up. Onboarding guides you through uploading your first document, training your voice model with a quick writing sample, and connecting your first publishing channel.",
  },
  {
    q: "Can I use ShareOn for client work or my agency?",
    a: "Yes — the Pro plan includes 5 team seats and white-label reports, making it ideal for coaches managing multiple clients or agencies managing brands. Enterprise plans with unlimited seats and custom branding are available on request.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You can export all your content, documents, and analytics at any time. After cancellation, your data is retained for 30 days so you can export it, then permanently deleted. We'll never hold your data hostage.",
  },
  {
    q: "Do you offer a refund if I'm not happy?",
    a: "All paid plans come with a 14-day free trial — you won't be charged until the trial ends. If you're not satisfied within the first 30 days of a paid plan, contact us for a full refund, no questions asked.",
  },
];

export function FAQ() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
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
            FAQ
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
            Questions you probably have
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)", lineHeight: 1.7 }}
          >
            Can't find what you need? Chat with our team — we're real humans who respond within a few hours.
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Accordion.Item
                value={`item-${i}`}
                className="rounded-2xl border border-border overflow-hidden bg-card"
              >
                <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left group hover:bg-muted/50 transition-colors">
                  <span
                    className="text-sm font-semibold pr-4 leading-relaxed"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    style={{ color: "var(--brand-indigo)" }}
                  />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_200ms_ease] data-[state=closed]:animate-[accordion-up_200ms_ease]">
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed border-t border-border pt-4"
                    style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
                  >
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
