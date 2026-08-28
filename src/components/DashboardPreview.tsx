import { useState, useEffect } from 'react';

const assets = [
  { label: 'Equity & Mutual Funds', value: 4500000, color: '#004D40' },
  { label: 'EPF & PPF', value: 2800000, color: '#4A4A4A' },
  { label: 'Real Estate', value: 8500000, color: '#1A1A1A' },
  { label: 'Bank Balances', value: 1200000, color: '#737373' }
];

export default function DashboardPreview() {
  const [animatedTotal, setAnimatedTotal] = useState(0);
  const targetTotal = assets.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    let current = 0;
    const increment = targetTotal / 50; // smooth counting
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetTotal) {
        setAnimatedTotal(targetTotal);
        clearInterval(timer);
      } else {
        setAnimatedTotal(current);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [targetTotal]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 bg-[#FAF9F6] dark:bg-[#121212] border-b border-[#E5E5E5] dark:border-[#333] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] dark:text-[#E5E7EB] font-medium mb-4">
            Everything in one view
          </h2>
          <p className="text-lg text-[#4A4A4A] dark:text-[#9CA3AF] font-sans">
            Connect your accounts or enter data manually. See your exact net worth across all asset classes, built specifically for the Indian financial ecosystem.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-[#1E1E1E] rounded-xl shadow-sm border border-[#E5E5E5] dark:border-[#333] p-8 transition-colors">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-6 border-b border-[#E5E5E5] dark:border-[#333]">
            <div>
              <p className="text-sm font-sans font-medium text-[#737373] dark:text-[#9CA3AF] uppercase tracking-wide mb-1">Total Net Worth</p>
              <h3 className="text-4xl sm:text-5xl font-serif text-[#1A1A1A] dark:text-white tabular-nums tracking-tight">
                {formatCurrency(animatedTotal)}
              </h3>
            </div>
            <div className="mt-4 sm:mt-0 text-right">
              <span className="inline-block bg-[#004D40]/10 dark:bg-[#10B981]/10 text-[#004D40] dark:text-[#10B981] text-sm font-sans font-medium px-3 py-1 rounded">
                +12.4% this year
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {assets.map((asset) => {
              const percentage = (asset.value / targetTotal) * 100;
              return (
                <div key={asset.label}>
                  <div className="flex justify-between font-sans mb-2">
                    <span className="text-[#1A1A1A] dark:text-[#E5E7EB] font-medium">{asset.label}</span>
                    <div className="text-right">
                      <span className="text-[#1A1A1A] dark:text-[#E5E7EB] tabular-nums font-medium block">{formatCurrency(asset.value)}</span>
                      <span className="text-xs text-[#737373] dark:text-[#9CA3AF] tabular-nums">{percentage.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-[#E5E5E5] dark:bg-[#333] h-1.5 rounded-full overflow-hidden">
                    <div 
                      style={{ width: `${percentage}%`, backgroundColor: asset.color }} 
                      className="h-full transition-all duration-1000 ease-out" 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
