"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Develop", desc: "Build skills K-12", color: "text-teal" },
  { num: "02", title: "Employ", desc: "Create opportunities", color: "text-gold" },
  { num: "03", title: "Reinvest", desc: "Grow the mission", color: "text-purple" },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="impact" className="relative py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35 }}
            className="text-xs text-white/40 font-medium tracking-widest uppercase mb-6"
          >
            The Cycle
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight"
          >
            <span className="text-white">Real </span>
            <span className="gradient-text">Impact</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card p-10 text-center cursor-default"
            >
              <div className={`text-5xl font-black ${step.color} opacity-20 mb-4`}>
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/40 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="text-center"
        >
          <div className="glass-card p-14 glow-gold max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-white">Join the </span>
              <span className="gradient-text">Mission</span>
            </h3>
            <p className="text-white/40 mb-10 max-w-md mx-auto">
              Student, school, org, or athlete — there&apos;s a place for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-gold text-black font-semibold rounded-full hover:bg-gold/90 transition-all hover:scale-105 active:scale-95"
              >
                Partner With Us
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
