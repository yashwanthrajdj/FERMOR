import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Calculator, PieChart, Menu, X, Zap, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user manually set dark mode previously (if using localStorage, though we aren't here)
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`sticky top-0 z-50 transition-all duration-300 hidden md:block ${
          isScrolled 
            ? 'bg-white/80 dark:bg-[#121212]/80 backdrop-blur-xl border-b border-[#E5E5E5]/50 dark:border-[#333]/50 shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Animated Logo */}
            <a href="#" className="flex-shrink-0 flex items-center gap-2 group">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-8 h-8 bg-[#004D40] rounded-lg flex items-center justify-center shadow-lg shadow-[#004D40]/20"
              >
                <Zap size={16} className="text-white" fill="white" />
              </motion.div>
              <span className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-white tracking-tight group-hover:text-[#004D40] dark:group-hover:text-[#10B981] transition-colors">
                Fermor.
              </span>
            </a>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10 bg-white/50 dark:bg-[#1E1E1E]/50 backdrop-blur-md px-8 py-3 rounded-full border border-white dark:border-[#333] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
              {[
                { name: 'About', href: '#about' },
                { name: 'Calculators', href: '#calculators' },
                { name: 'Transactions', href: '#transactions' },
                { name: 'Analysis', href: '#analysis' }
              ].map((item) => (
                <a key={item.name} href={item.href} className="text-[#4A4A4A] dark:text-[#E5E7EB] hover:text-[#004D40] dark:hover:text-[#10B981] text-sm font-semibold transition-all hover:-translate-y-0.5">
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] flex items-center justify-center text-[#1A1A1A] dark:text-white shadow-sm hover:bg-[#FAF9F6] dark:hover:bg-[#2A2A2A] transition-colors"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#004D40] dark:hover:bg-[#10B981] dark:hover:text-white transition-colors shadow-xl shadow-[#1A1A1A]/10"
              >
                Get started
              </motion.a>
            </div>
            
          </div>
        </div>
      </motion.nav>

      {/* Mobile Top Header (Just Logo) */}
      <div className="md:hidden flex justify-between items-center p-6 bg-transparent absolute top-0 w-full z-40">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#004D40] rounded-md flex items-center justify-center shadow-lg">
            <Zap size={14} className="text-white" fill="white" />
          </div>
          <span className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-white tracking-tight">
            Fermor.
          </span>
        </div>
      </div>

      {/* Floating Dynamic Glassmorphed Navbar (Mobile Only) */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-50"
      >
        <div className="bg-white/70 dark:bg-[#121212]/70 backdrop-blur-2xl border border-white/50 dark:border-[#333]/50 shadow-[0_20px_40px_-10px_rgba(0,77,64,0.15)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] rounded-2xl p-2 flex justify-between items-center relative overflow-hidden">
          
          {/* Subtle liquid glow behind the nav items */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#004D40]/5 via-transparent to-[#004D40]/5 animate-pulse pointer-events-none" />

          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Calculator, label: 'Calc', active: false },
            { icon: PieChart, label: 'Txns', active: false },
          ].map((item, idx) => (
            <motion.a 
              key={idx}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl relative z-10 transition-colors ${
                item.active ? 'text-[#004D40] dark:text-[#10B981]' : 'text-[#64748B] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-white'
              }`}
            >
              {item.active && (
                <motion.div layoutId="nav-pill" className="absolute inset-0 bg-white dark:bg-[#2A2A2A] rounded-xl shadow-sm border border-white/60 dark:border-[#444]/60 -z-10" />
              )}
              <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} className="mb-1" />
              <span className={`text-[9px] font-bold tracking-wide ${item.active ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
            </motion.a>
          ))}

          {/* Theme Menu Trigger */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center w-16 h-14 rounded-xl relative z-10 text-[#64748B] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span className="text-[9px] font-bold tracking-wide opacity-70 mt-1">Theme</span>
          </motion.button>

          {/* More Menu Trigger */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center justify-center w-16 h-14 rounded-xl relative z-10 text-[#64748B] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="text-[9px] font-bold tracking-wide opacity-70 mt-1">More</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-40 bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur-3xl border border-white/50 dark:border-[#333]/50 shadow-2xl rounded-3xl p-6"
          >
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] dark:text-[#6B7280] mb-2">Explore</p>
              {['Analysis', 'About Us', 'Contact', 'Legal'].map((item) => (
                <a key={item} href="#" className="block text-xl font-serif font-medium text-[#1A1A1A] dark:text-white hover:text-[#004D40] dark:hover:text-[#10B981] transition-colors pb-3 border-b border-[#E2E8F0]/50 dark:border-[#333] border-dashed">
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <a href="#" className="block w-full text-center bg-[#004D40] dark:bg-[#10B981] text-white px-5 py-4 rounded-xl font-medium shadow-[0_8px_20px_-8px_rgba(0,77,64,0.5)]">
                  Get Started Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
