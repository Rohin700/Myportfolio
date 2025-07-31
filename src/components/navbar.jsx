import React from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full px-4 py-2 w-[80%] max-w-2xl transition-opacity duration-300">
      <div className="flex justify-between items-center w-full">
        {/* Desktop Navigation - Buttons take full width equally */}
        <div className="hidden md:flex flex-1 justify-between text-center">
          <a
            href="#home"
            className="flex-1 text-gray-200 hover:text-white transition px-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="flex-1 text-gray-200 hover:text-white transition px-2"
          >
            About
          </a>
          <a
            href="#skills"
            className="flex-1 text-gray-200 hover:text-white transition px-2"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="flex-1 text-gray-200 hover:text-white transition px-2"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="flex-1 text-gray-200 hover:text-white transition px-2"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <div
          className="md:hidden cursor-pointer text-white text-2xl ml-auto"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};
