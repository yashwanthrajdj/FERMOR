import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Calculators', href: '#calculators' },
  { label: 'Analysis', href: '#analysis' },
  { label: 'Gold', href: '#tools' },
  { label: 'Tax & Salary', href: '#tools' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <span className="text-white font-extrabold text-lg leading-none">F</span>
          </div>
          <span className="text-slate-900 font-extrabold text-xl tracking-tight">Fermor</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">
            Sign in
          </a>
          <a
            href="#cta"
            className="bg-cyan-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-cyan-700 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200"
          >
            Get started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-100"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-2">
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-cyan-600 text-white text-sm font-semibold px-5 py-3 rounded-xl"
                >
                  Get started — it's free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
