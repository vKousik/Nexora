import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 cursor-pointer hover:scale-105 transition">
          Nexora
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {["Home", "About", "Services", "Portfolio", "Contact"].map(
            (item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            )
          )}
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
