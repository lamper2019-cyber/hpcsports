"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  "NIL Strategy",
  "Brand Building",
  "Deal Negotiation",
  "Financial Literacy",
];

export default function HPCSportsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="hpc" className="relative py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35 }}
              className="text-xs text-gold font-medium tracking-widest uppercase mb-6"
            >
              High-Profile Consultancy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-8"
            >
              <span className="gradient-text">HPC</span>
              <span className="text-white"> Sports</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-white/40 text-base mb-10 max-w-md"
            >
              Helping student athletes navigate NIL and maximize their potential.
            </motion.p>

            {/* Service pills */}
            <div className="flex flex-wrap gap-3">
              {services.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-5 py-2.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium cursor-default"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - NIL Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-gold/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-gold/15"
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/60" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-gold/20"
              >
                <div className="absolute -bottom-1 right-4 w-2 h-2 rounded-full bg-gold/80" />
              </motion.div>

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                    className="text-7xl font-black gradient-text"
                  >
                    NIL
                  </motion.div>
                  <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mt-2">
                    Name &bull; Image &bull; Likeness
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
