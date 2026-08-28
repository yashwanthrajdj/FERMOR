import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function HealthScoreCircle({ score }: { score: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <svg width="130" height="130" viewBox="0 0 130 130" className="mx-auto">
      <circle cx="65" cy="65" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="10" />
      <circle
        cx="65"
        cy="65"
        r={radius}
        fill="none"
        stroke="#06b6d4"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        transform="rotate(-90 65 65)"
        className="transition-all duration-1000 ease-out"
      />
      <text x="65" y="60" textAnchor="middle" className="fill-cyan-600 text-3xl font-extrabold" fontSize="36" fontWeight="800">
        {score}
      </text>
      <text x="65" y="80" textAnchor="middle" className="fill-slate-400 text-xs" fontSize="13">
        /100
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50/80 via-white to-slate-50/50">
      {/* Decorative orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-300/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white border border-cyan-100 rounded-full px-4 py-1.5 mb-6 shadow-sm"
            >
              <span className="bg-cyan-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                New
              </span>
              <span className="text-sm font-medium text-slate-600">
                Financial Health Score — now in the app
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              Smart financial{' '}
              <br className="hidden sm:block" />
              decisions start{' '}
              <br className="hidden sm:block" />
              with{' '}
              <span className="relative inline-block text-cyan-600">
                Fermor
                <svg
                  viewBox="0 0 280 14"
                  preserveAspectRatio="none"
                  className="absolute left-0 -bottom-1 w-full h-3"
                >
                  <path
                    d="M3 10C70 3 210 2 277 8"
                    stroke="#22d3ee"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Clarity for every financial decision. Tools, insights and products that help you
              understand, plan and grow your money — all in one place, built for India.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#cta"
                className="bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/35 hover:bg-cyan-700 transition-all duration-200 text-center"
              >
                Get started — it's free
              </a>
              <a
                href="#calculators"
                className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold text-base hover:border-cyan-400 hover:text-cyan-600 transition-all duration-200 text-center"
              >
                Explore tools →
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start">
              {[
                'Independent & unbiased',
                'No commission, ever',
                'Made for India 🇮🇳',
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Check size={16} className="text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — App Mockup Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-sm"
            >
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-cyan-400/20 rounded-3xl blur-2xl scale-110" />

              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl shadow-cyan-900/10 p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-slate-400 text-xs font-medium">9:41</p>
                    <p className="text-slate-900 font-bold text-lg mt-1">Good morning, Arjun 👋</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <span className="text-cyan-700 font-bold text-sm">A</span>
                  </div>
                </div>

                {/* Health Score */}
                <div className="bg-gradient-to-br from-cyan-50 to-slate-50 rounded-2xl p-5 mb-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Financial Health</p>
                  <HealthScoreCircle score={82} />
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      ↑ 6 this month
                    </span>
                    <span className="text-xs font-extrabold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded-full">
                      A+
                    </span>
                  </div>
                </div>

                {/* Cash Flow */}
                <div className="bg-white rounded-xl border border-slate-100 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-400">Net monthly cash flow</span>
                    <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">Healthy</span>
                  </div>
                  <p className="text-2xl font-extrabold text-emerald-600">+₹18,420</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-xs text-slate-400">
                      Income <span className="font-semibold text-slate-600">₹46,000</span>
                    </span>
                    <span className="text-xs text-slate-400">
                      Spend <span className="font-semibold text-slate-600">₹35,420</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-cyan-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-slate-500 font-medium">Investing</p>
                    <p className="text-sm font-bold text-cyan-700 mt-0.5">12.4% CAGR</p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-slate-500 font-medium">Tax saved</p>
                    <p className="text-sm font-bold text-emerald-700 mt-0.5">₹46,800</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
