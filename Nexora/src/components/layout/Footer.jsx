import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Nexora</h2>
          <p className="text-sm opacity-80">
            Your vision, our code. We craft digital solutions that bring ideas to life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:opacity-100 transition cursor-pointer">Home</li>
            <li className="hover:opacity-100 transition cursor-pointer">About</li>
            <li className="hover:opacity-100 transition cursor-pointer">Services</li>
            <li className="hover:opacity-100 transition cursor-pointer">Portfolio</li>
            <li className="hover:opacity-100 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, color: "hover:text-blue-400" },
              { icon: <FaTwitter />, color: "hover:text-sky-400" },
              { icon: <FaLinkedinIn />, color: "hover:text-blue-300" },
              { icon: <FaInstagram />, color: "hover:text-pink-300" },
            ].map((item, i) => (
              <div
                key={i}
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 ${item.color} transition cursor-pointer`}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-sm opacity-80 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Nexora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
