"use client";

export default function Footer() {
  return (
    <footer className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
          {/* Left: Brand */}
          <div>
            <p className="text-white font-bold text-lg mb-2">
              HPC Sports &times; Alabama Boys Foundation
            </p>
            <p className="text-white/40 text-sm">
              Montgomery, Alabama
            </p>
          </div>

          {/* Center: Tagline */}
          <div className="text-center">
            <p className="text-gold font-medium text-sm tracking-wide">
              Building Character. Building Confidence. Building Futures.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
            <a href="#programs" className="text-white/50 hover:text-white text-sm transition-colors">Programs</a>
            <a href="#hpc" className="text-white/50 hover:text-white text-sm transition-colors">HPC Sports</a>
            <a href="#involved" className="text-white/50 hover:text-white text-sm transition-colors">Get Involved</a>
            <a href="#impact" className="text-white/50 hover:text-white text-sm transition-colors">Impact</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} HPC Sports. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Empowering the Next Generation
          </p>
        </div>
      </div>
    </footer>
  );
}
