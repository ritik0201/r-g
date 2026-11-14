import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { Home } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { ServicesPage } from '@/pages/Services';
import { TrainingPage } from '@/pages/Training';
import { ContactPage } from '@/pages/Contact';

/**
 * ScrollToTop helper component to reset viewport scroll on page transition.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Root App component composing Router, Navbar, Page Routes, Footer, and MobileBottomNav.
 */
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-surface font-body text-text antialiased selection:bg-gold-200 selection:text-navy-950">
        <Navbar />
        <main className="flex-1 pb-14 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    </BrowserRouter>
  );
};

export default App;
