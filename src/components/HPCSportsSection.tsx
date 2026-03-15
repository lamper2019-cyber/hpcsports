"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    label: "NIL Strategy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: "Brand Building",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Deal Negotiation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <path d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Financial Literacy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

export default function HPCSportsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="hpc" className="relative py-44 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header - centered */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">HPC</span>
            <span className="text-white"> Sports</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-white/40 text-base"
          >
            Helping student athletes navigate NIL and maximize their potential.
          </motion.p>
        </div>

        {/* NIL Visual - centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-24"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            {/* Outer ring - "Name" */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-gold/10"
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gold/50" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-gold/40 font-medium tracking-widest uppercase">
                Name
              </div>
            </motion.div>

            {/* Middle ring - "Image" */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 rounded-full border border-gold/15"
            >
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gold/65" />
              <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[10px] text-gold/40 font-medium tracking-widest uppercase">
                Image
              </div>
            </motion.div>

            {/* Inner ring - "Likeness" */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-20 rounded-full border border-gold/20"
            >
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gold/80" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gold/40 font-medium tracking-widest uppercase whitespace-nowrap">
                Likeness
              </div>
            </motion.div>

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                className="text-6xl sm:text-7xl font-black gradient-text"
              >
                NIL
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Service cards - centered grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 text-center cursor-default group"
            >
              <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold/70 group-hover:text-gold group-hover:bg-gold/15 transition-all duration-200">
                {service.icon}
              </div>
              <span className="text-white/70 text-sm font-medium">{service.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
