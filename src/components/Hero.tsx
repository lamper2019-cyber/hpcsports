"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-deep-blue/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm text-gold font-medium">
            Empowering the Next Generation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-10"
        >
          <span className="block text-white">Building</span>
          <span className="block gradient-text">Futures</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-lg mx-auto text-lg text-white/50 leading-relaxed mb-14"
        >
          Education. Opportunity. Impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#abf"
            className="px-8 py-4 bg-gold text-black font-semibold rounded-full text-base hover:bg-gold/90 transition-all hover:scale-105 active:scale-95"
          >
            Our Programs
          </a>
          <a
            href="#giveback"
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full text-base hover:border-white/40 hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
          >
            How We Give Back
          </a>
        </motion.div>
      </div>
    </section>
  );
}
