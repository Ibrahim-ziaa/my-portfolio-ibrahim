"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Lead Generation Bot",
    description:
      "Automated multi-channel lead gen bot that qualifies, nurtures, and routes leads via WhatsApp, SMS, and email — powered by OpenAI and n8n workflows.",
    tags: ["n8n", "OpenAI", "Twilio", "WhatsApp"],
    demo: "#",
    github: "#",
  },
  {
    title: "RAG Knowledge Chatbot",
    description:
      "Enterprise-grade retrieval-augmented generation chatbot with semantic search over 10k+ documents. Deployed on custom UI with streaming responses.",
    tags: ["LangChain", "Pinecone", "GPT-4", "FastAPI"],
    demo: "#",
    github: "#",
  },
  {
    title: "Sales Automation Pipeline",
    description:
      "End-to-end CRM automation connecting Make, HubSpot, and GoHighLevel — auto-routing leads, sending follow-ups, and updating deal stages in real-time.",
    tags: ["Make", "HubSpot", "GHL", "Webhooks"],
    demo: "#",
    github: "#",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay },
});

export default function Projects() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            My <span className="text-[#e53e3e]">Work</span>
          </h2>
          <div className="w-14 h-1 bg-[#e53e3e] rounded-full mx-auto" />
          <p className="mt-6 text-white/50 text-base max-w-xl mx-auto">
            A selection of projects that showcase my expertise in AI, automation, and data science.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(0.1 * i)}
              className="group relative bg-[#111] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-[#e53e3e]/40 hover:shadow-[0_0_40px_rgba(229,62,62,0.12)] transition-all duration-300"
            >
              {/* Red accent top line */}
              <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#e53e3e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-lg font-bold text-white leading-tight">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">{p.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#e53e3e]/10 text-[#e53e3e] border border-[#e53e3e]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-1">
                <a
                  href={p.demo}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#e53e3e] text-white hover:bg-[#c53030] transition-colors"
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
                <a
                  href={p.github}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-white/15 text-white/70 hover:border-white/40 hover:text-white transition-colors"
                >
                  <Github size={13} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
