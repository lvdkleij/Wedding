import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DefaultPageSection from '~/layout/DefaultPageSection';

const headerLines = ["It's happening:", 'lucas & melisa', 'are getting', 'married!'];

interface HeaderLineProps {
  text: string;
  delay: number;
}

const HeaderLine: React.FC<HeaderLineProps> = ({ text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex relative justify-center items-center text-[14vw] md:text-[12.5vw] lg:text-[9vw] leading-[0.9]"
  >
    <h1 className="relative">
      <span className="p-[1rem]">{text}</span>
    </h1>
  </motion.div>
);

interface FloatingStarProps {
  left: string;
  top: string;
  delay: number;
  size: string;
  scaleFactor: number;
}

const FloatingStar: React.FC<FloatingStarProps> = ({ left, top, delay, size, scaleFactor }) => {
  // Calculate a new size based on the scale factor
  const computedSize = `${parseInt(size, 10) * scaleFactor}px`;

  return (
    <motion.img
      src="/svgs/etoile.svg"
      alt="Etoile"
      className="absolute"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ left, top, width: computedSize, height: computedSize }}
    />
  );
};

const floatingStars = [
  { left: '10%', top: '10%', delay: 0, size: '40px' },
  { left: '70%', top: '20%', delay: 0.5, size: '50px' },
  { left: '30%', top: '60%', delay: 1, size: '50px' },
  { left: '80%', top: '80%', delay: 1.5, size: '60px' },
  { left: '20%', top: '70%', delay: 2, size: '30px' },
  { left: '90%', top: '30%', delay: 2.5, size: '70px' },
];

const Index: React.FC = () => {
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const computeScaleFactor = (width: number) => {
      const baseWidth = 1200;
      return width < baseWidth ? width / baseWidth : 1;
    };

    const handleResize = () => {
      setScaleFactor(computeScaleFactor(window.innerWidth));
    };

    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DefaultPageSection className="min-h-screen w-full bg-[#f3eee8] flex flex-col items-center justify-center pt-[9rem] lg:pt-[15rem] pb-[13rem] relative">
      <div className="relative w-full h-full">
        {/* Header text with staggered animations */}
        <div className="relative text-center">
          {headerLines.map((line, index) => (
            <HeaderLine key={index} text={line} delay={index * 0.2} />
          ))}
        </div>

        {/* Floating etoile.svg images with varying sizes and dynamic scaling */}
        {floatingStars.map((star, index) => (
          <FloatingStar
            key={index}
            left={star.left}
            top={star.top}
            delay={star.delay}
            size={star.size}
            scaleFactor={scaleFactor}
          />
        ))}
      </div>
    </DefaultPageSection>
  );
};

export default Index;
