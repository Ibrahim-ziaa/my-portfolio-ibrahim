"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "16+", label: "Jobs Completed" },
  { value: "100%", label: "Job Success Score" },
  { value: "5★", label: "Average Rating" },
  { value: "$3,500+", label: "Earned" },
];

export default function UpworkSpotlight() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#e53e3e]/5 via-transparent to-[#e53e3e]/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e53e3e]/3 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-bold tracking-widest uppercase">⭐ Top Rated Plus</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black leading-tight text-white">
              Hire Me on<br />
              <span className="text-green-400">Upwork</span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed max-w-md italic">
              &ldquo;Most businesses don&apos;t need more staff — they need smarter systems.&rdquo;
            </p>

            <div className="flex gap-6 flex-wrap">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-white/40 text-xs font-medium uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6 lg:items-end"
          >
            <div className="bg-[#111] border border-white/[0.07] rounded-2xl p-8 lg:p-10 flex flex-col gap-6 max-w-sm w-full">
              <div className="text-center">
                <div className="text-5xl font-black text-green-400 mb-2">TOP</div>
                <div className="text-2xl font-black text-white">RATED PLUS</div>
                <div className="mt-3 text-white/40 text-sm">Top 3% on Upwork · Remote Worldwide</div>
              </div>

              <a
                href="https://www.upwork.com/freelancers/ibrahimzia"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 px-6 bg-green-500 hover:bg-green-400 text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
              >
                View Upwork Profile
              </a>

              <p className="text-center text-white/30 text-xs">
                Available for new projects · Let&apos;s build something amazing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
