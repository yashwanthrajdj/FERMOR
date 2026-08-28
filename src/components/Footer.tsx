import { motion } from 'framer-motion';
import { Mail, Globe, MessageCircle } from 'lucide-react';

const navigation = [
  { title: 'Home', href: '/' },
  { title: 'Calculators', href: '#calculators' },
  { title: 'Analysis', href: '#analysis' },
  { title: 'About', href: '#' },
  { title: 'Contact', href: '#' },
];

const calculators = [
  'SIP Calculator',
  'Capital Gains',
  'EMI Calculator',
  'PPF Calculator',
  'FD Calculator',
  'NPS Calculator',
  'Home Loan',
  'Goal Planning',
];

const resources = [
  'Gold Rate Today',
  'Gold Rate by City',
  'GDP by Country',
  'Tax Guides',
  'Credit Cards',
  'Gratuity Calc',
  'SWP Calc',
];

const company = [
  'About Us',
  'Contact',
  'Privacy Policy',
  'Terms of Service',
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cyan-600 flex items-center justify-center">
                <span className="text-white font-extrabold text-lg leading-none">F</span>
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">Fermor</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Fermor is a financial education and calculator service for India. We help you run
              the math and compare options — clearly and without commission.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[MessageCircle, Globe, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                >
                  <Icon size={17} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Calculators
            </h4>
            <ul className="space-y-2">
              {calculators.map((calc) => (
                <li key={calc}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {calc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((res) => (
                <li key={res}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {res}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Fermor Technologies Pvt. Ltd.
          </p>
          <p className="text-slate-600 text-xs text-center sm:text-right">
            Not a SEBI-registered adviser. Educational use only.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
