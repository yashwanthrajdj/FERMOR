import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const startTime = performance.now();

          function animate(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 12, suffix: '+', label: 'money categories covered' },
  { value: 25, suffix: '+', label: 'free calculators & tools' },
  { value: 100, suffix: '%', label: 'independent — no commission' },
  { emoji: '🇮🇳', label: 'built for India, in ₹' },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {stat.emoji ? (
                  <span className="text-4xl sm:text-5xl">{stat.emoji}</span>
                ) : (
                  <AnimatedNumber target={stat.value!} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-cyan-100 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
