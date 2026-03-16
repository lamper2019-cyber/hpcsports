"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pathways = [
  {
    title: "I'm a School",
    desc: "Partner with ABF to bring reading comprehension tutoring to your students.",
    cta: "Become a Partner School",
  },
  {
    title: "I'm an Athlete",
    desc: "Let HPC Sports manage your NIL deals and build your brand.",
    cta: "Get Represented",
  },
  {
    title: "I Want to Give",
    desc: "Fund the programs that are changing young men's lives in Montgomery.",
    cta: "Donate",
  },
  {
    title: "I Want to Work",
    desc: "Join the HPC team through internships and employment opportunities.",
    cta: "Apply",
  },
];

export default function GetInvolved() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="involved" className="relative py-32 sm:py-40 section-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight"
          >
            There&apos;s a Place <span className="gradient-text">for You</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pathways.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-8 group cursor-default hover:border-gold/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {path.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{path.desc}</p>
              <a
                href="#"
                className="inline-block px-6 py-2.5 text-sm font-semibold rounded-full bg-gold/10 text-gold border border-gold/20 hover:bg-gold hover:text-black transition-all duration-300 hover:scale-105"
              >
                {path.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
