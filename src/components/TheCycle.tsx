"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Develop", desc: "ABF programs build skills, confidence, and character in young men K–12." },
  { num: "02", title: "Employ", desc: "HPC hires interns and young professionals, creating real jobs and career pathways." },
  { num: "03", title: "Represent", desc: "HPC manages NIL deals for student athletes, generating revenue through brand partnerships." },
  { num: "04", title: "Reinvest", desc: "Revenue from HPC funds ABF's programs, expanding reach to more schools and students." },
];

export default function TheCycle() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.5], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 section-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
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
            className="text-white/40 text-lg"
          >
            Every dollar HPC earns comes back to the community.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-white/5">
            <motion.div className="h-full bg-gradient-to-r from-gold to-gold-light origin-left rounded-full" style={{ width: lineWidth }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.12, type: "spring" }}
                  className="w-[72px] h-[72px] rounded-full bg-gradient-to-b from-navy-light to-navy mx-auto mb-6 flex items-center justify-center border border-gold/20 glow-gold"
                >
                  <span className="gradient-text font-bold text-lg">{step.num}</span>
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Loop back */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center mt-14"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gold">
                <path d="M1 4v6h6" />
                <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
              </svg>
              <span className="text-white/50 font-medium text-sm">And the cycle continues.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
