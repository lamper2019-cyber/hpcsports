"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    tag: "K - 3rd Grade",
    title: "Reading Comprehension Initiative",
    acronym: "RCI",
    desc: "Going into schools to build strong reading foundations through interactive, hands-on literacy support.",
    color: "teal",
    tagBg: "bg-teal/10 text-teal border-teal/20",
  },
  {
    tag: "4th - 8th Grade",
    title: "Leadership & Development",
    acronym: "L&D",
    desc: "Developing soft skills, communication, teamwork, and personal growth for middle school students.",
    color: "purple",
    tagBg: "bg-purple/10 text-purple border-purple/20",
  },
  {
    tag: "9th - 12th Grade",
    title: "Career Development",
    acronym: "CD",
    desc: "Bridging education and employment with mentorship, exposure, and real-world career preparation.",
    color: "orange",
    tagBg: "bg-orange/10 text-orange border-orange/20",
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card p-10 text-center cursor-default transition-all duration-200"
    >
      {/* Tag */}
      <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider border ${program.tagBg} mb-8`}>
        {program.tag}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
        {program.title}
      </h3>

      {/* Description */}
      <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">
        {program.desc}
      </p>
    </motion.div>
  );
}

export default function ABFSection() {
  return (
    <section id="abf" className="relative py-44 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Programs That </span>
            <span className="gradient-text">Transform</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-white/40 text-base"
          >
            Meeting students where they are and taking them where they need to go.
          </motion.p>
        </div>

        {/* Timeline bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative h-1 bg-white/5 rounded-full mb-20 mx-8 origin-left overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal via-purple to-orange rounded-full" />
        </motion.div>

        {/* Program cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.acronym} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
