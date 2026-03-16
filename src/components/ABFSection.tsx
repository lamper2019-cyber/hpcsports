"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    badge: "K\u20133",
    num: "01",
    title: "Reading Comprehension Initiative",
    description:
      "Our tutors go directly into schools to deliver one-on-one and small group reading instruction using UFLI Foundations \u2014 a research-proven, scripted phonics curriculum. Students receive individualized support in phonics, fluency, and comprehension.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    badge: "4\u20138",
    num: "02",
    title: "Leadership & Soft Skills Development",
    description:
      "Young men learn grooming, etiquette, public speaking, financial literacy, and professional presentation. This is the GQ program \u2014 teaching boys to carry themselves with confidence, style, and character.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    badge: "9\u201312",
    num: "03",
    title: "Career Development & Workforce Readiness",
    description:
      "High school students explore career paths, build resumes, practice interviews, and gain real-world experience through internships and job shadowing with HPC Sports and community partners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
];

function ProgramCard({ program, index }: { program: (typeof programs)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(200, 152, 46, 0.1)" }}
      className="relative glass-card p-8 sm:p-10 border-l-4 border-l-gold overflow-hidden group hover:border-l-8 transition-all duration-300"
    >
      {/* Big background number */}
      <span className="absolute top-4 right-6 text-[120px] sm:text-[160px] font-black leading-none text-white/[0.03] select-none pointer-events-none">
        {program.num}
      </span>

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
            {program.icon}
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-gold text-black text-sm font-bold tracking-wider">
              {program.badge}
            </span>
          </motion.div>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{program.title}</h3>
          <p className="text-white/45 leading-relaxed">{program.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ABFSection() {
  return (
    <section id="programs" className="relative py-32 sm:py-40 section-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs text-gold font-semibold tracking-[0.2em] uppercase mb-5"
          >
            Alabama Boys Foundation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-5"
          >
            Programs That <span className="gradient-text">Transform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            Three stages of development. One mission: unlocking potential.
          </motion.p>
        </div>

        {/* Stacked cards */}
        <div className="flex flex-col gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.badge} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
