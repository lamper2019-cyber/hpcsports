"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pathways = [
  {
    title: "I\u2019m a School",
    desc: "Partner with ABF to bring reading comprehension tutoring to your students.",
    cta: "Become a Partner School",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
        <path d="M9 10h.01M15 10h.01" />
      </svg>
    ),
  },
  {
    title: "I\u2019m an Athlete",
    desc: "Let HPC Sports manage your NIL deals and build your brand.",
    cta: "Get Represented",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 7 7 7 7M18 9h1.5a2.5 2.5 0 000-5C17 4 17 7 17 7" />
        <path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
        <path d="M18 2H6v7a6 6 0 0012 0V2z" />
      </svg>
    ),
  },
  {
    title: "I Want to Give",
    desc: "Fund the programs that are changing young men\u2019s lives in Montgomery.",
    cta: "Donate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "I Want to Work",
    desc: "Join the HPC team through internships and employment opportunities.",
    cta: "Apply",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
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
    <section id="involved" className="relative py-32 sm:py-40 section-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight"
          >
            There&apos;s a Place <span className="gradient-text">for You</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pathways.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 group cursor-default hover:bg-navy/60 hover:border-gold/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold/70 group-hover:text-gold group-hover:bg-gold/15 transition-all duration-300 mb-5">
                {path.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {path.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-300">
                {path.desc}
              </p>
              <button className="px-6 py-3 bg-gold text-black font-bold rounded-lg text-sm hover:bg-gold-light transition-all duration-300 active:scale-95">
                {path.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
