'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon, PlusIcon } from 'lucide-react'
import Icons from '../ui/icons'
import { NumberTicker } from '../ui/number-ticker'
import { AnimationContainer } from '../utils/animation-container'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="w-full relative pt-20 lg:pt-28 z-40" ref={ref}>
      {/* Profile Image */}
      <AnimationContainer animation="scale" className="flex items-center justify-center w-full mx-auto overflow-hidden">
        <div className="size-32 rounded-full bg-[#050505] mx-auto overflow-hidden group border-2 border-transparent hover:border-border transition-all duration-300">
          <Image
            src="/images/ibrahim.jpeg"
            alt="Ibrahim Zia Khan"
            width={128}
            height={128}
            priority
            quality={85}
            className="size-full object-cover object-top rounded-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
          />
        </div>
      </AnimationContainer>

      {/* Greeting */}
      <AnimationContainer
        delay={0.3}
        animation="slide-up"
        className="flex items-center justify-center gap-1 px-5 py-2 mt-6 mx-auto w-max rounded-full bg-background border border-border/80 group"
      >
        <p className="text-sm font-medium text-foreground/70">Hello there</p>
        <Icons.wave className="size-6 -rotate-[30deg] transition-all duration-300 group-hover:scale-110" />
      </AnimationContainer>

      {/* Name Heading */}
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-center mx-auto my-4 max-w-5xl leading-snug"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        Ibrahim Zia Khan
      </motion.h2>

      {/* Bio */}
      <AnimationContainer
        delay={0.6}
        animation="slide-up"
        className="mt-6 mx-auto max-w-3xl text-center text-base leading-relaxed text-muted-foreground"
      >
        Data Scientist with a passion for AI and automation. I’ve worked with clients globally, delivering solutions in NLP, computer vision, and business analytics — from medical imaging to marketing dashboards.
      </AnimationContainer>

      {/* CTA Button */}
      <AnimationContainer
        delay={0.8}
        animation="scale"
        className="mt-10 flex justify-center"
      >
        <Link href="#contact" passHref>
          <button className="relative h-12 w-52 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 group btn-primary flex items-center justify-center">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="relative inline-flex items-center justify-center h-full w-full rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300">
              Let&apos;s Work Together
              <ChevronRightIcon className="size-5 ml-1 flex-shrink-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
            </span>
          </button>
        </Link>
      </AnimationContainer>

      {/* Stats Section */}
      <motion.div
        className="flex flex-col items-center justify-center my-32"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 w-full lg:max-w-screen-md">
          {[
            { value: 25, label: 'Projects Completed' },
            { value: 7, label: 'Upwork Jobs' },
            { value: 8, label: 'Clients Served' },
          ].map((item, i) => (
            <AnimationContainer
              key={i}
              animation="scale"
              delay={0.5 + i * 0.1}
              className="flex flex-col items-center justify-center p-6 rounded-lg lg:rounded-3xl bg-[#131316] hover:bg-[#131316]/80 transition-all duration-300"
            >
              <div className="flex items-center">
                <NumberTicker value={item.value} className="text-4xl lg:text-5xl font-medium text-foreground/80" />
                <PlusIcon className="size-6 ml-1 text-blue-500" />
              </div>
              <p className="mt-4 text-base text-muted-foreground text-center">{item.label}</p>
            </AnimationContainer>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
