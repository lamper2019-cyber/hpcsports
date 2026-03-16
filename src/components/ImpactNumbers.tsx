"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Students served in pilot year" },
  { value: 11, suffix: "", label: "Students with measurable reading growth" },
  { value: 5, suffix: "", label: "Partner schools" },
  { value: 3, suffix: "", label: "Programs from K–12" },
];

function CountUp({ target, suffix, delay }: { target: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 30;
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
  }, [isInView, target, delay]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text">
      {count}{suffix}
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
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} delay={i * 200} />
              <p className="text-white/40 text-sm mt-4 leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
