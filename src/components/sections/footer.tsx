import { Github, Linkedin } from "lucide-react";

const UPWORK_SVG = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.213 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const socials = [
  { icon: <Github size={16} />, href: "https://github.com/Ibrahim-ziaa", label: "GitHub" },
  { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/ibrahim-zia-a79360203", label: "LinkedIn" },
  { icon: UPWORK_SVG, href: "https://www.upwork.com/freelancers/ibrahimzia", label: "Upwork" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-6">
        <span className="text-2xl font-black text-[#e53e3e] tracking-tighter">IZK.</span>

        <div className="text-center">
          <div className="text-white font-bold text-lg">Ibrahim Zia Khan</div>
          <div className="text-white/40 text-sm mt-1">
            AI Automation Expert &amp; Data Scientist · Director @ NebulaAi
          </div>
        </div>

        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#e53e3e]/40 hover:bg-[#e53e3e]/10 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="w-full max-w-xs h-px bg-white/5" />

        <p className="text-white/25 text-xs text-center">
          &copy; 2025 Ibrahim Zia Khan. Built with{" "}
          <span className="text-[#e53e3e]">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
