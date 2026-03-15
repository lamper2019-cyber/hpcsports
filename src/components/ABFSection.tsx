"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    id: "rci",
    tag: "K - 3rd Grade",
    title: "Reading Comprehension Initiative",
    acronym: "RCI",
    description:
      "Going directly into schools to transform how young learners engage with reading. Our RCI program builds strong foundational skills through interactive, hands-on reading comprehension support tailored for kindergarten through third grade.",
    highlights: [
      "In-school program delivery",
      "Interactive reading workshops",
      "Foundational literacy building",
      "One-on-one student support",
    ],
    accentColor: "text-teal",
    borderHover: "hover:border-teal/30",
    dotColor: "bg-teal",
  },
  {
    id: "ld",
    tag: "4th - 8th Grade",
    title: "Leadership & Development",
    acronym: "L&D",
    description:
      "Developing the soft skills that matter. Our Leadership & Development program focuses on research and development skills, communication, teamwork, and personal growth for middle school students ready to level up.",
    highlights: [
      "Soft skills development",
      "Research & development projects",
      "Team leadership exercises",
      "Personal growth workshops",
    ],
    accentColor: "text-purple",
    borderHover: "hover:border-purple/30",
    dotColor: "bg-purple",
  },
  {
    id: "cd",
    tag: "9th - 12th Grade",
    title: "Career Development",
    acronym: "CD",
    description:
      "Preparing high schoolers for the real world. Our Career Development program bridges the gap between education and employment, giving students the tools, mentorship, and exposure they need to launch their careers.",
    highlights: [
      "Career path exploration",
      "Professional mentorship",
      "Resume & interview prep",
      "Industry exposure trips",
    ],
    accentColor: "text-orange",
    borderHover: "hover:border-orange/30",
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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`glass-card overflow-hidden transition-all duration-300 ${program.borderHover}`}
    >
      <div className="p-8 sm:p-10">
        {/* Tag */}
        <div className="flex items-center justify-between mb-10">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase ${program.accentColor} bg-white/5 border border-white/10`}
          >
            {program.tag}
          </span>
          <span className={`text-4xl font-black ${program.accentColor} opacity-15`}>
            {program.acronym}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
          {program.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 leading-relaxed mb-10 text-[15px]">
          {program.description}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-4">
          {program.highlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-3">
              <span className={`w-1.5 h-1.5 rounded-full ${program.dotColor} flex-shrink-0`} />
              <span className="text-sm text-white/60">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ABFSection() {
  return (
    <section id="abf" className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="text-xs text-white/60 font-medium tracking-widest uppercase">
              ABF Programs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="text-white">Programs That </span>
            <span className="gradient-text">Transform</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            From the earliest readers to high school seniors, ABF meets students
            where they are and takes them where they need to go. Three
            specialized programs, one mission: unlocking potential.
          </motion.p>
        </div>

        {/* Age progression timeline */}
        <div className="relative h-1 bg-white/5 rounded-full mb-20 mx-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal via-purple to-orange rounded-full" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-teal border-2 border-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple border-2 border-black" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-orange border-2 border-black" />
        </div>

        {/* Program cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
