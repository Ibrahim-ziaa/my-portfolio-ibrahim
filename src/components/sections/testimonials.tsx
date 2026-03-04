"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Ibrahim delivered an outstanding n8n automation system that completely transformed our lead pipeline. Response times dropped from days to minutes. Highly recommend!",
    name: "James R.",
    title: "CEO, Growth Agency",
  },
  {
    quote:
      "The RAG chatbot Ibrahim built for us handles 90% of our support tickets automatically. Clean code, great communication, and delivered ahead of schedule.",
    name: "Sarah M.",
    title: "CTO, SaaS Startup",
  },
  {
    quote:
      "Incredible data scientist. He built predictive models that increased our sales forecast accuracy by 40%. Top Rated Plus for a reason — truly elite talent.",
    name: "Ahmed K.",
    title: "Head of Analytics, FinTech Co.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay },
});

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Client <span className="text-[#e53e3e]">Reviews</span>
          </h2>
          <div className="w-14 h-1 bg-[#e53e3e] rounded-full mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              {...fadeUp(0.1 * i)}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} className="text-[#e53e3e] fill-[#e53e3e]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/60 text-sm leading-relaxed flex-1 italic">
                &ldquo;{r.quote}&rdquo;
              </p>

              {/* Client */}
              <div className="pt-2 border-t border-white/5">
                <div className="font-bold text-white text-sm">{r.name}</div>
                <div className="text-white/40 text-xs mt-0.5">{r.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
