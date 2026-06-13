import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Executive Coach",
    company: "Peak Performance Co.",
    avatar: "MC",
    avatarBg: "linear-gradient(135deg, #4F6EF7, #6C8BF9)",
    quote:
      "ShareOn gave me back 12 hours a week. I upload my session notes on Sunday and by Monday morning I have a full week of LinkedIn content, two YouTube scripts, and a newsletter draft — all in my exact voice. My followers genuinely can't tell the difference.",
    metric: "12 hrs saved weekly",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Founder & Solopreneur",
    company: "GrowthStack Agency",
    avatar: "PN",
    avatarBg: "linear-gradient(135deg, #3DD9B3, #2CB89A)",
    quote:
      "We were spending $4,000/month on a content agency. ShareOn does more — faster — for a fraction of the cost. The document-to-video feature alone replaced our entire video production workflow. Our LinkedIn reach is up 4× in 60 days.",
    metric: "4× LinkedIn reach in 60 days",
    stars: 5,
  },
  {
    name: "Jordan Ellis",
    role: "Online Educator",
    company: "Financial Freedom Academy",
    avatar: "JE",
    avatarBg: "linear-gradient(135deg, #A78BFA, #7C5CF8)",
    quote:
      "The AI avatar feature is genuinely mind-blowing. I recorded a 10-minute training, uploaded it, and ShareOn repurposed it into 14 short-form clips, 8 carousels, and a 5-email nurture sequence. My course waitlist grew by 800 people in three weeks.",
    metric: "+800 waitlist signups in 3 weeks",
    stars: 5,
  },
  {
    name: "Sofia Martínez",
    role: "Brand Strategist",
    company: "Freelance Consultant",
    avatar: "SM",
    avatarBg: "linear-gradient(135deg, #FF8966, #FF6B45)",
    quote:
      "As a one-person shop competing with big agencies, ShareOn is my secret weapon. I can now offer clients a personal brand package that includes video, social, and email — at a price point that wins every time. It's changed my business model.",
    metric: "3× client revenue in 4 months",
    stars: 5,
  },
  {
    name: "David Osei",
    role: "Tech Founder",
    company: "BuildFast Labs",
    avatar: "DO",
    avatarBg: "linear-gradient(135deg, #FB923C, #F97316)",
    quote:
      "I'm terrible at consistent posting. ShareOn solved that completely. It takes my random Slack voice memos and engineering notes and turns them into thought-leadership content I'm proud to publish. Investor DMs have tripled since I started.",
    metric: "3× inbound investor interest",
    stars: 5,
  },
  {
    name: "Amanda Foster",
    role: "Health & Wellness Coach",
    company: "Thrive With Amanda",
    avatar: "AF",
    avatarBg: "linear-gradient(135deg, #6C8BF9, #4F6EF7)",
    quote:
      "The content calendar feature changed everything for me. I sit down once a month, review my programs and goals with ShareOn, and I get a full 30-day plan ready to go. My audience grew from 2K to 18K in five months.",
    metric: "2K → 18K followers in 5 months",
    stars: 5,
  },
];

function TestimonialCard({ t, index }: { t: (typeof testimonials)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} size={14} className="fill-current" style={{ color: "#FBBF24" }} />
        ))}
      </div>

      {/* Quote */}
      <div className="relative flex-1">
        <Quote
          size={20}
          className="absolute -top-1 -left-1 opacity-10"
          style={{ color: "var(--brand-indigo)" }}
        />
        <p
          className="text-sm leading-relaxed pl-1"
          style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate)" }}
        >
          "{t.quote}"
        </p>
      </div>

      {/* Metric chip */}
      <div
        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold self-start"
        style={{
          background: "rgba(61,217,179,0.10)",
          color: "var(--brand-teal)",
          fontFamily: "var(--font-body)",
          border: "1px solid rgba(61,217,179,0.2)",
        }}
      >
        ↑ {t.metric}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{ background: t.avatarBg, fontFamily: "var(--font-heading)" }}
        >
          {t.avatar}
        </div>
        <div>
          <div
            className="text-sm font-semibold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--brand-slate)" }}
          >
            {t.name}
          </div>
          <div
            className="text-xs"
            style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)" }}
          >
            {t.role} · {t.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Social Proof
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
            Trusted by creators, coaches,
            <br />
            and founders worldwide
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--brand-slate-muted)", lineHeight: 1.7 }}
          >
            Over 3,400 solopreneurs use ShareOn to build their personal brand without burning out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
