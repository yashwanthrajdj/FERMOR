import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Info, ArrowRight } from 'lucide-react';

const Slider = ({ value, min, max, step, onChange, label, displayValue, icon: Icon }: any) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="group space-y-4">
      <div className="flex justify-between items-end border-b border-[#E5E5E5]/70 dark:border-[#333]/70 pb-2">
        <label className="text-sm font-medium text-[#737373] dark:text-[#9CA3AF] group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors flex items-center gap-2">
          {Icon && <Icon size={14} className="text-[#004D40] dark:text-[#10B981]" />}
          {label}
        </label>
        <motion.div 
          key={displayValue}
          initial={{ opacity: 0.5, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="tabular-nums font-mono text-lg text-[#1A1A1A] dark:text-white"
        >
          {displayValue}
        </motion.div>
      </div>
      <div className="relative h-1.5 rounded-full bg-[#F3F4F6] dark:bg-[#333] cursor-pointer mt-2 overflow-visible">
        {/* Track */}
        <motion.div 
          className="absolute top-0 left-0 h-full rounded-full bg-[#004D40] dark:bg-[#10B981]"
          style={{ width: `${percentage}%` }}
          layout
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
        <input 
          type="range" min={min} max={max} step={step} 
          value={value} onChange={onChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
        />
        {/* Thumb */}
        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-[#1A1A1A] border border-[#004D40] dark:border-[#10B981] rounded-full shadow-[0_2px_8px_rgba(0,77,64,0.3)] dark:shadow-[0_2px_8px_rgba(16,185,129,0.3)] pointer-events-none group-hover:scale-125 transition-transform z-0"
          style={{ left: `calc(${percentage}% - 8px)` }}
          layout
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
      </div>
    </div>
  );
};

export default function Hero() {
  const [monthlyAmount, setMonthlyAmount] = useState(25000);
  const [years, setYears] = useState(15);
  const [returnRate, setReturnRate] = useState(12);
  
  const [invested, setInvested] = useState(0);
  const [returns, setReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [showFormula, setShowFormula] = useState(false);

  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);

  useEffect(() => {
    const P = monthlyAmount;
    const i = (returnRate / 100) / 12;
    const n = years * 12;
    const totalInvested = P * n;
    let maturityValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    
    if (returnRate === 0) maturityValue = totalInvested;

    setInvested(totalInvested);
    setTotalValue(Math.round(maturityValue));
    setReturns(Math.round(maturityValue - totalInvested));
  }, [monthlyAmount, years, returnRate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const investedPercent = (invested / totalValue) * 100 || 0;
  const returnsPercent = (returns / totalValue) * 100 || 0;

  return (
    <section className="pt-20 pb-32 bg-[#FAF9F6] dark:bg-[#121212] relative overflow-hidden transition-colors duration-300">
      
      {/* Clean Parallel Contour Lines (No Overlapping) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        
        {/* Concentric, strictly expanding asymmetrical curves */}
        <motion.svg 
          viewBox="0 0 1000 1000" 
          className="absolute w-[150vw] h-[150vh] text-[#004D40] dark:text-[#10B981] opacity-[0.08] dark:opacity-[0.04]" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          animate={{ scale: [1, 1.02, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          {[...Array(60)].map((_, i) => (
            <ellipse 
              key={i}
              cx={500 - (i * 6)} 
              cy={500 + (i * 3)}
              rx={10 + i * 35} 
              ry={5 + i * 25}
              transform="rotate(-20 500 500)"
            />
          ))}
        </motion.svg>
        
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#004D40]/10 dark:bg-[#10B981]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#10B981]/5 dark:bg-[#047857]/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Exquisite Rupee Background Watermark */}
      <motion.div 
        style={{ y: y2 }} 
        className="absolute top-40 right-[-10%] md:top-10 md:right-[5%] lg:right-[15%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] pointer-events-none flex items-center justify-center opacity-[0.03] md:opacity-[0.04] dark:opacity-[0.02] mix-blend-multiply dark:mix-blend-screen"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#004D40] dark:from-[#10B981] to-transparent rounded-full blur-[100px] opacity-30 dark:opacity-20 animate-pulse" />
        <span className="font-serif text-[15rem] md:text-[35rem] leading-none text-[#004D40] dark:text-[#10B981] drop-shadow-2xl select-none">₹</span>
      </motion.div>

      {/* Floating Symbolic Representations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute font-serif font-bold text-[#004D40] dark:text-[#10B981] select-none"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              fontSize: `${2 + (i % 3)}rem`
            }}
          >
            {['₹', '%', '+', '=', '₹', '×'][i]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1"
          >


            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#004D40]/20 dark:border-[#10B981]/20 bg-[#004D40]/5 dark:bg-[#10B981]/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#004D40] dark:bg-[#10B981] animate-pulse" />
              <span className="text-[11px] font-sans font-bold text-[#004D40] dark:text-[#10B981] tracking-widest uppercase">Verified Ledger</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-serif font-medium text-[#1A1A1A] dark:text-white leading-[1.05] tracking-tight mb-8">
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004D40] to-[#047857] dark:from-[#10B981] dark:to-[#34D399] italic">real math</span> behind every money decision.
            </h1>
            <p className="text-xl text-[#4A4A4A] dark:text-[#9CA3AF] leading-relaxed mb-10 max-w-lg font-sans border-l-[3px] border-[#004D40]/30 dark:border-[#10B981]/30 pl-6 py-1">
              Fermor runs the numbers your bank won't show you — clearly, for free, with the formula included.
            </p>
            
            <ul className="space-y-4 font-sans text-[15px] mb-12">
              {[
                { text: "No commission, ever", icon: "✓" },
                { text: "Independent & unbiased", icon: "✓" },
                { text: "Built for India 🇮🇳", icon: "✓" }
              ].map((item, idx) => (
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  key={item.text} 
                  className="flex items-center gap-4 text-[#1A1A1A] dark:text-[#E5E7EB]"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#004D40]/10 dark:bg-[#10B981]/10 text-[#004D40] dark:text-[#10B981] text-xs font-bold">{item.icon}</span>
                  <span className="font-medium text-[#4A4A4A] dark:text-[#9CA3AF]">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button 
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] px-8 py-4 rounded-lg font-sans font-medium hover:bg-[#004D40] dark:hover:bg-[#10B981] dark:hover:text-white transition-colors shadow-xl shadow-[#1A1A1A]/10 dark:shadow-none group"
            >
              Explore all 25+ calculators
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right SIP Calculator (Ultra-Premium Neat Passbook Style) */}
          <motion.div 
            id="calculator"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 w-full max-w-md mx-auto lg:ml-auto relative perspective-1000"
          >
            {/* The Passbook Container */}
            <div className="flex bg-white dark:bg-[#1A1A1A] rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),_0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden relative z-10 transition-transform duration-500 hover:rotate-y-2 hover:shadow-[0_30px_70px_-20px_rgba(0,77,64,0.15)] dark:hover:shadow-[0_30px_70px_-20px_rgba(16,185,129,0.15)]">
              
              {/* Refined Spine / Binding */}
              <div className="w-12 shrink-0 bg-[#F8FAFC] dark:bg-[#111] border-r border-[#E2E8F0] dark:border-[#333] flex flex-col justify-evenly py-6 items-center shadow-[inset_-2px_0_4px_rgba(0,0,0,0.02)] z-20">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] dark:bg-[#444] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)] dark:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1)]" />
                ))}
              </div>

              {/* Passbook Content */}
              <div className="flex-1 flex flex-col">
                
                {/* Header */}
                <div className="px-8 py-6 border-b border-[#F1F5F9] dark:border-[#333] bg-white dark:bg-[#1A1A1A] flex justify-between items-start">
                  <div>
                    <h2 className="font-serif font-bold text-2xl text-[#1A1A1A] dark:text-white tracking-tight">SIP Ledger</h2>
                    <p className="text-[10px] text-[#94A3B8] dark:text-[#6B7280] mt-1 font-mono uppercase tracking-widest font-semibold">Entry No: 409-A</p>
                  </div>
                  <button 
                    onClick={() => setShowFormula(!showFormula)}
                    className="w-8 h-8 rounded-full border border-[#E2E8F0] dark:border-[#444] bg-[#F8FAFC] dark:bg-[#222] flex items-center justify-center text-[#64748B] dark:text-[#9CA3AF] hover:bg-[#004D40] dark:hover:bg-[#10B981] hover:text-white dark:hover:text-white hover:border-[#004D40] dark:hover:border-[#10B981] transition-colors shadow-sm"
                  >
                    <Info size={16} />
                  </button>
                </div>
                
                {/* Ledger Body */}
                <div className="p-8 space-y-8 bg-white dark:bg-[#1A1A1A] relative z-10">
                  {/* Subtle watermarked grid lines inside */}
                  <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, #F1F5F9 39px, #F1F5F9 40px)', backgroundPosition: '0 16px' }}></div>
                  
                  {/* Inputs */}
                  <div className="space-y-8 relative z-20">
                    <Slider 
                      label="Monthly Investment" 
                      min={500} max={100000} step={500} 
                      value={monthlyAmount} 
                      onChange={(e: any) => setMonthlyAmount(Number(e.target.value))} 
                      displayValue={formatCurrency(monthlyAmount)} 
                    />
                    <Slider 
                      label="Duration" 
                      min={1} max={30} step={1} 
                      value={years} 
                      onChange={(e: any) => setYears(Number(e.target.value))} 
                      displayValue={`${years} Yrs`} 
                    />
                    <Slider 
                      label="Expected Return" 
                      min={1} max={30} step={1} 
                      value={returnRate} 
                      onChange={(e: any) => setReturnRate(Number(e.target.value))} 
                      displayValue={`${returnRate}%`} 
                    />
                  </div>

                  {/* Clean Visual Bar */}
                  <div className="pt-6 relative z-20">
                    <div className="h-2 w-full bg-[#F1F5F9] dark:bg-[#333] rounded-full overflow-hidden flex shadow-inner">
                      <motion.div 
                        layout
                        style={{ width: `${investedPercent}%` }} 
                        className="bg-[#94A3B8] dark:bg-[#4B5563] h-full" 
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      />
                      <motion.div 
                        layout
                        style={{ width: `${returnsPercent}%` }} 
                        className="bg-[#004D40] dark:bg-[#10B981] h-full relative overflow-hidden" 
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      >
                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2.5s_infinite]" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Neat Totals */}
                  <div className="pt-6 relative z-20">
                    <div className="flex justify-between items-baseline mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] dark:bg-[#4B5563]"></div>
                        <span className="text-[11px] font-medium text-[#64748B] dark:text-[#9CA3AF] uppercase tracking-wider">Invested</span>
                      </div>
                      <motion.span key={invested} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-mono text-[#4A4A4A] dark:text-[#D1D5DB]">
                        {formatCurrency(invested)}
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-baseline pb-5 border-b border-[#E2E8F0] dark:border-[#333] mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#004D40] dark:bg-[#10B981]"></div>
                        <span className="text-[11px] font-medium text-[#64748B] dark:text-[#9CA3AF] uppercase tracking-wider">Est. Returns</span>
                      </div>
                      <motion.span key={returns} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-mono font-medium text-[#004D40] dark:text-[#10B981]">
                        +{formatCurrency(returns)}
                      </motion.span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#94A3B8] dark:text-[#6B7280]">Total Future Value</span>
                      <motion.span 
                        key={totalValue}
                        initial={{ scale: 0.95, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="text-3xl font-serif text-[#1A1A1A] dark:text-white"
                      >
                        {formatCurrency(totalValue)}
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Formula Expansion (Clean Slide Down) */}
                <AnimatePresence>
                  {showFormula && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-[#F8FAFC] dark:bg-[#111] border-t border-[#E2E8F0] dark:border-[#333] overflow-hidden"
                    >
                      <div className="px-8 py-6 font-mono text-sm">
                        <p className="text-[#004D40] dark:text-[#10B981] mb-3 uppercase tracking-widest text-[10px] font-bold">Mathematical Proof</p>
                        <div className="bg-white dark:bg-[#1A1A1A] p-3 rounded border border-[#E2E8F0] dark:border-[#444] mb-4 shadow-sm text-center">
                          <code className="text-[#1A1A1A] dark:text-[#E5E7EB] font-semibold text-xs">
                            M = P × ({'{'}[1 + i]^n - 1{'}'} / i) × (1 + i)
                          </code>
                        </div>
                        <ul className="space-y-2 text-[#64748B] dark:text-[#9CA3AF] text-[11px]">
                          <li className="flex justify-between pb-1 border-b border-[#E2E8F0] dark:border-[#444] border-dashed">
                            <span>P (Monthly)</span> <span className="text-[#1A1A1A] dark:text-[#E5E7EB]">₹{monthlyAmount}</span>
                          </li>
                          <li className="flex justify-between pb-1 border-b border-[#E2E8F0] dark:border-[#444] border-dashed">
                            <span>i (Monthly Rate)</span> <span className="text-[#1A1A1A] dark:text-[#E5E7EB]">{returnRate}% / 12 / 100</span>
                          </li>
                          <li className="flex justify-between">
                            <span>n (Months)</span> <span className="text-[#1A1A1A] dark:text-[#E5E7EB]">{years} × 12</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
