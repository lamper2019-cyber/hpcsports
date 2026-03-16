"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const fullText = "HPC generates opportunity. ABF develops the next generation.";

function Typewriter({ trigger }: { trigger: boolean }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [trigger]);

  return (
    <span>
      {displayed.split(/(opportunity|next generation)/g).map((part, i) =>
        part === "opportunity" || part === "next generation" ? (
          <span key={i} className="gradient-text font-semibold">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
      {!done && <span className="typewriter-cursor" />}
    </span>
  );
}

export default function TheModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-50px" });

  return (
    <section id="model" className="relative py-32 sm:py-40 section-gradient overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-4"
          >
            Two Sides. <span className="gradient-text">One Mission.</span>
          </motion.h2>
        </div>

        {/* Two cards with SVG connector */}
        <div ref={lineRef} className="relative">
          {/* Animated SVG line connecting cards */}
          <svg className="hidden md:block absolute top-1/2 left-0 w-full h-8 -translate-y-1/2 z-0 overflow-visible" preserveAspectRatio="none">
            <motion.line
              x1="25%"
              y1="50%"
              x2="75%"
              y2="50%"
              stroke="url(#goldLineGradient)"
              strokeWidth="2"
              strokeDasharray="400"
              initial={{ strokeDashoffset: 400 }}
              animate={lineInView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="goldLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C8982E" />
                <stop offset="50%" stopColor="#E0B94E" />
                <stop offset="100%" stopColor="#C8982E" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid md:grid-cols-2 gap-8 mb-16 relative z-10">
            {/* HPC Sports */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 sm:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
                  <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">HPC Sports</h3>
              <p className="text-white/50 leading-relaxed">
                The agency arm. We represent student athletes, manage NIL deals, build
                brands, and create employment opportunities for young adults in our community.
              </p>
            </motion.div>

            {/* ABF */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card-gold p-8 sm:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Alabama Boys Foundation</h3>
              <p className="text-white/50 leading-relaxed">
                The mission arm. We develop young men K&ndash;12 through reading programs,
                leadership training, and career preparation &mdash; funded by the work HPC does.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Connector with typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-gold/30" />
            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gold">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="h-px w-16 bg-gold/30" />
          </div>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            <Typewriter trigger={isInView} />{" "}
            <span className="gradient-text font-semibold">The cycle never stops.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
