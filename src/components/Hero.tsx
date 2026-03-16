"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-navy to-[#0a0f1a]" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-navy-light/30 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight text-white mb-8"
        >
          HPC Sports <span className="gradient-text">&times;</span> Alabama Boys Foundation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          One agency. One mission. Developing young men from kindergarten through the pros.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-base sm:text-lg gradient-text font-semibold tracking-wide mb-14"
        >
          Building Character. Building Confidence. Building Futures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#programs" className="px-8 py-4 bg-gold text-black font-semibold rounded-full text-base hover:bg-gold-light transition-all hover:scale-105 active:scale-95">
            Our Programs
          </a>
          <a href="#hpc" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full text-base hover:border-white/40 hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
            HPC Sports NIL
          </a>
        </motion.div>
      </div>
    </section>
  );
}
