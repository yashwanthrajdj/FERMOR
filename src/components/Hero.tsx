import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function Hero() {
  const [monthlyAmount, setMonthlyAmount] = useState(10000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);
  const [invested, setInvested] = useState(0);
  const [returns, setReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // SIP Formula: M = P × ({[1 + i]^n - 1} / i) × (1 + i)
    // P = monthly amount
    // i = monthly interest rate = (returnRate / 100) / 12
    // n = total number of months = years * 12
    
    const P = monthlyAmount;
    const i = (returnRate / 100) / 12;
    const n = years * 12;
    
    const totalInvested = P * n;
    
    // Using standard SIP future value formula
    let maturityValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    
    if (returnRate === 0) {
      maturityValue = totalInvested;
    }

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
    <section className="pt-16 pb-24 border-b border-[#E5E5E5] bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-serif font-medium text-[#1A1A1A] leading-[1.05] tracking-tight mb-6">
              See the real math behind every money decision.
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed mb-10 max-w-lg font-sans">
              Fermor runs the numbers your bank won't show you — clearly, for free, with the formula included.
            </p>
            
            <ul className="space-y-4 font-sans">
              {[
                "No commission, ever",
                "Independent & unbiased",
                "Built for India 🇮🇳"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#1A1A1A] text-lg">
                  <div className="bg-[#004D40]/10 rounded-full p-1 text-[#004D40]">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right SIP Calculator */}
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:ml-auto shadow-sm rounded border border-[#E5E5E5] bg-white overflow-hidden">
            <div className="px-6 py-5 border-b border-[#E5E5E5] bg-[#F7F7F7]">
              <h2 className="font-sans font-semibold text-[#1A1A1A]">SIP Calculator</h2>
              <p className="text-sm text-[#737373] mt-1 font-sans">Calculate mutual fund returns</p>
            </div>
            
            <div className="p-6 space-y-6">
              
              {/* Sliders */}
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-[#4A4A4A]">Monthly investment</label>
                    <span className="tabular-nums font-semibold text-[#1A1A1A]">{formatCurrency(monthlyAmount)}</span>
                  </div>
                  <input 
                    type="range" min="500" max="100000" step="500" 
                    value={monthlyAmount} onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                    className="w-full h-1 bg-[#E5E5E5] rounded-full appearance-none cursor-pointer accent-[#004D40]" 
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-[#4A4A4A]">Time period</label>
                    <span className="tabular-nums font-semibold text-[#1A1A1A]">{years} Yrs</span>
                  </div>
                  <input 
                    type="range" min="1" max="30" step="1" 
                    value={years} onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-1 bg-[#E5E5E5] rounded-full appearance-none cursor-pointer accent-[#004D40]" 
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-[#4A4A4A]">Expected return</label>
                    <span className="tabular-nums font-semibold text-[#1A1A1A]">{returnRate}% p.a.</span>
                  </div>
                  <input 
                    type="range" min="1" max="30" step="1" 
                    value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full h-1 bg-[#E5E5E5] rounded-full appearance-none cursor-pointer accent-[#004D40]" 
                  />
                </div>
              </div>

              {/* Visual Bar */}
              <div className="pt-2">
                <div className="h-3 w-full bg-[#E5E5E5] rounded-full overflow-hidden flex">
                  <div style={{ width: `${investedPercent}%` }} className="bg-[#1A1A1A] h-full transition-all duration-300" />
                  <div style={{ width: `${returnsPercent}%` }} className="bg-[#004D40] h-full transition-all duration-300" />
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#1A1A1A]"></div>
                    <span className="text-xs text-[#737373]">Invested amount</span>
                  </div>
                  <div className="tabular-nums font-medium text-[#1A1A1A] text-lg">{formatCurrency(invested)}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#004D40]"></div>
                    <span className="text-xs text-[#737373]">Est. returns</span>
                  </div>
                  <div className="tabular-nums font-medium text-[#1A1A1A] text-lg">{formatCurrency(returns)}</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-[#E5E5E5]">
                 <span className="text-sm text-[#737373] block mb-1">Total future value</span>
                 <div className="tabular-nums font-serif text-3xl font-medium text-[#1A1A1A]">{formatCurrency(totalValue)}</div>
              </div>
            </div>
            <div className="bg-[#FAF9F6] border-t border-[#E5E5E5] px-6 py-3 text-xs text-[#737373] font-mono leading-relaxed">
              M = P × ({'{'}[1 + i]^n - 1{'}'} / i) × (1 + i)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
