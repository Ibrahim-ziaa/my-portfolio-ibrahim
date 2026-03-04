"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TYPEWRITER_TEXTS = [
  "AI Automation Expert",
  "Data Scientist",
  "Top Rated Plus Freelancer",
  "n8n & Make Specialist",
  "AI Agent Builder",
];

function useTypewriter(texts: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((i) => (i + 1) % texts.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return displayed;
}

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229,62,62,${p.alpha})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < -5) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

const badges = [
  { text: "⭐ Top Rated Plus", cls: "badge-float" },
  { text: "100% Job Success", cls: "badge-float-delay" },
  { text: "Director @ NebulaAi", cls: "badge-float-delay2" },
];

export default function Hero() {
  const typed = useTypewriter(TYPEWRITER_TEXTS);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
      <Particles />

      {/* Subtle red radial glow background */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e53e3e]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            {/* Hello, I'm */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#e53e3e] text-sm font-bold tracking-[0.3em] uppercase mb-4"
            >
              HELLO, I&apos;M
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight text-white mb-6"
            >
              IBRAHIM
              <br />
              ZIA
              <br />
              KHAN
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/60 font-medium mb-8 h-8 flex items-center"
            >
              <span>{typed}</span>
              <span className="cursor-blink ml-0.5 text-[#e53e3e]">|</span>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {badges.map((b) => (
                <span
                  key={b.text}
                  className={`${b.cls} px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/80 backdrop-blur-sm`}
                >
                  {b.text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 bg-[#e53e3e] text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#c53030] transition-all duration-200 hover:shadow-lg hover:shadow-red-500/30"
              >
                Hire Me
              </a>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 border border-white/30 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                See My Work
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl glow-red z-0" />
              {/* Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[500px]">
                <Image
                  src="/images/ibrahim.jpeg"
                  alt="Ibrahim Zia Khan"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
                {/* Red overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#e53e3e]/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#e53e3e]/80 to-transparent" />
      </motion.div>
    </section>
  );
}
