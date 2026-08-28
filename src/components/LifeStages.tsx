import { motion } from 'framer-motion';
import { Briefcase, Home, Heart, Sunset } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stage {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlighted?: boolean;
}

const stages: Stage[] = [
  { title: 'Just started earning', subtitle: 'Build the basics', icon: Briefcase },
  { title: 'Buying a home', subtitle: 'Plan the down payment', icon: Home, highlighted: true },
  { title: 'Growing a family', subtitle: 'Protect what matters', icon: Heart },
  { title: 'Near retirement', subtitle: 'Make it last', icon: Sunset },
];

export default function LifeStages() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.16em] uppercase text-cyan-700 mb-5">
              <span className="w-8 h-0.5 bg-cyan-500 rounded-full" />
              Every stage of life
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-tight">
              Tools for every stage of your money journey.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
              Just started earning? Buying a home? Planning for retirement? Wherever you are,
              Fermor's tools and guides help you understand your options and reach your goals —
              one clear decision at a time.
            </p>
            <a
              href="#calculators"
              className="inline-block mt-8 bg-slate-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-all duration-200"
            >
              Explore all calculators →
            </a>
          </motion.div>

          {/* Right — Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-400/8 rounded-full blur-3xl scale-110 pointer-events-none" />
            <div className="relative grid grid-cols-2 gap-4">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`rounded-2xl p-5 sm:p-6 border shadow-sm transition-all duration-300 hover:shadow-md ${
                      stage.highlighted
                        ? 'bg-cyan-50 border-cyan-200 translate-y-3'
                        : 'bg-white border-slate-100'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
                      <Icon size={24} className="text-cyan-600" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{stage.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{stage.subtitle}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
