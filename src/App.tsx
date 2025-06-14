import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <BackgroundAnimation />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;