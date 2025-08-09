import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full backdrop-blur-md bg-white/10 border border-white/20 px-6 py-3 flex items-center justify-between w-[90%] max-w-4xl">
      {/* Logo */}
      <h1 className="text-lg font-bold text-white tracking-wide">
        Nexora
      </h1>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            <Link to={item.path} className="hover:text-purple-300 transition-colors">
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        ))}
      </ul>

      

      {/* Mobile Menu Button */}
      <div className="md:hidden flex flex-col gap-1 cursor-pointer">
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
      </div>
    </nav>
  );
};

export default Navbar;
