'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import AnimationContainer from '../utils/animation-container';

export default function Contact() {
  return (
    <div id="contact" className="w-full pt-10 pb-20 z-40">
      <AnimationContainer animation="slide-up" delay={0.1}>
        <h2 className="text-2xl lg:text-3xl font-medium text-center">
          Get In Touch
        </h2>
      </AnimationContainer>

      <AnimationContainer animation="slide-up" delay={0.2}>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Link
            href="mailto:ziaibrahim90@gmail.com"
            className="group block p-6 bg-[#111] border border-gray-700 rounded-xl text-center hover:bg-gray-800 transition"
          >
            <Mail className="mx-auto size-8 text-indigo-400 group-hover:text-indigo-300 mb-3" />
            <h3 className="text-sm font-semibold mb-1">Email</h3>
            <p className="text-base text-foreground/80 break-all">
              ziaibrahim90@gmail.com
            </p>
          </Link>

          <Link
            href="https://wa.me/923194447204"
            className="group block p-6 bg-[#111] border border-gray-700 rounded-xl text-center hover:bg-gray-800 transition"
          >
            <Phone className="mx-auto size-8 text-indigo-400 group-hover:text-indigo-300 mb-3" />
            <h3 className="text-sm font-semibold mb-1">Phone</h3>
            <p className="text-base text-foreground/80">
              +92 319 444 7204
            </p>
          </Link>
        </div>
      </AnimationContainer>
    </div>
);
}
