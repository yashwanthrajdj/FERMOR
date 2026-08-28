import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Track your net worth across every account',
  'Side-by-side comparison, never a sales pitch',
  'Plain-English insights on where your money goes',
];

const breakdown = [
  { label: 'Investments', value: '₹24.1L', color: 'bg-cyan-400' },
  { label: 'Banking', value: '₹6.8L', color: 'bg-emerald-400' },
  { label: 'Retirement', value: '₹9.2L', color: 'bg-amber-400' },
  { label: 'Other assets', value: '₹2.6L', color: 'bg-violet-400' },
];

export default function AppShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
              All-in-one money app
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything about your money, in one app.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
              Fermor brings investing, banking, taxes and retirement together into one simple
              view — so everything you need for your money is in one place. Easy, seamless, and
              always in your control.
            </p>

            <ul className="mt-7 space-y-3">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-base text-slate-600 font-medium">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="#tools"
              className="inline-flex items-center gap-2 mt-8 text-cyan-600 font-semibold text-base hover:text-cyan-700 transition-colors"
            >
              Explore the tools
              <span className="text-lg">→</span>
            </a>
          </motion.div>

          {/* Right — Net Worth Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-md"
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-7 sm:p-8 shadow-2xl shadow-slate-900/30">
                <p className="text-slate-400 text-sm font-medium">Your Fermor net worth</p>

                <div className="mt-3 flex items-end gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">₹42,64,200</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-emerald-400 text-sm font-semibold">↑ ₹1,84,000</span>
                  <span className="text-slate-500 text-sm">this month</span>
                </div>

                {/* Breakdown */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {breakdown.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                      <div>
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="text-sm font-bold text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400">68% to ₹62L goal</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full transition-all duration-1000" style={{ width: '68%' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
