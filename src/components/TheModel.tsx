"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TheModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="model" className="relative py-28 sm:py-36 bg-gray">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy tracking-tight mb-4"
          >
            Two Sides. One Mission.
          </motion.h2>
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* HPC Sports card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-navy p-8 sm:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">HPC Sports</h3>
            <p className="text-white/60 leading-relaxed">
              The agency arm. We represent student athletes, manage NIL deals, build
              brands, and create employment opportunities for young adults in our community.
            </p>
          </motion.div>

          {/* ABF card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 sm:p-10 border-l-4 border-l-gold"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Alabama Boys Foundation</h3>
            <p className="text-navy/60 leading-relaxed">
              The mission arm. We develop young men K&ndash;12 through reading programs,
              leadership training, and career preparation &mdash; funded by the work HPC does.
            </p>
          </motion.div>
        </div>

        {/* Connecting statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          {/* Arrow connector */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gold/30" />
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="h-px w-16 bg-gold/30" />
          </div>
          <p className="text-lg sm:text-xl text-navy/70 font-medium max-w-2xl mx-auto leading-relaxed">
            HPC generates opportunity. ABF develops the next generation.{" "}
            <span className="text-gold font-semibold">The cycle never stops.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
