export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-16 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-serif text-2xl font-bold text-white tracking-tight block mb-4">Fermor.</span>
            <p className="text-[#A3A3A3] font-sans text-sm max-w-sm leading-relaxed">
              Fermor is the finance site that shows its work. We provide independent, transparent calculators and tools built for the Indian market.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-sans font-medium mb-4">Calculators</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#A3A3A3] hover:text-white text-sm font-sans transition-colors">SIP & Mutual Funds</a></li>
              <li><a href="#" className="text-[#A3A3A3] hover:text-white text-sm font-sans transition-colors">Home Loan EMI</a></li>
              <li><a href="#" className="text-[#A3A3A3] hover:text-white text-sm font-sans transition-colors">Income Tax (New vs Old)</a></li>
              <li><a href="#" className="text-[#A3A3A3] hover:text-white text-sm font-sans transition-colors">PPF & EPF</a></li>
              <li><a href="#" className="text-[#A3A3A3] hover:text-white text-sm font-sans transition-colors">All Calculators →</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-sans font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#A3A3A3] hover:text-white text-sm font-sans transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#A3A3A3] hover:text-white text-sm font-sans transition-colors">Methodology</a></li>
              <li><a href="#" className="text-[#A3A3A3] hover:text-white text-sm font-sans transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#A3A3A3] hover:text-white text-sm font-sans transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[#737373] text-xs font-sans">
            © {new Date().getFullYear()} Fermor. Built in Bengaluru.
          </p>
          <p className="text-[#737373] text-xs font-sans font-medium italic">
            Not a SEBI-registered adviser. Educational use only.
          </p>
        </div>

      </div>
    </footer>
  );
}
