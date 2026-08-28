import { motion } from 'framer-motion';
import { TrendingUp, Landmark, Calculator, Clock, Shield, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Tool {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent?: boolean;
}

const tools: Tool[] = [
  { title: 'Investing', subtitle: 'SIPs · funds · stocks', icon: TrendingUp, accent: true },
  { title: 'Banking', subtitle: 'Savings · FD · RD rates', icon: Landmark },
  { title: 'Tax & Salary', subtitle: 'Regimes · CTC · 80C', icon: Calculator },
  { title: 'Retirement', subtitle: 'NPS · PPF · EPF', icon: Clock },
  { title: 'Insurance', subtitle: 'Term · health cover', icon: Shield },
  { title: 'Learning', subtitle: 'Guides · explainers', icon: BookOpen },
];

export default function ToolsGrid() {
  return (
    <section id="tools" className="py-20 lg:py-28 bg-white">
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
            One platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Every money decision, covered.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group ${
                  tool.accent
                    ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-white border border-slate-100 hover:border-cyan-200 hover:shadow-cyan-500/8'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    tool.accent
                      ? 'bg-white/20'
                      : 'bg-cyan-50 group-hover:bg-cyan-100'
                  } transition-colors`}
                >
                  <Icon
                    size={26}
                    className={tool.accent ? 'text-white' : 'text-cyan-600'}
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      tool.accent ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {tool.title}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      tool.accent ? 'text-cyan-100' : 'text-slate-500'
                    }`}
                  >
                    {tool.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
