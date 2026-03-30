'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, MapPinIcon, CalendarIcon, StarIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const education = [
  {
    level: 'Bachelor of Technology',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'GIFT Autonomous (Gandhi Institute For Technology)',
    affiliation: 'Affiliated to Biju Patnaik University of Technology (BPUT)',
    location: 'Bhubaneswar, Odisha',
    period: '2023 – 2027',
    status: 'Pursuing',
    color: '#ffffff',
    icon: BuildingLibraryIcon,
    highlights: ['Computer Science Core', 'AI & Machine Learning', 'Data Structures & Algorithms', 'Web Technologies'],
    statusColor: '#cbd5e1',
  },
  {
    level: 'Intermediate — Class XII',
    degree: 'Science (PCM)',
    institution: 'Godavarish Higher Secondary School',
    affiliation: 'CHSE Board, Odisha',
    location: 'Banpur, Odisha',
    period: '2021 – 2023',
    status: 'Completed',
    color: '#e2e8f0',
    icon: AcademicCapIcon,
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
    statusColor: '#94a3b8',
  },
  {
    level: 'Matriculation — Class X',
    degree: 'Secondary Education',
    institution: 'Patita Paban Nodal Banimandir',
    affiliation: 'BSE Odisha Board',
    location: 'Gambharimunda, Odisha',
    period: 'Completed 2021',
    status: 'Completed',
    color: '#94a3b8',
    icon: AcademicCapIcon,
    highlights: ['Science', 'Mathematics', 'English'],
    statusColor: '#64748b',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }} />
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-white/50" />
            <span className="text-white/60 font-mono text-sm tracking-widest uppercase">Academic</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ffffff, #a1a1aa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Qualifications
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl text-lg">
            Academic journey from school to engineering — building the foundations of technology and problem-solving.
          </p>
        </motion.div>



        {/* Cards */}
        <div className="space-y-6">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: `1px solid ${edu.color}25`,
                    transition: 'box-shadow 0.3s, border-color 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${edu.color}18, 0 20px 50px rgba(0,0,0,0.35)`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${edu.color}45`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLElement).style.borderColor = `${edu.color}25`;
                  }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${edu.color}, ${edu.color}30, transparent)` }} />

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 0% 50%, ${edu.color}08, transparent 60%)` }} />

                  <div className="relative z-10 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-5">

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}35` }}>
                        <Icon className="w-6 h-6" style={{ color: edu.color }} />
                      </div>

                      {/* Main content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                            style={{ background: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}30` }}>
                            {edu.level}
                          </span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                            style={{
                              background: `${edu.statusColor}12`,
                              color: edu.statusColor,
                              border: `1px solid ${edu.statusColor}35`,
                            }}>
                            {edu.status}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mt-2 mb-0.5">{edu.degree}</h3>
                        <p className="text-base font-semibold mb-0.5" style={{ color: edu.color }}>{edu.institution}</p>
                        <p className="text-slate-500 text-sm font-mono mb-3">{edu.affiliation}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                          <span className="flex items-center gap-1.5">
                            <MapPinIcon className="w-3.5 h-3.5" style={{ color: edu.color }} />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <CalendarIcon className="w-3.5 h-3.5" style={{ color: edu.color }} />
                            {edu.period}
                          </span>
                        </div>

                        {/* Subject highlights */}
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((h) => (
                            <span key={h} className="text-xs px-2.5 py-1 rounded-lg font-mono text-slate-400"
                              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
