import React from 'react';
import {InfiniteMovingCards} from '../ui/infinite-moving-cards'; // Adjust import path as necessary

const Feedback = () => {
  // Feedback items to be displayed in the InfiniteMovingCards component
  const feedbackItems = [
    {
        name: "John Smith",
        title: "CEO, ABC Corp",
        quote: "The corporate video you created exceeded our expectations. The transitions were smooth, and the overall production quality was fantastic!"
      },
      {
        name: "Emily Johnson",
        title: "Event Manager, XYZ Events",
        quote: "The event highlight reel you edited was simply amazing! It captured the energy of the event perfectly, and we received so much positive feedback."
      },
      {
        name: "Michael Lee",
        title: "Content Creator",
        quote: "My YouTube vlog came out great thanks to your excellent editing. The pacing and the smooth transitions made a huge difference!"
      },
      {
        name: "Sarah Williams",
        title: "Founder, SW Music",
        quote: "The music video you edited was incredible! The color grading and sync with the music were top-notch. Couldn't have asked for better!"
      },
      {
        name: "David Brown",
        title: "Real Estate Agent",
        quote: "The property video tour was just what we needed. Your editing truly showcased the space and features in the best light."
      },
      {
        name: "Jessica Parker",
        title: "Marketing Manager, Fashion House",
        quote: "The product video edits for our social media channels were perfect! The cuts and transitions were smooth, and the overall style matched our brand beautifully."
      },
  ];

  return (
    <div className="feedback-section py-10 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 sm:mb-6">
        What Our Clients Say
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center mb-3 sm:mb-4">
        We take pride in delivering exceptional service. Here's what our clients have to say about their experiences:
      </p>
      <InfiniteMovingCards 
        items={feedbackItems}  
      />
    </div>
  );  
};

export default Feedback;
