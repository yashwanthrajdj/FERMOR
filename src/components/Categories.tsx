import { 
  LineChart, Home, FileText, PiggyBank, 
  ShieldAlert, CreditCard, Landmark, Briefcase 
} from 'lucide-react';

const categories = [
  { name: 'Investing', icon: LineChart, count: 8 },
  { name: 'Home Loans', icon: Home, count: 4 },
  { name: 'Income Tax', icon: FileText, count: 5 },
  { name: 'Retirement', icon: PiggyBank, count: 3 },
  { name: 'Insurance', icon: ShieldAlert, count: 2 },
  { name: 'Credit Cards', icon: CreditCard, count: 2 },
  { name: 'Banking', icon: Landmark, count: 6 },
  { name: 'SME Finance', icon: Briefcase, count: 3 },
];

export default function Categories() {
  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-serif text-[#1A1A1A] font-medium mb-3">What are you planning?</h2>
          <p className="text-lg text-[#737373] font-sans">Find the exact math you need for your next money move.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a 
                key={cat.name} 
                href="#" 
                className="group flex flex-col items-start p-6 bg-white border border-[#E5E5E5] rounded hover:border-[#004D40] transition-colors"
              >
                <Icon size={28} className="text-[#1A1A1A] mb-4 group-hover:text-[#004D40] transition-colors" strokeWidth={1.5} />
                <h3 className="font-sans font-medium text-[#1A1A1A] mb-1">{cat.name}</h3>
                <span className="text-sm text-[#737373] tabular-nums font-sans">{cat.count} calculators</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
