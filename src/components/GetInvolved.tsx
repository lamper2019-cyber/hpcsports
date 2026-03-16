"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pathways = [
  {
    title: "I'm a School",
    desc: "Partner with ABF to bring reading comprehension tutoring to your students.",
    cta: "Become a Partner School",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "I'm an Athlete",
    desc: "Let HPC Sports manage your NIL deals and build your brand.",
    cta: "Get Represented",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "I Want to Give",
    desc: "Fund the programs that are changing young men's lives in Montgomery.",
    cta: "Donate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "I Want to Work",
    desc: "Join the HPC team through internships and employment opportunities.",
    cta: "Apply",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
];

export default function GetInvolved() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="involved" className="relative py-28 sm:py-36 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy tracking-tight mb-4"
          >
            There&apos;s a Place for You
          </motion.h2>
        </div>

        {/* Pathway cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pathways.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white border border-navy/10 rounded-2xl p-8 cursor-pointer hover:bg-navy hover:border-navy transition-all duration-300"
            >
              <div className="text-navy/40 group-hover:text-gold transition-colors duration-300 mb-5">
                {path.icon}
              </div>
              <h3 className="text-xl font-bold text-navy group-hover:text-white transition-colors duration-300 mb-3">
                {path.title}
              </h3>
              <p className="text-navy/50 group-hover:text-white/60 transition-colors duration-300 text-sm leading-relaxed mb-6">
                {path.desc}
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2.5 text-sm font-semibold rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 hover:scale-105"
              >
                {path.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
