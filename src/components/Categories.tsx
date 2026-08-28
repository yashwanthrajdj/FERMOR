import { motion } from 'framer-motion';
import {
  Shield, Banknote, CreditCard, Landmark, TrendingUp,
  BarChart3, Calculator, Clock, Home, Coins,
  Briefcase, Award, PiggyBank, Globe, ArrowUpRight, Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Category {
  label: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { label: 'Insurance', icon: Shield },
  { label: 'Loans', icon: Banknote },
  { label: 'Credit Cards', icon: CreditCard },
  { label: 'Banking', icon: Landmark },
  { label: 'Investing', icon: TrendingUp },
  { label: 'Mutual Funds', icon: BarChart3 },
  { label: 'Taxes', icon: Calculator },
  { label: 'Retirement', icon: Clock },
  { label: 'Real Estate', icon: Home },
  { label: 'Gold', icon: Coins },
  { label: 'Career & Salary', icon: Briefcase },
  { label: 'Schemes', icon: Award },
  { label: 'PPF Savings', icon: PiggyBank },
  { label: 'NPS Pension', icon: Shield },
  { label: 'GDP Data', icon: Globe },
  { label: 'Tools & More', icon: Wrench },
];

export default function Categories() {
  return (
    <section id="calculators" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.16em] uppercase text-cyan-700 mb-5">
            <span className="w-8 h-0.5 bg-cyan-500 rounded-full" />
            Start anywhere
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What are you planning?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
            Pick a goal and Fermor runs the math, compares your options, and shows you the clear next step.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.a
                key={cat.label}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
                className="relative bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-3 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/8 transition-all duration-300 cursor-pointer group"
              >
                <ArrowUpRight
                  size={14}
                  className="absolute top-3 right-3 text-slate-200 group-hover:text-cyan-500 transition-colors"
                />
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                  <Icon size={22} className="text-cyan-600" strokeWidth={1.8} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 text-center leading-snug">
                  {cat.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
