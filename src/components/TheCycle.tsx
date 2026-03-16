"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const steps = [
  { num: 1, title: "Develop", desc: "ABF programs build skills, confidence, and character in young men K\u201312." },
  { num: 2, title: "Employ", desc: "HPC hires interns and young professionals, creating real jobs and career pathways." },
  { num: 3, title: "Represent", desc: "HPC manages NIL deals for student athletes, generating revenue through brand partnerships." },
  { num: 4, title: "Reinvest", desc: "HPC helps expand ABF\u2019s opportunities, bringing programs to more schools and more students." },
];

function StepCounter({ target, trigger, delay }: { target: number; trigger: boolean; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const timeout = setTimeout(() => {
      const duration = 800;
      const steps = 20;
      const increment = target / steps;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCount(Math.min(Math.round(increment * step), target));
        if (step >= steps) clearInterval(interval);
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [trigger, target, delay]);

  return <span>{String(count).padStart(2, "0")}</span>;
}

export default function TheCycle() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.5], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 section-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
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
          {/* Animated connecting line */}
          <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold-light origin-left rounded-full"
              style={{ width: lineWidth }}
            />
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
                  <span className="gradient-text font-bold text-lg">
                    <StepCounter target={step.num} trigger={isInView} delay={200 + i * 150} />
                  </span>
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Curved return arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="hidden md:block mt-8"
          >
            <svg className="w-full h-16 overflow-visible" viewBox="0 0 800 60" fill="none" preserveAspectRatio="xMidYMid meet">
              <motion.path
                d="M650 5 C700 5, 720 30, 700 50 C680 65, 200 65, 150 50 C130 40, 130 20, 150 10"
                stroke="url(#returnGradient)"
                strokeWidth="1.5"
                strokeDasharray="800"
                initial={{ strokeDashoffset: 800 }}
                animate={isInView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                fill="none"
              />
              <motion.polygon
                points="145,3 155,10 145,17"
                fill="#C8982E"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2.7 }}
              />
              <defs>
                <linearGradient id="returnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C8982E" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#E0B94E" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#C8982E" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Loop back text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center mt-6"
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
