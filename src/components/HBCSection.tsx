"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const operatingAreas = [
  {
    title: "Youth Employment",
    description:
      "Creating real job opportunities for young adults in the community. From part-time roles to full career pathways.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "High School Internships",
    description:
      "Partnering with local high schools to offer internship programs that give students hands-on professional experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    title: "Community Outreach",
    description:
      "Actively engaging with neighborhoods to identify talent and provide pathways to success for underserved youth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Agency Services",
    description:
      "Operating as a full-service agency that connects young talent with organizations seeking fresh perspectives and energy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

function OperatingCard({
  item,
  index,
}: {
  item: (typeof operatingAreas)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-8 lg:p-10 group hover:border-gold/20 transition-all duration-300"
    >
      <div className="text-gold/70 group-hover:text-gold transition-colors duration-300 mb-6">
        {item.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-white/50 leading-relaxed text-[15px]">{item.description}</p>
    </motion.div>
  );
}

export default function HBCSection() {
  return (
    <section id="hbc" className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="text-xs text-white/60 font-medium tracking-widest uppercase">
              The Operating Arm
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="text-white">HBC is </span>
            <span className="gradient-text">Operating</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            We&apos;re not just talking about change&mdash;we&apos;re making it happen. HBC is the
            engine that drives opportunity, employing young adults and high school
            students from communities across the area, giving them real-world
            experience and a foundation for the future.
          </motion.p>
        </div>

        {/* Operating cards grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {operatingAreas.map((item, i) => (
            <OperatingCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-10 sm:p-14 glow-gold"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { number: "100+", label: "Youth Employed" },
              { number: "25+", label: "Partner Schools" },
              { number: "50+", label: "Active Internships" },
              { number: "∞", label: "Potential Unlocked" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-5xl font-bold gradient-text mb-3">
                  {stat.number}
                </div>
                <div className="text-sm text-white/40 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
