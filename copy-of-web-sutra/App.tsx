import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
