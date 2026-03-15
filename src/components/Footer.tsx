"use client";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="gradient-text">HPC</span>
              <span className="text-white ml-2">Sports</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Empowering the next generation from K-12 and beyond.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-widest uppercase">
              Programs
            </h4>
            <div className="space-y-2.5">
              {[
                "Reading Comprehension (K-3)",
                "Leadership & Dev (4-8)",
                "Career Development (9-12)",
                "HPC Sports NIL",
              ].map((link) => (
                <a key={link} href="#abf" className="block text-white/40 hover:text-white/70 transition-colors text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-widest uppercase">
              Get Involved
            </h4>
            <div className="space-y-2.5">
              {["Partner Schools", "Internships", "Volunteer", "Donate"].map((link) => (
                <a key={link} href="#" className="block text-white/40 hover:text-white/70 transition-colors text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
