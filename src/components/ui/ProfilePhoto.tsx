'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ProfilePhoto() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse position for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <div className="relative flex items-center justify-center w-[340px] h-[340px]">

      {/* SVG liquid distortion filter */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="liquid-glass">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.015"
              numOctaves="3"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="0.4" result="blurred" />
            <feComposite in="blurred" in2="SourceGraphic" operator="atop" />
          </filter>

          <filter id="chromatic">
            <feColorMatrix type="matrix"
              values="1 0 0 0 0.02   0 1 0 0 0   0 0 1 0 -0.02   0 0 0 1 0" />
          </filter>

          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Hexagonal clip */}
          <clipPath id="hexClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5 0
              L 1.0 0.25
              L 1.0 0.75
              L 0.5 1.0
              L 0.0 0.75
              L 0.0 0.25 Z" />
          </clipPath>

          {/* Organic rounded clip */}
          <clipPath id="organicClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0.02
              C 0.75,0.02 0.98,0.18 0.98,0.45
              C 0.98,0.68 0.82,0.92 0.62,0.97
              C 0.50,1.00 0.38,1.00 0.28,0.95
              C 0.08,0.88 0.02,0.68 0.02,0.48
              C 0.02,0.22 0.22,0.02 0.5,0.02 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Outer ambient glow rings — pulse */}
      {[280, 310, 340].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            border: `1px solid ${['#6366f1', '#06b6d4', '#f472b6'][i]}`,
            opacity: 0.15 - i * 0.04,
          }}
          animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1), scale: [1, 1.03, 1] }}
          transition={{
            rotate: { duration: 18 + i * 6, repeat: Infinity, ease: 'linear' },
            scale: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}

      {/* Orbiting color dots */}
      {[
        { color: '#6366f1', r: 155, dur: 5, start: 0 },
        { color: '#06b6d4', r: 155, dur: 7, start: 120 },
        { color: '#f472b6', r: 155, dur: 6, start: 240 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: dot.color,
            boxShadow: `0 0 12px ${dot.color}, 0 0 24px ${dot.color}60`,
          }}
          animate={{
            x: [
              Math.cos((dot.start * Math.PI) / 180) * dot.r,
              Math.cos(((dot.start + 120) * Math.PI) / 180) * dot.r,
              Math.cos(((dot.start + 240) * Math.PI) / 180) * dot.r,
              Math.cos((dot.start * Math.PI) / 180) * dot.r,
            ],
            y: [
              Math.sin((dot.start * Math.PI) / 180) * dot.r,
              Math.sin(((dot.start + 120) * Math.PI) / 180) * dot.r,
              Math.sin(((dot.start + 240) * Math.PI) / 180) * dot.r,
              Math.sin((dot.start * Math.PI) / 180) * dot.r,
            ],
          }}
          transition={{ duration: dot.dur, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* 3D card with liquid glass */}
      <motion.div
        ref={cardRef}
        className="relative w-56 h-56 cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Deep glow behind card */}
        <motion.div
          className="absolute -inset-6 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={{ scale: hovered ? 1.15 : 1, opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.4 }}
        />

        {/* Photo container — organic shape with liquid glass */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            clipPath: 'path("M 112,4 C 172,4 220,38 220,96 C 220,148 186,204 140,218 C 112,226 84,226 56,212 C 16,192 4,148 4,96 C 4,44 48,4 112,4 Z")',
            filter: 'url(#liquid-glass)',
          }}
        >
          <Image
            src="/assets/images/abhinash.jpg"
            alt="Abhinash Pradhan"
            fill
            className="object-cover object-top"
            priority
            sizes="224px"
          />

          {/* Glass overlay — chromatic tint */}
          <div
            className="absolute inset-0"
            style={{
              background: hovered
                ? 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(6,182,212,0.05) 50%, rgba(244,114,182,0.06) 100%)'
                : 'linear-gradient(135deg, rgba(99,102,241,0.04) 0%, transparent 60%)',
              transition: 'background 0.4s ease',
            }}
          />

          {/* Top glass sheen */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%, rgba(255,255,255,0.04) 100%)',
              opacity: hovered ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Dynamic highlight following mouse */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
              ),
            }}
          />
        </div>

        {/* Glass border ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            clipPath: 'path("M 112,4 C 172,4 220,38 220,96 C 220,148 186,204 140,218 C 112,226 84,226 56,212 C 16,192 4,148 4,96 C 4,44 48,4 112,4 Z")',
            background: 'transparent',
            boxShadow: `inset 0 0 0 1.5px rgba(255,255,255,0.18), inset 0 0 0 3px rgba(99,102,241,0.25), 0 0 40px rgba(99,102,241,0.4), 0 0 80px rgba(6,182,212,0.2)`,
          }}
        />

        {/* Floating name tag */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
          style={{
            background: 'rgba(15,23,42,0.85)',
            border: '1px solid rgba(99,102,241,0.4)',
            backdropFilter: 'blur(12px)',
            borderRadius: '50px',
            padding: '5px 16px',
            boxShadow: '0 0 20px rgba(99,102,241,0.3)',
          }}
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs font-mono text-white tracking-widest">
            <span style={{ color: '#06b6d4' }}>&#60;</span>
            {' '}Full Stack · AI / ML{' '}
            <span style={{ color: '#06b6d4' }}>&#47;&#62;</span>
          </p>
        </motion.div>

        {/* 3D depth layer — subtle extrusion */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: 'translateZ(-8px)',
            background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.2), transparent 70%)',
            filter: 'blur(8px)',
            opacity: hovered ? 0.9 : 0.5,
          }}
        />
      </motion.div>

      {/* Floating skill chips around photo */}
      {[
        { label: 'Python', color: '#6366f1', angle: -40, dist: 148 },
        { label: 'React',  color: '#06b6d4', angle: 40,  dist: 148 },
        { label: 'ML/AI',  color: '#f472b6', angle: 180, dist: 148 },
      ].map((chip, i) => {
        const rad = (chip.angle * Math.PI) / 180;
        return (
          <motion.div
            key={chip.label}
            className="absolute font-mono text-[10px] font-bold px-2.5 py-1 rounded-xl"
            style={{
              left: `calc(50% + ${Math.cos(rad) * chip.dist}px)`,
              top: `calc(50% + ${Math.sin(rad) * chip.dist}px)`,
              transform: 'translate(-50%, -50%)',
              background: `${chip.color}18`,
              border: `1px solid ${chip.color}50`,
              color: chip.color,
              boxShadow: `0 0 10px ${chip.color}30`,
            }}
            animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          >
            {chip.label}
          </motion.div>
        );
      })}
    </div>
  );
}
