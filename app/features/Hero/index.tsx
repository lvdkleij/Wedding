import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
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
  scrollY: MotionValue<number>;
}

const FloatingStar: React.FC<FloatingStarProps> = ({ left, top, delay, size, scaleFactor, scrollY }) => {
  // Calculate the star's size based on the scale factor.
  const computedSize = `${parseInt(size, 10) * scaleFactor}px`;
  // Create a parallax effect: the star's vertical position is offset by 20% of the scroll value.
  const parallax = useTransform(scrollY, (value) => value * 0.2);

  return (
    // Outer container applies the parallax (scroll-based) transform.
    <motion.div style={{ position: 'absolute', left, top, y: parallax }}>
      {/* Inner image animates with a gentle floating motion. */}
      <motion.img
        src="/svgs/etoile.svg"
        alt="Etoile"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          delay,
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ width: computedSize, height: computedSize }}
      />
    </motion.div>
  );
};

const floatingStars = [
  { left: '10%', top: '10%', delay: 0, size: '40px' },
  { left: '70%', top: '20%', delay: 0.5, size: '40px' },
  { left: '30%', top: '60%', delay: 1, size: '50px' },
  { left: '80%', top: '80%', delay: 1.5, size: '50px' },
  { left: '20%', top: '70%', delay: 2, size: '30px' },
  { left: '90%', top: '30%', delay: 2.5, size: '60px' },
];

const Index: React.FC = () => {
  // Create a scrollY motion value to track the vertical scroll position.
  const { scrollY } = useScroll();
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const computeScaleFactor = (width: number) => {
      const baseWidth = 768;
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

        {/* Floating etoile.svg images with dynamic scaling and parallax effect */}
        {floatingStars.map((star, index) => (
          <FloatingStar
            key={index}
            left={star.left}
            top={star.top}
            delay={star.delay}
            size={star.size}
            scaleFactor={scaleFactor}
            scrollY={scrollY}
          />
        ))}
      </div>
    </DefaultPageSection>
  );
};

export default Index;
