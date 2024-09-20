import React from 'react';
// import logo from './path-to-your-logo.png'; // Replace with the actual path to your logo

const Nav = () => {
  return (
    <nav className="bg-black -800 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          {/* <img src={logo} alt="Logo" className="h-10 mr-3" /> */}
          <h1 className="text-white text-xl font-bold">Your Agency Name</h1>
        </div>
        <div className="space-x-6">
          <a href="#home" className="text-white text-xl ">Home</a>
          <a href="#about" className="text-white text-xl ">About</a>
          <a href="#services" className="text-white text-xl ">Services</a>
          <a href="#contact" className="text-white text-xl ">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
