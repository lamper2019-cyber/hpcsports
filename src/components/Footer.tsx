"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-16 bg-[#060a12]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
          <div>
            <p className="text-white font-bold text-lg mb-2">
              <span className="gradient-text">HPC</span> Sports &times; ABF
            </p>
            <p className="text-white/30 text-sm">Montgomery, Alabama</p>
          </div>

          <div className="text-center">
            <p className="gradient-text font-medium text-sm tracking-wide">
              Building Character. Building Confidence. Building Futures.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
            <a href="#programs" className="text-white/40 hover:text-white/70 text-sm transition-colors">Programs</a>
            <a href="#hpc" className="text-white/40 hover:text-white/70 text-sm transition-colors">HPC Sports</a>
            <a href="#involved" className="text-white/40 hover:text-white/70 text-sm transition-colors">Get Involved</a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">&copy; {new Date().getFullYear()} HPC Sports. All rights reserved.</p>
          <p className="text-white/15 text-xs">Empowering the Next Generation</p>
        </div>
      </div>
    </motion.footer>
  );
}
