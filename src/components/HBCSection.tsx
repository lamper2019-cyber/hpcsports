"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  { label: "Youth Employment", icon: "💼", color: "from-gold/20 to-gold/5" },
  { label: "Internships", icon: "🎓", color: "from-teal/20 to-teal/5" },
  { label: "Community Outreach", icon: "🤝", color: "from-purple/20 to-purple/5" },
  { label: "Agency Services", icon: "🚀", color: "from-orange/20 to-orange/5" },
];

function AnimatedCard({ item, index }: { item: (typeof areas)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-card p-8 text-center cursor-default group"
    >
      <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-b ${item.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200`}>
        {item.icon}
      </div>
      <h3 className="text-white font-semibold text-base">{item.label}</h3>
    </motion.div>
  );
}

export default function HBCSection() {
  return (
    <section id="giveback" className="relative py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="text-xs text-white/40 font-medium tracking-widest uppercase mb-6"
          >
            The Operating Arm
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">How We </span>
            <span className="gradient-text">Give Back</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-white/40 text-base"
          >
            Creating real opportunities for young people in our community.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((item, i) => (
            <AnimatedCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
