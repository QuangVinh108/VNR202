import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigateToGame?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToGame }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll spy & reading progress
  useEffect(() => {
    const handleScroll = () => {
      // Reading progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      setIsScrolled(window.scrollY > 40);

      // Scroll Spy for active section
      const sections = ['hero', 'overview', 'congress-ix', 'congress-x', 'maritime', 'conclusion'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'congress-ix', label: 'Đại hội IX (2001)' },
    { id: 'congress-x', label: 'Đại hội X (2006)' },
    { id: 'maritime', label: 'Kinh tế Biển', badge: 'Chiến lược' },
    { id: 'conclusion', label: 'Kết luận' },
    { id: 'game', label: 'Trò chơi', isGame: true },
  ];

  const handleNavClick = (linkId: string, isGame?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isGame || linkId === 'game') {
      if (onNavigateToGame) {
        onNavigateToGame();
      } else {
        window.location.hash = '#tro-choi';
      }
      return;
    }

    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Reading Progress Indicator Bar */}
      <div className="w-full bg-heritage-ivoryDark/50 h-[3px]">
        <div
          className="h-full bg-gradient-to-r from-heritage-red via-heritage-gold to-heritage-ocean transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <nav
        className={`px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-heritage-ivory/95 backdrop-blur-md shadow-md border-b border-heritage-gold/30 py-3'
            : 'bg-heritage-ivory/80 backdrop-blur-sm border-b border-heritage-gold/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Subject Emblem */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-heritage-red flex items-center justify-center text-white shadow-sm border border-heritage-gold/40 group-hover:scale-105 transition-transform">
              <span className="font-heading font-black text-xs tracking-wider">CPV</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-heritage-red leading-none">
                VNR202 • Lịch Sử Đảng
              </span>
              <span className="block text-sm sm:text-base font-heading font-bold text-heritage-navy leading-tight group-hover:text-heritage-red transition-colors">
                Đại Hội IX - X & Kinh Tế Biển
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.isGame)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-heritage-red bg-heritage-red/10'
                      : 'text-heritage-navy/80 hover:text-heritage-red hover:bg-heritage-gold/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded ${
                      link.isGame
                        ? 'bg-heritage-red/15 text-heritage-red'
                        : 'bg-heritage-ocean/15 text-heritage-ocean'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-heritage-red rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Actions: Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-heritage-navy hover:bg-heritage-ivoryLight border border-heritage-gold/30 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-heritage-gold/30 pb-2 space-y-1 animate-fade-in bg-white rounded-2xl p-4 shadow-xl border">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.isGame)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-heritage-red text-white'
                      : 'text-heritage-navy hover:bg-heritage-ivory'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : link.isGame
                        ? 'bg-heritage-red/10 text-heritage-red'
                        : 'bg-heritage-ocean/10 text-heritage-ocean'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};
