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
  const computedSize = `${parseInt(size, 10) * scaleFactor}px`;
  const parallax = useTransform(scrollY, (value) => value * 0.1);
  return (
    <motion.div style={{ position: 'absolute', left, top, y: parallax }}>
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

interface FloatingTextProps {
  left: string;
  top: string;
  delay: number;
  text: string;
  fontSize: string;
  color: string;
  scrollY: MotionValue<number>;
  scaleFactor: number;
}

const FloatingText: React.FC<FloatingTextProps> = ({ top, delay, text, fontSize, color, scrollY, scaleFactor }) => {
  const parallax = useTransform(scrollY, (value) => value * 0.1);

  return (
    // Parent container centres the element horizontally.
    <div
      style={{
        position: 'absolute',
        left: '50%', // Always at 50% of the parent's width.
        top, // Use the provided top value.
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
      }}
    >
      <motion.div
        style={{ y: parallax }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 1 }}
      >
        <span className="text-[#f7c1ca] text-[12vw] max-w-[30%]">{text}</span>
      </motion.div>
    </div>
  );
};

const floatingStars = [
  { left: '10%', top: '10%', delay: 0, size: '40px' },
  { left: '70%', top: '20%', delay: 0.5, size: '60px' },
  { left: '30%', top: '60%', delay: 1, size: '50px' },
  { left: '80%', top: '80%', delay: 1.5, size: '70px' },
  { left: '20%', top: '70%', delay: 2, size: '30px' },
  { left: '90%', top: '30%', delay: 2.5, size: '80px' },
];

const Index: React.FC = () => {
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

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DefaultPageSection className="min-h-screen w-full bg-[#f3eee8] relative pt-[9rem] lg:pt-[15rem] pb-[13rem]">
      <div className="relative w-full h-full">
        {/* Floating stars behind the text */}
        <div className="absolute inset-0 z-0">
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

        {/* Very large, floating coloured text behind the header text */}
        <div className="absolute inset-0 z-5">
          <FloatingText
            left="50%" // Not used in this implementation, the parent container centres the text.
            top="85%" // Adjust as needed to position below the header.
            delay={1}
            text="A Celebration of Love"
            fontSize="10rem" // Base font size.
            color="#FF6F61"
            scrollY={scrollY}
            scaleFactor={scaleFactor}
          />
        </div>

        {/* Header text in front */}
        <div className="relative text-center z-10">
          {headerLines.map((line, index) => (
            <HeaderLine key={index} text={line} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </DefaultPageSection>
  );
};

export default Index;
