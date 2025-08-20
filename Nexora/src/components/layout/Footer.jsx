import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-light text-white mb-6 leading-tight">
              Nexora
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Your vision, our code. We craft digital solutions that bring ideas to life.
            </p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors cursor-pointer">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors cursor-pointer">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">FAQ</a></li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-white font-medium mb-6">Legals</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Licensing</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">Follow Us</p>
            
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, color: "hover:text-blue-400" },
                { icon: <FaTwitter />, color: "hover:text-sky-400" },
                { icon: <FaLinkedinIn />, color: "hover:text-blue-300" },
                { icon: <FaInstagram />, color: "hover:text-pink-300" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700 transition cursor-pointer ${item.color}`}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Line */}
          <div className="text-center mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
