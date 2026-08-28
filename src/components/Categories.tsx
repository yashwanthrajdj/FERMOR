import { useState, useEffect } from 'react';
import { 
  LineChart, Home, FileText, PiggyBank, 
  ShieldAlert, CreditCard, Landmark, Briefcase, ArrowRight, X, ChevronRight, Calculator
} from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const categories = [
  { name: 'Investing', icon: LineChart, count: 8, id: 'investing' },
  { name: 'Home Loans', icon: Home, count: 4, id: 'home-loans' },
  { name: 'Income Tax', icon: FileText, count: 5, id: 'tax' },
  { name: 'Retirement', icon: PiggyBank, count: 3, id: 'retirement' },
  { name: 'Insurance', icon: ShieldAlert, count: 2, id: 'insurance' },
  { name: 'Credit Cards', icon: CreditCard, count: 2, id: 'credit-cards' },
  { name: 'Banking', icon: Landmark, count: 6, id: 'banking' },
  { name: 'SME Finance', icon: Briefcase, count: 3, id: 'sme' },
];

const subCalculators: Record<string, string[]> = {
  'investing': ['SIP Calculator', 'Lumpsum Return', 'Stock Averaging', 'CAGR Calculator', 'Mutual Fund Returns', 'Dividend Yield', 'Bond Yield', 'Option Pricing'],
  'home-loans': ['EMI Calculator', 'Prepayment Savings', 'Affordability Check', 'Rent vs Buy'],
  'tax': ['Old vs New Regime', 'HRA Exemption', 'Capital Gains Tax', 'Freelancer Tax', 'Surcharge Calc'],
  'retirement': ['FIRE Number', 'EPF Maturity', 'NPS Calculator'],
  'insurance': ['Life Cover Need', 'Health Insurance Premium'],
  'credit-cards': ['Balance Transfer', 'Reward Points Value'],
  'banking': ['FD Returns', 'RD Returns', 'Savings Interest', 'Currency Converter', 'Compound Interest', 'Simple Interest'],
  'sme': ['Working Capital', 'Invoice Discounting', 'Business Loan EMI']
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCategory]);

  return (
    <section id="calculators" className="py-24 bg-[#FAF9F6] dark:bg-[#121212] border-b border-[#E5E5E5] dark:border-[#333] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-serif text-[#1A1A1A] dark:text-[#E5E7EB] font-medium mb-3">
            What are you planning?
          </h2>
          <p className="text-lg text-[#737373] dark:text-[#9CA3AF] font-sans">
            Find the exact math you need for your next money move.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.button 
                variants={itemVariants}
                key={cat.id} 
                onClick={() => setSelectedCategory(cat)}
                className="group relative flex flex-col items-start p-6 bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] rounded-xl hover:border-[#004D40] dark:hover:border-[#10B981] hover:shadow-lg hover:shadow-[#004D40]/5 dark:hover:shadow-[#10B981]/5 transition-all duration-300 text-left w-full cursor-pointer"
              >
                <div className="flex justify-between w-full items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#FAF9F6] dark:bg-[#252525] flex items-center justify-center group-hover:bg-[#004D40]/10 dark:group-hover:bg-[#10B981]/10 transition-colors">
                    <Icon size={24} className="text-[#1A1A1A] dark:text-[#E5E7EB] group-hover:text-[#004D40] dark:group-hover:text-[#10B981] transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FAF9F6] dark:bg-[#252525] flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={14} className="text-[#004D40] dark:text-[#10B981]" />
                  </div>
                </div>
                
                <h3 className="font-sans font-medium text-lg text-[#1A1A1A] dark:text-[#E5E7EB] mb-1 group-hover:text-[#004D40] dark:group-hover:text-[#10B981] transition-colors">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] dark:bg-[#4B5563] group-hover:bg-[#004D40] dark:group-hover:bg-[#10B981] transition-colors" />
                  <span className="text-sm text-[#737373] dark:text-[#9CA3AF] tabular-nums font-mono font-medium">
                    {cat.count} calculators
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Modal Popup */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="absolute inset-0 bg-[#1A1A1A]/40 dark:bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl bg-white dark:bg-[#1A1A1A] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#E5E5E5] dark:border-[#333] max-h-[85vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 dark:bg-black/20 hover:bg-[#FAF9F6] dark:hover:bg-[#2A2A2A] backdrop-blur-md rounded-full flex items-center justify-center border border-[#E5E5E5] dark:border-[#444] text-[#737373] hover:text-[#1A1A1A] dark:text-[#9CA3AF] dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left Panel (Context/Icon) */}
              <div className="bg-[#FAF9F6] dark:bg-[#121212] p-8 md:p-12 md:w-[40%] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E5E5E5] dark:border-[#333]">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-sm border border-[#E5E5E5] dark:border-[#333] flex items-center justify-center mb-8">
                    <selectedCategory.icon size={32} className="text-[#004D40] dark:text-[#10B981]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-serif text-[#1A1A1A] dark:text-white mb-4">
                    {selectedCategory.name}
                  </h3>
                  <p className="text-base text-[#737373] dark:text-[#9CA3AF] leading-relaxed font-sans">
                    Explore our suite of {selectedCategory.count} precision calculators designed exclusively for {selectedCategory.name.toLowerCase()} analysis and planning.
                  </p>
                </div>
                
                <div className="hidden md:flex items-center gap-3 mt-12 p-4 bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E5E5E5] dark:border-[#333]">
                  <div className="w-10 h-10 rounded-full bg-[#004D40]/10 dark:bg-[#10B981]/10 flex items-center justify-center">
                    <Calculator size={18} className="text-[#004D40] dark:text-[#10B981]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1A1A1A] dark:text-white uppercase tracking-wider">Independent Math</p>
                    <p className="text-xs text-[#737373] dark:text-[#9CA3AF]">Zero affiliate bias</p>
                  </div>
                </div>
              </div>

              {/* Right Panel (Calculator List) */}
              <div className="p-6 md:p-10 md:w-[60%] bg-white dark:bg-[#1A1A1A] overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-lg font-bold text-[#1A1A1A] dark:text-white">Available Models</h4>
                  <span className="text-xs font-bold bg-[#FAF9F6] dark:bg-[#252525] text-[#004D40] dark:text-[#10B981] px-3 py-1 rounded-full border border-[#E5E5E5] dark:border-[#333]">
                    {subCalculators[selectedCategory.id]?.length || 0} Tools
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subCalculators[selectedCategory.id]?.map((calc, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      key={calc}
                      href={`#${calc.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group flex items-center justify-between p-4 rounded-xl border border-[#E5E5E5] dark:border-[#333] hover:border-[#004D40] dark:hover:border-[#10B981] bg-white dark:bg-[#1E1E1E] hover:bg-[#FAF9F6] dark:hover:bg-[#252525] transition-all"
                    >
                      <span className="text-sm font-medium text-[#1A1A1A] dark:text-[#E5E7EB] group-hover:text-[#004D40] dark:group-hover:text-[#10B981] transition-colors">
                        {calc}
                      </span>
                      <ChevronRight size={16} className="text-[#94A3B8] dark:text-[#6B7280] group-hover:text-[#004D40] dark:group-hover:text-[#10B981] group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-[#E5E5E5] dark:border-[#333]">
                  <a href="#" className="flex items-center justify-center gap-2 w-full py-4 bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] rounded-xl font-medium hover:bg-[#004D40] dark:hover:bg-[#10B981] dark:hover:text-white transition-colors">
                    View Comprehensive Dashboard
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
