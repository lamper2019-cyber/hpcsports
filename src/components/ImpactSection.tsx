"use client";

import { motion } from "framer-motion";

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/[0.03] blur-[120px]" />

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
              Pouring Back In
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="text-white">Real </span>
            <span className="gradient-text">Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            Every program, every internship, every opportunity circles back to
            one thing: investing in our students and our community. The agency
            side of our work exists to pour directly back into the people we serve.
          </motion.p>
        </div>

        {/* Impact flow */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">
          {[
            {
              step: "01",
              title: "Identify & Develop",
              description:
                "ABF programs identify talent and potential in students from K-12, building skills at every stage of their journey.",
              color: "text-teal",
            },
            {
              step: "02",
              title: "Create Opportunity",
              description:
                "HBC creates real employment pathways, connecting developed talent with meaningful work and internship experiences.",
              color: "text-gold",
            },
            {
              step: "03",
              title: "Reinvest & Grow",
              description:
                "Success fuels growth. Revenue and impact from our agency work gets reinvested directly into expanding our programs.",
              color: "text-purple",
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative glass-card p-10 text-center"
            >
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className={`text-6xl font-black ${item.color} opacity-15 mb-6`}>
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="glass-card p-14 sm:p-20 glow-gold max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-5xl font-bold mb-8">
              <span className="text-white">Ready to Make a </span>
              <span className="gradient-text">Difference?</span>
            </h3>
            <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re a student, school, organization, or athlete&mdash;there&apos;s
              a place for you in our mission.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#contact"
                className="px-8 py-4 bg-gold text-black font-semibold rounded-full text-lg hover:bg-gold/90 transition-all hover:scale-105 active:scale-95"
              >
                Partner With Us
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-full text-lg hover:border-white/40 hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
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
