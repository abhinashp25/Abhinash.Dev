'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, CheckBadgeIcon, CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const certs = [
  {
    title: 'Data Analytics Virtual Experience',
    issuer: 'Deloitte',
    issuerFull: 'Deloitte (via Forage)',
    year: '2024',
    description: 'Completed Deloitte\'s Data Analytics virtual internship program. Worked on real-world data problems including data cleaning, analysis, visualization, and presenting business insights derived from complex datasets.',
    skills: ['Data Analysis', 'Excel', 'Tableau', 'Business Insights', 'Data Visualization'],
    color: '#06b6d4',
    badge: '🏢',
    credentialUrl: '#',
    verified: true,
  },
  {
    title: 'NPTEL Certification',
    issuer: 'NPTEL — IIT',
    issuerFull: 'National Programme on Technology Enhanced Learning (IIT)',
    year: '2023',
    description: 'Earned NPTEL certification from Indian Institutes of Technology, covering advanced topics in programming, algorithms, and computational thinking. Nationally recognized academic credential.',
    skills: ['Python', 'Algorithms', 'Data Structures', 'Computer Science', 'Problem Solving'],
    color: '#6366f1',
    badge: '🎓',
    credentialUrl: '#',
    verified: true,
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
            Professional certifications and recognized credentials in data analytics and computer science.
          </p>
        </motion.div>

        {/* Cert cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full rounded-2xl overflow-hidden"
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
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
                />

                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 100% 0%, ${cert.color}15, transparent 70%)` }}
                />

                <div className="relative z-10 p-7">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                      >
                        {cert.badge}
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest" style={{ color: cert.color }}>
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <CalendarIcon className="w-3 h-3 text-slate-500" />
                          <span className="text-xs font-mono text-slate-500">{cert.year}</span>
                        </div>
                      </div>
                    </div>

                    {cert.verified && (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full"
                        style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                      >
                        <CheckBadgeIcon className="w-3.5 h-3.5" style={{ color: cert.color }} />
                        <span className="text-xs font-mono" style={{ color: cert.color }}>Verified</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Cert icon */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                    >
                      <AcademicCapIcon className="w-4 h-4" style={{ color: cert.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{cert.title}</h3>
                      <p className="text-xs font-mono text-slate-500 mt-0.5">{cert.issuerFull}</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{cert.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{ background: `${cert.color}10`, color: cert.color, border: `1px solid ${cert.color}20` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={cert.credentialUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-mono transition-colors group/link"
                    style={{ color: cert.color }}
                  >
                    <span className="group-hover/link:underline">View Credential</span>
                    <ArrowTopRightOnSquareIcon className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
