import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { OverviewSection } from './sections/OverviewSection';
import { CongressIXSection } from './sections/CongressIXSection';
import { CongressXSection } from './sections/CongressXSection';
import { MaritimeSection } from './sections/MaritimeSection';
import { ConclusionSection } from './sections/ConclusionSection';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-heritage-ivory text-heritage-dark font-sans selection:bg-heritage-red selection:text-white flex flex-col">
      {/* Sticky Header with Reading Progress Bar */}
      <Navbar />

      {/* Main Educational Single Page Content */}
      <main className="flex-1">
        {/* Screen 1: Hero / Introduction */}
        <HeroSection />

        {/* Screen 2: Content Overview */}
        <OverviewSection />

        {/* Screen 3: Đại hội IX (2001) */}
        <CongressIXSection />

        {/* Screen 4: Đại hội X (2006) */}
        <CongressXSection />

        {/* Screen 5: Phát triển kinh tế biển Việt Nam */}
        <MaritimeSection />

        {/* Screen 6: Kết luận */}
        <ConclusionSection />

        {/* Interactive Assessment: Quiz Ôn tập kiến thức */}
        <QuizSection />
      </main>

      {/* Academic Footer */}
      <Footer />
    </div>
  );
};

export default App;
