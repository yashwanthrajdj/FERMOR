import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import LifeStages from './components/LifeStages';
import AppShowcase from './components/AppShowcase';
import PlanWisely from './components/PlanWisely';
import ToolsGrid from './components/ToolsGrid';
import StatsSection from './components/StatsSection';
import Analysis from './components/Analysis';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <LifeStages />
        <AppShowcase />
        <PlanWisely />
        <ToolsGrid />
        <StatsSection />
        <Analysis />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
