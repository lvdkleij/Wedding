import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import DefaultPageSection from '~/layout/DefaultPageSection';

const LocationSection: React.FC = () => {
  // Get the current scroll position
  const { scrollY } = useScroll();

  // Create a parallax effect by mapping scrollY to a smaller movement value.
  // Adjust the output range ([0, 50]) to control how much the images lag.
  const parallaxOffset = useSpring(useTransform(scrollY, [0, 2000], [0, 50]), {
    stiffness: 50,
    damping: 30,
  });

  return (
    <DefaultPageSection className="relative bg-white min-h-screen overflow-hidden">
      {/* Background image: Top left with parallax container */}
      <motion.div className="absolute w-1/4" style={{ top: '20%', left: '5%', y: parallaxOffset }}>
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/images/chatteau.jpg" // Replace with your left image path
            alt="Venue - top left view"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Background image: Bottom right with parallax container */}
      <motion.div className="absolute w-1/4" style={{ bottom: '10%', right: '5%', y: parallaxOffset }}>
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/images/chatteau.jpg" // Replace with your right image path
            alt="Venue - bottom right view"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Text container placed at the top */}
      <div className="relative z-10 container mx-auto pt-16 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center text-gray-900 mb-6 leading-tight"
        >
          Our Venue
          <br />A beautiful location in southern France
        </motion.h1>
      </div>
    </DefaultPageSection>
  );
};

export default LocationSection;
