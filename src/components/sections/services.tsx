"use client";

import { motion } from "framer-motion";
import {
  Bot,
  GitMerge,
  MessageSquare,
  BarChart2,
  Filter,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "End-to-end automation pipelines powered by LLMs. Eliminate repetitive tasks and scale operations intelligently.",
  },
  {
    icon: GitMerge,
    title: "n8n & Make Workflows",
    description:
      "Complex multi-step workflows connecting your entire tool stack — no-code and low-code, built to last.",
  },
  {
    icon: MessageSquare,
    title: "RAG Chatbots & AI Agents",
    description:
      "Context-aware AI agents and retrieval-augmented chatbots trained on your proprietary data.",
  },
  {
    icon: BarChart2,
    title: "Data Science & ML",
    description:
      "Predictive models, data pipelines, and ML systems that turn raw data into competitive advantage.",
  },
  {
    icon: Filter,
    title: "GHL Automation",
    description:
      "GoHighLevel CRM automation — funnels, follow-up sequences, and lead management at scale.",
  },
  {
    icon: Phone,
    title: "WhatsApp & Twilio Integration",
    description:
      "Conversational AI over WhatsApp, SMS, and voice — fully automated customer touchpoints.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, delay },
});

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            What I <span className="text-[#e53e3e]">Do</span>
          </h2>
          <div className="w-14 h-1 bg-[#e53e3e] rounded-full mx-auto" />
          <p className="mt-6 text-white/50 text-base max-w-xl mx-auto">
            Specializing in the intersection of AI, automation, and data science to build
            solutions that actually move the needle.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(0.05 * i)}
              className="glass-card rounded-2xl p-7 flex flex-col gap-4 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#e53e3e]/10 border border-[#e53e3e]/20 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-[#e53e3e]" />
              </div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
