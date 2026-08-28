import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    tag: 'Income Tax',
    tagColor: 'bg-cyan-50 text-cyan-700',
    date: 'Updated Jul 27, 2026',
    title: 'ITR Filing Last Date FY 2025-26: July 31, August 31 & October 31 Deadlines',
    excerpt:
      'July 31 for ITR-1/ITR-2, August 31 for non-audit business income, October 31 for audit cases. No extension has been announced.',
    featured: true,
  },
  {
    tag: 'Banking',
    tagColor: 'bg-emerald-50 text-emerald-700',
    date: 'Jul 20, 2026',
    title: 'RBI Financial Product Mis-Selling Rules: What Banks Must Now Do',
    excerpt: 'New consumer protection guidelines for financial product distribution.',
  },
  {
    tag: 'Markets',
    tagColor: 'bg-amber-50 text-amber-700',
    date: 'Jul 18, 2026',
    title: "TMPV Share Price Falls 10%: What JLR's FY27 Guidance Means for Investors",
    excerpt: 'Analysis of Tata Motors passenger vehicle business and outlook.',
  },
];

export default function Analysis() {
  return (
    <section id="analysis" className="py-20 lg:py-28 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.16em] uppercase text-cyan-700 mb-4">
              <span className="w-8 h-0.5 bg-cyan-500 rounded-full" />
              Analysis
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              When it matters to your portfolio.
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors"
          >
            All analysis
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-7 sm:p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${articles[0].tagColor}`}>
                  {articles[0].tag}
                </span>
                <span className="text-xs text-slate-400">{articles[0].date}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {articles[0].title}
              </h3>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">{articles[0].excerpt}</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 mt-6 text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors"
            >
              Read
              <ArrowRight size={15} />
            </a>
          </motion.article>

          {/* Side cards */}
          <div className="flex flex-col gap-6">
            {articles.slice(1).map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-shadow duration-300 flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${article.tagColor}`}>
                      {article.tag}
                    </span>
                    <span className="text-xs text-slate-400">{article.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {article.title}
                  </h3>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 mt-4 text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors"
                >
                  Read
                  <ArrowRight size={15} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
