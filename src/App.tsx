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

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#004D40] selection:text-white">
      <Navbar />
      <main>
        <Hero />
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
