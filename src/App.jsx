import React, { useState, useEffect } from 'react';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import UIUX from './components/UIUX';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved;
    }
    return 'dark'; // default to premium dark mode
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  const particleColors = isDark
    ? ["#7c3aed", "#2563eb", "#a855f7", "#3b82f6"]
    : ["#1e293b", "#3b82f6", "#475569", "#2563eb"];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background-custom text-text-custom font-sans transition-colors duration-300">
      {/* Fixed Particle Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={particleColors}
          particleCount={isDark ? 280 : 160}
          particleSpread={isDark ? 15 : 18}
          speed={isDark ? 0.05 : 0.03}
          particleBaseSize={isDark ? 80 : 45}
          moveParticlesOnHover={true}
          particleHoverFactor={isDark ? 2 : 1.2}
          alphaParticles={true}
          sizeRandomness={1.5}
          cameraDistance={25}
        />
      </div>

      {/* Global gradient blobs for atmosphere */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="animate-blob absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.03] dark:opacity-10 transition-opacity duration-300"
             style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}></div>
        <div className="animate-blob animation-delay-2000 absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.03] dark:opacity-10 transition-opacity duration-300"
             style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }}></div>
        <div className="animate-blob animation-delay-4000 absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.03] dark:opacity-10 transition-opacity duration-300"
             style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}></div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <Hero />
          <About />
          <TechStack theme={theme} />
          <Projects />
          <UIUX />
          <Services />
          <Timeline />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
