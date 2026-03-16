"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated navy gradient background */}
      <div className="absolute inset-0 bg-navy">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #1B2A4A 0%, #243556 50%, #1B2A4A 100%)",
              "linear-gradient(135deg, #243556 0%, #1B2A4A 50%, #2A3F66 100%)",
              "linear-gradient(135deg, #1B2A4A 0%, #243556 50%, #1B2A4A 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6"
        >
          HPC Sports{" "}
          <span className="gradient-text">&times;</span>{" "}
          Alabama Boys Foundation
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          One agency. One mission. Developing young men from kindergarten through the pros.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-base sm:text-lg text-gold font-medium tracking-wide mb-12"
        >
          Building Character. Building Confidence. Building Futures.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#programs"
            className="px-8 py-4 bg-gold text-white font-semibold rounded-full text-base hover:bg-gold-light transition-all hover:scale-105 active:scale-95"
          >
            Our Programs
          </a>
          <a
            href="#hpc"
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-base hover:border-white/60 hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
          >
            HPC Sports NIL
          </a>
        </motion.div>
      </div>
    </section>
  );
}
