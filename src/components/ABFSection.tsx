"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    badge: "K–3",
    title: "Reading Comprehension Initiative",
    description:
      "Our tutors go directly into schools to deliver one-on-one and small group reading instruction using UFLI Foundations — a research-proven, scripted phonics curriculum. Students receive individualized support in phonics, fluency, and comprehension.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    badge: "4–8",
    title: "Leadership & Soft Skills Development",
    description:
      "Young men learn grooming, etiquette, public speaking, financial literacy, and professional presentation. This is the GQ program — teaching boys to carry themselves with confidence, style, and character.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    badge: "9–12",
    title: "Career Development & Workforce Readiness",
    description:
      "High school students explore career paths, build resumes, practice interviews, and gain real-world experience through internships and job shadowing with HPC Sports and community partners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
];

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="card-gold-border p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start"
    >
      {/* Left: Badge + Icon */}
      <div className="flex flex-col items-center gap-4 sm:min-w-[80px]">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
          className="px-4 py-2 rounded-full bg-gold text-white text-sm font-bold tracking-wider"
        >
          {program.badge}
        </motion.div>
        <div className="hidden sm:block">{program.icon}</div>
      </div>

      {/* Right: Content */}
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">
          {program.title}
        </h3>
        <p className="text-navy/60 leading-relaxed">
          {program.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ABFSection() {
  return (
    <section id="programs" className="relative py-28 sm:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm text-gold font-semibold tracking-widest uppercase mb-4"
          >
            Alabama Boys Foundation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy tracking-tight mb-4"
          >
            Programs That Transform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-navy/50 text-lg max-w-xl mx-auto"
          >
            Three stages of development. One mission: unlocking potential.
          </motion.p>
        </div>

        {/* Program cards - stacked */}
        <div className="flex flex-col gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.badge} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
