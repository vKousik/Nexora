import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full backdrop-blur-md bg-white/10 border border-white/20 px-6 py-3 flex items-center justify-between w-[90%] max-w-4xl shadow-xl">
        {/* Logo */}
        <h1 className="text-lg font-bold text-white tracking-wide">Nexora</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <Link
                to={item.path}
                className="hover:text-purple-300 transition-colors"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className={`md:hidden flex flex-col gap-1 cursor-pointer transition-all duration-300`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "rotate-90 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "-rotate-90 -translate-y-[6px]" : ""
            }`}
          ></span>
        </div>
      </nav>

      {/* Mobile Dropdown Menu with Same Glassmorphism */}
      <div
        className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 w-[90%] max-w-4xl shadow-xl md:hidden transition-all duration-500 ease-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* Glass reflection */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

        <ul className="relative flex flex-col items-center gap-1 py-6 text-white font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 px-6 mx-4 rounded-xl hover:bg-white/10 hover:text-purple-300 transition-all duration-300 hover:shadow-lg hover:backdrop-blur-sm border border-transparent hover:border-white/20"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
