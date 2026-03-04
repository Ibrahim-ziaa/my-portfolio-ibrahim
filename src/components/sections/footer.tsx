import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ibrahim-ziaa", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ibrahim-zia-a79360203", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ibrahim@nebulai.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-6">
        {/* Logo */}
        <span className="text-2xl font-black text-[#e53e3e] tracking-tighter">IZK.</span>

        {/* Name + Title */}
        <div className="text-center">
          <div className="text-white font-bold text-lg">Ibrahim Zia Khan</div>
          <div className="text-white/40 text-sm mt-1">AI Automation Expert &amp; Data Scientist</div>
        </div>

        {/* Social links */}
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#e53e3e]/40 hover:bg-[#e53e3e]/10 transition-all duration-200"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-white/5" />

        {/* Copyright */}
        <p className="text-white/25 text-xs text-center">
          &copy; {new Date().getFullYear()} Ibrahim Zia Khan. Built with{" "}
          <span className="text-[#e53e3e]">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
