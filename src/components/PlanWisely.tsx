import { motion, type Variants } from 'framer-motion';
import { Target, TrendingUp, Shield, Zap, ChevronRight } from 'lucide-react';

const assetClasses = [
  { id: 'equity', label: 'Global Equity', pct: 45, color: '#06b6d4', icon: TrendingUp, delay: 0 },
  { id: 'debt', label: 'Fixed Income', pct: 25, color: '#3b82f6', icon: Shield, delay: 0.1 },
  { id: 'alt', label: 'Alternatives', pct: 15, color: '#8b5cf6', icon: Zap, delay: 0.2 },
  { id: 'cash', label: 'Liquid Assets', pct: 15, color: '#10b981', icon: Target, delay: 0.3 },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export default function PlanWisely() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[30rem] h-[30rem] bg-cyan-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[25rem] h-[25rem] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-semibold text-cyan-700 tracking-wide uppercase">Intelligent Strategy</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Plan with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Precision.</span><br />
              Grow with Purpose.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10">
              Generic advice won't cut it. We dynamically align your portfolio's architecture with your exact life stage, risk appetite, and future ambitions.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4 mb-10">
              {[
                { title: 'Dynamic Rebalancing', desc: 'Auto-adjusts as markets shift to maintain your ideal risk profile.' },
                { title: 'Tax-Loss Harvesting', desc: 'Optimizes your returns by strategically offsetting capital gains.' },
                { title: 'Scenario Analysis', desc: 'Stress-test your portfolio against thousands of market simulations.' }
              ].map((feature, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button variants={itemVariants} className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95">
              Build Your Strategy
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Visualizer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative"
          >
            {/* The Visualizer Card */}
            <div className="relative w-full aspect-square max-w-[500px] mx-auto rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-1 shadow-2xl shadow-cyan-900/20">
              <div className="absolute inset-0 rounded-[3rem] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              
              <div className="relative h-full w-full bg-slate-900/50 backdrop-blur-3xl rounded-[2.8rem] border border-white/10 overflow-hidden flex flex-col">
                
                {/* Header */}
                <div className="p-8 pb-0 flex justify-between items-center z-10">
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Target Portfolio</p>
                    <p className="text-white text-2xl font-bold">Aggressive Growth</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Interactive Rings Chart */}
                <div className="flex-1 relative flex items-center justify-center mt-4">
                  
                  {/* Central Core */}
                  <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 blur-xl opacity-40 animate-pulse" />
                  <div className="absolute w-20 h-20 rounded-full bg-slate-800 border-2 border-white/10 z-10 flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-xl">11.4%</span>
                  </div>
                  <div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 z-0 opacity-20" />

                  {/* SVG Rings */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                    {/* Background rings */}
                    <circle cx="50%" cy="50%" r="25%" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
                    <circle cx="50%" cy="50%" r="35%" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
                    <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>

                  {/* Floating Asset Nodes */}
                  <div className="absolute inset-0 z-20">
                    {assetClasses.map((asset, i) => {
                      // Distribute around the circle
                      const angle = (i * (360 / assetClasses.length)) * (Math.PI / 180);
                      const radius = 32; // percentage
                      const top = `${50 - Math.cos(angle) * radius}%`;
                      const left = `${50 + Math.sin(angle) * radius}%`;
                      
                      const Icon = asset.icon;

                      return (
                        <motion.div
                          key={asset.id}
                          className="absolute w-12 h-12 -ml-6 -mt-6 group cursor-pointer"
                          style={{ top, left }}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + asset.delay, type: 'spring' }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="w-full h-full rounded-2xl bg-slate-800/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl transition-colors group-hover:border-cyan-500/50">
                            <Icon className="w-5 h-5 text-white/80 group-hover:text-cyan-400 transition-colors" />
                          </div>
                          
                          {/* Tooltip */}
                          <div className="absolute top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex flex-col items-center">
                            <div className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                              {asset.label} <span className="text-cyan-600 ml-1">{asset.pct}%</span>
                            </div>
                            <div className="w-2 h-2 bg-white rotate-45 -mt-1" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Stats */}
                <div className="p-8 z-10">
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Risk</p>
                      <p className="text-white text-sm font-semibold">Moderate</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Horizon</p>
                      <p className="text-white text-sm font-semibold">10+ Yrs</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Yield</p>
                      <p className="text-white text-sm font-semibold">4.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 z-30 hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">+2.4% this week</p>
                <p className="text-sm font-bold text-slate-900">On Track</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
