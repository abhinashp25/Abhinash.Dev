'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useMousePosition } from '@/hooks/useMousePosition';
import dynamic from 'next/dynamic';

const ProfilePhoto = dynamic(() => import('@/components/ui/ProfilePhoto'), { ssr: false });

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  const { x, y } = useMousePosition();
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle magnetic cursor effect calculation
  const px = (x / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5) * 50;
  const py = (y / (typeof window !== 'undefined' ? window.innerHeight : 1) - 0.5) * 50;

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      
      {/* High-end ambient background glow following cursor gently */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)',
            top: '50%', left: '50%',
            marginTop: '-400px', marginLeft: '-400px', // Center it
            transform: `translate(${px}px, ${py}px)`,
          }}
          transition={{ type: 'spring', damping: 40, stiffness: 200 }}
        />
        {/* Subtle grid pattern barely visible */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
        
        {/* Left: Typography Focus */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 space-y-8 max-w-2xl"
        >
          {/* Subtle Availability Badge */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white opacity-70" />
              </span>
              <span className="text-[11px] font-medium text-white/70 tracking-wide uppercase">
                Available for full-time roles
              </span>
            </div>
          </motion.div>

          {/* Massive, clean headline */}
          <motion.div variants={item} className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight">
              Abhinash Pradhan.
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-medium text-white/40 leading-[1.1] tracking-tight">
              Crafting scalable systems & AI solutions.
            </h2>
          </motion.div>

          {/* Refined Bio */}
          <motion.p variants={item} className="text-white/50 text-lg md:text-xl leading-relaxed max-w-[500px] font-light">
            I engineer production-grade applications that merge modern full-stack development with applied machine learning to solve complex problems and deliver exceptional user experiences.
          </motion.p>

          {/* Polished Call to action */}
          <motion.div variants={item} className="pt-4 flex items-center gap-6">
            <button
              onClick={() => scrollTo('projects')}
              className="group relative px-6 py-3 rounded-full bg-white text-dark-900 font-medium text-sm overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <a
              href="/resume.pdf"
              download="Abhinash_Pradhan_Resume.pdf"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] auto-underline group"
            >
              View Resume
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Clean, un-cluttered Profile/3D Element */}
        <motion.div
          className="hidden lg:flex flex-1 justify-end opacity-80 mix-blend-lighten"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
          animate={{ opacity: 0.8, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-[450px] h-[450px] rounded-full flex items-center justify-center">
            {/* Extremely subtle backdrop glow for the profile */}
            <div className="absolute inset-0 rounded-full bg-white/5 blur-[80px]" />
            <div className="relative z-10 w-full h-full">
               <ProfilePhoto />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
