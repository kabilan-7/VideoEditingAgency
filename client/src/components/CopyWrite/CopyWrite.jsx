import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear(); // To dynamically update the year

  return (
    <footer className="bg-black text-gray-500 py-6 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm">
          &copy; {currentYear} <span className="text-orange-500 font-semibold">[Your Agency Name]</span>. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
};

export default Copyright;
