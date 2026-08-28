import { 
  LineChart, Home, FileText, PiggyBank, 
  ShieldAlert, CreditCard, Landmark, Briefcase, ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Investing', icon: LineChart, count: 8, href: '#investing' },
  { name: 'Home Loans', icon: Home, count: 4, href: '#home-loans' },
  { name: 'Income Tax', icon: FileText, count: 5, href: '#tax' },
  { name: 'Retirement', icon: PiggyBank, count: 3, href: '#retirement' },
  { name: 'Insurance', icon: ShieldAlert, count: 2, href: '#insurance' },
  { name: 'Credit Cards', icon: CreditCard, count: 2, href: '#credit-cards' },
  { name: 'Banking', icon: Landmark, count: 6, href: '#banking' },
  { name: 'SME Finance', icon: Briefcase, count: 3, href: '#sme' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export default function Categories() {
  return (
    <section className="py-24 bg-[#FAF9F6] dark:bg-[#121212] border-b border-[#E5E5E5] dark:border-[#333] transition-colors duration-300 relative">
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
              <motion.a 
                variants={itemVariants}
                key={cat.name} 
                href={cat.href} 
                className="group relative flex flex-col items-start p-6 bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] rounded-xl hover:border-[#004D40] dark:hover:border-[#10B981] hover:shadow-lg hover:shadow-[#004D40]/5 dark:hover:shadow-[#10B981]/5 transition-all duration-300"
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
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
