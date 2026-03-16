"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const steps = [
  { num: 1, title: "Develop", desc: "We grow young men through ABF programs." },
  { num: 2, title: "Employ", desc: "We hire from our own community." },
  { num: 3, title: "Represent", desc: "We manage NIL deals for student athletes." },
  { num: 4, title: "Reinvest", desc: "We put it back into more programs and more students." },
];

export default function TheCycle() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % 4);
      }, 3500);
      return () => clearInterval(interval);
    }, 1500);
    return () => clearTimeout(startDelay);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 section-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-4"
          >
            The Reinvestment <span className="gradient-text">Cycle</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-white/50 text-lg"
          >
            Every dollar HPC earns comes back to the community.
          </motion.p>
        </div>

        {/* Big interactive cycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Pill nodes row — always one line */}
          <div className="grid grid-cols-4 gap-2 sm:gap-0 w-full max-w-4xl">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <div key={step.title} className="flex items-center">
                  {/* Node */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      boxShadow: isActive
                        ? "0 0 40px rgba(200,152,46,0.45), 0 0 80px rgba(200,152,46,0.2)"
                        : "0 0 0px rgba(200,152,46,0)",
                    }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex flex-col items-center justify-center rounded-2xl w-full py-5 sm:py-7 border transition-all duration-500 cursor-default ${
                      isActive
                        ? "bg-gold/15 border-gold/50"
                        : "bg-navy-light/50 border-white/15"
                    }`}
                  >
                    <span className={`text-[10px] sm:text-xs font-bold tracking-widest mb-1.5 transition-colors duration-500 ${isActive ? "text-gold" : "text-white/50"}`}>
                      {String(step.num).padStart(2, "0")}
                    </span>
                    <span className={`text-sm sm:text-lg lg:text-xl font-bold transition-colors duration-500 ${isActive ? "text-white" : "text-white/70"}`}>
                      {step.title}
                    </span>
                  </motion.div>

                  {/* Arrow connector */}
                  {i < 3 && (
                    <div className="hidden sm:flex items-center flex-shrink-0 px-2 lg:px-3">
                      <motion.svg
                        width="24"
                        height="12"
                        viewBox="0 0 24 12"
                        fill="none"
                        animate={{
                          opacity: i === active ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <path d="M0 6h18M15 1l5 5-5 5" stroke={i === active ? "#E0B94E" : "#ffffff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active step description */}
          <div className="mt-10 sm:mt-12 min-h-[60px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white/80 text-base sm:text-lg lg:text-xl text-center max-w-lg font-medium leading-relaxed"
              >
                {steps[active].desc}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Spinning icon + label */}
          <div className="mt-8 flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-gold"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M1 4v6h6" />
                <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
              </svg>
            </motion.div>
            <span className="text-white/60 font-semibold text-base tracking-wide">The cycle never stops</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
