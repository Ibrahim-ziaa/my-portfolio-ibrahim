"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Ibrahim has been an outstanding freelancer, operating more like a core technical leader who consistently creates immediate value, stabilizes your automation and product stack, and pushes revenue-generating systems into production. He is absolutely a 10/10.",
    name: "Google Sheets Automation Client",
    title: "$2,645 Project · Upwork",
  },
  {
    quote:
      "Ibrahim is not only skilled and understands AI and automation, but he is friendly, easy to work with and a strategic partner.",
    name: "Competitive Intelligence Client",
    title: "5.0 ⭐ · Upwork",
  },
  {
    quote:
      "Ibrahim is amazing, talented and easy to work with. His communication skills are top notch, understands the scope, goes further with recommendations and is a true expert in his field. Highly recommended.",
    name: "Chatbase AI Chatbot Client",
    title: "5.0 ⭐ · Upwork",
  },
  {
    quote:
      "Ibrahim gives really quick text backs and is very communicative throughout the whole process. He did everything I asked for and even tried workarounds I didn't suggest. Will be working with him again.",
    name: "NLP Document Matching Client",
    title: "5.0 ⭐ · Upwork",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.55, delay },
});

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Client <span className="text-[#e53e3e]">Reviews</span>
          </h2>
          <div className="w-14 h-1 bg-[#e53e3e] rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.08 * i)}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} className="text-[#e53e3e] fill-[#e53e3e]" />
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed flex-1 italic">
                &ldquo;{r.quote}&rdquo;
              </p>

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
