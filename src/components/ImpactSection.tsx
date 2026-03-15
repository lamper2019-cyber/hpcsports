"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Develop", desc: "Build skills from K-12 through our programs.", color: "text-teal" },
  { num: "02", title: "Employ", desc: "Create real jobs and internships for young people.", color: "text-gold" },
  { num: "03", title: "Reinvest", desc: "Pour success back into expanding the mission.", color: "text-purple" },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="impact" className="relative py-44 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Real </span>
            <span className="gradient-text">Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-white/40 text-base"
          >
            Every program and opportunity circles back to investing in our community.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card p-10 text-center cursor-default"
            >
              <div className={`text-5xl font-black ${step.color} opacity-20 mb-5`}>
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
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
          <div className="glass-card p-14 sm:p-16 glow-gold max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-white">Join the </span>
              <span className="gradient-text">Mission</span>
            </h3>
            <p className="text-white/40 mb-10 max-w-md mx-auto">
              Student, school, org, or athlete &mdash; there&apos;s a place for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
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
