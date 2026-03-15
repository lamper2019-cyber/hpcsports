"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    tag: "K - 3",
    title: "Reading Comprehension",
    acronym: "RCI",
    color: "teal",
    borderColor: "border-teal/30",
    tagBg: "bg-teal/10 text-teal",
    dotColor: "bg-teal",
  },
  {
    tag: "4 - 8",
    title: "Leadership & Development",
    acronym: "L&D",
    color: "purple",
    borderColor: "border-purple/30",
    tagBg: "bg-purple/10 text-purple",
    dotColor: "bg-purple",
  },
  {
    tag: "9 - 12",
    title: "Career Development",
    acronym: "CD",
    color: "orange",
    borderColor: "border-orange/30",
    tagBg: "bg-orange/10 text-orange",
    dotColor: "bg-orange",
  },
];

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass-card p-8 sm:p-10 cursor-default hover:${program.borderColor} transition-all duration-200`}
    >
      <div className="flex items-center justify-between mb-8">
        <span className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider ${program.tagBg}`}>
          {program.tag}
        </span>
        <span className={`text-5xl font-black text-${program.color} opacity-10`}>
          {program.acronym}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white leading-tight">
        {program.title}
      </h3>
    </motion.div>
  );
}

export default function ABFSection() {
  return (
    <section id="abf" className="relative py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
            ABF Programs
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight"
          >
            <span className="text-white">Programs That </span>
            <span className="gradient-text">Transform</span>
          </motion.h2>
        </div>

        {/* Timeline bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-1 bg-white/5 rounded-full mb-16 mx-4 origin-left overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal via-purple to-orange rounded-full" />
        </motion.div>

        {/* Program cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.acronym} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
