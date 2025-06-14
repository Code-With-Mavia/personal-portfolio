import { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const colors = ['#00d4ff', '#8b5cf6', '#00ff88', '#ff6b6b'];
      const newParticles = [];
      for (let i = 0; i < 60; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.6 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    const animateParticles = () => {
      setParticles(prev =>
        prev.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;

          return { ...particle, x: newX, y: newY };
        })
      );
    };

    const intervalId = setInterval(animateParticles, 50);
    const handleResize = () => generateParticles();

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden cursor-none">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

      {/* Cyberpunk Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite alternate`
          }}
        />
      ))}

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* SVG Cyberpunk Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="cyberGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(0, 255, 136, 0.3)" />
          </linearGradient>
          <linearGradient id="cyberGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 107, 107, 0.2)" />
          </linearGradient>
        </defs>

        <path d="M0,150 Q400,100 800,150 T1600,150" stroke="url(#cyberGradient1)" strokeWidth="2" fill="none" className="animate-pulse" />
        <path d="M0,350 Q600,300 1200,350 T2400,350" stroke="url(#cyberGradient2)" strokeWidth="1" fill="none" className="animate-pulse delay-500" />
        <path d="M0,550 Q300,500 600,550 T1200,550" stroke="url(#cyberGradient1)" strokeWidth="1" fill="none" className="animate-pulse delay-1000" />

        <g className="animate-pulse delay-1500">
          <rect x="100" y="100" width="2" height="50" fill="rgba(0, 212, 255, 0.2)" />
          <rect x="80" y="120" width="40" height="2" fill="rgba(0, 212, 255, 0.2)" />
          <circle cx="120" cy="121" r="3" fill="rgba(0, 212, 255, 0.3)" />
        </g>

        <g className="animate-pulse delay-2000">
          <rect x="300" y="200" width="2" height="30" fill="rgba(139, 92, 246, 0.2)" />
          <rect x="285" y="215" width="30" height="2" fill="rgba(139, 92, 246, 0.2)" />
          <circle cx="300" cy="216" r="2" fill="rgba(139, 92, 246, 0.3)" />
        </g>
      </svg>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          style={{
            animation: 'scan 8s linear infinite',
            top: '0%'
          }}
        />
      </div>

      {/* Matrix-style Falling Code */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `fall ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
