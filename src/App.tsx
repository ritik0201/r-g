import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';

/**
 * Root App component composing Navbar, Home page sections, and Footer.
 */
export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface font-body text-text antialiased selection:bg-gold-200 selection:text-navy-950">
      <Navbar />
      <div className="flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
