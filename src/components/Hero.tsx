"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - static, no heavy animations */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-deep-blue/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse-glow" />
          <span className="text-sm text-gold font-medium tracking-wide">
            Empowering the Next Generation
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-[7rem] font-bold leading-[0.95] tracking-tight mb-8"
        >
          <span className="block text-white">Building</span>
          <span className="block gradient-text">Futures</span>
          <span className="block text-white/40 text-3xl sm:text-5xl lg:text-6xl font-light mt-4">
            Through Purpose & Opportunity
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/50 leading-relaxed mb-12"
        >
          ABF and HBC work hand-in-hand to educate, develop, and create
          real opportunities for young people from K-12 and beyond.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#abf"
            className="px-8 py-4 bg-gold text-black font-semibold rounded-full text-lg hover:bg-gold/90 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201,168,76,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Programs
          </motion.a>
          <motion.a
            href="#hbc"
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full text-lg hover:border-white/40 hover:bg-white/5 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            How We Operate
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-gold"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
