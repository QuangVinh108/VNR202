import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { OverviewSection } from './sections/OverviewSection';
import { CongressIXSection } from './sections/CongressIXSection';
import { CongressXSection } from './sections/CongressXSection';
import { MaritimeSection } from './sections/MaritimeSection';
import { ConclusionSection } from './sections/ConclusionSection';
import { Footer } from './components/Footer';
import { GamePage } from './pages/GamePage';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'game'>(() => {
    return window.location.hash === '#tro-choi' || window.location.hash === '#game'
      ? 'game'
      : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#tro-choi' || window.location.hash === '#game') {
        setCurrentView('game');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateToGame = () => {
    window.location.hash = '#tro-choi';
    setCurrentView('game');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    if (window.location.hash === '#tro-choi' || window.location.hash === '#game') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'game') {
    return <GamePage onBackToHome={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-heritage-ivory text-heritage-dark font-sans selection:bg-heritage-red selection:text-white flex flex-col">
      {/* Sticky Header with Reading Progress Bar */}
      <Navbar onNavigateToGame={navigateToGame} />

      {/* Main Educational Single Page Content */}
      <main className="flex-1">
        {/* Screen 1: Hero / Introduction */}
        <HeroSection onOpenGame={navigateToGame} />

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
      </main>

      {/* Academic Footer */}
      <Footer onOpenGame={navigateToGame} />
    </div>
  );
};

export default App;
