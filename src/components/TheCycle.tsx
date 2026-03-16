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
  const titles = ["Develop", "Employ", "Represent", "Reinvest"];

  useEffect(() => {
    if (!trigger) return;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % 4);
      }, 2000);
      return () => clearInterval(interval);
    }, 2500);
    return () => clearTimeout(startDelay);
  }, [trigger]);

  // SVG ring with 4 labels positioned around it
  const radius = 90;
  const cx = 140;
  const cy = 140;
  const circumference = 2 * Math.PI * radius;

  // Positions: top, right, bottom, left
  const positions = [
    { x: cx, y: cy - radius - 20 },       // top
    { x: cx + radius + 20, y: cy },         // right
    { x: cx, y: cy + radius + 20 },         // bottom
    { x: cx - radius - 20, y: cy },         // left
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Interactive cycle ring */}
      <div className="relative" style={{ width: 280, height: 280 }}>
        <svg width="280" height="280" viewBox="0 0 280 280" className="overflow-visible">
          {/* Background ring */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2"
          />
          {/* Animated gold arc that follows active step */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="url(#cycleGradient)"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset: circumference - (circumference / 4) * (active + 1),
              rotate: -90,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          {/* Arrow dots at each position */}
          {positions.map((pos, i) => {
            const nextPos = positions[(i + 1) % 4];
            const midX = (pos.x + nextPos.x) / 2;
            const midY = (pos.y + nextPos.y) / 2;
            // Offset midpoint toward center for curve feel
            const towardCx = (midX + cx) / 2;
            const towardCy = (midY + cy) / 2;
            return (
              <motion.line
                key={`arrow-${i}`}
                x1={pos.x > cx ? pos.x - 8 : pos.x < cx ? pos.x + 8 : pos.x}
                y1={pos.y > cy ? pos.y - 8 : pos.y < cy ? pos.y + 8 : pos.y}
                x2={towardCx}
                y2={towardCy}
                stroke={i === active ? "#C8982E" : "rgba(255,255,255,0.1)"}
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              />
            );
          })}

          <defs>
            <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8982E" />
              <stop offset="50%" stopColor="#E0B94E" />
              <stop offset="100%" stopColor="#C8982E" />
            </linearGradient>
          </defs>
        </svg>

        {/* Labels at each position */}
        {titles.map((title, i) => {
          const isActive = i === active;
          // Position labels outside the ring
          const labelStyles: React.CSSProperties[] = [
            { top: -4, left: "50%", transform: "translateX(-50%)" },   // top
            { top: "50%", right: -16, transform: "translateY(-50%)" },  // right
            { bottom: -4, left: "50%", transform: "translateX(-50%)" }, // bottom
            { top: "50%", left: -16, transform: "translateY(-50%)" },   // left
          ];

          return (
            <motion.div
              key={title}
              className="absolute"
              style={labelStyles[i]}
              animate={{
                scale: isActive ? 1.15 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <span
                className={`text-xs sm:text-sm font-bold tracking-wide transition-all duration-500 ${
                  isActive ? "text-gold" : "text-white/30"
                }`}
              >
                {title}
              </span>
            </motion.div>
          );
        })}

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="text-center px-4"
            >
              <p className="gradient-text font-bold text-lg">{String(active + 1).padStart(2, "0")}</p>
              <p className="text-white/40 text-[11px] leading-tight mt-1 max-w-[120px]">
                {steps[active].desc.split(".")[0]}.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Minimal label */}
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="text-gold"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M1 4v6h6" />
            <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
          </svg>
        </motion.div>
        <span className="text-white/40 font-medium text-sm">The cycle never stops.</span>
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
