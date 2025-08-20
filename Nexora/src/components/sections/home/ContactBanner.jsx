import React, { useState } from "react";
import { ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ContactBanner = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
   const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 relative overflow-hidden py-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/10 to-transparent"></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
            Ready to Transform Your 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Digital Vision</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Partner with Nexora to create exceptional web experiences that drive results. 
            Let's discuss your project and bring your ideas to life.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">20+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl overflow-hidden"
            onMouseEnter={() => setHoveredButton('contact')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => navigate("/contact")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative flex items-center" style={{ fontFamily: "'Edu NSW ACT Cursive', cursive"}}>
              <Mail className="w-5 h-5 mr-2" />
              Start Your Project
              <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${hoveredButton === 'contact' ? 'translate-x-1' : ''}`} />
            </div>
          </button>

          
        </div>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm">nexora.website@gmail.com</span>
          </div>
          <div className="flex items-center">
            <IoLogoWhatsapp className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm">+91 6291737343</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-pink-400" />
            <span className="text-sm">Free Consultation</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default ContactBanner