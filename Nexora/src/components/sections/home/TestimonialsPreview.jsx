

import React, { useState } from 'react';
import { User, TrendingUp, Eye, Users, Zap, Link, Shield } from 'lucide-react';

const ClientReviewsMasonry = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      category: "Design",
      subcategory: "UI/UX",
      description: "Beautiful user interfaces",
      review: "Nexora created a stunning website for our company that perfectly captures our brand identity. The user experience is flawless and our conversion rates increased by 180% within the first month of launch!",
      avatar: "SJ",
      size: "small",
      icon: TrendingUp
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      category: "Performance",
      subcategory: "Speed",
      description: "Lightning-fast loading",
      review: "The website Nexora built for us loads incredibly fast and handles our high traffic seamlessly. Their optimization techniques and clean code architecture exceeded all our performance expectations.",
      avatar: "MC",
      size: "small",
      icon: Eye
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, StartupXYZ",
      category: "Development",
      subcategory: "Full-Stack",
      description: "Complete web solutions",
      review: "Nexora's full-stack development expertise is remarkable. They built our entire e-commerce platform from scratch, including custom features, payment integration, and admin dashboard. The attention to detail and code quality is exceptional.",
      avatar: "ER",
      size: "large",
      icon: Users
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager, DataCorp",
      category: "Responsive",
      subcategory: "Mobile-First",
      description: "Perfect on every device",
      review: "The responsive design Nexora delivered works flawlessly across all devices. Our mobile traffic engagement increased by 300% and the website looks pixel-perfect on smartphones, tablets, and desktops.",
      avatar: "DK",
      size: "large",
      icon: Zap
    },
    {
      id: 5,
      name: "Jessica Taylor",
      role: "Marketing Director, BrandBoost",
      category: "SEO",
      subcategory: "Optimization",
      description: "Search engine friendly",
      review: "Nexora built our website with SEO best practices from day one. We saw a 400% increase in organic traffic within 3 months. Their technical SEO implementation and site structure are top-notch.",
      avatar: "JT",
      size: "small",
      icon: Link
    },
    {
      id: 6,
      name: "Robert Wilson",
      role: "VP Operations, LogiFlow",
      category: "Security",
      subcategory: "Protection",
      description: "Enterprise-grade security",
      review: "The security measures Nexora implemented in our website are enterprise-grade. SSL certificates, secure authentication, data encryption - everything is handled professionally. We feel completely confident about our users' data safety.",
      avatar: "RW",
      size: "small",
      icon: Shield
    }
  ];

  const getCardClasses = (size) => {
    return size === 'large' 
      ? 'col-span-2 row-span-2 h-80' 
      : 'col-span-1 row-span-1 h-48';
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-900/4 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto z-10">
        <div className="text-4xl md:text-5xl font-bold text-center mb-12">
          <div style={{ fontFamily: "'Comfortaa', sans-serif" }}>
           What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Clients</span> Say
           </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the industry leaders who trust us with their most important projects.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 auto-rows-min">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`${getCardClasses(review.size)} bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                hoveredCard === review.id 
                  ? 'transform scale-[1.02] shadow-2xl border-purple-500/50 bg-gray-800/50' 
                  : 'hover:border-gray-700/50'
              }`}
              onMouseEnter={() => setHoveredCard(review.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 transition-opacity duration-300 pointer-events-none"
                   style={{ opacity: hoveredCard === review.id ? 1 : 0 }} />
              
              <div className="relative z-10 h-full flex flex-col">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{review.category}</h3>
                    {review.size === 'small' && (
                      <>
                        <p className="text-white/80 font-medium text-sm">{review.subcategory}</p>
                        <p className="text-gray-400 text-xs">{review.description}</p>
                      </>
                    )}
                  </div>
                  <review.icon className="w-6 h-6 text-purple-400" />
                </div>

                {/* Large card additional content */}
                {review.size === 'large' && (
                  <div className="mb-4">
                    <p className="text-white/80 font-medium text-base mb-2">{review.subcategory}</p>
                    <p className="text-gray-400 text-sm">{review.description}</p>
                  </div>
                )}

                {/* Client Info */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 transition-transform duration-300"
                       style={{ transform: hoveredCard === review.id ? 'scale(1.1)' : 'scale(1)' }}>
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-sm truncate">{review.name}</h4>
                    <p className="text-gray-400 text-xs truncate">{review.role}</p>
                  </div>
                </div>

                {/* Review Text */}
                <div className="flex-1 overflow-hidden">
                  <p className={`text-gray-300 leading-relaxed ${
                    review.size === 'large' ? 'text-sm' : 'text-xs'
                  }`}>
                    "{review.review}"
                  </p>
                </div>

                {/* Footer */}
                <div className={`mt-4 pt-3 border-t border-gray-800/50 transition-opacity duration-300 ${
                  hoveredCard === review.id ? 'opacity-100' : 'opacity-70'
                }`}>
                  <div className="flex items-center text-xs text-gray-500">
                    <User className="w-3 h-3 mr-1" />
                    Verified Client
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer">
            <User className="w-5 h-5 mr-2" />
            Join Our Happy Clients
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewsMasonry;