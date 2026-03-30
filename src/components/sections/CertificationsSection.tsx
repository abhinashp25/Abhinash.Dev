'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, CheckBadgeIcon, CalendarIcon, ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/outline';

const certs = [
  {
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    issuer: 'NPTEL — IIT Kharagpur',
    issuerFull: 'National Programme on Technology Enhanced Learning, IIT Kharagpur (SWAYAM)',
    period: 'Jul–Oct 2024',
    duration: '12-week course',
    score: '60%',
    scoreDetail: 'Assignments: 24.16/25 · Proctored Exam: 35.5/75',
    rollNo: 'NPTEL24CS95S2350100373',
    coordinator: 'Prof. Haimanti Banerji',
    description: 'Earned Elite certification in Industry 4.0 and Industrial IoT — covering cyber-physical systems, smart manufacturing, IIoT architecture, and emerging industrial technologies. 60% consolidated score among 15,725 certified candidates.',
    skills: ['Industry 4.0', 'IIoT', 'Cyber-Physical Systems', 'Smart Manufacturing', 'IoT Architecture'],
    color: '#06b6d4',
    badge: '🏭',
    eliteBadge: true,
    verified: true,
    credentialUrl: '/introduction to industry 4.0 and industrial internet of things certificate.pdf',
    totalCertified: '15,725',
  },
  {
    title: 'Computer Networks and Internet Protocol',
    issuer: 'NPTEL — IIT Kharagpur',
    issuerFull: 'National Programme on Technology Enhanced Learning, IIT Kharagpur (SWAYAM)',
    period: 'Jan–Apr 2025',
    duration: '12-week course',
    score: '56%',
    scoreDetail: 'Assignments: 24.22/25 · Proctored Exam: 31.5/75',
    rollNo: 'NPTEL25CS15S1142901050',
    coordinator: 'Prof. Haimanti Banerji',
    description: 'Completed NPTEL certification in Computer Networks and Internet Protocol — covering TCP/IP, network layers, routing protocols, subnetting, and internet architecture. Scored 56% among 6,290 certified candidates.',
    skills: ['TCP/IP', 'Computer Networks', 'Routing Protocols', 'Internet Architecture', 'Subnetting'],
    color: '#6366f1',
    badge: '🌐',
    eliteBadge: false,
    verified: true,
    credentialUrl: '/Computer Networks And Internet Protocol.pdf',
    totalCertified: '6,290',
  },
  {
    title: 'Programming with Python',
    issuer: 'Moniba Technology & Innovations',
    issuerFull: 'Moniba Technology & Innovations, Kolkata',
    period: '1 Jul – 29 Jul 2024',
    duration: '4-week course',
    score: null,
    scoreDetail: null,
    rollNo: '20240905MON0030',
    coordinator: 'Monisha Ghosh (Delivery Manager)',
    description: 'Internship certification for successfully completing "Programming with Python" at Moniba Technology & Innovations, Kolkata. Covered Python fundamentals, data structures, OOP, and practical scripting for automation and development.',
    skills: ['Python', 'OOP', 'Data Structures', 'Automation', 'Scripting', 'Problem Solving'],
    color: '#f472b6',
    badge: '🐍',
    eliteBadge: false,
    verified: true,
    credentialUrl: '/Moniba Technology.pdf',
    totalCertified: null,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-cyber-500" />
            <span className="text-cyber-400 font-mono text-sm tracking-widest uppercase">Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certifications &{' '}
            <span style={{ color: '#06b6d4', textShadow: '0 0 20px rgba(6,182,212,0.5)' }}>Achievements</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl text-lg">
            NPTEL certifications from IIT Kharagpur and professional internship credentials.
          </p>
        </motion.div>

        {/* Cert cards — 3 column on large, 1 on mobile */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${cert.color}25`,
                  transition: 'box-shadow 0.3s, border-color 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${cert.color}20, 0 25px 60px rgba(0,0,0,0.4)`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}25`;
                }}
              >
                {/* Top line */}
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />

                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 100% 0%, ${cert.color}15, transparent 70%)` }} />

                <div className="relative z-10 p-6 flex flex-col flex-1">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                      >
                        {cert.badge}
                      </div>
                      <div>
                        <p className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: cert.color }}>
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <CalendarIcon className="w-3 h-3 text-slate-500" />
                          <span className="text-xs font-mono text-slate-500">{cert.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      {cert.verified && (
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                          style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                        >
                          <CheckBadgeIcon className="w-3 h-3" style={{ color: cert.color }} />
                          <span className="text-[10px] font-mono" style={{ color: cert.color }}>Verified</span>
                        </motion.div>
                      )}
                      {cert.eliteBadge && (
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)' }}
                        >
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <span className="text-[10px] font-mono text-yellow-400">Elite</span>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-2.5 mb-3">
                    <div className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                      <AcademicCapIcon className="w-3.5 h-3.5" style={{ color: cert.color }} />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug">{cert.title}</h3>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">{cert.description}</p>

                  {/* Score bar */}
                  {cert.score && (
                    <div className="mb-4 p-3 rounded-xl" style={{ background: `${cert.color}08`, border: `1px solid ${cert.color}20` }}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono text-slate-500">Consolidated Score</span>
                        <span className="text-sm font-bold font-mono" style={{ color: cert.color }}>{cert.score}</span>
                      </div>
                      {/* Score progress bar */}
                      <div className="h-1 bg-dark-700 rounded-full overflow-hidden mb-1.5">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}80)` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: cert.score }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.12 + 0.4, ease: 'easeOut' }}
                        />
                      </div>
                      <p className="text-[10px] font-mono text-slate-600">{cert.scoreDetail}</p>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-[10px] px-2 py-0.5 rounded font-mono"
                        style={{ background: `${cert.color}10`, color: cert.color, border: `1px solid ${cert.color}20` }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: `${cert.color}15` }}>
                    <div>
                      <p className="text-[9px] font-mono text-slate-700 uppercase tracking-wider">Roll / Cert ID</p>
                      <p className="text-[10px] font-mono text-slate-500 mt-0.5">{cert.rollNo}</p>
                    </div>
                    <a href={cert.credentialUrl}
                      className="flex items-center gap-1 text-[10px] font-mono transition-colors group/link"
                      style={{ color: cert.color }}>
                      <span className="group-hover/link:underline">Verify</span>
                      <ArrowTopRightOnSquareIcon className="w-2.5 h-2.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* NPTEL powered by swayam note */}
        <motion.div className="mt-8 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <p className="text-xs font-mono text-slate-600">
            NPTEL certifications are IIT-issued, funded by Ministry of Education, Govt. of India (SWAYAM platform) · IIT Kharagpur
          </p>
        </motion.div>
      </div>
    </section>
  );
}
