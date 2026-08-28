import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-teal-500/8 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Start making smarter money decisions today.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
          Join the Fermor community and get clarity on every rupee — free to start, no commission, no jargon.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 transition-all duration-200"
          >
            Explore free calculators
          </a>
          <a
            href="#"
            className="border border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-semibold text-base hover:border-cyan-500 hover:text-white transition-all duration-200"
          >
            Learn about Fermor
          </a>
        </div>
      </motion.div>
    </section>
  );
}
