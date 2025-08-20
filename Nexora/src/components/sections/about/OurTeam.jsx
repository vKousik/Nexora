import React, { useState, useEffect, useRef } from 'react';


const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white relative overflow-hidden py-20">
        <div className="w-full border-t border-gray-700 my-12"></div>
      {/* Quantum Field Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="neuralPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#8b5cf6" />
              <line x1="50" y1="50" x2="150" y2="50" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="50" x2="50" y2="150" stroke="#ec4899" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#neuralPattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Futuristic Header */}
        <div className={`text-center mb-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 blur-2xl opacity-50 animate-pulse"></div>
            <h2 className="relative text-7xl md:text-9xl font-black"style={{ fontFamily: "'Comfortaa', sans-serif" }}>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">THE</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">NEXORA</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">COLLECTIVE</span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Four minds, infinite possibilities. Where individual brilliance converges into collective genius.
          </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default TeamSection;