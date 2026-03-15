"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-3xl font-bold">
                <span className="gradient-text">ABF</span>
                <span className="text-white/40 mx-2">|</span>
                <span className="text-white">HBC</span>
              </span>
            </motion.div>
            <p className="text-white/40 leading-relaxed max-w-sm mb-6">
              Building futures through education, leadership, and opportunity.
              Empowering the next generation from K-12 and beyond.
            </p>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-colors text-xs font-medium"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Programs
            </h4>
            <div className="space-y-3">
              {[
                "Reading Comprehension (K-3)",
                "Leadership & Dev (4-8)",
                "Career Development (9-12)",
                "HPC Sports NIL",
              ].map((link) => (
                <a
                  key={link}
                  href="#abf"
                  className="block text-white/40 hover:text-white/70 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Get Involved
            </h4>
            <div className="space-y-3">
              {[
                "Partner Schools",
                "Internship Program",
                "Volunteer",
                "Donate",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/40 hover:text-white/70 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} ABF & HBC. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Empowering the Next Generation
          </p>
        </div>
      </div>
    </footer>
  );
}
