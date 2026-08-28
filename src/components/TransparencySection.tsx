export default function TransparencySection() {
  return (
    <section className="py-24 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] font-medium leading-[1.2] mb-6">
              No black-box numbers.<br/>Every result shows its formula.
            </h2>
            <p className="text-lg text-[#4A4A4A] font-sans leading-relaxed mb-8">
              Banks and sales platforms love to show you a single "magic" number without explaining how they got there. We believe that if you don't understand the math, you shouldn't trust the result.
            </p>
            <div className="inline-flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <span className="text-[#004D40] font-medium font-sans">01</span>
                <p className="text-[#1A1A1A] font-sans">Clear assumptions up front (inflation rates, tax brackets).</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#004D40] font-medium font-sans">02</span>
                <p className="text-[#1A1A1A] font-sans">Step-by-step breakdown of the calculation.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#004D40] font-medium font-sans">03</span>
                <p className="text-[#1A1A1A] font-sans">The actual mathematical formula used.</p>
              </div>
            </div>
          </div>

          {/* Side-by-side comparison */}
          <div className="bg-[#FAF9F6] p-6 sm:p-8 border border-[#E5E5E5] rounded">
            
            <div className="mb-6 pb-6 border-b border-[#E5E5E5] opacity-50 grayscale">
              <p className="text-xs font-sans text-[#737373] uppercase tracking-wide mb-3">Typical Bank Site</p>
              <div className="bg-white border border-[#E5E5E5] p-4 rounded flex items-center justify-between">
                <span className="font-sans text-sm text-[#4A4A4A]">You'll need</span>
                <span className="font-sans font-bold text-lg text-[#1A1A1A] tabular-nums">₹1,50,00,000</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-sans text-[#004D40] font-medium uppercase tracking-wide mb-3">Fermor's Output</p>
              <div className="bg-white border border-[#004D40] p-5 rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-sm text-[#4A4A4A] font-medium">Corpus required</span>
                  <span className="font-serif font-medium text-2xl text-[#1A1A1A] tabular-nums">₹1,48,65,200</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs font-sans text-[#737373]">
                    <span>Monthly expenses</span>
                    <span className="tabular-nums text-[#1A1A1A]">₹40,000</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-[#737373]">
                    <span>Inflation rate</span>
                    <span className="tabular-nums text-[#1A1A1A]">6% p.a.</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-[#737373]">
                    <span>Years to retirement</span>
                    <span className="tabular-nums text-[#1A1A1A]">15 Yrs</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E5E5]">
                  <code className="text-[11px] font-mono text-[#737373] block bg-[#FAF9F6] p-2 rounded">
                    FV = P × (1 + r)^n<br/>
                    FV = 40000 × (1 + 0.06)^15 = ₹95,862
                  </code>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
