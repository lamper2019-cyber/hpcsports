"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "The Model", href: "#model" },
  { label: "Programs", href: "#programs" },
  { label: "HPC Sports", href: "#hpc" },
  { label: "Impact", href: "#impact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <Image src="/hpc-logo.png" alt="HPC Sports" width={120} height={48} className="h-8 sm:h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="px-4 py-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#involved"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="ml-4 px-6 py-2.5 text-sm font-semibold bg-gold text-black rounded-full hover:bg-gold-light transition-colors"
            >
              Get Involved
            </motion.a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white block" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-[#0a0f1a]/98 pt-24 px-8 md:hidden">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a key={link.label} href={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} onClick={() => setMenuOpen(false)} className="text-3xl font-semibold text-white/80 hover:text-white transition-colors">
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
