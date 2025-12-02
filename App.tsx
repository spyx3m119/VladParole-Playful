import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import ToolsPage from './components/ToolsPage';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'work' | 'about' | 'tools'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-[#0f1014] text-white selection:bg-purple-500 selection:text-white">
      
      {/* Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Main Content */}
      <main className="relative z-10">
        <Navbar 
          onNavigate={setCurrentView} 
          onOpenContact={() => setIsContactOpen(true)} 
        />
        
        {currentView === 'home' && (
          <>
            <Hero onNavigate={setCurrentView} />
            <Projects />
            <Footer onOpenContact={() => setIsContactOpen(true)} />
          </>
        )}

        {currentView === 'work' && (
          <>
            <WorkPage />
            <Footer onOpenContact={() => setIsContactOpen(true)} />
          </>
        )}

        {currentView === 'about' && (
          <>
            <AboutPage />
            <Footer onOpenContact={() => setIsContactOpen(true)} />
          </>
        )}

        {currentView === 'tools' && (
          <>
            <ToolsPage />
            <Footer onOpenContact={() => setIsContactOpen(true)} />
          </>
        )}
      </main>
      
    </div>
  );
};

export default App;