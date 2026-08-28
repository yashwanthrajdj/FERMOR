export default function StatsBar() {
  const stats = [
    { value: '25+', label: 'Free calculators' },
    { value: '12+', label: 'Money categories' },
    { value: '100%', label: 'Independent, no commission' },
    { value: '🇮🇳', label: 'Built for India' },
  ];

  return (
    <section className="py-12 bg-[#1A1A1A] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center text-center ${index === 0 ? '' : 'pl-8'}`}>
              <span className="font-serif text-3xl text-white tabular-nums tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="font-sans text-sm text-[#A3A3A3]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
