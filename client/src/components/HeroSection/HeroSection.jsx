import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';
const HeroSection = () => {
  let words="Transform Your Vision Into Reality with Stunning Video Edits"
  return (
    <div>
    <section className="bg-cover bg-center h-screen flex items-center justify-center text-white text-center px-4" >
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <TextGenerateEffect words={words}/> 
        
        </h1>
        <p className="text-lg md:text-xl mb-8">
          From corporate videos to personal projects, we bring your stories to life with professional editing and creative flair.
          Let’s craft visuals that captivate your audience.
        </p>
        <div className="space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-500 text-white font-bold py-3 px-6 rounded transition duration-300">
            See Our Work
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
