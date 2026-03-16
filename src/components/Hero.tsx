"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-navy-light/30 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        {/* HPC Sports Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Image
            src="/hpc-logo.png"
            alt="HPC Sports"
            width={320}
            height={160}
            className="mx-auto w-[200px] sm:w-[260px] lg:w-[320px] h-auto"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-8"
        >
          <span className="gradient-text">&times;</span> Alabama Boys Foundation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          One agency. One mission. Developing young men from kindergarten through the pros.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg gradient-text font-semibold tracking-wide mb-14"
        >
          Building Character. Building Confidence. Building Futures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#model"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
