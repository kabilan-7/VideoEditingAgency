import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const StatCard = ({ icon, endValue, label, duration }) => {
  const [value, setValue] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const totalFrames = Math.round(duration * 60); // assuming 60 frames per second
      const increment = endValue / totalFrames;
      let currentFrame = 0;

      const interval = setInterval(() => {
        currentFrame++;
        setValue((prev) => Math.min(prev + increment, endValue));

        if (currentFrame >= totalFrames) {
          clearInterval(interval);
        }
      }, 1000 / 60); // 60 FPS
    }
  }, [inView, controls, endValue, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center text-white"
      initial={{ value: 0 }}
      animate={controls}
      transition={{ duration, ease: "easeOut" }}
    >
      <div className="text-6xl mb-4">{icon}</div>
      <motion.h2 className="text-5xl font-bold">
        {Math.floor(value).toLocaleString()}
      </motion.h2>
      <p className="text-xl">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-black py-16">
      {/* Slogan */}
      <div className="text-center text-white mb-12">
        <h2 className="text-3xl font-semibold">
          In The Language Of Success, <span className="text-orange-500">Our Count</span> Speaks Volumes.
        </h2>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        <StatCard
          icon="👁️"
          endValue={5000000}
          label="Organic Views"
          duration={2}
        />
        <StatCard
          icon="⏰"
          endValue={32000}
          label="Hours Watch Time"
          duration={2.5}
        />
        <StatCard
          icon="🎬"
          endValue={810}
          label="Content Delivered"
          duration={2}
        />
        <StatCard
          icon="🚀"
          endValue={14000}
          label="Leads"
          duration={3}
        />
      </div>
    </section>
  );
};

export default StatsSection;
