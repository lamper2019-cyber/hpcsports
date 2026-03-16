"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "NIL Strategy",
    desc: "We help athletes understand and maximize their Name, Image, and Likeness rights from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Brand Building",
    desc: "Personal brand development, social media strategy, and public image management for student athletes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Deal Negotiation",
    desc: "We negotiate endorsement deals, sponsorships, and partnership agreements on behalf of our athletes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

const gridOrder = [0, 1, 2, 3]; // top-left, top-right, bottom-left, bottom-right

export default function HPCSportsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hpc" className="relative py-28 sm:py-36 bg-navy text-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-4"
          >
            HPC Sports
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-gold text-lg font-medium mb-6"
          >
            Full-Service NIL Agency for Student Athletes
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-white/60 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto"
          >
            HPC Sports is the operating arm &mdash; a sports consultancy and NIL agency
            that represents student athletes, negotiates brand partnerships, and builds
            personal brands. We also employ young adults from our community, creating a
            pipeline from ABF&apos;s programs into real careers.
          </motion.p>
        </div>

        {/* 2x2 Service grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {gridOrder.map((idx, i) => {
            const service = services[idx];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 cursor-default hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
