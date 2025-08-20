import React, { useState, useEffect, useRef } from 'react';
import {  Sparkles, Users, TrendingUp, Zap, Heart, Lightbulb, Shield } from 'lucide-react';

const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const missionPoints = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "High-Quality Digital Experiences",
      subtitle: "Tailored to client needs",
      description: "We craft bespoke digital solutions that perfectly align with your vision and business objectives, ensuring every detail exceeds expectations.",
      gradient: "from-purple-500 to-violet-600",
      glowColor: "purple-500/20"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Design & Technology Fusion",
      subtitle: "Seamless user journeys",
      description: "Our perfect blend of aesthetic excellence and technical innovation creates intuitive experiences that captivate users and drive engagement.",
      gradient: "from-pink-500 to-rose-600",
      glowColor: "pink-500/20"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable & Reliable Solutions",
      subtitle: "Supporting long-term growth",
      description: "We build robust foundations that grow with your business, ensuring your digital presence remains powerful and adaptable for years to come.",
      gradient: "from-blue-500 to-cyan-600",
      glowColor: "blue-500/20"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Trust, Innovation & Collaboration",
      subtitle: "In every project",
      description: "We foster genuine partnerships built on transparency, creative thinking, and collaborative spirit to deliver exceptional results together.",
      gradient: "from-emerald-500 to-teal-600",
      glowColor: "emerald-500/20"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white relative overflow-hidden py-20">
        <div className="w-full border-t border-gray-700 my-12"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center mb-6">
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
              Our Mission
            </h2>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Driving digital transformation through purpose-driven innovation and unwavering commitment to excellence
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className={`absolute -inset-1 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-lg transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${point.gradient} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <div className="text-white">
                      {point.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: hoveredCard === index ? `linear-gradient(to right, var(--tw-gradient-stops))` : 'none'
                      }}>
                    {point.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`text-lg bg-gradient-to-r ${point.gradient} bg-clip-text text-transparent font-semibold mb-4`}>
                    {point.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {point.description}
                  </p>

                  {/* Animated Border */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${point.gradient} rounded-full transition-all duration-500 ${
                    hoveredCard === index ? 'w-full' : 'w-0'
                  }`}></div>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${point.gradient} opacity-10 rounded-lg transform rotate-45 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700/50">
              <div className="flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
                <Shield className="w-8 h-8 text-green-400 mr-3" />
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Transform Your Digital Presence?
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's collaborate to bring your vision to life with innovative solutions that drive real results.
              </p>
              
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                Start Your Journey
                <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-3000"></div>
    </div>
  );
};

export default MissionSection;