import { useEffect, useRef } from 'react';
import HeroSection from "../../components/sections/home/HeroSection";
import ServicesPreview from "../../components/sections/home/ServicesPreview";
import PortfolioPreview from "../../components/sections/home/PortfolioPreview";
import TestimonialsPreview from "../../components/sections/home/TestimonialsPreview";
import ContactBanner from "../../components/sections/home/ContactBanner";

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observers = [];
    
    // Create intersection observer for each section
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '-50px 0px'
          }
        );
        
        observer.observe(section);
        observers.push(observer);
      }
    });

    // Cleanup observers
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Add custom CSS for smooth scrolling and animations */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        .section-transition {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .parallax-bg {
          transition: transform 0.3s ease-out;
        }
      `}</style>

      {/* Hero with gradient and bold animations */}
      <div 
        ref={addToRefs}
        className="section-transition opacity-100 transform translate-y-0"
      >
        <HeroSection />
      </div>

      {/* Neon-glow services section */}
      <section 
        ref={addToRefs}
        className="bg-black-600 section-transition relative"
      >
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <ServicesPreview />
        </div>
      </section>

      {/* Portfolio with card hover effects */}
      <section 
        ref={addToRefs}
        className="py-16 bg-black-500 section-transition relative"
      >
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black-500/20 pointer-events-none"></div>
        <div className="relative z-10">
          <PortfolioPreview />
        </div>
      </section>

      {/* Testimonials with glassmorphism */}
      <section 
        ref={addToRefs}
        className="py-6 mb-10 bg-black-500 bg-opacity-90 section-transition relative"
      >
        {/* Transition gradient */}

        <div className="relative z-10">
          <TestimonialsPreview />
        </div>
      </section>
      <div className="w-full border-t border-gray-700 my-12"></div>

      {/* Contact CTA with pulse effect */}
      <section 
        ref={addToRefs}
        className=" bg-black-100 section-transition relative"
      >
        {/* Final transition gradient */}
        <div className="absolute inset-0 bg-black-500 pointer-events-none"></div>
        <div className="relative z-10">
          <ContactBanner />
        </div>
      </section>
    </div>
  );
};

export default Home;