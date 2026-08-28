import { motion } from 'framer-motion';
import { LineChart, Landmark, FileText, PiggyBank, ShieldAlert, BookOpen, ArrowRight } from 'lucide-react';

const tools = [
  { 
    id: 'investing', 
    title: 'Investing', 
    desc: 'SIPs · funds · stocks', 
    icon: LineChart,
    color: 'from-blue-500/10 to-blue-500/5 dark:from-blue-400/20 dark:to-blue-400/5',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  { 
    id: 'banking', 
    title: 'Banking', 
    desc: 'Savings · FD · RD rates', 
    icon: Landmark,
    color: 'from-emerald-500/10 to-emerald-500/5 dark:from-emerald-400/20 dark:to-emerald-400/5',
    iconColor: 'text-emerald-600 dark:text-emerald-400'
  },
  { 
    id: 'tax', 
    title: 'Tax & Salary', 
    desc: 'Regimes · CTC · 80C', 
    icon: FileText,
    color: 'from-purple-500/10 to-purple-500/5 dark:from-purple-400/20 dark:to-purple-400/5',
    iconColor: 'text-purple-600 dark:text-purple-400'
  },
  { 
    id: 'retirement', 
    title: 'Retirement', 
    desc: 'NPS · PPF · EPF', 
    icon: PiggyBank,
    color: 'from-orange-500/10 to-orange-500/5 dark:from-orange-400/20 dark:to-orange-400/5',
    iconColor: 'text-orange-600 dark:text-orange-400'
  },
  { 
    id: 'insurance', 
    title: 'Insurance', 
    desc: 'Term · health cover', 
    icon: ShieldAlert,
    color: 'from-rose-500/10 to-rose-500/5 dark:from-rose-400/20 dark:to-rose-400/5',
    iconColor: 'text-rose-600 dark:text-rose-400'
  },
  { 
    id: 'learning', 
    title: 'Learning', 
    desc: 'Guides · glossary · insights', 
    icon: BookOpen,
    color: 'from-indigo-500/10 to-indigo-500/5 dark:from-indigo-400/20 dark:to-indigo-400/5',
    iconColor: 'text-indigo-600 dark:text-indigo-400'
  },
];

export default function AllInOne() {
  return (
    <section className="py-32 bg-white dark:bg-[#0A0A0A] border-b border-[#E5E5E5] dark:border-[#333] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Sticky Content */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#004D40]/20 dark:border-[#10B981]/30 bg-[#004D40]/5 dark:bg-[#10B981]/10 mb-8 backdrop-blur-sm">
                  <span className="text-xs font-bold text-[#004D40] dark:text-[#10B981] tracking-wide uppercase">All-in-one</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] dark:text-white font-medium leading-[1.1] mb-6">
                  Every money tool, in one place.
                </h2>
                
                <p className="text-lg md:text-xl text-[#737373] dark:text-[#9CA3AF] font-sans leading-relaxed mb-8">
                  Investing, banking, taxes, retirement and more — one platform that keeps everything about your money easy, clear and always in your control.
                </p>

                <a href="#" className="hidden lg:inline-flex items-center gap-2 text-[#004D40] dark:text-[#10B981] font-bold font-sans hover:gap-4 transition-all">
                  Explore platform <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Bento Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {tools.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative bg-[#FAF9F6] dark:bg-[#121212] rounded-3xl p-8 border border-[#E5E5E5] dark:border-[#333] hover:border-[#004D40]/30 dark:hover:border-[#10B981]/50 transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-sm flex items-center justify-center mb-8 border border-[#E5E5E5] dark:border-[#333] group-hover:scale-110 transition-transform duration-500 ${tool.iconColor}`}>
                        <Icon size={26} strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="text-2xl font-serif text-[#1A1A1A] dark:text-white mb-2">
                        {tool.title}
                      </h3>
                      <p className="text-base text-[#737373] dark:text-[#9CA3AF] font-mono">
                        {tool.desc}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[#1A1A1A] dark:text-white">
                      <ArrowRight size={16} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <a href="#" className="lg:hidden mt-8 inline-flex items-center gap-2 text-[#004D40] dark:text-[#10B981] font-bold font-sans hover:gap-4 transition-all">
              Explore platform <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
