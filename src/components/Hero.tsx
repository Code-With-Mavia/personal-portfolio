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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/30 rotate-45 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-400/30 rotate-12 animate-bounce" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-green-400/30 rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900" />
              </div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-2 border-cyan-400/50">
                <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">MQ</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/50">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Name & Role */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-pulse">
              MAAWIAH QAISER
            </span>
            <div className="absolute inset-0 opacity-20 transform translate-x-1 translate-y-1">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">MAAWIAH QAISER</span>
            </div>
          </h1>

          <h2 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
            Backend Engineer | Python & Django
          </h2>

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
            <a href="mailto:maviaqaiser09@gmail.com" className="hover:scale-110 transition transform">
              <Mail size={28} className="text-cyan-400 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/maawiah-qaiser-10793722b" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform">
              <Linkedin size={28} className="text-purple-400 hover:text-white" />
            </a>
            <a href="https://github.com/Code-With-Mavia" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform">
              <Github size={28} className="text-green-400 hover:text-white" />
            </a>
            <a href="tel:+923362715578" className="hover:scale-110 transition transform">
              <Phone size={28} className="text-yellow-400 hover:text-white" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE MY WORK
              <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse" />
          </div>
          <span className="text-cyan-400 text-xs font-mono">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
