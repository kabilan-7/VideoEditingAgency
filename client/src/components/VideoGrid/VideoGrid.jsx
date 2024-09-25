import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const videoData = [
  { id: 1, title: 'Video 1', src: 'video1.mp4' },
  { id: 2, title: 'Video 2', src: 'video1.mp4' },
  { id: 3, title: 'Video 3', src: 'video1.mp4' },
  // Add more video data as needed
];

// Custom hook for intersection observer
const useIntersectionObserver = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [elementRef]);

  return isVisible;
};

const videoGridVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
};

const videoItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const VideoGrid = () => {
  const gridRef = useRef(null);
  const isInView = useIntersectionObserver(gridRef); // Use the custom hook

  return (
    <section className="py-10  text-white">
      {/* Slogan Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold">Where Every Video Tells a <span className='text-orange-500'>Story</span> </h2>
        <p className="text-lg md:text-2xl text-gray-300 mt-4">Explore Visual Narratives in Motion</p>
      </div>

      {/* Video Grid Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12"
        ref={gridRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={videoGridVariants}
      >
        {videoData.map((video) => (
          <motion.div
            key={video.id}
            variants={videoItemVariants}
            className="relative overflow-hidden border-2 border-orange-500 p-4 rounded-lg  shadow-[0_4px_10px_rgba(234,88,12,0.6)]"
          >
            <video
              src={video.src}
              className="w-full max-h-[500px] object-contain rounded-md"
              autoPlay
              loop
              muted
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-lg font-bold">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VideoGrid;
