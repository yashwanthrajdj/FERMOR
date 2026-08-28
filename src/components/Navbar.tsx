import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold text-[#1A1A1A] tracking-tight">Fermor.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#4A4A4A] hover:text-[#1A1A1A] text-sm font-medium transition-colors">Calculators</a>
            <a href="#" className="text-[#4A4A4A] hover:text-[#1A1A1A] text-sm font-medium transition-colors">Analysis</a>
            <a href="#" className="text-[#4A4A4A] hover:text-[#1A1A1A] text-sm font-medium transition-colors">About</a>
            <a href="#" className="text-[#4A4A4A] hover:text-[#1A1A1A] text-sm font-medium transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center">
            <a href="#" className="bg-[#004D40] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[#00382E] transition-colors shadow-sm">
              Get started — it's free
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1A1A1A] p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E5E5E5] px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <a href="#" className="block text-[#1A1A1A] font-medium text-lg">Calculators</a>
          <a href="#" className="block text-[#1A1A1A] font-medium text-lg">Analysis</a>
          <a href="#" className="block text-[#1A1A1A] font-medium text-lg">About</a>
          <a href="#" className="block text-[#1A1A1A] font-medium text-lg">Contact</a>
          <div className="pt-4">
            <a href="#" className="block w-full text-center bg-[#004D40] text-white px-5 py-3 rounded font-medium">
              Get started — it's free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
