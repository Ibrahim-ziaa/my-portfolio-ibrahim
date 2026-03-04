"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Based Skin Cancer Diagnostic System",
    description:
      "Intelligent diagnostic platform detecting skin cancer from lesion images using EfficientNet-B0, SVM, and LightGBM — with SHAP/LIME explainability for clinical transparency.",
    tags: ["Python", "EfficientNet", "SHAP", "OpenCV", "ML"],
    github: "https://github.com/Ibrahim-ziaa",
  },
  {
    title: "Twitter Sentiment Analysis Dashboard",
    description:
      "BERT & LSTM sentiment classification with Power BI visualization — keyword clouds, temporal trends, and location-based polarity mapping across millions of tweets.",
    tags: ["Python", "BERT", "LSTM", "Power BI", "NLP"],
    github: "https://github.com/Ibrahim-ziaa",
  },
  {
    title: "Competitive Intelligence Automation",
    description:
      "Make.com automation system for real-time competitor monitoring, data aggregation, and intelligent reporting — delivered to clients with zero manual effort.",
    tags: ["Make.com", "AI", "Automation", "APIs"],
    github: "https://github.com/Ibrahim-ziaa",
  },
  {
    title: "Bank Statement Collection Automation",
    description:
      "n8n workflow automating bank statement collection, PDF parsing, and structured data extraction — feeding clean financial data into downstream systems automatically.",
    tags: ["n8n", "Python", "PDF Parsing", "Automation"],
    github: "https://github.com/Ibrahim-ziaa",
  },
  {
    title: "Voice-to-Text Summarizer Platform",
    description:
      "Full-stack Streamlit app using HuBERT & Wav2Vec for high-accuracy transcription and BART/Mistral for intelligent summarization — built for enterprise meeting workflows.",
    tags: ["Python", "HuBERT", "BART", "Streamlit", "NLP"],
    github: "https://github.com/Ibrahim-ziaa",
  },
  {
    title: "Google Ads Performance Dashboard",
    description:
      "Looker Studio dashboard powered by the Google Ads API — real-time CTR/ROAS insights, budget pacing alerts, and automated anomaly detection with Python.",
    tags: ["Looker Studio", "Google Ads API", "Python", "Automation"],
    github: "https://github.com/Ibrahim-ziaa",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.55, delay },
});

export default function Projects() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            My <span className="text-[#e53e3e]">Work</span>
          </h2>
          <div className="w-14 h-1 bg-[#e53e3e] rounded-full mx-auto" />
          <p className="mt-6 text-white/50 text-base max-w-xl mx-auto">
            A selection of projects spanning AI diagnostics, NLP, automation, and data science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(0.06 * i)}
              className="group relative bg-[#111] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-[#e53e3e]/40 hover:shadow-[0_0_40px_rgba(229,62,62,0.12)] transition-all duration-300"
            >
              <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#e53e3e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-base font-bold text-white leading-snug">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">{p.description}</p>

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

              <div className="flex gap-3 pt-1">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-white/15 text-white/70 hover:border-white/40 hover:text-white transition-colors"
                >
                  <Github size={13} /> GitHub
                </a>
                <a
                  href="https://www.upwork.com/freelancers/ibrahimzia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#e53e3e]/10 text-[#e53e3e] border border-[#e53e3e]/20 hover:bg-[#e53e3e] hover:text-white transition-colors"
                >
                  <ExternalLink size={13} /> View Work
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
