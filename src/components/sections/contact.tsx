"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { toast } from "sonner";

const UPWORK_SVG = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#e53e3e] fill-current">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.213 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const contactLinks = [
  {
    icon: <Mail size={18} className="text-[#e53e3e]" />,
    label: "Email",
    display: "ibrahim@nebulaai.co",
    href: "mailto:ibrahim@nebulaai.co",
  },
  {
    icon: <Github size={18} className="text-[#e53e3e]" />,
    label: "GitHub",
    display: "github.com/Ibrahim-ziaa",
    href: "https://github.com/Ibrahim-ziaa",
  },
  {
    icon: <Linkedin size={18} className="text-[#e53e3e]" />,
    label: "LinkedIn",
    display: "linkedin.com/in/ibrahim-zia-khan",
    href: "https://www.linkedin.com/in/ibrahim-zia-a79360203",
  },
  {
    icon: UPWORK_SVG,
    label: "Upwork",
    display: "upwork.com/freelancers/ibrahimzia",
    href: "https://www.upwork.com/freelancers/ibrahimzia",
  },
  {
    icon: <Globe size={18} className="text-[#e53e3e]" />,
    label: "Portfolio",
    display: "my-portfolio-ibrahim.vercel.app",
    href: "https://my-portfolio-ibrahim.vercel.app",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay },
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Get In <span className="text-[#e53e3e]">Touch</span>
          </h2>
          <div className="w-14 h-1 bg-[#e53e3e] rounded-full mx-auto" />
          <p className="mt-6 text-white/50 text-base max-w-md mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s build something
            remarkable together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left — Info */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-semibold">Available for Work</span>
            </div>

            <div className="flex flex-col gap-5">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#e53e3e]/10 group-hover:border-[#e53e3e]/30 transition-all">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">{link.label}</div>
                    <div className="text-white text-sm font-medium group-hover:text-[#e53e3e] transition-colors">
                      {link.display}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div {...fadeUp(0.2)}>
            <form
              onSubmit={handleSubmit}
              className="bg-[#111] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#e53e3e]/50 focus:bg-[#e53e3e]/5 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#e53e3e]/50 focus:bg-[#e53e3e]/5 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#e53e3e]/50 focus:bg-[#e53e3e]/5 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 bg-[#e53e3e] text-white font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-[#c53030] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-500/25"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
