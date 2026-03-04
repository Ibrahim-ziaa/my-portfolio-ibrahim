"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Projects Completed" },
  { value: "16+", label: "Happy Clients" },
  { value: "100%", label: "Job Success" },
  { value: "3", label: "Years Experience" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Photo */}
          <motion.div {...fadeUp(0)} className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#e53e3e] rounded-tl-lg z-20" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#e53e3e] rounded-br-lg z-20" />
              <div className="absolute inset-0 rounded-xl glow-red z-0" />
              <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 w-72 h-80 sm:w-80 sm:h-96">
                <Image
                  src="/images/Ibrahim-NebulaAi-PFP.png"
                  alt="Ibrahim Zia Khan"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for Hire
              </span>
            </motion.div>

            <motion.h2 {...fadeUp(0.15)} className="text-4xl lg:text-5xl font-black leading-tight">
              ABOUT <span className="text-[#e53e3e]">ME</span>
            </motion.h2>

            <motion.div {...fadeUp(0.2)} className="w-14 h-1 bg-[#e53e3e] rounded-full" />

            <motion.p {...fadeUp(0.25)} className="text-white/60 text-base leading-relaxed">
              AI Automation Expert &amp; Data Scientist based in Lahore, Pakistan. I bridge the gap
              between complex data architectures and seamless business automation, delivering
              high-impact solutions that scale. Currently pursuing BS in Data Science at FAST-NU
              while serving as Director of ML &amp; Data Science at NebulaAi Agency.
            </motion.p>
            <motion.p {...fadeUp(0.3)} className="text-white/60 text-base leading-relaxed">
              Passionate about turning raw data into actionable intelligence — I specialize in
              building robust LLM agents, predictive models, and automation workflows that empower
              modern enterprises to operate at the speed of thought.
            </motion.p>

            <motion.div {...fadeUp(0.35)} className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((s) => (
                <div key={s.label} className="stat-box rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-[#e53e3e] mb-1">{s.value}</div>
                  <div className="text-white/50 text-xs font-medium uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
