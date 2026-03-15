"use client";

import { motion } from "framer-motion";

export default function HPCSportsSection() {
  return (
    <section id="hpc" className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full bg-gold/[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-8"
            >
              <span className="text-xs text-gold font-medium tracking-widest uppercase">
                High-Profile Consultancy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            >
              <span className="gradient-text">HPC</span>
              <span className="text-white"> Sports</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-white/50 leading-relaxed mb-12"
            >
              Navigating the world of Name, Image, and Likeness (NIL) for
              student athletes. HPC Sports provides elite consultancy to help
              young athletes maximize their potential&mdash;on and off the field.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  title: "NIL Strategy & Management",
                  desc: "Comprehensive guidance on building and monetizing personal brand as a student athlete.",
                },
                {
                  title: "Brand Development",
                  desc: "Crafting authentic personal brands that resonate with audiences and attract partnerships.",
                },
                {
                  title: "Deal Negotiation",
                  desc: "Expert representation ensuring athletes get fair, impactful deals aligned with their values.",
                },
                {
                  title: "Financial Literacy",
                  desc: "Teaching athletes how to manage, invest, and grow the income from their NIL opportunities.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex gap-5 p-5 rounded-2xl hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <span className="text-gold text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Visual (lightweight) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Static rings */}
              <div className="absolute inset-0 rounded-full border border-gold/10" />
              <div className="absolute inset-12 rounded-full border border-gold/15" />
              <div className="absolute inset-24 rounded-full border border-gold/20" />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl sm:text-8xl font-black gradient-text mb-2">
                    NIL
                  </div>
                  <p className="text-white/40 text-sm tracking-widest uppercase">
                    Name &bull; Image &bull; Likeness
                  </p>
                </div>
              </div>

              {/* Corner labels */}
              {[
                { label: "Strategy", top: "10%", left: "10%" },
                { label: "Branding", top: "10%", right: "10%" },
                { label: "Growth", bottom: "10%", left: "10%" },
                { label: "Deals", bottom: "10%", right: "10%" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="absolute px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50"
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    bottom: item.bottom,
                  }}
                >
                  {item.label}
                </div>
              ))}

              {/* Accent dots on rings */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold/40" />
              <div className="absolute bottom-12 left-12 w-2 h-2 rounded-full bg-gold/60" />
              <div className="absolute right-24 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
