"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Develop",
    desc: "ABF programs build skills, confidence, and character in young men K–12.",
  },
  {
    num: "02",
    title: "Employ",
    desc: "HPC Sports hires interns and young professionals from our community, creating real jobs and career pathways.",
  },
  {
    num: "03",
    title: "Represent",
    desc: "HPC manages NIL deals for student athletes, generating revenue through brand partnerships.",
  },
  {
    num: "04",
    title: "Reinvest",
    desc: "Revenue from HPC funds ABF's programs, expanding our reach to more schools and more students.",
  },
];

export default function TheCycle() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

  return (
    <section id="cycle" ref={sectionRef} className="relative py-28 sm:py-36 bg-gray overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy tracking-tight mb-4"
          >
            The Reinvestment Cycle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-navy/50 text-lg"
          >
            Every dollar HPC earns comes back to the community.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-navy/10">
            <motion.div
              className="h-full bg-gold origin-left"
              style={{ width: lineWidth }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="text-center"
              >
                {/* Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15, type: "spring" }}
                  className="w-[72px] h-[72px] rounded-full bg-navy mx-auto mb-5 flex items-center justify-center"
                >
                  <span className="text-gold font-bold text-lg">{step.num}</span>
                </motion.div>

                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-navy/50 text-sm leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Loop-back arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-navy/5 border border-navy/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gold">
                <path d="M1 4v6h6" />
                <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
              </svg>
              <span className="text-navy/70 font-medium text-sm">And the cycle continues.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
