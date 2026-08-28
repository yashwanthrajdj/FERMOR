import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const allocations = [
  { label: 'Equity', pct: 42, color: '#06b6d4' },
  { label: 'Debt', pct: 24, color: '#10b981' },
  { label: 'Gold', pct: 14, color: '#f59e0b' },
  { label: 'Cash', pct: 12, color: '#94a3b8' },
  { label: 'Intl', pct: 8, color: '#8b5cf6' },
];

function DonutChart() {
  const total = allocations.reduce((s, a) => s + a.pct, 0);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90">
        {allocations.map((a) => {
          const dash = (a.pct / total) * circumference;
          const gap = circumference - dash;
          const el = (
            <circle
              key={a.label}
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke={a.color}
              strokeWidth="14"
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              className="transition-all duration-700"
            />
          );
          offset += dash;
          return el;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
          Diversified
        </span>
      </div>
    </div>
  );
}

const features = [
  'Allocation suited to your age and risk',
  'Projected returns you can actually trust',
  'Learn the "why" behind every recommendation',
];

const stats = [
  { label: 'Expected return', value: '11.8% p.a.' },
  { label: 'Risk level', value: 'Moderate' },
  { label: 'Time horizon', value: '10+ yrs' },
];

export default function PlanWisely() {
  return (
    <section className="py-20 lg:py-28 bg-cyan-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Donut Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-cyan-900/5 p-7 sm:p-8 w-full max-w-md">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Recommended mix</h3>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full mt-1 inline-block">
                    Balanced · Age 32
                  </span>
                </div>
              </div>

              {/* Donut */}
              <DonutChart />

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-5">
                {allocations.map((a) => (
                  <div key={a.label} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: a.color }} />
                    <span className="text-xs font-medium text-slate-600">{a.label}</span>
                    <span className="text-xs font-bold text-slate-900">{a.pct}%</span>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-100">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-[11px] text-slate-400 font-medium">{s.label}</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.16em] uppercase text-cyan-700 mb-5">
              <span className="w-8 h-0.5 bg-cyan-500 rounded-full" />
              Plan wisely
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-tight">
              Plan wisely, not blindly.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
              It takes more than money to grow money — clarity matters too. Fermor pairs
              expert-built, diversified frameworks with educational tools, so you understand
              exactly why a plan makes sense before you act on it.
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
              href="#cta"
              className="inline-block mt-8 bg-cyan-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-cyan-700 shadow-lg shadow-cyan-500/20 transition-all duration-200"
            >
              Start planning →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
