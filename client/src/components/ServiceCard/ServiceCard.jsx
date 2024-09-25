import React from 'react';
import { FaVideo, FaPalette, FaRegLightbulb, FaMusic } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-black border-2 border-orange-500 rounded-lg p-6 sm:p-8 text-center text-white shadow-[0_4px_10px_rgba(234,88,12,0.6)]">
      <div className="text-4xl sm:text-5xl text-orange-500 mb-4 sm:mb-6">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4">{title}</h3>
      <p className="text-gray-300 text-base sm:text-xl text-justify">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">Our Services</h2>
        <p className="text-base sm:text-lg text-gray-400">
          Transforming your footage into captivating visual experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 container mx-auto px-4 sm:px-0">
        <ServiceCard
          icon={<FaVideo />}
          title="Video Editing"
          description="We craft compelling stories from raw footage, creating dynamic and professional videos."
        />
        <ServiceCard
          icon={<FaPalette />}
          title="Color Grading"
          description="Enhance the visual mood of your videos with expert color grading that aligns with your brand."
        />
        <ServiceCard
          icon={<FaRegLightbulb />}
          title="Motion Graphics"
          description="Custom motion graphics to bring your ideas to life, making your content visually engaging."
        />
      </div>
    </section>
  );
};

export default ServicesSection;
