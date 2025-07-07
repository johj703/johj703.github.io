
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-center items-center">
        <div className="flex space-x-8">
          <a href="#hero" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
