import { ArrowRight } from 'lucide-react';

export default function ComparisonStrip() {
  return (
    <section className="py-24 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] font-medium mb-4">
            We show ranges, not picks
          </h2>
          <p className="text-lg text-[#4A4A4A] font-sans">
            "Top 5 Mutual Funds" lists are usually paid placements. We show you the actual historical ranges across the market so you can set realistic expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="border border-[#E5E5E5] p-6 rounded bg-[#FAF9F6]">
            <h3 className="font-sans font-medium text-[#1A1A1A] mb-4 text-lg">Large Cap Equity</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-sans text-[#737373] mb-1">Historical 10Y Return Range</p>
                <div className="flex items-end gap-2">
                  <span className="font-serif text-2xl text-[#1A1A1A] tabular-nums">11.2%</span>
                  <span className="text-[#737373] pb-1">—</span>
                  <span className="font-serif text-2xl text-[#1A1A1A] tabular-nums">14.8%</span>
                </div>
              </div>
              <div className="w-full h-1 bg-[#E5E5E5] rounded-full relative">
                <div className="absolute left-[30%] right-[20%] h-full bg-[#004D40] opacity-80 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="border border-[#E5E5E5] p-6 rounded bg-[#FAF9F6]">
            <h3 className="font-sans font-medium text-[#1A1A1A] mb-4 text-lg">Bank Fixed Deposits</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-sans text-[#737373] mb-1">Current 1Y Rate Range</p>
                <div className="flex items-end gap-2">
                  <span className="font-serif text-2xl text-[#1A1A1A] tabular-nums">6.5%</span>
                  <span className="text-[#737373] pb-1">—</span>
                  <span className="font-serif text-2xl text-[#1A1A1A] tabular-nums">7.4%</span>
                </div>
              </div>
              <div className="w-full h-1 bg-[#E5E5E5] rounded-full relative">
                <div className="absolute left-[10%] right-[60%] h-full bg-[#4A4A4A] opacity-80 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="border border-[#E5E5E5] p-6 rounded bg-[#FAF9F6]">
            <h3 className="font-sans font-medium text-[#1A1A1A] mb-4 text-lg">Home Loans</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-sans text-[#737373] mb-1">Current Interest Rate Range</p>
                <div className="flex items-end gap-2">
                  <span className="font-serif text-2xl text-[#1A1A1A] tabular-nums">8.3%</span>
                  <span className="text-[#737373] pb-1">—</span>
                  <span className="font-serif text-2xl text-[#1A1A1A] tabular-nums">9.1%</span>
                </div>
              </div>
              <div className="w-full h-1 bg-[#E5E5E5] rounded-full relative">
                <div className="absolute left-[40%] right-[30%] h-full bg-[#1A1A1A] opacity-80 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-[#004D40] font-sans font-medium hover:text-[#00382E] transition-colors">
            Compare historical data <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
