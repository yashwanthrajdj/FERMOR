import { motion } from 'framer-motion';
import { Shield, BookOpen, PenTool } from 'lucide-react';

export default function AboutSection() {
  const principles = [
    {
      icon: BookOpen,
      title: "Open Ledger Math",
      desc: "We don't hide behind 'smart algorithms'. If we tell you a number, we show you the exact formula we used to calculate it."
    },
    {
      icon: Shield,
      title: "Zero Commission",
      desc: "We have no products to sell. No mutual fund ties. We just provide the raw math so you can make decisions independently."
    },
    {
      icon: PenTool,
      title: "Engineered for India",
      desc: "Built in Bengaluru. We natively support Indian tax brackets, EPF, PPF structures, and rupee crore/lakh formatting."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-[#1A1A1A] relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#333] to-transparent" />
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#004D40 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#004D40] dark:bg-[#10B981]" />
              <span className="text-xs font-mono font-bold text-[#004D40] dark:text-[#10B981] tracking-widest uppercase">The Firm</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#1A1A1A] dark:text-[#E5E7EB] leading-[1.1] mb-8">
              A financial firm built on <span className="italic text-[#004D40] dark:text-[#10B981]">radical transparency.</span>
            </h2>
            
            <div className="space-y-6 text-[#4A4A4A] dark:text-[#9CA3AF] font-sans text-lg">
              <p>
                Fermor was created because the financial internet is broken. Bank websites are designed as sales funnels, and independent calculators are littered with affiliate links.
              </p>
              <p>
                We believe that financial independence starts with independent math. We are not SEBI-registered advisers. We don't tell you what to buy. We simply build the most precise, transparent, and fluid calculators in the Indian market.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#E2E8F0] dark:border-[#333] overflow-hidden">
                <img src="https://api.dicebear.com/7.x/initials/svg?seed=FR&backgroundColor=004D40&textColor=ffffff" alt="Fermor Team" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-serif font-bold text-[#1A1A1A] dark:text-[#E5E7EB]">Team Fermor</p>
                <p className="font-mono text-xs text-[#94A3B8] dark:text-[#6B7280] uppercase tracking-wider">Bengaluru, India</p>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 w-full">
            <div className="grid gap-6">
              {principles.map((p, idx) => (
                <motion.div 
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="bg-[#FAF9F6] dark:bg-[#121212] border border-[#E2E8F0] dark:border-[#333] p-6 rounded-xl flex gap-6 group hover:border-[#004D40] dark:hover:border-[#10B981] transition-colors shadow-sm hover:shadow-md dark:shadow-none"
                >
                  <div className="shrink-0 w-12 h-12 bg-white dark:bg-[#1E1E1E] rounded-full border border-[#E2E8F0] dark:border-[#444] flex items-center justify-center text-[#004D40] dark:text-[#10B981] group-hover:scale-110 group-hover:bg-[#004D40] dark:group-hover:bg-[#10B981] group-hover:text-white dark:group-hover:text-white transition-all duration-300">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#1A1A1A] dark:text-[#E5E7EB] mb-2">{p.title}</h3>
                    <p className="font-sans text-sm text-[#64748B] dark:text-[#9CA3AF] leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
