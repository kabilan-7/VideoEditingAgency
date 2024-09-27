import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8">About Us</h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          At <span className="text-orange-500 font-semibold">Your Agency Name</span>, we bring stories to life through expert video editing and creative storytelling. Our passion lies in transforming raw footage into professional, engaging, and high-quality videos that resonate with your audience.
        </p>
        <p className="text-xl text-gray-300 text-center mb-12">
          From seamless transitions to stunning color grading and custom motion graphics, we focus on every detail to deliver captivating visual experiences. Whether it’s a brand video, social media clip, or a personal project, we ensure your message stands out.
        </p>
        <p className="text-xl text-gray-300 text-center">
          With years of experience in video production, our team is dedicated to exceeding your expectations. Let us handle the technical side while you focus on telling your story.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
