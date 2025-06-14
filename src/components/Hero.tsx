import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Building backend systems that power the future — Python, Django, FastAPI, Firebase.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Name & Role */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-pulse">
              MAAWIAH QAISER
            </span>
            <div className="absolute inset-0 opacity-20 transform translate-x-1 translate-y-1">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">MAAWIAH QAISER</span>
            </div>
          </h1>

          <h2 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
            Backend Engineer | Python & Django
          </h2>

          {/* Available for Opportunities moved here */}
          <div className="flex items-center justify-center gap-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/50 inline-flex mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-green-400 text-sm font-semibold">Available for Opportunities</span>
          </div>

          {/* Description Tags */}
          <div className="mb-6 flex flex-wrap justify-center gap-4 text-gray-300">
            <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-cyan-400/30">📍 Lahore, Pakistan</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-purple-400/30">🎓 BSCS (2021–2025)</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-green-400/30">🏛 University of Central Punjab</span>
          </div>

          {/* Animated Typing Terminal */}
          <div className="mb-10 bg-gray-900/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 max-w-4xl mx-auto font-mono text-left text-lg text-green-400">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-green-400 ml-2">~/portfolio</span>
            </div>
            <div>
              <span>$ </span>
              {text}
              <span className="ml-1 animate-blink">|</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:maviaqaiser09@gmail.com">
              <Mail size={28} className="text-cyan-400" />
            </a>
            <a href="https://linkedin.com/in/maawiah-qaiser-10793722b" target="_blank" rel="noopener noreferrer">
              <Linkedin size={28} className="text-purple-400" />
            </a>
            <a href="https://github.com/Code-With-Mavia" target="_blank" rel="noopener noreferrer">
              <Github size={28} className="text-green-400" />
            </a>
            <a href="tel:+923362715578">
              <Phone size={28} className="text-yellow-400" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 rounded-full text-white font-bold text-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE MY WORK
              <ChevronDown size={24} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
