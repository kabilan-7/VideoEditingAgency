import React from 'react';

const BackgroundVideo = ({ videoSrc }) => {
  return (
    <div className="bg-black relative h-screen overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        width="00" // Change this value as needed
        height="100" // Change this value as needed
      >
        <source src="video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Vision Into Reality
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Stunning video edits for every occasion. Let’s craft visuals that captivate your audience.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
