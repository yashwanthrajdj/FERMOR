import { ArrowRight } from 'lucide-react';

export default function AnalysisTeaser() {
  return (
    <section className="py-24 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-[#1A1A1A] font-medium mb-3">Latest analysis</h2>
            <p className="text-lg text-[#737373] font-sans">Updates, formulas, and deep dives into the math.</p>
          </div>
          <a href="#" className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-[#004D40] font-sans font-medium hover:text-[#00382E] transition-colors">
            View all articles <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <a href="#" className="group block border border-[#E5E5E5] rounded p-6 hover:border-[#004D40] transition-colors bg-[#FAF9F6]">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans text-xs text-[#004D40] font-medium uppercase tracking-wide">Taxation</span>
              <span className="font-sans text-xs text-[#737373] tabular-nums">July 15, 2026</span>
            </div>
            <h3 className="text-xl font-serif text-[#1A1A1A] font-medium mb-3 group-hover:text-[#004D40] transition-colors">
              New Tax Regime vs Old: The exact math for the ₹12–15L bracket
            </h3>
            <p className="text-[#4A4A4A] font-sans line-clamp-2">
              Before you file your ITR, we broke down the break-even points. Find out exactly how many deductions you need for the old regime to make mathematical sense this year.
            </p>
          </a>

          <a href="#" className="group block border border-[#E5E5E5] rounded p-6 hover:border-[#004D40] transition-colors bg-[#FAF9F6]">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans text-xs text-[#004D40] font-medium uppercase tracking-wide">Interest Rates</span>
              <span className="font-sans text-xs text-[#737373] tabular-nums">July 02, 2026</span>
            </div>
            <h3 className="text-xl font-serif text-[#1A1A1A] font-medium mb-3 group-hover:text-[#004D40] transition-colors">
              Why prepaying your home loan early matters exponentially
            </h3>
            <p className="text-[#4A4A4A] font-sans line-clamp-2">
              An amortization schedule reveals why a 5% prepayment in year 2 saves you significantly more interest than a 15% prepayment in year 10. Here is the formula and proof.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}
