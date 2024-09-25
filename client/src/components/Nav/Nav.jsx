import React, { useState } from 'react';
// import logo from './path-to-your-logo.png'; // Replace with the actual path to your logo

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-4 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          {/* <img src={logo} alt="Logo" className="h-10 mr-3" /> */}
          <h1 className="text-white text-xl font-bold">Your Agency Name</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white text-xl">Home</a>
          <a href="#about" className="text-white text-xl">About</a>
          <a href="#services" className="text-white text-xl">Services</a>
          <a href="#contact" className="text-white text-xl">Contact</a>
        </div>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <a href="#home" className="text-white text-xl">Home</a>
          <a href="#about" className="text-white text-xl">About</a>
          <a href="#services" className="text-white text-xl">Services</a>
          <a href="#contact" className="text-white text-xl">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
