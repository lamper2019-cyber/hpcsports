"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
      const totalSteps = 20;
      const increment = target / totalSteps;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCount(Math.min(Math.round(increment * step), target));
        if (step >= totalSteps) clearInterval(interval);
      }, duration / totalSteps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [trigger, target, delay]);

  return <span>{String(count).padStart(2, "0")}</span>;
}

function CycleLoop({ trigger }: { trigger: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % 4);
      }, 2500);
      return () => clearInterval(interval);
    }, 2000);
    return () => clearTimeout(startDelay);
  }, [trigger]);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Horizontal pill-style cycle */}
      <div className="flex items-center gap-0">
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <div key={step.title} className="flex items-center">
              {/* Node */}
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                  boxShadow: isActive
                    ? "0 0 24px rgba(200,152,46,0.35), 0 0 48px rgba(200,152,46,0.15)"
                    : "0 0 0px rgba(200,152,46,0)",
                }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col items-center justify-center rounded-2xl px-5 py-4 sm:px-6 sm:py-5 border transition-all duration-500 cursor-default ${
                  isActive
                    ? "bg-gold/10 border-gold/40"
                    : "bg-white/[0.03] border-white/[0.06] hover:border-white/10"
                }`}
              >
                <span className={`text-[10px] font-bold tracking-widest mb-1 transition-colors duration-500 ${isActive ? "text-gold" : "text-white/20"}`}>
                  {String(step.num).padStart(2, "0")}
                </span>
                <span className={`text-sm sm:text-base font-bold transition-colors duration-500 ${isActive ? "text-gold" : "text-white/50"}`}>
                  {step.title}
                </span>
              </motion.div>

              {/* Arrow connector */}
              {i < 3 && (
                <div className="flex items-center px-2 sm:px-3">
                  <motion.svg
                    width="24"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                    animate={{
                      opacity: i === active ? 1 : 0.2,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M0 6h20M16 1l5 5-5 5" stroke={i === active ? "#C8982E" : "#ffffff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Return arrow curving back from Reinvest to Develop */}
      <div className="w-full max-w-md">
        <svg className="w-full h-6" viewBox="0 0 400 24" fill="none" preserveAspectRatio="xMidYMid meet">
          <motion.path
            d="M340 4 C370 4, 385 12, 370 20 L30 20 C15 20, 5 12, 30 4"
            stroke="url(#loopGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="700"
            initial={{ strokeDashoffset: 700 }}
            animate={trigger ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
          />
          <motion.polygon
            points="26,0 36,4 26,8"
            fill="#C8982E"
            initial={{ opacity: 0 }}
            animate={trigger ? { opacity: 0.7 } : {}}
            transition={{ delay: 3 }}
          />
          <defs>
            <linearGradient id="loopGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#C8982E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E0B94E" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Active step description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="text-white/35 text-sm text-center max-w-sm"
        >
          {steps[active].desc}
        </motion.p>
      </AnimatePresence>

      {/* Spinning icon */}
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="text-gold/60"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <path d="M1 4v6h6" />
            <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
          </svg>
        </motion.div>
        <span className="text-white/30 font-medium text-xs tracking-wide">The cycle never stops</span>
      </div>
    </div>
  );
}

export default function TheCycle() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.5], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 section-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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

        {/* Steps row */}
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
        </div>

        {/* Interactive cycle loop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 flex justify-center"
        >
          <CycleLoop trigger={isInView} />
        </motion.div>
      </div>
    </section>
  );
}
