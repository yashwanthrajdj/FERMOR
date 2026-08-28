export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif text-[#1A1A1A] font-medium mb-6">
          Ready to run your own numbers?
        </h2>
        <p className="text-xl text-[#4A4A4A] font-sans mb-10">
          See the math behind your financial decisions. Completely free, no commission, ever.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#" className="w-full sm:w-auto bg-[#004D40] text-white px-8 py-4 rounded font-sans font-medium hover:bg-[#00382E] transition-colors shadow-sm text-lg">
            Explore free calculators
          </a>
          <a href="#" className="w-full sm:w-auto text-[#1A1A1A] font-sans font-medium hover:text-[#004D40] transition-colors text-lg">
            Learn about Fermor
          </a>
        </div>
      </div>
    </section>
  );
}
