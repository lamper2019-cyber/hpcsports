"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "NIL Strategy",
    desc: "We help athletes understand and maximize their Name, Image, and Likeness rights from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Brand Building",
    desc: "Personal brand development, social media strategy, and public image management for student athletes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Deal Negotiation",
    desc: "We negotiate endorsement deals, sponsorships, and partnership agreements on behalf of our athletes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <path d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Financial Guidance",
    desc: "Financial literacy training and money management so athletes build wealth, not just income.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

export default function HPCSportsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hpc" className="relative py-32 sm:py-40 section-gradient">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-gold/[0.03] blur-[140px]" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            We Are a Full-Service NIL Agency for Student Athletes
          </motion.h2>
        </div>

        {/* Giant NIL with shimmer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-20"
        >
          <span className="shimmer-text text-[100px] sm:text-[130px] lg:text-[150px] font-black leading-none tracking-tighter select-none">
            NIL
          </span>
        </motion.div>

        {/* 2x2 grid with glassmorphism */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 40px rgba(200, 152, 46, 0.12), 0 0 80px rgba(200, 152, 46, 0.06)",
              }}
              className="glass-morph p-6 sm:p-8 group cursor-default hover:border-gold/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold/70 group-hover:text-gold group-hover:bg-gold/15 transition-all duration-300 mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
