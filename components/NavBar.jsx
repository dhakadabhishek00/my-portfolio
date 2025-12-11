import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink- 0">
            <a href="#home" className="text-2xl font-bold tracking-wide">
              MyPortfolio
            </a>

          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/about" className="hover:text-indigo-400 transition">About</a>
            <a href="/projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="/skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="/contact" className="hover:text-indigo-400 transition">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <a href="/about" className="block hover:text-indigo-400">About</a>
          <a href="/projects" className="block hover:text-indigo-400">Projects</a>
          <a href="/skills" className="block hover:text-indigo-400">Skills</a>
          <a href="/contact" className="block hover:text-indigo-400">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;