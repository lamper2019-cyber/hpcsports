"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Students served in pilot year" },
  { value: 11, suffix: "", label: "Students with measurable reading growth" },
  { value: 5, suffix: "", label: "Partner schools" },
  { value: 3, suffix: "", label: "Programs from K\u201312" },
];

function CountUp({ target, suffix, delay }: { target: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const easeOut = useCallback((t: number) => 1 - Math.pow(1 - t, 3), []);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOut(progress);
        const currentValue = Math.round(easedProgress * target);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDone(true);
        }
      };

      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, target, delay, easeOut]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text tabular-nums">
      {count}
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={done && suffix ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, type: "spring" }}
      >
        {suffix}
      </motion.span>
    </span>
  );
}

export default function ImpactNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="impact" className="relative py-32 sm:py-40 section-gradient">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight">
            By The <span className="gradient-text">Numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.3 }}
              className="text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} delay={i * 300} />
              <p className="text-white/40 text-sm mt-4 leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
