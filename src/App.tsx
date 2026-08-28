import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import TransparencySection from './components/TransparencySection';
import DashboardPreview from './components/DashboardPreview';
import ComparisonStrip from './components/ComparisonStrip';
import StatsBar from './components/StatsBar';
import AnalysisTeaser from './components/AnalysisTeaser';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#121212] text-[#1A1A1A] dark:text-white font-sans selection:bg-[#004D40] dark:selection:bg-[#10B981] selection:text-white pb-24 md:pb-0 relative transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Categories />
        <TransparencySection />
        <DashboardPreview />
        <ComparisonStrip />
        <StatsBar />
        <AnalysisTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
