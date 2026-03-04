"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "SQL", "JavaScript"],
  },
  {
    label: "Automation",
    skills: ["n8n", "Make", "GHL", "Zapier"],
  },
  {
    label: "AI / ML",
    skills: ["LangChain", "OpenAI", "HuggingFace", "Pinecone"],
  },
  {
    label: "Integrations",
    skills: ["Twilio", "WhatsApp", "HubSpot", "Retell"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay },
});

export default function Skills() {
  return (
    <section className="py-24 lg:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            My <span className="text-[#e53e3e]">Skills</span>
          </h2>
          <div className="w-14 h-1 bg-[#e53e3e] rounded-full mx-auto" />
        </motion.div>

        {/* Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.label} {...fadeUp(0.08 * gi)} className="flex flex-col gap-4">
              {/* Label */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#e53e3e]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                  {group.label}
                </span>
              </div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-white/75 hover:border-[#e53e3e]/40 hover:text-white hover:bg-[#e53e3e]/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
